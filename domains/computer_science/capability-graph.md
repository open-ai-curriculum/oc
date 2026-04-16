# Computer Science Capability Graph

## Purpose

This document defines the current canonical capability-graph scaffold for the `computer_science` domain.

It is the domain-level graph surface that later node packages, standards mappings, runtime contracts, and validation tooling should extend.

## Current Role

The computer science domain is at the scaffold stage. This graph therefore serves four immediate purposes:

1. preserve a governed K-12 computer science shape
2. make dependencies explicit before node-package authoring begins
3. keep AP-facing pathways visible without confusing course labels for capability nodes
4. establish a stable architecture for future learner-state, verification, and intervention work

## Graph Model

The current graph integrates:

- digital environment fluency
- programming and control-flow development
- algorithm and decomposition development
- data and representation reasoning
- networks, systems, and cybersecurity reasoning
- software quality, debugging, and testing
- computing impacts, ethics, and collaboration

This means a coding node is not considered structurally stable unless its upstream representation, debugging, and impact dependencies are also present where relevant.

## Canonical Families

### D. Digital Environment And Device-System Fluency

`D1 -> D2`

### P. Programming And Control-Flow Development

`P1 -> P2 -> P3 -> P4 -> P5 -> P6`

### A. Algorithms And Decomposition

`A1 -> A2 -> A3`

### R. Data And Representation Reasoning

`R1 -> R2 -> R3 -> R4`

### N. Networks, Systems, And Cybersecurity

`N1 -> N2 -> N3 -> N4 -> N5`

### C. Software Construction, Debugging, And Quality

`C1 -> C2 -> C3 -> C4`

### I. Impacts, Ethics, And Collaborative Computing Practice

`I1 -> I2 -> I3 -> I4`

### X. Advanced Secondary Computer Science Integration

`X1 -> X3`

`X2 -> X3`

## Cross-Family Dependency Rules

The current scaffold encodes these cross-family rules:

- programming begins early but later program-design claims depend on decomposition, debugging, and quality layers
- data reasoning is not separate from programming and systems; it becomes part of both computational expression and impact analysis
- cybersecurity depends on network/system understanding and should not be modeled as a disconnected caution topic
- collaborative software quality depends on both technical debugging and human-centered computing-impact reasoning
- AP-facing secondary integration depends on broad graph maturity rather than isolated course labels

## Primary Source Files

The machine-readable source for the current graph scaffold is:

- [capability-graph.yaml](/Volumes/data/development/oc/domains/computer_science/capability-graph.yaml)

The governed developmental companion view is:

- [prek12-computer-science-spine.md](/Volumes/data/development/oc/domains/computer_science/prek12-computer-science-spine.md)
- [prek12-computer-science-spine.yaml](/Volumes/data/development/oc/domains/computer_science/prek12-computer-science-spine.yaml)

## Next Required Work

The next upstream work should focus on:

- defining reviewed node-granularity decisions for the first computer science implementation wave
- creating the first computer science node packages from the earliest K-2 entry points
- defining computer-science-specific verification and learner-state contracts
- deciding how future standards support should treat CSTA and AP frameworks without collapsing the domain into standards identifiers alone

## Claim Boundary

This graph is a governed scaffold. It is not yet a fully implemented node graph, a reviewed mastery framework, or a classroom-release computer science package.
