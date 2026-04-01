# Standards Tagging Model

## Purpose

This document proposes a minimum tagging model for linking repository curriculum materials to learning standards in a way that remains human-readable now and machine-readable later.

## Core Position

Standards tagging should not be treated as a decorative footer or spreadsheet afterthought.

It should support:

- contributor clarity
- review workflows
- exportability
- future CASE mapping

## Minimum Tagging Unit

Each substantial curriculum artifact should be able to record:

- subject area
- grade or grade band
- standard set
- standard identifier
- standard statement or short description
- alignment strength
- artifact role

## Recommended Metadata Fields

Use or reserve fields equivalent to:

- `subject`
- `grade_band`
- `standard_framework`
- `standard_id`
- `standard_label`
- `alignment_type`
- `alignment_notes`
- `artifact_type`
- `unit_id`
- `lesson_id`

## Alignment Types

At minimum, support these meanings:

- `primary`: the artifact directly teaches or assesses the standard
- `supporting`: the artifact contributes to the standard indirectly
- `integrated`: the artifact addresses the standard alongside others in a cross-disciplinary way

This avoids the common problem where every nearby standard is tagged as if it were equally central.

## Recommended Repository Practice

### Unit level

Units should identify:

- target standards
- supporting standards
- any cross-curricular standards

### Lesson level

Lessons should identify:

- the specific standards they advance
- whether the lesson introduces, develops, or assesses the target

### Assessment level

Assessments should identify:

- the standards being measured
- the strength of evidence expected

## CASE Readiness

If CASE identifiers are available for a standards set, the repository should eventually preserve:

- local human-readable identifier
- CASE identifier

Reason:

- humans need readable labels
- systems need stable identifiers

## Anti-Patterns to Avoid

Avoid:

- tagging an entire long standards cluster with no granularity
- copying standards text with no identifier
- using different naming conventions across files
- treating standards tags as proof of alignment without review

## Immediate Recommendation

Until a more formal schema is added, every unit and lesson should at least include:

1. standard framework name
2. standard identifier
3. short statement of how the artifact aligns

## Sources

- 1EdTech. *CASE Global Ecosystem*. [https://www.1edtech.org/case-global-ecosystem](https://www.1edtech.org/case-global-ecosystem)
- 1EdTech. *Competencies and Academic Standards Exchange* listing in standards catalog. [https://www.1edtech.org/specifications](https://www.1edtech.org/specifications)

## Confidence

Medium-high confidence.

Reason:

- the need for structured tagging is clear
- the exact schema should still be adapted to the repository's eventual content model
