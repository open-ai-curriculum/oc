# Quickstart: Spec-Driven Curriculum Production System

## Purpose

Use this flow when creating curriculum artifacts, support materials, or supporting software from the `001-curriculum-production-system` spec.

## 1. Load the authoritative context

Read these files in order:

1. [/Volumes/data/development/oc/.specify/memory/constitution.md](/Volumes/data/development/oc/.specify/memory/constitution.md)
2. [/Volumes/data/development/oc/specs/001-curriculum-production-system/spec.md](/Volumes/data/development/oc/specs/001-curriculum-production-system/spec.md)
3. [/Volumes/data/development/oc/specs/001-curriculum-production-system/plan.md](/Volumes/data/development/oc/specs/001-curriculum-production-system/plan.md)
4. [/Volumes/data/development/oc/AGENTS.md](/Volumes/data/development/oc/AGENTS.md)

## 2. Choose the artifact class

Decide whether you are creating:

- a curriculum artifact
- a support material
- a supporting software feature

If the work crosses classes, keep one shared set of learning goals, standards references, and review requirements.

## 3. Choose the subject lens

If the work is subject-specific, read the appropriate foundation files in [/Volumes/data/development/oc/research/13-subject-foundations](/Volumes/data/development/oc/research/13-subject-foundations/README.md).

Use at least:

- the subject foundation
- the subject design principles
- the subject assessment guidance where assessment is involved

## 4. Start from the production templates

Use the relevant template in [/Volumes/data/development/oc/research/14-production-templates](/Volumes/data/development/oc/research/14-production-templates/README.md):

- [`unit-template.md`](/Volumes/data/development/oc/research/14-production-templates/unit-template.md)
- [`lesson-template.md`](/Volumes/data/development/oc/research/14-production-templates/lesson-template.md)
- [`standards-mapping-template.md`](/Volumes/data/development/oc/research/14-production-templates/standards-mapping-template.md)
- [`release-review-checklist.md`](/Volumes/data/development/oc/research/14-production-templates/release-review-checklist.md)

For support materials and software features, use this spec package’s data model and contracts to preserve the same required fields.

## 5. Fill the minimum required content

At minimum, complete:

- explicit learning goals or feature goals
- standards references or a documented reason standards do not apply
- assessment logic when instruction or evaluation is involved
- accessibility and inclusion notes
- AI provenance for substantial AI-assisted work
- review status

Do not mark any artifact final or approved at draft time.

## 6. Create supporting records

Create or update:

- a standards mapping record
- one or more review records
- any support materials required for implementation clarity

If you are building software, make sure the feature reads or exposes the same shared metadata defined in `data-model.md`.

## 7. Run review before release

Before proposing publishable output, use:

- the release review checklist
- applicable subject-specific guidance
- AI governance, accessibility, privacy, and HQIM research where relevant
- the curriculum validator for package-level structure and metadata checks:
  - `python3 -m tools.curriculum_validator.cli curriculum/pilots/grade-5-fraction-scaling`

Any artifact that fails review remains draft or in-review until corrected.

## 8. Keep provisional work explicit

If a subject area, standards map, or tool feature is incomplete:

- label it provisional
- describe what is missing
- do not present it as release-ready

## 9. Reuse the reference workflow

If you need a concrete repository example of the production system working end to end, inspect:

- [/Volumes/data/development/oc/curriculum/pilots/grade-5-fraction-scaling/README.md](/Volumes/data/development/oc/curriculum/pilots/grade-5-fraction-scaling/README.md)
- [/Volumes/data/development/oc/specs/002-curriculum-artifact-validator/spec.md](/Volumes/data/development/oc/specs/002-curriculum-artifact-validator/spec.md)
- [/Volumes/data/development/oc/tools/curriculum_validator/README.md](/Volumes/data/development/oc/tools/curriculum_validator/README.md)
