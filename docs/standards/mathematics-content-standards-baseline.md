---
id: mathematics-content-standards-baseline
type: standard
domain: mathematics-standards
status: draft
version: "0.1"
dependencies: [learning-system-constitution, learning-system-requirements, maturity-model]
tags: [standards, mathematics, academic-content, ccss]
last_updated: "2026-04-14"
related: [standards-index, mathematics-performance-standards-baseline]
standard_family: repository-mathematics-content-baseline
standard_subject: mathematics
standards_version: mathematics-content-baseline-2026-04-14
standards_track: current
standards_effective_as_of: "2026-04-14"
supersedes_standards_version: []
---

# Mathematics Content Standards Baseline

## Purpose

This document codifies the initial academic content standards baseline for the mathematics domain.

The current repository baseline uses the Common Core State Standards for Mathematics as the canonical content-alignment profile for later node mapping work. This is an operational codification for repository use, not a reproduction of official standards text and not a claim that every jurisdiction uses the same framework.

## Why This Baseline Exists

The mathematics node graph already models capability, dependency, verification, failure, and intervention. That model remains primary.

This baseline adds a stable external content taxonomy so that later work can:

- map nodes to recognizable academic standards anchors
- check coverage and gaps by grade band and domain
- support crosswalk work for districts or other standards families
- keep content alignment separate from mastery or proficiency judgments

## Baseline Structure

The repository will treat content standards alignment as a four-level structure:

1. grade band
2. standards domain
3. cluster or content grouping
4. anchor statement or later code-level identifier

Where exact official identifiers are later added, they should be attached as metadata. This baseline starts with the domain and anchor layer so alignment work can begin without pretending that node-level mappings are already complete.

## Grade-Band Content Model

### Kindergarten To Grade 2

Primary emphasis:

- counting and cardinality
- operations and algebraic thinking
- number and operations in base ten
- measurement and data
- geometry

Operational anchors:

- stable counting sequence and quantity tracking
- cardinality and one-to-one correspondence
- composing and decomposing small numbers
- addition and subtraction meaning
- early place-value structure
- measurable attributes and direct comparison
- shape recognition, composition, and spatial language

Typical node families already present in the repository:

- `C` counting and cardinality
- `N` early number composition and operations
- `M` measurable attributes and direct measurement readiness
- `G` geometry and spatial reasoning
- `D` simple data representation and interpretation
- `P` repeating and growing pattern readiness

### Grades 3 To 5

Primary emphasis:

- operations and algebraic thinking
- number and operations in base ten
- number and operations with fractions
- measurement and data
- geometry

Operational anchors:

- multiplication and division as equal-group and comparison reasoning
- fluency and place-value reasoning for whole-number operations
- fraction structure, equivalence, comparison, and operations
- area, perimeter, volume, and unit-based measurement reasoning
- data display interpretation and representation
- shape attributes, symmetry, and classification

Typical repository correspondence:

- `U` equal groups, repeated units, and division readiness
- `V` multidigit number structure and operation strategies
- `F` fraction structure through fraction operations
- `M` standard units, measurement comparison, and conversion readiness
- `G` geometric composition, symmetry, and tiling
- `D` data representation and graph interpretation

### Grades 6 To 8

Primary emphasis:

- ratios and proportional relationships
- the number system
- expressions and equations
- functions
- geometry
- statistics and probability

Operational anchors:

- ratio as multiplicative comparison
- unit rate, percent, and proportional reasoning
- signed-number meaning and operation structure
- variable expressions, equations, and inequalities
- coordinate plane reasoning
- linear relationships and rate of change
- area, surface area, and volume formulas with meaning
- data distributions, variability, and association

Typical repository correspondence:

- `Q` ratio and proportional reasoning
- `S` signed-number reasoning
- `A` expressions, equations, inequalities, and coordinates
- `K` function foundations and multiple representations
- `H` geometry beyond elementary classification
- `W` statistics, distributions, and inference

### High School

Primary emphasis:

- number and quantity
- algebra
- functions
- modeling
- geometry
- statistics and probability

Operational anchors:

- algebraic structure and symbolic manipulation
- linear, quadratic, exponential, and other function families
- equation solving, systems, and modeling relationships
- congruence, similarity, proof, and trigonometric foundations
- conditional probability, inference, and study design

Repository use rule:

- high-school mappings should preserve course-neutral anchor language first
- later mappings may add course or pathway variants when the repository needs them

## Content Domains To Preserve In Later Mapping

When node-level mappings are added, each mathematics node should be eligible to map to one or more of these content domains:

- counting and cardinality
- operations and algebraic thinking
- number and operations in base ten
- number and operations with fractions
- ratios and proportional relationships
- the number system
- expressions and equations
- functions
- measurement and data
- geometry
- statistics and probability
- high-school number and quantity
- high-school algebra
- high-school modeling

## Mapping Unit For Later Work

The preferred future mapping record for a node should include:

- node id
- node name
- primary grade band
- primary content domain
- optional secondary content domain
- cluster or content grouping
- anchor statement
- optional official identifier
- coverage note
- review status

This document does not yet assign those records to existing nodes. It only defines the target alignment surface.

## Claim Boundary

This baseline codifies an external academic content taxonomy for mathematics. It does not by itself prove instructional adequacy, student mastery, assessment validity, or jurisdiction-specific compliance.
