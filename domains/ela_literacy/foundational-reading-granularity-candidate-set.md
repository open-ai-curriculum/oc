# Foundational Reading Granularity Candidate Set

## Purpose

Propose a higher-fidelity candidate node set for the compressed foundational-reading stretch currently represented by:

- `F1`
- `F2`
- `F3`

This document does not change the canonical graph. It defines the strongest next candidates for a future graph revision.

## Current Compression Problem

The current foundational-reading branch compresses several distinct mastery boundaries into three nodes:

- alphabetic principle
- early decoding and encoding
- connected-text fluency

That is operationally acceptable for a first governed spine, but likely too coarse for long-term parity with the mathematics graph's fidelity.

## Candidate Replacement Structure

### FR1. Phoneme-Grapheme Mapping

Purpose:

- isolate direct sound-symbol mapping from later orthographic or word-level application

Likely dependencies:

- `P3`
- `P4`

Would absorb from current graph:

- the most basic layer of current `F1`

### FR2. Print-Encoding Principle And Bidirectional Mapping

Purpose:

- establish that print encodes spoken language and that mapping works in both reading-like and writing-like directions

Likely dependencies:

- `FR1`

Would absorb from current graph:

- the explanatory and bidirectional-transfer layer of current `F1`

### FR3. Simple-Pattern Decoding And Encoding

Purpose:

- isolate application of mapping knowledge to highly controlled simple-word patterns

Likely dependencies:

- `FR2`

Would absorb from current graph:

- the initial controlled layer of current `F2`

### FR4. Word-Level Decoding Generalization

Purpose:

- separate rehearsed-item decoding from generalized word-level control across changed simple-word sets

Likely dependencies:

- `FR3`

Would absorb from current graph:

- the generalization and anti-guessing layer of current `F2`

### FR5. Orthographic Consolidation And Automatic Word Recognition

Purpose:

- separate controlled decoding from growing automatic recognition of known words and patterns

Likely dependencies:

- `FR4`

Would absorb from current graph:

- the automatic-recognition component of current `F3`

### FR6. Connected-Text Fluency And Tracking

Purpose:

- isolate connected-text pacing, tracking, and accuracy from word-recognition alone

Likely dependencies:

- `FR5`
- `P2`

Would absorb from current graph:

- the connected-text fluency and tracking layer of current `F3`

## Proposed Dependency Logic

`P3 + P4 -> FR1 -> FR2 -> FR3 -> FR4 -> FR5 -> FR6`

`P2 -> FR6`

## Why This Split Is Defensible

This candidate set would create cleaner mastery boundaries between:

- mapping knowledge
- application to controlled words
- generalization beyond practiced items
- automatic recognition
- connected-text fluency

Those are all meaningful instructional and failure-mode distinctions, not arbitrary node inflation.

## Recommended Near-Term Use

Use this candidate set as the starting proposal when the repository begins canonical graph-fidelity expansion in the foundational-reading branch.

## Claim Boundary

This is a proposal artifact only. It does not revise the authoritative graph.
