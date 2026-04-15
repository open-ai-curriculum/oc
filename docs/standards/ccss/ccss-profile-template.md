---
id: ccss-profile-template
type: reference
domain: ccss
status: draft
version: "0.1"
dependencies: [ccss-index, standards-versioning-model]
tags: [standards, ccss, template]
last_updated: "2026-04-14"
related: [ccss-index, ccss-history]
standard_family: ccss-templates
standard_subject: cross-domain
standards_version: ccss-template-baseline-2026-04-14
standards_track: current
standards_effective_as_of: "2026-04-14"
supersedes_standards_version: []
---

# CCSS Profile Template

## Frontmatter Template

```yaml
---
id: <ccss-artifact-id>
type: standard
domain: <ccss-domain>
status: draft
version: "0.1"
dependencies: [ccss-overview, standards-versioning-model]
tags: [standards, ccss]
last_updated: "YYYY-MM-DD"
related: [ccss-index]
standard_family: <ccss-family>
standard_subject: <subject>
standards_version: <stable-standards-version-id>
standards_track: current
standards_effective_as_of: "YYYY-MM-DD"
supersedes_standards_version: []
---
```

## Historical Transition Rule

When a current CCSS-family artifact is superseded by a materially new repository codification:

1. copy the prior current artifact into `history/`
2. preserve the old `standards_version`
3. set `standards_track: historical` in the historical copy
4. update the stable current-path artifact to the new standards version
5. populate `supersedes_standards_version` in the new current artifact
