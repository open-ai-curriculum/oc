---
id: mathematics-b-ap2-decomposition-proposal
type: domain-proposal
domain: mathematics
status: draft
version: "0.1"
dependencies: [mathematics-graph-refactor-plan, advanced-node-decomposition-contract, mathematics-external-assessment-coverage-scan]
tags: [mathematics, algebra, precalculus, ap-precalculus, decomposition]
last_updated: "2026-04-15"
related: [mathematics-domain, mathematics-graph-refactor-plan, advanced-node-decomposition-contract, external-assessment-coverage-scan]
support_tier: Core release
maturity_state: Drafted
supported_profiles: [advanced-algebra-precalculus-decomposition]
evidence_class: Synthetic
---

# Advanced Algebra And AP Precalculus Decomposition Proposal

## Purpose

This document defines the first concrete topology split proposed by the mathematics graph refactor plan.

Its scope is:

- `B1` through `B5`
- `AP2`

The goal is to replace broad advanced-algebra and precalculus umbrella nodes with capability-sized boundaries that are strong enough for:

- standards crosswalk refinement
- ACT edge-topic clarity
- AP Precalculus fidelity
- IB AA/AI pathway improvement

## Current Compression Problem

The current graph carries too much territory inside too few nodes:

- `B1` polynomial structure and operations
- `B2` rational, radical, and exponential functions
- `B3` logarithmic and inverse-function reasoning
- `B4` trigonometric functions and unit circle
- `B5` precalculus function synthesis and limits foundations
- `AP2` AP Precalculus extension

This causes three problems:

1. ACT edge topics such as complex numbers, conics, vectors, and matrices are not explicit enough
2. AP Precalculus content is expressed as one synthesis node instead of a governed pathway
3. advanced standards and assessment overlays have to map onto nodes that span too many capability boundaries

## Proposed Topology Direction

The proposal is to retain `B` as the advanced-algebra and precalculus family but replace the current broad sequence with a more explicit progression.

## Proposed Successor Nodes

| Proposed node | Purpose | Primary upstream sources |
| --- | --- | --- |
| `B1` polynomial_forms_operations_and_zeros | isolate core polynomial structure, arithmetic, zeros, and multiplicity | current `B1`, `A2`, `K1`, `T6` |
| `B2` complex_numbers_and_quadratic_extensions | expose complex-number reasoning and quadratic-domain extension explicitly | current `K7`, proposed `B1` |
| `B3` rational_functions_and_asymptotic_structure | separate rational-function behavior from radical/exponential work | current `B2`, `J1`, `K1` |
| `B4` radical_functions_and_rational_exponents | isolate radical structure and rational-exponent reasoning | current `B2`, `B1`, `J1` |
| `B5` exponential_functions_and_growth_decay | isolate exponential structure and modeling | current `B2`, `K1`, `Q3` |
| `B6` logarithmic_functions_and_inverse_structure | preserve log reasoning as its own inverse-function surface | current `B3`, proposed `B5` |
| `B7` trigonometric_functions_unit_circle_and_radian_structure | preserve current `B4` core but make radian/unit-circle scope explicit | current `B4`, `H4`, `A4` |
| `B8` trigonometric_identities_equations_and_analytic_trig | separate identities/equations from basic trig-function meaning | proposed `B7` |
| `B9` sequences_series_and_recursive_structure | make sequence and series foundations explicit | proposed `B1`, proposed `B5` |
| `B10` conic_sections_and_coordinate_models | isolate conics and their coordinate/algebraic structure | `A4`, `H5`, proposed `B1` |
| `B11` vectors_matrices_and_parametric_foundations | isolate ACT/AP/IB edge territory now hidden in `AP2` | `A4`, `K1`, proposed `B7` |
| `B12` advanced_function_synthesis_and_transformations | explicit cross-family synthesis node replacing the broadest part of current `B5` | proposed `B3`, `B4`, `B5`, `B6`, `B7` |
| `B13` precalculus_limits_and_continuity_foundations | isolate the limit-intuition surface now buried inside current `B5` | proposed `B12` |

## Proposed Dependency Spine

The intended dependency order is:

1. `B1` polynomial_forms_operations_and_zeros
2. `B2` complex_numbers_and_quadratic_extensions
3. `B3` rational_functions_and_asymptotic_structure
4. `B4` radical_functions_and_rational_exponents
5. `B5` exponential_functions_and_growth_decay
6. `B6` logarithmic_functions_and_inverse_structure
7. `B7` trigonometric_functions_unit_circle_and_radian_structure
8. `B8` trigonometric_identities_equations_and_analytic_trig
9. `B9` sequences_series_and_recursive_structure
10. `B10` conic_sections_and_coordinate_models
11. `B11` vectors_matrices_and_parametric_foundations
12. `B12` advanced_function_synthesis_and_transformations
13. `B13` precalculus_limits_and_continuity_foundations

Not every node is purely linear in dependency. The intended major side attachments are:

- `B10` depends on geometry and coordinate reasoning in addition to advanced algebra
- `B11` depends on coordinate, trig, and representation reasoning
- `B12` is the first deliberate synthesis node after the explicit sub-capabilities exist

## Proposed Treatment Of `AP2`

Recommendation:

- `AP2` should stop functioning as a canonical umbrella capability node after decomposition

Reason:

- once parametric, polar, vector/matrix, trig, and advanced-function synthesis are explicit, `AP2` no longer represents one coherent capability boundary
- it is better represented as an assessment overlay or course-view overlay spanning:
  - `B7`
  - `B8`
  - `B10`
  - `B11`
  - `B12`
  - `B13`

Fallback option:

- if the repository still wants an explicit AP Precalculus synthesis node, it should be retained only as a terminal synthesis node with a narrower purpose and with clear evidence that it is not replacing the underlying capability decomposition

## Standards Impact

This decomposition should materially improve standards alignment by:

- reducing broad late-secondary anchor mappings that currently sit on umbrella nodes
- creating cleaner surfaces for future identifier-level crosswalks
- allowing ACT/AP/IB-facing topic areas to map onto capability boundaries rather than summary nodes

The standards inventory and standards coverage report should be regenerated after the graph changes land.

## Assessment Impact

### ACT

This proposal makes these currently under-exposed topics explicit:

- complex numbers
- conic sections
- vectors
- matrices

### AP Precalculus

This proposal separates:

- trig-function meaning
- analytic trig and identities
- conics
- parametric/vector/matrix territory
- advanced function synthesis
- precalculus limit foundations

### IB

This proposal improves the graph’s ability to later express:

- AA versus AI distinctions
- SL versus HL lifts

because vector/matrix, conic, advanced-function, and limits territory will no longer be hidden inside umbrella nodes.

## Implementation Sequence

The recommended implementation order is:

1. replace `B1` with explicit polynomial structure
2. split current `B2` into rational, radical, and exponential surfaces
3. preserve and re-anchor logarithmic reasoning as `B6`
4. split current trig and advanced-function work into `B7` through `B13`
5. demote `AP2` to an overlay or narrow synthesis endpoint

## Non-Goals

This proposal does not yet:

- change the authoritative graph
- create replacement node packages
- regenerate standards or operational exports

It defines the target topology for the next implementation pass.

## Claim Boundary

This is a decomposition proposal, not an implemented graph change. The successor nodes described here are proposed structures to guide the next authoritative graph refactor.
