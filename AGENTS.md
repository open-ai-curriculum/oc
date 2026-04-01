# Agent Operating Guide

## Purpose

This file tells any coding or authoring agent working in this repository which artifacts are authoritative and how work should proceed.

It is intended for agents such as:

- Codex
- GitHub Copilot
- Claude Code

## Authority Order

When there is any ambiguity, use sources in this order:

1. `.specify/memory/constitution.md`
2. `specs/001-curriculum-production-system/`
3. `specs/002-curriculum-artifact-validator/`
4. `curriculum/`
5. `research/14-production-templates/`
6. `research/13-subject-foundations/`
7. the rest of `research/`
8. `README.md`

## Core Rules

- Do not publish or mark curriculum artifacts as final without human review.
- Do not invent standards alignment, citations, quotations, or review records.
- Do not omit accessibility, inclusion, privacy, or AI-use considerations when the templates require them.
- Treat curriculum, support materials, and supporting software as part of one spec-driven system.
- Use the validator to inspect package structure and metadata, but never treat validator output as approval authority.

## Expected Workflow

1. Read the constitution.
2. Read the applicable feature spec in `specs/`.
3. If creating or revising curriculum artifacts, follow `specs/001-curriculum-production-system/quickstart.md`.
4. Use the production templates to create or revise artifacts.
5. Apply subject-specific guidance from `research/13-subject-foundations/`.
6. If the work produces a governed curriculum package, run `python3 -m tools.curriculum_validator.cli <package-path>`.
7. Use the release-review checklist before proposing publication-ready output.

## Cross-Agent Operating Path

When Codex, Copilot, Claude Code, or another agent is asked to work on governed curriculum artifacts, the default path is:

1. load the constitution and `001` spec package
2. create or revise the governed artifact package under `curriculum/`
3. preserve explicit draft or review state
4. run the curriculum validator
5. surface unresolved human-review requirements instead of masking them
6. only then propose the package for reviewer attention

The current reference package for this workflow is:

- `/Volumes/data/development/oc/curriculum/pilots/grade-5-fraction-scaling/`

The current reference tool for package inspection is:

- `/Volumes/data/development/oc/tools/curriculum_validator/README.md`

## Artifact Classes

Agents in this repository may be asked to produce:

- curriculum artifacts
- support educational materials
- supporting software or tooling

All three must conform to the same constitution and review framework.
