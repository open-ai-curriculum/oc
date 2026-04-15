---
id: standards-index
type: index
domain: standards
status: draft
version: "0.1"
dependencies: [learning-system-constitution, learning-system-requirements, maturity-model]
tags: [standards, index, mathematics, performance]
last_updated: "2026-04-14"
related: [platform-manifest, specs-index, mathematics-content-standards-baseline, mathematics-performance-standards-baseline, mathematics-node-standards-map, state-standards-index, ccss-index, ngss-index]
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

The current repository baseline separates two distinct standard families:

1. academic content standards for mathematics
2. performance or learning standards that define expected levels of demonstrated proficiency

This separation is intentional. Content standards describe what a learner should know or be able to do. Performance standards describe how well a learner must perform to support a claim about stability or readiness.

## Current Scope

The first maintained standards set in this directory is mathematics.

The current baseline does not yet:

- claim district, state, or accreditation approval
- replace the repository's governing capability model
- treat a standards list as sufficient evidence of mastery

## Maintained Baselines

| Document | Role | Notes |
| --- | --- | --- |
| [Mathematics Content Standards Baseline](mathematics-content-standards-baseline.md) | Codifies the academic content taxonomy used as the initial mathematics alignment surface | Uses Common Core State Standards for Mathematics as the canonical baseline profile for later mapping work |
| [Mathematics Performance Standards Baseline](mathematics-performance-standards-baseline.md) | Codifies repository-level proficiency bands for judging demonstrated learning | Designed to work with node mastery, verification gates, transfer, and retention rules |
| [Mathematics Node Standards Map](mathematics-node-standards-map.md) | Records current node-to-standards mapping posture for every mathematics node | Uses baseline, CCSS, and codified state profiles; preserves explicit out-of-scope and crosswalk-needed cases |
| [State Standards Index](state-standards-index.md) | Defines the repository surface for publicly distributed state standards sets | Separates state-by-state codification from the canonical baseline documents |
| [Standards Versioning Model](standards-versioning-model.md) | Defines how standards editions are versioned separately from document revisions | Prevents silent overwrite when source standards change |
| [CCSS Package](ccss/index.md) | Codifies the Common Core State Standards as a dedicated package | Includes current profiles, template, and history model |
| [NGSS Package](ngss/index.md) | Codifies the Next Generation Science Standards as a dedicated package | Includes current profiles, template, and history model |

## Governance Rules

1. Standards codification supports the capability graph. It does not override the constitution or replace node modeling.
2. Node packages must still declare dependencies, failure modes, interventions, and verification gates even when a standards mapping exists.
3. External standards language shall be paraphrased into repository-governed operational language unless an official quoted excerpt is separately reviewed.
4. Any future node-to-standards mapping must preserve claim boundaries and explicit draft state until reviewed.
5. Standards artifacts must version the underlying standards edition separately from the repository document revision.

## Planned Next Stage

After these baselines are reviewed, the next stage is to deepen the explicit mappings from mathematics nodes to:

- one or more content-standard identifiers or anchor statements
- one or more performance-level expectations
- any needed notes about claim boundaries, coverage limits, or unresolved review questions
