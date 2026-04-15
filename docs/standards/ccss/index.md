---
id: ccss-index
type: index
domain: ccss
status: draft
version: "0.1"
dependencies: [standards-index, standards-versioning-model, mathematics-content-standards-baseline]
tags: [standards, ccss, common-core, index]
last_updated: "2026-04-14"
related: [standards-index, ccss-overview, ccss-mathematics, ccss-ela-literacy]
standard_family: ccss-governance
standard_subject: cross-domain
standards_version: ccss-package-baseline-2026-04-14
standards_track: current
standards_effective_as_of: "2026-04-14"
supersedes_standards_version: []
---

# Common Core State Standards Package

## Purpose

This package codifies the Common Core State Standards as a standards family under the repository standards surface.

The package is intended to support later node-to-standards mapping, state crosswalk work, and explicit relationship modeling between repository capability nodes and the Common Core standards family.

## Maintained Documents

| Document | Role | Notes |
| --- | --- | --- |
| [CCSS Overview](common-core-state-standards-overview.md) | Defines the Common Core standards family at the package level | Covers purpose, scope, and relationship to repository governance |
| [CCSS Mathematics](common-core-state-standards-mathematics.md) | Codifies the Common Core State Standards for Mathematics as a current profile | Aligns to the repository mathematics baseline |
| [CCSS ELA/Literacy](common-core-state-standards-ela-literacy.md) | Codifies the Common Core ELA and literacy standards family | Includes literacy in history/social studies, science, and technical subjects |
| [CCSS Profile Template](ccss-profile-template.md) | Defines the standard authoring shape for future CCSS-family artifacts | Supports additional crosswalk or companion profile docs |
| [CCSS History](history/README.md) | Defines where superseded CCSS package editions should be preserved | Mirrors the state standards history model |

## Repository Rule

The CCSS package should be treated as a standards-family surface, not as a substitute for repository capability modeling.

When later node mappings are added:

1. repository nodes remain governed by dependency, verification, and failure-mode logic
2. CCSS mappings become secondary alignment metadata
3. literacy crosswalks should remain distinct from content-domain mappings unless the node explicitly spans both

## Versioning Rule

If the repository moves from one codified CCSS package version or canonical profile to another, the stable current-path files under `docs/standards/ccss/` should be updated and superseded versions should be preserved under `docs/standards/ccss/history/`.
