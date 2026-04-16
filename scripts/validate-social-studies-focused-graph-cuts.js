#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const domainRoot = path.join(repoRoot, 'domains', 'social_studies');
const graphPath = path.join(domainRoot, 'master-knowledge-graph.yaml');
const cutPaths = [
  path.join(domainRoot, 'inquiry-entry-to-explanatory-spine.yaml'),
  path.join(domainRoot, 'inquiry-entry-to-disciplinary-peer-social-studies-graph.yaml'),
  path.join(domainRoot, 'ap-united-states-government-and-politics-focused-graph.yaml'),
  path.join(domainRoot, 'ap-microeconomics-exploratory-focused-graph.yaml'),
  path.join(domainRoot, 'ap-united-states-history-focused-graph.yaml'),
  path.join(domainRoot, 'ap-human-geography-focused-graph.yaml'),
  path.join(domainRoot, 'ap-world-history-modern-focused-graph.yaml'),
  path.join(domainRoot, 'ap-macroeconomics-focused-graph.yaml'),
  path.join(domainRoot, 'ap-comparative-government-and-politics-focused-graph.yaml'),
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

for (const absolute of [graphPath, ...cutPaths]) {
  if (!fs.existsSync(absolute)) {
    fail(`Missing required social studies focused-graph artifact: ${path.relative(repoRoot, absolute)}`);
  }
}

if (hasFailure) {
  process.exitCode = 1;
  process.exit();
}

const masterGraph = loadYamlAsJson(graphPath);
const masterNodes = new Map();
for (const family of masterGraph.families || []) {
  for (const node of family.nodes || []) {
    masterNodes.set(node.id, {
      name: node.name,
      depends_on: node.depends_on || [],
    });
  }
}

for (const cutPath of cutPaths) {
  const cut = loadYamlAsJson(cutPath);
  const familyNodes = (cut.families || []).flatMap((family) => family.nodes || []);
  if (familyNodes.length === 0) {
    fail(`Focused graph cut contains no nodes: ${path.relative(repoRoot, cutPath)}`);
    continue;
  }

  for (const node of familyNodes) {
    const masterNode = masterNodes.get(node.id);
    if (!masterNode) {
      fail(`Focused graph cut references node outside canonical graph: ${path.relative(repoRoot, cutPath)} -> ${node.id}`);
      continue;
    }
    if (masterNode.name !== node.name) {
      fail(`Focused graph cut node-name drift: ${path.relative(repoRoot, cutPath)} -> ${node.id}`);
    }
    const declaredDeps = [...(node.depends_on || [])].sort().join('|');
    const masterDeps = [...(masterNode.depends_on || [])].sort().join('|');
    if (declaredDeps !== masterDeps) {
      fail(`Focused graph cut dependency drift: ${path.relative(repoRoot, cutPath)} -> ${node.id}`);
    }
  }
}

if (!hasFailure) {
  console.log(`Social studies focused graph-cut validation passed: ${cutPaths.length} bounded graph packages.`);
}

process.exitCode = hasFailure ? 1 : 0;
