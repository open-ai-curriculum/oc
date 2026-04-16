# Inquiry Entry To Explanatory Spine

## Purpose

Define the bounded upstream social studies spine that takes the domain from first inquiry entry through the first explanatory layer across history, civics, geography, and economics.

This document answers:

- what must exist before middle-grade and secondary analysis nodes are legitimate targets

It is narrower than the full PreK-12 domain spine and narrower than the broader peer graph maintained for social studies parity work.

## Design Principle

The repository should not treat later historical argument, policy reasoning, geographic analysis, or economic tradeoff analysis as if they can begin without a governed inquiry-and-explanation substrate.

## Spine Layers

### A. Shared Inquiry Entry

These nodes create the common entry surface that every disciplinary branch depends on.

#### Q1. Observe, Describe, And Question

- learner notices relevant features in sources, places, artifacts, images, events, and situations
- learner asks grounded questions rather than only naming isolated facts

#### Q2. Compare, Classify, And Sequence Evidence

- learner sorts evidence by features, roles, and categories
- learner sequences information in ways that support temporal, civic, spatial, or economic reasoning

#### Q3. Supported Explanation From Evidence

- learner produces an explanation tied to observable evidence
- learner distinguishes claim, evidence, and reasoning at an introductory level

### B. Branch Entry Layer

These nodes represent the first disciplinary entry points that sit directly on top of shared inquiry.

#### H1. Chronology, Identity, And Community Memory

- learner places people, events, and experiences in simple temporal order
- learner connects community memory and identity to early history reasoning

#### C1. Community Rules, Roles, And Fairness

- learner recognizes shared rules, roles, and fairness expectations in communities
- learner begins to reason about why groups make and use rules

#### G1. Place, Maps, And Environmental Features

- learner identifies places and environmental features using concrete representations
- learner begins to read simple maps and location cues

#### E1. Needs, Wants, Choice, And Exchange

- learner recognizes needs, wants, choice, and exchange in familiar settings
- learner begins to explain simple economic decisions

### C. First Explanatory Branch Layer

These nodes move each branch from entry recognition to early explanation.

#### H2. Historical Sources And Past-Present Comparison

- learner compares sources and distinguishes evidence about the past from present-day interpretation

#### C2. Institutions, Rights, Responsibilities, And Processes

- learner explains how simple institutions and group processes organize collective life

#### G2. Human-Environment Interaction And Regions

- learner explains how people and environments affect one another and how regions can be described

#### E2. Production, Consumption, And Local Markets

- learner explains simple production, consumption, and local market patterns

## Minimal Dependency Flow

The minimum inquiry-to-explanation logic is:

`Q1 -> Q2 -> Q3`

`Q1 -> H1`

`Q1 -> C1`

`Q1 -> G1`

`Q1 -> E1`

`H1 + Q2 -> H2`

`C1 + Q2 -> C2`

`G1 + Q2 -> G2`

`E1 + Q2 -> E2`

`Q2 -> H2 + C2 + G2 + E2`

`Q3` stabilizes the explanatory layer and prepares the domain for `H3`, `C3`, `G3`, and `E3`.

## Direct Predecessors To The Middle Branch Layer

The direct predecessor set for the first analytic middle layer should eventually be:

- `Q3` supported explanation from evidence
- `H2` historical sources and past-present comparison
- `C2` institutions, rights, responsibilities, and processes
- `G2` human-environment interaction and regions
- `E2` production, consumption, and local markets

## Planned Implementation Strategy

The bounded entry build should proceed in waves:

1. preserve `Q1` as the shared upstream entry node for all branches
2. stabilize branch-entry nodes `H1`, `C1`, `G1`, and `E1`
3. harden `Q2` and `Q3` as the common evidence and explanation bridge
4. deepen branch explanatory nodes `H2`, `C2`, `G2`, and `E2`
5. then extend into `H3`, `C3`, `G3`, and `E3` without bypassing the inquiry spine

## Immediate Build Target

The next highest-value bounded slice remains the inquiry-and-explanation set:

- `Q1`
- `Q2`
- `Q3`
- `H1`
- `C1`
- `G1`
- `E1`
- `H2`
- `C2`
- `G2`
- `E2`

That slice is broad enough to represent the real shared foundation of the domain, but still bounded enough for governance, validation, and runtime use.
