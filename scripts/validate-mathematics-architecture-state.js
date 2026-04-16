#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const architecturePath = path.join(repoRoot, 'domains', 'mathematics', 'k12-expansion-architecture.md');
const planPath = path.join(repoRoot, 'domains', 'mathematics', 'k12-expansion-plan.md');
const overlayModelPath = path.join(repoRoot, 'domains', 'mathematics', 'assessment-overlay-model.md');
const decompositionContractPath = path.join(repoRoot, 'domains', 'mathematics', 'advanced-node-decomposition-contract.md');

let hasFailure = false;

function fail(message) {
  hasFailure = true;
  console.error(message);
}

function read(absolutePath) {
  return fs.readFileSync(absolutePath, 'utf8');
}

for (const absolutePath of [architecturePath, planPath, overlayModelPath, decompositionContractPath]) {
  if (!fs.existsSync(absolutePath)) {
    fail(`Missing mathematics architecture artifact: ${path.relative(repoRoot, absolutePath)}`);
  }
}

if (!hasFailure) {
  const architectureText = read(architecturePath);
  const planText = read(planPath);

  const staleArchitecturePatterns = [
    /not yet modeled in the master graph/g,
  ];

  for (const pattern of staleArchitecturePatterns) {
    if (pattern.test(architectureText)) {
      fail(`Stale mathematics architecture claim still present in ${path.relative(repoRoot, architecturePath)}: ${pattern}`);
    }
  }

  const stalePlanPatterns = [
    /secondary and AP families are not yet modeled/g,
  ];

  for (const pattern of stalePlanPatterns) {
    if (pattern.test(planText)) {
      fail(`Stale mathematics expansion-plan claim still present in ${path.relative(repoRoot, planPath)}: ${pattern}`);
    }
  }
}

if (!hasFailure) {
  console.log('Mathematics architecture-state validation passed.');
}

process.exitCode = hasFailure ? 1 : 0;
