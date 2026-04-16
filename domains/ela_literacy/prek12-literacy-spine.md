# Pre-K To Grade 12 Literacy Spine

## Purpose

Define the governed developmental spine for the `ela_literacy` domain from pre-kindergarten readiness through Grade 12 advanced literacy.

This document makes explicit that the domain starts before formal decoding and continues beyond basic reading and writing into disciplinary literacy, rhetoric, synthesis, and advanced literary analysis.

## Design Principle

The repository should not treat literacy as a narrow reading strand or a middle-grade writing strand. It should model the full dependency spine from oral-language and print readiness through advanced secondary reading and writing.

## Spine Bands

### A. Pre-K Oral-Language And Print Readiness

These nodes establish the earliest access conditions for later literacy learning.

#### O1. Joint Attention, Turn-Taking, And Response Readiness

- learner sustains shared attention in simple interaction contexts
- learner participates in turn-taking and basic response routines

#### O2. Oral Language Comprehension For Instructions And Routines

- learner follows simple spoken directions and common routines
- learner demonstrates practical oral-language comprehension

#### P1. Book Handling, Print Awareness, And Directionality

- learner handles books purposefully
- learner distinguishes print from pictures and follows basic print direction

#### P3. Phonological Awareness

- learner notices rhyme, syllable, and sound patterns
- learner begins to manipulate spoken language units without print dependence

### B. Kindergarten To Grade 1 Literacy Entry Spine

These nodes establish initial formal entry into reading and writing.

#### O3. Oral Recount, Explanation, And Sequence Language

- learner recounts, explains, and sequences orally with enough clarity to support later literacy work

#### P2. Concept Of Word, Spacing, And Text Tracking

- learner tracks words in print and coordinates movement through connected text

#### P4. Alphabet Knowledge And Letter Formation

- learner knows letters and forms them with enough control to support early encoding

#### FR1. Phoneme-Grapheme Mapping

- learner retrieves direct phoneme-grapheme correspondences with usable bidirectional control

#### FR2. Print-Encoding Principle And Bidirectional Mapping

- learner treats print as an encoding of spoken language and applies that logic in reading-like and writing-like directions

#### W1. Drawing, Dictation, Labeling, And Idea Capture

- learner captures ideas through early representational and written forms

### C. Grade 1 To Grade 3 Foundational Literacy Spine

These nodes stabilize decoding, encoding, sentence control, and supported comprehension.

#### FR3. Simple-Pattern Decoding And Encoding

- learner decodes and encodes controlled simple words with explicit sound-symbol reasoning

#### FR4. Word-Level Decoding Generalization

- learner generalizes decoding and encoding control across changed simple-word sets

#### FR5. Orthographic Consolidation And Automatic Word Recognition

- learner recognizes known words and patterns with growing automaticity and consolidation

#### FR6. Connected-Text Fluency And Tracking

- learner reads connected text with increasing tracking control, automaticity, accuracy, and usable fluency

#### RC1. Literal Comprehension Of Shared Text

- learner demonstrates literal meaning from shared and read-aloud text

#### RC2. Inferential And Integrative Comprehension Of Shared Text

- learner makes bounded inferences and integrates relevant details from shared text

#### RC3. Sentence-Level Meaning Construction

- learner derives meaning from increasingly independent sentence-level reading

#### RC4. Short-Passage Integration And Local Coherence

- learner integrates meaning across short connected text rather than isolated sentences only

#### L1. Sentence Formation And Basic Conventions

- learner produces complete sentences with basic conventions and oral-to-written transfer

#### WC1. Sentence Planning And Generation

- learner turns intended ideas into complete sentences before transcription is the main burden

#### WC2. Sentence Transcription And Execution

- learner executes written sentence production with manageable transcription load

### D. Grade 2 To Grade 5 Bridge To Analytical Literacy

These nodes transition learners from early literacy into evidence, paragraphing, and organized reading response.

#### RC5. Evidence Selection From Text

- learner selects relevant textual evidence for a response

#### RC6. Evidence Explanation And Text-Grounded Response

- learner answers text-dependent prompts with relevant evidence and bounded explanation

#### L2. Morphology, Word Meaning, And Academic Vocabulary

- learner uses word meaning, morphology, and academic vocabulary to support comprehension and expression

#### WC3. Paragraph Structure And Coherence

- learner organizes coherent paragraphs around a controlling idea

#### WC4. Source Integration In Structured Response

- learner integrates relevant textual support into a structured written response

### E. Grades 4 To 8 Text Analysis And Structured Composition

These nodes support sustained reading analysis and multi-paragraph composition.

#### R4. Literary Structure, Theme, And Character Analysis

- learner analyzes literary structure, theme, character, and interpretation across texts

#### R5. Informational Structure, Author Claim, And Source Use

- learner analyzes informational structure, author reasoning, and source use

#### L3. Syntax Revision And Style Control

- learner revises syntax and style for clarity, coherence, and effect

#### WC5. Multi-Paragraph Development And Coherence

- learner sustains coherent development across multiple paragraphs

#### WC6. Genre-Controlled Explanation, Narrative, And Argument

- learner adapts sustained writing to explanation, narrative, and argument demands

### F. Grades 6 To 12 Disciplinary And Research Literacy

These nodes extend literacy into cross-text reasoning and sustained research work.

#### R6. Disciplinary Literacy, Rhetorical Analysis, And Cross-Text Synthesis

- learner synthesizes across texts and performs disciplinary reading with evidence and structure

#### WC7. Research Synthesis

- learner synthesizes multiple sources into coherent research-based writing

#### WC8. Attribution And Citation Control

- learner maintains usable attribution and citation control in sourced writing

### G. Grades 9 To 12 Advanced Literacy

These nodes define the advanced secondary frontier.

#### AC1. Cross-Text Synthesis And Source Coordination

- learner coordinates relevant relationships across multiple texts

#### AC2. Disciplinary And Rhetorical Reading

- learner analyzes disciplinary and rhetorical features of complex texts

#### AC3. Advanced Rhetorical Analysis And Argument Synthesis

- learner analyzes rhetoric and synthesizes argument across complex sources

#### AC4. Literary Interpretation And Comparative Analysis

- learner develops sustained comparative literary interpretations

#### AC5. Intertextual Literary Argument

- learner constructs intertextual literary arguments across texts

## Minimal Dependency Flow

The current minimum developmental logic is:

`O1 -> O2 -> O3`

`O1 -> P1 -> P2`

`O2 -> P3 -> P4 -> FR1 -> FR2 -> FR3 -> FR4 -> FR5 -> FR6`

`O3 + P1 -> RC1 -> RC2`

`FR4 + RC1 -> RC3 -> RC4 -> RC5 -> RC6 -> R4/R5 -> R6`

`O3 + P4 -> W1 -> WC1 -> WC2 -> WC3 -> WC4 -> WC5 -> WC6 -> WC7 -> WC8`

`O3 + P4 -> L1 -> L2 -> L3`

`R4 + R5 -> AC1 -> AC2`

`AC2 + WC8 + L3 -> AC3`

`R4 + WC6 + L3 -> AC4 -> AC5`

## Grade-Band Continuity

The domain should preserve continuity across the full span:

- Pre-K readiness must remain explicit rather than hidden inside kindergarten assumptions
- decomposed foundational reading should remain causally linked to later comprehension claims
- language and vocabulary should remain cross-strand dependencies rather than isolated side standards
- advanced Grade 9-12 literacy should remain part of the same governed graph rather than a disconnected extension

## Initial Implementation Strategy

The first implementation wave should start with the earliest readiness nodes:

1. `O1` joint attention, turn-taking, and response readiness
2. `O2` oral language comprehension for instructions and routines
3. `P1` book handling, print awareness, and directionality
4. `P3` phonological awareness

Those nodes provide the earliest governed entry point for the literacy system and establish the same upstream-first discipline already used in mathematics.
