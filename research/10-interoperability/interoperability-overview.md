# Interoperability Overview for Open Curriculum

## Purpose

This document explains why interoperability matters for this repository and identifies the standards most relevant to packaging, tagging, and exchanging open curriculum materials across platforms.

For this project, interoperability is not a secondary technical concern. It is part of the core mission of making curriculum reusable, portable, and non-proprietary.

## Core Position

An open curriculum is only partially open if it can be accessed but not moved, tagged, imported, exported, or adapted across systems without costly manual work.

The repository should therefore design for:

- machine-readable standards relationships
- exportable content packages
- platform-neutral source formats
- clear metadata
- minimized vendor lock-in

## Why It Matters

Interoperability supports:

- adoption by schools using different LMS or content systems
- standards alignment workflows at scale
- reuse by other repositories and districts
- localization without rebuilding structure from scratch
- future analytics or learner-record integration if the project later adds tooling

## Relevant Standards Landscape

### CASE

CASE is the most important standard for standards and competency exchange in this project.

Why it matters:

- it supports machine-readable publication of learning outcomes and standards
- it makes standards references portable across systems
- it reduces ambiguous local-only tagging

### Common Cartridge / Thin Common Cartridge

These are the most relevant packaging standards for curriculum exchange.

Why they matter:

- they provide a common way to package or reference digital learning resources
- they support import and export across compliant learning platforms
- Thin Common Cartridge supports link-based packages that remain updatable

### LTI

LTI matters if the project later connects curriculum content to external tools or interactive services.

Why it matters:

- it provides a standard way to connect tools with learning platforms
- it reduces one-off integration work

### OneRoster

OneRoster is less central for static curriculum publishing, but relevant if the project later adds classroom-facing software, rostering, or grade exchange workflows.

Why it matters:

- it supports the exchange of roster and grade-related data between systems

### QTI

QTI becomes relevant if the project wants assessments that can move between systems in a standardized way.

Why it matters:

- it supports portability of question and test content

## Repository Design Implications

The repository should prefer:

- human-editable source formats such as Markdown, HTML, structured text, or other portable text-first formats
- metadata that can later be mapped to exchange standards
- standards references that can be normalized to CASE identifiers where available

The repository should avoid:

- making PDF the only source of truth
- embedding standards alignment only in prose
- relying on one platform's internal content model as the canonical structure

## Immediate Recommendation

Treat interoperability as a design requirement now, even if full standards export is implemented later.

That means:

1. preserve clean source structure
2. define metadata fields early
3. plan for CASE-aligned standards references
4. plan for package export paths rather than platform-specific publishing only

## Planned Follow-On Documents

- `standards-tagging-model.md`
- `content-packaging-options.md`

## Sources

- 1EdTech. *CASE Global Ecosystem*. [https://www.1edtech.org/case-global-ecosystem](https://www.1edtech.org/case-global-ecosystem)
- 1EdTech. *Interoperability Standards*. [https://www.1edtech.org/specifications](https://www.1edtech.org/specifications)
- 1EdTech. *Common Cartridge*. [https://www.1edtech.org/standards/cc](https://www.1edtech.org/standards/cc)
- 1EdTech. *OneRoster*. [https://www.1edtech.org/standards/oneroster](https://www.1edtech.org/standards/oneroster)

## Confidence

High confidence.
