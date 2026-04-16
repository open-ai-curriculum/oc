---
id: master-social-studies-graph-architecture
type: domain-architecture
domain: social_studies
status: draft
version: "0.1"
dependencies: [learning-system-constitution, learning-system-architecture, learning-system-requirements]
tags: [social-studies, graph, architecture, adaptive-learning, curriculum-system]
last_updated: "2026-04-15"
related: [social-studies-domain, social-studies-master-knowledge-graph]
support_tier: Incubation
maturity_state: Scaffolded
supported_profiles: [master-social-studies-operational-graph]
evidence_class: Synthetic
---

# Master Social Studies Graph Architecture

## Purpose

This document defines the target architecture for the repository's master social studies graph as the system-of-record for a future adaptive curriculum system across social studies strands.

## Core Position

The master social studies graph shall function as:

1. the canonical cross-disciplinary capability topology
2. the attachment point for standards, artifacts, and review metadata
3. the coordinate system for learner state
4. the runtime navigation surface for inquiry, verification, and intervention

No durable social studies curriculum-system object should exist as an orphan outside this graph model when it materially affects progression, mastery evidence, intervention, or instructional decisioning.

## Architectural Layers

### Layer 1. Capability Topology

This layer defines:

- capability nodes
- prerequisite dependencies
- branch and merge structure
- shared upstream inquiry capacities
- secondary disciplinary and capstone frontiers

Canonical source:

- [master-knowledge-graph.yaml](./master-knowledge-graph.yaml)

### Layer 2. Node Execution Contract

This layer defines the execution semantics of each capability node:

- mastery thresholds
- verification gates
- failure modes
- intervention mappings
- learner-state semantics
- teacher-observability guidance
- agent-behavior guidance

### Layer 3. Artifact Attachment Layer

This layer attaches the instructional and assessment objects required to build governed social studies learning experiences.

Required artifact classes include:

- inquiry tasks
- document-analysis tasks
- map and data interpretation tasks
- civic deliberation protocols
- assessment items
- intervention assets
- exemplars
- teacher-decision supports
- accessibility supports
- multilingual supports

### Layer 4. Learner-State Layer

This layer represents the learner as a graph state, not as a course-completion summary.

For each relevant capability node, the system should be able to represent:

- current mastery status
- evidence posture
- dominant failure modes
- dependency risk
- retention state
- transfer state
- review posture where human judgment is required

### Layer 5. Navigation And Decision Layer

This layer uses the graph to determine what the system should do next.

It must answer:

- what node is teachable next
- what node is blocked
- what failure mode is dominant
- what intervention should be routed
- when re-verification is due
- when acceleration is justified
- what disciplinary artifacts should be served next

## Canonical Entity Types

The full operational social studies graph should support at least these entity types:

- `CapabilityNode`
- `CapabilityFamily`
- `Artifact`
- `LearnerState`
- `EvidenceEvent`
- `VerificationResult`
- `ReviewStatus`

## Canonical Edge Types

The full operational social studies graph should support at least these edge families:

- `DEPENDS_ON`
- `UNLOCKS`
- `MERGES_INTO`
- `EXTENDS`
- `HAS_VERIFICATION_TASK`
- `HAS_ASSESSMENT_ITEM`
- `HAS_INTERVENTION`
- `HAS_EXEMPLAR`
- `CURRENTLY_AT`
- `FAILED_WITH_MODE`
- `REQUIRES_REVERIFICATION`

## Minimal Graph Contract For Adaptive Operation

The graph is not sufficient to drive a full adaptive curriculum system unless each active node can resolve all of the following:

1. direct prerequisites
2. current mastery rule set
3. available verification surfaces
4. known failure-mode classifications
5. bounded intervention options
6. at least one instructional artifact attachment
7. at least one assessment artifact attachment
8. learner-state update rules
9. next-node navigation rules

## Domain Modeling Rule

History, civics, geography, and economics branches may diverge in content, but they must remain connected through shared inquiry, evidence, explanation, and public-argument capabilities.

Course names such as U.S. history, world history, civics, or economics are delivery views over deeper capability dependencies. They are not the graph itself.

## Claim Boundary

This document defines the intended operational role of the social studies graph. It does not claim that the repository already contains validated node packages, reviewed standards mappings, or production-ready adaptive runtime behavior for this domain.
