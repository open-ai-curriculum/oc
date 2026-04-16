---
id: ela-literacy-graph-learner-state-and-navigation-contract
type: domain-contract
domain: ela_literacy
status: draft
version: "0.1"
dependencies: [learning-system-constitution, learning-system-architecture, learning-system-requirements, master-ela-literacy-graph-architecture, ela-literacy-graph-artifact-attachment-contract]
tags: [ela-literacy, graph, learner-state, navigation, adaptive-learning]
last_updated: "2026-04-15"
related: [master-ela-literacy-graph-architecture, graph-artifact-attachment-contract, standards-augmented-graph]
support_tier: Core release
maturity_state: Modeled
supported_profiles: [ela-literacy-graph-runtime]
evidence_class: Synthetic
---

# ELA/Literacy Graph Learner-State And Navigation Contract

## Purpose

This document defines the graph-level learner-state and navigation contract for ELA/literacy.

It turns the ELA/literacy graph from a static dependency and standards model into a runtime decision surface that can support mastery tracking, blocking analysis, intervention routing, and next-node selection.

## Core Runtime Principle

The learner is modeled against graph nodes, not against course completion or grade placement.

Every meaningful instructional or adaptive decision should be reducible to a graph question such as:

- what node is currently active
- what nodes are blocked
- which dependencies are unstable
- what evidence supports the current status
- what intervention should be assigned
- what node is teachable next

## Canonical Status Vocabulary

The graph-level runtime status vocabulary is:

- `blocked`
- `emerging`
- `provisional`
- `secure`
- `unstable`

## Canonical Navigation Decisions

The graph runtime should support these decision outcomes:

- `teach_next`
- `hold_current`
- `route_upstream`
- `reverify`
- `accelerate`

## Minimal Runtime Record Shape

```yaml
learner_id: learner-48219
node_id: F2
status: blocked
dependency_status:
  F1: unstable
direct_accuracy: 0.62
explanation_status: weak
transfer_status: not_met
retention_status: not_due
dominant_failure_modes: [F2-FM-01, F2-FM-03]
recommended_interventions:
  - ela-f2-intervention-01
last_verified_at: "2026-04-15"
review_state: draft
```

## Claim Boundary

This contract defines the intended runtime shape for learner state and navigation across the ELA/literacy graph. It does not yet claim that the repository contains a production-ready adaptive engine or a full learner-state event system.
