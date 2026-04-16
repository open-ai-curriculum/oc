#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const domainRoot = path.join(repoRoot, 'domains', 'social_studies');
const nodesRoot = path.join(domainRoot, 'nodes');
const graphPath = path.join(domainRoot, 'master-knowledge-graph.yaml');
const standardsMapPath = path.join(repoRoot, 'docs', 'standards', 'social-studies-node-standards-map.json');

const requiredDomainFiles = [
  'README.md',
  'master-knowledge-graph.md',
  'master-knowledge-graph.yaml',
  'master-social-studies-graph-architecture.md',
  'graph-artifact-attachment-contract.md',
  'graph-learner-state-and-navigation-contract.md',
  'prek12-social-studies-spine.md',
  'prek12-social-studies-spine.yaml',
  'capability-graph.md',
  'capability-graph.yaml',
  'first-node-target.md',
  'inquiry-entry-to-explanatory-spine.md',
  'inquiry-entry-to-explanatory-spine.yaml',
  'inquiry-entry-to-disciplinary-peer-social-studies-graph.md',
  'inquiry-entry-to-disciplinary-peer-social-studies-graph.yaml',
  'ap-united-states-government-and-politics-focused-graph.md',
  'ap-united-states-government-and-politics-focused-graph.yaml',
  'ap-microeconomics-exploratory-focused-graph.md',
  'ap-microeconomics-exploratory-focused-graph.yaml',
  'ap-united-states-history-focused-graph.md',
  'ap-united-states-history-focused-graph.yaml',
  'ap-human-geography-focused-graph.md',
  'ap-human-geography-focused-graph.yaml',
  'ap-world-history-modern-focused-graph.md',
  'ap-world-history-modern-focused-graph.yaml',
  'ap-macroeconomics-focused-graph.md',
  'ap-macroeconomics-focused-graph.yaml',
  'ap-comparative-government-and-politics-focused-graph.md',
  'ap-comparative-government-and-politics-focused-graph.yaml',
  'k12-expansion-architecture.md',
  'decomposition-map.yaml',
  'standards-augmented-graph.md',
  'standards-augmented-graph.yaml',
  'standards-augmented-graph.json',
  'assessment-overlay-model.md',
  'assessment-framework-assurance-register.md',
  'assessment-framework-assurance-register.json',
  'upstream-build-plan.md',
  'downstream-expansion-plan.md',
  'cross-branch-integration-audit.md',
  'external-assessment-coverage-scan.md',
  'parity-checklist.md',
  'parity-report.md',
  'parity-plan-and-progress.md',
  'validation-audit.md',
  path.join('artifact-attachments', 'README.md'),
  path.join('artifact-attachments', 'registry.schema.json'),
  path.join('artifact-attachments', 'inquiry-civics-entry-attachment-registry.yaml'),
  path.join('artifact-attachments', 'geography-economics-systems-attachment-registry.yaml'),
  path.join('artifact-attachments', 'capstone-public-argument-attachment-registry.yaml'),
  path.join('runtime', 'README.md'),
  path.join('runtime', 'runtime-slice.schema.json'),
  path.join('runtime', 'cross-domain-runtime-slice.schema.json'),
  path.join('runtime', 'inquiry-civics-entry-runtime-slice.yaml'),
  path.join('runtime', 'inquiry-civics-entry-cross-domain-runtime-slice.yaml'),
  path.join('runtime', 'geography-economics-systems-runtime-slice.yaml'),
  path.join('runtime', 'geography-economics-systems-cross-domain-runtime-slice.yaml'),
  path.join('runtime', 'capstone-public-argument-runtime-slice.yaml'),
  path.join('runtime', 'capstone-public-argument-cross-domain-runtime-slice.yaml'),
  path.join('runtime', 'capstone-public-argument-cross-domain-routing-guide.md'),
  path.join('runtime', 'capstone-public-argument-cross-domain-routing-examples.yaml'),
  path.join('assessment-overlays', 'index.md'),
  path.join('assessment-overlays', 'assessment-overlays.json'),
  path.join('assessment-overlays', 'coverage-summary.json'),
  path.join('assessment-overlays', 'coverage-summary.md'),
  path.join('exports', 'gephi', 'README.md'),
  path.join('exports', 'gephi', 'social-studies-gephi-nodes.csv'),
  path.join('exports', 'gephi', 'social-studies-gephi-edges.csv'),
  path.join('exports', 'gephi', 'social-studies-gephi-graph.gexf'),
  path.join('exports', 'neo4j', 'README.md'),
  path.join('exports', 'neo4j', 'social-studies-domain-graph.csv'),
  path.join('exports', 'neo4j', 'social-studies-domain-nodes.csv'),
  path.join('exports', 'neo4j', 'social-studies-domain-dependencies.csv'),
  path.join('exports', 'neo4j', 'import-social-studies-domain.cypher'),
  path.join('exports', 'operational-graph', 'README.md'),
  path.join('exports', 'operational-graph', 'social-studies-operational-nodes.csv'),
  path.join('exports', 'operational-graph', 'social-studies-operational-relationships.csv'),
  path.join('exports', 'operational-graph', 'social-studies-operational-summary.json'),
  path.join('exports', 'operational-graph', 'import-social-studies-operational-graph.cypher'),
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
      fail(`Missing required social studies domain artifact: ${path.relative(repoRoot, absolute)}`);
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
      fail(`Missing node-config.yaml for social studies node package: ${directory}`);
      continue;
    }
    const config = loadYamlAsJson(configPath);
    nodes.set(directory, {
      directory,
      id: config.id,
      name: config.name,
      dependencies: (config.dependencies || []).filter((dependency) => dependency !== 'none'),
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
        fail(`Missing required social studies node artifact: ${path.relative(repoRoot, absolute)}`);
      }
    }
  }
}

function normalizeList(values) {
  return [...values].sort().join('|');
}

function validateGraphCoverage(graphNodes, nodeDirectories, standardsNodeIds) {
  const graphNodeIds = new Set(graphNodes.keys());
  const directoryIds = new Set([...nodeDirectories.values()].map((node) => node.id));

  for (const [graphId, graphNode] of graphNodes.entries()) {
    if (!directoryIds.has(graphId)) {
      fail(`Social studies graph node missing implemented node package directory: ${graphId}`);
      continue;
    }
    const nodeDirectory = [...nodeDirectories.values()].find((node) => node.id === graphId);
    if (nodeDirectory.name !== graphNode.name) {
      fail(`Social studies graph/package name mismatch for ${graphId}: graph=${graphNode.name} package=${nodeDirectory.name}`);
    }
    if (normalizeList(nodeDirectory.dependencies) !== normalizeList(graphNode.dependencies)) {
      fail(`Social studies graph/package dependency mismatch for ${graphId}: graph=[${graphNode.dependencies.join(', ')}] package=[${nodeDirectory.dependencies.join(', ')}]`);
    }
  }

  for (const nodeDirectory of nodeDirectories.values()) {
    if (!graphNodeIds.has(nodeDirectory.id) && !standardsNodeIds.has(nodeDirectory.id)) {
      fail(`Social studies node package exists outside authoritative graph: ${nodeDirectory.id}`);
    }
  }
}

function validateStandardsMap(graphNodes) {
  const standardsMap = JSON.parse(fs.readFileSync(standardsMapPath, 'utf8'));
  const mapNodeIds = new Set((standardsMap.node_mappings || []).map((node) => node.node_id));
  for (const graphId of graphNodes.keys()) {
    if (!mapNodeIds.has(graphId)) {
      fail(`Social studies standards map missing graph node: ${graphId}`);
    }
  }
  if ((standardsMap.node_mappings || []).length !== 146) {
    fail(`Social studies standards map node count mismatch: map=${(standardsMap.node_mappings || []).length} expected=146`);
  }
  return mapNodeIds;
}

const graphNodes = loadGraphNodes();
const nodeDirectories = parseNodeDirectories();

validateDomainFiles();
validateNodeArtifacts(nodeDirectories);
const standardsNodeIds = validateStandardsMap(graphNodes);
validateGraphCoverage(graphNodes, nodeDirectories, standardsNodeIds);

if (!hasFailure) {
  console.log(`Social studies domain audit passed: ${graphNodes.size} graph nodes, ${nodeDirectories.size} node packages, ${requiredNodeFiles.length} required artifact types.`);
}

process.exitCode = hasFailure ? 1 : 0;
