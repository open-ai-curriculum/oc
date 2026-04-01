# Agent Workflow: Curriculum Production And Validation

## Purpose

This note gives Codex, Copilot, Claude Code, and similar agents one shared operating path for governed curriculum work in this repository.

## Required Sequence

1. Read:
   - `/Volumes/data/development/oc/.specify/memory/constitution.md`
   - `/Volumes/data/development/oc/specs/001-curriculum-production-system/spec.md`
   - `/Volumes/data/development/oc/AGENTS.md`
2. If the task is curriculum or support-material work:
   - use the production templates in `/Volumes/data/development/oc/research/14-production-templates/`
   - apply the appropriate subject guidance from `/Volumes/data/development/oc/research/13-subject-foundations/`
3. If the task is supporting software work:
   - align it to the shared artifact model in `/Volumes/data/development/oc/specs/001-curriculum-production-system/data-model.md`
   - preserve the repository contract in `/Volumes/data/development/oc/specs/001-curriculum-production-system/contracts/artifact-contract.md`
4. Write or revise governed artifacts under `curriculum/` or the relevant `specs/` package.
5. Keep review status explicit. Draft remains draft until human review is completed.
6. Run the validator on governed curriculum packages:
   - `python3 -m tools.curriculum_validator.cli <package-path>`
7. Report:
   - what artifacts were created or changed
   - what the validator found
   - what still requires human review

## Current Reference Package

Use the Grade 5 math pilot as the baseline example:

- `/Volumes/data/development/oc/curriculum/pilots/grade-5-fraction-scaling/`

This package shows:

- a unit artifact
- a lesson artifact
- a standards map
- review records
- teacher-facing and learner-facing support materials

## Current Reference Tool

Use the first repository validator as the baseline tool example:

- `/Volumes/data/development/oc/specs/002-curriculum-artifact-validator/spec.md`
- `/Volumes/data/development/oc/tools/curriculum_validator/README.md`

## Non-Negotiable Agent Rules

- Do not invent review approval.
- Do not treat validator output as publication permission.
- Do not erase explicit draft, provisional, or review-needed states.
- Do not create support materials or tooling that drift away from the source artifact model.
