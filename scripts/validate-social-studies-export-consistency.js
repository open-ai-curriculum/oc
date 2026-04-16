#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const overlayCatalogPath = path.join(repoRoot, 'domains', 'social_studies', 'assessment-overlays', 'assessment-overlays.json');
const overlaySummaryPath = path.join(repoRoot, 'domains', 'social_studies', 'assessment-overlays', 'coverage-summary.json');
const operationalSummaryPath = path.join(repoRoot, 'domains', 'social_studies', 'exports', 'operational-graph', 'social-studies-operational-summary.json');
const gephiNodesPath = path.join(repoRoot, 'domains', 'social_studies', 'exports', 'gephi', 'social-studies-gephi-nodes.csv');

let hasFailure = false;

function fail(message) {
  hasFailure = true;
  console.error(message);
}

function ensureFile(filePath) {
  if (!fs.existsSync(filePath)) {
    fail(`Missing social studies export artifact: ${path.relative(repoRoot, filePath)}`);
    return false;
  }
  return true;
}

function countEntityTypeLines(text, entityType) {
  return text.split('\n').slice(1).filter((line) => line.includes(`,${entityType},`)).length;
}

if (![overlayCatalogPath, overlaySummaryPath, operationalSummaryPath, gephiNodesPath].every(ensureFile)) {
  process.exitCode = 1;
  process.exit();
}

const overlayCatalog = JSON.parse(fs.readFileSync(overlayCatalogPath, 'utf8'));
const overlaySummary = JSON.parse(fs.readFileSync(overlaySummaryPath, 'utf8'));
const operationalSummary = JSON.parse(fs.readFileSync(operationalSummaryPath, 'utf8'));
const gephiCsv = fs.readFileSync(gephiNodesPath, 'utf8');

const overlayCount = (overlayCatalog.overlays || []).length;
const overlayUnitCount = (overlayCatalog.overlays || []).reduce((sum, overlay) => sum + ((overlay.coverage_units || []).length), 0);

if (overlaySummary.meta?.overlay_count !== overlayCount) {
  fail(`Social studies assessment overlay summary count mismatch: summary=${overlaySummary.meta?.overlay_count} catalog=${overlayCount}`);
}

const operationalOverlayCount = operationalSummary.entity_type_counts?.AssessmentOverlay || 0;
const operationalUnitCount = operationalSummary.entity_type_counts?.AssessmentUnit || 0;

if (operationalOverlayCount !== overlayCount) {
  fail(`Social studies operational export overlay count mismatch: operational=${operationalOverlayCount} catalog=${overlayCount}`);
}

if (operationalUnitCount !== overlayUnitCount) {
  fail(`Social studies operational export assessment-unit count mismatch: operational=${operationalUnitCount} catalog=${overlayUnitCount}`);
}

const gephiOverlayCount = countEntityTypeLines(gephiCsv, 'AssessmentOverlay');
const gephiUnitCount = countEntityTypeLines(gephiCsv, 'AssessmentUnit');

if (gephiOverlayCount !== overlayCount) {
  fail(`Social studies Gephi export overlay count mismatch: gephi=${gephiOverlayCount} catalog=${overlayCount}`);
}

if (gephiUnitCount !== overlayUnitCount) {
  fail(`Social studies Gephi export assessment-unit count mismatch: gephi=${gephiUnitCount} catalog=${overlayUnitCount}`);
}

if (!hasFailure) {
  console.log(`Social studies export consistency validation passed: ${overlayCount} overlays, ${overlayUnitCount} assessment units.`);
}

process.exitCode = hasFailure ? 1 : 0;
