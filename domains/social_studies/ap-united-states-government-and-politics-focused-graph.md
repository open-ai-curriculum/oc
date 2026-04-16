# AP United States Government And Politics Focused Graph

## Purpose

Define the bounded social studies graph cut that most directly supports the current AP United States Government and Politics overlay.

This package exists so governance, reporting, and later runtime or export work can reason over the highest-confidence civics-facing assessment surface without loading the entire domain.

## Focus Rule

This is a bounded overlay-supporting graph cut, not a separate course graph. It remains governed by the canonical social studies graph.

## Included Core Nodes

### Civics Backbone

- `C1` community rules, roles, and fairness
- `C2` institutions, rights, responsibilities, and processes
- `C3` civic decision-making and deliberation
- `C4` constitutional principles and public policy
- `C5` comparative government and civic action
- `C6` advanced civic argument, policy design, and participation

### Shared Inquiry And Argument Support

- `Q3` supported explanation from evidence
- `Q4` investigation design, representation, and data use
- `Q5` evaluation of sources, models, and claims
- `Q6` synthesis, argument, and public communication

### Advanced Synthesis Bridge

- `A1` interdisciplinary research and evidence synthesis
- `A2` capstone argument, modeling, and public communication

## Why These Nodes Are In Scope

This cut covers:

- constitutional and institutional reasoning
- civic process and participation
- rights, liberties, and policy argument
- source evaluation and evidence-based public communication

## Deliberately Out Of Scope

This cut does not attempt to model:

- court-case or branch-level United States institutional detail as first-class separate entities
- the full history, geography, or economics branches except where they are already required through the canonical civics dependencies

## Minimal Dependency Logic

The core dependency flow inside this cut is:

`C1 -> C2 -> C3 -> C4 -> C5 -> C6`

`Q3 -> Q4 -> Q5 -> Q6`

`Q3 + C2 -> civic explanation readiness`

`Q4 + C4 -> policy and institutional analysis readiness`

`Q5 + C5 + C6 + Q6 -> AP-style evidence analysis and public argument readiness`

`A1 -> A2` remains the advanced synthesis bridge for capstone-level public communication

## Main Current Strength

This is the strongest current AP-facing social studies cut because the canonical graph already models civics, participation, policy reasoning, and evidence-based public communication explicitly.

## Main Current Limitation

The graph remains somewhat compressed around branch-specific institutional and court detail, so this package supports strong topology and coverage analysis but not reviewed course-equivalence claims.

## Claim Boundary

This focused graph documents the current strongest civics-facing assessment slice in the repository. It does not by itself establish official blueprint verification or exam-preparation approval.
