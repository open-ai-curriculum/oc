# Feature Specification: Spec-Driven Learning System

**Feature Branch**: `007-spec-driven-learning-system`  
**Created**: 2026-04-14  
**Status**: Draft  
**Input**: User direction: "Hard pivot the repository toward the spec-driven learning-system approach described in the shared dialogue."

## User Scenarios & Testing

### User Story 1 - Define the repository around a learning-system architecture (Priority: P1)

A contributor can understand that the repository now centers on capability graphs, verification gates, failure modes, and interventions rather than primarily on curriculum-product assembly.

**Why this priority**: Without an explicit system reset, the repository will continue generating artifacts from the wrong abstraction.

**Independent Test**: A contributor can read the governing docs and identify the system model, the authority order, and the first proof-of-method domain.

### User Story 2 - Define a reusable domain model for capability-based learning (Priority: P1)

A designer or engineer can model a learning slice using nodes, dependencies, mastery criteria, verification gates, failure modes, interventions, and learner states.

**Why this priority**: The spec-driven approach requires a canonical ontology before downstream implementation can be coherent.

**Independent Test**: A contributor can build a domain slice without relying on vague topic sequencing.

### User Story 3 - Establish the first proof-of-method math slice (Priority: P1)

A contributor can use a narrow math progression as the first repository proof of the spec-driven approach.

**Why this priority**: The repository needs a tractable domain in which the model can be made operational and tested.

**Independent Test**: A contributor can identify the first math slice, its nodes, and the first node package to be fully specified.

## Edge Cases

- How should the system distinguish between language-access barriers and actual capability gaps?
- How should the system prevent over-standardization that suppresses transfer or non-routine reasoning?
- How should the system represent partial stability, such as strong direct performance with weak retention?

## Requirements

### Functional Requirements

- **FR-001**: The repository must define a primary architecture in which learning is modeled as a dependency-aware capability graph.
- **FR-002**: The repository must define node-level mastery as a combination of direct performance, explanation, transfer, and retention.
- **FR-003**: The repository must require explicit failure-mode classification where feasible.
- **FR-004**: The repository must require interventions to map to diagnosed failure modes.
- **FR-005**: The repository must define a learner-state model that stores capability status, dependency status, failure patterns, and review state.
- **FR-006**: The repository must treat curriculum, assessment, teacher tools, and software as outputs of the learning-system model.
- **FR-007**: The repository must identify the first proof-of-method domain slice as a math progression from fractions through equation solving.
- **FR-008**: The repository must identify the first fully specified node target within that slice.
- **FR-009**: The repository must preserve human review as a required gate before learner-impacting deployment or classroom-ready claims.
- **FR-010**: The repository must remove obsolete curriculum-product architecture when it is no longer considered valuable or reusable.

### Key Entities

- **Capability Node**: The smallest governed learning target with dependencies, mastery criteria, failure modes, and interventions.
- **Verification Gate**: A local decision point for direct performance, meaning, transfer, or retention.
- **Failure Mode**: A named and instructionally meaningful pattern of breakdown.
- **Intervention Rule**: A bounded response tied to a specific failure mode or unstable dependency.
- **Learner State**: The current modeled state of a learner relative to one or more capability nodes.
- **Domain Slice**: A limited progression used to prove the learning-system model before broader scaling.

## Success Criteria

- **SC-001**: The repository has a primary governing spec package dedicated to the spec-driven learning-system model.
- **SC-002**: The repository defines the first domain slice as `fractions -> signed numbers -> one-step equations -> multi-step equations -> variables on both sides`.
- **SC-003**: The repository identifies the first fully specified node target as unlike-denominator fraction addition and subtraction.
- **SC-004**: The repository’s top-level navigation and agent guidance make the new direction explicit.
- **SC-005**: The active repository no longer contains stale curriculum-product architecture competing with the new learning-system model.

## Assumptions

- The current repository contains useful background work, but much of it was generated from the wrong primary abstraction.
- A narrow math proof-of-method is preferable to continuing broad curriculum-product expansion.
- The first operational value comes from formalizing the system model, not from publishing additional grade-level curriculum volumes.
