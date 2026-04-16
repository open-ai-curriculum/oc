---
id: mathematics-node-standards-map
type: standard
domain: mathematics-standards
status: draft
version: "0.1"
dependencies: [mathematics-content-standards-baseline, mathematics-performance-standards-baseline, ccss-mathematics, state-standards-index]
tags: [standards, mathematics, mapping, node-alignment]
last_updated: "2026-04-14"
related: [standards-index, mathematics-content-standards-baseline, mathematics-performance-standards-baseline, ccss-index, state-standards-index]
standard_family: mathematics-node-standards-map
standard_subject: mathematics
standards_version: mathematics-node-standards-map-2026-04-14
standards_track: current
standards_effective_as_of: "2026-04-14"
supersedes_standards_version: []
---

# Mathematics Node Standards Map

## Purpose

This document records the current node-to-standards mapping surface for the mathematics domain.

It maps every mathematics node to the mathematics standards artifacts already codified in `docs/standards/`. The current mapping is standards-family aware and claim-boundary constrained:

- repository mathematics content baseline
- repository mathematics performance baseline
- Common Core State Standards for Mathematics family artifact
- every codified state mathematics standards profile under `docs/standards/states/`

The map does not yet claim official identifier-level equivalence for every node. Where the current standards corpus only supports conceptual or baseline-level alignment, that limitation is recorded explicitly.

## Current Coverage

- total mapped mathematics nodes: `146`
- CCSS direct or partial mapping nodes: `134`
- CCSS out-of-scope nodes: `12`
- state profiles included per node: `15`

### CCSS Mapping Status Counts

- `mapped`: `126`
- `out_of_scope_current_ccss_baseline`: `12`
- `partial_readiness_alignment`: `8`

### State Profile Mapping Status Counts

- `conceptual_alignment_only_until_state_crosswalk_exists`: `670`
- `inherits_canonical_baseline_with_state_metadata`: `268`
- `out_of_scope_current_profile`: `180`
- `requires_state_identifier_crosswalk_from_canonical_baseline`: `1072`

## Mapping Method

Each node record currently contains:

- canonical content-baseline alignment
- canonical performance-baseline expectation
- CCSS mathematics mapping posture
- state-profile mapping posture for each codified state mathematics standards profile

The current map is intentionally conservative:

- official identifiers remain `null` until the standards corpus supports reviewed identifier-level mapping
- AP nodes are marked out of scope for the current K-12 standards corpus
- baseline-derived and state-distinct profiles preserve the need for future state-specific crosswalk work

## Full Machine-Readable Map

- [mathematics-node-standards-map.json](mathematics-node-standards-map.json)

## Canonical Node Summary

| Node | Grade band | Primary content domain | CCSS status | Canonical anchor |
| --- | --- | --- | --- | --- |
| `Z1` | Pre-K | pre-standard mathematical readiness | `out_of_scope_current_ccss_baseline` | pre-kindergarten readiness prior to kindergarten mathematics standards |
| `Z2` | Pre-K | pre-standard mathematical readiness | `out_of_scope_current_ccss_baseline` | pre-kindergarten readiness prior to kindergarten mathematics standards |
| `Z3` | Pre-K | pre-standard mathematical readiness | `out_of_scope_current_ccss_baseline` | pre-kindergarten readiness prior to kindergarten mathematics standards |
| `C1` | Kindergarten | counting and cardinality | `mapped` | count sequence fluency and stable verbal counting |
| `C2` | Kindergarten | counting and cardinality | `mapped` | one-to-one correspondence while counting objects |
| `C3` | Kindergarten | counting and cardinality | `mapped` | cardinality and the final-count principle |
| `C4` | Kindergarten | counting and cardinality | `mapped` | compare small quantities and determine more, less, or equal |
| `C5` | Kindergarten | counting and cardinality | `partial_readiness_alignment` | numeral recognition and writing readiness supporting numeral-quantity alignment |
| `C6` | Kindergarten | counting and cardinality | `mapped` | match symbols to counted quantities and quantity names |
| `N1` | Kindergarten to Grade 1 | operations and algebraic thinking | `mapped` | compose and decompose numbers and reason about addition and subtraction |
| `N2` | Kindergarten to Grade 1 | operations and algebraic thinking | `mapped` | compose and decompose numbers and reason about addition and subtraction |
| `N3` | Kindergarten to Grade 1 | operations and algebraic thinking | `mapped` | compose and decompose numbers and reason about addition and subtraction |
| `N4` | Kindergarten to Grade 1 | operations and algebraic thinking | `mapped` | compose and decompose numbers and reason about addition and subtraction |
| `N5` | Kindergarten to Grade 1 | operations and algebraic thinking | `mapped` | compose and decompose numbers and reason about addition and subtraction |
| `N6` | Kindergarten to Grade 1 | operations and algebraic thinking | `mapped` | compose and decompose numbers and reason about addition and subtraction |
| `V1` | Grades 1-3 | number and operations in base ten | `mapped` | understand place value and use it to structure multidigit comparison and operations |
| `V2` | Grades 1-3 | number and operations in base ten | `mapped` | understand place value and use it to structure multidigit comparison and operations |
| `V3` | Grades 1-3 | number and operations in base ten | `mapped` | understand place value and use it to structure multidigit comparison and operations |
| `V4` | Grades 1-3 | number and operations in base ten | `mapped` | understand place value and use it to structure multidigit comparison and operations |
| `V5` | Grades 1-3 | number and operations in base ten | `mapped` | understand place value and use it to structure multidigit comparison and operations |
| `X1` | Grades 4-5 | number and operations in base ten / number and operations with fractions | `mapped` | extend place-value reasoning to decimals and connect decimals to fraction benchmarks |
| `X2` | Grades 4-5 | number and operations in base ten / number and operations with fractions | `mapped` | extend place-value reasoning to decimals and connect decimals to fraction benchmarks |
| `X3` | Grades 4-5 | number and operations in base ten / number and operations with fractions | `mapped` | extend place-value reasoning to decimals and connect decimals to fraction benchmarks |
| `X4` | Grades 4-5 | number and operations in base ten / number and operations with fractions | `mapped` | extend place-value reasoning to decimals and connect decimals to fraction benchmarks |
| `X5` | Grades 4-5 | number and operations in base ten / number and operations with fractions | `mapped` | extend place-value reasoning to decimals and connect decimals to fraction benchmarks |
| `U1` | Kindergarten to Grade 3 | operations and algebraic thinking / number and operations with fractions | `mapped` | reason about equal groups, equal shares, and partitioning as foundations for multiplication, division, and fractions |
| `U2` | Kindergarten to Grade 3 | operations and algebraic thinking / number and operations with fractions | `mapped` | reason about equal groups, equal shares, and partitioning as foundations for multiplication, division, and fractions |
| `U3` | Kindergarten to Grade 3 | operations and algebraic thinking / number and operations with fractions | `mapped` | reason about equal groups, equal shares, and partitioning as foundations for multiplication, division, and fractions |
| `U4` | Kindergarten to Grade 3 | operations and algebraic thinking / number and operations with fractions | `mapped` | reason about equal groups, equal shares, and partitioning as foundations for multiplication, division, and fractions |
| `U5` | Kindergarten to Grade 3 | operations and algebraic thinking / number and operations with fractions | `mapped` | reason about equal groups, equal shares, and partitioning as foundations for multiplication, division, and fractions |
| `U6` | Kindergarten to Grade 3 | operations and algebraic thinking / number and operations with fractions | `mapped` | reason about equal groups, equal shares, and partitioning as foundations for multiplication, division, and fractions |
| `T1` | Grades 3-5 | operations and algebraic thinking / number and operations in base ten | `mapped` | use multiplicative structure for facts, comparison, multidigit multiplication, and division |
| `T2` | Grades 3-5 | operations and algebraic thinking / number and operations in base ten | `mapped` | use multiplicative structure for facts, comparison, multidigit multiplication, and division |
| `T3` | Grades 3-5 | operations and algebraic thinking / number and operations in base ten | `mapped` | use multiplicative structure for facts, comparison, multidigit multiplication, and division |
| `T4` | Grades 3-5 | operations and algebraic thinking / number and operations in base ten | `mapped` | use multiplicative structure for facts, comparison, multidigit multiplication, and division |
| `T5` | Grades 3-5 | operations and algebraic thinking / number and operations in base ten | `mapped` | use multiplicative structure for facts, comparison, multidigit multiplication, and division |
| `T6` | Grades 3-5 | operations and algebraic thinking / number and operations in base ten | `mapped` | use multiplicative structure for facts, comparison, multidigit multiplication, and division |
| `T7` | Grades 3-5 | operations and algebraic thinking / number and operations in base ten | `mapped` | use multiplicative structure for facts, comparison, multidigit multiplication, and division |
| `M1` | Kindergarten to Grade 5 | measurement and data | `mapped` | reason about measurable attributes, units, comparison, representation, and conversion |
| `M2` | Kindergarten to Grade 5 | measurement and data | `mapped` | reason about measurable attributes, units, comparison, representation, and conversion |
| `M3` | Kindergarten to Grade 5 | measurement and data | `mapped` | reason about measurable attributes, units, comparison, representation, and conversion |
| `M4` | Kindergarten to Grade 5 | measurement and data | `mapped` | reason about measurable attributes, units, comparison, representation, and conversion |
| `M5` | Kindergarten to Grade 5 | measurement and data | `mapped` | reason about measurable attributes, units, comparison, representation, and conversion |
| `M6` | Kindergarten to Grade 5 | measurement and data | `mapped` | reason about measurable attributes, units, comparison, representation, and conversion |
| `M7` | Kindergarten to Grade 5 | measurement and data | `mapped` | reason about measurable attributes, units, comparison, representation, and conversion |
| `M8` | Kindergarten to Grade 5 | measurement and data | `mapped` | reason about measurable attributes, units, comparison, representation, and conversion |
| `M9` | Kindergarten to Grade 5 | measurement and data | `mapped` | reason about measurable attributes, units, comparison, representation, and conversion |
| `M10` | Kindergarten to Grade 5 | measurement and data | `mapped` | reason about measurable attributes, units, comparison, representation, and conversion |
| `M11` | Kindergarten to Grade 5 | measurement and data | `mapped` | reason about measurable attributes, units, comparison, representation, and conversion |
| `M12` | Kindergarten to Grade 5 | measurement and data | `mapped` | reason about measurable attributes, units, comparison, representation, and conversion |
| `M13` | Kindergarten to Grade 5 | measurement and data | `mapped` | reason about measurable attributes, units, comparison, representation, and conversion |
| `M14` | Kindergarten to Grade 5 | measurement and data | `mapped` | reason about measurable attributes, units, comparison, representation, and conversion |
| `G1` | Kindergarten to Grade 5 | geometry | `mapped` | recognize, compose, classify, and reason about geometric figures and spatial structure |
| `G2` | Kindergarten to Grade 5 | geometry | `mapped` | recognize, compose, classify, and reason about geometric figures and spatial structure |
| `G3` | Kindergarten to Grade 5 | geometry | `mapped` | recognize, compose, classify, and reason about geometric figures and spatial structure |
| `G4` | Kindergarten to Grade 5 | geometry | `mapped` | recognize, compose, classify, and reason about geometric figures and spatial structure |
| `G5` | Kindergarten to Grade 5 | geometry | `mapped` | recognize, compose, classify, and reason about geometric figures and spatial structure |
| `G6` | Kindergarten to Grade 5 | geometry | `mapped` | recognize, compose, classify, and reason about geometric figures and spatial structure |
| `G7` | Kindergarten to Grade 5 | geometry | `mapped` | recognize, compose, classify, and reason about geometric figures and spatial structure |
| `P1` | Kindergarten to Grade 2 | operations and algebraic thinking | `partial_readiness_alignment` | notice repeated and growing structure as readiness for algebraic thinking |
| `P2` | Kindergarten to Grade 2 | operations and algebraic thinking | `partial_readiness_alignment` | notice repeated and growing structure as readiness for algebraic thinking |
| `P3` | Kindergarten to Grade 2 | operations and algebraic thinking | `partial_readiness_alignment` | notice repeated and growing structure as readiness for algebraic thinking |
| `P4` | Kindergarten to Grade 2 | operations and algebraic thinking | `partial_readiness_alignment` | notice repeated and growing structure as readiness for algebraic thinking |
| `D1` | Kindergarten to Grade 5 | measurement and data | `mapped` | sort, represent, and interpret simple data sets and graphs |
| `D2` | Kindergarten to Grade 5 | measurement and data | `mapped` | sort, represent, and interpret simple data sets and graphs |
| `D3` | Kindergarten to Grade 5 | measurement and data | `mapped` | sort, represent, and interpret simple data sets and graphs |
| `D4` | Kindergarten to Grade 5 | measurement and data | `mapped` | sort, represent, and interpret simple data sets and graphs |
| `D5` | Kindergarten to Grade 5 | measurement and data | `mapped` | sort, represent, and interpret simple data sets and graphs |
| `D6` | Kindergarten to Grade 5 | measurement and data | `mapped` | sort, represent, and interpret simple data sets and graphs |
| `L1` | Grades 1-2 | operations and algebraic thinking / number representation | `mapped` | use linear position to represent ordered whole-number magnitude |
| `L2` | Grades 1-3 | number and operations in base ten / number representation | `mapped` | represent equal intervals and additive jumps on a number line |
| `L3` | Grades 2-4 | number and operations in base ten | `mapped` | locate and compare multidigit numbers on a number line |
| `L4` | Grades 3-5 | number and operations with fractions | `mapped` | represent fraction magnitude on the number line, including beyond one whole |
| `Y1` | Grades 3-5 | number and operations in base ten | `mapped` | use rounding and benchmark whole numbers to judge reasonableness |
| `Y2` | Grades 3-5 | number and operations in base ten | `mapped` | estimate whole-number operation results using place-value benchmarks |
| `Y3` | Grades 3-5 | measurement and data | `mapped` | estimate measurement outcomes and judge whether results are reasonable |
| `Y4` | Grades 3-5 | number and operations with fractions | `mapped` | use benchmark fractions to estimate and compare fraction quantities |
| `R1` | Grades 2-3 | number and operations with fractions | `partial_readiness_alignment` | establish equal-part and unit-fraction meaning before formal fraction notation |
| `R2` | Grades 2-3 | number and operations with fractions | `partial_readiness_alignment` | establish equal-part and unit-fraction meaning before formal fraction notation |
| `R3` | Grades 2-3 | number and operations with fractions | `partial_readiness_alignment` | establish equal-part and unit-fraction meaning before formal fraction notation |
| `F1` | Grades 3-5 | number and operations with fractions | `mapped` | reason about fraction quantity, equivalence, comparison, and operations |
| `F2` | Grades 3-5 | number and operations with fractions | `mapped` | reason about fraction quantity, equivalence, comparison, and operations |
| `F3` | Grades 3-5 | number and operations with fractions | `mapped` | reason about fraction quantity, equivalence, comparison, and operations |
| `F4` | Grades 3-5 | number and operations with fractions | `mapped` | reason about fraction quantity, equivalence, comparison, and operations |
| `F5` | Grades 3-5 | number and operations with fractions | `mapped` | reason about fraction quantity, equivalence, comparison, and operations |
| `F6` | Grades 3-5 | number and operations with fractions | `mapped` | reason about fraction quantity, equivalence, comparison, and operations |
| `Q1` | Grades 6-7 | ratios and proportional relationships | `mapped` | reason with ratios, unit rates, proportional relationships, and percent |
| `Q2` | Grades 6-7 | ratios and proportional relationships | `mapped` | reason with ratios, unit rates, proportional relationships, and percent |
| `Q3` | Grades 6-7 | ratios and proportional relationships | `mapped` | reason with ratios, unit rates, proportional relationships, and percent |
| `Q4` | Grades 6-7 | ratios and proportional relationships | `mapped` | reason with ratios, unit rates, proportional relationships, and percent |
| `S1` | Grades 6-7 | the number system | `mapped` | reason about signed-number magnitude, order, and operations |
| `S2` | Grades 6-7 | the number system | `mapped` | reason about signed-number magnitude, order, and operations |
| `E1` | Grades 6-8 | expressions and equations | `mapped` | solve and interpret equations using structural equality and inverse reasoning |
| `E2` | Grades 6-8 | expressions and equations | `mapped` | solve and interpret equations using structural equality and inverse reasoning |
| `E3` | Grades 6-8 | expressions and equations | `mapped` | solve and interpret equations using structural equality and inverse reasoning |
| `A1` | Grades 6-8 | expressions and equations / functions / geometry | `mapped` | use variables, equations, inequalities, and coordinate reasoning to describe relationships |
| `A2` | Grades 6-8 | expressions and equations / functions / geometry | `mapped` | use variables, equations, inequalities, and coordinate reasoning to describe relationships |
| `A3` | Grades 6-8 | expressions and equations / functions / geometry | `mapped` | use variables, equations, inequalities, and coordinate reasoning to describe relationships |
| `A4` | Grades 6-8 | expressions and equations / functions / geometry | `mapped` | use variables, equations, inequalities, and coordinate reasoning to describe relationships |
| `A5` | Grades 6-8 | expressions and equations / functions / geometry | `mapped` | use variables, equations, inequalities, and coordinate reasoning to describe relationships |
| `J1` | Grades 6-7 | the number system / ratios and proportional relationships | `mapped` | operate with rational numbers and apply proportional reasoning in context |
| `J2` | Grades 6-7 | the number system / ratios and proportional relationships | `mapped` | operate with rational numbers and apply proportional reasoning in context |
| `J3` | Grades 6-7 | the number system / ratios and proportional relationships | `mapped` | operate with rational numbers and apply proportional reasoning in context |
| `J4` | Grades 6-7 | the number system / ratios and proportional relationships | `mapped` | operate with rational numbers and apply proportional reasoning in context |
| `J5` | Grades 6-7 | the number system / ratios and proportional relationships | `mapped` | operate with rational numbers and apply proportional reasoning in context |
| `J6` | Grades 6-7 | the number system / ratios and proportional relationships | `mapped` | operate with rational numbers and apply proportional reasoning in context |
| `K1` | Grade 8 to High School | functions / algebra | `mapped` | reason about functions, rate of change, multiple representations, systems, and early quadratic structure |
| `K2` | Grade 8 to High School | functions / algebra | `mapped` | reason about functions, rate of change, multiple representations, systems, and early quadratic structure |
| `K3` | Grade 8 to High School | functions / algebra | `mapped` | reason about functions, rate of change, multiple representations, systems, and early quadratic structure |
| `K4` | Grade 8 to High School | functions / algebra | `mapped` | reason about functions, rate of change, multiple representations, systems, and early quadratic structure |
| `K5` | Grade 8 to High School | functions / algebra | `mapped` | reason about functions, rate of change, multiple representations, systems, and early quadratic structure |
| `K6` | Grade 8 to High School | functions / algebra | `mapped` | reason about functions, rate of change, multiple representations, systems, and early quadratic structure |
| `K7` | Grade 8 to High School | functions / algebra | `mapped` | reason about functions, rate of change, multiple representations, systems, and early quadratic structure |
| `H1` | Grade 8 to High School | geometry | `mapped` | reason about geometric structure, transformations, proof, similarity, and trigonometric relationships |
| `H2` | Grade 8 to High School | geometry | `mapped` | reason about geometric structure, transformations, proof, similarity, and trigonometric relationships |
| `H3` | Grade 8 to High School | geometry | `mapped` | reason about geometric structure, transformations, proof, similarity, and trigonometric relationships |
| `H4` | Grade 8 to High School | geometry | `mapped` | reason about geometric structure, transformations, proof, similarity, and trigonometric relationships |
| `H5` | Grade 8 to High School | geometry | `mapped` | reason about geometric structure, transformations, proof, similarity, and trigonometric relationships |
| `W1` | Grades 6-12 | statistics and probability | `mapped` | analyze data, reason about variability, and make probabilistic or inferential claims |
| `W2` | Grades 6-12 | statistics and probability | `mapped` | analyze data, reason about variability, and make probabilistic or inferential claims |
| `W3` | Grades 6-12 | statistics and probability | `mapped` | analyze data, reason about variability, and make probabilistic or inferential claims |
| `W4` | Grades 6-12 | statistics and probability | `mapped` | analyze data, reason about variability, and make probabilistic or inferential claims |
| `W5` | Grades 6-12 | statistics and probability | `mapped` | analyze data, reason about variability, and make probabilistic or inferential claims |
| `W6` | Grades 6-12 | statistics and probability | `mapped` | analyze data, reason about variability, and make probabilistic or inferential claims |
| `W7` | Grades 6-12 | statistics and probability | `mapped` | analyze data, reason about variability, and make probabilistic or inferential claims |
| `W8` | Grades 6-12 | statistics and probability | `mapped` | analyze data, reason about variability, and make probabilistic or inferential claims |
| `W9` | Grades 6-12 | statistics and probability | `mapped` | analyze data, reason about variability, and make probabilistic or inferential claims |
| `B1` | High School | algebra / functions / number and quantity | `mapped` | reason about advanced algebraic structure, function families, and precalculus behavior |
| `B2` | High School | algebra / functions / number and quantity | `mapped` | reason about advanced algebraic structure, function families, and precalculus behavior |
| `B3` | High School | algebra / functions / number and quantity | `mapped` | reason about advanced algebraic structure, function families, and precalculus behavior |
| `B4` | High School | algebra / functions / number and quantity | `mapped` | reason about advanced algebraic structure, function families, and precalculus behavior |
| `B5` | High School | algebra / functions / number and quantity | `mapped` | reason about advanced algebraic structure, function families, and precalculus behavior |
| `B6` | High School | algebra / functions / number and quantity | `mapped` | reason about advanced algebraic structure, function families, and precalculus behavior |
| `B7` | High School | algebra / functions / number and quantity | `mapped` | reason about advanced algebraic structure, function families, and precalculus behavior |
| `B8` | High School | algebra / functions / number and quantity | `mapped` | reason about advanced algebraic structure, function families, and precalculus behavior |
| `B9` | High School | algebra / functions / number and quantity | `mapped` | reason about advanced algebraic structure, function families, and precalculus behavior |
| `B10` | High School | algebra / functions / number and quantity | `mapped` | reason about advanced algebraic structure, function families, and precalculus behavior |
| `AP1` | Advanced Placement / Post-CCSS extension | advanced coursework beyond the current codified K-12 standards corpus | `out_of_scope_current_ccss_baseline` | advanced coursework nodes extend beyond the currently codified CCSS/state standards baseline |
| `AP2` | Advanced Placement / Post-CCSS extension | advanced coursework beyond the current codified K-12 standards corpus | `out_of_scope_current_ccss_baseline` | advanced coursework nodes extend beyond the currently codified CCSS/state standards baseline |
| `AP3` | Advanced Placement / Post-CCSS extension | advanced coursework beyond the current codified K-12 standards corpus | `out_of_scope_current_ccss_baseline` | advanced coursework nodes extend beyond the currently codified CCSS/state standards baseline |
| `AP4` | Advanced Placement / Post-CCSS extension | advanced coursework beyond the current codified K-12 standards corpus | `out_of_scope_current_ccss_baseline` | advanced coursework nodes extend beyond the currently codified CCSS/state standards baseline |
| `AP5` | Advanced Placement / Post-CCSS extension | advanced coursework beyond the current codified K-12 standards corpus | `out_of_scope_current_ccss_baseline` | advanced coursework nodes extend beyond the currently codified CCSS/state standards baseline |
| `AP6` | Advanced Placement / Post-CCSS extension | advanced coursework beyond the current codified K-12 standards corpus | `out_of_scope_current_ccss_baseline` | advanced coursework nodes extend beyond the currently codified CCSS/state standards baseline |
| `AP7` | Advanced Placement / Post-CCSS extension | advanced coursework beyond the current codified K-12 standards corpus | `out_of_scope_current_ccss_baseline` | advanced coursework nodes extend beyond the currently codified CCSS/state standards baseline |
| `AP8` | Advanced Placement / Post-CCSS extension | advanced coursework beyond the current codified K-12 standards corpus | `out_of_scope_current_ccss_baseline` | advanced coursework nodes extend beyond the currently codified CCSS/state standards baseline |
| `AP9` | Advanced Placement / Post-CCSS extension | advanced coursework beyond the current codified K-12 standards corpus | `out_of_scope_current_ccss_baseline` | advanced coursework nodes extend beyond the currently codified CCSS/state standards baseline |

## Claim Boundary

This map records repository alignment posture. It does not certify legal compliance, psychometric validity, classroom sufficiency, or reviewed code-level equivalence to every public standards publication.
