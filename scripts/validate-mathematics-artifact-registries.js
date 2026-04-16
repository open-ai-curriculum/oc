#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const graphPath = path.join(repoRoot, 'domains', 'mathematics', 'master-knowledge-graph.yaml');
const attachmentRoot = path.join(repoRoot, 'domains', 'mathematics', 'artifact-attachments');
const overlayCatalogPath = path.join(repoRoot, 'domains', 'mathematics', 'assessment-overlays', 'assessment-overlays.json');

const requiredRegistryFiles = [
  'fraction-spine-attachment-registry.yaml',
  'assessment-surface-attachment-registry.yaml',
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

for (const fileName of requiredRegistryFiles) {
  const absolute = path.join(attachmentRoot, fileName);
  if (!fs.existsSync(absolute)) {
    fail(`Missing required mathematics artifact registry: domains/mathematics/artifact-attachments/${fileName}`);
  }
}

if (!fs.existsSync(graphPath) || !fs.existsSync(overlayCatalogPath)) {
  fail('Missing mathematics graph or assessment overlay catalog for artifact registry validation');
  process.exitCode = 1;
  process.exit();
}

const graph = loadYamlAsJson(graphPath);
const graphNodeIds = new Set(
  (graph.families || []).flatMap((family) => (family.nodes || []).map((node) => node.id))
);
const overlayCatalog = JSON.parse(fs.readFileSync(overlayCatalogPath, 'utf8'));
const assessmentOverlayIds = new Set();
const assessmentUnitIds = new Set();

for (const overlay of overlayCatalog.overlays || []) {
  assessmentOverlayIds.add(`assessment-overlay:${overlay.overlay_id}`);
  for (const unit of overlay.coverage_units || []) {
    assessmentUnitIds.add(`assessment-unit:${overlay.overlay_id}:${unit.unit_id}`);
  }
}

const registryPaths = fs
  .readdirSync(attachmentRoot)
  .filter((entry) => entry.endsWith('.yaml'))
  .map((entry) => path.join(attachmentRoot, entry));

for (const registryPath of registryPaths) {
  const registry = loadYamlAsJson(registryPath);
  for (const nodeId of registry.target_scope?.primary_node_ids || []) {
    if (!graphNodeIds.has(nodeId)) {
      fail(`Artifact registry target_scope references missing graph node: ${path.basename(registryPath)} -> ${nodeId}`);
    }
  }

  for (const artifact of registry.artifacts || []) {
    if (artifact.primary_node_id && !graphNodeIds.has(artifact.primary_node_id)) {
      fail(`Artifact primary_node_id references missing graph node: ${artifact.artifact_id} -> ${artifact.primary_node_id}`);
    }
    for (const nodeId of artifact.secondary_node_ids || []) {
      if (!graphNodeIds.has(nodeId)) {
        fail(`Artifact secondary_node_ids references missing graph node: ${artifact.artifact_id} -> ${nodeId}`);
      }
    }

    if (artifact.target_entity_type === 'CapabilityNode' && !graphNodeIds.has(artifact.target_entity_id)) {
      fail(`Artifact target_entity_id references missing capability node: ${artifact.artifact_id} -> ${artifact.target_entity_id}`);
    }

    if (artifact.target_entity_type === 'AssessmentOverlay' && !assessmentOverlayIds.has(artifact.target_entity_id)) {
      fail(`Artifact target_entity_id references missing assessment overlay: ${artifact.artifact_id} -> ${artifact.target_entity_id}`);
    }

    if (artifact.target_entity_type === 'AssessmentUnit' && !assessmentUnitIds.has(artifact.target_entity_id)) {
      fail(`Artifact target_entity_id references missing assessment unit: ${artifact.artifact_id} -> ${artifact.target_entity_id}`);
    }
  }
}

const assessmentRegistryPath = path.join(attachmentRoot, 'assessment-surface-attachment-registry.yaml');
if (fs.existsSync(assessmentRegistryPath)) {
  const assessmentRegistry = loadYamlAsJson(assessmentRegistryPath);
  const hasAssessmentSurfaceAttachment = (assessmentRegistry.artifacts || []).some((artifact) =>
    ['AssessmentOverlay', 'AssessmentUnit'].includes(artifact.target_entity_type)
  );
  if (!hasAssessmentSurfaceAttachment) {
    fail('Assessment-surface artifact registry must contain at least one AssessmentOverlay or AssessmentUnit attachment');
  }
}

if (!hasFailure) {
  console.log(`Mathematics artifact registry validation passed: ${registryPaths.length} registries.`);
}

process.exitCode = hasFailure ? 1 : 0;
