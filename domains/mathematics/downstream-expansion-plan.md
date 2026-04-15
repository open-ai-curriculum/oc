# Downstream Expansion Plan

## Purpose

Define the completed downstream frontier that was added beyond the original fraction-led slice, and preserve the sequencing rationale that produced the current early secondary boundary.

This document is now a historical frontier record. The next active architecture layer for the domain is:

- [k12-expansion-architecture.md](/Volumes/data/development/oc/domains/mathematics/k12-expansion-architecture.md)
- [k12-expansion-plan.md](/Volumes/data/development/oc/domains/mathematics/k12-expansion-plan.md)

The implemented downstream segment currently reaches:

- `S1`
- `S2`
- `E1`
- `E2`
- `E3`

The next coherent expansion should not jump randomly into later mathematics. It should move through the territory that normally follows strong fraction, decimal, signed-number, and equation foundations.

## Next Downstream Branches

### 1. Ratio And Proportional Reasoning

- `Q1` Ratio as multiplicative comparison
- `Q2` Unit rate reasoning
- `Q3` Proportional relationships
- `Q4` Percent as rate per hundred

Rationale:

- ratios are a direct downstream use of fraction and multiplicative structure
- unit rates and proportion sit naturally between upper-elementary fraction work and later algebra/function work
- percent reasoning gives the graph a realistic bridge into applied middle-grade mathematics

### 2. Downstream Algebra And Coordinate Reasoning

- `A1` Variable expressions and substitution
- `A2` Distributive reasoning and combining like terms
- `A3` Inequalities and solution sets
- `A4` Coordinate plane and ordered pairs
- `A5` Linear relationship tables and graphs

Rationale:

- expression structure should follow equation structure rather than remain implicit
- inequalities are a natural next extension of equation solving plus signed magnitude
- coordinate reasoning provides the spatial and numerical bridge needed before graph-based linear relationships
- linear relationships should depend on both algebraic expression structure and proportional reasoning

## Dependency Logic

### Ratio And Proportional Reasoning

`F6 + T4 -> Q1 -> Q2 -> Q3`

`Q2 + F2 + V2 -> Q4`

### Downstream Algebra And Coordinate Reasoning

`S2 + E1 -> A1 -> A2`

`E1 + S1 + L4 -> A3`

`S1 + G2 -> A4`

`A1 + A4 + Q3 -> A5`

## Sequencing Recommendation

Recommended implementation order:

1. `Q1`
2. `Q2`
3. `A1`
4. `A2`
5. `Q3`
6. `A4`
7. `A5`
8. `Q4`
9. `A3`

## Why This Order

- `Q1` and `Q2` are the cleanest direct continuations of the fraction and multiplicative frontier
- `A1` and `A2` turn the current equation slice into a fuller algebra structure slice
- `Q3` and `A5` then connect proportional reasoning to later graph/table work
- `Q4` and `A3` are important, but they can reasonably follow once the central ratio and expression spine is in place

## First Recommended Target

The strongest first downstream implementation target is:

- `Q1` ratio as multiplicative comparison

Why:

- it is the most direct continuation of the current fraction and scaling frontier
- it creates the base for both unit-rate work and proportional-relationship work
- it prevents the downstream expansion from becoming algebra-only and losing multiplicative coherence
