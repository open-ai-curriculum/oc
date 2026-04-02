# Research Notes: Kindergarten Program Package

## Decision Summary

The repository should support both:

1. a modular curriculum system built packet by packet
2. an assembled grade-level program package for real teacher use

This feature covers the second layer for kindergarten first.

## Inputs Used

- [Curriculum Production System Spec](/Volumes/data/development/oc/specs/001-curriculum-production-system/spec.md)
- [Artifact Contract](/Volumes/data/development/oc/specs/001-curriculum-production-system/contracts/artifact-contract.md)
- [Non-Literacy Support Baseline](/Volumes/data/development/oc/research/14-production-templates/non-literacy-support-baseline.md)
- [Classroom Materials Baseline](/Volumes/data/development/oc/research/14-production-templates/classroom-materials-baseline.md)
- current kindergarten packet inventory under [curriculum/kindergarten/](/Volumes/data/development/oc/curriculum/kindergarten/README.md)

## Key Decisions

### 1. Program package is a distinct layer

Kindergarten packets are not the same thing as a kindergarten program.

Reason:

- packets define instructional logic and review structure
- programs define the full teacher-use and student-use delivery set

### 2. Canonical kindergarten program artifacts

The kindergarten program package should define five top-level artifact classes:

- textbook
- workbook
- teacher edition
- grading key
- assessment pack

### 3. Teacher edition is the operational center

The teacher edition should be treated as the primary instructional-use artifact because it ties together:

- lesson narrative
- pacing
- classroom task execution
- assignment guidance
- assessment usage
- support-material references

### 4. Textbook and workbook remain derived artifacts

Student-facing program artifacts should be assembled from packet-aligned lessons rather than invented separately.

Reason:

- preserves alignment
- reduces contradiction between packet and program layers
- keeps review and provenance traceable

### 5. Program readiness requires a stronger maturity model

Current packet completeness is not enough for classroom-ready status.

The kindergarten program spec should explicitly distinguish:

- packet-complete
- teacher-usable
- classroom-ready

## Open Questions Deferred

- whether kindergarten textbook artifacts should be a single volume or a modular strand set
- whether workbook pages should be grouped by subject strand or by unit sequence
- how final print/export bundles should be assembled

These can be decided later without blocking the base program-package spec.
