#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const inventoryPath = path.join(repoRoot, 'docs', 'standards', 'social-studies-standards-inventory.json');
const nodeMapPath = path.join(repoRoot, 'docs', 'standards', 'social-studies-node-standards-map.json');
const reportPath = path.join(repoRoot, 'docs', 'standards', 'social-studies-standards-coverage-report.json');

let hasFailure = false;

function fail(message) {
  hasFailure = true;
  console.error(message);
}

function readJson(absolutePath) {
  return JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
}

for (const absolute of [inventoryPath, nodeMapPath, reportPath]) {
  if (!fs.existsSync(absolute)) {
    fail(`Missing social studies standards artifact: ${path.relative(repoRoot, absolute)}`);
  }
}

if (hasFailure) {
  process.exitCode = 1;
  process.exit();
}

const inventory = readJson(inventoryPath);
const nodeMap = readJson(nodeMapPath);
const report = readJson(reportPath);

if ((inventory.standards || []).length !== report.meta?.summary?.total_inventory_records) {
  fail(`Social studies standards inventory count mismatch: inventory=${(inventory.standards || []).length} report=${report.meta?.summary?.total_inventory_records}`);
}

const coverageEntries = report.coverage || [];
const matchedNodeCountFromCoverage = coverageEntries.reduce((sum, entry) => sum + (entry.matched_nodes || 0), 0);

if ((coverageEntries.length || 0) !== (inventory.standards || []).length) {
  fail(`Social studies standards coverage entry count mismatch: coverage=${coverageEntries.length} inventory=${(inventory.standards || []).length}`);
}

const reconciledSummaryCount =
  (report.meta?.summary?.covered || 0) +
  (report.meta?.summary?.partially_covered || 0) +
  (report.meta?.summary?.unmapped || 0) +
  (report.meta?.summary?.out_of_scope || 0);

if (reconciledSummaryCount !== (inventory.standards || []).length) {
  fail(`Social studies standards summary count mismatch: summary=${reconciledSummaryCount} inventory=${(inventory.standards || []).length}`);
}

if ((report.meta?.summary?.unmapped || 0) > 0) {
  fail(`Social studies standards coverage report contains unmapped standards: ${report.meta.summary.unmapped}`);
}

if ((report.meta?.summary?.orphan_node_mappings || 0) > 0) {
  fail(`Social studies standards coverage report contains orphan node mappings: ${report.meta.summary.orphan_node_mappings}`);
}

if (!hasFailure) {
  console.log(
    `Social studies standards coverage validation passed: ${report.meta.summary.total_inventory_records} inventory records, ${report.meta.summary.covered} covered, ${report.meta.summary.partially_covered} partially covered, ${report.meta.summary.out_of_scope} out of scope, ${matchedNodeCountFromCoverage} matched-node links across ${nodeMap.node_mappings.length} node mappings.`
  );
}

process.exitCode = hasFailure ? 1 : 0;
