---
id: ela-literacy-performance-standards-baseline
type: standard
domain: ela-literacy-performance
status: draft
version: "0.1"
dependencies: [learning-system-constitution, learning-system-requirements, standards-versioning-model, ccss-ela-literacy]
tags: [standards, reading, writing, literacy, performance, proficiency]
last_updated: "2026-04-14"
related: [standards-index, ela-literacy-content-standards-baseline, ccss-ela-literacy]
standard_family: ela-literacy-performance-baseline
standard_subject: literacy
standards_version: ela-literacy-performance-baseline-2026-04-14
standards_track: current
standards_effective_as_of: "2026-04-14"
supersedes_standards_version: []
---

# Reading/Writing Performance Standards Baseline

## Purpose

This document codifies the initial performance or learning standards baseline for the `ela_literacy` domain.

It separates content alignment from proficiency claims so that later node mappings can distinguish:

- what literacy content or strand is in scope
- how strong the demonstrated literacy performance is

## Design Principles

1. Literacy performance claims must be grounded in demonstrated capability, not task completion or exposure.
2. Reading and writing claims must preserve dependency integrity across oral language, print concepts, foundational skills, comprehension, language, and composition.
3. A proficiency label must not hide decoding confounds, language-access barriers, or writing-production constraints.
4. Performance judgments remain subordinate to node-level mastery, verification, failure classification, intervention logic, and human review.

## Performance-Level Framework

The baseline performance framework uses four levels:

1. `Below Basic`
2. `Basic`
3. `Proficient`
4. `Advanced`

These levels are alignment tools for later reporting and crosswalk work. They do not replace node status labels or learner-state modeling.

## Level Definitions

### Below Basic

The learner does not yet demonstrate dependable control of the targeted literacy capability.

Typical signals:

- reading or writing performance breaks on core direct tasks
- oral-language, print, decoding, or transcription dependencies are still blocking access
- explanation or evidence use is fragmentary or absent when required
- transfer fails when wording, text type, or prompt surface changes

### Basic

The learner shows partial or scaffold-dependent success but not yet stable independent control.

Typical signals:

- success is limited to familiar texts, routines, or heavily scaffolded writing tasks
- comprehension may collapse when decoding load rises
- writing may collapse when idea generation and transcription compete
- evidence use, revision, and language control remain narrow or inconsistent

### Proficient

The learner demonstrates the expected standard of success for the targeted node under normal bounded conditions.

Typical signals:

- direct task performance meets the node threshold
- explanation, evidence use, or meaning-making is sufficient when required
- transfer works across at least one changed text, prompt, or genre condition
- no blocking dependency instability remains
- dominant failure modes do not invalidate the current mastery claim

### Advanced

The learner demonstrates stable, flexible, and well-supported literacy performance beyond the minimum proficiency claim.

Typical signals:

- success holds across multiple texts, prompts, or genres
- explanation is precise and text-grounded
- evidence integration, revision, and language control are robust
- performance remains strong over time and with reduced scaffolding
- the learner can compare interpretations, justify choices, or critique weaker responses

## Literacy-Specific Evidence Rules

Performance-level claims should explicitly account for:

- oral-language access
- decoding and encoding load
- comprehension versus word-reading confounds
- transcription and sentence-control constraints
- evidence use in reading and writing
- retention and transfer over time

## Relationship To Node Statuses

The baseline relationship between learner-state status and performance level is intentionally approximate:

| Node status | Likely performance interpretation | Notes |
| --- | --- | --- |
| `blocked` | Below Basic | Upstream dependency or dominant failure mode prevents a valid mastery claim |
| `emerging` | Below Basic or Basic | Depends on the stability of supported success |
| `provisional` | Proficient | Immediate gate success is present, but retention may still be pending |
| `secure` | Proficient or Advanced | Depends on transfer strength, explanation quality, and stability over time |
| `unstable` | Basic or Below Basic | A previously demonstrated capability is no longer dependable |

## Mapping Unit For Later Work

When node-to-standards mappings are expanded, the preferred performance mapping record should include:

- node id
- targeted literacy strand or anchor
- minimum expected performance level
- evidence rule for that claim
- unresolved dependency or confound notes

## Claim Boundary

This baseline defines a repository-level literacy performance framework for later alignment work. It does not by itself establish psychometric validity, accountability equivalence, or reviewed classroom deployment readiness.
