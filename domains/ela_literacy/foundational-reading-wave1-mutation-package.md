# Foundational Reading Wave 1 Mutation Package

## Purpose

Define the first canonical graph-fidelity mutation package for ELA/literacy by replacing the compressed foundational-reading branch with a higher-resolution node layer.

This package is the first concrete implementation step toward bringing the ELA/literacy graph closer to the mathematics graph's level of dependency precision and node granularity.

This document is still proposal-state. It does not yet mutate `master-knowledge-graph.yaml`.

## Scope

Wave 1 covers only the foundational-reading branch currently represented by:

- `F1`
- `F2`
- `F3`

Wave 1 introduces the proposed replacement nodes:

- `FR1`
- `FR2`
- `FR3`
- `FR4`
- `FR5`
- `FR6`

Wave 1 does not yet revise:

- `R1` through `R3`
- `W2` through `W5`
- `R6`, `A1`, or `A2`

## Why This Wave Goes First

This is the strongest next move for graph parity because it resolves one of the largest remaining abstraction gaps in the ELA spine:

- `F1` currently combines initial mapping and bidirectional print encoding
- `F2` currently combines controlled pattern application and broader word-level generalization
- `F3` currently combines automatic recognition with connected-text fluency and tracking

Mathematics already tends to separate capability boundaries at this level of instructional consequence. ELA/literacy should do the same where the distinctions are mastery-relevant.

## Wave 1 Replacement Nodes

### `FR1` Phoneme-Grapheme Mapping

Role:

- isolate direct sound-symbol correspondences and retrieval

### `FR2` Print-Encoding Principle And Bidirectional Mapping

Role:

- establish that print encodes spoken language and that the mapping works in both decoding-like and encoding-like directions

### `FR3` Simple-Pattern Decoding And Encoding

Role:

- apply mapping knowledge to tightly controlled simple word patterns

### `FR4` Word-Level Decoding Generalization

Role:

- distinguish generalized word-level control from item-by-item rehearsal

### `FR5` Orthographic Consolidation And Automatic Word Recognition

Role:

- isolate increasing automaticity and orthographic consolidation from controlled decoding

### `FR6` Connected-Text Fluency And Tracking

Role:

- isolate connected-text accuracy, pacing, and tracking from word-level recognition alone

## Proposed Dependency Logic

The proposed Wave 1 dependency path is:

`P3 + P4 -> FR1 -> FR2 -> FR3 -> FR4 -> FR5 -> FR6`

`P2 -> FR6`

Rationale:

- `FR1` requires phonological awareness and alphabet knowledge
- `FR2` should not be assumed until direct mapping is stable
- `FR3` represents first controlled application
- `FR4` should represent generalization beyond rehearsed items
- `FR5` requires enough repeated accurate decoding to support consolidation
- `FR6` depends on both recognition growth and print-tracking control

## Canonical Graph Change Summary

Wave 1 would:

- retire or supersede 3 current nodes: `F1`, `F2`, `F3`
- add 6 replacement nodes: `FR1` through `FR6`
- increase net graph size by 3 nodes

Projected graph effect:

- current graph size: 26
- post-Wave-1 projected graph size: 29

This is a modest but meaningful fidelity increase. The point is not size growth; the point is cleaner mastery boundaries and better downstream intervention logic.

## Immediate Cross-Branch Effects

Wave 1 should preserve cross-branch continuity with the existing graph by treating these connections as the provisional compatibility posture:

- `R2` should continue to depend on the equivalent of current `F2`
- `L2` should continue to depend on the equivalent of current `F2`
- `W2` should continue to depend on the equivalent of current `F2`

Under the proposed replacement layer, that likely means:

- `R2` shifts to depend on `FR3` or `FR4`
- `L2` shifts to depend on `FR3` or `FR4`
- `W2` shifts to depend on `FR3` or `FR4`

For Wave 1, the safest provisional posture is:

- use `FR3` as the minimum threshold for early sentence-level access
- use `FR4` where the dependency is meant to imply generalized word-level control rather than rehearsed-pattern success

These final cross-branch dependency decisions should be locked only when the canonical graph mutation is actually executed.

## Required Companion Artifacts

Wave 1 implementation planning requires these companion artifacts:

- [foundational-reading-wave1-proposed-graph-slice.yaml](foundational-reading-wave1-proposed-graph-slice.yaml)
- [foundational-reading-wave1-supersession-table.md](foundational-reading-wave1-supersession-table.md)
- [foundational-reading-wave1-node-package-scaffold-plan.md](foundational-reading-wave1-node-package-scaffold-plan.md)

## Implementation Sequence

Wave 1 should execute in this order:

1. stabilize replacement ids, names, and dependency logic
2. define legacy supersession handling for `F1` through `F3`
3. scaffold node packages for `FR1` through `FR6`
4. define standards-map replacement entries
5. update early-literacy runtime and attachment registries
6. revise the canonical graph
7. regenerate standards overlay and export surfaces
8. update validation rules to expect the replacement layer

## Exit Criteria

Wave 1 is ready for canonical execution only when:

1. the replacement graph slice is stable
2. supersession rules are explicit
3. scaffold expectations for all `FR` nodes are documented
4. downstream dependency revisions are identified
5. standards and generated overlay regeneration can be executed without ambiguity

## Claim Boundary

This mutation package is a governed preparation artifact. The authoritative ELA/literacy graph remains unchanged until a future revision explicitly applies this package.
