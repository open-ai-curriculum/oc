---
id: mathematics-graph-refactor-plan
type: domain-plan
domain: mathematics
status: draft
version: "0.1"
dependencies: [master-mathematics-graph-architecture, mathematics-standards-coverage-report, mathematics-external-assessment-coverage-scan, learning-system-requirements]
tags: [mathematics, graph, refactor, plan, standards, assessment]
last_updated: "2026-04-15"
related: [mathematics-domain, mathematics-master-knowledge-graph, mathematics-external-assessment-coverage-scan, mathematics-standards-coverage-report]
support_tier: Core release
maturity_state: Drafted
supported_profiles: [mathematics-graph-refactor]
evidence_class: Synthetic
---

# Mathematics Graph Refactor Plan

## Purpose

This plan defines how to refactor the current mathematics graph using two objective gap sources:

1. standards-first analysis
2. assessment-surface analysis

The target is not incremental cleanup. The target is a mathematics graph that is materially better than the current graph along all of these dimensions:

- standards coverage clarity
- late-secondary and AP granularity
- assessment-surface defensibility
- dependency integrity
- graph-native operational usefulness

## Governing Inputs

This plan is derived from:

- [mathematics-standards-coverage-report.md](/Volumes/data/development/oc/docs/standards/mathematics-standards-coverage-report.md:19)
- [external-assessment-coverage-scan.md](/Volumes/data/development/oc/domains/mathematics/external-assessment-coverage-scan.md:17)
- [master-mathematics-graph-architecture.md](/Volumes/data/development/oc/domains/mathematics/master-mathematics-graph-architecture.md:17)
- [master-knowledge-graph.yaml](/Volumes/data/development/oc/domains/mathematics/master-knowledge-graph.yaml:4)

## Objective

Produce one mathematics graph that can support all of the following without contradiction:

- anchor-level standards completeness
- stronger state-standards crosswalk readiness
- SAT and PSAT reporting-surface overlays
- ACT category coverage with explicit edge-topic support
- AP Statistics, AP Precalculus, and AP Calculus pathway fidelity
- NAEP and state-achievement-content readiness
- IB pathway overlays where the repository chooses to support them

## Current Diagnosis

The current graph is already strong in early and middle mathematics and is no longer missing all secondary territory.

The current graph is weaker in three ways:

1. some standards anchors are represented only through readiness-oriented partials rather than cleaner canonical capability targets
2. late-secondary and AP areas are modeled in umbrella nodes that are too broad for strong assessment claims
3. assessment-specific overlays are not yet first-class graph views or validation surfaces

## Refactor Principles

1. Preserve dependency integrity.
   No downstream AP or advanced node should stay broad because the team wants speed. If a topic has distinct prerequisite logic or distinct failure modes, it needs its own node or governed subcluster.

2. Split by capability boundary, not by textbook chapter.
   The right split is where learner meaning, verification, and failure classification diverge, not where a commercial course happens to draw a chapter break.

3. Keep standards and assessment overlays secondary to capability topology.
   Exams and standards should shape the graph, but they should not replace the graph’s dependency logic.

4. Refactor validators alongside topology.
   Every major graph split must update:
   - standards inventory and coverage validation
   - standards-augmented graph generation
   - operational export generation
   - assessment-surface scans or validators

5. Prefer decomposing broad nodes over attaching ever-longer notes to them.
   Broad notes are acceptable only when the capability is truly unified. They are not a substitute for missing structure.

## Primary Gap Buckets

### Bucket A. Standards-Surface Gaps

These are the standards-related gaps currently visible:

- readiness-only partials remain for:
  - numeral recognition and writing readiness
  - pattern/rule/structure readiness
  - equal-part and unit-fraction readiness
- AP territory is still outside the current codified mathematics standards baseline
- late-secondary anchors are covered, but often by very broad nodes that weaken future identifier-level crosswalk work

### Bucket B. Assessment-Surface Gaps

These are the assessment-related gaps currently visible:

- ACT edge territory is under-exposed:
  - complex numbers
  - vectors
  - matrices
  - conic sections
- AP Statistics is too compressed
- AP Precalculus is too compressed
- AP Calculus AB/BC is too compressed
- IB overlays do not yet exist
- SAT/PSAT and ACT overlays do not yet exist as graph-native views

### Bucket C. Graph-Architecture Gaps

These are the graph and tooling gaps:

- stale architecture language remains in `k12-expansion-architecture.md`
- no formal assessment-overlay artifact model exists yet
- no math-specific validator currently checks assessment-surface completeness
- late-secondary node decomposition has not yet been reflected in the standards inventory model

## Refactor Strategy

The refactor should happen in five sequenced workstreams.

### Workstream 1. Canonical Secondary Topology Repair

Objective:

- replace umbrella late-secondary nodes with clearer capability partitions

Required moves:

1. split advanced algebra and Algebra II territory now compressed in `B1`-`B3`
2. split precalculus territory now compressed in `B4`, `B5`, and `AP2`
3. split calculus territory now compressed in `AP3`-`AP5`
4. decide explicitly which topics are canonical capability nodes versus overlay-only topics

Target new node groups:

- `complex_numbers_and_operations`
- `sequences_and_series_foundations`
- `conic_sections_and_coordinate_models`
- `vectors_and_matrix_foundations`
- `trigonometric_identities_and_equations`
- `sampling_distributions`
- `inference_for_proportions`
- `inference_for_means`
- `chi_square_reasoning`
- `inference_for_regression_slope`
- `limits_and_continuity`
- `derivative_rules_and_computation`
- `applications_of_derivatives`
- `integral_meaning_and_accumulation`
- `applications_of_integration`
- `differential_equations_foundations`

Success condition:

- no single advanced node should still be carrying multiple major exam units with different verification logic

### Workstream 2. Standards-Alignment Refactor

Objective:

- improve standards clarity after topology repair

Required moves:

1. regenerate the mathematics standards inventory after each topology split
2. review whether the current partial anchors should stay partial or become direct canonical alignments after decomposition
3. create a separate mathematics advanced-course standards package for AP-facing territory if the repository intends to make direct AP coverage claims later
4. prepare the inventory structure for eventual identifier-level crosswalks in late-secondary mathematics

Success condition:

- anchor-level standards coverage remains complete
- partials are reduced only where the topology genuinely justifies direct alignment
- AP no longer lives as a vague out-of-scope blob if the repo chooses to support AP-facing claims

### Workstream 3. Assessment Overlay Layer

Objective:

- make external assessment views first-class graph products

Required overlays:

- SAT overlay
- PSAT/NMSQT overlay
- ACT overlay
- AP Statistics overlay
- AP Precalculus overlay
- AP Calculus AB overlay
- AP Calculus BC overlay
- IB AA overlay
- IB AI overlay

Each overlay should define:

- target assessment family
- coverage domains or units
- mapped capability nodes
- coverage posture by unit or category
- unresolved gaps
- whether the overlay is content-complete, content-partial, or exploratory

Success condition:

- the repo can answer “what part of the graph supports this assessment domain?” without ad hoc manual interpretation

### Workstream 4. Validation And Audit Expansion

Objective:

- make the superior graph enforceable rather than aspirational

Required validators:

1. standards completeness validator
   - already exists at the anchor level and must be preserved through the refactor
2. assessment coverage validator
   - should verify required overlay units/categories exist and have mapped nodes
3. stale-architecture guard
   - should fail if architecture docs claim bands are unmodeled when the graph now contains them
4. advanced-node breadth guard
   - should flag nodes whose stated scope spans too many distinct advanced topics

Success condition:

- graph regressions are caught automatically when advanced scope drifts back into umbrella nodes

### Workstream 5. Operationalization

Objective:

- propagate the refactor into graph-native exports and downstream use

Required moves:

- regenerate standards-augmented graph artifacts
- regenerate operational graph exports
- ensure new overlays can be traversed in the operational graph
- update README, architecture docs, and domain manifests

Success condition:

- the improved topology is visible in both canonical graph artifacts and operational exports

## Refactor Phases

### Phase R1. Architecture Re-baseline

Deliverables:

- revise `k12-expansion-architecture.md` so it reflects the actual current graph
- add an explicit math assessment-overlay model document
- define the decomposition rules for late-secondary nodes

Exit criteria:

- no maintained architecture doc still describes current secondary/AP families as absent

### Phase R2. Advanced Algebra And Precalculus Decomposition

Focus:

- `B1` through `B5`
- `AP2`

Deliverables:

- new node proposals and dependency tables for:
  - complex numbers
  - sequences and series foundations
  - conics
  - vectors and matrices
  - trig identities/equations
  - refined rational/exponential/logarithmic splits where needed

Exit criteria:

- ACT edge-topic coverage becomes explicit
- AP Precalculus and IB pathway claims become materially stronger

### Phase R3. Statistics And Probability Decomposition

Focus:

- `W1` through `W4`
- `AP1`

Deliverables:

- explicit nodes for:
  - sampling distributions
  - inference for proportions
  - inference for means
  - chi-square
  - regression slope inference
- clearer separation of descriptive statistics, probability, design, and inference

Exit criteria:

- AP Statistics is no longer represented by one umbrella extension node

### Phase R4. Calculus Decomposition

Focus:

- `AP3`
- `AP4`
- `AP5`

Deliverables:

- separate nodes for:
  - limits and continuity
  - derivative computation
  - derivative applications
  - integral meaning
  - applications of integration
  - differential equations
  - BC series and extensions

Exit criteria:

- AP Calculus AB and BC overlays can be expressed with credible unit-level granularity

### Phase R5. Standards And Overlay Reconciliation

Focus:

- refreshed standards inventory
- assessment overlays
- operational exports

Deliverables:

- revised mathematics standards inventory
- revised coverage report
- assessment overlay artifacts for SAT, ACT, AP, and IB
- regenerated standards-augmented and operational graph outputs

Exit criteria:

- the graph can be defended from both standards and assessment viewpoints using maintained artifacts rather than manual interpretation

## Immediate Backlog

The next concrete backlog should be ordered like this:

1. fix stale architecture language
2. define the advanced-node decomposition contract
3. decompose `B` and `AP2`
4. decompose `W` and `AP1`
5. decompose `AP3`-`AP5`
6. regenerate standards inventory and standards coverage report
7. add assessment overlays for SAT/PSAT and ACT
8. add AP overlays
9. add IB overlays if the repository intends to support them

## Definition Of “Overwhelmingly Superior”

The refactored mathematics graph should be considered overwhelmingly superior only when all of the following are true:

1. every current standards inventory record still has mapped graph support
2. readiness-only partials are justified explicitly rather than tolerated accidentally
3. late-secondary and AP content is decomposed into capability-sized nodes instead of umbrella nodes
4. SAT, ACT, AP, and IB overlays can be generated from graph-native artifacts
5. validators can detect both standards regressions and assessment-surface regressions
6. operational exports preserve the richer topology rather than flattening it away

## Claim Boundary

This plan is a governed refactor plan, not a claim that the refactor has already been completed. It identifies the work required to make the mathematics graph materially stronger from both the standards and external-assessment perspectives while preserving the repository’s capability-first architecture.
