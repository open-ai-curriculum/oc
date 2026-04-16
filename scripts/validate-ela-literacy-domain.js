#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const domainRoot = path.join(repoRoot, 'domains', 'ela_literacy');
const nodesRoot = path.join(domainRoot, 'nodes');
const graphPath = path.join(domainRoot, 'master-knowledge-graph.yaml');
const standardsMapPath = path.join(repoRoot, 'docs', 'standards', 'ela-literacy-node-standards-map.json');
const generatedOverlay = [
  path.join(domainRoot, 'standards-augmented-graph.yaml'),
  path.join(domainRoot, 'standards-augmented-graph.json'),
  path.join(domainRoot, 'standards-augmented-graph.md'),
];
const exportOutputs = [
  path.join(domainRoot, 'exports', 'gephi', 'ela-literacy-gephi-nodes.csv'),
  path.join(domainRoot, 'exports', 'gephi', 'ela-literacy-gephi-edges.csv'),
  path.join(domainRoot, 'exports', 'gephi', 'ela-literacy-gephi-graph.gexf'),
  path.join(domainRoot, 'exports', 'neo4j', 'ela-literacy-domain-graph.csv'),
  path.join(domainRoot, 'exports', 'neo4j', 'ela-literacy-domain-nodes.csv'),
  path.join(domainRoot, 'exports', 'neo4j', 'ela-literacy-domain-dependencies.csv'),
  path.join(domainRoot, 'exports', 'neo4j', 'import-ela-literacy-domain.cypher'),
];

const requiredDomainFiles = [
  'README.md',
  'master-knowledge-graph.md',
  'master-knowledge-graph.yaml',
  'master-ela-literacy-graph-architecture.md',
  'graph-artifact-attachment-contract.md',
  'graph-learner-state-and-navigation-contract.md',
  'implementation-maturity-tracker.md',
  'graph-fidelity-expansion-plan.md',
  'canonical-graph-revision-proposal.md',
  'foundational-reading-wave1-mutation-package.md',
  'foundational-reading-wave1-proposed-graph-slice.yaml',
  'foundational-reading-wave1-supersession-table.md',
  'foundational-reading-wave1-node-package-scaffold-plan.md',
  'foundational-reading-granularity-candidate-set.md',
  'comprehension-granularity-candidate-set.md',
  'writing-composition-granularity-candidate-set.md',
  'advanced-analysis-granularity-candidate-set.md',
  'standards-augmented-graph.md',
  'standards-augmented-graph.yaml',
  'standards-augmented-graph.json',
  'capability-graph.md',
  'capability-graph.yaml',
  'first-node-target.md',
  'prek12-literacy-spine.md',
  'prek12-literacy-spine.yaml',
  'oral-language-to-f1-literacy-spine.md',
  'oral-language-to-f1-literacy-spine.yaml',
  'pre-k-to-sentence-level-literacy-peer-graph.md',
  'pre-k-to-sentence-level-literacy-peer-graph.yaml',
  'foundational-literacy-peer-coverage-review.md',
  'composition-and-response-peer-coverage-review.md',
  'reading-writing-cross-branch-coverage-review.md',
  'advanced-secondary-literacy-coverage-review.md',
  'cross-branch-integration-audit.md',
  'downstream-expansion-plan.md',
  'early-literacy-frontier-completeness-review.md',
  'early-literacy-frontier-structural-audit.md',
  'k12-expansion-architecture.md',
  'k12-expansion-plan.md',
  'operational-parity-review.md',
  'standards-overlay-coverage-review.md',
  'upstream-build-plan.md',
  path.join('artifact-attachments', 'README.md'),
  path.join('artifact-attachments', 'registry.schema.json'),
  path.join('artifact-attachments', 'early-literacy-spine-attachment-registry.yaml'),
  path.join('artifact-attachments', 'reading-composition-spine-attachment-registry.yaml'),
  path.join('artifact-attachments', 'advanced-analysis-spine-attachment-registry.yaml'),
  path.join('runtime', 'README.md'),
  path.join('runtime', 'runtime-slice.schema.json'),
  path.join('runtime', 'early-literacy-spine-runtime-slice.yaml'),
  path.join('runtime', 'reading-composition-spine-runtime-slice.yaml'),
  path.join('runtime', 'advanced-analysis-spine-runtime-slice.yaml'),
];

const requiredNodeFiles = [
  'README.md',
  'node-config.yaml',
  'node-spec.md',
  'verification-model.md',
  'item-bank-schema.md',
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
      fail(`Missing required ELA domain artifact: ${path.relative(repoRoot, absolute)}`);
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
        implementation_state: node.implementation_state,
        family_id: family.id,
      });
    }
  }
  return nodes;
}

function parseNodeDirectories() {
  const directories = fs.readdirSync(nodesRoot, { withFileTypes: true }).filter((entry) => entry.isDirectory()).map((entry) => entry.name);
  const nodes = new Map();
  for (const directory of directories) {
    const configPath = path.join(nodesRoot, directory, 'node-config.yaml');
    if (!fs.existsSync(configPath)) {
      fail(`Missing node-config.yaml for ELA node package: ${directory}`);
      continue;
    }
    const config = loadYamlAsJson(configPath);
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
        fail(`Missing required ELA node artifact: ${path.relative(repoRoot, absolute)}`);
      }
    }
  }
}

function normalizeList(values) {
  return [...values].sort().join('|');
}

function validateGraphCoverage(graphNodes, nodeDirectories) {
  const graphNodeIds = new Set(graphNodes.keys());
  const directoryIds = new Set([...nodeDirectories.values()].map((node) => node.id));
  for (const [graphId, graphNode] of graphNodes.entries()) {
    if (!directoryIds.has(graphId)) {
      fail(`ELA graph node id missing implemented node package directory: ${graphId}`);
      continue;
    }
    const nodeDirectory = [...nodeDirectories.values()].find((node) => node.id === graphId);
    if (nodeDirectory.name !== graphNode.name) {
      fail(`ELA graph/package name mismatch for ${graphId}: graph=${graphNode.name} package=${nodeDirectory.name}`);
    }
    if (normalizeList(nodeDirectory.dependencies) !== normalizeList(graphNode.dependencies)) {
      fail(`ELA graph/package dependency mismatch for ${graphId}: graph=[${graphNode.dependencies.join(', ')}] package=[${nodeDirectory.dependencies.join(', ')}]`);
    }
  }
  for (const nodeDirectory of nodeDirectories.values()) {
    if (graphNodeIds.has(nodeDirectory.id)) {
      continue;
    }
    const maturityState = nodeDirectory.config.maturity_state || '';
    if (maturityState !== 'Superseded') {
      fail(`ELA node package exists outside authoritative graph without Superseded status: ${nodeDirectory.id}`);
    }
  }
}

function validateStandardsMap(graphNodes) {
  const standardsMap = JSON.parse(fs.readFileSync(standardsMapPath, 'utf8'));
  const mapNodeIds = new Set((standardsMap.nodes || []).map((node) => node.node_id));
  for (const graphId of graphNodes.keys()) {
    if (!mapNodeIds.has(graphId)) {
      fail(`ELA standards map missing graph node: ${graphId}`);
    }
  }
  if ((standardsMap.nodes || []).length !== graphNodes.size) {
    fail(`ELA standards map node count mismatch: map=${(standardsMap.nodes || []).length} graph=${graphNodes.size}`);
  }
}

function validateGeneratedOutputs() {
  for (const absolute of [...generatedOverlay, ...exportOutputs]) {
    if (!fs.existsSync(absolute)) {
      fail(`Missing generated ELA artifact: ${path.relative(repoRoot, absolute)}`);
    }
  }
}

function validateItemBanks() {
  const validatorScript = path.join(__dirname, 'validate-ela-literacy-item-banks.js');
  if (!fs.existsSync(validatorScript)) {
    fail('Missing scripts/validate-ela-literacy-item-banks.js');
    return;
  }

  try {
    childProcess.execFileSync('node', [validatorScript], {
      cwd: repoRoot,
      stdio: 'inherit',
    });
  } catch (error) {
    fail('ELA/literacy item-bank validation failed.');
  }
}

const graphNodes = loadGraphNodes();
const nodeDirectories = parseNodeDirectories();

validateDomainFiles();
validateNodeArtifacts(nodeDirectories);
validateGraphCoverage(graphNodes, nodeDirectories);
validateStandardsMap(graphNodes);
validateGeneratedOutputs();
validateItemBanks();

if (!hasFailure) {
  console.log(`ELA/literacy domain audit passed: ${graphNodes.size} graph nodes, ${nodeDirectories.size} node packages, ${requiredNodeFiles.length} required artifact types.`);
}

process.exitCode = hasFailure ? 1 : 0;
