---
id: learning-system-requirements
type: specification
domain: learning-system
status: stable
version: "1.0"
dependencies: [learning-system-constitution, learning-system-architecture]
tags: [specification, requirements, learning-system]
last_updated: "2026-04-14"
related: [specs-index, maturity-model]
support_tier: Core release
maturity_state: Modeled
supported_profiles: [spec-driven-learning-core]
evidence_class: Synthetic
---

# Learning System Requirements

## Purpose

Define the normative requirements for the repository's spec-driven learning-system model.

## Normative Requirements

1. The repository shall model learning using explicit capability nodes rather than broad topic-only sequences.
2. Every capability node shall declare prerequisite dependencies.
3. Every capability node shall declare mastery criteria that include direct performance, explanation or meaning, transfer, and retention.
4. Every capability node shall declare known failure modes where feasible.
5. Every capability node shall declare bounded intervention options tied to diagnosed failure modes.
6. Learner state shall be modeled in capability terms, not merely by activity completion.
7. Domain slices shall declare claim boundaries, review posture, and evidence class before external-facing claims are made.
8. Downstream curriculum, assessment, and tooling artifacts shall be traceable to the governing capability model.
9. Human review shall remain a release gate for classroom-ready or learner-impacting claims.
10. Obsolete artifacts shall be removed when they no longer support the maintained repository direction.

## First Required Domain

The first required proof-of-method domain is mathematics, with an initial downstream slice focused on:

- fractions
- signed numbers
- one-step equations
- multi-step equations
- variables on both sides

## First Required Node

The first required fully specified node is:

- unlike-denominator fraction addition and subtraction

## Claim Boundary

This requirement set defines the repository's current target architecture. It does not by itself prove classroom efficacy, district readiness, or production-grade learner deployment.
