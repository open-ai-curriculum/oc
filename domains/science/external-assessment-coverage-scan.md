---
id: science-external-assessment-coverage-scan
type: domain-analysis
domain: science
status: draft
version: "0.1"
dependencies: [science-domain, science-standards-inventory, science-standards-coverage-report]
tags: [science, assessment, coverage, act, ap, naep, ib]
last_updated: "2026-04-15"
related: [science-domain, science-standards-coverage-report]
support_tier: Core release
maturity_state: Drafted
supported_profiles: [assessment-coverage-scan]
evidence_class: Synthetic
---

# Science External Assessment Coverage Scan

## Purpose

This document scans the current science spine/graph against major external assessment targets associated with the mathematics domain's assessment posture:

- SAT
- PSAT/NMSQT
- ACT
- AP science exams
- TerraNova
- state achievement tests
- NAEP science
- IB Diploma Programme sciences

## High-Level Result

The current science graph is strongest against:

- broad NGSS-style state achievement surfaces
- AP-aligned life, chemistry, physics, Earth, and environmental course territory
- NAEP science content domains
- interdisciplinary science and engineering reasoning required by complex assessment families

The current science graph remains weaker for:

- IB course and level differentiation
- computer-science course ownership that belongs in a dedicated computing domain rather than the science graph
- assessment-policy surfaces that include format, calculator, lab, or performance-task distinctions not represented in the graph itself

## Assessment Scan

| Assessment family | Current graph posture | Coverage label | Main reason |
| --- | --- | --- | --- |
| SAT | No current standalone science assessment family to overlay | `out_of_scope` | The current SAT Suite public framework does not expose a standalone science test surface parallel to SAT mathematics |
| PSAT/NMSQT | No current standalone science assessment family to overlay | `out_of_scope` | The current PSAT Suite public framework does not expose a standalone science test surface parallel to PSAT mathematics |
| ACT Science | Strong science-practice and evidence-interpretation surface | `strong` | Investigation, data reasoning, model evaluation, and competing-explanation work are explicit in `Q`, `I`, `M`, and `E` families |
| AP science exams | Strong explicit course and specialization surface | `strong` | `B`, `C`, `F`, `G`, and `R` specialization families now expose dedicated prerequisite routes into AP biology, chemistry, environmental science, and physics territory |
| TerraNova Science | Directionally aligned broad K-12 science surface | `provisional` | The graph spans broad school science content, but a current public TerraNova science blueprint was not verified in this pass |
| State science achievement tests | Strong for NGSS-style content and practices | `strong` | The graph is explicitly NGSS-informed and now has an anchor-level science standards inventory and coverage report |
| NAEP science | Strong content domain coverage with some reporting compression | `substantial_but_compressed` | Physical, life, and Earth-space domains are explicit, but NAEP-specific reporting categories remain overlay-level views rather than native graph families |
| IB Diploma Programme sciences | Broad topic family coverage with subject-level specialization support | `substantial_but_compressed` | The graph now exposes subject-specific biology, chemistry, physics, and environmental pathways, but SL/HL and internal-assessment policy distinctions remain overlay-level rather than native graph branches |

## Claim Boundary

This scan evaluates content-surface and capability-surface alignment only. It does not claim score guarantees, item-format equivalence, or reviewed psychometric sufficiency.
