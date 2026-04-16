#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const graphPath = path.join(repoRoot, 'domains', 'social_studies', 'master-knowledge-graph.yaml');
const attachmentRoot = path.join(repoRoot, 'domains', 'social_studies', 'artifact-attachments');

const requiredRegistryFiles = [
  'inquiry-civics-entry-attachment-registry.yaml',
  'geography-economics-systems-attachment-registry.yaml',
  'capstone-public-argument-attachment-registry.yaml',
];

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

for (const fileName of requiredRegistryFiles) {
  const absolute = path.join(attachmentRoot, fileName);
  if (!fs.existsSync(absolute)) {
    fail(`Missing required social studies artifact registry: domains/social_studies/artifact-attachments/${fileName}`);
  }
}

if (!fs.existsSync(graphPath)) {
  fail('Missing social studies graph for artifact registry validation');
  process.exitCode = 1;
  process.exit();
}

const graph = loadYamlAsJson(graphPath);
const graphNodeIds = new Set((graph.families || []).flatMap((family) => (family.nodes || []).map((node) => node.id)));
const registryPaths = fs.readdirSync(attachmentRoot).filter((entry) => entry.endsWith('.yaml')).map((entry) => path.join(attachmentRoot, entry));

for (const registryPath of registryPaths) {
  const registry = loadYamlAsJson(registryPath);

  for (const nodeId of registry.target_scope?.primary_node_ids || []) {
    if (!graphNodeIds.has(nodeId)) {
      fail(`Artifact registry target_scope references missing graph node: ${path.basename(registryPath)} -> ${nodeId}`);
    }
  }

  for (const artifact of registry.artifacts || []) {
    if (artifact.primary_node_id && !graphNodeIds.has(artifact.primary_node_id)) {
      fail(`Artifact primary_node_id references missing graph node: ${artifact.artifact_id} -> ${artifact.primary_node_id}`);
    }
    if (artifact.target_entity_type === 'CapabilityNode' && !graphNodeIds.has(artifact.target_entity_id)) {
      fail(`Artifact target_entity_id references missing capability node: ${artifact.artifact_id} -> ${artifact.target_entity_id}`);
    }
  }
}

if (!hasFailure) {
  console.log(`Social studies artifact registry validation passed: ${registryPaths.length} registries.`);
}

process.exitCode = hasFailure ? 1 : 0;
