---
id: mathematics-naep-grade-12-compression-decision
type: domain-decision
domain: mathematics
status: draft
version: "0.1"
dependencies: [mathematics-external-assessment-coverage-scan, mathematics-assessment-framework-assurance-register, k12-expansion-architecture]
tags: [mathematics, naep, grade-12, compression, decision]
last_updated: "2026-04-15"
related: [mathematics-domain, mathematics-external-assessment-coverage-scan, mathematics-assessment-framework-assurance-register]
support_tier: Core release
maturity_state: Drafted
supported_profiles: [naep-grade-12-decision]
evidence_class: Synthetic
---

# NAEP Grade-12 Compression Decision

## Decision

The repository will keep the current grade-12 secondary mathematics compression boundary as an explicitly accepted near-term architecture decision.

This is not a claim that the secondary topology is maximally decomposed. It is a claim that the current `K`, `H`, `W`, and `B` families are sufficient for the repository's present NAEP-facing assurance posture, which is:

- framework verified
- strong through grades 4 and 8
- substantial but compressed at grade 12

## Rationale

1. The remaining grade-12 NAEP concern is not a missing major topic family.
   The current graph already spans the relevant secondary terrain through functions, geometry, statistics, and advanced algebra.

2. NAEP does not currently require the same course-unit fidelity as AP overlays.
   The repository already implemented finer decomposition where AP and ACT pressures made that split operationally necessary.

3. Further decomposition would currently offer lower leverage than the hardening already completed around:
   - standards coverage
   - assessment overlays
   - artifact governance
   - export and validation integrity

4. The accepted compression boundary is explicit rather than accidental.
   If a later repository pass codifies a stronger public NAEP grade-12 blueprint or item-specification crosswalk that exposes a meaningful topology gap, this decision can be revisited.

## Revisit Conditions

Reopen this decision if any of the following becomes true:

- a maintained NAEP grade-12 unit or subdomain crosswalk is added and reveals repeated multi-topic compression failures
- downstream reporting or assessment-generation workflows cannot operate responsibly over the current `K`, `H`, `W`, and `B` family structure
- state or external assessment work demonstrates that one of the remaining secondary umbrella nodes is blocking defensible verification logic

## Immediate Consequence

The mathematics domain should now treat NAEP grade-12 compression as:

- an acknowledged and governed boundary
- not an unresolved planning ambiguity
- not an immediate trigger for further graph decomposition

## Claim Boundary

This decision records the current repository architecture posture for NAEP grade-12 coverage. It does not claim that grade-12 mathematics decomposition is complete for every future use case.
