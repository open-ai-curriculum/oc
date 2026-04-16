---
id: science-assessment-overlay-model
type: domain-contract
domain: science
status: draft
version: "0.1"
dependencies: [science-domain, science-external-assessment-coverage-scan, capability-graph]
tags: [science, assessment, overlays, contract]
last_updated: "2026-04-15"
related: [science-domain, science-external-assessment-coverage-scan]
support_tier: Core release
maturity_state: Drafted
supported_profiles: [assessment-overlay-contract]
evidence_class: Synthetic
---

# Science Assessment Overlay Model

## Purpose

This document defines how external assessment views should be represented over the science graph.

## Core Rule

Assessment overlays are derived graph views, not competing graphs.

They may group, summarize, and validate capability coverage, but they must not invent prerequisite logic absent from the canonical science graph.

## Required Overlay Fields

Every maintained science assessment overlay should define:

- `overlay_id`
- `assessment_family`
- `assessment_version_or_cycle`
- `status`
- `coverage_units`
- `mapped_capability_nodes`
- `coverage_classification`
- `unresolved_gaps`
- `source_documents`
- `claim_boundary`

## Coverage Classification Vocabulary

Assessment overlays should classify each unit or reporting category using:

- `covered`
- `partially_covered`
- `unmapped`
- `out_of_scope`

Overlay-level summaries may also use:

- `content_complete`
- `content_substantial_but_compressed`
- `content_partial`
- `exploratory`

## Expected Initial Overlay Families

The first maintained science overlay families should be:

- ACT Science
- AP Biology
- AP Chemistry
- AP Environmental Science
- AP Physics 1
- AP Physics 2
- AP Physics C
- TerraNova Science
- state science achievement tests
- NAEP science
- IB Diploma Programme sciences

SAT and PSAT/NMSQT should be treated in the assessment scan as current-public-framework science out-of-scope surfaces because there is no current standalone SAT Suite science test family to overlay.

## Claim Boundary

This model defines how science assessment overlays should be represented. It does not yet claim score guarantees, psychometric equivalence, or full assessment-policy fidelity.
