# Zero-State To F1 Spine

## Purpose

Define the full upstream dependency spine required before `F1` fraction structure is a valid target.

The current `F1 -> F5` segment is only a local spine inside a much larger developmental sequence. This document defines the predecessor path from zero-state through early numeracy, whole-number reasoning, and fraction-readiness.

## Design Principle

The repo should not treat fraction understanding as a beginning. It should model the developmental structures that make fraction understanding possible.

## Spine Families

### A. Zero-State And Pre-Counting Foundations

These nodes establish the earliest mathematical readiness conditions.

#### Z1. Attention To Quantity

- learner notices sets, collections, and changes in quantity
- learner distinguishes "one" from "many" in practical contexts

#### Z2. Match And Sort Objects

- learner groups by shared attributes
- learner matches one object to another or one set to another

#### Z3. Pattern And Sequence Readiness

- learner recognizes repeatable patterns and ordered sequences
- learner can continue a simple pattern or identify what comes next

### B. Counting And Cardinality Spine

These nodes establish the meaning of number as count and quantity.

#### C1. Stable Counting Sequence

- learner produces the verbal count sequence in order within the supported range

#### C2. One-To-One Correspondence

- learner assigns one count word to one object

#### C3. Cardinality

- learner understands that the final count word names the quantity of the set

#### C4. Compare Small Quantities

- learner determines more, less, and same for concrete sets

### C. Number Composition And Decomposition Spine

These nodes establish part-whole reasoning and arithmetic structure.

#### N1. Compose And Decompose Small Numbers

- learner sees a number as made of parts

#### N2. Addition And Subtraction Meaning

- learner interprets joining, separating, and missing-part situations

#### N3. Count On And Count Back

- learner uses counting strategies for simple change situations

#### N4. Fluency Foundations

- learner develops stable, automatic patterns for small-number relationships

### D. Unitizing And Equal-Group Foundations

These nodes establish the bridge from counting objects to reasoning in structured units.

#### U1. Equal Groups

- learner distinguishes equal groups from unequal groupings

#### U2. Repeated Unit Reasoning

- learner treats a repeated group as a countable unit

#### U3. Sharing And Fair Partitioning

- learner reasons about equal sharing of wholes or sets

#### U4. Equal Partitioning Of A Whole

- learner understands that a whole can be partitioned into equal parts

### E. Measurement And Magnitude Foundations

These nodes support later fraction comparison and unit-size reasoning.

#### M1. Length, Area, And Quantity As Measurable Attributes

- learner recognizes that length, area, and amount can be compared and measured

#### M2. Iterated Units

- learner measures by repeating a unit

#### M3. Unit Size Matters

- learner understands that a larger number of smaller units does not necessarily mean a greater quantity

### F. Fraction-Readiness Spine

These nodes feed directly into `F1`.

#### R1. Part-Whole Reasoning With Equal Parts

- learner understands that equal parts compose a whole

#### R2. Unit Fraction Readiness

- learner recognizes one equal part of a partitioned whole as a named unit

#### R3. Symbol Preparation

- learner is ready to bind a symbolic fraction form to a part-whole quantity model

## Minimal Dependency Flow

The minimum upstream logic is:

`Z1 -> Z2 -> Z3`

`Z2 -> C1 -> C2 -> C3 -> C4`

`C3 -> N1 -> N2 -> N3 -> N4`

`C3 -> U1 -> U2 -> U3 -> U4`

`C4 -> M1 -> M2 -> M3`

`N1 + U4 + M3 -> R1 -> R2 -> R3 -> F1`

## Direct Predecessors To F1

`F1` should not be modeled as dependency-free. The direct predecessor set should eventually be:

- `R1` Part-whole reasoning with equal parts
- `R2` Unit fraction readiness
- `R3` Symbol preparation

## Planned Implementation Strategy

The upstream build should proceed in waves:

1. define the zero-state to `R3` machine-readable graph
2. create operational node packages for the direct `F1` predecessors first
3. then backfill the earlier numeracy and measurement nodes
4. then revise `F1` so it reflects its true dependencies

## Immediate Build Target

The next highest-value upstream node family is the fraction-readiness set:

- `R1` part-whole reasoning with equal parts
- `R2` unit fraction readiness
- `R3` symbol preparation

Those nodes are close enough to `F1` to matter immediately, but early enough to anchor the deeper upstream work.
