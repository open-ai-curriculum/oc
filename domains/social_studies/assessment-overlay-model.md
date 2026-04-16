---
id: social-studies-assessment-overlay-model
type: domain-contract
domain: social_studies
status: draft
version: "0.1"
dependencies: [master-social-studies-graph-architecture, social-studies-parity-plan-and-progress, social-studies-standards-augmented-graph]
tags: [social-studies, assessment, overlays, contract]
last_updated: "2026-04-15"
related: [social-studies-domain, social-studies-parity-plan-and-progress, social-studies-standards-augmented-graph]
support_tier: Core release
maturity_state: Drafted
supported_profiles: [assessment-overlay-contract]
evidence_class: Synthetic
---

# Social Studies Assessment Overlay Model

## Purpose

This document defines how external assessment views should be represented over the social studies graph.

The overlay model exists so the repository can answer questions such as:

- which graph nodes support AP United States History source and argument coverage
- whether AP Human Geography themes are backed by governed geography and inquiry nodes
- where AP Government, comparative politics, and economics reporting surfaces are fully supported versus compressed inside broader node families

## Core Rule

Assessment overlays are derived graph views, not competing graphs.

They may group, summarize, and validate capability coverage, but they must not invent prerequisite logic that is absent from the canonical social studies graph.

## Required Overlay Fields

Every maintained social studies assessment overlay should define:

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

The first maintained overlay families for social studies should be:

- AP United States History
- AP World History: Modern
- AP United States Government and Politics
- AP Comparative Government and Politics
- AP Human Geography
- AP Macroeconomics
- AP Microeconomics

## Overlay Construction Rules

1. Overlays map onto existing capability nodes.
2. Overlays may reference repository anchor standards and state-profile entities, but they do not replace capability mappings.
3. If an assessment unit depends on multiple distinct topics currently compressed into one social studies node family, the overlay should mark that unit as compressed rather than implying full topology clarity.
4. Inquiry and evidence use should remain explicit where an assessment family depends on source analysis, argument, or public reasoning.
5. Overlays must preserve claim boundaries and unresolved gaps.
6. When an assessment family is course-specific, the overlay should preserve course context rather than flattening it into one generic social studies summary.

## Validation Expectations

Every maintained assessment overlay should eventually support validation for:

- required unit presence
- mapped-node presence for each unit
- absence of invented units not grounded in the repository's documented overlay model
- explicit unresolved gaps where coverage is partial
- explicit compression notes where the graph is broader than the assessment surface

## Relationship To Graph Refactoring

Assessment overlays are not a substitute for topology repair.

When overlays repeatedly show that one assessment unit maps to an overly broad history, civics, geography, or economics node, the correct response is usually to refine the graph rather than to hide the problem in overlay prose.

## Claim Boundary

This model defines how social studies assessment overlays should be represented. It does not yet claim that all listed overlays have reviewed external crosswalks or score-validity guarantees.
