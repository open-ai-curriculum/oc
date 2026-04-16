# Science Capability Graph

## Purpose

This document defines the current canonical capability-graph scaffold for the `science` domain.

It is the domain-level graph surface that later node packages, standards mappings, runtime contracts, and validation tooling should extend.

## Current Role

The science domain is at the scaffold stage. This graph therefore serves four immediate purposes:

1. preserve a governed K-12 science shape
2. make dependencies explicit before node-package authoring begins
3. keep NGSS-informed structure visible without confusing standards records for capability nodes
4. establish a stable architecture for future learner-state, verification, intervention, and upper-secondary course-pathway work

## Graph Model

The current graph integrates:

- practice development
- conceptual-model development
- explanation and argument development
- engineering-design development
- life science progressions
- physical science progressions
- Earth and space science progressions
- upper-secondary biological specialization pathways
- upper-secondary chemistry specialization pathways
- upper-secondary physics specialization pathways
- upper-secondary Earth, environment, and space specialization pathways
- applied and cross-domain science specialization pathways

This means a content node is not considered structurally stable unless its upstream practice and explanation dependencies are also present.

## Canonical Families

### Q. Observation, Question Formation, And Early Sensemaking

`Q1 -> Q2 -> Q3`

### I. Investigation, Measurement, And Data Quality

`I1 -> I2 -> I3 -> I4 -> I5`

### M. Modeling, Mechanism, And Systems Reasoning

`M1 -> M2 -> M3 -> M4 -> M5`

### E. Explanation, Evidence, And Argument

`E1 -> E2 -> E3 -> E4 -> E5`

### D. Engineering Design And Optimization

`D1 -> D2 -> D3 -> D4`

### L. Life Science Progressions

`L1 -> L2 -> L3 -> L4 -> L5 -> L6`

### P. Physical Science Progressions

`P1 -> P2 -> P3 -> P4 -> P5 -> P6`

### T. Earth And Space Science Progressions

`T1 -> T2 -> T3 -> T4 -> T5 -> T6`

### A. Advanced Secondary Science Integration

`A1 -> A2`

### B. Advanced Biological Specializations

`B1 -> B2 -> B3`

`B1 -> B4`

`B5 -> B6`

### C. Chemistry Specializations

`C1 -> C2 -> C3 -> C4 -> C5`

### F. Physics Specializations

`F1 -> F2`

`F1 -> F3`

`F4 -> F5`

`F2 + F4 -> F6`

### G. Earth, Environment, And Space Specializations

`G1 -> G3`

`G2 -> G3`

`G5 -> G6`

### R. Applied And Cross-Domain Science Specializations

`R1 -> R2`

`R1 -> R3`

`A2 -> R4`

## Cross-Family Dependency Rules

The current scaffold encodes these cross-family rules:

- explanation begins early and gates later model-based argument
- investigation rigor deepens over time and gates later quantitative critique
- engineering depends on explanation and evidence, not just artifact construction
- life, physical, and Earth/space science progressions depend on shared sensemaking and modeling layers
- advanced secondary synthesis depends on late-stage evidence, modeling, and domain progressions across all three major science strands
- course-level high-school science coverage must descend from explicit prerequisite routes rather than being implied by broad capstone nodes
- upper-secondary specializations may branch by discipline, but they still depend on shared investigation, modeling, explanation, and design layers
- computational science can attach to the science graph as a dependency bridge without collapsing the distinction between science and a dedicated computing domain

## Primary Source Files

The machine-readable source for the current graph scaffold is:

- [capability-graph.yaml](/Volumes/data/development/oc/domains/science/capability-graph.yaml)

The governed developmental companion view is:

- [prek12-science-spine.md](/Volumes/data/development/oc/domains/science/prek12-science-spine.md)
- [prek12-science-spine.yaml](/Volumes/data/development/oc/domains/science/prek12-science-spine.yaml)

## Next Required Work

The next upstream work should focus on:

- deciding which upper-secondary specialization nodes should be elevated into full node packages next
- defining science-specific verification and learner-state contracts for specialization nodes
- building reviewed NGSS and course-overlay mapping records without collapsing the domain into standards identifiers alone
- deciding where a future computing domain should take ownership of AP Computer Science course parity while preserving science-domain computational dependencies

## Claim Boundary

This graph is a governed scaffold. It is not yet a fully implemented node graph, a reviewed mastery framework, or a classroom-release science package.

It now exposes explicit upper-secondary course and elective territory, but those specialization routes remain draft architecture until corresponding node packages and reviewed mappings are completed.
