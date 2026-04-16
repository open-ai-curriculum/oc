---
id: ela-literacy-graph-artifact-attachment-contract
type: domain-contract
domain: ela_literacy
status: draft
version: "0.1"
dependencies: [learning-system-constitution, learning-system-architecture, learning-system-requirements, master-ela-literacy-graph-architecture]
tags: [ela-literacy, graph, artifacts, curriculum, adaptive-learning]
last_updated: "2026-04-15"
related: [master-ela-literacy-graph-architecture, ela-literacy-standards-augmented-graph, ela-literacy-domain]
support_tier: Core release
maturity_state: Modeled
supported_profiles: [ela-literacy-graph-artifact-attachments]
evidence_class: Synthetic
---

# ELA/Literacy Graph Artifact Attachment Contract

## Purpose

This document defines how instructional, assessment, intervention, and support artifacts attach to the ELA/literacy graph as first-class graph-linked objects.

The goal is to ensure that the ELA/literacy graph can serve as the canonical operational surface for curriculum generation and adaptive navigation, rather than acting only as a prerequisite map plus disconnected content libraries.

## Core Rule

Every graph-relevant curriculum object must attach to one or more graph-native entities using typed references.

Attachment by filename convention, spreadsheet lookup, or informal naming is not sufficient.

## Attachment Scope

Artifacts may attach to:

- `CapabilityNode`
- `GradeBand`
- `ContentDomain`
- `StandardsAnchor`
- `PerformanceLevel`

The default attachment target is `CapabilityNode`.

## Minimum Attachment Coverage

An operational ELA/literacy node is not artifact-complete unless it has at least:

1. one instructional artifact
2. one assessment or verification artifact
3. one intervention or reteach artifact
4. one teacher or support artifact

Where relevant, a node should also have:

- at least one accessibility support
- at least one language support
- at least one exemplar

## Mapping To Node Execution Contract

Artifact attachments must align to the node execution contract.

Assessment and verification artifacts should specify which node gates they address:

- `G1` direct performance
- `G2` meaning/explanation
- `G3` transfer
- `G4` retention

Intervention artifacts should specify which node failure modes they address.

## Claim Boundary

This contract defines how graph-linked ELA/literacy artifacts should be structured and attached. It does not yet claim that the repository contains authored, reviewed, or classroom-ready literacy materials for every node.
