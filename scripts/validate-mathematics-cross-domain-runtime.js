#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const runtimeRoot = path.join(repoRoot, 'domains', 'mathematics', 'runtime');
const runtimeSlicePath = path.join(runtimeRoot, 'fraction-spine-cross-domain-runtime-slice.yaml');
const schemaPath = path.join(runtimeRoot, 'cross-domain-runtime-slice.schema.json');
const attachmentRegistryPath = path.join(
  repoRoot,
  'domains',
  'learning_to_learn',
  'cross-domain-attachments',
  'attachment-registry.yaml'
);
const mathGraphPath = path.join(repoRoot, 'domains', 'mathematics', 'master-knowledge-graph.yaml');
const learningToLearnGraphPath = path.join(repoRoot, 'domains', 'learning_to_learn', 'capability-graph.yaml');

let hasFailure = false;

function fail(message) {
  hasFailure = true;
  console.error(message);
}

function readJson(absolutePath) {
  return JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
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

function validateRequiredFiles() {
  for (const absolute of [runtimeSlicePath, schemaPath, attachmentRegistryPath, mathGraphPath, learningToLearnGraphPath]) {
    if (!fs.existsSync(absolute)) {
      fail(`Missing required mathematics cross-domain runtime artifact: ${path.relative(repoRoot, absolute)}`);
    }
  }
}

function validateAgainstSchema(runtimeSlice, schema) {
  const required = schema.required || [];
  for (const key of required) {
    if (!(key in runtimeSlice)) {
      fail(`Cross-domain runtime slice missing required top-level key: ${key}`);
    }
  }

  if (runtimeSlice.domain !== 'mathematics') {
    fail(`Cross-domain runtime slice has unexpected domain: ${runtimeSlice.domain}`);
  }

  const allowedStatuses = new Set(['draft', 'review', 'approved']);
  if (!allowedStatuses.has(runtimeSlice.status)) {
    fail(`Cross-domain runtime slice has invalid status: ${runtimeSlice.status}`);
  }
  if (!allowedStatuses.has(runtimeSlice.review_status)) {
    fail(`Cross-domain runtime slice has invalid review_status: ${runtimeSlice.review_status}`);
  }

  const allowedDecisionTypes = new Set(['teach_next', 'hold_current', 'route_upstream', 'reverify', 'accelerate']);
  for (const rule of runtimeSlice.navigation_rules || []) {
    if (!allowedDecisionTypes.has(rule.decision_type)) {
      fail(`Cross-domain runtime rule has invalid decision type: ${rule.rule_id} -> ${rule.decision_type}`);
    }
    if (!Array.isArray(rule.applies_when) || rule.applies_when.length === 0) {
      fail(`Cross-domain runtime rule must declare applies_when conditions: ${rule.rule_id}`);
    }
  }
}

function loadGraphNodeIds(absolutePath) {
  const graph = loadYamlAsJson(absolutePath);
  const ids = new Set();
  for (const family of graph.families || []) {
    for (const node of family.nodes || []) {
      ids.add(node.id);
    }
  }
  return ids;
}

function validateNodeIds(runtimeSlice, mathNodeIds) {
  for (const nodeId of runtimeSlice.node_ids || []) {
    if (!mathNodeIds.has(nodeId)) {
      fail(`Cross-domain runtime slice references unknown mathematics node: ${nodeId}`);
    }
  }
  for (const nodeId of runtimeSlice.entry_node_ids || []) {
    if (!mathNodeIds.has(nodeId)) {
      fail(`Cross-domain runtime slice references unknown mathematics entry node: ${nodeId}`);
    }
  }
}

function validateAttachmentRegistryReference(runtimeSlice) {
  const expected = 'domains/learning_to_learn/cross-domain-attachments/attachment-registry.yaml';
  if (runtimeSlice.artifact_registry_reference !== expected) {
    fail(
      `Cross-domain runtime slice must reference the learning-to-learn attachment registry: expected ${expected} got ${runtimeSlice.artifact_registry_reference}`
    );
  }
}

function validateRoutingCoverage(runtimeSlice, attachments, learningNodeIds) {
  const mathSliceNodes = new Set(runtimeSlice.node_ids || []);
  const relevantAttachments = (attachments.attachments || []).filter(
    (attachment) => attachment.subject_domain === 'mathematics' && mathSliceNodes.has(attachment.subject_node_id)
  );

  if (relevantAttachments.length === 0) {
    fail('Cross-domain runtime slice has no matching mathematics attachments in the learning-to-learn registry');
    return;
  }

  const ruleText = JSON.stringify(runtimeSlice.navigation_rules || []);
  for (const attachment of relevantAttachments) {
    if (!learningNodeIds.has(attachment.learning_to_learn_node_id)) {
      fail(
        `Attachment registry references unknown learning-to-learn node: ${attachment.attachment_id} -> ${attachment.learning_to_learn_node_id}`
      );
    }

    if (!ruleText.includes(attachment.subject_node_id) || !ruleText.includes(attachment.learning_to_learn_node_id)) {
      fail(
        `Cross-domain runtime slice does not cover attachment route: ${attachment.attachment_id} (${attachment.subject_node_id} -> ${attachment.learning_to_learn_node_id})`
      );
    }
  }
}

validateRequiredFiles();

const runtimeSlice = loadYamlAsJson(runtimeSlicePath);
const schema = readJson(schemaPath);
const attachmentRegistry = loadYamlAsJson(attachmentRegistryPath);
const mathNodeIds = loadGraphNodeIds(mathGraphPath);
const learningNodeIds = loadGraphNodeIds(learningToLearnGraphPath);

validateAgainstSchema(runtimeSlice, schema);
validateNodeIds(runtimeSlice, mathNodeIds);
validateAttachmentRegistryReference(runtimeSlice);
validateRoutingCoverage(runtimeSlice, attachmentRegistry, learningNodeIds);

if (!hasFailure) {
  const mathAttachments = (attachmentRegistry.attachments || []).filter(
    (attachment) =>
      attachment.subject_domain === 'mathematics' && (runtimeSlice.node_ids || []).includes(attachment.subject_node_id)
  );
  console.log(
    `Mathematics cross-domain runtime audit passed: ${(runtimeSlice.node_ids || []).length} slice nodes, ${mathAttachments.length} linked mathematics attachments.`
  );
}

process.exitCode = hasFailure ? 1 : 0;
