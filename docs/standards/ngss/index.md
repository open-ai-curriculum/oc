---
id: ngss-index
type: index
domain: ngss
status: draft
version: "0.1"
dependencies: [standards-index, standards-versioning-model]
tags: [standards, ngss, science, index]
last_updated: "2026-04-14"
related: [standards-index, ngss-overview, ngss-core-architecture]
standard_family: ngss-governance
standard_subject: science
standards_version: ngss-package-baseline-2026-04-14
standards_track: current
standards_effective_as_of: "2026-04-14"
supersedes_standards_version: []
---

# Next Generation Science Standards Package

## Purpose

This package codifies the Next Generation Science Standards as a repository standards family with explicit structure, versioning, and history rules.

## Maintained Documents

| Document | Role | Notes |
| --- | --- | --- |
| [NGSS Overview](next-generation-science-standards-overview.md) | Defines the NGSS standards family at the package level | Covers purpose, source surface, and relationship to repository governance |
| [NGSS Core Architecture](next-generation-science-standards-core-architecture.md) | Codifies the structural model of NGSS | Covers performance expectations, dimensions, arrangements, and appendices |
| [NGSS Profile Template](ngss-profile-template.md) | Defines the standard authoring shape for NGSS-family artifacts | Supports future science-domain extensions |
| [NGSS History](history/README.md) | Defines where superseded NGSS package editions should be preserved | Mirrors the state standards history model |

## Repository Rule

The NGSS package should be treated as a science standards-family surface rather than as a replacement for repository capability modeling.

When future science-domain nodes or standards mappings are created:

1. repository node logic remains primary
2. NGSS mappings become explicit external-alignment metadata
3. crosswalks to CCSS mathematics and CCSS literacy should be represented separately where relevant

## Versioning Rule

If the repository moves from one codified NGSS package version to another, the stable current-path files under `docs/standards/ngss/` should be updated and superseded versions should be preserved under `docs/standards/ngss/history/`.
