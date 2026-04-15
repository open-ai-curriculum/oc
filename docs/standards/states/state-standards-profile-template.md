---
id: state-standards-profile-template
type: reference
domain: state-standards
status: draft
version: "0.1"
dependencies: [state-standards-codification-model, standards-versioning-model]
tags: [standards, states, template, mathematics]
last_updated: "2026-04-14"
related: [state-standards-index, state-standards-profiles, state-standards-history]
standard_family: state-standards-templates
standard_subject: mathematics
standards_version: state-standards-profile-template-2026-04-14
standards_track: current
standards_effective_as_of: "2026-04-14"
supersedes_standards_version: []
---

# State Standards Profile Template

## Frontmatter Template

```yaml
---
id: <jurisdiction>-mathematics-standards
type: standard
domain: <jurisdiction>-mathematics
status: draft
version: "0.1"
dependencies: [state-standards-codification-model, mathematics-content-standards-baseline, mathematics-performance-standards-baseline]
tags: [standards, <jurisdiction>, mathematics]
last_updated: "YYYY-MM-DD"
related: [state-standards-index, public-state-standards-registry, state-standards-profiles]
standard_family: <family-name>
standard_subject: mathematics
standards_version: <stable-standards-version-id>
standards_track: current
standards_effective_as_of: "YYYY-MM-DD"
supersedes_standards_version: []
---
```

## Required Sections

1. Jurisdiction
2. Public Source Surface
3. Profile Summary
4. Relationship To Canonical Mathematics Content Baseline
5. Relationship To Repository Performance Baseline
6. Grade-Band Structure
7. Domain Or Strand Structure
8. Notable Divergences Or State-Specific Terminology
9. Mapping Readiness Notes
10. Unresolved Review Questions
11. Claim Boundary

## Historical Transition Rule

When replacing a current profile with a new standards edition:

1. move or copy the previous current content into `history/`
2. keep the prior `standards_version` in the historical copy
3. set the historical copy to `standards_track: historical`
4. update the current profile to the new `standards_version`
5. populate `supersedes_standards_version` in the new current profile
