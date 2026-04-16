---
id: social-studies-external-assessment-coverage-scan
type: domain-analysis
domain: social_studies
status: draft
version: "0.1"
dependencies: [master-social-studies-graph-architecture, master-knowledge-graph, social-studies-standards-coverage-report, social-studies-assessment-overlay-model]
tags: [social-studies, assessment, coverage, ap, government, history, geography, economics]
last_updated: "2026-04-15"
related: [social-studies-domain, social-studies-standards-coverage-report, social-studies-assessment-overlay-model]
support_tier: Core release
maturity_state: Drafted
supported_profiles: [assessment-coverage-scan]
evidence_class: Synthetic
---

# Social Studies External Assessment Coverage Scan

## Purpose

This document scans the current social studies graph against the external assessment targets currently represented in the repository's overlay package:

- AP United States History
- AP World History: Modern
- AP United States Government and Politics
- AP Comparative Government and Politics
- AP Human Geography
- AP Macroeconomics
- AP Microeconomics

The goal is not to claim score guarantees. The goal is to determine whether the current graph appears to contain the knowledge territory required to support strong performance on those assessments, and where the graph is still too coarse or compressed to make that claim responsibly.

## Coverage Labels

Coverage labels used here:

- `strong`
- `substantial_but_compressed`
- `partial`
- `provisional`

## High-Level Result

The current social studies graph is strongest against:

- AP United States Government and Politics
- AP Human Geography
- broad inquiry, evidence, synthesis, and public-argument expectations that appear across AP social studies surfaces

The current social studies graph is materially weaker for:

- AP United States History and AP World History course-specific chronology fidelity
- AP Comparative Government country-case specificity
- AP Macroeconomics and AP Microeconomics formal course resolution

The main issue is no longer the absence of secondary territory. The main issue is that several AP course surfaces are still modeled in branch nodes that are too broad for confident course-equivalence claims.

## Assessment Scan

| Assessment family | Current graph posture | Coverage label | Main reason |
| --- | --- | --- | --- |
| AP United States History | Strong disciplinary history and argument surface, but compressed course specificity | `substantial_but_compressed` | Historical reasoning is explicit, but United States-specific chronology and institution detail remain compressed |
| AP World History: Modern | Strong global-process and argument surface, but compressed period and region detail | `substantial_but_compressed` | Historical comparison and global systems reasoning are explicit, but course-specific chronology is broad |
| AP United States Government and Politics | Strong civics and public-argument surface | `strong` | Constitutional principles, participation, policy reasoning, and evidence use are explicit |
| AP Comparative Government and Politics | Real comparative civics surface, but country-case detail absent | `partial` | Comparative reasoning exists, but case-specific comparative structures are not first-class entities |
| AP Human Geography | Strong geography systems surface | `strong` | Spatial reasoning, movement, human-environment systems, and policy application are explicit |
| AP Macroeconomics | Secondary economics surface exists, but formal macro sequence is broad | `partial` | Global trade, public policy, and system-level economics exist, but macroeconomics remains compressed |
| AP Microeconomics | Foundational and systems economics surface exists, but course specificity is exploratory | `provisional` | Incentives and market reasoning exist, but firm- and welfare-level structure is under-modeled |

## Main Findings

### Finding A

The graph can now support assessment-overlay and export-level analysis across the major AP-facing social studies surfaces.

### Finding B

History and economics are the most compressed external-assessment areas.

### Finding C

Civics, geography, inquiry, and public argument are the strongest current external-assessment alignment surfaces.

## Final Judgment

The external assessment coverage scan supports a conservative claim:

- the social studies graph is broad enough to support maintained AP-facing overlays
- several overlays are usable for planning and coverage analysis now
- stronger course-equivalence claims would require later refinement, especially in history and economics
