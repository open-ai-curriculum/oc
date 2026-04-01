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
2. `specs/`
3. `research/14-production-templates/`
4. `research/13-subject-foundations/`
5. the rest of `research/`
6. `README.md`

## Core Rules

- Do not publish or mark curriculum artifacts as final without human review.
- Do not invent standards alignment, citations, quotations, or review records.
- Do not omit accessibility, inclusion, privacy, or AI-use considerations when the templates require them.
- Treat curriculum, support materials, and supporting software as part of one spec-driven system.

## Expected Workflow

1. Read the constitution.
2. Read the applicable feature spec in `specs/`.
3. Use the production templates to create or revise artifacts.
4. Apply subject-specific guidance from `research/13-subject-foundations/`.
5. Use the release-review checklist before proposing publication-ready output.

## Artifact Classes

Agents in this repository may be asked to produce:

- curriculum artifacts
- support educational materials
- supporting software or tooling

All three must conform to the same constitution and review framework.
