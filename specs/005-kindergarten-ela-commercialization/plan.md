# Implementation Plan: Kindergarten ELA Commercialization

**Branch**: `005-kindergarten-ela-commercialization` | **Date**: 2026-04-03 | **Spec**: [/Volumes/data/development/oc/specs/005-kindergarten-ela-commercialization/spec.md](/Volumes/data/development/oc/specs/005-kindergarten-ela-commercialization/spec.md)
**Input**: Feature specification from `/specs/005-kindergarten-ela-commercialization/spec.md`

## Summary

Define the kindergarten ELA subject program as the first commercial-grade subject prototype in the repository. This first pass establishes the year-long module structure, text architecture, standards-band mapping, and annual lesson inventory so later authoring work can build against a real full-year literacy program.

## Technical Context

**Language/Version**: Markdown and repository-native planning artifacts  
**Primary Dependencies**: `.specify/memory/constitution.md`, `specs/004-kindergarten-commercial-grade-program/`, `research/13-subject-foundations/literacy-foundation.md`, `research/13-subject-foundations/literacy-design-principles.md`, kindergarten literacy pilot packets  
**Storage**: Versioned repository files in Git  
**Testing**: Manual cross-check against kindergarten commercialization targets and literacy research guidance  
**Target Platform**: Repository-native curriculum authoring and program-design workflow  
**Project Type**: Documentation-first subject-program design package  
**Performance Goals**: Contributors can place kindergarten literacy work into a coherent full-year annual design instead of expanding disconnected pilots  
**Constraints**: Human review before publication, accessibility/inclusion by default, text quality controls, repository-native editable sources, PolyForm Noncommercial 1.0.0 license  
**Scale/Scope**: Kindergarten ELA only

## Constitution Check

- **Learning-First and Standards-Aligned**: Pass. The feature exists to turn literacy pilots into a full-year aligned subject program.
- **Human-Reviewed AI, Never Autonomous Publication**: Pass. This is planning and structure work, not release elevation.
- **Accessibility and Inclusion by Default**: Pass. The package will include teacher-mediated and multimodal participation assumptions.
- **Evidence, Accuracy, and Trustworthiness**: Pass. The package ties to literacy-research rules and existing standards bands.
- **Portability, Privacy, and Safe Tooling**: Pass. The outputs remain repository-native planning documents.

## Project Structure

### Documentation (this feature)

```text
specs/005-kindergarten-ela-commercialization/
├── spec.md
├── plan.md
└── tasks.md
```

### Source Artifacts (repository root)

```text
curriculum/
└── kindergarten/
    └── ela-program/
        ├── README.md
        ├── year-overview.md
        ├── module-structure.md
        ├── text-architecture.md
        ├── standards-bands.md
        └── lesson-inventory.md
```

**Structure Decision**: Put the ELA commercialization package under `curriculum/kindergarten/ela-program/` because it is a canonical subject-program source layer, not a derivative omnibus volume.

## Phase 1: Annual Program Frame

- define the year-long kindergarten ELA purpose and strand balance
- define module sequence and duration
- map current literacy pilots into the broader ELA year

## Phase 2: Text Architecture

- define text families and their instructional roles
- define text-set expectations and provenance/selection rules
- define the balance between teacher-mediated and student-readable texts

## Phase 3: Lesson Inventory

- define a 36-week lesson map
- identify recurring lesson-slot types
- ensure annual inventory scale is visible

## Post-Design Constitution Check

- **Learning-First and Standards-Aligned**: Still passes. The design clarifies what is taught and when.
- **Human-Reviewed AI, Never Autonomous Publication**: Still passes. The package does not imply finality.
- **Accessibility and Inclusion by Default**: Still passes. The package preserves multimodal access and teacher mediation.
- **Evidence, Accuracy, and Trustworthiness**: Still passes. The package avoids inventing final texts and keeps selection criteria explicit.
- **Portability, Privacy, and Safe Tooling**: Still passes. Markdown remains the source of truth.

## Complexity Tracking

No constitution exception is required. The major complexity is balancing foundational-skills sequencing with knowledge, oral language, and developmentally appropriate text use.
