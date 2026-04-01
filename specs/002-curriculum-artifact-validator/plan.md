# Implementation Plan: Curriculum Artifact Validator

**Branch**: `002-curriculum-artifact-validator` | **Date**: 2026-04-01 | **Spec**: [/Volumes/data/development/oc/specs/002-curriculum-artifact-validator/spec.md](/Volumes/data/development/oc/specs/002-curriculum-artifact-validator/spec.md)
**Input**: Feature specification from `/specs/002-curriculum-artifact-validator/spec.md`

## Summary

Implement the repository’s first supporting software feature as a validator that inspects governed curriculum packages, extracts the shared artifact metadata, and reports completeness and review-gate status. The tool supports human review and future automation, but it never grants approval or substitutes for human judgment.

## Technical Context

**Language/Version**: Python 3.11 for initial implementation, Markdown source inputs  
**Primary Dependencies**: Standard library file traversal and text parsing, repository artifact contract from `001-curriculum-production-system`  
**Storage**: Reads repository files only; no persistent external storage required  
**Testing**: Fixture-based validation using the Grade 5 math pilot package plus manual report inspection  
**Target Platform**: Local repository execution by contributors or agents  
**Project Type**: Repository utility / CLI support tool  
**Performance Goals**: Validate a single pilot package in seconds and generate readable findings without requiring setup beyond the repository  
**Constraints**: No student PII, no auto-approval behavior, portable repository-native workflow, tolerant of provisional artifacts  
**Scale/Scope**: First-pass validator for pilot packages and future curriculum directories in this repository

## Constitution Check

- **Learning-First and Standards-Aligned**: Pass. The tool inspects learning- and standards-related metadata rather than abstracting it away.
- **Human-Reviewed AI, Never Autonomous Publication**: Pass. The validator explicitly supports review and must not approve artifacts.
- **Accessibility and Inclusion by Default**: Pass. Accessibility-related metadata and review records are part of the validation target.
- **Evidence, Accuracy, and Trustworthiness**: Pass. The tool reports what is present or missing and avoids invented metadata.
- **Portability, Privacy, and Safe Tooling**: Pass. The tool is local, repository-native, and excludes student PII from its model.

## Project Structure

### Documentation (this feature)

```text
specs/002-curriculum-artifact-validator/
├── spec.md
├── plan.md
├── research.md
└── tasks.md
```

### Source Code (repository root)

```text
curriculum/
specs/
tools/
└── curriculum_validator/
    ├── __init__.py
    ├── cli.py
    ├── parser.py
    ├── rules.py
    └── reporter.py
```

**Structure Decision**: Keep the validator lightweight and repository-local under `tools/`, with logic separated into parsing, rules, and reporting so future tooling can reuse the same components.

## Phase 0: Research Focus

- base validation rules on the artifact contract from `001-curriculum-production-system`
- preserve review-state semantics from the shared data model
- make standards and source-reference extraction human-readable first, machine-readable second
- keep the tool consistent with privacy and portability expectations from the research base

## Phase 1: Design Focus

- parse governed Markdown artifacts using repository naming and metadata conventions
- normalize discovered metadata into artifact summaries
- evaluate package-level relationships and review-gate indicators
- emit both readable findings and a stable structured summary

## Post-Design Constitution Check

The design still passes all five constitutional principles because it supports, rather than replaces, governed curriculum review.

## Complexity Tracking

No constitution exceptions are required.
