---
id: mathematics-graph-artifact-attachment-contract
type: domain-contract
domain: mathematics
status: draft
version: "0.1"
dependencies: [learning-system-constitution, learning-system-architecture, learning-system-requirements, master-mathematics-graph-architecture]
tags: [mathematics, graph, artifacts, curriculum, adaptive-learning]
last_updated: "2026-04-15"
related: [master-mathematics-graph-architecture, mathematics-standards-augmented-graph, mathematics-domain]
support_tier: Core release
maturity_state: Modeled
supported_profiles: [mathematics-graph-artifact-attachments]
evidence_class: Synthetic
---

# Mathematics Graph Artifact Attachment Contract

## Purpose

This document defines how instructional, assessment, intervention, and support artifacts attach to the mathematics graph as first-class graph-linked objects.

The goal is to ensure that the mathematics graph can serve as the canonical operational surface for curriculum generation and adaptive navigation, rather than acting only as a prerequisite map plus disconnected content libraries.

## Core Rule

Every graph-relevant curriculum object must attach to one or more graph-native entities using typed references.

Attachment by filename convention, spreadsheet lookup, or informal naming is not sufficient.

## Attachment Scope

Artifacts may attach to:

- `CapabilityNode`
- `AssessmentOverlay`
- `AssessmentUnit`
- `GradeBand`
- `ContentDomain`
- `StandardsAnchor`
- `PerformanceLevel`

The default attachment target is `CapabilityNode`.

Attachments to grade bands, content domains, or standards anchors are secondary and do not replace node-level linkage where node-level applicability exists.

Assessment-overlay and assessment-unit attachments are appropriate when the artifact primarily governs:

- external assessment interpretation
- mixed-skill or cross-node assessment packaging
- course-level policy or reporting surfaces
- assessment-specific teacher decision support that cannot be reduced to one node without losing fidelity

## Canonical Artifact Classes

The mathematics graph must support at least these artifact classes.

### Instructional Artifacts

- `LessonPattern`
- `WorkedExample`
- `GuidedPracticeSet`
- `IndependentPracticeSet`
- `FluencyRoutine`

### Assessment Artifacts

- `AssessmentItem`
- `AssessmentBundle`
- `VerificationTask`
- `RetentionCheck`

### Intervention Artifacts

- `InterventionAsset`
- `ErrorAnalysisTask`
- `ReteachRoutine`

### Support Artifacts

- `TeacherDecisionSupport`
- `AccessibilitySupport`
- `LanguageSupport`
- `Exemplar`

## Canonical Attachment Edges

The graph should support at least these artifact edges.

### Instructional Edges

- `HAS_LESSON_PATTERN`
- `HAS_WORKED_EXAMPLE`
- `HAS_GUIDED_PRACTICE`
- `HAS_INDEPENDENT_PRACTICE`
- `HAS_FLUENCY_ROUTINE`

### Assessment Edges

- `HAS_ASSESSMENT_ITEM`
- `HAS_ASSESSMENT_BUNDLE`
- `HAS_VERIFICATION_TASK`
- `HAS_RETENTION_CHECK`

### Intervention Edges

- `HAS_INTERVENTION`
- `HAS_ERROR_ANALYSIS_TASK`
- `HAS_RETEACH_ROUTINE`

### Support Edges

- `HAS_TEACHER_DECISION_SUPPORT`
- `HAS_ACCESSIBILITY_SUPPORT`
- `HAS_LANGUAGE_SUPPORT`
- `HAS_EXEMPLAR`

## Required Artifact Metadata

Every attached artifact must define at least:

- `artifact_id`
- `artifact_type`
- `title`
- `status`
- `support_tier`
- `maturity_state`
- `target_entity_type`
- `target_entity_id`
- `primary_node_id` where applicable
- `purpose`
- `delivery_format`
- `source_path`
- `review_status`

## Recommended Artifact Metadata

Artifacts should also declare:

- `grade_band`
- `content_domain`
- `standards_anchor_ids`
- `verification_gate_targets`
- `failure_mode_targets`
- `intervention_targets`
- `response_modes_supported`
- `accessibility_tags`
- `language_support_tags`
- `estimated_duration_minutes`
- `prerequisite_artifact_ids`

## Attachment Semantics

### Node-Primary

Most artifacts should be node-primary.

That means:

- one artifact has one primary `CapabilityNode`
- the artifact may also include secondary standards or grade-band references
- navigation and mastery logic resolve first through the node attachment

### Standards-Secondary

Standards entities should be used to support:

- reporting
- coverage analysis
- standards heat maps
- grade-band aggregation

They should not replace node-primary attachment except where an artifact is intentionally cross-node or reporting-only.

### Assessment-Surface Attachments

Assessment-surface attachments should be used for:

- ACT mixed-skill or modeling bundles that legitimately span multiple families
- IB course-level or level-variant guidance such as AA HL or AI SL support
- assessment-facing teacher decision guides tied to maintained overlays or overlay units

These artifacts should still declare:

- one primary node or declared primary attachment context
- explicit secondary node attachments where they span multiple capability areas
- clear claim boundaries so assessment-facing governance is not confused with instructional approval

### Cross-Node Artifacts

Some artifacts legitimately span multiple nodes.

Examples:

- cumulative review sets
- mixed-skill assessment bundles
- bridging intervention routines
- diagnostic tasks

Those artifacts must still define:

- one primary node or declared primary attachment context
- a list of secondary node attachments
- an explicit reason for cross-node scope

## Minimum Attachment Coverage

An operational mathematics node is not artifact-complete unless it has at least:

1. one instructional artifact
2. one assessment or verification artifact
3. one intervention or reteach artifact
4. one teacher or support artifact

Where relevant, a node should also have:

- at least one accessibility support
- at least one language support
- at least one exemplar

## Mapping To Node Execution Contract

Artifact attachments must align to the node execution contract.

### Verification Alignment

Assessment and verification artifacts should specify which node gates they address:

- `G1` direct performance
- `G2` meaning/explanation
- `G3` transfer
- `G4` retention

### Failure-Mode Alignment

Intervention artifacts should specify which node failure modes they address.

### Status Alignment

Artifacts should declare whether they are intended for:

- blocked learners
- emerging learners
- provisional learners
- secure learners
- unstable learners

## Minimal Attachment Record Shape

The repository should eventually maintain a machine-readable registry using a shape equivalent to:

```yaml
artifact_id: math-f5-guided-practice-01
artifact_type: GuidedPracticeSet
title: Unlike-Denominator Fraction Addition Guided Practice
status: draft
support_tier: Core release
maturity_state: Modeled
target_entity_type: CapabilityNode
target_entity_id: F5
primary_node_id: F5
secondary_node_ids: [F2, F3, F4]
purpose: guided_practice
delivery_format: printable_and_digital
source_path: curriculum/mathematics/fractions/f5/guided-practice-01.md
verification_gate_targets: [G1, G2]
failure_mode_targets: [F5-FM-01, F5-FM-03]
response_modes_supported: [written, oral, manipulatives]
accessibility_tags: [large-print-compatible, read-aloud-compatible]
language_support_tags: [glossary-supported, sentence-frame-supported]
review_status: draft
```

## Runtime Use

The adaptive system should be able to query the graph for:

- the next teachable node
- the right artifact class for the learner's current state
- the right intervention for the diagnosed failure mode
- the right verification task for the required gate
- the standards and grade-band implications of the selected artifact

That means artifact attachment is not only publishing metadata. It is part of runtime decisioning.

## Non-Negotiables

- no instructional artifact without graph attachment
- no assessment artifact without explicit gate alignment
- no intervention artifact without explicit failure-mode or instability alignment
- no classroom-ready claim for an artifact without review status
- no standards-only attachment used to bypass node-level attachment where a node target exists

## Current Repository Position

The repository does not yet maintain a governed machine-readable artifact attachment registry for mathematics.

This contract therefore defines:

- the required artifact classes
- the edge model
- the minimum metadata
- the minimum attachment coverage expected before the graph can drive a true curriculum compiler or adaptive runtime

## Immediate Follow-On

The next required step after this contract is:

1. define the machine-readable artifact attachment registry schema
2. create attachment registries for one initial mathematics family or node slice
3. validate that attachments can be traversed from capability nodes in exports and runtime representations

## Claim Boundary

This contract defines the required shape of graph-native artifact attachment for mathematics. It does not claim that the repository already contains enough attached instructional artifacts to function as a production curriculum system.
