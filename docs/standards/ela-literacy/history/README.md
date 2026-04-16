---
id: ela-literacy-history
type: reference
domain: ela-literacy
status: draft
version: "0.1"
dependencies: [ela-literacy-index, standards-versioning-model]
tags: [standards, ela, literacy, history, archive]
last_updated: "2026-04-14"
related: [ela-literacy-index, ela-literacy-profile-template]
standard_family: ela-literacy-history
standard_subject: literacy
standards_version: ela-literacy-history-baseline-2026-04-14
standards_track: current
standards_effective_as_of: "2026-04-14"
supersedes_standards_version: []
---

# ELA/Literacy History

## Purpose

This directory stores superseded or historical ELA/literacy package codifications when the repository moves to a materially new literacy package version or changes a codified current profile.

## Required Path Pattern

Historical files should use this pattern:

- `docs/standards/ela-literacy/history/<artifact-name>-<standards-version>.md`

## Transition Rule

When an ELA/literacy-family artifact is superseded:

1. preserve the prior current artifact in this directory
2. keep the prior `standards_version`
3. set `standards_track` to `historical`
4. update the stable current-path artifact to the new version
5. record the superseded version in `supersedes_standards_version`
