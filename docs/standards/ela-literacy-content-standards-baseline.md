---
id: ela-literacy-content-standards-baseline
type: standard
domain: ela-literacy-standards
status: draft
version: "0.1"
dependencies: [learning-system-constitution, learning-system-requirements, ccss-ela-literacy, standards-versioning-model]
tags: [standards, reading, writing, literacy]
last_updated: "2026-04-14"
related: [standards-index, ccss-ela-literacy, state-standards-index]
standard_family: ela-literacy-content-baseline
standard_subject: literacy
standards_version: ela-literacy-content-baseline-2026-04-14
standards_track: current
standards_effective_as_of: "2026-04-14"
supersedes_standards_version: []
---

# Reading/Writing Content Standards Baseline

## Purpose

This document codifies the initial academic content-standards baseline for the `ela_literacy` domain.

It establishes the standards alignment surface that later node mappings, assessment designs, and downstream instructional artifacts should use without pretending that standards lists alone are sufficient to define mastery.

## Canonical Baseline

The canonical baseline for this domain is:

- [Common Core State Standards For ELA And Literacy](ccss/common-core-state-standards-ela-literacy.md)

Operationally, the repository should preserve the following CCSS ELA/literacy structural layers:

- college and career readiness anchor standards
- strand
- grade or grade band
- literacy context when standards are disciplinary

## Repository Interpretation Rules

The repository's `ela_literacy` domain must model more than standards labels. Every later node package must still declare:

- prerequisites
- mastery criteria
- verification gates
- failure modes
- intervention logic
- learner-state semantics

Standards alignment is a mapping layer, not the governing learning model.

## Baseline Strands To Preserve

The initial standards taxonomy for this domain should preserve these core surfaces:

1. foundational reading skills and print concepts
2. reading literature
3. reading informational text
4. writing
5. language conventions and vocabulary
6. speaking and listening
7. disciplinary literacy in history/social studies, science, and technical subjects where relevant

## Domain Relevance

The `ela_literacy` domain should treat speaking/listening and language surfaces as structural dependencies rather than optional side categories. The common failure in literacy systems is to separate them administratively and then ignore their causal role in reading and writing performance.

## Claim Boundary

This baseline defines the current standards-alignment surface for the `ela_literacy` domain. It does not yet provide node-level mappings, state-by-state codifications, or reviewed release claims.
