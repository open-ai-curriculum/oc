---
id: mathematics-external-assessment-coverage-scan
type: domain-analysis
domain: mathematics
status: draft
version: "0.1"
dependencies: [master-mathematics-graph-architecture, mathematics-master-knowledge-graph, mathematics-standards-inventory, mathematics-standards-coverage-report]
tags: [mathematics, assessment, coverage, sat, act, ap, naep, ib]
last_updated: "2026-04-15"
related: [mathematics-domain, mathematics-master-knowledge-graph, mathematics-standards-coverage-report]
support_tier: Core release
maturity_state: Drafted
supported_profiles: [assessment-coverage-scan]
evidence_class: Mixed
---

# Mathematics External Assessment Coverage Scan

## Purpose

This document scans the current mathematics spine/graph against major external assessment targets:

- SAT
- PSAT/NMSQT
- ACT
- AP mathematics exams
- TerraNova
- state achievement tests
- NAEP mathematics
- IB Diploma Programme mathematics

The goal is not to claim score guarantees. The goal is to determine whether the current graph appears to contain the knowledge territory required to support strong performance on those assessments, and where the graph is still too coarse or incomplete to make that claim responsibly.

## Method

This scan uses two evidence layers:

1. repository evidence
   - the current mathematics scope and node inventory in [README.md](/Volumes/data/development/oc/domains/mathematics/README.md:5)
   - the authoritative capability topology in [master-knowledge-graph.yaml](/Volumes/data/development/oc/domains/mathematics/master-knowledge-graph.yaml:4)
   - representative advanced-node packages such as [B1](/Volumes/data/development/oc/domains/mathematics/nodes/b1-polynomial-structure-and-operations/node-spec.md:13), [B5](/Volumes/data/development/oc/domains/mathematics/nodes/b5-precalculus-function-synthesis-and-limits-foundations/node-spec.md:13), [AP1](/Volumes/data/development/oc/domains/mathematics/nodes/ap1-ap-statistics-extension/node-spec.md:13), [AP2](/Volumes/data/development/oc/domains/mathematics/nodes/ap2-ap-precalculus-extension/node-spec.md:13), and [AP3](/Volumes/data/development/oc/domains/mathematics/nodes/ap3-calculus-limits-and-derivatives/node-spec.md:13)
2. official external framework surfaces
   - SAT Suite math content domains and specifications from College Board
   - ACT math reporting categories from ACT
   - AP course and exam structures from AP Central
   - NAEP mathematics framework overview from the National Assessment Governing Board
   - IB Diploma Programme mathematics course descriptions and subject briefs from the IB

Coverage labels used here:

- `strong`: the graph appears to cover the required knowledge surface with credible prerequisite structure
- `substantial_but_compressed`: the graph appears to cover most of the surface, but some assessed territory is packed into umbrella nodes that are too broad for confident exam-prep claims
- `partial`: important portions of the assessment surface exist, but major territory or pathway detail is still missing
- `provisional`: the graph appears directionally aligned, but the assessment-specific evidence base is too weak to claim a strong match

## High-Level Result

The current mathematics graph is strongest against:

- SAT and PSAT/NMSQT
- broad state-achievement-test content expectations
- NAEP through grades 4 and 8
- general ACT readiness through Algebra II / early precalculus

The current mathematics graph is materially weaker for:

- full ACT breadth at the edge of modeling and cross-category integrated skills
- IB Diploma Programme pathway fidelity because AA/AI and SL/HL overlays now exist, but level-specific lifts and internal-assessment expectations remain only partially modeled
- assessment-specific hardening beyond content-surface coverage, especially where external frameworks include course-policy or performance-task dimensions

The main issue is no longer the absence of all late-secondary territory. The main issue is that late-secondary and AP territory is still modeled in nodes that are too large to support confident assessment-specific coverage claims.

## Assessment Scan

| Assessment family | External target surface | Current graph posture | Coverage label | Main reason |
| --- | --- | --- | --- | --- |
| SAT | Algebra, Advanced Math, Problem-Solving and Data Analysis, Geometry and Trigonometry | Strong | `strong` | The graph has explicit families for linear algebra, nonlinear algebra, geometry, trig foundations, ratios/percent, and statistics |
| PSAT/NMSQT | Same main content structure as SAT with slightly narrower geometry/trig surface | Strong | `strong` | The graph contains the SAT surface and more than enough upstream structure for PSAT/NMSQT |
| ACT | Number & Quantity, Algebra, Functions, Geometry, Statistics & Probability, integrating essential skills, modeling | Strong content surface with one remaining modeling caveat | `substantial_but_compressed` | Core content is explicit, but ACT-style cross-category modeling and integrated-skills posture remains broader than a simple node map |
| AP Statistics | Full introductory statistics and inference | Unit-level overlay now present | `strong` | `W1`-`W9` plus `AP1` and the AP Statistics overlay now expose the unit structure directly |
| AP Precalculus | Polynomial/rational, exponential/logarithmic, trig/polar, plus parameter/vector/matrix unit | Unit-level overlay now present | `strong` | `B1`-`B10` plus `AP2` and the AP Precalculus overlay now expose the main course units explicitly |
| AP Calculus AB / BC | Limits, derivatives, integrals, differential equations, applications, BC series and extensions | Unit-level overlay now present | `strong` | `AP3`-`AP9` and the AP Calculus AB/BC overlays now expose the main unit surfaces directly |
| TerraNova | Broad K-12 mathematics achievement surface | Directionally aligned | `provisional` | The graph strongly covers elementary and middle mathematics, but a current public official TerraNova math blueprint was not verified in this pass |
| State achievement tests | State math standards and grade-band achievement surfaces | Strong for standards-aligned content | `strong` | The repository already maintains state mathematics standards profiles and math standards coverage artifacts |
| NAEP | Grade 4, 8, and 12 mathematics knowledge and skill framework | Strong through 8, good but compressed at 12 | `substantial_but_compressed` | The graph clearly covers major NAEP 4/8 territory; grade-12 readiness exists but is compressed into broad secondary nodes |
| IB DP Mathematics | Analysis and Approaches and Applications and Interpretation at SL/HL | Partial | `partial` | The graph now includes AA/AI and SL/HL overlays, but HL lifts and internal-assessment expectations remain under-modeled |

## Assessment-Specific Notes

### SAT And PSAT/NMSQT

Official College Board surfaces for SAT and PSAT/NMSQT center on four math domains:

- Algebra
- Advanced Math
- Problem-Solving and Data Analysis
- Geometry and Trigonometry

Source:

- [SAT Math Overview](https://satsuite.collegeboard.org/sat/whats-on-the-test/math/overview)
- [SAT Suite Math Specifications](https://satsuite.collegeboard.org/k12-educators/about/alignment/math)
- [PSAT/NMSQT Math Overview](https://satsuite.collegeboard.org/psat-10/whats-on-the-test/math/overview)

Repository match:

- Algebra is covered by `E`, `A`, and `K` families, including `E1`-`E3`, `A1`-`A5`, and `K1`-`K6`.
- Advanced Math is covered by `K7`, `B1`, `B2`, and `B3`.
- Problem-Solving and Data Analysis is covered by `Q1`-`Q4`, `J5`, `J6`, and `W1`-`W4`, with the SAT overlay preserving the reporting-surface grouping.
- Geometry and Trigonometry is covered by `M9`, `H1`-`H5`, and `B4`.

Assessment judgment:

- For SAT and PSAT/NMSQT, the graph appears to meet or exceed the content surface.
- The remaining need is not a missing SAT/PSAT overlay, because that overlay now exists as a maintained artifact.
- The remaining need is continued hardening of assessment-surface validation and downstream practice/reporting workflows.

### ACT

Official ACT math reporting categories include:

- Number & Quantity
- Algebra
- Functions
- Geometry
- Statistics & Probability
- Integrating Essential Skills
- Modeling

ACT also explicitly names complex numbers, vectors, matrices, and conic sections in the math surface.

Source:

- [ACT Math Test Description](https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/description-of-math-test.html)

Repository match:

- Algebra, functions, geometry, and statistics/probability are strongly represented in `A`, `K`, `H`, `W`, and `B`.
- Integrating Essential Skills and modeling are now represented in part through the ACT assessment overlay, but the cross-category modeling posture is still broader than a clean node-only mapping.
- Complex numbers, vectors, matrices, and conics are now exposed explicitly through `B8`, `B9`, and `B10`.

Assessment judgment:

- The graph now supports a much stronger ACT content-surface claim than the earlier compressed topology allowed.
- The main remaining ACT caveat is cross-category modeling and integrated-skills interpretation, not missing edge-topic nodes.

### AP Statistics

Official AP Statistics is organized into nine units spanning one-variable data, two-variable data, collecting data, probability, sampling distributions, and multiple inference strands.

Source:

- [AP Statistics Course](https://apcentral.collegeboard.org/courses/ap-statistics)

Repository match:

- `W1` statistical distributions and variability
- `W2` bivariate data and linear association
- `W3` sampling, inference, and study design
- `W4` probability models and compound events
- `W5` sampling distributions
- `W6` inference for proportions
- `W7` inference for means
- `W8` chi-square reasoning
- `W9` inference for regression slope
- `AP1` AP statistics extension

Assessment judgment:

- The conceptual territory is now represented with explicit unit-facing capability surfaces.
- The remaining need is not topology decomposition; it is continued overlay and export hardening around those units.

### AP Precalculus

Official AP Precalculus assesses:

- polynomial and rational functions
- exponential and logarithmic functions
- trigonometric and polar functions
- a non-assessed unit on functions involving parameters, vectors, and matrices

Source:

- [AP Precalculus Course](https://apcentral.collegeboard.org/courses/ap-precalculus)
- [About AP Precalculus](https://apcentral.collegeboard.org/courses/ap-precalculus/about-ap-precalculus)

Repository match:

- `B1` polynomial structure and operations
- `B2` rational, radical, and exponential functions
- `B3` logarithmic and inverse-function reasoning
- `B4` trigonometric functions and unit circle
- `B5` precalculus function synthesis and limits foundations
- `B6` trigonometric identities, equations, and analytic trig
- `B8` complex numbers and quadratic extensions
- `B9` conic sections and coordinate models
- `B10` vectors, matrices, and parametric foundations
- `AP2` AP Precalculus extension

Assessment judgment:

- The graph now has a materially stronger AP Precalculus pathway with explicit advanced topic surfaces and a maintained overlay.
- The main remaining work is not missing AP Precalculus topology; it is continued operational hardening of overlay-driven workflows.

### AP Calculus AB And BC

Official AP Calculus AB is structured into eight units:

- limits and continuity
- multiple differentiation units
- contextual and analytical applications of differentiation
- integration and accumulation
- differential equations
- applications of integration

BC adds additional extensions such as series.

Source:

- [AP Calculus AB Course](https://apcentral.collegeboard.org/courses/ap-calculus-ab)
- [AP Calculus AB Exam](https://apcentral.collegeboard.org/courses/ap-calculus-ab/exam)

Repository match:

- `AP3` limits and continuity
- `AP4` derivative rules and computation
- `AP5` applications of derivatives
- `AP6` integral meaning and accumulation
- `AP7` applications of integration
- `AP8` differential equations foundations
- `AP9` BC series and advanced calculus extensions

Assessment judgment:

- The pathway now supports credible AP Calculus AB and BC unit-level overlays.
- The main remaining work is downstream operational hardening, not missing calculus-unit topology.

### TerraNova

Repository evidence suggests strong alignment to a broad survey-style K-12 math achievement surface because the graph is deep in elementary number, operations, geometry, measurement, fractions, proportional reasoning, and early algebra.

Assessment judgment:

- provisional only

Reason:

- This pass did not confirm a current public official TerraNova mathematics blueprint with topic-level specificity comparable to the SAT, ACT, AP, NAEP, or IB documentation.
- The current judgment is therefore based on broad domain fit, not a verified item-specification crosswalk.

### State Achievement Tests

The repository already maintains:

- state mathematics standards profiles in `docs/standards/states/*-mathematics-standards.md`
- the mathematics standards inventory in [mathematics-standards-inventory.md](/Volumes/data/development/oc/docs/standards/mathematics-standards-inventory.md:19)
- the mathematics standards coverage report in [mathematics-standards-coverage-report.md](/Volumes/data/development/oc/docs/standards/mathematics-standards-coverage-report.md:19)

Assessment judgment:

- strong for standards-aligned state achievement content

Important limit:

- This is a standards-surface judgment, not a fifty-state blueprint-and-item-format audit.
- The graph supports content coverage claims more strongly than test-design claims such as calculator policy, item-type mix, or state-specific reporting-category logic.

### NAEP

NAEP mathematics is framed around grades 4, 8, and 12 and emphasizes concrete knowledge/skill examples such as whole numbers on a number line, multidigit arithmetic, fractions and decimals, angle and Pythagorean reasoning, percentage, and proportional reasoning.

Source:

- [NAEP Math](https://www.nagb.gov/naep/mathematics.html)

Repository match:

- grade 4 and grade 8 territory is very well represented across `V`, `F`, `L`, `M`, `G`, `Q`, `S`, `E`, and `A`
- grade 12 territory is present in `K`, `H`, `W`, and `B`, but much of it sits inside broad secondary nodes

Assessment judgment:

- strong through grades 4 and 8
- substantial but compressed at grade 12

Current repository decision:

- this grade-12 compression is now treated as an explicitly accepted near-term boundary rather than an unresolved topology defect

### IB Diploma Programme Mathematics

Current IB DP mathematics offers:

- Mathematics: analysis and approaches
- Mathematics: applications and interpretation

These courses span:

- number and algebra
- functions
- geometry and trigonometry
- statistics and probability
- calculus

The subject brief also distinguishes SL and HL, and the IB model includes an internal exploration component.

Source:

- [Maths in the DP](https://www.ibo.org/programmes/diploma-programme/curriculum/mathematics/)
- [IB Mathematics: Analysis and Approaches Subject Brief](https://www.ibo.org/contentassets/5895a05412144fe890312bad52b17044/subject-brief-dp-math-analysis-and-approaches-en.pdf)

Repository match:

- the graph spans the broad topic families
- maintained IB AA, IB AI, IB AA SL, IB AA HL, IB AI SL, and IB AI HL overlays now exist over `B`, `AP`, `H`, and `W`

Gaps:

- only an initial artifact-governance surface for IB-style exploration and internal-assessment support has been codified so far
- HL lifts and pathway-specific internal-assessment expectations remain under-modeled for strong IB claims

Assessment judgment:

- partial

## Cross-Cutting Gap Inventory

The main gaps are no longer centered on missing late-secondary topology. They are now centered on assessment-fidelity hardening beyond the canonical content graph.

### Gap 1. ACT Modeling And Integrated-Skills Posture Still Needs Hardening

The graph now exposes the major ACT content surfaces explicitly, but ACT-style cross-category modeling and integrated-skills interpretation still sits partly in transfer-oriented node contracts and partly in the ACT overlay.

### Gap 2. IB Pathway Fidelity Remains Partial

The repository now has IB AA/AI summary overlays plus SL/HL variants, but it still does not fully model:

- internal exploration artifact contracts
- deeper artifact-governance coverage beyond the initial assessment-surface registry
- pathway-specific lifts beyond broad content-surface coverage

### Gap 3. Assessment Overlays Need Further Validation And Workflow Hardening

Assessment overlays now exist as first-class maintained artifacts, but they still need deeper downstream use in:

- practice-generation workflows
- reporting slices
- overlay-aware validation beyond mapped-node presence

### Gap 4. External-Framework Hardening Still Includes Provisional Areas

TerraNova remains provisional because this pass still does not rest on a verified current public blueprint with topic-level specificity comparable to SAT, ACT, AP, NAEP, or IB.

## Recommended Next Iterations

To move from broad readiness to defensible assessment-surface completeness, the next work should be:

1. Deepen assessment-overlay validation.
   Add guards for:
   - stale “not yet implemented” overlay claims
   - overlay-summary drift against known topology state
   - downstream export presence for maintained overlays

2. Add IB overlay hardening beyond surface mapping.
   Add validation and, later, artifact contracts for:
   - SL versus HL pathway distinctions
   - internal exploration expectations
   - level-specific unresolved-gap reporting

3. Decide how to handle TerraNova.
   Either:
   - identify and codify an official TerraNova math blueprint if one is publicly available, or
   - remove TerraNova from high-confidence scan claims and keep it explicitly provisional

## Claim Boundary

This scan is an objective repository analysis grounded in the current graph and current public framework surfaces. It does not claim that the repository is already a complete exam-preparation system, that score outcomes are guaranteed, or that every assessment framework has been exhaustively decomposed into reviewed node-level crosswalks.
