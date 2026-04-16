#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const graphPath = path.join(repoRoot, 'domains', 'social_studies', 'master-knowledge-graph.yaml');
const overlayPath = path.join(repoRoot, 'domains', 'social_studies', 'assessment-overlays', 'assessment-overlays.json');

const requiredOverlayIds = [
  'ap-united-states-history-overlay',
  'ap-world-history-modern-overlay',
  'ap-united-states-government-and-politics-overlay',
  'ap-comparative-government-and-politics-overlay',
  'ap-human-geography-overlay',
  'ap-macroeconomics-overlay',
  'ap-microeconomics-overlay',
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

function loadGraphNodes() {
  const graph = loadYamlAsJson(graphPath);
  return new Set((graph.families || []).flatMap((family) => (family.nodes || []).map((node) => node.id)));
}

if (!fs.existsSync(overlayPath)) {
  fail('Missing social studies assessment overlay catalog');
  process.exitCode = 1;
  process.exit();
}

const overlays = JSON.parse(fs.readFileSync(overlayPath, 'utf8')).overlays || [];
const graphNodes = loadGraphNodes();
const seen = new Set();
const overlayIndex = new Map();

for (const overlay of overlays) {
  seen.add(overlay.overlay_id);
  overlayIndex.set(overlay.overlay_id, overlay);

  if (!Array.isArray(overlay.coverage_units) || overlay.coverage_units.length === 0) {
    fail(`Social studies assessment overlay missing coverage units: ${overlay.overlay_id}`);
    continue;
  }

  for (const unit of overlay.coverage_units) {
    if (!Array.isArray(unit.mapped_capability_nodes) || unit.mapped_capability_nodes.length === 0) {
      fail(`Social studies assessment overlay unit missing mapped nodes: ${overlay.overlay_id} -> ${unit.unit_id}`);
      continue;
    }
    for (const nodeId of unit.mapped_capability_nodes) {
      if (!graphNodes.has(nodeId)) {
        fail(`Social studies assessment overlay references missing graph node: ${overlay.overlay_id} -> ${unit.unit_id} -> ${nodeId}`);
      }
    }
  }
}

for (const overlayId of requiredOverlayIds) {
  if (!seen.has(overlayId)) {
    fail(`Missing required social studies assessment overlay: ${overlayId}`);
  }
}

const partialOverlay = overlayIndex.get('ap-comparative-government-and-politics-overlay');
if (partialOverlay && partialOverlay.overlay_summary_classification !== 'content_partial') {
  fail('AP Comparative Government and Politics overlay should remain content_partial until country-case structures are first-class');
}

const exploratoryOverlay = overlayIndex.get('ap-microeconomics-overlay');
if (exploratoryOverlay && exploratoryOverlay.overlay_summary_classification !== 'exploratory') {
  fail('AP Microeconomics overlay should remain exploratory until microeconomics course specificity is governed');
}

if (!hasFailure) {
  console.log(`Social studies assessment overlay validation passed: ${overlays.length} overlays.`);
}

process.exitCode = hasFailure ? 1 : 0;
