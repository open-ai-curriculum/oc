---
id: mathematics-diagnostically-robust-item-bank-policy
type: domain-policy
domain: mathematics
status: draft
version: "1.0"
dependencies: [learning-system-constitution, learning-system-requirements, mathematics-domain]
tags: [mathematics, assessment, item-bank, diagnostics, policy]
last_updated: "2026-04-15"
related: [mathematics-domain, mathematics-assessment-framework-assurance-register]
support_tier: Core release
maturity_state: Drafted
supported_profiles: [diagnostically-robust-item-bank]
evidence_class: Synthetic
---

# Diagnostically Robust Mathematics Item-Bank Policy

## Purpose

Define the minimum mathematics question-bank standard required for a node bank to support robust mastery judgment, edge-case checking, failure-mode diagnosis, and likely prerequisite-gap identification.

## Policy Requirements

Every maintained mathematics node bank must:

1. include enough items to support repeated evidence, not single-shot inference
2. include direct, explanation, error-diagnosis, transfer, and retention evidence
3. include explicit edge-case direct items, not only routine core items
4. include explicit prerequisite probes when the node has upstream dependencies
5. target every declared failure mode multiple times so diagnosis is not anchored to a single prompt
6. include sufficient metadata to distinguish current-node misunderstanding from likely upstream instability

## Minimum Item Mix

For a node with governed mastery gates:

- at least `4` direct-execution items
- at least `2` explanation items
- at least `2` error-diagnosis items
- at least `2` transfer items
- at least `1` retention item
- at least `1` prerequisite probe when dependencies exist
- at least `2` prerequisite probes when two or more dependencies exist

For a node without the full mastery-config shape but still maintained in the mathematics domain:

- at least `3` direct-execution items
- at least `2` explanation items
- at least `2` error-diagnosis items
- at least `2` transfer items
- at least `1` retention item
- the same prerequisite-probe rule as above

## Edge-Case Requirement

Each node bank must include:

- at least `2` core direct items
- at least `1` edge-case direct item

Edge-case items may involve:

- mixed representations
- bounded non-routine values
- plausibility checks
- changed surface forms
- representation shifts that commonly trigger fragile reasoning

## Failure-Mode Requirement

Each declared failure mode must be targeted by at least `2` items across the bank.

The bank must not rely on a single item to infer a dominant breakdown.

## Prerequisite-Disambiguation Requirement

When a node has dependencies, the bank must include prerequisite probes that:

- identify which dependency is being checked
- indicate the likely knowledge gap if the probe fails
- help distinguish upstream instability from a current-node misunderstanding

## Policy Metadata

Each generated bank must declare:

- `policy_version`

Each prerequisite probe must declare:

- `dependency_target`
- `suspected_knowledge_gap_if_incorrect`

## Claim Boundary

Passing this policy means the mathematics bank is diagnostically richer than a baseline governed bank. It does not by itself establish psychometric calibration, classroom-release approval, or human-reviewed operational readiness.
