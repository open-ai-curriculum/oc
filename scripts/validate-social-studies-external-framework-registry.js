#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const registryPath = path.join(repoRoot, 'docs', 'standards', 'social-studies', 'social-studies-external-framework-registry.json');
const assurancePath = path.join(repoRoot, 'domains', 'social_studies', 'assessment-framework-assurance-register.json');
const overlayCatalogPath = path.join(repoRoot, 'domains', 'social_studies', 'assessment-overlays', 'assessment-overlays.json');
const codifiedFrameworkProfiles = new Map([
  ['AP United States Government and Politics', path.join(repoRoot, 'docs', 'standards', 'social-studies', 'ap-united-states-government-and-politics-framework-profile.md')],
  ['AP Human Geography', path.join(repoRoot, 'docs', 'standards', 'social-studies', 'ap-human-geography-framework-profile.md')],
  ['AP United States History', path.join(repoRoot, 'docs', 'standards', 'social-studies', 'ap-united-states-history-framework-profile.md')],
  ['AP Macroeconomics', path.join(repoRoot, 'docs', 'standards', 'social-studies', 'ap-macroeconomics-framework-profile.md')],
  ['AP World History: Modern', path.join(repoRoot, 'docs', 'standards', 'social-studies', 'ap-world-history-modern-framework-profile.md')],
  ['AP Comparative Government and Politics', path.join(repoRoot, 'docs', 'standards', 'social-studies', 'ap-comparative-government-and-politics-framework-profile.md')],
  ['AP Microeconomics', path.join(repoRoot, 'docs', 'standards', 'social-studies', 'ap-microeconomics-framework-profile.md')],
]);
const readyForMappingAuditPaths = new Map([
  ['AP United States Government and Politics', path.join(repoRoot, 'docs', 'standards', 'social-studies', 'ap-united-states-government-and-politics-public-framework-audit.md')],
  ['AP Human Geography', path.join(repoRoot, 'docs', 'standards', 'social-studies', 'ap-human-geography-public-framework-audit.md')],
  ['AP United States History', path.join(repoRoot, 'docs', 'standards', 'social-studies', 'ap-united-states-history-public-framework-audit.md')],
  ['AP Macroeconomics', path.join(repoRoot, 'docs', 'standards', 'social-studies', 'ap-macroeconomics-public-framework-audit.md')],
]);

let hasFailure = false;

function fail(message) {
  hasFailure = true;
  console.error(message);
}

for (const absolute of [registryPath, assurancePath, overlayCatalogPath, ...codifiedFrameworkProfiles.values(), ...readyForMappingAuditPaths.values()]) {
  if (!fs.existsSync(absolute)) {
    fail(`Missing social studies external-framework artifact: ${path.relative(repoRoot, absolute)}`);
  }
}

if (hasFailure) {
  process.exitCode = 1;
  process.exit();
}

const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
const assurance = JSON.parse(fs.readFileSync(assurancePath, 'utf8'));
const overlays = JSON.parse(fs.readFileSync(overlayCatalogPath, 'utf8'));

const registryByFamily = new Map((registry.frameworks || []).map((entry) => [entry.framework_family, entry]));
const assuranceByFamily = new Map((assurance.frameworks || []).map((entry) => [entry.assessment_family, entry]));
const overlayFamilies = new Set((overlays.overlays || []).map((entry) => entry.assessment_family));

for (const family of overlayFamilies) {
  const registryEntry = registryByFamily.get(family);
  const assuranceEntry = assuranceByFamily.get(family);

  if (!registryEntry) {
    fail(`External framework registry missing overlay-backed family: ${family}`);
    continue;
  }
  if (!assuranceEntry) {
    fail(`Assessment assurance register missing family that appears in overlay catalog: ${family}`);
    continue;
  }
  if (registryEntry.current_repository_posture !== 'overlay_backed_profile_only') {
    if (
      !codifiedFrameworkProfiles.has(family) ||
      !['structurally_codified', 'ready_for_mapping_review'].includes(registryEntry.current_repository_posture)
    ) {
      fail(`Overlay-backed family has invalid external framework registry posture: ${family} -> ${registryEntry.current_repository_posture}`);
    }
  }
  if (registryEntry.current_graph_posture !== assuranceEntry.current_graph_posture) {
    fail(`External framework registry graph-posture drift for ${family}: registry=${registryEntry.current_graph_posture} assurance=${assuranceEntry.current_graph_posture}`);
  }
}

for (const [family, profilePath] of codifiedFrameworkProfiles.entries()) {
  const registryEntry = registryByFamily.get(family);
  if (!registryEntry) {
    fail(`External framework registry missing codified framework family: ${family}`);
    continue;
  }
  if (!['structurally_codified', 'ready_for_mapping_review'].includes(registryEntry.current_repository_posture)) {
    fail(`Codified framework family has invalid posture in external framework registry: ${family} -> ${registryEntry.current_repository_posture}`);
  }
  if (!fs.existsSync(profilePath)) {
    fail(`Missing codified framework profile: ${path.relative(repoRoot, profilePath)}`);
  }
}

for (const [family, auditPath] of readyForMappingAuditPaths.entries()) {
  const registryEntry = registryByFamily.get(family);
  if (!registryEntry) {
    fail(`External framework registry missing ready-for-mapping family: ${family}`);
    continue;
  }
  if (registryEntry.current_repository_posture !== 'ready_for_mapping_review') {
    fail(`Ready-for-mapping family must remain ready_for_mapping_review in external framework registry: ${family}`);
  }
  if (!fs.existsSync(auditPath)) {
    fail(`Missing public framework audit for ready-for-mapping family: ${path.relative(repoRoot, auditPath)}`);
  }
}

for (const family of ['NAEP social studies-related frameworks', 'C3 Framework for Social Studies State Standards']) {
  const registryEntry = registryByFamily.get(family);
  if (!registryEntry) {
    fail(`External framework registry missing planned family: ${family}`);
  } else if (registryEntry.current_repository_posture !== 'planned') {
    fail(`Planned external framework family drifted from planned posture: ${family}`);
  }
}

if ((registry.frameworks || []).length !== 9) {
  fail(`Social studies external framework registry count mismatch: found ${(registry.frameworks || []).length} expected 9`);
}

if (!hasFailure) {
  console.log(`Social studies external framework registry validation passed: ${(registry.frameworks || []).length} framework families.`);
}

process.exitCode = hasFailure ? 1 : 0;
