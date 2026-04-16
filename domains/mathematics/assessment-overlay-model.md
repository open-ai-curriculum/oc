---
id: mathematics-assessment-overlay-model
type: domain-contract
domain: mathematics
status: draft
version: "0.1"
dependencies: [master-mathematics-graph-architecture, mathematics-external-assessment-coverage-scan, mathematics-graph-refactor-plan]
tags: [mathematics, assessment, overlays, contract]
last_updated: "2026-04-15"
related: [mathematics-domain, mathematics-external-assessment-coverage-scan, mathematics-graph-refactor-plan]
support_tier: Core release
maturity_state: Drafted
supported_profiles: [assessment-overlay-contract]
evidence_class: Synthetic
---

# Mathematics Assessment Overlay Model

## Purpose

This document defines how external assessment views should be represented over the mathematics graph.

The overlay model exists so the repository can answer questions such as:

- which graph nodes support SAT algebra coverage
- which nodes support ACT geometry or functions coverage
- whether AP Statistics or AP Calculus units are fully backed by governed capability nodes
- which IB pathway surfaces are fully modeled versus only partially supported

## Core Rule

Assessment overlays are derived graph views, not competing graphs.

They may group, summarize, and validate capability coverage, but they must not invent prerequisite logic that is absent from the canonical mathematics graph.

## Required Overlay Fields

Every maintained mathematics assessment overlay should define:

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

The first maintained overlay families should be:

- SAT
- PSAT/NMSQT
- ACT
- AP Statistics
- AP Precalculus
- AP Calculus AB
- AP Calculus BC
- IB Mathematics AA
- IB Mathematics AI
- IB Mathematics AA SL
- IB Mathematics AA HL
- IB Mathematics AI SL
- IB Mathematics AI HL

## Overlay Construction Rules

1. Overlays map onto existing capability nodes.
2. Overlays may reference standards anchors and grade bands, but they do not replace capability mappings.
3. If an assessment unit depends on multiple distinct advanced topics currently hidden in one umbrella node, the overlay should mark that unit as compressed rather than pretending full clarity exists.
4. If an assessment surface includes optional, regional, or non-assessed material, that distinction should be preserved explicitly.
5. Overlays must preserve claim boundaries and unresolved gaps.
6. When an assessment family has formally published level variants such as `SL` and `HL`, maintained overlays should encode those variants explicitly rather than collapsing them into a single family summary.

## Validation Expectations

Every maintained assessment overlay should eventually support validation for:

- required unit presence
- mapped-node presence for each unit
- absence of invented units not grounded in source documents
- explicit unresolved gaps where coverage is partial
- required companion level variants where a maintained overlay family is known to publish them

## Relationship To Node Refactoring

Assessment overlays are not a substitute for topology repair.

When overlays repeatedly show that one unit maps to an overly broad node, the correct response is usually to split the topology, not to make the overlay more verbose.

## Claim Boundary

This model defines how assessment overlays should be represented. It does not yet claim that all listed overlays have been implemented.
