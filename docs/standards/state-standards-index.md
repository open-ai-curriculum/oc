---
id: state-standards-index
type: index
domain: state-standards
status: draft
version: "0.1"
dependencies: [learning-system-constitution, learning-system-requirements, maturity-model, standards-index]
tags: [standards, states, public-standards, index]
last_updated: "2026-04-14"
related: [standards-index, state-standards-codification-model, public-state-standards-registry, state-standards-history]
standard_family: state-standards-governance
standard_subject: mathematics
standards_version: state-standards-index-baseline-2026-04-14
standards_track: current
standards_effective_as_of: "2026-04-14"
supersedes_standards_version: []
---

# State Standards Index

## Purpose

This index defines the repository surface for state-published standards sets that are publicly distributed and usable as future node-alignment targets.

The repository will treat these state standards sets as secondary alignment surfaces layered on top of the core mathematics content and performance baselines under `/docs/standards/`.

## Why State Sets Need Their Own Surface

State standards work should not be mixed directly into the node graph until the repository has:

- a stable baseline content taxonomy
- a stable baseline performance taxonomy
- a repeatable codification method for state-specific structures
- an explicit record of claim boundaries and unresolved differences

A separate state standards surface makes it possible to:

- codify each state's public mathematics standards without collapsing them into one generic list
- record when a state mostly mirrors a canonical baseline and when it diverges
- support later crosswalks from nodes to multiple state alignment targets
- preserve draft status until each state profile is actually reviewed

## Maintained Documents

| Document | Role | Notes |
| --- | --- | --- |
| [State Standards Codification Model](state-standards-codification-model.md) | Defines how each public state standards set should be codified in this repository | Establishes shared structure before state-by-state content is expanded |
| [Public State Standards Registry](public-state-standards-registry.md) | Lists the state-level standards sets that are in scope for later codification | Tracks implementation posture, not legal or policy status |
| [State Standards Profiles](states/README.md) | Defines where state-by-state codifications will live | Serves as the landing surface for jurisdiction-specific profiles |
| [State Standards Profile Template](states/state-standards-profile-template.md) | Defines the standard authoring shape for new state profiles | Keeps future state docs structurally consistent |
| [State Standards History](states/history/README.md) | Defines where superseded state standards editions should be preserved | Prevents historical standards editions from being silently overwritten |

## Repository Rule

A state standards set should not be treated as mapped to the node graph until both of the following are true:

1. the state profile has been codified under the repository structure
2. explicit node mappings have been added and reviewed

## Planned Next Stages

1. establish state-specific codification documents under `docs/standards/states/`
2. populate mathematics content structure for each public state set
3. note significant divergences from the canonical baseline
4. attach node mappings only after the state profile is stable enough to review

## Versioning Rule

When a state publishes a materially new mathematics standards edition, the stable current-path file under `docs/standards/states/` should be updated to the new version and the superseded profile should be preserved under `docs/standards/states/history/`.
