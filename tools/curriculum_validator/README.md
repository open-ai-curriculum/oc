# Curriculum Validator

## Purpose

This tool validates governed curriculum packages against the shared artifact model defined in:

- `/Volumes/data/development/oc/specs/001-curriculum-production-system/data-model.md`
- `/Volumes/data/development/oc/specs/001-curriculum-production-system/contracts/artifact-contract.md`

It reports:

- discovered artifact types
- core metadata presence
- basic relationship checks
- draft versus release-ready status

It does not approve artifacts or replace human review.

## Usage

```bash
python3 -m tools.curriculum_validator.cli curriculum/pilots/grade-5-fraction-scaling
python3 -m tools.curriculum_validator.cli curriculum/pilots/grade-5-fraction-scaling --format json
```
