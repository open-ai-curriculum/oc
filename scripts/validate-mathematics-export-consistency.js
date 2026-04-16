#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const overlayCatalogPath = path.join(repoRoot, 'domains', 'mathematics', 'assessment-overlays', 'assessment-overlays.json');
const overlaySummaryPath = path.join(repoRoot, 'domains', 'mathematics', 'assessment-overlays', 'coverage-summary.json');
const operationalSummaryPath = path.join(repoRoot, 'domains', 'mathematics', 'exports', 'operational-graph', 'mathematics-operational-summary.json');
const operationalNodesPath = path.join(repoRoot, 'domains', 'mathematics', 'exports', 'operational-graph', 'mathematics-operational-nodes.csv');
const gephiNodesPath = path.join(repoRoot, 'domains', 'mathematics', 'exports', 'gephi', 'mathematics-gephi-nodes.csv');

let hasFailure = false;

function fail(message) {
  hasFailure = true;
  console.error(message);
}

function ensureFile(filePath) {
  if (!fs.existsSync(filePath)) {
    fail(`Missing mathematics export artifact: ${path.relative(repoRoot, filePath)}`);
    return false;
  }
  return true;
}

function countEntityTypeLines(text, entityType) {
  return text
    .split('\n')
    .slice(1)
    .filter((line) => line.includes(`,${entityType},`)).length;
}

if (![overlayCatalogPath, overlaySummaryPath, operationalSummaryPath, operationalNodesPath, gephiNodesPath].every(ensureFile)) {
  process.exitCode = 1;
  process.exit();
}

const overlayCatalog = JSON.parse(fs.readFileSync(overlayCatalogPath, 'utf8'));
const overlaySummary = JSON.parse(fs.readFileSync(overlaySummaryPath, 'utf8'));
const operationalSummary = JSON.parse(fs.readFileSync(operationalSummaryPath, 'utf8'));
const gephiCsv = fs.readFileSync(gephiNodesPath, 'utf8');

const overlayCount = (overlayCatalog.overlays || []).length;
const overlayUnitCount = (overlayCatalog.overlays || []).reduce(
  (sum, overlay) => sum + ((overlay.coverage_units || []).length),
  0
);

if (overlaySummary.overlay_count !== overlayCount) {
  fail(
    `Assessment overlay summary count mismatch: summary=${overlaySummary.overlay_count} catalog=${overlayCount}`
  );
}

const operationalOverlayCount = operationalSummary.entity_type_counts?.AssessmentOverlay || 0;
const operationalUnitCount = operationalSummary.entity_type_counts?.AssessmentUnit || 0;

if (operationalOverlayCount !== overlayCount) {
  fail(
    `Operational export overlay count mismatch: operational=${operationalOverlayCount} catalog=${overlayCount}`
  );
}

if (operationalUnitCount !== overlayUnitCount) {
  fail(
    `Operational export assessment-unit count mismatch: operational=${operationalUnitCount} catalog=${overlayUnitCount}`
  );
}

const gephiOverlayCount = countEntityTypeLines(gephiCsv, 'AssessmentOverlay');
const gephiUnitCount = countEntityTypeLines(gephiCsv, 'AssessmentUnit');

if (gephiOverlayCount !== overlayCount) {
  fail(`Gephi export overlay count mismatch: gephi=${gephiOverlayCount} catalog=${overlayCount}`);
}

if (gephiUnitCount !== overlayUnitCount) {
  fail(`Gephi export assessment-unit count mismatch: gephi=${gephiUnitCount} catalog=${overlayUnitCount}`);
}

try {
  const script = [
    'import csv, json, sys',
    'from pathlib import Path',
    'path = Path(sys.argv[1])',
    'missing = []',
    'with path.open(newline="", encoding="utf-8") as handle:',
    '    for row in csv.DictReader(handle):',
    '        if row.get("entity_type") not in {"AssessmentOverlay", "AssessmentUnit"}:',
    '            continue',
    '        record_id = row["id:ID(Entity)"]',
    '        for field in ["mapped_family_ids:string[]", "mapped_grade_bands:string[]", "mapped_content_domains:string[]"]:',
    '            if not row.get(field, "").strip():',
    '                missing.append(f"{record_id} missing {field}")',
    '        if row.get("entity_type") == "AssessmentUnit":',
    '            for field in ["primary_grade_band", "primary_content_domain"]:',
    '                if not row.get(field, "").strip():',
    '                    missing.append(f"{record_id} missing {field}")',
    'print(json.dumps(missing))',
  ].join('\n');

  const missing = JSON.parse(
    childProcess.execFileSync('python3', ['-c', script, operationalNodesPath], {
      cwd: repoRoot,
      encoding: 'utf8',
    })
  );

  if (missing.length > 0) {
    fail(`Operational export assessment routing context missing:\n${missing.join('\n')}`);
  }
} catch (error) {
  fail(`Could not validate operational assessment routing context: ${error.message}`);
}

if (!hasFailure) {
  console.log(
    `Mathematics export consistency validation passed: ${overlayCount} overlays, ${overlayUnitCount} assessment units.`
  );
}

process.exitCode = hasFailure ? 1 : 0;
