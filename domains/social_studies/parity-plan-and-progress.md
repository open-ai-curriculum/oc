---
id: social-studies-parity-plan-and-progress
type: plan
domain: social_studies
status: draft
version: "0.1"
dependencies: [master-knowledge-graph, social-studies-index, social-studies-standards-inventory, social-studies-node-standards-map, validation-audit]
tags: [social-studies, parity, plan, progress]
last_updated: "2026-04-15"
related: [master-knowledge-graph, validation-audit, social-studies-index]
---

# Social Studies Parity Plan And Progress

## Purpose

This document tracks the work required to bring `domains/social_studies/` to parity with the mathematics domain at the level of standards authority, graph enrichment, operational outputs, and governed verification.

## Progress Model

Overall parity is tracked across five weighted categories:

| Category | Weight | Current status | Percent complete |
| --- | --- | --- | --- |
| Structural domain package parity | 25% | Node-count, domain scaffolds, registry coverage, runtime slices, attachment registries, and node-package coverage are in place and now pass automated structural audit | 100% |
| Standards authority parity | 25% | Repository-baseline package exists; codification model, external-framework registry, and state registry exist; California, New York, and Texas profiles drafted; every maintained AP-facing social studies overlay family now has a structurally codified framework profile; AP United States Government and Politics and AP Human Geography are now elevated to a ready-for-mapping audit tier; coverage, node-map, and authority surfaces validate cleanly | 80% |
| Standards-augmented graph parity | 20% | Standards-augmented graph exists in md/yaml/json form and is now checked against graph nodes, node packages, standards mappings, bounded graph-cut packages, and a complete set of maintained AP-facing assessment-specific focused graph cuts | 72% |
| Operational export and overlay parity | 20% | AP-facing overlay package, Gephi, Neo4j, and operational export surfaces exist; runtime, routing examples, overlay/export consistency, assessment-assurance register, bounded graph-cut surfaces, and complete AP-facing focused graph-cut package now validate cleanly | 93% |
| Audit and parity verification parity | 10% | Social-studies-specific audit tooling now exists, passes standalone, and is wired into `scripts/validate-docs.js`; remaining gap is reviewed completeness depth and focused graph-cut maturity rather than missing automation | 98% |

Weighted overall completion: `88.00%`

## Delivery Waves

### Wave 1: Standards Authority Parity

Goal: move social studies from repository-baseline validation toward authority-backed standards codification.

Work items:

- expand `docs/standards/social-studies/` into a stronger standards package
- define external social studies framework codification rules
- define the state-profile registry for social studies
- create the first jurisdiction or framework profiles under explicit draft status
- rebuild inventory and coverage surfaces against the stronger package when the source set is ready

Current wave status: `In progress`

### Wave 2: Standards-Augmented Graph Parity

Goal: give social studies the same graph-native alignment surfaces mathematics already exposes.

Work items:

- create `standards-augmented-graph.md`
- create `standards-augmented-graph.yaml`
- create `standards-augmented-graph.json`
- connect standards links and review posture to node-level graph surfaces
- reconcile decomposition nodes against standards-bearing or integrative roles

Current wave status: `In progress`

### Wave 3: Operational Output Parity

Goal: make social studies exportable and overlay-ready for downstream graph consumers.

Work items:

- create `assessment-overlay-model.md`
- create `assessment-overlays/`
- create `exports/gephi/`
- create `exports/neo4j/`
- create `exports/operational-graph/`
- expand runtime slices and attachment registries beyond the initial seed surface
- add scoped subgraph views equivalent to the mathematics domain's focused graph cuts

Current wave status: `In progress`

### Wave 4: Governance And Verification Parity

Goal: document completeness, gaps, and verification posture with the same rigor as mathematics.

Work items:

- create a social studies upstream/downstream build plan
- create a social studies expansion plan
- create a social studies refactor/progress package if graph cleanup is staged
- create math-style structural and completeness audits
- create a parity checklist and final parity report

Current wave status: `In progress`

## Current Iteration Delta

Completed in this iteration:

- added a social studies framework codification model
- added a social studies state standards registry
- established a weighted parity tracker and delivery-wave plan
- drafted California, New York, and Texas social studies state profiles
- generated initial standards-augmented social studies graph artifacts
- implemented the first social studies assessment-overlay package
- generated Gephi, Neo4j, and unified operational-graph export surfaces
- expanded runtime and attachment coverage to geography-economics and capstone slices
- added governance and verification artifacts for build planning, integration, external assessment posture, and parity reporting
- added social-studies-specific validators for domain structure, standards coverage, assessment overlays, artifact registries, export consistency, cross-domain runtime slices, and routing examples
- wired the social studies validator suite into `scripts/validate-docs.js`
- reconciled overlay and routing artifacts so the validator suite passes end to end
- added a social studies assessment-framework assurance register in markdown and JSON form
- added automated validation for the social studies assessment-framework assurance register and wired it into `scripts/validate-docs.js`
- added bounded social studies graph-cut packages for inquiry-to-explanation and disciplinary peer-depth views in markdown and YAML form
- wired the new focused graph-cut package surfaces into domain-level validation and repository parity reporting
- added assessment-specific focused graph packages for AP United States Government and Politics and AP Microeconomics in markdown and YAML form
- added automated validation for social studies focused graph cuts and wired it into `scripts/validate-docs.js`
- added assessment-specific focused graph packages for AP United States History and AP Human Geography in markdown and YAML form
- broadened focused-graph validation coverage from the first pair to a multi-family assessment-cut package
- added assessment-specific focused graph packages for AP World History: Modern, AP Macroeconomics, and AP Comparative Government and Politics in markdown and YAML form
- completed the AP-facing social studies focused-graph package across all maintained overlay families
- added a social studies external-framework registry in markdown and JSON form
- added automated validation for the social studies external-framework registry and wired it into `scripts/validate-docs.js`
- added maintained framework-profile codifications for AP United States Government and Politics and AP Human Geography
- upgraded those two framework families from overlay-backed posture to structurally codified posture in the external-framework registry
- added maintained framework-profile codifications for AP United States History and AP Macroeconomics
- upgraded those two framework families from overlay-backed posture to structurally codified posture in the external-framework registry
- added maintained framework-profile codifications for AP World History: Modern, AP Comparative Government and Politics, and AP Microeconomics
- completed maintained framework-profile codification across all AP-facing social studies overlay families
- added public-framework audit artifacts for AP United States Government and Politics and AP Human Geography
- elevated those two framework families to a ready-for-mapping-review posture in the external-framework registry

## Next Recommended Increment

The next highest-value increment is to deepen blueprint-level or identifier-level codification where possible for the strongest AP-facing surfaces and then refine the most compressed history and economics topologies beyond the current deliberately bounded graph cuts.

## Claim Boundary

This tracker measures repository parity progress only. It does not imply official external standards completeness or reviewed instructional sufficiency.
