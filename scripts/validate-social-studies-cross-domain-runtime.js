#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const runtimeRoot = path.join(repoRoot, 'domains', 'social_studies', 'runtime');
const schemaPath = path.join(runtimeRoot, 'cross-domain-runtime-slice.schema.json');
const graphPath = path.join(repoRoot, 'domains', 'social_studies', 'master-knowledge-graph.yaml');
const runtimeSlicePaths = [
  path.join(runtimeRoot, 'inquiry-civics-entry-cross-domain-runtime-slice.yaml'),
  path.join(runtimeRoot, 'geography-economics-systems-cross-domain-runtime-slice.yaml'),
  path.join(runtimeRoot, 'capstone-public-argument-cross-domain-runtime-slice.yaml'),
];

let hasFailure = false;

function fail(message) {
  hasFailure = true;
  console.error(message);
}

function readJson(absolutePath) {
  return JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
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

function loadGraphNodeIds() {
  const graph = loadYamlAsJson(graphPath);
  return new Set((graph.families || []).flatMap((family) => (family.nodes || []).map((node) => node.id)));
}

for (const absolute of [schemaPath, graphPath, ...runtimeSlicePaths]) {
  if (!fs.existsSync(absolute)) {
    fail(`Missing required social studies cross-domain runtime artifact: ${path.relative(repoRoot, absolute)}`);
  }
}

if (hasFailure) {
  process.exitCode = 1;
  process.exit();
}

const schema = readJson(schemaPath);
const graphNodeIds = loadGraphNodeIds();
const required = new Set(schema.required || []);
const allowedDecisionTypes = new Set(['teach_next', 'hold_current', 'route_upstream', 'reverify', 'accelerate']);

let totalSliceNodes = 0;
let linkedRegistries = 0;

for (const runtimeSlicePath of runtimeSlicePaths) {
  const runtimeSlice = loadYamlAsJson(runtimeSlicePath);
  for (const key of required) {
    if (!(key in runtimeSlice)) {
      fail(`Cross-domain runtime slice missing required top-level key: ${path.basename(runtimeSlicePath)} -> ${key}`);
    }
  }

  if (runtimeSlice.domain !== 'social_studies') {
    fail(`Cross-domain runtime slice has unexpected domain: ${path.basename(runtimeSlicePath)} -> ${runtimeSlice.domain}`);
  }

  for (const nodeId of runtimeSlice.node_ids || []) {
    if (!graphNodeIds.has(nodeId)) {
      fail(`Cross-domain runtime slice references unknown social studies node: ${path.basename(runtimeSlicePath)} -> ${nodeId}`);
    }
  }

  for (const nodeId of runtimeSlice.entry_node_ids || []) {
    if (!graphNodeIds.has(nodeId)) {
      fail(`Cross-domain runtime slice references unknown social studies entry node: ${path.basename(runtimeSlicePath)} -> ${nodeId}`);
    }
  }

  const registryReference = runtimeSlice.artifact_registry_reference;
  if (!registryReference || !fs.existsSync(path.join(repoRoot, registryReference))) {
    fail(`Cross-domain runtime slice references missing artifact registry: ${path.basename(runtimeSlicePath)} -> ${registryReference}`);
  } else {
    linkedRegistries += 1;
  }

  for (const rule of runtimeSlice.navigation_rules || []) {
    if (!allowedDecisionTypes.has(rule.decision_type)) {
      fail(`Cross-domain runtime rule has invalid decision type: ${rule.rule_id} -> ${rule.decision_type}`);
    }
    if (!Array.isArray(rule.applies_when) || rule.applies_when.length === 0) {
      fail(`Cross-domain runtime rule must declare applies_when conditions: ${rule.rule_id}`);
    }
  }

  totalSliceNodes += (runtimeSlice.node_ids || []).length;
}

if (!hasFailure) {
  console.log(`Social studies cross-domain runtime audit passed: ${totalSliceNodes} slice nodes, ${linkedRegistries} linked artifact registries.`);
}

process.exitCode = hasFailure ? 1 : 0;
