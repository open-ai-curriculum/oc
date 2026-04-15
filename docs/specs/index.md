---
id: specs-index
type: index
domain: specifications
status: stable
version: "1.0"
dependencies: [learning-system-constitution, learning-system-architecture, learning-system-requirements]
tags: [specifications, requirements, supported-surface]
last_updated: "2026-04-14"
related: [platform-manifest, maturity-model, quality-gates]
---

# Technical Specifications

This index lists the maintained specification corpus for the current repository direction. It is a map of canonical specifications, not a target-state backlog.

## Canonical Specifications

### Platform-wide

| Specification | Role | Notes |
| --- | --- | --- |
| [Learning System Requirements](learning-system-requirements.md) | Normative system requirements baseline | Primary requirements source for the spec-driven learning model |

## Spec Governance

All claim-bearing specifications are governed by:

1. [Learning System Constitution](../foundation/constitution.md)
2. [Learning System Requirements](learning-system-requirements.md)
3. [Capability Maturity Standard](../reference/maturity-model.md)

When a feature or domain spec does not explicitly declare support tier, maturity state, supported profiles, or evidence posture, use the current reference materials before treating it as a release claim.

## How To Use This Index

- Use [Learning System Requirements](learning-system-requirements.md) for normative system expectations.
- Use domain packages under `domains/` for slice-level modeling.
- Use reference materials for maturity, manifest, and claim-boundary guidance.
- Use [Repository Quality Gates](../reference/quality-gates.md) for the active validation and anti-drift discipline.

## Maintenance Rules

- Do not add links here until the document exists.
- Remove or downgrade entries when a document is deprecated or superseded.
- Keep dependency metadata aligned with the actual governing documents for the maintained spec set.
