# Social Studies Upstream Build Plan

## Purpose

Translate the current social studies entry, systems, and capstone slices into an explicit upstream build sequence for the repository.

## Why This Plan Exists

The social studies graph now has domain-wide topology, standards overlays, assessment overlays, runtime slices, and exports. What it still needs is a documented sequencing rationale for which parts of the graph should be hardened first when moving from scaffold to fuller executable coverage.

## Build Waves

### Wave 1. Shared Inquiry And Entry Foundations

Build first:

- `Q1`
- `Q2`
- `Q3`
- `H1`
- `C1`
- `G1`
- `E1`

Reason:

- these nodes establish the repository's inquiry-first entry surface
- they support every downstream disciplinary branch
- they are already represented in the first artifact and runtime slice

### Wave 2. Middle-Grades Disciplinary Systems

Build next:

- `H2`
- `H3`
- `C2`
- `C3`
- `G2`
- `G3`
- `G4`
- `E2`
- `E3`
- `E4`
- `Q4`
- `Q5`

Reason:

- these nodes provide the first coherent systems-level history, civics, geography, and economics work
- they support source evaluation, representation, public-policy reasoning, and later AP-facing overlays

### Wave 3. Advanced Secondary Comparative And Synthesis Surfaces

Build next:

- `H4`
- `H5`
- `C4`
- `C5`
- `G5`
- `E5`
- `Q6`
- `A1`
- `A2`

Reason:

- these nodes anchor the capstone and AP-facing overlay package
- they create the strongest downstream bridge into public argument, comparative reasoning, and interdisciplinary synthesis

## Operational Rule

When a new upstream wave is hardened:

1. verify node-package dependency integrity
2. verify standards-overlay and state-profile attachment surfaces
3. verify runtime and artifact coverage for the relevant slice
4. update export surfaces
5. record any remaining review-required gaps in the relevant audit documents

## Immediate Next Target

The strongest next hardening target is the inquiry-to-middle-grade bridge:

- `Q2`
- `Q3`
- `Q4`
- `H2`
- `C2`
- `G2`
- `E2`

Why:

- this wave connects the current entry slice to the later systems and AP-facing slices
- it reduces the amount of broad middle-grade compression that still appears in the overlays and audits
