# Writing And Composition Granularity Candidate Set

## Purpose

Propose a higher-fidelity candidate node set for the compressed writing and composition stretch currently represented by:

- `W2`
- `W3`
- `W4`
- `W5`

This document does not change the canonical graph. It defines the strongest next candidates for a future graph revision.

## Current Compression Problem

The current writing branch carries several distinct mastery boundaries inside a relatively small number of nodes:

- sentence generation
- transcription management
- paragraphing
- source integration
- multi-paragraph coherence
- genre control
- synthesis and citation control

That is likely too compressed for long-term graph fidelity.

## Candidate Replacement Structure

### WC1. Sentence Planning And Generation

Purpose:

- isolate turning an intended idea into a complete sentence from transcription burden

Likely dependencies:

- `L1`
- `W1`

Would absorb from current graph:

- the planning layer of `W2`

### WC2. Sentence Transcription And Execution

Purpose:

- separate writing execution load from sentence-generation quality

Likely dependencies:

- `WC1`
- `F2`

Would absorb from current graph:

- the transcription layer of `W2`

### WC3. Paragraph Structure And Coherence

Purpose:

- isolate paragraph organization from source-based support

Likely dependencies:

- `WC2`

Would absorb from current graph:

- the organization component of `W3`

### WC4. Source Integration In Structured Response

Purpose:

- separate paragraph construction from using relevant text support

Likely dependencies:

- `WC3`
- `R3`

Would absorb from current graph:

- the source-based component of `W3`

### WC5. Multi-Paragraph Development And Coherence

Purpose:

- isolate sustained cross-paragraph structure from genre-specific control

Likely dependencies:

- `WC4`

Would absorb from current graph:

- the coherence and sustained-development component of `W4`

### WC6. Genre-Controlled Explanation, Narrative, And Argument

Purpose:

- separate sustained writing generally from adapting structure to explanation, narrative, and argument

Likely dependencies:

- `WC5`
- `R4`
- `R5`

Would absorb from current graph:

- the genre-control component of `W4`

### WC7. Research Synthesis

Purpose:

- isolate multi-source synthesis from citation mechanics

Likely dependencies:

- `WC6`
- `R6`

Would absorb from current graph:

- the synthesis component of `W5`

### WC8. Attribution And Citation Control

Purpose:

- separate source synthesis from attribution and citation management

Likely dependencies:

- `WC7`
- `L3`

Would absorb from current graph:

- the citation-control component of `W5`

## Proposed Dependency Logic

`L1 + W1 -> WC1 -> WC2`

`WC2 -> WC3 -> WC4`

`R3 -> WC4`

`WC4 -> WC5 -> WC6`

`R4 + R5 -> WC6`

`WC6 + R6 -> WC7 -> WC8`

`L3 -> WC8`

## Why This Split Is Defensible

This candidate set would create cleaner mastery boundaries between:

- sentence planning and transcription
- paragraph coherence and source use
- sustained writing and genre control
- synthesis and citation management

Those are strong candidates for real literacy boundary distinctions rather than artificial complexity.

## Recommended Near-Term Use

Use this candidate set as the starting proposal when the repository begins canonical graph-fidelity expansion in writing and composition.

## Claim Boundary

This is a proposal artifact only. It does not revise the authoritative graph.
