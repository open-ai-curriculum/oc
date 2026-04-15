---
id: ngss-profile-template
type: reference
domain: ngss
status: draft
version: "0.1"
dependencies: [ngss-index, standards-versioning-model]
tags: [standards, ngss, template]
last_updated: "2026-04-14"
related: [ngss-index, ngss-history]
standard_family: ngss-templates
standard_subject: science
standards_version: ngss-template-baseline-2026-04-14
standards_track: current
standards_effective_as_of: "2026-04-14"
supersedes_standards_version: []
---

# NGSS Profile Template

## Frontmatter Template

```yaml
---
id: <ngss-artifact-id>
type: standard
domain: <ngss-domain>
status: draft
version: "0.1"
dependencies: [ngss-overview, standards-versioning-model]
tags: [standards, ngss, science]
last_updated: "YYYY-MM-DD"
related: [ngss-index]
standard_family: <ngss-family>
standard_subject: science
standards_version: <stable-standards-version-id>
standards_track: current
standards_effective_as_of: "YYYY-MM-DD"
supersedes_standards_version: []
---
```

## Historical Transition Rule

When a current NGSS-family artifact is superseded by a materially new repository codification:

1. copy the prior current artifact into `history/`
2. preserve the old `standards_version`
3. set `standards_track: historical` in the historical copy
4. update the stable current-path artifact to the new standards version
5. populate `supersedes_standards_version` in the new current artifact
