---
id: standards-versioning-model
type: standard
domain: standards-versioning
status: draft
version: "0.1"
dependencies: [learning-system-constitution, learning-system-requirements, maturity-model, standards-index]
tags: [standards, versioning, governance, metadata]
last_updated: "2026-04-14"
related: [standards-index, state-standards-index, state-standards-codification-model]
standard_family: standards-governance
standard_subject: cross-domain
standards_version: standards-versioning-baseline-2026-04-14
standards_track: current
standards_effective_as_of: "2026-04-14"
supersedes_standards_version: []
---

# Standards Versioning Model

## Purpose

This document defines how standards artifacts are versioned in the repository.

The repository already uses the frontmatter field `version` to version the document artifact itself. That is not sufficient for standards work because the underlying standards family can change over time while the repository document also continues to evolve.

As a result, every standards artifact should carry both:

- a document version for the repository file
- a standards version for the underlying standards edition, release, or codified baseline being represented

## Required Versioning Distinction

### Document Version

The frontmatter field `version` describes the repository document revision.

Use it when:

- the writing structure changes
- metadata improves
- cross-links are added
- clarifications are made without changing the underlying standards edition being represented

### Standards Version

The standards metadata fields describe the underlying standards baseline or edition that the repository is codifying.

Use a new `standards_version` when:

- a state adopts revised standards
- a standards family changes identifiers or content structure
- the repository intentionally moves from one official edition to another
- the canonical baseline itself changes materially

## Standards Metadata Fields

Standards artifacts should carry these frontmatter fields:

- `standard_family`
- `standard_subject`
- `standards_version`
- `standards_track`
- `standards_effective_as_of`
- `supersedes_standards_version`

## Field Meanings

### `standard_family`

The governing standards family or codification family.

Examples:

- `repository-mathematics-content-baseline`
- `repository-mathematics-performance-baseline`
- `california-mathematics`
- `texas-teks-mathematics`
- `florida-best-mathematics`
- `new-york-next-generation-mathematics`
- `virginia-sol-mathematics`

### `standard_subject`

The subject area represented by the artifact.

Examples:

- `mathematics`
- `cross-domain`

### `standards_version`

The version identifier for the underlying standards edition or repository codified baseline.

This may be:

- an official edition label
- an adoption-year label
- a repository-defined baseline label when no official compact version string exists

The identifier should be stable enough that a later revision can clearly supersede it.

### `standards_track`

The posture of the represented standards edition within the repository.

Allowed current values:

- `current`
- `historical`
- `planned`

### `standards_effective_as_of`

The date the represented standards version should be treated as the repository's current effective target or current codified snapshot.

This is a repository governance date, not necessarily the legal adoption date of the source authority.

### `supersedes_standards_version`

An array of prior repository standards-version identifiers superseded by the current artifact.

Use an empty array when the current artifact is the first codified version in the repository.

## Path And History Rules

The repository should keep a stable current-path artifact for each maintained standards profile, such as:

- `docs/standards/states/virginia-mathematics-standards.md`

When a future standards edition materially replaces the current one:

1. preserve the prior standards version in a historical copy or historical section
2. update the stable current-path artifact to the new version
3. change `standards_version`
4. update `standards_track` as needed
5. record the superseded version in `supersedes_standards_version`

## Minimum Rule For Future State Revisions

If a jurisdiction publishes a materially new mathematics standards edition, the repository must not silently overwrite the prior codification without changing the standards metadata.

## Claim Boundary

This model defines repository versioning for standards artifacts. It does not determine legal adoption timelines or replace official state publication records.
