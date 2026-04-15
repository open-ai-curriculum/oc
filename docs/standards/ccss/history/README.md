---
id: ccss-history
type: reference
domain: ccss
status: draft
version: "0.1"
dependencies: [ccss-index, standards-versioning-model]
tags: [standards, ccss, history, archive]
last_updated: "2026-04-14"
related: [ccss-index, ccss-profile-template]
standard_family: ccss-history
standard_subject: cross-domain
standards_version: ccss-history-baseline-2026-04-14
standards_track: current
standards_effective_as_of: "2026-04-14"
supersedes_standards_version: []
---

# CCSS History

## Purpose

This directory stores superseded or historical CCSS-family codifications when the repository moves to a materially new CCSS package version or changes the codified current profile.

## Required Path Pattern

Historical files should use this pattern:

- `docs/standards/ccss/history/<artifact-name>-<standards-version>.md`

## Transition Rule

When a CCSS-family artifact is superseded:

1. preserve the prior current artifact in this directory
2. keep the prior `standards_version`
3. set `standards_track` to `historical`
4. update the stable current-path artifact to the new version
5. record the superseded version in `supersedes_standards_version`
