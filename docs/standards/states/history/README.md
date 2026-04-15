---
id: state-standards-history
type: reference
domain: state-standards
status: draft
version: "0.1"
dependencies: [standards-versioning-model, state-standards-index, state-standards-codification-model]
tags: [standards, states, history, archive, versioning]
last_updated: "2026-04-14"
related: [state-standards-profiles, state-standards-index, public-state-standards-registry]
standard_family: state-standards-history
standard_subject: mathematics
standards_version: state-standards-history-baseline-2026-04-14
standards_track: current
standards_effective_as_of: "2026-04-14"
supersedes_standards_version: []
---

# State Standards History

## Purpose

This directory stores superseded or historical state standards codifications when the repository moves a jurisdiction to a materially new standards edition.

The stable current-path files under `docs/standards/states/` remain the active codifications. Historical copies live here so prior mappings and prior standards editions remain inspectable.

## Why This Exists

Standards metadata alone is not enough when the repository needs to preserve:

- prior node-to-standards mappings
- historical editions of a state's standards profile
- reasoning about why a standards family changed
- transition notes between one edition and another

## Required Path Pattern

Historical files should use this pattern:

- `docs/standards/states/history/<jurisdiction>-mathematics-standards-<standards-version>.md`

Examples:

- `docs/standards/states/history/virginia-mathematics-standards-virginia-sol-2023-current-profile.md`
- `docs/standards/states/history/florida-mathematics-standards-florida-best-2020-current-profile.md`

## Required Transition Process

When a state profile is superseded by a materially new standards version:

1. copy the current state profile into `docs/standards/states/history/`
2. preserve the old `standards_version` in that historical copy
3. set the historical copy's `standards_track` to `historical`
4. update the stable current-path file to the new standards edition
5. update the current file's `supersedes_standards_version` to include the prior version
6. add transition notes if the organizational structure changed materially

## Required Historical Notes

Each historical copy should include:

- the reason it became historical
- the later standards version that replaced it
- any major structural differences that affect mapping interpretation

## Claim Boundary

This directory preserves repository history for standards codification. It does not by itself determine legal status, archival completeness, or policy-effective dates outside repository governance.
