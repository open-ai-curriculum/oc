---
id: learning-system-constitution
type: foundation
domain: governance
status: stable
version: "1.0"
dependencies: []
tags: [constitution, governance, learning-system, spec-driven-development]
last_updated: "2026-04-14"
related: [learning-system-architecture, learning-system-requirements, maturity-model]
---

# Spec-Driven Learning Constitution

## Purpose

This repository exists to define, test, and operationalize a spec-driven learning system in which knowledge acquisition is dependency-aware, continuously verified, and reconciled against intended state.

The repository is not primarily a curriculum-publishing project.

Curriculum, assessments, teacher materials, learner models, and supporting software are treated as outputs of a governed learning system rather than independent artifacts.

## Constitutional Principles

### Principle 1. Mastery Is Demonstrated, Not Assumed

No learner state may be marked complete because content was presented, assigned, practiced, or attended.

Implications:

- completion requires observable successful performance
- exposure is not evidence of mastery
- progression decisions must be grounded in demonstrated capability

### Principle 2. Dependency Integrity Is Mandatory

Knowledge is cumulative and dependency-bound. Downstream capability claims are invalid when upstream dependencies are unstable.

Implications:

- every substantial learning target must declare prerequisites
- progression without dependency satisfaction is treated as system drift
- intervention may require returning to upstream nodes rather than reteaching the current topic

### Principle 3. Conceptual Understanding And Procedural Fluency Are Dual Requirements

A learner must be able to explain what a mathematical idea means and also execute it accurately under normal classroom constraints.

Implications:

- procedural success alone is insufficient
- explanation without reliable execution is insufficient
- node closure requires both meaning and execution evidence

### Principle 4. Failure Must Be Classified, Not Averaged Away

An incorrect response is not just "wrong." It should be mapped to a known failure mode whenever possible.

Implications:

- learner state should store dominant failure modes
- interventions must be keyed to failure classification
- coarse grades or averages must not hide structurally important breakdowns

### Principle 5. Verification Is Continuous And Local

The system verifies capability at each boundary rather than depending mainly on distant retrospective testing.

Implications:

- each node must define explicit verification gates
- advancement is gated, not time-based
- external tests are audit signals, not the main truth source

### Principle 6. Intervention Must Be Specific To Failure Mode

Remediation is not generic repetition. It must respond to the diagnosed cause of instability.

Implications:

- each node should define bounded intervention options
- interventions must target the identified breakdown
- reteaching a whole unit is a fallback, not the default response

### Principle 7. Retention And Transfer Are Part Of Mastery

A capability is not secure unless it persists over time and appears in more than one context.

Implications:

- mastery requires delayed re-verification
- mastery requires at least one transfer check beyond direct execution
- nodes may not close on immediate performance alone

### Principle 8. Human Judgment Remains A Governing Layer

The repository may use AI and automation for drafting, classification, routing, and analysis, but human review remains required for high-stakes release, policy claims, learner-impacting deployment, and sensitive instructional decisions.

Implications:

- AI output is draft until reviewed
- learner-impacting logic requires explicit human oversight
- no artifact may be represented as classroom-ready or learner-ready without human review

### Principle 9. Accessibility, Inclusion, And Language Access Are Baseline System Constraints

Accessibility, multilingual support, and respectful representation are not downstream enhancements. They are part of system design.

Implications:

- verification and intervention models must account for varied response modes
- multilingual learners must not be misclassified because of avoidable language barriers
- outputs must consider accessibility from the start

### Principle 10. Observability Must Reflect Capability, Not Mere Activity

The system should model what a learner can do, what is unstable, and why.

Implications:

- dashboards and reports must prioritize capability state, dependency risk, and failure clusters
- activity metrics alone are insufficient
- every important state should have semantic instructional meaning

## Architecture Requirement

All learning-system domains must document:

- capability-node definitions,
- prerequisite dependencies,
- mastery criteria,
- verification gates,
- failure modes,
- intervention rules,
- learner-state semantics,
- supported response modes,
- review status and claim boundaries.

## Spec-Driven Development Requirements

### Constitutional Authority For Specifications

This constitution establishes the foundational principles and requirements for the repository. All specifications, implementations, domain models, tooling, and downstream instructional materials must conform to these principles.

### Specification Hierarchy

1. **Constitution** - Foundational principles and non-negotiable rules
2. **Foundation Documents** - Core architecture and modeling rules
3. **Domain Specifications** - Detailed requirements for specific domains or slices
4. **Implementation Guides** - Practical procedures, sequencing, and evidence capture
5. **Reference Materials** - Maturity, status, gap, and validation references

### Compliance Requirements

All repository development must:

- reference and conform to constitutional principles
- document claim boundaries and review posture
- validate maintained governance docs against repository rules
- preserve auditability of major architectural changes
- escalate conflicts between convenience and constitutional requirements

## Governance

This constitution supersedes prior repository norms that treated curriculum-product assembly as the primary repository objective.

Amendments must:

- update this file
- explain the reason for the change
- note migration impact on maintained specs

**Constitutional Authority**: Open Curriculum Spec-Driven Learning Governance  
**Effective Date**: 2026-04-14  
**Version**: 1.0  
**Status**: Stable
