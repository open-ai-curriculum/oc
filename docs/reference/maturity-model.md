---
id: maturity-model
type: reference
domain: governance
status: stable
version: "1.0"
dependencies: []
tags: [reference, lookup, maturity-model]
last_updated: "2026-04-14"
related: [platform-manifest]
---

# Capability Maturity Standard

## Purpose

This standard defines how the repository describes capability scope, support posture, and evidence quality.

The goal is to prevent three different ideas from being conflated:

- architectural intent,
- implemented capability,
- and externally credible support.

## Capability States

Every significant learning-system capability family shall declare one of the following current maturity states:

1. `Modeled`
   - The capability is represented in the constitutional or specification model, but does not yet execute through a supported operational path.
2. `Drafted`
   - The capability is materially specified and partially instantiated, but not yet treated as supported.
3. `Supported`
   - The capability is intentionally offered for defined profiles with explicit boundaries and review posture.
4. `Production-grade`
   - The capability has durable-state, failure-mode, operational, and review hardening sufficient for the intended supported modes.
5. `Externally validated`
   - The capability is backed by reproducible field evidence or external validation beyond internal synthetic review.

## Support Tiers

Major capability families shall identify one of the following tiers:

- `Core release`
- `Parity track`
- `Differentiator track`
- `Profile-specific`
- `Deferred`

## Evidence Classes

Evidence used in governance, readiness, or release claims shall be classified as:

- `Synthetic`
- `Internal runtime`
- `External interoperability`
- `Operational`
- `Field validation`

Synthetic evidence is useful, but it shall not be presented as release proof by itself.

## Claim Boundary Rules

1. A capability may be described as present when it is `Drafted`, but not as supported unless its boundaries are explicit.
2. A capability may be described as supported only when unsupported variants or unresolved review gaps are explicit.
3. A capability may be described as production-grade only when governance, verification, and operational behavior are hardened for the intended mode.
4. A capability may be described as externally credible only when the evidence class justifies that claim.

## Feature-Spec Expectations

Each maintained specification should document:

- support tier,
- current maturity state,
- supported profiles,
- evidence class,
- and affected release or adoption gates.
