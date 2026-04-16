#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const graphPath = path.join(repoRoot, 'domains', 'mathematics', 'master-knowledge-graph.yaml');
const overlayPath = path.join(repoRoot, 'domains', 'mathematics', 'assessment-overlays', 'assessment-overlays.json');
const externalScanPath = path.join(repoRoot, 'domains', 'mathematics', 'external-assessment-coverage-scan.md');
const architecturePath = path.join(repoRoot, 'domains', 'mathematics', 'k12-expansion-architecture.md');
const assessmentArtifactRegistryPath = path.join(
  repoRoot,
  'domains',
  'mathematics',
  'artifact-attachments',
  'assessment-surface-attachment-registry.yaml'
);

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

function ensureFile(absolutePath) {
  if (!fs.existsSync(absolutePath)) {
    fail(`Missing maintained mathematics analysis artifact: ${path.relative(repoRoot, absolutePath)}`);
    return false;
  }
  return true;
}

if (![graphPath, overlayPath, externalScanPath, architecturePath].every(ensureFile)) {
  process.exitCode = 1;
  process.exit();
}

const graph = loadYamlAsJson(graphPath);
const graphNodeIds = new Set(
  (graph.families || []).flatMap((family) => (family.nodes || []).map((node) => node.id))
);
const overlays = JSON.parse(fs.readFileSync(overlayPath, 'utf8')).overlays || [];
const overlayIds = new Set(overlays.map((overlay) => overlay.overlay_id));
const externalScan = fs.readFileSync(externalScanPath, 'utf8');
const architecture = fs.readFileSync(architecturePath, 'utf8');

const prerequisites = {
  hasApStatsDecomposition: ['W5', 'W6', 'W7', 'W8', 'W9', 'AP1'].every((nodeId) => graphNodeIds.has(nodeId)),
  hasApPrecalculusDecomposition: ['B6', 'B8', 'B9', 'B10', 'AP2'].every((nodeId) => graphNodeIds.has(nodeId)),
  hasApCalculusDecomposition: ['AP3', 'AP4', 'AP5', 'AP6', 'AP7', 'AP8', 'AP9'].every((nodeId) => graphNodeIds.has(nodeId)),
  hasApOverlays:
    overlayIds.has('ap-statistics-overlay') &&
    overlayIds.has('ap-precalculus-overlay') &&
    overlayIds.has('ap-calculus-ab-overlay') &&
    overlayIds.has('ap-calculus-bc-overlay'),
  hasIbOverlays:
    overlayIds.has('ib-mathematics-aa-overlay') &&
    overlayIds.has('ib-mathematics-ai-overlay'),
  hasIbLevelOverlays:
    overlayIds.has('ib-mathematics-aa-sl-overlay') &&
    overlayIds.has('ib-mathematics-aa-hl-overlay') &&
    overlayIds.has('ib-mathematics-ai-sl-overlay') &&
    overlayIds.has('ib-mathematics-ai-hl-overlay'),
};

const staleClaimChecks = [];

if (prerequisites.hasApStatsDecomposition) {
  staleClaimChecks.push({
    document: externalScanPath,
    text: externalScan,
    patterns: [
      /AP Statistics[\s\S]{0,500}compressed into too few capability nodes/i,
      /AP Statistics[\s\S]{0,500}substantial_but_compressed/i,
      /AP Statistics[\s\S]{0,500}not yet implemented/i,
    ],
    reason: 'AP Statistics topology is now decomposed into explicit unit-facing capability surfaces.',
  });
}

if (prerequisites.hasApPrecalculusDecomposition) {
  staleClaimChecks.push({
    document: externalScanPath,
    text: externalScan,
    patterns: [
      /AP Precalculus[\s\S]{0,500}compressed into too few capability nodes/i,
      /AP Precalculus[\s\S]{0,500}substantial_but_compressed/i,
      /AP Precalculus[\s\S]{0,500}not yet implemented/i,
    ],
    reason: 'AP Precalculus topology is now decomposed into explicit advanced-topic capability surfaces.',
  });
}

if (prerequisites.hasApCalculusDecomposition) {
  staleClaimChecks.push({
    document: externalScanPath,
    text: externalScan,
    patterns: [
      /AP Calculus(?:\s+AB\s+\/\s+BC|\s+AB|\s+BC)?[\s\S]{0,500}compressed into too few capability nodes/i,
      /AP Calculus(?:\s+AB\s+\/\s+BC|\s+AB|\s+BC)?[\s\S]{0,500}substantial_but_compressed/i,
      /AP Calculus(?:\s+AB\s+\/\s+BC|\s+AB|\s+BC)?[\s\S]{0,500}not yet implemented/i,
    ],
    reason: 'AP Calculus topology is now decomposed into explicit limits, derivatives, integrals, differential-equations, and BC-extension surfaces.',
  });
}

if (prerequisites.hasApOverlays) {
  staleClaimChecks.push({
    document: externalScanPath,
    text: externalScan,
    patterns: [
      /SAT\/PSAT overlay(?:s)? (?:are|is) (?:still )?missing/i,
      /future exam-overlay view/i,
      /AP (?:Statistics|Precalculus|Calculus)[\s\S]{0,300}overlay(?:s)? (?:are|is) not yet implemented/i,
    ],
    reason: 'Maintained SAT/PSAT and AP overlays now exist and stale absence claims should not reappear.',
  });
}

if (prerequisites.hasIbOverlays) {
  staleClaimChecks.push({
    document: externalScanPath,
    text: externalScan,
    patterns: [
      /IB (?:AA|AI) overlay(?:s)? (?:are|is) not yet implemented/i,
      /IB Diploma Programme[\s\S]{0,400}overlay(?:s)? (?:are|is) not yet implemented/i,
    ],
    reason: 'Maintained IB AA and IB AI overlays now exist.',
  });
}

if (prerequisites.hasIbLevelOverlays) {
  staleClaimChecks.push({
    document: externalScanPath,
    text: externalScan,
    patterns: [
      /no explicit SL versus HL overlay/i,
      /explicit SL versus HL overlay splits/i,
    ],
    reason: 'Maintained IB AA/AI SL/HL overlays now exist and the scan should not describe them as absent.',
  });
}

if (fs.existsSync(assessmentArtifactRegistryPath)) {
  staleClaimChecks.push({
    document: externalScanPath,
    text: externalScan,
    patterns: [
      /no explicit internal exploration artifact contract for IB-style assessment/i,
    ],
    reason: 'An initial assessment-surface artifact registry now exists for IB-facing governance support.',
  });
}

if (prerequisites.hasApStatsDecomposition || prerequisites.hasApPrecalculusDecomposition || prerequisites.hasApCalculusDecomposition) {
  staleClaimChecks.push({
    document: architecturePath,
    text: architecture,
    patterns: [
      /AP units are still compressed into too few capability nodes/i,
      /Current status:\s*[\s\S]{0,120}modeled at a pathway level[\s\S]{0,180}Remaining issue:\s*[\s\S]{0,220}compressed/i,
      /Band 6\.[\s\S]{0,500}partially modeled through broad advanced-function and AP Precalculus-facing nodes/i,
    ],
    reason: 'The architecture document should reflect the implemented AP and precalculus decomposition state.',
  });
}

for (const check of staleClaimChecks) {
  for (const pattern of check.patterns) {
    if (pattern.test(check.text)) {
      fail(
        `Stale mathematics assessment-analysis claim in ${path.relative(repoRoot, check.document)}: ${pattern} (${check.reason})`
      );
    }
  }
}

if (!hasFailure) {
  console.log('Mathematics assessment-analysis state validation passed.');
}

process.exitCode = hasFailure ? 1 : 0;
