---
id: mathematics-advanced-node-decomposition-contract
type: domain-contract
domain: mathematics
status: draft
version: "0.1"
dependencies: [master-mathematics-graph-architecture, mathematics-graph-refactor-plan]
tags: [mathematics, decomposition, advanced-secondary, contract]
last_updated: "2026-04-15"
related: [mathematics-domain, mathematics-graph-refactor-plan, k12-expansion-architecture]
support_tier: Core release
maturity_state: Drafted
supported_profiles: [advanced-node-decomposition]
evidence_class: Synthetic
---

# Advanced Node Decomposition Contract

## Purpose

This document defines when a late-secondary or AP mathematics node must be split into smaller governed capability nodes.

## Split Triggers

A broad advanced node should be split when one or more of the following is true:

1. the node spans multiple external assessment units with different reasoning demands
2. the node spans multiple standards anchors that cannot be defended cleanly with one verification surface
3. the node merges topics with meaningfully different prerequisite chains
4. the node would need multiple distinct failure taxonomies to remain instructionally honest
5. the node would need multiple distinct intervention families to remain instructionally honest
6. the node makes overlay reporting ambiguous or misleading

## Required Evidence Before Splitting

The proposer should identify:

- the current umbrella node
- the distinct capability boundaries hidden inside it
- upstream prerequisites for each proposed split
- downstream unlocks for each proposed split
- any standards or assessment units that motivate the split

## Required Outputs After Splitting

Every approved split should update:

- `master-knowledge-graph.yaml`
- affected node packages
- standards inventory and coverage artifacts where relevant
- standards-augmented graph outputs
- operational exports where relevant
- assessment overlays where relevant

## Priority Refactor Surface

The highest-priority current split surface is:

- `B1` through `B5`
- `W1` through `W4`
- `AP1` through `AP5`

## Non-Goals

This contract does not require splitting every node into the smallest conceivable instructional atom.

The goal is not maximal fragmentation. The goal is capability-sized boundaries that preserve prerequisite logic, verification clarity, and honest coverage claims.

## Claim Boundary

This contract defines decomposition rules for advanced mathematics nodes. It does not itself perform any node split.
