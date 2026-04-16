---
id: social-studies-validation-audit
type: audit
domain: social_studies
status: draft
version: "0.1"
dependencies: [social-studies-domain, social-studies-content-standards-baseline, social-studies-node-standards-map, social-studies-standards-coverage-report, learning-system-requirements]
tags: [audit, social-studies, validation, standards, runtime]
last_updated: "2026-04-15"
related: [social-studies-domain, mathematics-domain, learning-system-requirements]
support_tier: Incubation
maturity_state: Drafted
supported_profiles: [social-studies-validation-surface]
evidence_class: Synthetic
---

# Social Studies Validation Audit

## Purpose

Record what the repository can currently validate for the `social_studies` domain and what still remains outside the current evidence boundary.

## Current Validations

### Repository Baseline Standards Coverage

The repository now includes the following social studies standards-alignment artifacts:

- [social-studies-content-standards-baseline.md](/Volumes/data/development/oc/docs/standards/social-studies-content-standards-baseline.md)
- [social-studies-performance-standards-baseline.md](/Volumes/data/development/oc/docs/standards/social-studies-performance-standards-baseline.md)
- [social-studies-standards-inventory.md](/Volumes/data/development/oc/docs/standards/social-studies-standards-inventory.md)
- [social-studies-node-standards-map.md](/Volumes/data/development/oc/docs/standards/social-studies-node-standards-map.md)
- [social-studies-standards-coverage-report.md](/Volumes/data/development/oc/docs/standards/social-studies-standards-coverage-report.md)

Current repository-baseline results:

- inventory records: `32`
- covered: `32`
- unmapped: `0`
- orphan node mappings: `0`
- mapped social studies node directories: `146 / 146`

This means every current social studies node is mapped to at least one repository-governed social studies anchor.

### Mathematics-Style Domain Validation Surfaces

The repository now includes mathematics-style domain validation surfaces for social studies:

- [artifact-attachments/registry.schema.json](/Volumes/data/development/oc/domains/social_studies/artifact-attachments/registry.schema.json)
- [artifact-attachments/inquiry-civics-entry-attachment-registry.yaml](/Volumes/data/development/oc/domains/social_studies/artifact-attachments/inquiry-civics-entry-attachment-registry.yaml)
- [runtime/runtime-slice.schema.json](/Volumes/data/development/oc/domains/social_studies/runtime/runtime-slice.schema.json)
- [runtime/cross-domain-runtime-slice.schema.json](/Volumes/data/development/oc/domains/social_studies/runtime/cross-domain-runtime-slice.schema.json)
- [runtime/inquiry-civics-entry-runtime-slice.yaml](/Volumes/data/development/oc/domains/social_studies/runtime/inquiry-civics-entry-runtime-slice.yaml)
- [runtime/inquiry-civics-entry-cross-domain-runtime-slice.yaml](/Volumes/data/development/oc/domains/social_studies/runtime/inquiry-civics-entry-cross-domain-runtime-slice.yaml)

This means the same repository contract categories used by mathematics are now provided for in social studies:

- node package contracts
- standards inventory and coverage reporting
- artifact-attachment schema surface
- runtime-slice schema surface
- cross-domain runtime-slice schema surface

## What Is Not Yet Validated

The repository still cannot honestly claim that every requirement of an authoritative external social studies standards family is present in the graph.

Current blocking gaps:

- no codified external national social studies standards family is present in `docs/standards/`
- no codified state-specific social studies standards profiles are present in `docs/standards/states/`
- no reviewed official identifier-level crosswalk exists from the social studies graph to external standards publications
- no human-reviewed standards-alignment approval has been recorded

Because of those gaps, the current validation is only:

- repository-baseline coverage validation
- repository-contract parity with mathematics for standards, artifact, and runtime surfaces

It is not:

- official external standards completeness validation
- state compliance validation
- reviewed curriculum release validation

## Practical Interpretation

The social studies graph now satisfies the same repository-level validation shape that mathematics uses.

It does not yet satisfy the same degree of external standards codification that mathematics has, because mathematics already has codified CCSS and multiple state standards profiles in the repository while social studies does not.

## Next Required Work

To move from repository-baseline validation to external standards validation, the next required steps are:

1. codify one authoritative external social studies standards family in `docs/standards/`
2. define a reviewed social studies standards inventory from that external family
3. crosswalk current social studies nodes to that external inventory
4. rerun the coverage report against the external inventory
5. surface any graph gaps or out-of-scope regions explicitly

## Claim Boundary

This audit validates the current repository social studies surface against repository-defined standards and runtime contracts. It does not certify official external standards completeness or learner-impacting readiness.
