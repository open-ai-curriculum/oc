# Content Packaging Options

## Purpose

This document evaluates practical packaging options for distributing curriculum materials from this repository.

The repository should not assume that one format will serve all use cases. The goal is to keep a clean source of truth while enabling multiple delivery paths.

## Core Position

The repository should separate:

- source-of-truth authoring formats
- distribution formats
- exchange formats

That separation reduces lock-in and makes accessibility, versioning, and interoperability easier to manage.

## Recommended Packaging Layers

### Layer 1: Source of truth

Preferred characteristics:

- text-first
- version controllable
- human editable
- portable

Best candidates:

- Markdown
- HTML
- structured text with front matter

### Layer 2: Distribution formats

Use for direct human consumption:

- HTML pages
- printable PDFs
- downloadable document bundles

### Layer 3: Exchange formats

Use for LMS or repository interoperability:

- Common Cartridge or Thin Common Cartridge for learning resource exchange
- QTI where portable assessment delivery is needed

## Packaging Options

### Option 1: Markdown/HTML-first repository

Strengths:

- strong version control fit
- easy review and diffing
- good accessibility potential
- adaptable to many publishing outputs

Tradeoffs:

- requires a publishing pipeline for polished downstream outputs

### Option 2: PDF-first publication

Strengths:

- familiar to many teachers
- easy to print and share

Tradeoffs:

- weak as a source of truth
- accessibility is harder to maintain
- interoperability is limited

Recommendation:

- use as a distribution format only, not as the canonical authoring format

### Option 3: Common Cartridge / Thin Common Cartridge export

Strengths:

- supports LMS and repository exchange
- aligns with established interoperability practice
- Thin Common Cartridge allows linked, updateable content packages

Tradeoffs:

- requires additional packaging work
- some implementations vary across platforms

Recommendation:

- plan this as a medium-term export target if institutional reuse is a core goal

### Option 4: QTI export for assessments

Strengths:

- improves portability of assessment content

Tradeoffs:

- adds complexity
- only worth it if the project prioritizes interoperable assessment delivery

## Recommended Repository Direction

The best near-term direction is:

1. use text-first source files as canonical content
2. generate accessible web and printable outputs
3. design metadata so future Common Cartridge and CASE export is possible
4. consider QTI only for high-value portable assessments

## Packaging Principles

Whatever formats are chosen, the repository should preserve:

- clear metadata
- stable file structure
- editable source
- exportability
- accessibility

## Sources

- 1EdTech. *Common Cartridge*. [https://www.1edtech.org/standards/cc](https://www.1edtech.org/standards/cc)
- 1EdTech. *Interoperability Standards*. [https://www.1edtech.org/specifications](https://www.1edtech.org/specifications)
- 1EdTech. *Best Practices for LTI Assessment Tools* reference to Common Cartridge and Deep Linking context. [https://standards.1edtech.org/lti/guides/assessment/assessment-guide.md](https://standards.1edtech.org/lti/guides/assessment/assessment-guide.md)

## Confidence

Medium-high confidence.
