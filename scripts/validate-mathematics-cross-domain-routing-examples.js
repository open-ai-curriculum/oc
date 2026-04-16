#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const runtimeSlicePath = path.join(
  repoRoot,
  'domains',
  'mathematics',
  'runtime',
  'fraction-spine-cross-domain-runtime-slice.yaml'
);
const examplesPath = path.join(
  repoRoot,
  'domains',
  'mathematics',
  'runtime',
  'fraction-spine-cross-domain-routing-examples.yaml'
);
const attachmentRegistryPath = path.join(
  repoRoot,
  'domains',
  'learning_to_learn',
  'cross-domain-attachments',
  'attachment-registry.yaml'
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

function getExpectedLearningNodes(attachments, nodeId, failureModes) {
  return (attachments.attachments || [])
    .filter((attachment) => {
      if (attachment.subject_domain !== 'mathematics') return false;
      if (attachment.subject_node_id !== nodeId) return false;
      const targets = new Set(attachment.subject_failure_mode_targets || []);
      return failureModes.some((mode) => targets.has(mode));
    })
    .map((attachment) => attachment.learning_to_learn_node_id);
}

const runtimeSlice = loadYamlAsJson(runtimeSlicePath);
const examples = loadYamlAsJson(examplesPath);
const attachments = loadYamlAsJson(attachmentRegistryPath);

const rules = new Map((runtimeSlice.navigation_rules || []).map((rule) => [rule.rule_id, rule]));

if (examples.slice_id !== runtimeSlice.slice_id) {
  fail(`Routing examples slice_id does not match runtime slice: ${examples.slice_id} vs ${runtimeSlice.slice_id}`);
}

for (const example of examples.examples || []) {
  const expected = example.expected_decision || {};
  const learnerState = example.learner_state || {};
  const flags = example.evidence_flags || {};
  const rule = rules.get(expected.rule_id);

  if (!rule) {
    fail(`Routing example references missing rule: ${example.example_id} -> ${expected.rule_id}`);
    continue;
  }

  if (rule.decision_type !== expected.decision_type) {
    fail(
      `Routing example decision type mismatch: ${example.example_id} expected ${expected.decision_type} but rule declares ${rule.decision_type}`
    );
  }

  if (!rule.applies_when.some((condition) => condition.includes(`current_node_id = ${learnerState.node_id}`) || condition.includes('current_node_status'))) {
    fail(`Routing rule does not obviously target the example node/status: ${example.example_id} -> ${expected.rule_id}`);
  }

  const dominantFailureModes = learnerState.dominant_failure_modes || [];
  const routedNodes = expected.routed_learning_to_learn_nodes || [];
  const allowedNodes = new Set(getExpectedLearningNodes(attachments, learnerState.node_id, dominantFailureModes));

  for (const routedNode of routedNodes) {
    if (expected.rule_id === 'fraction-cross-domain-reverify-dual-stability') {
      if (!flags.prior_progress_depended_on_learning_process_support_route) {
        fail(`Dual reverification example must declare prior learning-process support dependency: ${example.example_id}`);
      }
      continue;
    }

    if (!allowedNodes.has(routedNode)) {
      fail(
        `Routing example uses learning-to-learn node not justified by attachment registry: ${example.example_id} -> ${routedNode}`
      );
    }
  }
}

if (!hasFailure) {
  console.log(
    `Mathematics cross-domain routing examples audit passed: ${(examples.examples || []).length} worked routing examples.`
  );
}

process.exitCode = hasFailure ? 1 : 0;
