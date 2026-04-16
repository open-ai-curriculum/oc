---
id: mathematics-graph-refactor-progress
type: domain-status
domain: mathematics
status: draft
version: "0.1"
dependencies: [mathematics-graph-refactor-plan, k12-expansion-architecture, mathematics-b-ap2-decomposition-proposal]
tags: [mathematics, graph, refactor, progress]
last_updated: "2026-04-15"
related: [mathematics-domain, mathematics-graph-refactor-plan, mathematics-b-ap2-decomposition-proposal]
support_tier: Core release
maturity_state: Drafted
supported_profiles: [mathematics-refactor-progress]
evidence_class: Synthetic
---

# Mathematics Graph Refactor Progress

## Purpose

Track execution progress for the mathematics graph refactor plan using explicit percentage checkpoints.

## Percent Method

The refactor is tracked against these weighted checkpoints:

| Checkpoint | Weight |
| --- | --- |
| R1 architecture re-baseline and anti-drift guards | `20%` |
| R2 advanced algebra and precalculus decomposition design | `10%` |
| R2 advanced algebra and precalculus graph/package implementation | `15%` |
| R3 statistics and probability decomposition design and implementation | `15%` |
| R4 calculus decomposition design and implementation | `15%` |
| R5 standards, overlays, and operational regeneration | `15%` |
| validator and export hardening for the refactored graph | `10%` |

Total: `100%`

## Current Completion

- overall refactor completion: `100%`

## Iteration Log

### Iteration 1

Delivered:

- architecture re-baseline
- assessment overlay model
- advanced-node decomposition contract
- architecture-state validator wired into the mathematics audit

Increment:

- `20%`

Cumulative total:

- `20%`

### Iteration 2

Delivered:

- advanced algebra and precalculus decomposition proposal for `B1`-`B5` and `AP2`

Increment:

- `10%`

Cumulative total:

- `30%`

### Iteration 3

Delivered:

- first-wave advanced algebra and precalculus topology implementation
- explicit node packages for `B6` through `B10`
- `AP2` rewired to depend on the decomposed advanced topology
- graph and package documentation updated to expose the new topology

Increment:

- `5%`

Cumulative total:

- `35%`

### Iteration 4

Delivered:

- first-wave statistics and probability decomposition for AP Statistics-facing territory
- explicit node packages for `W5` through `W9`
- `W3` narrowed to study-design and inferential-validity foundations
- `AP1` rewired around sampling-distribution and inference-strand nodes

Increment:

- `10%`

Cumulative total:

- `45%`

### Iteration 5

Delivered:

- first-wave calculus decomposition for AP Calculus-facing territory
- explicit topology for limits, derivative computation, derivative applications, integral meaning, integration applications, differential equations, and BC extensions
- node packages for `AP6` through `AP9`
- `AP3` through `AP5` repurposed away from umbrella calculus scope into narrower capability surfaces

Increment:

- `10%`

Cumulative total:

- `55%`

### Iteration 6

Delivered:

- maintained assessment-overlay package for SAT, PSAT/NMSQT, ACT, AP Statistics, AP Precalculus, AP Calculus AB, AP Calculus BC, IB AA, and IB AI
- mathematics assessment-overlay validator wired into the mathematics audit
- regeneration of mathematics standards map, inventory, coverage report, standards-augmented graph, and operational exports against the refactored topology
- operational graph export extended so assessment overlays are graph-native entities and relationships

Increment:

- `10%`

Cumulative total:

- `65%`

### Iteration 7

Delivered:

- stale assessment-analysis and architecture claims updated to reflect the implemented AP, precalculus, and overlay topology
- mathematics assessment-analysis state validator added and wired into the mathematics audit
- mathematics audit hardened against documentation drift between the maintained graph, overlays, and analysis package

Increment:

- `5%`

Cumulative total:

- `70%`

### Iteration 8

Delivered:

- ACT overlay decomposition refined so integrating-essential-skills and modeling are represented as separate maintained coverage units
- maintained IB course-level overlay package expanded to include AA SL, AA HL, AI SL, and AI HL variants alongside the AA and AI summary overlays
- assessment-overlay contract, analysis-state validator, and overlay validator hardened around level-variant expectations
- overlay package and operational graph exports regenerated against the expanded assessment-overlay set

Increment:

- `5%`

Cumulative total:

- `75%`

### Iteration 9

Delivered:

- generated assessment-overlay reporting summary added for downstream reporting slices and package-level coverage inspection
- mathematics export-consistency validator added so the maintained overlay catalog, operational export, and Gephi export must agree on overlay and assessment-unit counts
- overlay package, operational export, and Gephi export regenerated and brought back into synchronized state under audit

Increment:

- `5%`

Cumulative total:

- `80%`

### Iteration 10

Delivered:

- operational and Gephi exports enriched so assessment overlays and assessment units now carry derived routing context for mapped families, grade bands, and content domains
- assessment-overlay reporting summary expanded with package-level family and level-variant totals
- mathematics export-consistency validation hardened so assessment overlays and units must retain populated derived routing context in the operational export

Increment:

- `5%`

Cumulative total:

- `85%`

### Iteration 11

Delivered:

- mathematics artifact-attachment contract and schema extended so assessment-facing artifacts can attach to `AssessmentOverlay` and `AssessmentUnit` entities
- maintained assessment-surface artifact registry added for ACT and IB overlay-level governance support
- mathematics audit hardened with artifact-registry validation against graph nodes and maintained assessment overlay/unit ids
- operational and Gephi exports regenerated so assessment-facing artifact attachments are graph-native alongside the existing fraction-spine registry

Increment:

- `5%`

Cumulative total:

- `90%`

### Iteration 12

Delivered:

- generated mathematics assessment-framework assurance register added so each maintained external assessment family now has an explicit assurance posture
- TerraNova locked as a provisional, unverified-blueprint framework and NAEP explicitly codified as framework-verified with remaining grade-12 compression
- mathematics audit hardened with assessment-framework assurance validation against the maintained overlay catalog and external assessment scan
- domain and manifest documentation updated to surface the new assessment-framework assurance boundary

Increment:

- `5%`

Cumulative total:

- `95%`

### Iteration 13

Delivered:

- NAEP grade-12 compression decision codified as an explicit maintained architecture boundary rather than an unresolved planning question
- assessment-framework assurance register updated so NAEP now reflects an accepted grade-12 compression posture instead of an open decomposition decision
- mathematics audit hardened so the assurance register, external assessment scan, and NAEP compression decision artifact must remain aligned

Increment:

- `5%`

Cumulative total:

- `100%`

## Remaining Work

- `0%` remains

The largest remaining implementation work is:

- no required refactor checkpoints remain in the current maintained mathematics graph plan
- future work, if chosen, is now optional extension work rather than required parity or refactor completion work

## Claim Boundary

This tracker records progress against maintained refactor checkpoints. It does not claim that the superior graph has already been achieved.
