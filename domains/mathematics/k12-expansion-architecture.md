---
id: k12-expansion-architecture
type: domain-architecture
domain: mathematics
status: draft
version: "0.2"
dependencies: [master-mathematics-graph-architecture, mathematics-master-knowledge-graph, mathematics-graph-refactor-plan]
tags: [mathematics, graph, architecture, k12, expansion]
last_updated: "2026-04-15"
related: [mathematics-domain, mathematics-master-knowledge-graph, mathematics-graph-refactor-plan]
support_tier: Core release
maturity_state: Drafted
supported_profiles: [k12-mathematics-architecture]
evidence_class: Synthetic
---

# K-12 Expansion Architecture

## Purpose

Define the current full-scope architecture target for the mathematics domain from pre-K through Advanced Placement.

This document does not replace the authoritative machine-readable graph in [master-knowledge-graph.yaml](/Volumes/data/development/oc/domains/mathematics/master-knowledge-graph.yaml:4). It defines how the current graph should continue evolving so the repository reaches a fully decomposed, standards-defensible, assessment-aware pre-K through Grade 12 and AP mathematics graph.

## Current Boundary

The current graph already includes:

- broad pre-K through Grade 5 foundations
- meaningful grades 6 through 8 territory
- formal linear and early quadratic secondary territory
- secondary geometry and proof territory
- secondary statistics and probability territory
- advanced algebra, trigonometry, precalculus, and AP-facing families

The current deficiency is no longer total absence of secondary scope.

The current deficiency is that some late-secondary families still need additional refinement for:

- strongest-possible standards crosswalk claims
- strongest-possible assessment-surface claims
- fine-grained prerequisite governance

## Target Scope

The target domain is one continuous mathematics knowledge graph covering:

- pre-kindergarten readiness
- elementary mathematics
- middle school mathematics
- high school core mathematics
- advanced high school mathematics
- Advanced Placement mathematics pathways

## Expansion Principles

1. No later-grade strand may exist as an orphan branch.
2. Every high-school and AP capability family must connect back to explicit prerequisite structure in the same master graph.
3. Geometry, statistics, functions, algebra, trigonometry, and calculus must be modeled as peer parts of one governed system rather than isolated course silos.
4. Course labels such as Algebra I or AP Calculus are delivery views over deeper capability dependencies, not the authority.
5. Assessment overlays and standards overlays must be derived from capability structure, not substituted for it.
6. Late-secondary and AP umbrella nodes must be split when they hide distinct verification logic, failure modes, or prerequisite transitions.

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

- substantially modeled

Remaining issue:

- some band-2 to early-band-3 bridges still need finer dependency articulation for later secondary work

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

- modeled in the current graph

Remaining issue:

- current nodes are broad enough that Algebra I fidelity is present, but not yet decomposed as strongly as needed for superior overlay generation

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

- modeled in the current graph

Remaining issue:

- geometry and trig transition work is present but still partially compressed in secondary geometry umbrella nodes

### Band 5. Grades 10 To 12

Primary territory:

- full Algebra II territory
- polynomial, rational, radical, exponential, and logarithmic functions
- sequences and series foundations
- complex numbers
- advanced function composition and transformation
- modeling across algebraic families

Current status:

- modeled in the current graph through explicit advanced-algebra nodes

Remaining issue:

- continued hardening is needed around modeling posture and overlay-driven delivery slices that span multiple advanced-algebra nodes

### Band 6. Grades 11 To 12 Advanced

Primary territory:

- precalculus
- trigonometric functions and identities
- analytic trigonometry
- vectors and parametric reasoning where included
- conic-section reasoning where included
- limits foundations

Current status:

- modeled in the current graph through explicit precalculus-facing nodes

Remaining issue:

- IB pathway fidelity and some ACT-style integrated-skills interpretation still require stronger overlay and workflow support than node presence alone provides

### Band 7. Advanced Placement

Primary territory:

- AP Precalculus where the repository chooses to model it as a distinct governed delivery path
- AP Statistics
- AP Calculus AB
- AP Calculus BC

Current status:

- modeled with explicit AP Statistics, AP Precalculus, and AP Calculus unit-facing capability surfaces plus maintained assessment overlays

Remaining issue:

- the remaining work is no longer AP unit decomposition; it is continued overlay validation, export hardening, and assessment-workflow integration

## Current Secondary And Advanced Families

The graph currently includes these late-secondary and AP families:

- `J` rational number operations and middle-school computation
- `K` functions and secondary linear algebra
- `H` secondary geometry transformations and proof
- `W` secondary statistics and probability
- `B` advanced algebra, trigonometry, and precalculus
- `AP` advanced placement mathematics pathways

These families are no longer missing.

They are now the primary refactor surface.

## Refactor Targets By Family

### J. Rational Number Operations And Expressions

Current role:

- completes middle-school arithmetic and algebra readiness

Refactor need:

- preserve current structure
- only refine if later overlay work exposes hidden mixed-capability compression

### K. Functions And Linear Systems

Current role:

- bridges middle-school algebra into secondary linear and early quadratic territory

Refactor need:

- clarify where `K` ends and advanced Algebra II / precalculus families begin
- ensure overlays can separate Algebra I and later-function expectations cleanly

### H. Secondary Geometry And Proof

Current role:

- carries transformations, congruence, similarity, proof, trigonometric foundations, circles, and coordinate geometry

Refactor need:

- consider later decomposition if proof, trig, and circles require stronger distinct verification boundaries

### W. Statistics And Probability

Current role:

- carries distributions, bivariate data, study design, inference foundations, and probability

Refactor need:

- split AP-level inferential territory away from broad survey-level statistics

### B. Advanced Algebraic Structures

Current role:

- carries advanced algebra, advanced functions, trigonometric function structure, and precalculus foundations

Refactor need:

- split this family aggressively to expose:
  - complex numbers
  - sequences and series
  - conic-section reasoning
  - refined trig structures
  - refined rational/exponential/logarithmic partitions where needed

### AP. Advanced Placement Pathways

Current role:

- provides AP-facing synthesis nodes for statistics, precalculus, and calculus

Refactor need:

- split AP Statistics into explicit inference-capability surfaces
- split AP Calculus into limit, derivative, integral, application, and BC-extension surfaces
- preserve AP overlays as derived views rather than course silos detached from core capability structure

## Course And Assessment Views

The graph should support course-style and assessment-style overlays without treating those overlays as authoritative topology.

Expected course-style overlays include:

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

Expected assessment-style overlays include:

- SAT
- PSAT/NMSQT
- ACT
- AP Statistics
- AP Precalculus
- AP Calculus AB
- AP Calculus BC
- IB Mathematics AA
- IB Mathematics AI

## Required Dependency Bridges

The next graph refactor must preserve and refine at least these transition zones:

1. `A5` into formal function and linear-model structure
2. `A3` into systems and constraint reasoning
3. `Q4` into percent change, slope, and applied rate modeling
4. `G7` into transformation, congruence, similarity, and later trig geometry
5. `D6` into distributions, center, variability, bivariate statistics, and inference
6. `T7`, `F5`, and `X4` into rational-number computation and algebraic manipulation
7. `K7` into full nonlinear secondary algebra and advanced-function work
8. `B5` into limits, calculus entry, and AP Precalculus-style synthesis

## Architectural Completion Condition

This domain should not be considered architecturally complete until:

- all major K-12/AP strand families are defined
- the graph has no missing grade-band territory from pre-K through AP
- every advanced strand has explicit prerequisite attachment to earlier nodes
- late-secondary and AP nodes are decomposed at capability-sized boundaries
- course-style and assessment-style overlays can be generated from the graph without inventing extra dependencies

## Claim Boundary

This document describes the intended architecture and current refactor surface of the mathematics graph. It does not claim that the late-secondary or AP decomposition has already been completed.
