# Comprehension Granularity Candidate Set

## Purpose

Propose a higher-fidelity candidate node set for the compressed comprehension stretch currently represented by:

- `R1`
- `R2`
- `R3`

This document does not change the canonical graph. It defines the strongest next candidates for a future graph revision.

## Current Compression Problem

The current comprehension branch compresses several distinct literacy boundaries into three nodes:

- literal comprehension of shared text
- sentence-level comprehension of supported text
- evidence-based response to text

That leaves important likely distinctions under-modeled.

## Candidate Replacement Structure

### RC1. Literal Comprehension Of Shared Text

Purpose:

- preserve direct recall and literal meaning from shared or read-aloud text

Likely dependencies:

- `O3`
- `P1`

Would remain closest to current:

- `R1`

### RC2. Inferential And Integrative Comprehension Of Shared Text

Purpose:

- separate literal recall from bounded inference and simple integration across a short shared text

Likely dependencies:

- `RC1`

Would absorb from current graph:

- the likely inferential burden currently hidden inside `R1` and early `R3`

### RC3. Sentence-Level Meaning Construction

Purpose:

- isolate sentence-level meaning from broader passage integration

Likely dependencies:

- `F2`
- `RC1`

Would remain closest to current:

- the core of `R2`

### RC4. Short-Passage Integration And Local Coherence

Purpose:

- separate single-sentence meaning from integration across short connected text

Likely dependencies:

- `RC3`
- `F3`

Would absorb from current graph:

- the passage-integration load currently compressed inside later `R2`

### RC5. Evidence Selection From Text

Purpose:

- isolate selecting relevant evidence from explaining or defending it

Likely dependencies:

- `RC4`
- `O3`

Would absorb from current graph:

- the evidence-selection portion of `R3`

### RC6. Evidence Explanation And Text-Grounded Response

Purpose:

- isolate the reasoning link between chosen evidence and a response claim

Likely dependencies:

- `RC5`

Would absorb from current graph:

- the explanation-link layer of current `R3`

## Proposed Dependency Logic

`O3 + P1 -> RC1 -> RC2`

`F2 + RC1 -> RC3 -> RC4`

`RC4 + O3 -> RC5 -> RC6`

`F3 -> RC4`

## Why This Split Is Defensible

This candidate set would create cleaner mastery boundaries between:

- literal and inferential comprehension
- sentence and passage integration
- evidence selection and evidence explanation

Those are instructionally meaningful distinctions that would likely improve failure-mode precision and intervention routing.

## Recommended Near-Term Use

Use this candidate set as the starting proposal when the repository begins canonical graph-fidelity expansion in the comprehension branch.

## Claim Boundary

This is a proposal artifact only. It does not revise the authoritative graph.
