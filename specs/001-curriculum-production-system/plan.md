# Implementation Plan: Spec-Driven Curriculum Production System

**Branch**: `001-curriculum-production-system` | **Date**: 2026-04-01 | **Spec**: [/Volumes/data/development/oc/specs/001-curriculum-production-system/spec.md](/Volumes/data/development/oc/specs/001-curriculum-production-system/spec.md)
**Input**: Feature specification from `/specs/001-curriculum-production-system/spec.md`

## Summary

Establish a repository-wide, spec-driven production system for curriculum artifacts, support materials, and supporting software using the existing research base, production templates, and Spec Kit workflow. The implementation remains text-first and repository-native: Markdown artifacts in `research/` and `specs/` are the source of truth, and all downstream authoring and software work must use the same shared artifact model, review gates, and agent instructions.

## Technical Context

**Language/Version**: Markdown, YAML-like metadata conventions, and shell-based Spec Kit workflows  
**Primary Dependencies**: Spec Kit structure under `.specify/`, repository research in `research/`, agent guidance in `AGENTS.md`  
**Storage**: Versioned repository files in Git  
**Testing**: Spec/package review, template completion checks, release-review checklist validation, and manual human review  
**Target Platform**: Git repository workflows used by Codex, Copilot, Claude Code, and human contributors  
**Project Type**: Documentation-first specification and production system with future supporting software  
**Performance Goals**: Agents and contributors can generate complete first-draft artifact packages without inventing missing structure; reviewers can determine readiness from repository artifacts alone  
**Constraints**: Human review required for publishable output, no student PII in versioned content, portable text-first sources, accessibility and inclusion by default, PolyForm Noncommercial 1.0.0 licensing  
**Scale/Scope**: Repository-wide foundation for K-12 curriculum units, lessons, support materials, and future tooling across mathematics, literacy, science, and civics/history

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Learning-First and Standards-Aligned**: Pass. The feature centers units, lessons, support materials, and software on explicit learning goals and standards mapping.
- **Human-Reviewed AI, Never Autonomous Publication**: Pass. The workflow requires AI provenance and review records for substantial AI-assisted work.
- **Accessibility and Inclusion by Default**: Pass. Accessibility notes and release-review checks are required artifact fields, not optional add-ons.
- **Evidence, Accuracy, and Trustworthiness**: Pass. The design points agents to the research base, prohibits invented evidence, and requires reviewable metadata.
- **Portability, Privacy, and Safe Tooling**: Pass. The artifact system is Markdown-first, portable, does not require student PII, and includes tool/privacy review gates.

No constitution violations are required for this feature.

## Project Structure

### Documentation (this feature)

```text
specs/001-curriculum-production-system/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── artifact-contract.md
└── tasks.md
```

### Source Code (repository root)

```text
.specify/
├── memory/
│   └── constitution.md
└── templates/

research/
├── 07-ai-governance/
├── 08-accessibility-and-inclusion/
├── 09-privacy-and-security/
├── 10-interoperability/
├── 12-hqim-and-review/
├── 13-subject-foundations/
└── 14-production-templates/

specs/
└── 001-curriculum-production-system/

AGENTS.md
README.md
LICENSE
```

**Structure Decision**: Use the existing repository as a documentation-first single project. Curriculum source artifacts, review logic, and future supporting software all derive from the same `specs/` and `research/` structure rather than from a separate application codebase.

## Phase 0: Research Focus

Phase 0 consolidates decisions already established across the repository:

- use the constitution as the hard gate for all downstream work
- use `research/14-production-templates/` as the baseline operational format
- use `research/13-subject-foundations/` for discipline-specific authoring and review guidance
- use AI governance, accessibility, privacy, HQIM, and interoperability research as required control layers
- preserve provisional status for incomplete subject or tooling areas rather than implying false completeness

## Phase 1: Design Focus

Phase 1 defines the shared artifact model and agent-consumable contract:

- a common metadata model for units, lessons, support materials, standards mappings, review records, and software feature specs
- repository-native contracts that let agents and tools identify required fields and review state
- a quickstart flow that standardizes how contributors start new curriculum or software work from the spec package

## Post-Design Constitution Check

- **Learning-First and Standards-Aligned**: Still passes. Entities and contracts keep learning goals and standards explicit.
- **Human-Reviewed AI, Never Autonomous Publication**: Still passes. Review records and AI-use metadata remain first-class model elements.
- **Accessibility and Inclusion by Default**: Still passes. Accessibility fields and checks are embedded in both artifact creation and release review.
- **Evidence, Accuracy, and Trustworthiness**: Still passes. The plan keeps source-aware authoring and reviewable release decisions central.
- **Portability, Privacy, and Safe Tooling**: Still passes. The design remains repository-native, avoids platform lock-in, and excludes student PII from versioned artifacts.

## Complexity Tracking

No constitution exceptions or unusual complexity justifications are required at this stage.
