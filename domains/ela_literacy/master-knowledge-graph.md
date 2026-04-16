# ELA/Literacy Master Knowledge Graph

## Purpose

This document summarizes the authoritative `ela_literacy` graph defined in [master-knowledge-graph.yaml](master-knowledge-graph.yaml).

The graph is designed to prevent the common failure of treating reading, writing, oral language, and language conventions as loosely related curricular strands. In this repository they are treated as one dependency-aware capability system.

## Domain Families

| Family | Focus | Representative dependency purpose |
| --- | --- | --- |
| `O` | Oral language and listening | Provides comprehension, sequencing, explanation, and discussion prerequisites |
| `P` | Print concepts and symbol control | Anchors print awareness, tracking, phonological awareness, and alphabet knowledge |
| `F` | Foundational decoding and encoding | Establishes correspondence control, print encoding, decoding generalization, automatic recognition, and connected-text fluency |
| `R` | Reading comprehension and analysis | Carries the path from literal comprehension to rhetorical and disciplinary analysis |
| `L` | Language conventions and vocabulary | Governs sentence control, morphology, vocabulary growth, revision, and style |
| `W` | Writing and composition | Governs written production from dictation and labeling through research synthesis |
| `A` | Advanced secondary and AP-adjacent literacy | Extends the graph into advanced rhetorical and literary analysis surfaces |

## Graph Posture

- no orphaned nodes
- explicit cross-family dependencies
- full-domain scope scaffolded before downstream product generation
- early-literacy to advanced-literacy continuity preserved in one graph
- Wave 1 foundational-reading split applied from `F1`-`F3` into `FR1`-`FR6`

## Current Claim Boundary

This graph is structurally scaffolded. It is not yet implemented through node packages, item banks, learner-state schemas, or automated domain audit.
