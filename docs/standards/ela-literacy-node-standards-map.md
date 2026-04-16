---
id: ela-literacy-node-standards-map
type: standard
domain: ela-literacy-standards
status: draft
version: "0.1"
dependencies: [ela-literacy-content-standards-baseline, ela-literacy-performance-standards-baseline, ccss-ela-literacy, ela-literacy-state-standards-registry]
tags: [standards, ela, literacy, mapping, node-alignment]
last_updated: "2026-04-14"
related: [standards-index, ela-literacy-content-standards-baseline, ela-literacy-performance-standards-baseline, ela-literacy-state-standards-registry, ccss-index]
standard_family: ela-literacy-node-standards-map
standard_subject: literacy
standards_version: ela-literacy-node-standards-map-2026-04-14
standards_track: current
standards_effective_as_of: "2026-04-14"
supersedes_standards_version: []
---

# ELA/Literacy Node Standards Map

## Purpose

This document records the current node-to-standards mapping surface for the `ela_literacy` domain.

It maps the currently scaffolded ELA/literacy nodes to:

- the repository ELA/literacy content baseline
- the repository ELA/literacy performance baseline
- the Common Core State Standards for ELA and Literacy family artifact
- every codified state ELA/literacy profile currently maintained for the `ela_literacy` domain

The current map is intentionally conservative:

- official identifier-level mappings are deferred
- pre-kindergarten and pre-standard readiness nodes are marked clearly when they sit before the current CCSS K-12 surface
- nodes that bridge more than one literacy strand preserve multi-strand coverage notes rather than forcing a false single-label match

## Current Coverage

- total mapped ELA/literacy nodes: `26`
- CCSS direct mapping nodes: `22`
- CCSS partial readiness alignment nodes: `3`
- CCSS out-of-scope current baseline nodes: `1`
- state profiles included per node: `5`

### CCSS Mapping Status Counts

- `mapped`: `22`
- `partial_readiness_alignment`: `3`
- `out_of_scope_current_ccss_baseline`: `1`

### State Profile Mapping Status Counts

- `inherits_canonical_literacy_baseline_with_state_metadata`: `22`
- `requires_state_identifier_crosswalk_from_canonical_literacy_baseline`: `88`
- `conceptual_alignment_only_until_state_crosswalk_exists`: `15`
- `out_of_scope_current_profile`: `5`

## Mapping Method

Each node record currently contains:

- canonical literacy content-baseline alignment
- canonical literacy performance expectation
- CCSS ELA/literacy mapping posture
- state-profile mapping posture for each currently codified literacy state profile
- a crosswalk scaffold for future reviewed identifier targets across canonical, CCSS, and state standards surfaces

The current map does not yet claim reviewed code-level equivalence.

The current state-profile layer is intentionally conservative:

- California inherits the canonical literacy baseline posture where the state surface remains baseline-aligned, while preserving ELD-related state metadata
- New York and Tennessee are treated as baseline-derived and therefore require future reviewed identifier crosswalks from the canonical baseline
- Texas and Virginia are treated as state-distinct and therefore also require reviewed identifier crosswalks
- readiness nodes remain marked as conceptual-only or out of scope where the current state profiles do not justify a stronger claim

## Crosswalk Scaffold Layer

The machine-readable map now includes a placeholder crosswalk scaffold for every node.

That scaffold is intentionally non-final. It exists to support the next iteration of mapping work without creating false precision now.

For each node, the scaffold records:

- canonical alignment status for future repository and CCSS identifier assignment
- placeholder target units for later CCSS identifier review
- placeholder target units for each codified state profile
- a recommended next-step note for the mapping work queue
- a family batch group so identifier work can be reviewed by literacy cluster rather than only one node at a time

## Batch Group Layer

The machine-readable map now also includes family-level batch groups in the metadata and on each node scaffold.

These groups follow the current `ela_literacy` graph families:

- `O`: oral language and listening
- `P`: print concepts and symbol control
- `F`: foundational decoding and encoding
- `R`: reading comprehension and analysis
- `L`: language conventions and vocabulary
- `W`: writing and composition
- `A`: advanced secondary and AP-adjacent literacy

The purpose of the batch layer is to support later reviewed identifier work in coherent sets:

- readiness-heavy families can be handled together where boundary questions dominate
- foundational families can be stabilized before higher-order comprehension claims are hardened
- writing and advanced-literacy families can be reviewed with their cross-strand dependencies intact

## Sequencing And Dependency Gates

The machine-readable map now includes sequencing metadata for each family batch and a package-level family review sequence.

The current recommended order is:

1. `O` and `P`
2. `F` and `L`
3. `R`
4. `W`
5. `A`

This order is intentional:

- oral-language and early print boundaries should be resolved before stronger foundational claims are assigned
- foundational decoding and language control should be stabilized before comprehension mappings are hardened
- writing should follow reviewed reading, language, and transcription dependencies
- advanced secondary literacy should remain last because it depends on multiple upstream family decisions

Each family batch now carries explicit dependency gates, unlock conditions, and completion signals so later mapping work can preserve the repository's dependency logic instead of treating standards alignment as a flat tagging exercise.

## Review Checklists And Exit Criteria

The machine-readable map now also includes a review checklist and exit criteria for each family batch.

These additions make the scaffold operational rather than only descriptive. A family batch should not advance simply because it appears next in the sequence. It should advance only when:

- its review checklist has been worked through
- its exit criteria are satisfied
- its dependency gates are still respected

This matters especially for literacy work because apparent standards alignment can become misleading if readiness boundaries, foundational access, language dependencies, or state-specific structural differences are ignored.

The scaffold should be treated as planning metadata only until reviewed identifier-level crosswalks are authored.

## Full Machine-Readable Map

- [ela-literacy-node-standards-map.json](ela-literacy-node-standards-map.json)

## Canonical Node Summary

| Node | Grade band | Primary literacy domain | CCSS status | Canonical anchor |
| --- | --- | --- | --- | --- |
| `O1` | Pre-K | oral language readiness before the current CCSS baseline | `out_of_scope_current_ccss_baseline` | joint attention, response readiness, and turn-taking before formal K-12 speaking and listening standards |
| `O2` | Pre-K to Kindergarten | speaking and listening readiness / language comprehension | `partial_readiness_alignment` | comprehend oral directions, routines, and teacher language as readiness for formal speaking and listening standards |
| `O3` | Kindergarten to Grade 1 | speaking and listening | `mapped` | recount, explain, sequence events, and speak with enough clarity to support later reading and writing work |
| `P1` | Pre-K to Kindergarten | print concepts and foundational reading skills | `partial_readiness_alignment` | handle books, track print direction, and distinguish print from pictures as readiness for foundational reading standards |
| `P2` | Kindergarten to Grade 1 | print concepts and foundational reading skills | `mapped` | track words and spaces in connected text and coordinate one-to-one movement through print |
| `P3` | Pre-K to Kindergarten | phonological awareness and foundational reading skills | `partial_readiness_alignment` | build phonological awareness prior to or alongside formal kindergarten foundational skills expectations |
| `P4` | Kindergarten to Grade 1 | phonics and word recognition / print production readiness | `mapped` | develop alphabet knowledge, letter naming, and letter formation as readiness for foundational reading and early writing standards |
| `F1` | Kindergarten to Grade 1 | foundational reading skills | `mapped` | connect phonemes and graphemes through the alphabetic principle and sound-symbol mapping |
| `F2` | Kindergarten to Grade 2 | foundational reading skills / early writing production | `mapped` | decode and encode simple words with explicit sound-symbol control |
| `F3` | Grade 1 to Grade 3 | foundational reading skills | `mapped` | read connected text with increasing automaticity, accuracy, and fluency |
| `R1` | Kindergarten to Grade 1 | reading literature / reading informational text / speaking and listening | `mapped` | comprehend shared or read-aloud text literally and answer orally with anchored meaning |
| `R2` | Grade 1 to Grade 2 | reading literature / reading informational text | `mapped` | comprehend supported text at the sentence level and explain meaning with enough text awareness to support evidence work |
| `R3` | Grade 2 to Grade 4 | reading literature / reading informational text / writing | `mapped` | respond to text with relevant evidence, anchored inference, and question-aware explanation |
| `R4` | Grades 4-8 | reading literature | `mapped` | analyze literary structure, theme, character, and interpretation across increasingly complex texts |
| `R5` | Grades 4-8 | reading informational text | `mapped` | analyze informational structure, author claims, source use, and support in nonfiction texts |
| `R6` | Grades 6-12 | literacy in history/social studies, science, and technical subjects / advanced reading analysis | `mapped` | synthesize across texts, analyze rhetoric, and perform disciplinary literacy work using evidence and structure |
| `L1` | Grade 1 to Grade 2 | language / writing / speaking and listening | `mapped` | form complete sentences with basic conventions and controlled oral-to-written transfer |
| `L2` | Grades 2-6 | language | `mapped` | use morphology, vocabulary knowledge, and academic language to support comprehension and production |
| `L3` | Grades 4-12 | language / writing | `mapped` | revise syntax, style, and language control for clarity, coherence, and rhetorical effect |
| `W1` | Kindergarten to Grade 1 | writing | `mapped` | capture ideas through drawing, dictation, labeling, and early written representation |
| `W2` | Grade 1 to Grade 3 | writing | `mapped` | generate and transcribe complete sentences with manageable transcription load |
| `W3` | Grades 2-5 | writing / reading response | `mapped` | organize paragraphs and integrate source-based evidence in a bounded written response |
| `W4` | Grades 4-12 | writing | `mapped` | write multi-paragraph explanation, narrative, and argument with controlled organization |
| `W5` | Grades 6-12 | writing / research | `mapped` | synthesize sources, manage citation, and sustain research-based writing |
| `A1` | Grades 9-12 and AP-adjacent | advanced rhetorical analysis and synthesis | `mapped` | extend analytical reading and writing into advanced rhetorical synthesis and argument |
| `A2` | Grades 9-12 and AP-adjacent | advanced literary interpretation | `mapped` | extend literary analysis into intertextual argument and advanced interpretation |

## Claim Boundary

This map records repository alignment posture for the current ELA/literacy scaffold. It does not certify legal compliance, psychometric validity, reviewed identifier-level equivalence, or classroom sufficiency.
