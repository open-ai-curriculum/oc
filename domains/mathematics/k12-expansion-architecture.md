# K-12 Expansion Architecture

## Purpose

Define the intended full-scope architecture for the mathematics domain beyond the currently implemented lower-to-middle-grade graph.

This document does not replace the authoritative machine-readable graph in [master-knowledge-graph.yaml](/Volumes/data/development/oc/domains/mathematics/master-knowledge-graph.yaml). It defines the next required scope expansion so the domain evolves into one continuous pre-K through Grade 12 and AP mathematics graph rather than stopping at the current early secondary frontier.

## Current Boundary

The currently implemented graph reaches:

- a broad pre-K through Grade 5 elementary foundation
- a downstream extension through roughly Grade 6 and early Grade 7
- ratios, unit rates, proportional relationships, percent
- signed numbers, equations, expressions, inequalities
- coordinate-plane reasoning and linear-relationship representation

That is a substantial lower-to-middle segment, but it is not yet a K-12 mathematics graph.

## Target Scope

The target domain is one continuous mathematics knowledge graph covering:

- pre-kindergarten readiness
- elementary mathematics
- middle school mathematics
- high school core mathematics
- advanced high school mathematics
- Advanced Placement mathematics pathways

## Expansion Principles

1. No later-grade strand may be added as an orphan branch.
2. Every high-school and AP capability family must connect back to implemented prerequisite structure in the same master graph.
3. Geometry, statistics, functions, algebra, trigonometry, and calculus must be modeled as peer parts of one system rather than isolated course silos.
4. Course labels such as Algebra I or AP Calculus are not themselves the graph. They are delivery views over deeper capability dependencies.
5. The repository should model both common U.S. secondary pathways and advanced acceleration paths without breaking dependency integrity.

## Grade-Band Architecture

### Band 0. Pre-K To Grade 2

Primary territory:

- quantity
- counting and cardinality
- early operations
- early geometry and measurement
- early data and pattern reasoning

Current status:

- implemented

### Band 1. Grades 3 To 5

Primary territory:

- place value
- multidigit operations
- multiplication and division
- fractions
- decimals
- measurement and data
- geometry classification and angle foundations

Current status:

- implemented

### Band 2. Grades 6 To 8

Primary territory:

- ratios and proportional reasoning
- percent
- signed-number reasoning
- equations and inequalities
- expressions and structural manipulation
- coordinate graphing
- linear relationships
- geometry with area, volume, angle, and transformational structure
- statistics and probability foundations

Current status:

- partially implemented

Gap:

- the current graph reaches only an early portion of this band

### Band 3. Grades 8 To 10

Primary territory:

- full Algebra I territory
- formal linear functions
- systems of equations and inequalities
- exponent foundations and scientific notation extensions
- radicals and simple nonlinear structures
- congruence, similarity, and proof foundations
- introductory high-school statistics and modeling

Current status:

- not yet modeled in the master graph

### Band 4. Grades 9 To 11

Primary territory:

- full Geometry territory
- formal proof
- triangle similarity and trigonometric ratio foundations
- circles
- coordinate geometry
- geometric measurement and modeling
- transformations and symmetry structures

Current status:

- not yet modeled in the master graph

### Band 5. Grades 10 To 12

Primary territory:

- full Algebra II territory
- polynomial, rational, radical, exponential, and logarithmic functions
- sequences and series foundations
- complex numbers
- advanced function composition and transformation
- modeling across algebraic families

Current status:

- not yet modeled in the master graph

### Band 6. Grades 11 To 12 Advanced

Primary territory:

- precalculus
- trigonometric functions and identities
- analytic trigonometry
- vectors and parametric reasoning where included
- conic-section reasoning where included
- limits foundations

Current status:

- not yet modeled in the master graph

### Band 7. Advanced Placement

Primary territory:

- AP Precalculus where the repository chooses to model it as a distinct governed delivery path
- AP Statistics
- AP Calculus AB
- AP Calculus BC

Current status:

- not yet modeled in the master graph

## Required Secondary And Advanced Strand Families

The full K-12/AP graph will require at least the following new macro-families beyond the currently implemented lower families.

### J. Rational Number Operations And Expressions

Needed to complete middle-school arithmetic and algebra readiness:

- fluent fraction, decimal, and signed rational operations
- numerical expressions
- absolute value and magnitude comparison
- percent increase/decrease and rate application

### K. Functions And Linear Systems

Needed to move from early linear representation into full secondary algebra:

- function as input-output mapping
- slope and rate-of-change structure
- linear equations in multiple forms
- systems of equations and inequalities
- modeling with linear functions

### H. Secondary Geometry And Proof

Needed to move from elementary geometry into full high-school geometry:

- transformations
- congruence and similarity
- proof structure
- triangles, polygons, circles
- coordinate geometry
- geometric measurement and modeling

### W. Statistics And Probability

Needed because statistics is not just a side topic:

- distributions
- center and variability
- bivariate data
- association and modeling
- probability models
- inference foundations
- AP Statistics extension

### B. Advanced Algebraic Structures

Needed for Algebra II and precalculus:

- polynomial arithmetic and structure
- factoring and zeros
- rational expressions and equations
- radicals and rational exponents
- exponential and logarithmic functions
- sequences and series
- complex numbers

### R. Trigonometric And Circular Reasoning

Needed for geometry-to-precalculus continuity:

- trigonometric ratios
- right-triangle trigonometry
- unit-circle structure
- radian measure
- trigonometric functions, graphs, and identities

### C. Calculus And Analysis Foundations

Needed for AP Calculus and late precalculus:

- limit intuition and formalization
- derivative meaning and rules
- applications of derivatives
- integral meaning and accumulation
- fundamental theorem structure
- BC extensions such as series and advanced integration applications

## Course-View Overlay

The graph should support course-style views without treating courses as the authority.

Expected delivery overlays include:

- Grade 6 mathematics
- Grade 7 mathematics
- Grade 8 mathematics
- Algebra I
- Geometry
- Algebra II
- Precalculus
- AP Precalculus
- Statistics
- AP Statistics
- AP Calculus AB
- AP Calculus BC

## Required Dependency Bridges

The next graph expansion must explicitly bridge from the current implemented frontier into later secondary territory through at least these transition zones:

1. `A5` into formal function and linear-model structure
2. `A3` into systems and constraint reasoning
3. `Q4` into percent change, slope, and applied rate modeling
4. `G7` into transformation, congruence, and similarity geometry
5. `D6` into distributions, center, variability, and bivariate statistics
6. `T7`, `F5`, and `X4` into rational-number computation and algebraic manipulation

## Architectural Completion Condition

This domain should not be considered architecturally complete until:

- all major K-12/AP strand families are defined
- the graph has no missing grade-band territory from pre-K through AP
- every advanced strand has explicit prerequisite attachment to earlier nodes
- course-style overlays can be generated from the graph without inventing extra dependencies
