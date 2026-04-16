#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const registerPath = path.join(repoRoot, 'domains', 'mathematics', 'assessment-framework-assurance-register.json');
const overlayCatalogPath = path.join(repoRoot, 'domains', 'mathematics', 'assessment-overlays', 'assessment-overlays.json');
const externalScanPath = path.join(repoRoot, 'domains', 'mathematics', 'external-assessment-coverage-scan.md');
const naepDecisionPath = path.join(repoRoot, 'domains', 'mathematics', 'naep-grade-12-compression-decision.md');

let hasFailure = false;

function fail(message) {
  hasFailure = true;
  console.error(message);
}

for (const absolute of [registerPath, overlayCatalogPath, externalScanPath, naepDecisionPath]) {
  if (!fs.existsSync(absolute)) {
    fail(`Missing mathematics assessment assurance artifact: ${path.relative(repoRoot, absolute)}`);
  }
}

if (hasFailure) {
  process.exitCode = 1;
  process.exit();
}

const register = JSON.parse(fs.readFileSync(registerPath, 'utf8'));
const overlayCatalog = JSON.parse(fs.readFileSync(overlayCatalogPath, 'utf8'));
const scanText = fs.readFileSync(externalScanPath, 'utf8');
const naepDecisionText = fs.readFileSync(naepDecisionPath, 'utf8');

const byFamily = new Map((register.frameworks || []).map((entry) => [entry.assessment_family, entry]));
const overlayFamilies = new Set((overlayCatalog.overlays || []).map((overlay) => overlay.assessment_family));

for (const family of ['SAT', 'PSAT/NMSQT', 'ACT', 'AP Statistics', 'AP Precalculus', 'AP Calculus AB', 'AP Calculus BC']) {
  const entry = byFamily.get(family);
  if (!entry) {
    fail(`Assessment assurance register missing family: ${family}`);
    continue;
  }
  if (!entry.maintained_overlay_present || !overlayFamilies.has(family)) {
    fail(`Assessment assurance register/overlay catalog drift for overlay-backed family: ${family}`);
  }
}

const ibEntry = byFamily.get('IB DP Mathematics');
if (!ibEntry || !ibEntry.maintained_overlay_present || !ibEntry.official_blueprint_verified) {
  fail('IB DP Mathematics must remain marked as overlay-backed and blueprint-verified in the assurance register');
}

const naepEntry = byFamily.get('NAEP');
if (!naepEntry || naepEntry.assurance_classification !== 'framework_verified_with_accepted_grade_12_compression') {
  fail('NAEP must remain classified as framework_verified_with_accepted_grade_12_compression');
}
if (naepEntry && !/substantial but compressed at grade 12/i.test(scanText)) {
  fail('External assessment scan must continue to state that NAEP remains substantial but compressed at grade 12');
}
if (!/accepted near-term architecture decision/i.test(naepDecisionText)) {
  fail('NAEP grade-12 compression decision document must explicitly state that the compression boundary is accepted');
}

const terraNovaEntry = byFamily.get('TerraNova');
if (!terraNovaEntry) {
  fail('Assessment assurance register missing TerraNova');
} else {
  if (terraNovaEntry.assurance_classification !== 'provisional_unverified_blueprint') {
    fail('TerraNova must remain classified as provisional_unverified_blueprint');
  }
  if (terraNovaEntry.official_blueprint_verified) {
    fail('TerraNova must not be marked blueprint-verified without a codified official blueprint');
  }
  if (terraNovaEntry.maintained_overlay_present) {
    fail('TerraNova must not be marked as having a maintained overlay in the current repository state');
  }
}

if (!/TerraNova remains provisional/i.test(scanText)) {
  fail('External assessment scan must continue to describe TerraNova as provisional');
}

if (!hasFailure) {
  console.log(`Mathematics assessment framework assurance validation passed: ${(register.frameworks || []).length} frameworks.`);
}

process.exitCode = hasFailure ? 1 : 0;
