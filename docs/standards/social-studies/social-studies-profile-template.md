---
id: social-studies-profile-template
type: reference
domain: social-studies-standards
status: draft
version: "0.1"
dependencies: [social-studies-index, standards-versioning-model]
tags: [standards, social-studies, template]
last_updated: "2026-04-15"
related: [social-studies-index]
standard_family: social-studies-templates
standard_subject: social_studies
standards_version: social-studies-template-baseline-2026-04-15
standards_track: current
standards_effective_as_of: "2026-04-15"
supersedes_standards_version: []
---

# Social Studies Profile Template

## Frontmatter Template

```yaml
---
id: <social-studies-artifact-id>
type: standard
domain: <social-studies-domain>
status: draft
version: "0.1"
dependencies: [social-studies-overview, standards-versioning-model]
tags: [standards, social-studies]
last_updated: "YYYY-MM-DD"
related: [social-studies-index]
standard_family: <social-studies-family>
standard_subject: social_studies
standards_version: <stable-standards-version-id>
standards_track: current
standards_effective_as_of: "YYYY-MM-DD"
supersedes_standards_version: []
---
```

## Historical Transition Rule

When a current social studies-family artifact is superseded by a materially new repository codification:

1. copy the prior current artifact into `history/` if the package uses one
2. preserve the old `standards_version`
3. set `standards_track: historical` in the historical copy
4. update the stable current-path artifact to the new standards version
5. populate `supersedes_standards_version` in the new current artifact
