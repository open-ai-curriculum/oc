# Mathematics Capability Graph

## Slice Purpose

Define a narrow but high-leverage progression in which instability poisons later algebra performance if left unresolved.

This graph should now be read as a downstream segment anchored to its direct readiness predecessors. The full upstream predecessor architecture is defined in:

- [zero-state-to-f1-spine.md](/Volumes/data/development/oc/domains/mathematics/zero-state-to-f1-spine.md)

The implemented downstream slice now extends through `E3`. The next modeled expansion beyond that implemented slice includes:

- `Q1` through `Q4` for ratio and proportional reasoning
- `A1` through `A5` for expressions, inequalities, coordinates, and linear relationships

## Node Sequence

1. `C1` Stable counting sequence
2. `U1` Equal groups
3. `C4` Compare small quantities
4. `C2` One-to-one correspondence
5. `U2` Repeated unit reasoning
6. `M1` Measurable attributes
7. `C3` Cardinality
8. `U3` Sharing and fair partitioning
9. `M2` Iterated units
10. `N1` Compose and decompose small numbers
11. `U4` Equal partitioning of a whole
12. `M3` Unit size matters
13. `R1` Part-whole reasoning with equal parts
14. `R2` Unit fraction readiness
15. `R3` Symbol preparation
16. `F1` Fraction Structure
17. `F2` Equivalent Fractions
18. `F3` Compare Fractions
19. `F4` Add And Subtract Like-Denominator Fractions
20. `F5` Add And Subtract Unlike-Denominator Fractions
21. `S1` Signed Number Meaning
22. `S2` Signed Number Operations
23. `E1` One-Step Equations
24. `E2` Multi-Step Equations
25. `E3` Variables On Both Sides

## Mastery Rule

A node is secure only when all of the following are true:

- direct performance threshold is met
- meaning or explanation evidence is met
- transfer evidence is met
- retention recheck is met

## Node Summaries

### C1 Stable Counting Sequence

- purpose: establish stable count-word order within the supported range
- depends on:
  - Z2

### U1 Equal Groups

- purpose: establish same-sized grouping before repeated-unit reasoning
- depends on:
  - C3

### C4 Compare Small Quantities

- purpose: establish more-less-same comparison for bounded quantities
- depends on:
  - C3

### C2 One-To-One Correspondence

- purpose: establish one count word per object during counting
- depends on:
  - C1

### U2 Repeated Unit Reasoning

- purpose: establish the same group or unit as a repeatable countable structure
- depends on:
  - U1

### M1 Measurable Attributes

- purpose: establish that attributes such as length, area, and amount can be compared and later measured
- depends on:
  - C4

### C3 Cardinality

- purpose: establish that the final count word names the set quantity
- depends on:
  - C2

### U3 Sharing And Fair Partitioning

- purpose: establish fairness as equal amount across recipients
- depends on:
  - U2

### M2 Iterated Units

- purpose: establish measurement by repeating the same unit across a quantity
- depends on:
  - M1

### N1 Compose And Decompose Small Numbers

- purpose: establish whole-part reasoning in small-number structure
- depends on:
  - C3

### U4 Equal Partitioning Of A Whole

- purpose: establish equal partitioning as a structural requirement for later fraction reasoning
- depends on:
  - U3

### M3 Unit Size Matters

- purpose: establish that unit count depends on unit size and not just raw number
- depends on:
  - M2

### R1 Part-whole Reasoning With Equal Parts

- purpose: recognize a whole as composed of equal parts rather than arbitrary pieces
- depends on:
  - N1
  - U4
  - M3

### R2 Unit Fraction Readiness

- purpose: interpret one equal part of a whole as a meaningful unit
- depends on:
  - R1

### R3 Symbol Preparation

- purpose: prepare spoken and visual part-whole reasoning for formal fraction notation
- depends on:
  - R2

### F1 Fraction Structure

- purpose: connect symbolic fractions to partitioned quantities
- depends on:
  - R1
  - R2
  - R3
- key failure risks:
  - numerator and denominator treated as unrelated whole numbers
  - larger denominator assumed to imply larger quantity

### F2 Equivalent Fractions

- purpose: preserve quantity under scaling
- depends on:
  - F1

### F3 Compare Fractions

- purpose: reason about magnitude, benchmarks, and order
- depends on:
  - F1
  - F2

### F4 Add And Subtract Like-Denominator Fractions

- purpose: operate on quantities with consistent unit size
- depends on:
  - F1
  - F3

### F5 Add And Subtract Unlike-Denominator Fractions

- purpose: transform unit size while preserving value, then compute
- depends on:
  - F2
  - F3
  - F4

### S1 Signed Number Meaning

- purpose: reason about directed quantity, ordering, and change
- depends on:
  - F3

### S2 Signed Number Operations

- purpose: operate reliably on positive and negative values
- depends on:
  - S1

### E1 One-Step Equations

- purpose: apply inverse reasoning while preserving equality
- depends on:
  - S2

### E2 Multi-Step Equations

- purpose: coordinate multiple reversible operations in sequence
- depends on:
  - E1

### E3 Variables On Both Sides

- purpose: solve structurally and classify contradiction or identity cases
- depends on:
  - E2
