---
id: learning-to-learn-cross-domain-attachment-contract
type: domain-contract
domain: learning_to_learn
status: draft
version: "0.1"
dependencies: [learning-system-constitution, learning-system-architecture, learning-system-requirements, learning-to-learn-capability-graph]
tags: [learning-to-learn, cross-domain, graph, attachments, learner-support]
last_updated: "2026-04-15"
related: [learning-to-learn-domain, learning-to-learn-runtime-and-navigation-contract]
support_tier: Incubation
maturity_state: Modeled
supported_profiles: [cross-domain-learning-support-attachments]
evidence_class: Synthetic
---

# Learning-To-Learn Cross-Domain Attachment Contract

## Purpose

This document defines how subject-domain nodes may attach to `learning_to_learn` capabilities as explicit cross-domain support dependencies.

The goal is to make learning-process requirements visible in graph form without allowing those requirements to replace subject-matter dependencies, mastery gates, or failure-mode logic.

## Core Rule

`learning_to_learn` attachments are support attachments, not subject-domain substitutions.

A mathematics, ELA/literacy, science, or social studies node may reference a learning-to-learn node when that learning-process capability materially affects acquisition, retention, transfer, or intervention for the subject node.

That reference does not permit the subject node to:

- drop its content prerequisites
- redefine a content failure mode as a generic habits problem
- claim subject mastery because the learning-process node is secure

## Canonical Attachment Scope

Cross-domain support attachments may connect:

- `CapabilityNode` in a subject domain
- `CapabilityNode` in `learning_to_learn`

The default attachment target is a subject-domain `CapabilityNode`.

The `learning_to_learn` node acts as a support dependency or intervention-routing surface attached to that subject-domain node.

## Canonical Cross-Domain Edge Types

The graph should support at least these learning-process attachment edges:

- `REQUIRES_LEARNING_PROCESS_SUPPORT`
- `SUPPORTED_BY_LEARNING_PROCESS_NODE`
- `MAY_ROUTE_TO_LEARNING_PROCESS_INTERVENTION`
- `SHARES_TRANSFER_SURFACE_WITH`
- `REQUIRES_LEARNING_PROCESS_REVERIFICATION`

## Allowed Attachment Reasons

A subject-domain node may attach to a learning-to-learn node only for one or more explicit reasons:

- `task_entry_readiness`
- `confusion_signaling_readiness`
- `encoding_and_retention_support`
- `productive_practice_support`
- `help_seeking_and_feedback_support`
- `transfer_support`

Attachments should not be justified using vague labels such as `motivation`, `engagement`, or `study skills` without a more precise capability claim.

## Required Attachment Metadata

Every cross-domain attachment record must define at least:

- `attachment_id`
- `subject_domain`
- `subject_node_id`
- `learning_to_learn_node_id`
- `attachment_type`
- `reason_code`
- `claim_boundary`
- `routing_rule`
- `review_status`
- `source_path`

## Recommended Attachment Metadata

Cross-domain attachments should also declare:

- `subject_failure_mode_targets`
- `learning_to_learn_failure_mode_targets`
- `gating_posture`
- `allowed_status_routing`
- `notes`

## Canonical Gating Postures

The repository should distinguish three different gating postures.

### 1. Informing

The learning-to-learn node informs interpretation and intervention choice but does not block progression on its own.

Use this when:

- subject mastery remains primarily content-determined
- the learning-process signal is useful but not dependency-critical

### 2. Co-Gating

The learning-to-learn node participates in readiness or stability judgments for the subject node.

Use this when:

- the subject node reliably fails without the learning-process capability
- the learner cannot demonstrate stable acquisition or retention without that support surface

### 3. Intervention-Only

The learning-to-learn node is used only for routing intervention after failure is diagnosed.

Use this when:

- the subject node remains the primary mastery surface
- the learning-process node helps choose the next support move after failure

## Required Guardrails

Every cross-domain attachment must preserve these guardrails:

1. content evidence remains the basis for subject-domain mastery claims
2. learning-process evidence may explain instability but may not erase content-specific failure classification
3. inaccessible instruction, language load, or environmental mismatch must not be mislabeled as learner-internal weakness
4. human review remains available when the system cannot distinguish content instability from learning-process instability cleanly

## Minimal Attachment Record Shape

The repository should maintain machine-readable attachment records using a shape equivalent to:

```yaml
attachment_id: math-f5-to-ltl-m1
subject_domain: mathematics
subject_node_id: F5
learning_to_learn_node_id: M1
attachment_type: REQUIRES_LEARNING_PROCESS_SUPPORT
reason_code: encoding_and_retention_support
gating_posture: co-gating
routing_rule: route_to_learning_to_learn_only_when_subject_failure_and_encoding_instability_cooccur
subject_failure_mode_targets: [F5-FM-01, F5-FM-03]
learning_to_learn_failure_mode_targets: [M1-FM-01, M1-FM-02]
claim_boundary: does_not_replace_fraction_mastery_evidence
review_status: draft
source_path: domains/learning_to_learn/cross-domain-attachments/attachment-registry.yaml
```

## Runtime Use

The adaptive system should be able to query these attachments to answer:

- whether a subject failure should route to a learning-process intervention surface
- whether a learning-process weakness is co-gating the subject node
- whether re-verification of a learning-process node is required before claiming durable subject stability

## Current Repository Position

The repository now has a governed `learning_to_learn` domain and first-wave node packages, but cross-domain attachments are still at the modeled-contract stage.

This document defines the contract for those future integrations.

## Claim Boundary

This contract defines how subject domains may attach to learning-to-learn capabilities. It does not yet claim that the repository contains reviewed, production-grade cross-domain routing behavior.
