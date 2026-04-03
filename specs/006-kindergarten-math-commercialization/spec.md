# Feature Specification: Kindergarten Math Commercialization

## Feature ID

`006-kindergarten-math-commercialization`

## Purpose

Define the commercial-grade Kindergarten Math source-product layer for the repository.

## Problem

The repository has a draft Kindergarten math pilot, but it does not yet have a full-year math product architecture, lesson inventory, assessment cadence, or teacher/student asset system comparable to the Kindergarten ELA commercialization work.

Without a canonical Kindergarten Math program, the grade-level offering cannot credibly meet commercial parity.

## Users

- curriculum authors
- teacher-material authors
- commercialization reviewers
- spec-driven agents producing math program artifacts

## Required Outcomes

1. The repository has a canonical Kindergarten Math program directory.
2. The program defines a full-year unit structure and annual lesson inventory.
3. The program defines math-specific student-material, teacher-material, assessment, and manipulative architecture.
4. The program aligns with the Kindergarten commercial build targets and master scope-and-sequence.

## Non-Goals

- full authoring of all Kindergarten Math lessons in this feature
- final designed student pages
- final benchmark instruments

## Functional Requirements

### FR1. Program Structure

The repository MUST define a dedicated Kindergarten Math commercialization package under `curriculum/kindergarten/math-program/`.

### FR2. Full-Year Unit Structure

The package MUST define a defensible annual unit structure aligned to the repository's 36-week Kindergarten model.

### FR3. Lesson Inventory

The package MUST define a lesson inventory that reaches the repository's Kindergarten math commercial targets.

### FR4. Material Architecture

The package MUST define:

- student page architecture
- teacher-edition architecture
- manipulatives and center-material architecture
- assessment architecture
- family support expectations

### FR5. Standards Bands

The package MUST organize Kindergarten math standards into usable program bands for annual planning.

## Quality Requirements

- The package MUST be explicit that it is draft commercialization work, not release-ready curriculum.
- The package MUST prefer concrete, developmentally appropriate mathematical work over abstract or worksheet-only design.
- The package MUST include accessibility, multilingual, and developmental-fit considerations.

## Success Criteria

- Kindergarten Math is no longer represented only by a pilot packet.
- The repository has enough structure to begin commercial-grade math authoring the same way it has begun ELA commercialization.
