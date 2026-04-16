# Advanced Analysis Granularity Candidate Set

## Purpose

Propose a higher-fidelity candidate node set for the compressed advanced-analysis stretch currently represented by:

- `R6`
- `A1`
- `A2`

This document does not change the canonical graph. It defines the strongest next candidates for a future graph revision.

## Current Compression Problem

The current advanced-analysis layer compresses:

- disciplinary literacy
- rhetorical analysis
- cross-text synthesis
- advanced literary interpretation
- intertextual argument

into a very small number of nodes.

That is structurally coherent, but likely too compressed for long-term capstone fidelity.

## Candidate Replacement Structure

### AC1. Cross-Text Synthesis And Source Coordination

Purpose:

- separate broad cross-source synthesis from explicit rhetorical analysis

Likely dependencies:

- `R4`
- `R5`

Would absorb from current graph:

- the source-coordination portion of `R6`

### AC2. Disciplinary And Rhetorical Reading

Purpose:

- isolate disciplinary feature analysis and rhetorical reading from synthesis alone

Likely dependencies:

- `AC1`

Would absorb from current graph:

- the rhetorical and disciplinary-reading portion of `R6`

### AC3. Advanced Rhetorical Analysis And Argument Synthesis

Purpose:

- separate capstone rhetorical interpretation from general cross-text reading

Likely dependencies:

- `AC2`
- `W5`
- `L3`

Would absorb from current graph:

- much of current `A1`

### AC4. Literary Interpretation And Comparative Analysis

Purpose:

- separate advanced literary interpretation from full intertextual argument

Likely dependencies:

- `R4`
- `W4`
- `L3`

Would absorb from current graph:

- the interpretive core of `A2`

### AC5. Intertextual Literary Argument

Purpose:

- isolate multi-text literary argument from single-text advanced interpretation

Likely dependencies:

- `AC4`

Would absorb from current graph:

- the intertextual and comparative layer of `A2`

## Proposed Dependency Logic

`R4 + R5 -> AC1 -> AC2`

`AC2 + W5 + L3 -> AC3`

`R4 + W4 + L3 -> AC4 -> AC5`

## Why This Split Is Defensible

This candidate set would create cleaner mastery boundaries between:

- synthesis and rhetorical analysis
- single-text literary interpretation and intertextual literary argument

That would likely improve capstone clarity without over-fragmenting the graph.

## Recommended Near-Term Use

Use this candidate set only after foundational, comprehension, and writing/composition expansion candidates are resolved first.

## Claim Boundary

This is a proposal artifact only. It does not revise the authoritative graph.
