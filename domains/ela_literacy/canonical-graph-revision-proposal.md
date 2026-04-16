# Canonical Graph Revision Proposal

## Purpose

Consolidate the current ELA/literacy graph-fidelity candidate sets into a single revision package that defines how the authoritative graph could expand from the current 26-node structure toward mathematics-level fidelity.

This document is a proposal artifact. It does not revise the canonical graph in `master-knowledge-graph.yaml`.

## Revision Goal

The current ELA/literacy graph is structurally coherent and operationally usable, but several stretches still compress multiple distinct mastery boundaries into single nodes.

The revision goal is to:

- preserve the current governed graph as the authoritative runtime baseline
- identify the next canonical node layer that should replace compressed regions
- define the migration order and compatibility expectations before canonical graph mutation
- preserve standards-overlay, learner-state, and intervention integrity during expansion

## Current Baseline

The authoritative ELA/literacy graph currently contains 26 nodes:

- `O1` through `O3`
- `P1` through `P4`
- `F1` through `F3`
- `R1` through `R6`
- `L1` through `L3`
- `W1` through `W5`
- `A1` through `A2`

The strongest remaining compression pressure is concentrated in four regions:

- foundational reading
- comprehension
- writing and composition
- advanced analysis

## Proposed Expansion Package

If all currently identified candidate replacements were adopted, the next higher-fidelity ELA/literacy graph would add the following replacement layer.

### Foundational Reading Replacement Layer

Replace compressed foundational nodes with:

- `FR1` phoneme-grapheme mapping
- `FR2` print-encoding principle and bidirectional mapping
- `FR3` simple-pattern decoding and encoding
- `FR4` word-level decoding generalization
- `FR5` orthographic consolidation and automatic word recognition
- `FR6` connected-text fluency and tracking

Current node coverage affected:

- `F1`
- `F2`
- `F3`

### Comprehension Replacement Layer

Replace compressed comprehension nodes with:

- `RC1` literal comprehension of shared text
- `RC2` inferential and integrative comprehension of shared text
- `RC3` sentence-level meaning construction
- `RC4` short-passage integration and local coherence
- `RC5` evidence selection from text
- `RC6` evidence explanation and text-grounded response

Current node coverage affected:

- `R1`
- `R2`
- `R3`

### Writing And Composition Replacement Layer

Replace compressed writing and composition nodes with:

- `WC1` sentence planning and generation
- `WC2` sentence transcription and execution
- `WC3` paragraph structure and coherence
- `WC4` source integration in structured response
- `WC5` multi-paragraph development and coherence
- `WC6` genre-controlled explanation, narrative, and argument
- `WC7` research synthesis
- `WC8` attribution and citation control

Current node coverage affected:

- `W2`
- `W3`
- `W4`
- `W5`

### Advanced Analysis Replacement Layer

Replace compressed advanced-analysis nodes with:

- `AC1` cross-text synthesis and source coordination
- `AC2` disciplinary and rhetorical reading
- `AC3` advanced rhetorical analysis and argument synthesis
- `AC4` literary interpretation and comparative analysis
- `AC5` intertextual literary argument

Current node coverage affected:

- `R6`
- `A1`
- `A2`

## Net Graph Impact

If all four candidate sets were adopted, the graph would change as follows:

- current graph size: 26 nodes
- replacement candidates added: 25 nodes
- compressed legacy nodes retired or superseded: 12 nodes
- resulting projected graph size: 39 nodes

This would still remain materially smaller than the current mathematics graph, but it would significantly reduce the largest current abstraction gaps in the ELA/literacy spine.

## Proposed Canonical Dependency Spine

The candidate sets imply this major-path dependency shape:

`O1 -> O2 -> O3`

`O2 + O3 -> P1 -> P2`

`O3 + P2 -> P3 -> P4 -> FR1 -> FR2 -> FR3 -> FR4 -> FR5 -> FR6`

`O3 + P1 -> RC1 -> RC2`

`F2/FR3 + RC1 -> RC3 -> RC4 -> RC5 -> RC6`

`W1 + L1 -> WC1 -> WC2 -> WC3 -> WC4 -> WC5 -> WC6 -> WC7 -> WC8`

`R4 + R5 -> AC1 -> AC2 -> AC3`

`R4 + W4/WC5 + L3 -> AC4 -> AC5`

This should be treated as migration intent, not canonical dependency law. Final dependencies should be set only when the replacement nodes are formally written into the master graph and their node packages are authored.

## Legacy-To-Replacement Mapping

### Foundational Reading

- `F1` would be decomposed into `FR1` and `FR2`
- `F2` would be decomposed into `FR3` and `FR4`
- `F3` would be decomposed into `FR5` and `FR6`

### Comprehension

- `R1` would map most directly to `RC1`, with inferential load shifted into `RC2`
- `R2` would be decomposed into `RC3` and `RC4`
- `R3` would be decomposed into `RC5` and `RC6`

### Writing And Composition

- `W2` would be decomposed into `WC1` and `WC2`
- `W3` would be decomposed into `WC3` and `WC4`
- `W4` would be decomposed into `WC5` and `WC6`
- `W5` would be decomposed into `WC7` and `WC8`

### Advanced Analysis

- `R6` would be decomposed into `AC1` and `AC2`
- `A1` would map most directly to `AC3`
- `A2` would be decomposed into `AC4` and `AC5`

## Migration Strategy

Canonical graph expansion should proceed in four ordered waves.

### Wave 1. Foundational Reading

Why first:

- highest leverage for early-literacy dependency precision
- strongest payoff for intervention specificity
- strongest connection to both reading and writing routes

Required outputs:

- canonical graph node replacement proposal
- new node package scaffold set for `FR1` through `FR6`
- updated standards map entries
- updated runtime slice for the early-literacy branch
- updated attachment registry for foundational literacy artifacts

### Wave 2. Comprehension

Why second:

- tightly coupled to foundational reading expansion
- creates clearer response and evidence boundaries

Required outputs:

- canonical graph replacement for `R1` through `R3`
- new node package scaffold set for `RC1` through `RC6`
- updated cross-branch links into writing and oral language
- updated standards and overlay regeneration

### Wave 3. Writing And Composition

Why third:

- should inherit clearer reading/comprehension boundaries first
- major improvement in learner-state specificity for writing progression

Required outputs:

- canonical graph replacement for `W2` through `W5`
- new node package scaffold set for `WC1` through `WC8`
- updated runtime slices for composition and sourced writing
- updated attachment registry for composition artifacts

### Wave 4. Advanced Analysis

Why fourth:

- lowest urgency compared with frontier literacy fidelity
- depends on a more mature mid-graph beneath it

Required outputs:

- canonical graph replacement for `R6`, `A1`, and `A2`
- new node package scaffold set for `AC1` through `AC5`
- updated capstone runtime and standards overlays

## Compatibility Rules

Until the canonical graph is formally revised, all generated overlays and node-package validations must continue to treat the 26-node graph as authoritative.

When the migration begins:

- legacy node ids must remain documented in a supersession table
- standards mappings must not be silently copied without explicit human-reviewed remapping
- learner-state examples must preserve a clear distinction between legacy and replacement ids
- intervention maps must be regenerated, not inferred by string substitution
- export surfaces must be regenerated only after canonical graph mutation is complete

## Standards And Overlay Implications

The standards overlay currently maps one standards surface to each of the 26 authoritative nodes.

Graph-fidelity expansion will require:

- replacement-node standards mapping review
- supersession handling for legacy node ids
- regenerated overlay outputs for markdown, YAML, JSON, Gephi, and Neo4j exports
- explicit documentation where one current node is being split into multiple standards-bearing nodes

This is especially important because the repository must not invent standards alignment during graph mutation.

## Acceptance Criteria For A Future Canonical Revision

Do not revise the authoritative graph until all of the following are ready for the target wave:

1. a wave-specific replacement proposal is written and reviewed
2. replacement node ids, names, and dependencies are stable
3. node-package scaffolds exist for all replacement nodes in that wave
4. standards-map updates are explicitly authored
5. runtime and attachment registry changes are defined
6. validators are updated to recognize the replacement layer
7. generated overlays and exports can be regenerated without breaking repository integrity

## Immediate Next Artifact Recommendation

The next implementation artifact should be a wave-specific canonical graph mutation package for Wave 1:

- revised foundational-reading graph slice
- provisional `FR1` through `FR6` node list in YAML form
- legacy-to-replacement supersession table
- node package scaffold plan

The current Wave 1 package artifacts are:

- [foundational-reading-wave1-mutation-package.md](foundational-reading-wave1-mutation-package.md)
- [foundational-reading-wave1-proposed-graph-slice.yaml](foundational-reading-wave1-proposed-graph-slice.yaml)
- [foundational-reading-wave1-supersession-table.md](foundational-reading-wave1-supersession-table.md)
- [foundational-reading-wave1-node-package-scaffold-plan.md](foundational-reading-wave1-node-package-scaffold-plan.md)

That is the narrowest next step that materially advances the ELA/literacy graph toward mathematics-level fidelity.

## Claim Boundary

This document defines a proposed canonical graph revision path only. The authoritative ELA/literacy graph remains the 26-node graph until a future wave-specific revision is explicitly implemented.
