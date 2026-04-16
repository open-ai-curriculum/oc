---
id: ela-literacy-profile-template
type: reference
domain: ela-literacy
status: draft
version: "0.1"
dependencies: [ela-literacy-index, standards-versioning-model]
tags: [standards, ela, literacy, template]
last_updated: "2026-04-14"
related: [ela-literacy-index, ela-literacy-history]
standard_family: ela-literacy-templates
standard_subject: literacy
standards_version: ela-literacy-template-baseline-2026-04-14
standards_track: current
standards_effective_as_of: "2026-04-14"
supersedes_standards_version: []
---

# ELA/Literacy Profile Template

## Frontmatter Template

```yaml
---
id: <ela-literacy-artifact-id>
type: standard
domain: <ela-literacy-domain>
status: draft
version: "0.1"
dependencies: [ela-literacy-overview, standards-versioning-model]
tags: [standards, ela, literacy]
last_updated: "YYYY-MM-DD"
related: [ela-literacy-index]
standard_family: <ela-literacy-family>
standard_subject: literacy
standards_version: <stable-standards-version-id>
standards_track: current
standards_effective_as_of: "YYYY-MM-DD"
supersedes_standards_version: []
---
```

## Historical Transition Rule

When a current ELA/literacy-family artifact is superseded by a materially new repository codification:

1. copy the prior current artifact into `history/`
2. preserve the old `standards_version`
3. set `standards_track: historical` in the historical copy
4. update the stable current-path artifact to the new standards version
5. populate `supersedes_standards_version` in the new current artifact
