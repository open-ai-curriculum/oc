---
id: social-studies-graph-artifact-attachment-contract
type: domain-contract
domain: social_studies
status: draft
version: "0.1"
dependencies: [learning-system-constitution, learning-system-architecture, learning-system-requirements, master-social-studies-graph-architecture]
tags: [social-studies, graph, artifacts, curriculum, adaptive-learning]
last_updated: "2026-04-15"
related: [master-social-studies-graph-architecture, social-studies-domain]
support_tier: Incubation
maturity_state: Scaffolded
supported_profiles: [social-studies-graph-artifact-attachments]
evidence_class: Synthetic
---

# Social Studies Graph Artifact Attachment Contract

## Purpose

This document defines how instructional, assessment, intervention, and support artifacts attach to the social studies graph as first-class graph-linked objects.

## Core Rule

Every graph-relevant curriculum object must attach to one or more graph-native entities using typed references.

Attachment by filename convention, spreadsheet lookup, or informal naming is not sufficient.

## Attachment Scope

Artifacts may attach to:

- `CapabilityNode`
- `CapabilityFamily`

The default attachment target is `CapabilityNode`.

## Canonical Artifact Classes

The graph must support at least these artifact classes:

- `InquiryTask`
- `SourceAnalysisTask`
- `MapOrDataInterpretationTask`
- `DiscussionProtocol`
- `AssessmentItem`
- `VerificationTask`
- `RetentionCheck`
- `InterventionAsset`
- `TeacherDecisionSupport`
- `AccessibilitySupport`
- `LanguageSupport`
- `Exemplar`

## Canonical Attachment Edges

The graph should support at least these artifact edges:

- `HAS_INQUIRY_TASK`
- `HAS_SOURCE_ANALYSIS_TASK`
- `HAS_MAP_OR_DATA_TASK`
- `HAS_DISCUSSION_PROTOCOL`
- `HAS_ASSESSMENT_ITEM`
- `HAS_VERIFICATION_TASK`
- `HAS_RETENTION_CHECK`
- `HAS_INTERVENTION`
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

## Mapping To Node Execution Contract

Assessment and verification artifacts should specify which node gates they address:

- `G1` direct performance
- `G2` explanation/meaning
- `G3` transfer
- `G4` retention

Intervention artifacts should specify which failure modes they address.

## Minimum Attachment Coverage

An operational node is not artifact-complete unless it has at least:

1. one inquiry or instructional artifact
2. one assessment or verification artifact
3. one intervention or reteach artifact
4. one teacher or support artifact

## Claim Boundary

This contract defines the intended artifact-attachment shape for the social studies graph. It does not claim that those artifact registries already exist in reviewed form.
