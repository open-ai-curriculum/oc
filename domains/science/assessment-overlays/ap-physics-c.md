---
id: ap-physics-c-overlay
type: domain-analysis
domain: science
status: draft
version: "0.1"
dependencies: [science-assessment-overlay-model, capability-graph, science-external-assessment-coverage-scan]
tags: [science, assessment, overlay]
last_updated: "2026-04-15"
related: [science-domain, science-assessment-overlay-model, science-external-assessment-coverage-scan]
support_tier: Core release
maturity_state: Drafted
supported_profiles: [assessment-overlay]
evidence_class: Synthetic
---

# AP Physics C Overlay

## Summary

- assessment family: `AP Physics C`
- version or cycle: `current-public-framework`
- overlay summary classification: `content_substantial_but_compressed`

## Coverage Units

| Unit | Classification | Mapped nodes |
| --- | --- | --- |
| Mechanics | `covered` | `F1`, `F2`, `I5` |
| Electricity and Magnetism | `covered` | `F4`, `M5`, `P6` |
| Calculus-Embedded Physics Modeling | `partially_covered` | `F6`, `I5`, `E5` |

## Unresolved Gaps

- The science graph now includes an explicit calculus-embedded physics node, but full AP Physics C parity still depends on the external mathematics domain for calculus readiness and on assessment-policy details not represented in the graph itself.

## Claim Boundary

AP Physics C coverage is substantial but compressed and does not claim full exam alignment.
