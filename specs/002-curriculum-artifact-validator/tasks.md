# Tasks: Curriculum Artifact Validator

**Input**: Design documents from `/specs/002-curriculum-artifact-validator/`
**Prerequisites**: spec.md, plan.md, research.md

## Phase 1: Setup

- [ ] T001 Create the validator package skeleton in `/Volumes/data/development/oc/tools/curriculum_validator/`
- [ ] T002 Add a short tool README or usage note for contributor-facing execution

---

## Phase 2: Foundational

- [ ] T003 Define the internal artifact summary structure based on `001-curriculum-production-system`
- [ ] T004 Implement Markdown metadata extraction for unit, lesson, support material, standards map, and review record artifacts
- [ ] T005 Implement package discovery rules for pilot curriculum directories

---

## Phase 3: User Story 1 - Validate curriculum package completeness (Priority: P1)

**Independent Test**: Run the validator on the Grade 5 math pilot package and confirm it identifies the expected governed artifacts and missing fields.

- [ ] T006 [US1] Implement package scanning in `tools/curriculum_validator/parser.py`
- [ ] T007 [US1] Implement required-field checks in `tools/curriculum_validator/rules.py`
- [ ] T008 [US1] Implement human-readable report output in `tools/curriculum_validator/reporter.py`
- [ ] T009 [US1] Add a CLI entry point in `tools/curriculum_validator/cli.py`
- [ ] T010 [US1] Validate the tool against `/Volumes/data/development/oc/curriculum/pilots/grade-5-fraction-scaling/`

---

## Phase 4: User Story 2 - Report release-gate readiness without replacing human review (Priority: P1)

**Independent Test**: The validator reports unresolved review requirements and draft status without ever marking the package approved.

- [ ] T011 [US2] Implement review-status and release-gate checks in `tools/curriculum_validator/rules.py`
- [ ] T012 [US2] Ensure the report distinguishes draft completeness from approval state
- [ ] T013 [US2] Add findings for artifacts that imply readiness without documented review records

---

## Phase 5: User Story 3 - Expose shared metadata for future tooling and exports (Priority: P2)

**Independent Test**: The validator can emit a structured summary of artifact IDs, types, relationships, standards references, and review status.

- [ ] T014 [US3] Define structured summary output fields consistent with the shared data model
- [ ] T015 [US3] Add machine-readable output mode to `tools/curriculum_validator/cli.py`
- [ ] T016 [US3] Validate structured output against the pilot package relationships

---

## Phase 6: Polish

- [ ] T017 Re-check validator behavior against provisional and incomplete packages
- [ ] T018 Document known limitations and follow-on schema-hardening work
