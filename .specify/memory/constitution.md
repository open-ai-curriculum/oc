# Spec-Driven Learning Constitution

Source of truth: [docs/foundation/constitution.md](/Volumes/data/development/oc/docs/foundation/constitution.md)

This file is the operational mirror used by agent workflows. Keep it aligned with the canonical foundation document under `docs/foundation/`.

## Purpose

This repository exists to define, test, and operationalize a spec-driven learning system in which knowledge acquisition is dependency-aware, continuously verified, and reconciled against intended state.

The repository is not primarily a curriculum-publishing project.

Curriculum, assessments, teacher materials, learner models, and supporting software are treated as outputs of a governed learning system rather than independent artifacts.

## Core Principles

### I. Mastery Is Demonstrated, Not Assumed

No learner state may be marked complete because content was presented, assigned, practiced, or attended.

Implications:

- completion requires observable successful performance
- exposure is not evidence of mastery
- progression decisions must be grounded in demonstrated capability

### II. Dependency Integrity Is Mandatory

Knowledge is cumulative and dependency-bound. Downstream capability claims are invalid when upstream dependencies are unstable.

Implications:

- every substantial learning target must declare prerequisites
- progression without dependency satisfaction is treated as system drift
- intervention may require returning to upstream nodes rather than reteaching the current topic

### III. Conceptual Understanding And Procedural Fluency Are Dual Requirements

A learner must be able to explain what a mathematical idea means and also execute it accurately under normal classroom constraints.

Implications:

- procedural success alone is insufficient
- explanation without reliable execution is insufficient
- node closure requires both meaning and execution evidence

### IV. Failure Must Be Classified, Not Averaged Away

An incorrect response is not just "wrong." It should be mapped to a known failure mode whenever possible.

Implications:

- learner state should store dominant failure modes
- interventions must be keyed to failure classification
- coarse grades or averages must not hide structurally important breakdowns

### V. Verification Is Continuous And Local

The system verifies capability at each boundary rather than depending mainly on distant retrospective testing.

Implications:

- each node must define explicit verification gates
- advancement is gated, not time-based
- external tests are audit signals, not the main truth source

### VI. Intervention Must Be Specific To Failure Mode

Remediation is not generic repetition. It must respond to the diagnosed cause of instability.

Implications:

- each node should define bounded intervention options
- interventions must target the identified breakdown
- reteaching a whole unit is a fallback, not the default response

### VII. Retention And Transfer Are Part Of Mastery

A capability is not secure unless it persists over time and appears in more than one context.

Implications:

- mastery requires delayed re-verification
- mastery requires at least one transfer check beyond direct execution
- nodes may not close on immediate performance alone

### VIII. Human Judgment Remains A Governing Layer

The repository may use AI and automation for drafting, classification, routing, and analysis, but human review remains required for high-stakes release, policy claims, learner-impacting deployment, and sensitive instructional decisions.

Implications:

- AI output is draft until reviewed
- learner-impacting logic requires explicit human oversight
- no artifact may be represented as classroom-ready or learner-ready without human review

### IX. Accessibility, Inclusion, And Language Access Are Baseline System Constraints

Accessibility, multilingual support, and respectful representation are not downstream enhancements. They are part of system design.

Implications:

- verification and intervention models must account for varied response modes
- multilingual learners must not be misclassified because of avoidable language barriers
- outputs must consider accessibility from the start

### X. Observability Must Reflect Capability, Not Mere Activity

The system should model what a learner can do, what is unstable, and why.

Implications:

- dashboards and reports must prioritize capability state, dependency risk, and failure clusters
- activity metrics alone are insufficient
- every important state should have semantic instructional meaning

## Repository Output Classes

This repository is expected to produce:

1. learning system specifications
   - constitutions
   - capability graphs
   - node packages
   - verification models
   - failure taxonomies
   - intervention logic
   - learner-state models
2. instructional execution artifacts
   - lesson patterns
   - teacher decision guides
   - assessment items
   - exemplars
   - response-mode accommodations
3. supporting software and tooling
   - validators
   - learner-state engines
   - observability tools
   - content generation and packaging tools

All three classes must conform to this constitution.

## Workflow And Quality Gates

Every substantial artifact must pass these gates before release or deployment:

1. dependency and coherence review
2. capability-definition review
3. verification and failure-mode review
4. accessibility, inclusion, and language-access review
5. assessment review when assessment is involved
6. AI-governance review when AI was used
7. human review before any classroom-ready or learner-impacting claim

## Spec-Driven Development Rules

Spec-driven work in this repository must follow this order:

1. constitution
2. system specification
3. domain model
4. node specification
5. implementation plan
6. tasks
7. implementation

Agents must treat the following as authoritative inputs when creating new work:

- `.specify/memory/constitution.md`
- `docs/foundation/`
- `docs/specs/`
- `docs/reference/`
- `specs/007-spec-driven-learning-system/`
- `README.md`
- domain-specific specs that extend the system model

## Governance

This constitution supersedes prior repository norms that treated curriculum-product assembly as the primary repository objective.

Amendments must:

- update this file
- explain the reason for the change
- note any migration impact on active specs

All specifications, plans, tasks, code, and review decisions must be checked against this constitution.

**Version**: 2.0.0 | **Ratified**: 2026-04-14 | **Last Amended**: 2026-04-14
