---
id: master-ela-literacy-graph-architecture
type: domain-architecture
domain: ela_literacy
status: draft
version: "0.1"
dependencies: [learning-system-constitution, learning-system-architecture, learning-system-requirements]
tags: [ela-literacy, graph, architecture, adaptive-learning, curriculum-system]
last_updated: "2026-04-15"
related: [ela-literacy-domain, ela-literacy-master-knowledge-graph, ela-literacy-standards-augmented-graph]
support_tier: Core release
maturity_state: Modeled
supported_profiles: [master-ela-literacy-operational-graph]
evidence_class: Synthetic
---

# Master ELA/Literacy Graph Architecture

## Purpose

This document defines the target architecture for the repository's master ELA/literacy graph as the system-of-record for a future curriculum-based adaptive learning system.

The ELA/literacy graph is not only a sequence of reading and writing prerequisites. It is intended to become the canonical operational graph to which standards, instructional content, assessment artifacts, interventions, learner-state semantics, and navigation rules are attached.

## Core Position

The master ELA/literacy graph shall function as:

1. the canonical literacy capability topology
2. the standards alignment backbone
3. the attachment point for curriculum and assessment artifacts
4. the coordinate system for learner state
5. the runtime navigation surface for adaptive progression

No durable curriculum-system object should exist as an orphan outside this graph model when it materially affects literacy progression, mastery evidence, intervention, or instructional decisioning.

## Architectural Layers

### Layer 1. Capability Topology

This layer defines:

- capability nodes
- prerequisite dependencies
- graph entry conditions
- graph branch and merge structure
- terminal frontier nodes

Canonical source:

- [master-knowledge-graph.yaml](master-knowledge-graph.yaml)

### Layer 2. Node Execution Contract

This layer defines the execution semantics of each capability node:

- mastery thresholds
- verification gates
- failure modes
- intervention mappings
- learner-state semantics
- teacher-observability guidance
- agent-behavior guidance

Canonical sources:

- `nodes/*/node-config.yaml`
- `nodes/*/node-spec.md`
- related node-package artifacts

### Layer 3. Standards-Native Overlay

This layer treats standards entities as first-class graph objects, not as passive annotations.

It defines:

- grade-band entities
- content-domain entities
- standards-anchor entities
- performance-level entities
- state-profile entities
- typed edges connecting capability nodes to those standards entities

Operational source:

- [standards-augmented-graph.yaml](standards-augmented-graph.yaml)
- [standards-augmented-graph.json](standards-augmented-graph.json)

### Layer 4. Artifact Attachment Layer

This layer attaches the instructional and assessment objects required to build literacy products and adaptive delivery.

Required artifact classes include:

- lesson patterns
- worked examples
- guided-practice sets
- independent-practice sets
- fluency or rehearsal routines
- intervention assets
- assessment items
- exemplars
- teacher-decision supports
- accessibility supports
- multilingual or language-development supports

These artifacts must attach to graph nodes or graph-native standards entities through typed references rather than through informal naming or external spreadsheets.

### Layer 5. Learner-State Layer

This layer represents the learner as a graph state, not a grade-level summary.

For each relevant capability node, the system should be able to represent:

- current mastery status
- evidence posture
- dominant failure modes
- dependency risk
- retention state
- transfer state
- confidence or certainty posture
- review status where human judgment is required

This layer is what makes graph navigation adaptive rather than merely sequential.

### Layer 6. Navigation And Decision Layer

This layer uses the graph to determine what the system should do next.

It must answer:

- what node is teachable next
- what node is blocked
- why a node is blocked
- what intervention should be routed
- when re-verification is due
- when acceleration is justified
- when upstream return is required
- what artifacts should be served next

## Canonical Entity Types

The full operational ELA/literacy graph should support at least these entity types.

### Capability Entities

- `CapabilityNode`
- `CapabilityFamily`

### Standards Entities

- `GradeBand`
- `ContentDomain`
- `PerformanceLevel`
- `StandardsAnchor`
- `StateProfile`

### Curriculum And Assessment Entities

- `Artifact`
- `LessonPattern`
- `AssessmentItem`
- `InterventionAsset`
- `Exemplar`
- `SupportAsset`

### Learner And Runtime Entities

- `LearnerState`
- `EvidenceEvent`
- `VerificationResult`
- `ReviewStatus`

## Canonical Edge Types

The full operational ELA/literacy graph should support at least these edge families.

### Topology Edges

- `DEPENDS_ON`
- `UNLOCKS`
- `MERGES_INTO`
- `EXTENDS`

### Standards Edges

- `ALIGNS_TO_GRADE_BAND`
- `ALIGNS_TO_CONTENT_DOMAIN`
- `ALIGNS_TO_PERFORMANCE_LEVEL`
- `ALIGNS_TO_STANDARD_ANCHOR`
- `ALIGNS_TO_STATE_PROFILE`

### Artifact Edges

- `HAS_LESSON_PATTERN`
- `HAS_WORKED_EXAMPLE`
- `HAS_GUIDED_PRACTICE`
- `HAS_INDEPENDENT_PRACTICE`
- `HAS_ASSESSMENT_ITEM`
- `HAS_INTERVENTION`
- `HAS_EXEMPLAR`
- `HAS_ACCESSIBILITY_SUPPORT`
- `HAS_LANGUAGE_SUPPORT`

### Learner-State Edges

- `CURRENTLY_AT`
- `HAS_EVIDENCE`
- `FAILED_WITH_MODE`
- `REQUIRES_REVERIFICATION`
- `REMEDIATED_BY`

## Minimal Graph Contract For Adaptive Operation

The graph is not yet sufficient to drive a full adaptive literacy system unless each active node can resolve all of the following:

1. direct prerequisites
2. current mastery rule set
3. available verification surfaces
4. known failure-mode classifications
5. bounded intervention options
6. standards and grade-band placement
7. at least one instructional artifact attachment
8. at least one assessment artifact attachment
9. learner-state update rules
10. next-node navigation rules

If any of those are missing, the graph may still be structurally valid, but it is not yet operationally complete for adaptive curriculum delivery.

## Mastery Heat Map Requirements

A mastery heat map across the ELA/literacy graph requires standards and grade-band entities to be graph-native.

The graph must support traversal patterns such as:

- learner -> capability node -> grade band
- learner -> capability node -> content domain
- learner -> capability node -> standards anchor
- learner -> capability node -> intervention asset
- learner -> capability node -> assessment evidence

This is why standards cannot remain only as sidecar mapping documents. They must participate in the operational graph as addressable entities with typed edges.

## Authoritative Sources

The graph architecture should be derived from these sources in this order:

1. [master-knowledge-graph.yaml](master-knowledge-graph.yaml)
2. `nodes/*/node-config.yaml`
3. [standards-augmented-graph.yaml](standards-augmented-graph.yaml)
4. artifact attachment registries
5. learner-state and navigation contract documents
6. runtime slice packages

## Current Repository Position

The repository currently has:

- a complete canonical literacy capability topology for the modeled spine
- node execution contracts across the entire currently seeded ELA/literacy frontier
- a generated standards-augmented graph layer
- graph-level attachment and runtime contracts
- multiple draft attachment registries and runtime slices
- generated Gephi and Neo4j exports

The repository does not yet have:

- reviewed node-level standards hardening across priority literacy families
- domain-specific graph fidelity beyond the current 26-node compression boundary
- a complete attachment layer across every modeled literacy slice
- a production runtime or learner-state service
- a curriculum-product compiler that assembles literacy artifacts directly from the graph

## Immediate Required Follow-On Work

The next required ELA/literacy architecture work is:

1. harden standards alignment from scaffold to reviewed identifier posture
2. expand graph fidelity where capability compression hides meaningful literacy structure
3. expand attachment and runtime coverage across more slices
4. ensure validators and generated overlays remain derived from the same canonical graph sources

## Claim Boundary

This document defines the intended operational role of the ELA/literacy graph in a future adaptive learning system. It does not yet claim that the repository contains full curriculum attachments, a production runtime, or validated learner-state services.
