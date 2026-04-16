# Learning-To-Learn Capability Graph

## Purpose

This document defines the current canonical capability-graph scaffold for the `learning_to_learn` domain.

It is the domain-level graph surface that later node packages, learner-state contracts, verification models, and intervention tooling should extend.

## Current Role

The learning-to-learn domain is at the scaffold stage. This graph therefore serves four immediate purposes:

1. preserve a governed pre-K through Grade 12 learning-process shape
2. make cross-domain learning dependencies explicit before node-package authoring begins
3. distinguish learning-process instability from subject-domain instability without collapsing either one
4. establish a stable architecture for future learner-state, verification, retention, and intervention work

## Graph Model

The current graph integrates:

- task entry and attention control
- comprehension monitoring
- memory encoding, retrieval, and retention
- strategy selection and practice quality
- self-regulation, help-seeking, and feedback use
- transfer and independent learning

This means a learning-process node is not considered structurally stable unless its upstream monitoring, strategy, and regulation dependencies are also present.

## Canonical Families

### A. Task Entry, Attention, And Engagement Routines

`A1 -> A2 -> A3`

### C. Comprehension Monitoring And Sensemaking Routines

`C1 -> C2 -> C3`

### M. Memory Encoding, Retrieval, And Retention

`M1 -> M2 -> M3 -> M4`

### S. Strategy Selection, Practice Quality, And Revision

`S1 -> S2 -> S3 -> S4`

### R. Self-Regulation, Feedback Use, And Help-Seeking

`R1 -> R2 -> R3 -> R4`

### T. Transfer, Abstraction, And Independent Learning

`T1 -> T2`

## Cross-Family Dependency Rules

The current scaffold encodes these cross-family rules:

- retention does not stabilize without deliberate encoding and retrieval behavior
- strategy use is not considered mature if the learner cannot monitor comprehension and revise after failure
- help-seeking and feedback use are part of the graph, not optional dispositions
- transfer depends on prior monitoring, memory, strategy, and self-regulation stability
- independent learning claims must remain downstream of demonstrated retention and adaptation, not just task completion

## Cross-Domain Usage Rule

This domain is meant to be attached to subject-domain work, not substituted for it.

The repository should use this graph to clarify whether a learner is struggling because:

- the domain content itself is unstable
- the learner lacks a learning-process routine needed to acquire or retain the content
- both types of instability are present and need different intervention layers

The repository should not use this graph to relabel a content gap as a generic habits problem.

## Primary Source Files

The machine-readable source for the current graph scaffold is:

- [capability-graph.yaml](/Volumes/data/development/oc/domains/learning_to_learn/capability-graph.yaml)

The governed developmental companion view is:

- [prek12-learning-to-learn-spine.md](/Volumes/data/development/oc/domains/learning_to_learn/prek12-learning-to-learn-spine.md)
- [prek12-learning-to-learn-spine.yaml](/Volumes/data/development/oc/domains/learning_to_learn/prek12-learning-to-learn-spine.yaml)

## Next Required Work

The next upstream work should focus on:

- defining first-wave node packages for task entry, monitoring, encoding, practice, and help-seeking
- creating learning-process verification models that separate performance, reflection, transfer, and retention evidence
- defining failure taxonomies that distinguish confusion, overload, avoidance, ineffective strategy, and access constraints
- designing cross-domain attachment rules so mathematics, ELA/literacy, and science packages can reference these nodes without bypassing subject dependencies

## Claim Boundary

This graph is a governed scaffold. It is not yet a fully implemented node graph, a reviewed mastery framework, or a classroom-release learning-process package.
