---
id: social-studies-graph-learner-state-and-navigation-contract
type: domain-contract
domain: social_studies
status: draft
version: "0.1"
dependencies: [learning-system-constitution, learning-system-architecture, learning-system-requirements, master-social-studies-graph-architecture, social-studies-graph-artifact-attachment-contract]
tags: [social-studies, graph, learner-state, navigation, adaptive-learning]
last_updated: "2026-04-15"
related: [master-social-studies-graph-architecture, social-studies-graph-artifact-attachment-contract]
support_tier: Incubation
maturity_state: Scaffolded
supported_profiles: [social-studies-graph-runtime]
evidence_class: Synthetic
---

# Social Studies Graph Learner-State And Navigation Contract

## Purpose

This document defines the graph-level learner-state and navigation contract for the social studies domain.

## Core Runtime Principle

The learner is modeled against graph nodes, not against unit completion or course enrollment.

Every meaningful instructional or adaptive decision should be reducible to a graph question such as:

- what node is currently active
- what nodes are blocked
- which dependencies are unstable
- what evidence supports the current status
- what intervention should be assigned
- what node is teachable next

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

## Dependency-State Rules

Navigation decisions must use dependency stability, not only current-node performance.

That means:

- a node may not advance to `secure` if required dependencies are blocking
- a node may be downgraded to `unstable` when an upstream dependency becomes unstable
- intervention routing may legally target an upstream node instead of the current node

## Canonical Navigation Questions

The graph runtime must be able to answer at least:

1. What node is the learner currently working on?
2. Which nodes are available next because their dependencies are satisfied?
3. Which nodes are blocked, and by which unstable dependencies?
4. Which intervention should be routed for the current failure mode?
5. Which verification artifact should be served next?
6. When is delayed re-verification due?
7. Which node should be revisited because instability propagated upstream or downstream?

## Domain-Specific Guardrail

The runtime must preserve the distinction between:

- language-access barriers
- source-access barriers
- evidence-reasoning breakdowns
- content-model misunderstandings

The system should not collapse those into a single generic incorrect-response bucket.

## Claim Boundary

This contract defines the intended runtime shape for learner state and navigation across the social studies graph. It does not yet claim that the repository contains a production-ready adaptive engine or validated learner-state event stream for this domain.
