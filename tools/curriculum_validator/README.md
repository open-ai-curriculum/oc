# Curriculum Validator

## Purpose

This tool validates governed curriculum packages against the shared artifact model defined in:

- `/Volumes/data/development/oc/specs/001-curriculum-production-system/data-model.md`
- `/Volumes/data/development/oc/specs/001-curriculum-production-system/contracts/artifact-contract.md`

It reports:

- discovered artifact types
- core metadata presence
- required section presence for governed artifacts
- basic relationship checks
- invalid review-status values
- draft versus release-ready status

It does not approve artifacts or replace human review.

## Usage

```bash
python3 -m tools.curriculum_validator.cli curriculum/pilots/grade-5-fraction-scaling
python3 -m tools.curriculum_validator.cli curriculum/pilots/grade-5-fraction-scaling --format json
```

## Current Strict Checks

The validator currently checks for:

- required metadata fields by artifact type
- expected sections such as accessibility notes and AI use record
- lesson-to-unit and support-material source relationships
- classroom-material metadata and source relationships
- presence of standards maps and review records where curriculum artifacts exist
- repository-recognized review-status values

## Tests

Run the fixture-based test suite with:

```bash
python3 -m unittest discover -s tests/curriculum_validator -p 'test_*.py' -v
```
