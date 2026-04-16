# Foundational Reading Wave 1 Supersession Table

## Purpose

Define how the current foundational-reading nodes would be superseded if Wave 1 is executed.

This table exists to prevent ambiguous migration when the canonical graph eventually changes.

## Supersession Table

| Legacy node | Legacy role | Proposed replacement nodes | Migration note |
| --- | --- | --- | --- |
| `F1` | alphabetic principle and sound-symbol mapping | `FR1`, `FR2` | split direct correspondence control from bidirectional print-encoding understanding |
| `F2` | decoding and encoding simple words | `FR3`, `FR4` | split controlled pattern application from generalized word-level decoding |
| `F3` | automatic word recognition and connected text fluency | `FR5`, `FR6` | split automatic recognition from connected-text accuracy, pacing, and tracking |

## Transitional Interpretation Rules

Until canonical mutation occurs:

- `F1`, `F2`, and `F3` remain the only authoritative foundational-reading node ids
- `FR1` through `FR6` are proposal ids only
- no learner-state records should be rewritten from `F*` ids to `FR*` ids by automation
- no standards links should be copied from `F*` ids to `FR*` ids without explicit authored remapping

## Migration Rules After Canonical Mutation

If Wave 1 is implemented, the migration rules should be:

1. preserve the legacy-to-replacement table in repository history and domain docs
2. mark `F1`, `F2`, and `F3` as superseded rather than silently deleting them from historical references
3. require node-package scaffolds for all `FR` nodes before the graph mutation lands
4. regenerate overlays and exports only after standards and dependency changes are authored

## Cross-Branch Risk Notes

The main migration risk is downstream ambiguity around the current role of `F2`.

Today, `F2` feeds:

- `R2`
- `L2`
- `W2`

After Wave 1, those edges must be rewritten intentionally. The likely decision surface is:

- `FR3` if controlled simple-pattern success is enough
- `FR4` if generalized word-level control is the actual prerequisite

That distinction matters because it changes both learner-state meaning and intervention routing.

## Claim Boundary

This table documents intended supersession logic only. It does not yet change the live graph or any standards map.
