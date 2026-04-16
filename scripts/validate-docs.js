#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const repoRoot = path.resolve(__dirname, '..');

const maintainedDocs = [
  'AGENTS.md',
  'README.md',
  'docs/foundation/constitution.md',
  'docs/foundation/architecture.md',
  'docs/specs/index.md',
  'docs/specs/learning-system-requirements.md',
  'docs/reference/platform-manifest.md',
  'docs/reference/maturity-model.md',
  'docs/reference/quality-gates.md',
];

const maintainedSpecs = [
  'docs/specs/learning-system-requirements.md',
];

const requiredFrontmatterKeys = [
  'id',
  'type',
  'domain',
  'status',
  'version',
  'dependencies',
  'last_updated',
];

const requiredSpecClaimKeys = [
  'support_tier',
  'maturity_state',
  'supported_profiles',
  'evidence_class',
];

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), 'utf8');
}

function extractFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  return match ? match[1] : null;
}

function stripFences(text) {
  return text.replace(/```[\s\S]*?```/g, '');
}

function validateFrontmatter(relativePath) {
  const text = read(relativePath);
  const frontmatter = extractFrontmatter(text);

  if (!frontmatter) {
    fail(`Missing frontmatter: ${relativePath}`);
    return;
  }

  for (const key of requiredFrontmatterKeys) {
    if (!new RegExp(`^${key}:`, 'm').test(frontmatter)) {
      fail(`Missing frontmatter key "${key}" in ${relativePath}`);
    }
  }

  if (maintainedSpecs.includes(relativePath)) {
    for (const key of requiredSpecClaimKeys) {
      if (!new RegExp(`^${key}:`, 'm').test(frontmatter)) {
        fail(`Missing specification claim key "${key}" in ${relativePath}`);
      }
    }
  }
}

function validateLinks(relativePath) {
  const text = stripFences(read(relativePath));
  const linkPattern = /\[[^\]]+\]\(([^)#]+)(?:#[^)]+)?\)/g;
  let match;

  while ((match = linkPattern.exec(text)) !== null) {
    const target = match[1].trim();
    if (!target || /^(https?:|mailto:|\/Volumes\/)/.test(target)) {
      continue;
    }

    const resolved = path.normalize(path.join(path.dirname(relativePath), target));
    const absolute = path.join(repoRoot, resolved);
    if (!fs.existsSync(absolute)) {
      fail(`Broken local link in ${relativePath}: ${target}`);
    }
  }
}

function validateDependencyMap() {
  const dependencyMapPath = path.join(repoRoot, 'docs/dependency-map.json');
  if (!fs.existsSync(dependencyMapPath)) {
    fail('Missing docs/dependency-map.json');
    return;
  }

  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(dependencyMapPath, 'utf8'));
  } catch (error) {
    fail(`Invalid JSON in docs/dependency-map.json: ${error.message}`);
    return;
  }

  if (!parsed.documents || typeof parsed.documents !== 'object') {
    fail('docs/dependency-map.json must contain a "documents" object');
    return;
  }

  for (const [documentId, documentInfo] of Object.entries(parsed.documents)) {
    if (!documentInfo.path) {
      fail(`Dependency map entry missing path: ${documentId}`);
      continue;
    }

    const absolute = path.join(repoRoot, 'docs', documentInfo.path);
    if (!fs.existsSync(absolute)) {
      fail(`Dependency map path does not exist for ${documentId}: docs/${documentInfo.path}`);
    }
  }
}

function validateCapabilityRegistry() {
  const registryPath = path.join(repoRoot, 'docs/capability-registry.json');
  if (!fs.existsSync(registryPath)) {
    fail('Missing docs/capability-registry.json');
    return;
  }

  let registry;
  try {
    registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  } catch (error) {
    fail(`Invalid JSON in docs/capability-registry.json: ${error.message}`);
    return;
  }

  if (!Array.isArray(registry.required_fields) || registry.required_fields.length === 0) {
    fail('docs/capability-registry.json must declare required_fields');
  }

  if (!Array.isArray(registry.capabilities) || registry.capabilities.length === 0) {
    fail('docs/capability-registry.json must contain a non-empty capabilities array');
    return;
  }

  for (const capability of registry.capabilities) {
    for (const field of registry.required_fields) {
      if (!(field in capability)) {
        fail(`Capability registry entry missing "${field}": ${capability.id || '<unknown>'}`);
      }
    }

    if (Array.isArray(capability.governing_specifications)) {
      for (const targetPath of capability.governing_specifications) {
        if (!maintainedSpecs.includes(targetPath)) {
          fail(`Capability registry governing specification must be a maintained spec: ${targetPath}`);
        }
        if (!fs.existsSync(path.join(repoRoot, targetPath))) {
          fail(`Capability registry references missing governing specification: ${targetPath}`);
        }
      }
    }

    if (Array.isArray(capability.current_state_references)) {
      for (const targetPath of capability.current_state_references) {
        if (!fs.existsSync(path.join(repoRoot, targetPath))) {
          fail(`Capability registry references missing current-state artifact: ${targetPath}`);
        }
      }
    }
  }
}

function validateMathematicsDomain() {
  const auditScript = path.join(__dirname, 'audit-mathematics-domain.js');
  if (!fs.existsSync(auditScript)) {
    fail('Missing scripts/audit-mathematics-domain.js');
    return;
  }

  try {
    childProcess.execFileSync(process.execPath, [auditScript], {
      cwd: repoRoot,
      stdio: 'inherit',
    });
  } catch (error) {
    process.exitCode = 1;
  }
}

function validateElaLiteracyDomain() {
  const auditScript = path.join(__dirname, 'validate-ela-literacy-domain.js');
  if (!fs.existsSync(auditScript)) {
    fail('Missing scripts/validate-ela-literacy-domain.js');
    return;
  }

  try {
    childProcess.execFileSync(process.execPath, [auditScript], {
      cwd: repoRoot,
      stdio: 'inherit',
    });
  } catch (error) {
    process.exitCode = 1;
  }
}

function validateLearningToLearnDomain() {
  const auditScript = path.join(__dirname, 'validate-learning-to-learn-domain.js');
  if (!fs.existsSync(auditScript)) {
    fail('Missing scripts/validate-learning-to-learn-domain.js');
    return;
  }

  try {
    childProcess.execFileSync(process.execPath, [auditScript], {
      cwd: repoRoot,
      stdio: 'inherit',
    });
  } catch (error) {
    process.exitCode = 1;
  }
}

function validateLearningToLearnLinks() {
  const learningToLearnDocs = [
    'domains/learning_to_learn/README.md',
    'domains/learning_to_learn/master-learning-to-learn-graph-architecture.md',
    'domains/learning_to_learn/downstream-expansion-plan.md',
    'domains/learning_to_learn/artifact-attachments/README.md',
    'domains/learning_to_learn/runtime/README.md',
    'domains/learning_to_learn/exports/operational-graph/README.md',
  ];

  for (const relativePath of learningToLearnDocs) {
    validateLinks(relativePath);
  }
}

function validateMathematicsCrossDomainRuntime() {
  const auditScript = path.join(__dirname, 'validate-mathematics-cross-domain-runtime.js');
  if (!fs.existsSync(auditScript)) {
    fail('Missing scripts/validate-mathematics-cross-domain-runtime.js');
    return;
  }

  try {
    childProcess.execFileSync(process.execPath, [auditScript], {
      cwd: repoRoot,
      stdio: 'inherit',
    });
  } catch (error) {
    process.exitCode = 1;
  }
}

function validateMathematicsCrossDomainRoutingExamples() {
  const auditScript = path.join(__dirname, 'validate-mathematics-cross-domain-routing-examples.js');
  if (!fs.existsSync(auditScript)) {
    fail('Missing scripts/validate-mathematics-cross-domain-routing-examples.js');
    return;
  }

  try {
    childProcess.execFileSync(process.execPath, [auditScript], {
      cwd: repoRoot,
      stdio: 'inherit',
    });
  } catch (error) {
    process.exitCode = 1;
  }
}

function validateSocialStudiesDomain() {
  const auditScript = path.join(__dirname, 'validate-social-studies-domain.js');
  if (!fs.existsSync(auditScript)) {
    fail('Missing scripts/validate-social-studies-domain.js');
    return;
  }

  try {
    childProcess.execFileSync(process.execPath, [auditScript], {
      cwd: repoRoot,
      stdio: 'inherit',
    });
  } catch (error) {
    process.exitCode = 1;
  }
}

function validateSocialStudiesStandardsCoverage() {
  const auditScript = path.join(__dirname, 'validate-social-studies-standards-coverage.js');
  if (!fs.existsSync(auditScript)) {
    fail('Missing scripts/validate-social-studies-standards-coverage.js');
    return;
  }

  try {
    childProcess.execFileSync(process.execPath, [auditScript], {
      cwd: repoRoot,
      stdio: 'inherit',
    });
  } catch (error) {
    process.exitCode = 1;
  }
}

function validateSocialStudiesAssessmentOverlays() {
  const auditScript = path.join(__dirname, 'validate-social-studies-assessment-overlays.js');
  if (!fs.existsSync(auditScript)) {
    fail('Missing scripts/validate-social-studies-assessment-overlays.js');
    return;
  }

  try {
    childProcess.execFileSync(process.execPath, [auditScript], {
      cwd: repoRoot,
      stdio: 'inherit',
    });
  } catch (error) {
    process.exitCode = 1;
  }
}

function validateSocialStudiesAssessmentFrameworkAssurance() {
  const auditScript = path.join(__dirname, 'validate-social-studies-assessment-framework-assurance.js');
  if (!fs.existsSync(auditScript)) {
    fail('Missing scripts/validate-social-studies-assessment-framework-assurance.js');
    return;
  }

  try {
    childProcess.execFileSync(process.execPath, [auditScript], {
      cwd: repoRoot,
      stdio: 'inherit',
    });
  } catch (error) {
    process.exitCode = 1;
  }
}

function validateSocialStudiesExternalFrameworkRegistry() {
  const auditScript = path.join(__dirname, 'validate-social-studies-external-framework-registry.js');
  if (!fs.existsSync(auditScript)) {
    fail('Missing scripts/validate-social-studies-external-framework-registry.js');
    return;
  }

  try {
    childProcess.execFileSync(process.execPath, [auditScript], {
      cwd: repoRoot,
      stdio: 'inherit',
    });
  } catch (error) {
    process.exitCode = 1;
  }
}

function validateSocialStudiesFocusedGraphCuts() {
  const auditScript = path.join(__dirname, 'validate-social-studies-focused-graph-cuts.js');
  if (!fs.existsSync(auditScript)) {
    fail('Missing scripts/validate-social-studies-focused-graph-cuts.js');
    return;
  }

  try {
    childProcess.execFileSync(process.execPath, [auditScript], {
      cwd: repoRoot,
      stdio: 'inherit',
    });
  } catch (error) {
    process.exitCode = 1;
  }
}

function validateSocialStudiesArtifactRegistries() {
  const auditScript = path.join(__dirname, 'validate-social-studies-artifact-registries.js');
  if (!fs.existsSync(auditScript)) {
    fail('Missing scripts/validate-social-studies-artifact-registries.js');
    return;
  }

  try {
    childProcess.execFileSync(process.execPath, [auditScript], {
      cwd: repoRoot,
      stdio: 'inherit',
    });
  } catch (error) {
    process.exitCode = 1;
  }
}

function validateSocialStudiesExportConsistency() {
  const auditScript = path.join(__dirname, 'validate-social-studies-export-consistency.js');
  if (!fs.existsSync(auditScript)) {
    fail('Missing scripts/validate-social-studies-export-consistency.js');
    return;
  }

  try {
    childProcess.execFileSync(process.execPath, [auditScript], {
      cwd: repoRoot,
      stdio: 'inherit',
    });
  } catch (error) {
    process.exitCode = 1;
  }
}

function validateSocialStudiesCrossDomainRuntime() {
  const auditScript = path.join(__dirname, 'validate-social-studies-cross-domain-runtime.js');
  if (!fs.existsSync(auditScript)) {
    fail('Missing scripts/validate-social-studies-cross-domain-runtime.js');
    return;
  }

  try {
    childProcess.execFileSync(process.execPath, [auditScript], {
      cwd: repoRoot,
      stdio: 'inherit',
    });
  } catch (error) {
    process.exitCode = 1;
  }
}

function validateSocialStudiesCrossDomainRoutingExamples() {
  const auditScript = path.join(__dirname, 'validate-social-studies-cross-domain-routing-examples.js');
  if (!fs.existsSync(auditScript)) {
    fail('Missing scripts/validate-social-studies-cross-domain-routing-examples.js');
    return;
  }

  try {
    childProcess.execFileSync(process.execPath, [auditScript], {
      cwd: repoRoot,
      stdio: 'inherit',
    });
  } catch (error) {
    process.exitCode = 1;
  }
}

for (const relativePath of maintainedDocs) {
  if (!fs.existsSync(path.join(repoRoot, relativePath))) {
    fail(`Missing maintained doc: ${relativePath}`);
    continue;
  }
}

for (const relativePath of [...maintainedDocs, ...maintainedSpecs]) {
  if (fs.existsSync(path.join(repoRoot, relativePath)) && relativePath.startsWith('docs/')) {
    validateFrontmatter(relativePath);
    validateLinks(relativePath);
  }
}

validateDependencyMap();
validateCapabilityRegistry();
validateMathematicsDomain();
validateElaLiteracyDomain();
validateLearningToLearnDomain();
validateSocialStudiesDomain();
validateLearningToLearnLinks();
validateSocialStudiesStandardsCoverage();
validateSocialStudiesAssessmentOverlays();
validateSocialStudiesAssessmentFrameworkAssurance();
validateSocialStudiesExternalFrameworkRegistry();
validateSocialStudiesFocusedGraphCuts();
validateSocialStudiesArtifactRegistries();
validateSocialStudiesExportConsistency();
validateMathematicsCrossDomainRuntime();
validateMathematicsCrossDomainRoutingExamples();
validateSocialStudiesCrossDomainRuntime();
validateSocialStudiesCrossDomainRoutingExamples();
