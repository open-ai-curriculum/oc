---
id: learning-system-architecture
type: foundation
domain: architecture
status: stable
version: "1.0"
dependencies: [learning-system-constitution]
tags: [architecture, overview, system-design, learning-system]
last_updated: "2026-04-14"
related: [learning-system-constitution, learning-system-requirements]
---

# Spec-Driven Learning System Architecture

## Purpose

This document establishes the foundational architecture for the repository's learning-system model and serves as the entry point for contributors and agents who need to understand the system shape before extending it.

## System Overview

The repository models learning as a closed-loop system:

1. define capabilities,
2. preserve dependencies,
3. verify locally and continuously,
4. classify failure precisely,
5. trigger bounded interventions,
6. observe learner state over time,
7. produce downstream instructional and software artifacts from that model.

## Core Layers

### Layer 1. Constitutional Governance

Defines non-negotiable rules such as demonstrated mastery, dependency integrity, dual conceptual/procedural expectations, and mandatory human review for learner-impacting release claims.

### Layer 2. System Specification

Defines the generic ontology for:

- capability nodes
- verification gates
- failure modes
- intervention rules
- learner states
- claim boundaries

### Layer 3. Domain Slice Modeling

Instantiates the system model for a bounded domain such as mathematics.

Each domain slice declares:

- node graph
- dependencies
- mastery rules
- failure taxonomy
- intervention logic

### Layer 4. Execution Artifacts

Produces downstream artifacts such as:

- lesson patterns
- item families
- teacher decision supports
- exemplars
- dashboards
- validators

These artifacts are subordinate to the model and must not bypass it.

### Layer 5. Observability And Review

Defines:

- current maturity state
- evidence classes
- claim boundaries
- review posture
- status and gap tracking

## First Proof-Of-Method Domain

The first downstream slice inside the mathematics domain is algebra readiness:

- fractions
- signed numbers
- one-step equations
- multi-step equations
- variables on both sides

The first fully specified node target is unlike-denominator fraction addition and subtraction.

## Architectural Constraints

- no mastery by exposure
- no advancement without dependency integrity
- no learner-state claims without explicit evidence posture
- no classroom-ready claims without human review
- no orphaned summary docs replacing canonical specifications

## Repository Architecture Posture

The active repository should contain only artifacts that support the maintained learning-system direction.

Canonical governance and specification artifacts live under:

- `docs/foundation/`
- `docs/specs/`
- `docs/reference/`
- `domains/`
- `specs/007-spec-driven-learning-system/`

The `.specify/` constitution is maintained as an operational mirror for agent workflows, but the canonical governance corpus is the `docs/` tree.
