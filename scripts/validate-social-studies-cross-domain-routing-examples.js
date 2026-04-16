#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const runtimeSlicePath = path.join(repoRoot, 'domains', 'social_studies', 'runtime', 'capstone-public-argument-cross-domain-runtime-slice.yaml');
const examplesPath = path.join(repoRoot, 'domains', 'social_studies', 'runtime', 'capstone-public-argument-cross-domain-routing-examples.yaml');

let hasFailure = false;

function fail(message) {
  hasFailure = true;
  console.error(message);
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

for (const absolute of [runtimeSlicePath, examplesPath]) {
  if (!fs.existsSync(absolute)) {
    fail(`Missing required social studies routing artifact: ${path.relative(repoRoot, absolute)}`);
  }
}

if (hasFailure) {
  process.exitCode = 1;
  process.exit();
}

const runtimeSlice = loadYamlAsJson(runtimeSlicePath);
const examples = loadYamlAsJson(examplesPath);
const rules = new Map((runtimeSlice.navigation_rules || []).map((rule) => [rule.rule_id, rule]));

for (const example of examples.examples || []) {
  const rule = rules.get(example.expected_rule_id);
  if (!rule) {
    fail(`Routing example references missing rule: ${example.learner_case_id} -> ${example.expected_rule_id}`);
    continue;
  }

  if (rule.decision_type !== example.expected_decision) {
    fail(`Routing example decision mismatch: ${example.learner_case_id} expected ${example.expected_decision} but rule declares ${rule.decision_type}`);
  }

  const appliesWhenText = JSON.stringify(rule.applies_when || []);
  const referencesCurrentNode = appliesWhenText.includes(example.current_node_id);
  const referencesCurrentStatus = appliesWhenText.includes(example.current_node_status || '');

  if (!referencesCurrentNode && !referencesCurrentStatus) {
    fail(`Routing rule does not obviously target the example node or status: ${example.learner_case_id} -> ${example.current_node_id}`);
  }
}

if (!hasFailure) {
  console.log(`Social studies cross-domain routing examples audit passed: ${(examples.examples || []).length} worked routing examples.`);
}

process.exitCode = hasFailure ? 1 : 0;
