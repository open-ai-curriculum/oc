#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const graphPath = path.join(repoRoot, 'domains', 'mathematics', 'master-knowledge-graph.yaml');
const overlayPath = path.join(repoRoot, 'domains', 'mathematics', 'assessment-overlays', 'assessment-overlays.json');

const requiredOverlayIds = [
  'sat-mathematics-overlay',
  'psat-nmsqt-mathematics-overlay',
  'act-mathematics-overlay',
  'ap-statistics-overlay',
  'ap-precalculus-overlay',
  'ap-calculus-ab-overlay',
  'ap-calculus-bc-overlay',
  'ib-mathematics-aa-overlay',
  'ib-mathematics-ai-overlay',
  'ib-mathematics-aa-sl-overlay',
  'ib-mathematics-aa-hl-overlay',
  'ib-mathematics-ai-sl-overlay',
  'ib-mathematics-ai-hl-overlay',
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
  return new Set(
    (graph.families || []).flatMap((family) => (family.nodes || []).map((node) => node.id))
  );
}

if (!fs.existsSync(overlayPath)) {
  fail('Missing mathematics assessment overlay catalog');
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
    fail(`Assessment overlay missing coverage units: ${overlay.overlay_id}`);
    continue;
  }

  for (const unit of overlay.coverage_units) {
    if (!Array.isArray(unit.mapped_capability_nodes) || unit.mapped_capability_nodes.length === 0) {
      fail(`Assessment overlay unit missing mapped nodes: ${overlay.overlay_id} -> ${unit.unit_id}`);
      continue;
    }
    for (const nodeId of unit.mapped_capability_nodes) {
      if (!graphNodes.has(nodeId)) {
        fail(`Assessment overlay references missing graph node: ${overlay.overlay_id} -> ${unit.unit_id} -> ${nodeId}`);
      }
    }
  }
}

for (const overlayId of requiredOverlayIds) {
  if (!seen.has(overlayId)) {
    fail(`Missing required mathematics assessment overlay: ${overlayId}`);
  }
}

const actOverlay = overlayIndex.get('act-mathematics-overlay');
if (actOverlay) {
  const unitIds = new Set((actOverlay.coverage_units || []).map((unit) => unit.unit_id));
  for (const requiredUnitId of ['act-integrating-essential-skills', 'act-modeling']) {
    if (!unitIds.has(requiredUnitId)) {
      fail(`ACT mathematics overlay missing required coverage unit: ${requiredUnitId}`);
    }
  }
}

for (const overlayId of [
  'ib-mathematics-aa-sl-overlay',
  'ib-mathematics-aa-hl-overlay',
  'ib-mathematics-ai-sl-overlay',
  'ib-mathematics-ai-hl-overlay',
]) {
  const overlay = overlayIndex.get(overlayId);
  if (!overlay) {
    continue;
  }
  if (overlay.overlay_summary_classification !== 'content_partial') {
    fail(`IB level overlay should currently remain content_partial until level-specific lifts are governed: ${overlayId}`);
  }
}

if (!hasFailure) {
  console.log(`Mathematics assessment overlay validation passed: ${overlays.length} overlays.`);
}

process.exitCode = hasFailure ? 1 : 0;
