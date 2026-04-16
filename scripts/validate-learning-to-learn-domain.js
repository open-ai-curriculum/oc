#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const domainRoot = path.join(repoRoot, 'domains', 'learning_to_learn');
const nodesRoot = path.join(domainRoot, 'nodes');
const graphPath = path.join(domainRoot, 'capability-graph.yaml');
const registryPath = path.join(repoRoot, 'docs', 'capability-registry.json');

const requiredDomainFiles = [
  'README.md',
  'capability-graph.md',
  'capability-graph.yaml',
  'prek12-learning-to-learn-spine.md',
  'prek12-learning-to-learn-spine.yaml',
  'first-node-target.md',
  'master-learning-to-learn-graph-architecture.md',
  'downstream-expansion-plan.md',
  'artifact-attachments/README.md',
  'artifact-attachments/registry.schema.json',
  'artifact-attachments/learning-to-learn-core-support-artifact-registry.yaml',
  'runtime/README.md',
  'runtime/runtime-slice.schema.json',
  'runtime/independent-learning-upper-band-runtime-slice.yaml',
  'runtime/independent-learning-upper-band-routing-examples.yaml',
  'exports/operational-graph/README.md',
  'exports/operational-graph/learning-to-learn-operational-summary.json',
  'exports/operational-graph/learning-to-learn-operational-nodes.csv',
  'exports/operational-graph/learning-to-learn-operational-relationships.csv',
  'exports/operational-graph/import-learning-to-learn-operational-graph.cypher',
];

const requiredNodeFiles = [
  'README.md',
  'node-config.yaml',
  'node-spec.md',
  'verification-model.md',
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

function read(absolutePath) {
  return fs.readFileSync(absolutePath, 'utf8');
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

function validateDomainFiles() {
  for (const relativePath of requiredDomainFiles) {
    const absolute = path.join(domainRoot, relativePath);
    if (!fs.existsSync(absolute)) {
      fail(`Missing required learning-to-learn domain artifact: ${path.relative(repoRoot, absolute)}`);
    }
  }
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
        family_id: family.id,
      });
    }
  }

  return nodes;
}

function parseNodeDirectories() {
  if (!fs.existsSync(nodesRoot)) {
    fail('Missing learning-to-learn nodes directory');
    return new Map();
  }

  const directories = fs
    .readdirSync(nodesRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const nodes = new Map();
  for (const directory of directories) {
    const configPath = path.join(nodesRoot, directory, 'node-config.yaml');
    if (!fs.existsSync(configPath)) {
      fail(`Missing node-config.yaml for learning-to-learn node package: ${directory}`);
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
        fail(`Missing required learning-to-learn node artifact: ${path.relative(repoRoot, absolute)}`);
      }
    }
  }
}

function validateNodeConfigShapes(nodeDirectories) {
  for (const directory of nodeDirectories.keys()) {
    const configPath = path.join(nodesRoot, directory, 'node-config.yaml');
    const text = read(configPath);

    if (
      !/^supported_profiles:/m.test(text) ||
      !/^mastery:/m.test(text) ||
      !/^statuses:/m.test(text) ||
      !/^verification_gates:/m.test(text) ||
      !/^failure_modes:/m.test(text)
    ) {
      fail(`Learning-to-learn node-config missing required contract sections: ${path.relative(repoRoot, configPath)}`);
    }
  }
}

function validateRegistry(nodeDirectories) {
  const registry = JSON.parse(read(registryPath));
  const nodeDirectoryNames = new Set(nodeDirectories.keys());
  const registryNodeIds = new Set();

  for (const capability of registry.capabilities) {
    const references = capability.current_state_references || [];
    const nodeReference = references.find((entry) => entry.startsWith('domains/learning_to_learn/nodes/'));
    if (!nodeReference) {
      continue;
    }

    registryNodeIds.add(capability.id);
    const parts = nodeReference.split('/');
    const directory = parts[3];

    if (!nodeDirectoryNames.has(directory)) {
      fail(`Capability registry points to missing learning-to-learn node directory: ${capability.id} -> ${directory}`);
    }
  }

  for (const directory of nodeDirectoryNames) {
    if (!registryNodeIds.has(directory)) {
      fail(`Learning-to-learn node directory missing from capability registry: ${directory}`);
    }
  }
}

function normalizeList(values) {
  return [...values].sort().join('|');
}

function validateGraphCoverage(graphNodes, nodeDirectories) {
  const nodeDirectoryIds = new Set([...nodeDirectories.values()].map((nodeDirectory) => nodeDirectory.id));

  for (const graphNodeId of graphNodes.keys()) {
    if (!nodeDirectoryIds.has(graphNodeId)) {
      fail(`Learning-to-learn graph node missing implemented node package directory: ${graphNodeId}`);
    }
  }

  for (const nodeDirectory of nodeDirectories.values()) {
    const graphNode = graphNodes.get(nodeDirectory.id);

    if (!graphNode) {
      fail(`Learning-to-learn node package exists outside authoritative graph: ${nodeDirectory.id}`);
      continue;
    }

    if (nodeDirectory.name !== graphNode.name) {
      fail(
        `Learning-to-learn graph/package name mismatch for ${nodeDirectory.id}: graph=${graphNode.name} package=${nodeDirectory.name}`
      );
    }

    if (normalizeList(nodeDirectory.dependencies) !== normalizeList(graphNode.dependencies)) {
      fail(
        `Learning-to-learn graph/package dependency mismatch for ${nodeDirectory.id}: graph=[${graphNode.dependencies.join(', ')}] package=[${nodeDirectory.dependencies.join(', ')}]`
      );
    }
  }
}

function validateOperationalArtifacts(graphNodes) {
  const runtimeSlice = loadYamlAsJson(path.join(domainRoot, 'runtime', 'independent-learning-upper-band-runtime-slice.yaml'));
  const attachmentRegistry = loadYamlAsJson(
    path.join(domainRoot, 'artifact-attachments', 'learning-to-learn-core-support-artifact-registry.yaml')
  );
  const exportSummary = JSON.parse(
    read(path.join(domainRoot, 'exports', 'operational-graph', 'learning-to-learn-operational-summary.json'))
  );

  if (normalizeList(runtimeSlice.node_ids || []) !== normalizeList(['A3', 'M4', 'S4', 'R4', 'T2'])) {
    fail('Learning-to-learn runtime slice must target A3/M4/S4/R4/T2');
  }

  if (normalizeList(attachmentRegistry.target_scope?.primary_node_ids || []) !== normalizeList(['A3', 'M4', 'S4', 'R4', 'T2'])) {
    fail('Learning-to-learn artifact registry must target A3/M4/S4/R4/T2');
  }

  if (exportSummary.entity_counts?.CapabilityNode !== graphNodes.size) {
    fail(
      `Learning-to-learn operational export summary capability-node count mismatch: expected ${graphNodes.size} got ${exportSummary.entity_counts?.CapabilityNode}`
    );
  }
}

const graphNodes = loadGraphNodes();
const nodeDirectories = parseNodeDirectories();

validateDomainFiles();
validateNodeArtifacts(nodeDirectories);
validateNodeConfigShapes(nodeDirectories);
validateRegistry(nodeDirectories);
validateGraphCoverage(graphNodes, nodeDirectories);
validateOperationalArtifacts(graphNodes);

if (!hasFailure) {
  console.log(
    `Learning-to-learn domain audit passed: ${nodeDirectories.size} implemented node packages, ${requiredNodeFiles.length} required artifact types.`
  );
}

process.exitCode = hasFailure ? 1 : 0;
