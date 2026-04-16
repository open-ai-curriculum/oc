---
id: science-secondary-specialization-pathways
type: domain-extension
domain: science
status: draft
version: "0.1"
dependencies: [science-domain, science-capability-graph]
tags: [science, pathways, ap, honors, electives]
last_updated: "2026-04-15"
related: [science-domain, science-external-assessment-coverage-scan]
support_tier: Core release
maturity_state: Drafted
supported_profiles: [secondary-specialization-pathways]
evidence_class: Synthetic
---

# Science Secondary Specialization Pathways

## Purpose

This document makes upper-secondary science course and elective territory explicit in the science knowledge graph instead of leaving that territory compressed inside `L6`, `P6`, `T6`, and `A2`.

## Why This Extension Exists

The original science scaffold captured broad K-12 continuity, but it compressed too much of the secondary course surface into a small number of terminal nodes. That compression made it hard to see prerequisite routes into:

- AP Biology
- AP Chemistry
- AP Environmental Science
- AP Physics 1
- AP Physics 2
- AP Physics C
- Honors Biology, Chemistry, and Physics
- Environmental science, geology, astronomy, oceanography, marine biology, botany, zoology, anatomy and physiology
- forensics, electronics, agriculture, and research electives

## Specialization Families

The graph now exposes five upper-secondary specialization families:

- `B` advanced biological specializations
- `C` chemistry specializations
- `F` physics specializations
- `G` Earth, environment, and space specializations
- `R` applied and cross-domain science specializations

These families remain downstream of the shared scientific-practice, modeling, explanation, engineering, and domain-content spine. They do not bypass the core graph.

## Course And Elective Coverage

| Course or pathway | Primary specialization nodes | Main prerequisite route |
| --- | --- | --- |
| Honors Biology / AP Biology | `B1`, `B2`, `B3`, `B4`, `B5` | `L3 -> L4 -> L5 -> L6` plus `I4` and `E4` |
| Honors Chemistry / AP Chemistry | `C1`, `C2`, `C3`, `C4`, `C5` | `P4 -> P5 -> P6` plus `M4`, `M5`, and `I4` |
| Honors Physics / AP Physics 1 | `F1`, `F2`, `F3` | `P3 -> P4 -> P5` plus `I4` and `E4` |
| AP Physics 2 | `F3`, `F4`, `F5` | `F1` plus `P5`, `P6`, `M5`, and `I5` |
| AP Physics C | `F2`, `F4`, `F6` | `F1` plus `P5`, `P6`, `I5`, and `E5` |
| Environmental Science / AP Environmental Science | `B5`, `G2`, `G3`, `G5`, `G6` | `L4`, `T4`, `T5`, `T6`, `D4`, `E4` |
| Geology / Earth Science | `G1`, `G2`, `G5` | `T3 -> T4 -> T5` plus `M4` |
| Oceanography / Marine Science | `G3`, `B6` | `G1`, `G2`, `T6`, `B5` |
| Astronomy | `G4` | `T6`, `M5`, `E4` |
| Botany / Zoology / Marine Biology | `B6` | `B4`, `B5`, `T6` |
| Anatomy and Physiology | `B4` | `B1`, `L5`, `M4` |
| Agriculture / Land and Water Use | `G6` | `G5`, `B5`, `D4` |
| Forensic Science | `R2` | `R1`, `B1`, `C3` |
| Electronics | `R3` | `R1`, `F4`, `D4` |
| Research / Capstone Science | `R1` | `A2`, `I5`, `E5` |
| Computational Science / Simulation | `R4` | `A2`, `M5`, `I5` |

## Claim Boundary

`R4` is a computational-science bridge and does not make the science domain a substitute for a dedicated computing domain.

Specifically:

- AP Computer Science A should be modeled in a computing domain, not as a science-only terminal node.
- AP Computer Science Principles should also be modeled in a computing domain with separate systems, networks, programming, and impacts strands.
- The science domain can legitimately depend on computational science, data modeling, simulation, and instrumentation without claiming full computer-science course parity.
