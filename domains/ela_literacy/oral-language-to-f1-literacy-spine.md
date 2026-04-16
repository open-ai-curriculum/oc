# Oral-Language To FR1 Literacy Spine

## Purpose

Define the full upstream dependency spine required before `FR1` phoneme-grapheme mapping is a legitimate target.

The current literacy graph is broader than this spine. This document answers a narrower question:

- what must exist before formal alphabetic-principle claims are instructionally valid

## Design Principle

The repository should not treat `FR1` as the beginning of literacy.

Formal sound-symbol mapping depends on earlier access conditions in:

- shared attention
- oral-language comprehension
- phonological awareness
- print access
- alphabet knowledge

## Spine Families

### A. Oral-Language Readiness

#### O1. Joint Attention, Turn-Taking, And Response Readiness

- learner sustains shared attention in simple interaction
- learner participates in turn-taking and response routines

#### O2. Oral Language Comprehension For Instructions And Routines

- learner follows common spoken directions
- learner demonstrates practical oral-language comprehension

#### O3. Oral Recount, Explanation, And Sequence Language

- learner recounts and sequences simple experiences
- learner produces enough oral structure to support later explanation and language transfer

### B. Print Access And Symbol-Control Foundations

#### P1. Book Handling, Print Awareness, And Directionality

- learner distinguishes print from pictures
- learner follows basic print direction and text orientation

#### P2. Concept Of Word, Spacing, And Text Tracking

- learner tracks words in supported print
- learner coordinates movement across connected text surfaces

#### P4. Alphabet Knowledge And Letter Formation

- learner recognizes letters as literacy symbols
- learner produces letters with enough control to support early encoding

### C. Spoken-Language Sound Structure

#### P3. Phonological Awareness

- learner notices and manipulates spoken language units
- learner can respond to bounded rhyme, syllable, and phoneme tasks

### D. Formal Literacy Entry

#### FR1. Phoneme-Grapheme Mapping

- learner links phonemes and graphemes with explicit bidirectional control

## Minimal Dependency Flow

The minimum upstream logic is:

`O1 -> O2 -> O3`

`O1 -> P1 -> P2`

`O2 -> P3`

`P1 + P3 -> P4`

`P3 + P4 -> FR1`

## Direct Predecessors To FR1

`FR1` should not be modeled as dependency-free. The direct predecessor set should be:

- `P3` phonological awareness
- `P4` alphabet knowledge and letter formation

Those direct predecessors themselves depend on:

- `O2` oral-language comprehension for instructions and routines
- `P1` book handling, print awareness, and directionality

## Boundary Rule

`O1`, `O2`, and `P1` are not optional prefaces. They are governed entry conditions that determine whether later formal literacy evidence is valid or confounded.

## Immediate Use

This spine should be used whenever the repository asks:

- whether `FR1` is instructionally legitimate
- what upstream return is appropriate when `FR1` is unstable
- which readiness surfaces must be stabilized before standards hardening for foundational reading

## Claim Boundary

This document defines the minimum upstream spine for `FR1`. It does not by itself claim reviewed standards alignment or classroom-ready instructional sequencing.
