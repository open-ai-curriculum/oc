---
id: ela-literacy-index
type: index
domain: ela-literacy
status: draft
version: "0.1"
dependencies: [standards-index, standards-versioning-model, ela-literacy-content-standards-baseline, ela-literacy-performance-standards-baseline]
tags: [standards, ela, literacy, index]
last_updated: "2026-04-14"
related: [standards-index, ela-literacy-overview, ela-literacy-content-architecture, ela-literacy-performance-framework, ela-literacy-node-standards-map, ela-literacy-state-standards-registry]
standard_family: ela-literacy-governance
standard_subject: literacy
standards_version: ela-literacy-package-baseline-2026-04-14
standards_track: current
standards_effective_as_of: "2026-04-14"
supersedes_standards_version: []
---

# ELA/Literacy Standards Package

## Purpose

This package codifies the repository's ELA/literacy standards surface as a first-class, versioned standards family.

It sits above the existing literacy baseline files so the repository has a stable package for future node mappings, state crosswalks, and later historical versions.

## Maintained Documents

| Document | Role | Notes |
| --- | --- | --- |
| [ELA/Literacy Overview](ela-literacy-overview.md) | Defines the package-level identity for the repository's literacy standards surface | Clarifies scope, source relationship, and claim boundaries |
| [ELA/Literacy Content Architecture](ela-literacy-content-architecture.md) | Codifies the structural content taxonomy used for literacy standards work | Preserves strands, anchors, grades, and disciplinary literacy context |
| [ELA/Literacy Performance Framework](ela-literacy-performance-framework.md) | Codifies the repository proficiency framework for literacy claims | Aligns to the maintained literacy performance baseline |
| [ELA/Literacy Profile Template](ela-literacy-profile-template.md) | Defines the authoring shape for future literacy-family artifacts | Supports future crosswalk, reporting, or companion profile docs |
| [ELA/Literacy History](history/README.md) | Defines where superseded literacy package editions should be preserved | Uses the same history model as CCSS, NGSS, and state standards |

## Relationship To Existing Baselines

The stable package under `docs/standards/ela-literacy/` does not replace the existing baseline files.

Instead, it provides a package-level surface that references and organizes:

- `ela-literacy-content-standards-baseline.md`
- `ela-literacy-performance-standards-baseline.md`
- `ela-literacy-node-standards-map.md`
- `ela-literacy-state-standards-registry.md`

## Repository Rule

The ELA/literacy package should be treated as a standards-family surface, not as a replacement for repository capability modeling.

When later node mappings expand:

1. repository node logic remains primary
2. standards mappings remain explicit secondary alignment metadata
3. disciplinary literacy relationships should remain distinct from content-domain standards mappings unless a node truly spans both

## Versioning Rule

If the repository moves from one codified ELA/literacy package version to another, the stable current-path files under `docs/standards/ela-literacy/` should be updated and superseded versions should be preserved under `docs/standards/ela-literacy/history/`.
