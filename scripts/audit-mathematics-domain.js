#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const nodesRoot = path.join(repoRoot, 'domains', 'mathematics', 'nodes');
const graphPath = path.join(repoRoot, 'domains', 'mathematics', 'master-knowledge-graph.yaml');
const registryPath = path.join(repoRoot, 'docs', 'capability-registry.json');

const requiredNodeFiles = [
  'README.md',
  'node-config.yaml',
  'node-spec.md',
  'verification-model.md',
  'item-bank.json',
  'failure-taxonomy.md',
  'intervention-playbook.md',
  'intervention-map.json',
  'learner-state-model.md',
  'learner-state.schema.json',
  'example-learner-states.json',
  'transition-rules.yaml',
  'teacher-observability.md',
  'agent-behavior.md',
];

let hasFailure = false;

function fail(message) {
  hasFailure = true;
  console.error(message);
}

function warn(message) {
  console.warn(message);
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

function loadGraphNodes() {
  const graph = loadYamlAsJson(graphPath);
  const nodes = new Map();

  for (const family of graph.families || []) {
    for (const node of family.nodes || []) {
      nodes.set(node.id, {
        id: node.id,
        name: node.name,
        dependencies: node.depends_on || [],
        implementation_state: node.implementation_state,
        family_id: family.id,
      });
    }
  }

  return nodes;
}

function parseNodeDirectories() {
  const directories = fs
    .readdirSync(nodesRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const nodes = new Map();
  for (const directory of directories) {
    const configPath = path.join(nodesRoot, directory, 'node-config.yaml');
    if (!fs.existsSync(configPath)) {
      fail(`Missing node-config.yaml for node package: ${directory}`);
      continue;
    }

    const config = loadYamlAsJson(configPath);
    if (!config.id) {
      fail(`Could not determine node id from ${path.relative(repoRoot, configPath)}`);
      continue;
    }

    nodes.set(directory, {
      directory,
      id: config.id,
      name: config.name,
      dependencies: config.dependencies || [],
      config,
    });
  }

  return nodes;
}

function validateNodeArtifacts(nodeDirectories) {
  for (const directory of nodeDirectories.keys()) {
    for (const fileName of requiredNodeFiles) {
      const absolute = path.join(nodesRoot, directory, fileName);
      if (!fs.existsSync(absolute)) {
        fail(`Missing required node artifact: ${path.relative(repoRoot, absolute)}`);
      }
    }
  }
}

function validateNodeConfigShapes(nodeDirectories) {
  const categoryCounts = new Map();
  const unknownShapes = [];

  for (const directory of nodeDirectories.keys()) {
    const configPath = path.join(nodesRoot, directory, 'node-config.yaml');
    const text = read(configPath);

    if (/^profile:/m.test(text)) {
      fail(`Legacy profile field still present in ${path.relative(repoRoot, configPath)}`);
    }

    let category;
    if (/^node:\s*$/m.test(text)) {
      category = 'nested-node-root';
    } else if (/^artifact_files:/m.test(text)) {
      category = 'artifact-index-config';
    } else if (
      /^supported_profiles:/m.test(text) &&
      /^mastery:/m.test(text) &&
      /^statuses:/m.test(text) &&
      /^verification_gates:/m.test(text) &&
      /^failure_modes:/m.test(text)
    ) {
      category = 'mastery-node-config';
    } else {
      category = 'unknown';
      unknownShapes.push(path.relative(repoRoot, configPath));
    }

    categoryCounts.set(category, (categoryCounts.get(category) || 0) + 1);
  }

  if (categoryCounts.has('nested-node-root')) {
    fail(`Legacy nested node-config schema still present in ${categoryCounts.get('nested-node-root')} mathematics packages`);
  }

  if (unknownShapes.length > 0) {
    fail(`Unknown mathematics node-config schema detected:\n${unknownShapes.join('\n')}`);
  }

  const categories = [...categoryCounts.entries()]
    .map(([category, count]) => `${category}=${count}`)
    .join(', ');
  console.log(`Mathematics node-config categories: ${categories}`);

  if (categoryCounts.size > 2) {
    warn(`Mathematics node-config category spread is wider than expected: ${categories}`);
  }
}

function validateRegistry(nodeDirectories) {
  const registry = JSON.parse(read(registryPath));
  const nodeDirectoryNames = new Set(nodeDirectories.keys());
  const registryNodeIds = new Set();

  for (const capability of registry.capabilities) {
    const references = capability.current_state_references || [];
    const nodeReference = references.find((entry) => entry.startsWith('domains/mathematics/nodes/'));
    if (!nodeReference) {
      continue;
    }

    registryNodeIds.add(capability.id);

    const parts = nodeReference.split('/');
    const directory = parts[3];
    if (!nodeDirectoryNames.has(directory)) {
      fail(`Capability registry points to missing mathematics node directory: ${capability.id} -> ${directory}`);
      continue;
    }

    if (capability.id !== directory) {
      fail(`Capability registry id does not match node directory slug: ${capability.id} -> ${directory}`);
    }
  }

  for (const directory of nodeDirectoryNames) {
    if (!registryNodeIds.has(directory)) {
      fail(`Mathematics node directory missing from capability registry: ${directory}`);
    }
  }
}

function normalizeList(values) {
  return [...values].sort().join('|');
}

function validateGraphCoverage(graphNodes, nodeDirectories) {
  const directoryIds = new Set([...nodeDirectories.values()].map((node) => node.id));

  for (const [graphId, graphNode] of graphNodes.entries()) {
    if (!directoryIds.has(graphId)) {
      fail(`Graph node id missing implemented node package directory: ${graphId}`);
      continue;
    }

    const nodeDirectory = [...nodeDirectories.values()].find((node) => node.id === graphId);
    if (!nodeDirectory) {
      fail(`Could not resolve node directory for graph node: ${graphId}`);
      continue;
    }

    if (nodeDirectory.name !== graphNode.name) {
      fail(
        `Graph/package name mismatch for ${graphId}: graph=${graphNode.name} package=${nodeDirectory.name} (${nodeDirectory.directory})`
      );
    }

    if (normalizeList(nodeDirectory.dependencies) !== normalizeList(graphNode.dependencies)) {
      fail(
        `Graph/package dependency mismatch for ${graphId}: graph=[${graphNode.dependencies.join(', ')}] package=[${nodeDirectory.dependencies.join(', ')}]`
      );
    }

    if (graphNode.implementation_state !== 'implemented') {
      warn(`Graph node is not implemented in the authoritative graph: ${graphId} (${graphNode.implementation_state})`);
    }
  }
}

const graphNodes = loadGraphNodes();
const nodeDirectories = parseNodeDirectories();

validateNodeArtifacts(nodeDirectories);
validateNodeConfigShapes(nodeDirectories);
validateRegistry(nodeDirectories);
validateGraphCoverage(graphNodes, nodeDirectories);

if (!hasFailure) {
  console.log(
    `Mathematics domain audit passed: ${graphNodes.size} graph nodes, ${nodeDirectories.size} node packages, ${requiredNodeFiles.length} required artifact types.`
  );
}

process.exitCode = hasFailure ? 1 : 0;
