# Master Knowledge Graph

## Purpose

Define the authoritative mathematics knowledge graph for the domain.

All node families, branches, and prerequisite paths in this domain must belong to this single master graph. No node should exist as a disconnected side graph or as an orphaned branch.

The currently implemented machine-readable graph reaches the repository's lower-to-middle-grade frontier. The domain target, however, is full pre-K through Grade 12 and AP mathematics as described in:

- [k12-expansion-architecture.md](/Volumes/data/development/oc/domains/mathematics/k12-expansion-architecture.md)
- [k12-expansion-plan.md](/Volumes/data/development/oc/domains/mathematics/k12-expansion-plan.md)

## Authority Rule

Use this document and its machine-readable counterpart as the authoritative graph definition for the domain:

- [master-knowledge-graph.yaml](/Volumes/data/development/oc/domains/mathematics/master-knowledge-graph.yaml)

The following documents are derived views of this master graph:

- [zero-state-to-f1-spine.md](/Volumes/data/development/oc/domains/mathematics/zero-state-to-f1-spine.md)
- [zero-state-to-fraction-peer-math-graph.md](/Volumes/data/development/oc/domains/mathematics/zero-state-to-fraction-peer-math-graph.md)
- [capability-graph.md](/Volumes/data/development/oc/domains/mathematics/capability-graph.md)

## Node Families

### Z. Zero-State And Pre-Counting

- `Z1` Attention to quantity
- `Z2` Match and sort objects
- `Z3` Pattern and sequence readiness

### C. Counting And Cardinality

- `C1` Stable counting sequence
- `C2` One-to-one correspondence
- `C3` Cardinality
- `C4` Compare small quantities
- `C5` Numeral recognition and writing readiness
- `C6` Quantity-symbol correspondence

### N. Whole-Number Composition And Operations

- `N1` Compose and decompose small numbers
- `N2` Addition and subtraction meaning
- `N3` Count on and count back
- `N4` Fluency foundations
- `N5` Teen numbers and base-ten composition readiness
- `N6` Early place-value grouping logic

### V. Place-Value And Multidigit Whole Numbers

- `V1` Two-digit number structure
- `V2` Compare and order multidigit numbers
- `V3` Add/subtract within 100 strategies
- `V4` Regrouping and base-ten equivalence
- `V5` Add/subtract within 1000

### X. Decimals And Fraction-Decimal Connections

- `X1` Tenths as decimal units
- `X2` Decimal place-value structure
- `X3` Compare and order decimals
- `X4` Fraction-decimal benchmark connections
- `X5` Decimal locations on number line

### U. Unitizing And Sharing

- `U1` Equal groups
- `U2` Repeated unit reasoning
- `U3` Sharing and fair partitioning
- `U4` Equal partitioning of a whole
- `U5` Equal-group multiplication readiness
- `U6` Equal-share division readiness

### T. Multiplicative Reasoning And Division

- `T1` Arrays and rectangular structures
- `T2` Multiplication fact structure
- `T3` Division as unknown group or share
- `T4` Multiplicative comparison and scaling
- `T5` Factors, multiples, and divisibility
- `T6` Multidigit multiplication structure
- `T7` Multidigit division and remainder interpretation

### M. Measurement And Magnitude

- `M1` Measurable attributes
- `M2` Iterated units
- `M3` Unit size matters
- `M4` Length comparison and ordering
- `M5` Indirect comparison and transitivity
- `M6` Time, calendar, and sequence measurement readiness
- `M7` Money and value-unit readiness
- `M8` Standard length units and tool use
- `M9` Perimeter, area, and unit-square covering
- `M10` Clock time and elapsed intervals
- `M11` Money composition and exchange
- `M12` Mass and volume attributes
- `M13` Standard mass/volume units and comparison
- `M14` Unit conversion within measurement systems

### G. Geometry And Spatial Reasoning

- `G1` Shape recognition and classification
- `G2` Position, direction, and spatial language
- `G3` Compose and decompose shapes
- `G4` Pattern blocks and tiling structure
- `G5` Symmetry and equal-part visual reasoning
- `G6` Polygon attributes and hierarchy
- `G7` Angle concept and turn measure

### P. Pattern And Algebraic Readiness

- `P1` Repeating patterns
- `P2` Growing patterns
- `P3` Missing-element pattern reasoning
- `P4` Rule language and structure noticing

### D. Data And Representation

- `D1` Sort and classify by attribute
- `D2` Count and compare category totals
- `D3` Read simple picture graphs and tallies
- `D4` Represent simple data sets
- `D5` Scaled bar graphs and numerical data
- `D6` Line plots and measurement data

### L. Number Line And Linear Magnitude

- `L1` Ordered positions on number line
- `L2` Whole-number intervals and jumps
- `L3` Multidigit magnitude on number line
- `L4` Fraction locations on number line

### Y. Estimation And Reasonableness

- `Y1` Rounding and benchmark whole numbers
- `Y2` Whole-number operation estimation
- `Y3` Measurement estimation and reasonableness
- `Y4` Fraction benchmark estimation

### F. Fraction Readiness And Early Fraction

- `R1` Part-whole reasoning with equal parts
- `R2` Unit fraction readiness
- `R3` Symbol preparation
- `F1` Fraction structure
- `F2` Equivalent fractions
- `F3` Compare fractions
- `F4` Like-denominator fraction operations
- `F5` Unlike-denominator fraction operations
- `F6` Fraction magnitude beyond one whole

### Q. Ratio And Proportional Reasoning

- `Q1` Ratio as multiplicative comparison
- `Q2` Unit rate reasoning
- `Q3` Proportional relationships
- `Q4` Percent as rate per hundred

### A. Downstream Algebra And Coordinate Reasoning

- `S1` Signed number meaning
- `S2` Signed number operations
- `E1` One-step equations
- `E2` Multi-step equations
- `E3` Variables on both sides
- `A1` Variable expressions and substitution
- `A2` Distributive reasoning and combining like terms
- `A3` Inequalities and solution sets
- `A4` Coordinate plane and ordered pairs
- `A5` Linear relationship tables and graphs

### J. Rational Number Operations And Middle-School Computation

- `J1` Rational-number addition and subtraction
- `J2` Rational-number multiplication and division
- `J3` Signed rational-number fluency and order
- `J4` Numerical expressions and absolute value
- `J5` Percent change, discount, tax, and markup
- `J6` Proportional application and scale modeling

### K. Functions And Secondary Linear Algebra

- `K1` Variable relationships and independent/dependent quantities
- `K2` Function as input-output rule
- `K3` Slope, rate of change, and linear growth
- `K4` Linear equations in two variables
- `K5` Linear functions in multiple representations
- `K6` Systems of linear equations and inequalities
- `K7` Quadratic foundations

### H. Secondary Geometry, Transformations, And Proof

- `H1` Transformations and coordinate symmetry
- `H2` Congruence and similarity via transformations
- `H3` Proof structure and geometric argument
- `H4` Right-triangle trigonometric ratio foundations
- `H5` Circles, measurement, and coordinate geometry

### W. Secondary Statistics And Probability

- `W1` Statistical distributions and variability
- `W2` Bivariate data and linear association
- `W3` Sampling, inference, and study design
- `W4` Probability models and compound events

### B. Advanced Algebra, Trigonometry, And Precalculus

- `B1` Polynomial structure and operations
- `B2` Rational, radical, and exponential functions
- `B3` Logarithmic and inverse-function reasoning
- `B4` Trigonometric functions and unit circle
- `B5` Precalculus function synthesis and limits foundations

### AP. Advanced Placement Mathematics Pathways

- `AP1` AP Statistics extension
- `AP2` AP Precalculus extension
- `AP3` Calculus limits and derivatives
- `AP4` Integral accumulation and the fundamental theorem
- `AP5` BC series and advanced calculus extensions

## Master Dependency Logic

### Entry Floor

`Z1 -> Z2 -> Z3`

### Counting And Cardinality

`Z2 -> C1 -> C2 -> C3 -> C4`

`C3 -> C5`

`C4 + C5 -> C6`

### Whole-Number And Operations

`C3 -> N1 -> N2 -> N3 -> N4`

`N1 + C6 -> N5 -> N6`

### Place-Value And Multidigit Whole Numbers

`N6 -> V1 -> V2`

`V1 + N4 -> V3`

`V1 + V3 -> V4 -> V5`

### Decimals And Fraction-Decimal Connections

`V1 + F1 -> X1`

`X1 + V2 -> X2 -> X3`

`F3 + X3 -> X4`

`X3 + L4 -> X5`

### Unitizing And Sharing

`C3 -> U1 -> U2 -> U3 -> U4`

`U2 -> U5`

`U3 -> U6`

### Multiplicative Reasoning And Division

`U5 + G4 -> T1`

`T1 + N4 -> T2`

`U6 + T1 -> T3`

`T2 + T3 -> T4`

`T2 + V2 -> T5`

`T2 + V4 -> T6 -> T7`

`T3 + T6 -> T7`

### Measurement And Magnitude

`C4 -> M1 -> M2 -> M3`

`M1 -> M4 -> M5`

`Z3 -> M6`

`C4 -> M7`

`M5 + V1 -> M8`

`M8 + G4 -> M9`

`M6 + N3 -> M10`

`M7 + V1 -> M11`

`M1 -> M12 -> M13`

`M8 + M13 + T4 + V2 -> M14`

### Geometry And Spatial Reasoning

`Z2 -> G1 -> G2 -> G3 -> G4`

`G1 + U4 -> G5`

`G3 + V2 -> G6`

`G2 + G6 -> G7`

### Pattern And Algebraic Readiness

`Z3 -> P1 -> P2 -> P3 -> P4`

### Data And Representation

`Z2 -> D1 -> D2 -> D3 -> D4`

`D4 + V2 -> D5 -> D6`

`D5 + M8 + F2 -> D6`

### Number Line And Linear Magnitude

`C4 + N3 -> L1`

`L1 + N4 -> L2`

`V2 + L2 -> L3`

`F3 + F6 + L3 -> L4`

### Estimation And Reasonableness

`V2 -> Y1`

`Y1 + V3 -> Y2`

`Y1 + M8 -> Y3`

`F3 + L4 -> Y4`

### Fraction And Early Fraction

`N1 + U4 + M3 -> R1 -> R2 -> R3 -> F1 -> F2 -> F3`

`F3 -> F6`

`F3 -> F4`

`F2 + F3 + F4 + F6 -> F5`

### Ratio And Proportional Reasoning

`F6 + T4 -> Q1 -> Q2 -> Q3`

`Q2 + F2 + V2 -> Q4`

### Downstream Algebra Readiness

`F3 -> S1 -> S2 -> E1 -> E2 -> E3`

`S2 + E1 -> A1 -> A2`

`E1 + S1 + L4 -> A3`

`S1 + G2 -> A4`

`A1 + A4 + Q3 -> A5`

### Rational Number Operations And Middle-School Computation

`F5 + X4 + S2 -> J1 -> J2 -> J3 -> J4`

`Q4 + J2 + M14 -> J5`

`Q3 + J5 + M14 -> J6`

### Functions And Secondary Linear Algebra

`A1 + A5 -> K1 -> K2`

`K2 + Q3 + S1 -> K3`

`K2 + K3 + A2 -> K4 -> K5`

`K4 + K5 + A3 -> K6`

`A2 + K2 + T1 -> K7`

### Secondary Geometry, Transformations, And Proof

`A4 + G5 + G6 -> H1 -> H2 -> H3`

`H1 + Q3 + G7 -> H2`

`H2 + G7 + Q3 -> H4`

`H2 + A4 + M14 -> H5`

### Secondary Statistics And Probability

`D6 + Y4 + V2 -> W1`

`W1 + A5 -> W2`

`W1 + D5 -> W3`

`D6 + F2 + Q1 -> W4`

### Advanced Algebra, Trigonometry, And Precalculus

`A2 + K1 + T6 -> B1 -> B2 -> B3`

`J1 + K1 + B1 -> B2`

`H4 + A4 + K1 -> B4`

`B3 + B4 + K2 -> B5`

### Advanced Placement Mathematics Pathways

`W2 + W3 + W4 -> AP1`

`B4 + B5 -> AP2`

`B5 + K2 -> AP3 -> AP4 -> AP5`

`Q2 + AP3 -> AP4`

`B1 + AP4 -> AP5`

## Current Closure Boundary

The currently implemented frontier begins at the zero-state floor and now covers the full planned broad elementary-math scope that precedes or sits alongside the fraction frontier:

- `Z1 -> Z2 -> Z3`
- `C1 -> C2 -> C3 -> C4`
- `C3 -> C5`
- `C4 + C5 -> C6`
- `C3 -> N1 -> N2 -> N3 -> N4`
- `N1 + C6 -> N5 -> N6`
- `C3 -> U1 -> U2 -> U3 -> U4`
- `U2 -> U5`
- `U3 -> U6`
- `N6 -> V1 -> V2`
- `V1 + N4 -> V3`
- `V1 + V3 -> V4 -> V5`
- `U5 + G4 -> T1`
- `T1 + N4 -> T2`
- `U6 + T1 -> T3`
- `T2 + T3 -> T4`
- `C4 -> M1 -> M2 -> M3`
- `M1 -> M4 -> M5`
- `Z3 -> M6`
- `C4 -> M7`
- `M5 + V1 -> M8`
- `M8 + G4 -> M9`
- `M6 + N3 -> M10`
- `M7 + V1 -> M11`
- `M1 -> M12 -> M13`
- `M8 + M13 + T4 + V2 -> M14`
- `Z2 -> G1 -> G2 -> G3 -> G4`
- `G1 + U4 -> G5`
- `G3 + V2 -> G6`
- `G2 + G6 -> G7`
- `Z3 -> P1 -> P2 -> P3 -> P4`
- `Z2 -> D1 -> D2 -> D3 -> D4`
- `D4 + V2 -> D5`
- `D5 + M8 + F2 -> D6`
- `C4 + N3 -> L1`
- `L1 + N4 -> L2`
- `V2 + L2 -> L3`
- `F3 + F6 + L3 -> L4`
- `V2 -> Y1`
- `Y1 + V3 -> Y2`
- `Y1 + M8 -> Y3`
- `F3 + L4 -> Y4`
- `V1 + F1 -> X1 -> X2 -> X3`
- `F3 + X3 -> X4`
- `X3 + L4 -> X5`
- `T2 + V2 -> T5`
- `T2 + V4 -> T6`
- `T3 + T6 -> T7`
- `N1 + U4 + M3 -> R1 -> R2 -> R3 -> F1 -> F2 -> F3`
- `F3 -> F6`
- `F3 -> F4`
- `F2 + F3 + F4 + F6 -> F5`

The graph also includes one relevant category beyond the original fraction-led frontier:

- `S1`
- `S2`
- `E1`
- `E2`
- `E3`

## Frontier Rule

The current repository boundary is still intended to be the complete broad mathematics scope that precedes or sits alongside the fraction segment through `F5`.

That branch-coverage boundary is now implemented in the graph.

The remaining review question is no longer whether the missing peer-level branches exist. It is whether:

- the node granularity is sufficiently precise
- the dependency structure is mathematically tight
- cross-branch integrations are explicit enough for later execution and verification tooling

If additional downstream work is proposed, it should still be secondary to structural review of the pre-frontier graph.

## Operational Rule

When a new node is added:

1. it must be placed in this master graph
2. it must declare dependencies inside this master graph
3. it must not be introduced as a disconnected side node
4. derived view documents may highlight subsets, but may not redefine node identity or dependency truth

## Claim Boundary

This document defines the intended single-graph architecture. It does not claim that every node is implemented or classroom-ready.
