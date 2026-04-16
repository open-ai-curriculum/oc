#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const inventoryPath = path.join(repoRoot, 'docs', 'standards', 'mathematics-standards-inventory.json');
const nodeMapPath = path.join(repoRoot, 'docs', 'standards', 'mathematics-node-standards-map.json');
const reportJsonPath = path.join(repoRoot, 'docs', 'standards', 'mathematics-standards-coverage-report.json');
const reportMdPath = path.join(repoRoot, 'docs', 'standards', 'mathematics-standards-coverage-report.md');
const TODAY = '2026-04-15';

let hasFailure = false;

function fail(message) {
  hasFailure = true;
  console.error(message);
}

function readJson(absolutePath) {
  return JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
}

function standardKey(record) {
  return [
    record.grade_band_or_category,
    record.domain,
    record.cluster_or_grouping,
    record.anchor_statement,
  ].join('||');
}

function nodeMapKey(nodeRecord) {
  return [
    nodeRecord.ccss_mathematics.grade_band_or_category,
    nodeRecord.ccss_mathematics.domain,
    nodeRecord.ccss_mathematics.cluster_or_grouping,
    nodeRecord.ccss_mathematics.anchor_statement,
  ].join('||');
}

function classifyStandard(standardRecord, matchingNodes) {
  if (standardRecord.inventory_scope_status === 'out_of_scope') {
    return {
      coverage_classification: 'out_of_scope',
      rationale: 'The inventory record is explicitly outside the current codified K-12 mathematics standards scope.',
    };
  }

  if (matchingNodes.length === 0) {
    return {
      coverage_classification: 'unmapped',
      rationale: 'No mathematics nodes currently map to this inventory record.',
    };
  }

  const statuses = new Set(matchingNodes.map((node) => node.ccss_mathematics.mapping_status));

  if (statuses.has('mapped')) {
    return {
      coverage_classification: 'covered',
      rationale: 'At least one mathematics node has a direct mapped CCSS posture for this inventory record.',
    };
  }

  if (statuses.has('partial_readiness_alignment')) {
    return {
      coverage_classification: 'partially_covered',
      rationale: 'The inventory record is represented only through readiness or partial-alignment nodes.',
    };
  }

  if (statuses.has('out_of_scope_current_ccss_baseline')) {
    return {
      coverage_classification: 'out_of_scope',
      rationale: 'Only out-of-scope node mappings were found for this inventory record.',
    };
  }

  return {
    coverage_classification: 'unmapped',
    rationale: 'The inventory record could not be classified from the current node mapping statuses.',
  };
}

function buildReport(inventory, nodeMap) {
  const nodesByKey = new Map();
  for (const node of nodeMap.nodes || []) {
    const key = nodeMapKey(node);
    if (!nodesByKey.has(key)) {
      nodesByKey.set(key, []);
    }
    nodesByKey.get(key).push(node);
  }

  const coveredStandards = [];
  const classificationCounts = {
    covered: 0,
    partially_covered: 0,
    unmapped: 0,
    out_of_scope: 0,
  };

  for (const standard of inventory.standards || []) {
    const key = standardKey(standard);
    const matches = nodesByKey.get(key) || [];
    const classification = classifyStandard(standard, matches);
    const enriched = {
      ...standard,
      coverage_classification: classification.coverage_classification,
      validation_rationale: classification.rationale,
      matched_node_count: matches.length,
      matched_node_ids: matches.map((node) => node.node_id).sort(),
    };
    classificationCounts[classification.coverage_classification] += 1;
    coveredStandards.push(enriched);
  }

  const inventoryKeys = new Set((inventory.standards || []).map((standard) => standardKey(standard)));
  const orphanNodeMappings = [];
  for (const node of nodeMap.nodes || []) {
    const key = nodeMapKey(node);
    if (!inventoryKeys.has(key)) {
      orphanNodeMappings.push({
        node_id: node.node_id,
        grade_band_or_category: node.ccss_mathematics.grade_band_or_category,
        domain: node.ccss_mathematics.domain,
        cluster_or_grouping: node.ccss_mathematics.cluster_or_grouping,
        anchor_statement: node.ccss_mathematics.anchor_statement,
      });
    }
  }

  return {
    meta: {
      generated_on: TODAY,
      inventory_record_count: (inventory.standards || []).length,
      mapped_node_count: (nodeMap.nodes || []).length,
      coverage_classification_counts: classificationCounts,
      orphan_node_mapping_count: orphanNodeMappings.length,
      source_inventory: 'docs/standards/mathematics-standards-inventory.json',
      source_node_map: 'docs/standards/mathematics-node-standards-map.json',
    },
    standards: coveredStandards,
    orphan_node_mappings: orphanNodeMappings,
  };
}

function buildMarkdown(report) {
  const counts = report.meta.coverage_classification_counts;
  const lines = [
    '---',
    'id: mathematics-standards-coverage-report',
    'type: standard',
    'domain: mathematics-standards',
    'status: draft',
    'version: "0.1"',
    'dependencies: [mathematics-standards-inventory, mathematics-node-standards-map]',
    'tags: [standards, mathematics, validation, coverage]',
    `last_updated: "${TODAY}"`,
    'related: [standards-index, mathematics-standards-inventory, mathematics-node-standards-map]',
    'standard_family: mathematics-standards-coverage-report',
    'standard_subject: mathematics',
    `standards_version: mathematics-standards-coverage-report-${TODAY}`,
    'standards_track: current',
    `standards_effective_as_of: "${TODAY}"`,
    'supersedes_standards_version: []',
    '---',
    '',
    '# Mathematics Standards Coverage Report',
    '',
    '## Purpose',
    '',
    'This report validates whether each inventory record in the mathematics standards inventory has at least one associated knowledge-node mapping.',
    '',
    '## Coverage Summary',
    '',
    `- total inventory records: \`${report.meta.inventory_record_count}\``,
    `- \`covered\`: \`${counts.covered}\``,
    `- \`partially_covered\`: \`${counts.partially_covered}\``,
    `- \`unmapped\`: \`${counts.unmapped}\``,
    `- \`out_of_scope\`: \`${counts.out_of_scope}\``,
    `- orphan node mappings: \`${report.meta.orphan_node_mapping_count}\``,
    '',
    '## Coverage Table',
    '',
    '| Standard id | Classification | Matched nodes | Grade band | Domain | Anchor statement |',
    '| --- | --- | --- | --- | --- | --- |',
  ];

  for (const standard of report.standards) {
    lines.push(
      '| '
        + `\`${standard.standard_id}\` `
        + `| \`${standard.coverage_classification}\` `
        + `| \`${standard.matched_node_count}\` `
        + `| ${standard.grade_band_or_category} `
        + `| ${standard.domain} `
        + `| ${standard.anchor_statement} |`
    );
  }

  lines.push('', '## Claim Boundary', '', 'This report validates the current repository anchor-level standards inventory against the current mathematics node map. It does not yet certify exhaustive official identifier-level coverage.');
  return `${lines.join('\n')}\n`;
}

function main() {
  if (!fs.existsSync(inventoryPath)) {
    fail(`Missing mathematics standards inventory: ${path.relative(repoRoot, inventoryPath)}`);
  }
  if (!fs.existsSync(nodeMapPath)) {
    fail(`Missing mathematics node standards map: ${path.relative(repoRoot, nodeMapPath)}`);
  }
  if (hasFailure) {
    process.exitCode = 1;
    return;
  }

  const inventory = readJson(inventoryPath);
  const nodeMap = readJson(nodeMapPath);
  const report = buildReport(inventory, nodeMap);

  fs.writeFileSync(reportJsonPath, `${JSON.stringify(report, null, 2)}\n`);
  fs.writeFileSync(reportMdPath, buildMarkdown(report));

  if (report.meta.coverage_classification_counts.unmapped > 0) {
    fail(`Mathematics standards coverage report contains unmapped standards: ${report.meta.coverage_classification_counts.unmapped}`);
  }

  if (report.meta.orphan_node_mapping_count > 0) {
    fail(`Mathematics node map contains anchors missing from the standards inventory: ${report.meta.orphan_node_mapping_count}`);
  }

  if (!hasFailure) {
    console.log(
      `Mathematics standards coverage validation passed: ${report.meta.inventory_record_count} inventory records, ${report.meta.coverage_classification_counts.covered} covered, ${report.meta.coverage_classification_counts.partially_covered} partially covered, ${report.meta.coverage_classification_counts.out_of_scope} out of scope.`
    );
  }

  process.exitCode = hasFailure ? 1 : 0;
}

main();
