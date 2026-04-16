---
id: standards-index
type: index
domain: standards
status: draft
version: "0.1"
dependencies: [learning-system-constitution, learning-system-requirements, maturity-model]
tags: [standards, index, mathematics, ela, literacy, science, ngss, performance]
last_updated: "2026-04-15"
related: [platform-manifest, specs-index, mathematics-content-standards-baseline, mathematics-performance-standards-baseline, mathematics-node-standards-map, mathematics-standards-inventory, mathematics-standards-coverage-report, ela-literacy-content-standards-baseline, ela-literacy-performance-standards-baseline, ela-literacy-node-standards-map, ela-literacy-state-standards-registry, social-studies-content-standards-baseline, social-studies-performance-standards-baseline, social-studies-standards-inventory, social-studies-node-standards-map, social-studies-standards-coverage-report, science-standards-inventory, science-node-standards-map, science-standards-coverage-report, social-studies-index, social-studies-framework-codification-model, social-studies-external-framework-registry, social-studies-state-standards-registry, state-standards-index, ccss-index, ngss-index, ela-literacy-index]
standard_family: standards-governance
standard_subject: cross-domain
standards_version: standards-index-baseline-2026-04-14
standards_track: current
standards_effective_as_of: "2026-04-14"
supersedes_standards_version: []
---

# Standards Baselines

## Purpose

This directory codifies the standards baselines that will later be used to align capability nodes, verification artifacts, and downstream instructional outputs.

The current repository baseline separates distinct content and performance standard families:

1. academic content standards for mathematics
2. academic content standards for reading and writing
3. academic content standards for social studies
4. performance or learning standards that define expected levels of demonstrated proficiency

This separation is intentional. Content standards describe what a learner should know or be able to do. Performance standards describe how well a learner must perform to support a claim about stability or readiness.

## Current Scope

The first maintained standards sets in this directory are mathematics, ELA/literacy, social studies, and the NGSS science standards package.

The current baseline does not yet:

- claim district, state, or accreditation approval
- replace the repository's governing capability model
- treat a standards list as sufficient evidence of mastery

## Maintained Baselines

| Document | Role | Notes |
| --- | --- | --- |
| [Mathematics Content Standards Baseline](mathematics-content-standards-baseline.md) | Codifies the academic content taxonomy used as the initial mathematics alignment surface | Uses Common Core State Standards for Mathematics as the canonical baseline profile for later mapping work |
| [ELA/Literacy Content Standards Baseline](ela-literacy-content-standards-baseline.md) | Codifies the academic content taxonomy used as the initial ELA/literacy alignment surface | Uses Common Core State Standards for ELA and Literacy as the canonical baseline profile for later mapping work |
| [Social Studies Content Standards Baseline](social-studies-content-standards-baseline.md) | Codifies the academic content taxonomy used as the initial social studies alignment surface | Uses the repository social studies graph as the current canonical anchor-level baseline pending codification of an external standards family |
| [Mathematics Performance Standards Baseline](mathematics-performance-standards-baseline.md) | Codifies repository-level proficiency bands for judging demonstrated learning | Designed to work with node mastery, verification gates, transfer, and retention rules |
| [Mathematics Standards Inventory](mathematics-standards-inventory.md) | Defines the current anchor-level mathematics standards inventory that the repository can validate explicitly | Separates the standards-first validation surface from the node-level mapping surface |
| [ELA/Literacy Performance Standards Baseline](ela-literacy-performance-standards-baseline.md) | Codifies repository-level proficiency bands for literacy claims | Designed to work with oral-language, foundational skills, comprehension, language, and writing dependencies |
| [Social Studies Performance Standards Baseline](social-studies-performance-standards-baseline.md) | Codifies repository-level proficiency bands for social studies claims | Designed to work with inquiry, disciplinary reasoning, public argument, transfer, and retention |
| [Mathematics Node Standards Map](mathematics-node-standards-map.md) | Records current node-to-standards mapping posture for every mathematics node | Uses baseline, CCSS, and codified state profiles; preserves explicit out-of-scope and crosswalk-needed cases |
| [Mathematics Standards Coverage Report](mathematics-standards-coverage-report.md) | Validates whether each mathematics inventory record has at least one associated node mapping | Classifies records as covered, partially covered, unmapped, or out of scope |
| [Science Standards Inventory](science-standards-inventory.md) | Defines the current anchor-level science standards inventory that the repository can validate explicitly | Uses NGSS-informed repository anchor statements rather than claiming one-to-one performance-expectation codification |
| [Science Node Standards Map](science-node-standards-map.md) | Records current node-to-standards mapping posture for every science node | Maps science capability nodes to canonical science anchor records with explicit NGSS claim boundaries |
| [Science Standards Coverage Report](science-standards-coverage-report.md) | Validates whether each science inventory record has at least one associated node mapping | Tracks covered, partially covered, unmapped, out-of-scope, and orphan-mapping cases for the science domain |
| [ELA/Literacy Node Standards Map](ela-literacy-node-standards-map.md) | Records current node-to-standards mapping posture for the current ELA/literacy scaffold | Uses literacy baseline and CCSS ELA/literacy surfaces with explicit readiness and out-of-scope distinctions |
| [Social Studies Standards Inventory](social-studies-standards-inventory.md) | Defines the current anchor-level social studies standards inventory that the repository can validate explicitly | Separates repository-baseline standards validation from future external social studies standards codification |
| [Social Studies Node Standards Map](social-studies-node-standards-map.md) | Records current node-to-standards mapping posture for the social studies graph | Uses the repository social studies baseline and preserves explicit external-standards claim boundaries |
| [Social Studies Standards Coverage Report](social-studies-standards-coverage-report.md) | Validates whether each social studies inventory record has at least one associated node mapping | Currently validates repository-baseline coverage and not official external standards completeness |
| [ELA/Literacy State Standards Registry](ela-literacy-state-standards-registry.md) | Lists codified state ELA/literacy standards profiles for the ELA/literacy domain | Extends literacy alignment beyond the national CCSS baseline |
| [State Standards Index](state-standards-index.md) | Defines the repository surface for publicly distributed state standards sets | Separates state-by-state codification from the canonical baseline documents |
| [Standards Versioning Model](standards-versioning-model.md) | Defines how standards editions are versioned separately from document revisions | Prevents silent overwrite when source standards change |
| [CCSS Package](ccss/index.md) | Codifies the Common Core State Standards as a dedicated package | Includes current profiles, template, and history model |
| [NGSS Package](ngss/index.md) | Codifies the Next Generation Science Standards as a dedicated package | Includes current profiles, template, and history model |
| [ELA/Literacy Package](ela-literacy/index.md) | Codifies the repository ELA/literacy standards family as a dedicated package | Includes current profiles, template, and history model |
| [Social Studies Package](social-studies/index.md) | Codifies the repository social studies standards family as a dedicated package | Includes current profiles, codification model, external/state registries, and repository-baseline validation artifacts |

## Governance Rules

1. Standards codification supports the capability graph. It does not override the constitution or replace node modeling.
2. Node packages must still declare dependencies, failure modes, interventions, and verification gates even when a standards mapping exists.
3. External standards language shall be paraphrased into repository-governed operational language unless an official quoted excerpt is separately reviewed.
4. Any future node-to-standards mapping must preserve claim boundaries and explicit draft state until reviewed.
5. Standards artifacts must version the underlying standards edition separately from the repository document revision.

## Planned Next Stage

After these baselines are reviewed, the next stage is to deepen explicit node mappings from maintained domains to:

- one or more content-standard identifiers or anchor statements
- one or more performance-level expectations
- any needed notes about claim boundaries, coverage limits, or unresolved review questions

For science specifically, maintained mappings and coverage reporting should continue to preserve the distinction between:

- repository capability nodes
- NGSS performance expectations
- science and engineering practices
- disciplinary core ideas
- crosscutting concepts
