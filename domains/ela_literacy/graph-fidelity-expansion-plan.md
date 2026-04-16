# Graph Fidelity Expansion Plan

## Purpose

Define where the current ELA/literacy graph is likely too compressed and how the repository should expand it without breaking dependency integrity.

## Core Position

The current 26-node graph is operationally useful, but it likely compresses multiple meaningful literacy capabilities into single nodes.

This is acceptable for an initial governed spine. It is not necessarily the final fidelity level required for domain-scale parity with mathematics.

## Compression Areas

### 1. Foundational Reading Compression

Current compressed stretch:

- `F1`
- `F2`
- `F3`

Likely hidden distinctions:

- sound-symbol control versus orthographic pattern control
- blending/segmenting application versus word-level decoding generalization
- automaticity versus prosody versus connected-text fluency

### 2. Comprehension Compression

Current compressed stretch:

- `R1`
- `R2`
- `R3`

Likely hidden distinctions:

- literal comprehension versus inferential comprehension
- single-sentence meaning versus short-passage integration
- evidence selection versus evidence explanation

### 3. Writing Compression

Current compressed stretch:

- `W2`
- `W3`
- `W4`
- `W5`

Likely hidden distinctions:

- transcription load versus sentence-generation quality
- paragraph structure versus source integration
- multi-paragraph coherence versus genre-specific control
- synthesis versus citation/attribution control

### 4. Advanced Analysis Compression

Current compressed stretch:

- `R6`
- `A1`
- `A2`

Likely hidden distinctions:

- disciplinary literacy versus rhetorical analysis
- rhetorical synthesis versus source orchestration
- literary interpretation versus intertextual comparative argument

## Expansion Rules

Graph-fidelity expansion should obey these rules:

1. do not split nodes only to imitate mathematics size
2. split nodes only when the compressed node is hiding meaningful mastery boundaries
3. preserve upstream and downstream dependency clarity
4. preserve explicit claim boundaries where standards or review posture remain unresolved

## Recommended Expansion Order

### Phase A. Foundational And Comprehension Expansion

Highest-value candidate frontier:

- expand `F1` through `R3`

Reason:

- this region has the highest instructional leverage
- this region anchors both reading and writing progression

### Phase B. Writing And Composition Expansion

Next candidate frontier:

- expand `W2` through `W5`

Reason:

- this region carries major literacy complexity currently compressed into a few nodes

### Phase C. Advanced Analysis Expansion

Final candidate frontier:

- expand `R6`, `A1`, and `A2`

Reason:

- advanced nodes should be split only after the middle of the graph is more mature

## Immediate Deliverable Recommendation

Before editing the canonical graph, the next artifact should be a named candidate-node proposal set for:

- foundational reading granularity
- early comprehension granularity
- writing/composition granularity
- advanced analysis granularity

The current candidate proposal artifacts are:

- [foundational-reading-granularity-candidate-set.md](foundational-reading-granularity-candidate-set.md)
- [comprehension-granularity-candidate-set.md](comprehension-granularity-candidate-set.md)
- [writing-composition-granularity-candidate-set.md](writing-composition-granularity-candidate-set.md)
- [advanced-analysis-granularity-candidate-set.md](advanced-analysis-granularity-candidate-set.md)

The current first-wave mutation package artifacts are:

- [foundational-reading-wave1-mutation-package.md](foundational-reading-wave1-mutation-package.md)
- [foundational-reading-wave1-proposed-graph-slice.yaml](foundational-reading-wave1-proposed-graph-slice.yaml)
- [foundational-reading-wave1-supersession-table.md](foundational-reading-wave1-supersession-table.md)
- [foundational-reading-wave1-node-package-scaffold-plan.md](foundational-reading-wave1-node-package-scaffold-plan.md)

## Claim Boundary

This plan defines graph-fidelity intent only. It does not yet alter the authoritative ELA/literacy graph.
