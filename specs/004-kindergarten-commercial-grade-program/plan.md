# Implementation Plan: Kindergarten Commercial-Grade Program

**Branch**: `004-kindergarten-commercial-grade-program` | **Date**: 2026-04-02 | **Spec**: [/Volumes/data/development/oc/specs/004-kindergarten-commercial-grade-program/spec.md](/Volumes/data/development/oc/specs/004-kindergarten-commercial-grade-program/spec.md)
**Input**: Feature specification from `/specs/004-kindergarten-commercial-grade-program/spec.md`

## Summary

Reset the kindergarten build from a prototype omnibus-program mindset to a commercial-grade subject-program architecture. The first implementation pass defines the target product model, measurable annual production targets, and a full-year master scope-and-sequence so future content work can accumulate in the right shape.

## Technical Context

**Language/Version**: Markdown, repository-native planning artifacts, and Spec Kit workflow  
**Primary Dependencies**: `.specify/memory/constitution.md`, `specs/001-curriculum-production-system/`, `specs/003-kindergarten-program-package/`, `research/15-market-assessment/`, existing kindergarten curriculum artifacts under `curriculum/kindergarten/`  
**Storage**: Versioned repository files in Git  
**Testing**: Cross-artifact review for consistency, manual verification against the remediation plan, and review of target counts against the current kindergarten inventory  
**Target Platform**: Repository-native curriculum and program-development workflows  
**Project Type**: Documentation-first production reset for a curriculum program build  
**Performance Goals**: Contributors stop writing kindergarten content into underspecified omnibus shells and instead build against explicit commercial-grade targets  
**Constraints**: Human review required before publication, accessibility and inclusion by default, no student PII, PolyForm Noncommercial 1.0.0 license, current program volumes remain draft  
**Scale/Scope**: Kindergarten only in this feature; intended to inform later Grade 1 and broader program commercialization work

## Constitution Check

- **Learning-First and Standards-Aligned**: Pass. The feature exists to make annual scope, sequence, and subject alignment explicit.
- **Human-Reviewed AI, Never Autonomous Publication**: Pass. The feature clarifies target maturity and does not elevate current drafts to final status.
- **Accessibility and Inclusion by Default**: Pass. Accessibility is carried into the target product architecture and page-design expectations.
- **Evidence, Accuracy, and Trustworthiness**: Pass. The feature grounds the build target in the market assessment rather than aspirational language.
- **Portability, Privacy, and Safe Tooling**: Pass. The new outputs remain repository-native planning artifacts.

## Project Structure

### Documentation (this feature)

```text
specs/004-kindergarten-commercial-grade-program/
├── spec.md
├── plan.md
└── tasks.md
```

### Source Artifacts (repository root)

```text
curriculum/
└── kindergarten/
    ├── README.md
    ├── commercial-product-architecture.md
    ├── commercial-build-targets.md
    └── master-scope-and-sequence.md

research/
└── 15-market-assessment/
```

**Structure Decision**: Put kindergarten commercialization execution artifacts in `curriculum/kindergarten/` so they are visible to anyone authoring the grade, while keeping the governing feature logic in `specs/004-kindergarten-commercial-grade-program/`.

## Phase 1: Architecture Reset

- define the canonical source-product model for kindergarten
- define which assembled omnibus volumes are derivative rather than canonical
- define the subject families and their expected package shapes

## Phase 2: Measurable Targets

- set lesson, page, assessment, and reproducible targets by subject
- define heavier vs. lighter subject-program expectations
- clarify which targets represent minimum viable commercial credibility

## Phase 3: Full-Year Scope Design

- draft a 36-week kindergarten year map
- interleave literacy, math, and content subjects
- identify benchmark and review windows
- map existing repository packets into the broader year frame

## Post-Design Constitution Check

- **Learning-First and Standards-Aligned**: Still passes. The scope-and-sequence and targets sharpen instructional coherence.
- **Human-Reviewed AI, Never Autonomous Publication**: Still passes. The feature clarifies that current books remain draft.
- **Accessibility and Inclusion by Default**: Still passes. Target product shapes account for access needs and multimodal participation.
- **Evidence, Accuracy, and Trustworthiness**: Still passes. The design avoids overstating current program maturity.
- **Portability, Privacy, and Safe Tooling**: Still passes. The outputs are markdown source-of-truth planning files.

## Complexity Tracking

No constitution exception is required. The main complexity is product-model ambiguity, which this feature is intended to reduce.
