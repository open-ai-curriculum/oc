---
id: ngss-history
type: reference
domain: ngss
status: draft
version: "0.1"
dependencies: [ngss-index, standards-versioning-model]
tags: [standards, ngss, history, archive]
last_updated: "2026-04-14"
related: [ngss-index, ngss-profile-template]
standard_family: ngss-history
standard_subject: science
standards_version: ngss-history-baseline-2026-04-14
standards_track: current
standards_effective_as_of: "2026-04-14"
supersedes_standards_version: []
---

# NGSS History

## Purpose

This directory stores superseded or historical NGSS-family codifications when the repository moves to a materially new NGSS package version or changes the codified current profile.

## Required Path Pattern

Historical files should use this pattern:

- `docs/standards/ngss/history/<artifact-name>-<standards-version>.md`

## Transition Rule

When an NGSS-family artifact is superseded:

1. preserve the prior current artifact in this directory
2. keep the prior `standards_version`
3. set `standards_track` to `historical`
4. update the stable current-path artifact to the new version
5. record the superseded version in `supersedes_standards_version`
