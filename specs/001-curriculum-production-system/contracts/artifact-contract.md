# Artifact Contract: Spec-Driven Curriculum Production System

## Purpose

This contract defines the minimum repository-facing interface that curriculum artifacts, support materials, and supporting software must share.

## Contract Scope

The contract applies to:

- curriculum units
- lesson artifacts
- support materials
- standards mapping records
- review records
- supporting software specifications and utilities that read or validate those artifacts

## Required Shared Metadata

Every governed artifact must expose enough information for a human or tool to determine:

- artifact identifier
- artifact type
- title or declared name
- applicable subject area or domain
- current review status
- whether AI assistance materially contributed to the artifact

Where applicable, artifacts must also expose:

- learning goal or feature goal
- standards references
- accessibility and inclusion notes
- assessment logic or validation logic
- source artifact relationships

## Repository Contract Rules

1. Artifacts must be stored in portable, editable repository formats.
2. Artifacts must not require hidden external state to understand their core instructional or review meaning.
3. Review status must be explicit and must not be inferred from commit history alone.
4. AI-assisted work must carry a provenance note when the contribution is substantial.
5. Student PII must not appear in versioned source artifacts.
6. Supporting software may read, validate, transform, or report on artifact metadata, but it must not bypass required human review.

## Compatibility Expectations For Agents

Agents working against this contract must:

- read the constitution before generating governed artifacts
- preserve existing metadata fields when revising artifacts
- avoid inventing standards mappings, review approvals, or citations
- treat incomplete fields as work to be completed, not as permission to fabricate

## Compatibility Expectations For Future Tooling

Future tools should assume:

- Markdown or similarly portable text-first source files remain authoritative
- review records and standards mappings are separate inspectable objects, even when summarized elsewhere
- provisional status is a valid state and must be preserved

## Non-Goals

This contract does not yet define:

- a network API
- a binary packaging format
- a platform-specific schema registry

Those can be added later, but they must remain compatible with this repository contract.
