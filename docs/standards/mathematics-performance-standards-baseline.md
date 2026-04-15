---
id: mathematics-performance-standards-baseline
type: standard
domain: mathematics-performance
status: draft
version: "0.1"
dependencies: [learning-system-constitution, learning-system-requirements, maturity-model]
tags: [standards, mathematics, performance, proficiency]
last_updated: "2026-04-14"
related: [standards-index, mathematics-content-standards-baseline]
standard_family: repository-mathematics-performance-baseline
standard_subject: mathematics
standards_version: mathematics-performance-baseline-2026-04-14
standards_track: current
standards_effective_as_of: "2026-04-14"
supersedes_standards_version: []
---

# Mathematics Performance Standards Baseline

## Purpose

This document codifies the initial performance or learning standards baseline for the mathematics domain.

The repository already uses node states such as `blocked`, `emerging`, `provisional`, `secure`, and `unstable`. Those states describe the learner's modeled condition within the capability graph.

This performance baseline adds a complementary proficiency language for standards-alignment work so that later node mappings can distinguish:

- what mathematical content is in scope
- how strong the demonstrated performance is

## Design Principles

1. Performance standards must be based on demonstrated capability, not activity completion.
2. A performance claim must reflect direct performance, meaning, transfer, and retention when the node requires them.
3. Performance levels must not hide unstable dependencies or recurring failure modes.
4. Performance language must remain subordinate to the repository's capability model and review posture.

## Performance-Level Framework

The baseline performance framework uses four levels:

1. `Below Basic`
2. `Basic`
3. `Proficient`
4. `Advanced`

These levels are alignment tools for later reporting and crosswalk work. They do not replace node status labels.

## Level Definitions

### Below Basic

The learner does not yet demonstrate dependable control of the targeted capability.

Typical signals:

- direct performance is inconsistent or materially below threshold
- explanation is absent, fragmentary, or reveals structural misunderstanding
- transfer breaks when surface features change
- prerequisite instability or dominant failure modes still block reliable progress

Repository interpretation:

- most often consistent with `blocked` or low `emerging`
- should trigger diagnosis, dependency review, or targeted intervention rather than a broad completion claim

### Basic

The learner demonstrates partial or context-bound success but not yet stable independent mastery.

Typical signals:

- can complete familiar items or scaffolded tasks with uneven accuracy
- may show partial conceptual explanation without consistent precision
- transfer is weak, narrow, or overly dependent on surface similarity
- performance often degrades when task form changes or support is reduced

Repository interpretation:

- most often consistent with stronger `emerging`
- may justify continued access to practice and intervention, but not secure closure of the node

### Proficient

The learner demonstrates the expected standard of success for the targeted node under normal bounded conditions.

Typical signals:

- direct performance meets the node's required threshold
- explanation or meaning evidence is sufficient when required
- at least one meaningful transfer check succeeds when required
- no blocking dependency instability remains
- failure patterns do not undermine the claim of current mastery

Repository interpretation:

- usually corresponds to `provisional` after immediate gate success
- may correspond to `secure` only when the node's delayed retention expectation is also satisfied

### Advanced

The learner demonstrates stable, flexible, and well-explained performance beyond the minimum proficiency claim.

Typical signals:

- accuracy remains strong across varied representations and non-routine forms
- explanation is precise, coherent, and structurally grounded
- transfer is robust across contexts or representations
- performance remains stable with reduced scaffolding and over time
- the learner can justify, compare strategies, or detect errors in peer or worked examples

Repository interpretation:

- should only be claimed when the node is already at least `secure`
- should not be awarded solely for speed, extra exposure, or completion volume

## Relationship To Node Verification

Performance levels must be interpreted through node verification gates rather than as detached rubric labels.

Later mappings should use this pattern:

- direct performance evidence contributes strongly to every level claim
- meaning or explanation evidence distinguishes procedural success from true proficiency
- transfer evidence distinguishes narrow success from adaptable capability
- retention evidence distinguishes short-term success from stable mastery

## Relationship To Node Statuses

The baseline relationship between node statuses and performance levels is intentionally approximate:

| Node status | Likely performance interpretation | Notes |
| --- | --- | --- |
| `blocked` | Below Basic | Dependency or failure-mode issues prevent a valid mastery claim |
| `emerging` | Below Basic or Basic | Depends on the degree of supported success and conceptual stability |
| `provisional` | Proficient | Immediate gates are satisfied, but delayed retention may still be pending |
| `secure` | Proficient or Advanced | Depends on flexibility, transfer strength, and explanation quality |
| `unstable` | Basic or Below Basic | Previously demonstrated capability is no longer dependable |

This table is not a conversion rule. It is a guidance baseline for later standards mapping and reporting work.

## Evidence Constraints

Performance-level claims should not be made from:

- attendance or exposure
- item completion counts alone
- averaged grades that hide failure modes
- a single successful task when the node requires explanation, transfer, or retention

## Mapping Unit For Later Work

When node-to-standards mappings are added, the preferred performance mapping record should include:

- node id
- targeted content-standard anchor
- minimum expected performance level
- evidence requirements for that claim
- unresolved limitations or review notes

## Claim Boundary

This baseline defines a repository-level performance framework for later alignment work. It does not by itself establish psychometric validity, state accountability equivalence, or district adoption readiness.
