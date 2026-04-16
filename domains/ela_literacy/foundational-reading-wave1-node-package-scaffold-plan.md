# Foundational Reading Wave 1 Node Package Scaffold Plan

## Purpose

Define the scaffold expectations for the six replacement node packages required by the foundational-reading Wave 1 graph mutation.

The goal is to ensure that graph-fidelity expansion preserves the same operational package discipline already present in both mathematics and the current ELA/literacy nodes.

## Replacement Node Package Set

Wave 1 will require package directories for:

- `fr1-phoneme-grapheme-mapping`
- `fr2-print-encoding-principle-and-bidirectional-mapping`
- `fr3-simple-pattern-decoding-and-encoding`
- `fr4-word-level-decoding-generalization`
- `fr5-orthographic-consolidation-and-automatic-word-recognition`
- `fr6-connected-text-fluency-and-tracking`

## Required Files Per Package

Each Wave 1 replacement node package should include the same operational files required by the current ELA/literacy validator:

- `README.md`
- `node-config.yaml`
- `node-spec.md`
- `verification-model.md`
- `failure-taxonomy.md`
- `intervention-playbook.md`
- `intervention-map.json`
- `learner-state-model.md`
- `learner-state.schema.json`
- `example-learner-states.json`
- `transition-rules.yaml`
- `teacher-observability.md`
- `agent-behavior.md`

## Node-Specific Authoring Priorities

### `FR1`

Highest authoring focus:

- direct phoneme-grapheme retrieval
- stable mapping rather than approximate cueing
- error classification for omission, substitution, and retrieval instability

### `FR2`

Highest authoring focus:

- bidirectional transfer between spoken and printed forms
- evidence that print encodes speech, not just symbol naming
- early encoding-side observability

### `FR3`

Highest authoring focus:

- controlled simple-pattern decoding and encoding
- anti-guessing verification
- distinction between taught-item rehearsal and pattern application

### `FR4`

Highest authoring focus:

- generalization across unfamiliar simple words
- reduction of cue-dependent performance
- learner-state separation from `FR3`

### `FR5`

Highest authoring focus:

- orthographic consolidation signals
- automatic recognition of known words and patterns
- failure distinctions between slow decoding and unstable recognition

### `FR6`

Highest authoring focus:

- connected-text tracking and accuracy
- pacing without losing word integrity
- line tracking and attention interaction with `P2`

## Shared Modeling Requirements

All six node packages should preserve:

- explicit mastery gates
- learner-state observability that distinguishes exposure from control
- failure taxonomies that support targeted intervention routing
- transition rules that do not infer mastery from completion or repetition alone

## Scaffold Sequence

When Wave 1 implementation begins, scaffold in this order:

1. `FR1`
2. `FR2`
3. `FR3`
4. `FR4`
5. `FR5`
6. `FR6`

This order matches the proposed dependency spine and should reduce ambiguity in downstream package authoring.

## Validation Implication

The ELA validator should not require these new node packages until the canonical graph mutation is actually executed.

At the point of execution, validator updates should happen in the same change set as:

- graph mutation
- node package creation
- standards-map updates
- overlay regeneration

## Claim Boundary

This scaffold plan defines required package shape and authoring priorities only. It does not create the node packages themselves.
