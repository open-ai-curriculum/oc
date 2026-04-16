---
id: mathematics-graph-learner-state-and-navigation-contract
type: domain-contract
domain: mathematics
status: draft
version: "0.1"
dependencies: [learning-system-constitution, learning-system-architecture, learning-system-requirements, master-mathematics-graph-architecture, mathematics-graph-artifact-attachment-contract]
tags: [mathematics, graph, learner-state, navigation, adaptive-learning]
last_updated: "2026-04-15"
related: [master-mathematics-graph-architecture, graph-artifact-attachment-contract, standards-augmented-graph]
support_tier: Core release
maturity_state: Modeled
supported_profiles: [mathematics-graph-runtime]
evidence_class: Synthetic
---

# Mathematics Graph Learner-State And Navigation Contract

## Purpose

This document defines the graph-level learner-state and navigation contract for mathematics.

It turns the mathematics graph from a static dependency and standards model into a runtime decision surface that can support mastery tracking, blocking analysis, intervention routing, and next-node selection.

## Core Runtime Principle

The learner is modeled against graph nodes, not against course completion or grade placement.

Every meaningful instructional or adaptive decision should be reducible to a graph question such as:

- what node is currently active
- what nodes are blocked
- which dependencies are unstable
- what evidence supports the current status
- what intervention should be assigned
- what node is teachable next

## Learner-State Entity

The graph runtime must support a `LearnerState` entity for each relevant capability node.

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

These statuses must be interpreted consistently across nodes, even though the evidence and failure patterns differ per node.

## Dependency-State Rules

Navigation decisions must use dependency stability, not only current-node performance.

That means:

- a node may not advance to `secure` if required dependencies are blocking
- a node may be downgraded to `unstable` when an upstream dependency becomes unstable
- intervention routing may legally target an upstream node instead of the current node

## Gate-Aligned Evidence Model

The graph runtime should preserve evidence aligned to the node execution model:

- `G1` direct performance
- `G2` meaning/explanation
- `G3` transfer
- `G4` retention

The system should not treat raw accuracy alone as sufficient mastery evidence.

## Canonical Navigation Questions

The graph runtime must be able to answer at least:

1. What node is the learner currently working on?
2. Which nodes are available next because their dependencies are satisfied?
3. Which nodes are blocked, and by which unstable dependencies?
4. Which intervention should be routed for the current failure mode?
5. Which verification artifact should be served next?
6. When is delayed re-verification due?
7. Which node should be revisited because instability propagated upstream or downstream?

## Canonical Navigation Decisions

The graph runtime should support these decision outcomes.

### Teach Next

Select the highest-priority available node whose dependencies are secure and whose current status is not already `secure`.

### Hold Current Node

Remain on the current node when:

- current-node gates are not yet met
- the current node is still the most appropriate intervention surface

### Route Upstream Intervention

Move attention to an upstream dependency when:

- the current node is blocked by dependency instability
- the dominant failure mode points to prerequisite breakdown rather than current-node execution only

### Reverify

Schedule or trigger a retention or transfer check when:

- a node is `provisional`
- retention is due
- downstream movement would otherwise continue without evidence of stability

### Accelerate

Allow faster movement when:

- the current node is `secure`
- dependencies are secure
- the next node is available
- no review gate is blocking acceleration

## Minimal Graph-Level Runtime Edge Types

The operational runtime should support at least:

- `CURRENTLY_AT`
- `BLOCKED_BY_DEPENDENCY`
- `HAS_EVIDENCE`
- `FAILED_WITH_MODE`
- `REQUIRES_INTERVENTION`
- `REQUIRES_REVERIFICATION`
- `NEXT_ELIGIBLE_FOR`
- `ASSIGNED_ARTIFACT`

## Minimal Runtime Record Shape

The repository should maintain a machine-readable runtime record shape equivalent to:

```yaml
learner_id: learner-48219
node_id: F5
status: blocked
dependency_status:
  F2: unstable
  F3: secure
  F4: secure
direct_accuracy: 0.62
explanation_status: weak
transfer_status: not_met
retention_status: not_due
dominant_failure_modes: [F5-FM-01, F5-FM-03]
recommended_interventions:
  - math-f5-intervention-01
last_verified_at: "2026-04-15"
review_state: draft
```

## Slice-Level Runtime Packages

To operationalize the graph incrementally, the repository should support runtime packages for bounded slices such as:

- `F1` through `F5`
- `S1` through `E3`

Each runtime package should define:

- participating node set
- state schema
- navigation rules
- entry conditions
- next-node selection rules
- artifact routing references

## Current Repository Position

The repository already has node-level learner-state schemas and transition rules inside mathematics node packages.

What it did not have before this contract was:

- a graph-level learner-state contract
- a graph-level navigation contract
- a machine-readable runtime slice package

## Immediate Follow-On

The next required step is to instantiate a runtime slice registry for one mathematics segment so graph-native state and next-node routing can be simulated end to end.

## Claim Boundary

This contract defines the intended runtime shape for learner state and navigation across the mathematics graph. It does not yet claim that the repository contains a production-ready adaptive engine or a full learner-state event system.
