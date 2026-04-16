---
id: learning-to-learn-runtime-and-navigation-contract
type: domain-contract
domain: learning_to_learn
status: draft
version: "0.1"
dependencies: [learning-system-constitution, learning-system-architecture, learning-system-requirements, learning-to-learn-capability-graph, learning-to-learn-cross-domain-attachment-contract]
tags: [learning-to-learn, graph, learner-state, navigation, adaptive-learning]
last_updated: "2026-04-15"
related: [learning-to-learn-domain, learning-to-learn-cross-domain-attachment-contract]
support_tier: Incubation
maturity_state: Modeled
supported_profiles: [learning-to-learn-graph-runtime]
evidence_class: Synthetic
---

# Learning-To-Learn Runtime And Navigation Contract

## Purpose

This document defines the graph-level learner-state and navigation contract for `learning_to_learn` as both an internal domain and a cross-domain support surface.

## Core Runtime Principle

The learner is modeled against explicit learning-process capability nodes, not against generic engagement labels, task completion, or broad study-skills categories.

Every meaningful runtime decision should be reducible to graph questions such as:

- which learning-process node is currently unstable
- whether that instability is primary or secondary to a content-domain breakdown
- which intervention should route to the learning-process layer
- whether learning-process re-verification is needed before claiming durable subject stability

## Learner-State Entity

At minimum, a node-level learner state must carry:

- `learner_id`
- `node_id`
- `status`
- `dependency_status`
- `direct_accuracy`
- `explanation_status`
- `transfer_status`
- `retention_status`
- `dominant_failure_modes`
- `recommended_interventions`
- `last_verified_at`
- `review_state`

## Canonical Status Vocabulary

The graph-level runtime status vocabulary is:

- `blocked`
- `emerging`
- `provisional`
- `secure`
- `unstable`

## Domain-Specific Guardrail

The runtime must preserve the distinction between:

- content-domain misunderstanding
- learning-process instability
- mixed content and learning-process instability
- accessibility, language, or context constraints that require human review

The system should not collapse those into a single generic self-regulation problem.

## Canonical Navigation Questions

The runtime must be able to answer at least:

1. Which learning-to-learn node is currently active or unstable?
2. Which subject-domain nodes are attached to that learning-to-learn node?
3. Is the learning-to-learn node informing, co-gating, or intervention-only for the attached subject node?
4. Which intervention should be routed next?
5. When is delayed re-verification due for the learning-process node?
6. Which subject-domain claims should remain provisional because the learning-process surface is unstable?

## Canonical Navigation Decisions

The runtime should support these decision outcomes.

### Route Learning-Process Intervention

Move to a `learning_to_learn` intervention surface when:

- a subject-domain failure pattern indicates the learning-process node is materially involved
- the attachment contract permits intervention routing

### Hold Subject Node As Primary

Keep the subject node primary when:

- the failure is best explained by content instability
- the learning-process node is only informing rather than co-gating

### Require Dual Reverification

Require both subject-node and learning-process re-verification when:

- the attachment posture is co-gating
- the subject node was stabilized only after learning-process intervention

### Escalate For Human Review

Escalate when:

- the system cannot cleanly distinguish content instability from learning-process instability
- language, accessibility, or context conditions may be driving the observed breakdown

## Minimal Runtime Edge Types

The operational runtime should support at least:

- `CURRENTLY_AT`
- `SUPPORTED_BY_LEARNING_PROCESS_NODE`
- `CO_GATED_BY_LEARNING_PROCESS_NODE`
- `ROUTES_TO_LEARNING_PROCESS_INTERVENTION`
- `REQUIRES_DUAL_REVERIFICATION`
- `ESCALATE_FOR_HUMAN_REVIEW`

## Claim Boundary

This contract defines the intended runtime shape for `learning_to_learn` learner state and cross-domain routing. It does not yet claim that the repository contains a production-ready adaptive engine or validated cross-domain learner-state stream.
