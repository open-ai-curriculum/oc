#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const registerPath = path.join(repoRoot, 'domains', 'social_studies', 'assessment-framework-assurance-register.json');
const overlayCatalogPath = path.join(repoRoot, 'domains', 'social_studies', 'assessment-overlays', 'assessment-overlays.json');
const coverageSummaryPath = path.join(repoRoot, 'domains', 'social_studies', 'assessment-overlays', 'coverage-summary.json');
const externalScanPath = path.join(repoRoot, 'domains', 'social_studies', 'external-assessment-coverage-scan.md');

let hasFailure = false;

function fail(message) {
  hasFailure = true;
  console.error(message);
}

for (const absolute of [registerPath, overlayCatalogPath, coverageSummaryPath, externalScanPath]) {
  if (!fs.existsSync(absolute)) {
    fail(`Missing social studies assessment assurance artifact: ${path.relative(repoRoot, absolute)}`);
  }
}

if (hasFailure) {
  process.exitCode = 1;
  process.exit();
}

const register = JSON.parse(fs.readFileSync(registerPath, 'utf8'));
const overlayCatalog = JSON.parse(fs.readFileSync(overlayCatalogPath, 'utf8'));
const coverageSummary = JSON.parse(fs.readFileSync(coverageSummaryPath, 'utf8'));
const scanText = fs.readFileSync(externalScanPath, 'utf8');

const byFamily = new Map((register.frameworks || []).map((entry) => [entry.assessment_family, entry]));
const overlayFamilies = new Set((overlayCatalog.overlays || []).map((overlay) => overlay.assessment_family));

for (const family of overlayFamilies) {
  const entry = byFamily.get(family);
  if (!entry) {
    fail(`Assessment assurance register missing overlay-backed family: ${family}`);
    continue;
  }
  if (!entry.maintained_overlay_present) {
    fail(`Overlay-backed social studies family must remain marked as maintained_overlay_present: ${family}`);
  }
}

for (const family of ['State social studies achievement tests', 'NAEP social studies-related frameworks']) {
  const entry = byFamily.get(family);
  if (!entry) {
    fail(`Assessment assurance register missing non-overlay family: ${family}`);
    continue;
  }
  if (entry.maintained_overlay_present) {
    fail(`Non-overlay social studies framework must not be marked as overlay-backed: ${family}`);
  }
}

if ((register.frameworks || []).length !== 9) {
  fail(`Social studies assessment assurance framework count mismatch: found ${(register.frameworks || []).length} expected 9`);
}

if ((coverageSummary.meta?.overlay_count || 0) !== overlayFamilies.size) {
  fail(`Social studies overlay summary drift: summary=${coverageSummary.meta?.overlay_count} catalog=${overlayFamilies.size}`);
}

const govEntry = byFamily.get('AP United States Government and Politics');
if (!govEntry || govEntry.current_graph_posture !== 'strong' || govEntry.official_blueprint_verified) {
  fail('AP United States Government and Politics must remain strong in graph posture and not yet blueprint-verified');
}

const geographyEntry = byFamily.get('AP Human Geography');
if (!geographyEntry || geographyEntry.current_graph_posture !== 'strong' || geographyEntry.official_blueprint_verified) {
  fail('AP Human Geography must remain strong in graph posture and not yet blueprint-verified');
}

const microEntry = byFamily.get('AP Microeconomics');
if (!microEntry) {
  fail('Assessment assurance register missing AP Microeconomics');
} else {
  if (microEntry.assurance_classification !== 'overlay_backed_exploratory_course_specificity') {
    fail('AP Microeconomics must remain classified as overlay_backed_exploratory_course_specificity');
  }
  if (microEntry.current_graph_posture !== 'provisional') {
    fail('AP Microeconomics must remain provisional in graph posture');
  }
}

const comparativeEntry = byFamily.get('AP Comparative Government and Politics');
if (!comparativeEntry || comparativeEntry.current_graph_posture !== 'partial') {
  fail('AP Comparative Government and Politics must remain partial in graph posture');
}

const macroEntry = byFamily.get('AP Macroeconomics');
if (!macroEntry || macroEntry.current_graph_posture !== 'partial') {
  fail('AP Macroeconomics must remain partial in graph posture');
}

const stateEntry = byFamily.get('State social studies achievement tests');
if (!stateEntry || stateEntry.assurance_classification !== 'standards_surface_only') {
  fail('State social studies achievement tests must remain classified as standards_surface_only');
}

const naepEntry = byFamily.get('NAEP social studies-related frameworks');
if (!naepEntry || naepEntry.assurance_classification !== 'provisional_framework_scan_needed') {
  fail('NAEP social studies-related frameworks must remain classified as provisional_framework_scan_needed');
}

for (const requiredPhrase of [
  'AP United States Government and Politics',
  'AP Human Geography',
  'AP Comparative Government country-case specificity',
  'AP Macroeconomics and AP Microeconomics formal course resolution',
]) {
  if (!scanText.includes(requiredPhrase)) {
    fail(`External assessment scan missing required assurance phrase: ${requiredPhrase}`);
  }
}

if (!hasFailure) {
  console.log(`Social studies assessment framework assurance validation passed: ${(register.frameworks || []).length} frameworks.`);
}

process.exitCode = hasFailure ? 1 : 0;
