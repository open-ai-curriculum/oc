#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const nodesRoot = path.join(repoRoot, 'domains', 'mathematics', 'nodes');
const REQUIRED_POLICY_VERSION = '1.0';

let hasFailure = false;

function fail(message) {
  hasFailure = true;
  console.error(message);
}

function read(relativeOrAbsolutePath) {
  return fs.readFileSync(relativeOrAbsolutePath, 'utf8');
}

function loadYamlAsJson(absolutePath) {
  const script = [
    'import json, sys, yaml',
    'from pathlib import Path',
    'path = Path(sys.argv[1])',
    'print(json.dumps(yaml.safe_load(path.read_text())))',
  ].join('\n');

  return JSON.parse(
    childProcess.execFileSync('python3', ['-c', script, absolutePath], {
      cwd: repoRoot,
      encoding: 'utf8',
    })
  );
}

function parseFailureModes(markdown) {
  const headingModes = [...markdown.matchAll(/^###\s+([A-Za-z0-9-]+)\s+(.+)$/gm)].map((match) => match[1].trim());
  if (headingModes.length > 0) {
    return headingModes;
  }

  return [...markdown.matchAll(/^\s*-\s+`([^`]+)`:\s+(.*)$/gm)].map((match) => match[1].trim());
}

function detectRetentionRequirement(config, verificationText) {
  if (config.mastery && Number(config.mastery.retention_check_days || 0) > 0) {
    return true;
  }

  return /G4|retention|delayed recheck/i.test(verificationText);
}

function familyBucket(value) {
  const normalized = String(value || '').toLowerCase();
  if (normalized.startsWith('direct')) {
    return 'direct';
  }
  if (normalized === 'explanation') {
    return 'explanation';
  }
  if (normalized === 'error_diagnosis') {
    return 'error_diagnosis';
  }
  if (normalized === 'transfer') {
    return 'transfer';
  }
  if (normalized === 'retention') {
    return 'retention';
  }
  if (normalized === 'prerequisite_probe') {
    return 'prerequisite_probe';
  }
  return normalized;
}

function parseSchemaMinimums(markdown) {
  const mins = {};
  for (const match of markdown.matchAll(/-\s+(\d+)\s+(direct execution|explanation|error diagnosis|transfer)\s+items?/gi)) {
    mins[match[2].toLowerCase()] = Number(match[1]);
  }
  return mins;
}

function countFamilies(items) {
  const counts = {
    direct: 0,
    explanation: 0,
    error_diagnosis: 0,
    transfer: 0,
    retention: 0,
    prerequisite_probe: 0,
  };

  for (const item of items) {
    const bucket = familyBucket(item.item_family || item.family);
    if (counts[bucket] !== undefined) {
      counts[bucket] += 1;
    }
  }

  return counts;
}

function collectItemFailureTargets(item) {
  const values = [];
  if (Array.isArray(item.dominant_failure_modes_if_incorrect)) {
    values.push(...item.dominant_failure_modes_if_incorrect);
  }
  if (Array.isArray(item.dominant_failure_mode_targets)) {
    values.push(...item.dominant_failure_mode_targets);
  }
  if (item.dominant_failure_mode) {
    values.push(item.dominant_failure_mode);
  }
  return [...new Set(values.map(String))];
}

function validateNode(directory) {
  const nodeRoot = path.join(nodesRoot, directory);
  const config = loadYamlAsJson(path.join(nodeRoot, 'node-config.yaml'));
  const verificationText = read(path.join(nodeRoot, 'verification-model.md'));
  const failureModes = parseFailureModes(read(path.join(nodeRoot, 'failure-taxonomy.md')));
  const bank = JSON.parse(read(path.join(nodeRoot, 'item-bank.json')));
  const schemaText = read(path.join(nodeRoot, 'item-bank-schema.md'));
  const items = Array.isArray(bank.items) ? bank.items : [];
  const counts = countFamilies(items);
  const schemaMinimums = parseSchemaMinimums(schemaText);
  const retentionRequired = detectRetentionRequirement(config, verificationText);
  const dependencyCount = Array.isArray(config.dependencies) ? config.dependencies.length : 0;
  const prerequisiteProbeTarget = Math.min(2, dependencyCount);
  const hasMasteryConfig = Boolean(config.mastery && config.verification_gates);
  const minimumTotalItems = hasMasteryConfig ? 11 + prerequisiteProbeTarget : 10 + prerequisiteProbeTarget;
  const minimumDirect = hasMasteryConfig ? 4 : 3;

  if (!Array.isArray(bank.items) || bank.items.length === 0) {
    fail(`Empty item bank: ${path.relative(repoRoot, path.join(nodeRoot, 'item-bank.json'))}`);
    return;
  }

  if (bank.policy_version !== REQUIRED_POLICY_VERSION) {
    fail(`Missing or outdated mathematics bank policy version in ${directory}: ${bank.policy_version || 'none'}`);
  }

  if (items.length < minimumTotalItems) {
    fail(`Insufficient total item volume for ${directory}: ${items.length}/${minimumTotalItems}`);
  }

  for (const item of items) {
    if (/Representative direct task|Explain why the chosen structure fits the situation/i.test(item.prompt || '')) {
      fail(`Placeholder prompt still present in ${path.relative(repoRoot, path.join(nodeRoot, 'item-bank.json'))}: ${item.item_id || item.family}`);
    }
  }

  if (counts.direct < minimumDirect) {
    fail(`Missing direct item depth for ${directory}: ${counts.direct}/${minimumDirect}`);
  }
  if (counts.explanation < 2) {
    fail(`Missing explanation item depth for ${directory}: ${counts.explanation}/2`);
  }
  if (counts.error_diagnosis < 2) {
    fail(`Missing error diagnosis item depth for ${directory}: ${counts.error_diagnosis}/2`);
  }
  if (counts.transfer < 2) {
    fail(`Missing transfer item depth for ${directory}: ${counts.transfer}/2`);
  }
  if (retentionRequired && counts.retention < 1) {
    fail(`Missing retention item coverage for ${directory}`);
  }
  if (counts.retention < 1) {
    fail(`Missing retention item depth for ${directory}`);
  }
  if (prerequisiteProbeTarget > 0 && counts.prerequisite_probe < prerequisiteProbeTarget) {
    fail(`Missing prerequisite probe depth for ${directory}: ${counts.prerequisite_probe}/${prerequisiteProbeTarget}`);
  }

  const directCoreCount = items.filter((item) => familyBucket(item.item_family || item.family) === 'direct' && (item.difficulty_band || 'core') === 'core').length;
  const directEdgeCount = items.filter((item) => familyBucket(item.item_family || item.family) === 'direct' && ['stretch', 'edge', 'diagnostic'].includes(item.difficulty_band || '')).length;
  if (directCoreCount < 2) {
    fail(`Insufficient core direct coverage for ${directory}: ${directCoreCount}/2`);
  }
  if (directEdgeCount < 1) {
    fail(`Insufficient edge-case direct coverage for ${directory}: ${directEdgeCount}/1`);
  }

  for (const item of items.filter((item) => familyBucket(item.item_family || item.family) === 'prerequisite_probe')) {
    if (!item.dependency_target) {
      fail(`Prerequisite probe missing dependency_target in ${directory}: ${item.item_id || 'unknown'}`);
    }
    if (!item.suspected_knowledge_gap_if_incorrect) {
      fail(`Prerequisite probe missing suspected_knowledge_gap_if_incorrect in ${directory}: ${item.item_id || 'unknown'}`);
    }
  }

  const directTarget = schemaMinimums['direct execution'];
  const explanationTarget = schemaMinimums.explanation;
  const errorTarget = schemaMinimums['error diagnosis'];
  const transferTarget = schemaMinimums.transfer;
  if (directTarget && counts.direct < directTarget) {
    fail(`Schema minimum not met for ${directory}: direct ${counts.direct}/${directTarget}`);
  }
  if (explanationTarget && counts.explanation < explanationTarget) {
    fail(`Schema minimum not met for ${directory}: explanation ${counts.explanation}/${explanationTarget}`);
  }
  if (errorTarget && counts.error_diagnosis < errorTarget) {
    fail(`Schema minimum not met for ${directory}: error ${counts.error_diagnosis}/${errorTarget}`);
  }
  if (transferTarget && counts.transfer < transferTarget) {
    fail(`Schema minimum not met for ${directory}: transfer ${counts.transfer}/${transferTarget}`);
  }

  if (failureModes.length > 0) {
    const targeted = new Set();
    const targetedCounts = new Map(failureModes.map((mode) => [mode, 0]));
    for (const item of items) {
      for (const target of collectItemFailureTargets(item)) {
        targeted.add(target);
        if (!failureModes.includes(target)) {
          fail(`Unknown failure-mode target in ${directory}: ${target}`);
        } else {
          targetedCounts.set(target, (targetedCounts.get(target) || 0) + 1);
        }
      }
    }

    for (const mode of failureModes) {
      if (!targeted.has(mode)) {
        fail(`Untargeted failure mode in ${directory}: ${mode}`);
      }
      if ((targetedCounts.get(mode) || 0) < 2) {
        fail(`Failure mode not repeated enough for ${directory}: ${mode} targeted ${(targetedCounts.get(mode) || 0)}/2 times`);
      }
    }
  }
}

function main() {
  const directories = fs
    .readdirSync(nodesRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  for (const directory of directories) {
    validateNode(directory);
  }

  if (!hasFailure) {
    console.log(`Mathematics item-bank validation passed: ${directories.length} node packages.`);
  }

  process.exitCode = hasFailure ? 1 : 0;
}

main();
