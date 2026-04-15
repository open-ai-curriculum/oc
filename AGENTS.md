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
2. `docs/foundation/`
3. `docs/specs/`
4. `docs/reference/`
5. `specs/007-spec-driven-learning-system/`
6. domain-specific specs that extend the system model
7. `README.md`

## Core Rules

- Do not mark learner-impacting artifacts, classroom artifacts, or system claims as final without human review.
- Do not invent standards alignment, citations, quotations, learner evidence, or review records.
- Do not treat exposure, activity, attendance, or completion as mastery.
- Always preserve dependency integrity, verification gates, and explicit failure-mode handling.
- Treat curriculum, assessment, learner-state logic, and supporting software as outputs of one governed learning system.
- Use validators and automation for structural inspection, never as approval authority.

## Expected Workflow

1. Read the constitution.
2. Read the applicable foundation and maintained spec docs in `docs/`.
3. Model the capability graph, learner states, verification gates, and failure modes before authoring downstream materials.
4. If creating domain artifacts, ensure they extend the system model rather than bypassing it.
5. Use supporting research only after the governing system model is clear.
6. Run tooling that checks structure or consistency when relevant, but do not confuse structure checks with instructional approval.
7. Surface unresolved human-review requirements instead of masking them.

## Cross-Agent Operating Path

When Codex, Copilot, Claude Code, or another agent is asked to work on governed repository artifacts, the default path is:

1. load the constitution and `007` system spec package
2. load the maintained foundation/spec/reference docs in `docs/`
3. identify the relevant domain slice and its capability graph
4. define or revise learner-state logic, verification gates, failure modes, and interventions first
5. create or revise downstream instructional or software artifacts to conform to that model
6. preserve explicit draft or review state
7. surface unresolved human-review requirements instead of masking them

The current reference package for this workflow is:

- `/Volumes/data/development/oc/docs/reference/platform-manifest.md`

The current reference tool for package inspection is:

- `/Volumes/data/development/oc/scripts/validate-docs.js`

## Artifact Classes

Agents in this repository may be asked to produce:

- learning-system specifications
- domain capability models
- instructional execution artifacts
- supporting software or tooling

All of them must conform to the same constitution and review framework.
