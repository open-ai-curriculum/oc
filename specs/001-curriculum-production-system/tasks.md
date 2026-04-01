# Tasks: Spec-Driven Curriculum Production System

**Input**: Design documents from `/specs/001-curriculum-production-system/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: No automated code tests are required by this feature yet. Validation is performed through artifact completeness checks, plan/spec consistency, and review-gate readiness.

**Organization**: Tasks are grouped by user story so each story can be completed and validated independently.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish the feature package and point contributors to the governing artifacts.

- [ ] T001 Create the planning artifact set in `/Volumes/data/development/oc/specs/001-curriculum-production-system/` (`plan.md`, `research.md`, `data-model.md`, `quickstart.md`, `contracts/artifact-contract.md`, `tasks.md`)
- [ ] T002 Update agent-facing guidance in [/Volumes/data/development/oc/AGENTS.md](/Volumes/data/development/oc/AGENTS.md) if future planning or implementation introduces new authoritative artifacts

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Define the shared model and constraints that all user stories depend on.

**⚠️ CRITICAL**: No user story work should start until these tasks are complete.

- [ ] T003 Finalize the shared artifact model in [/Volumes/data/development/oc/specs/001-curriculum-production-system/data-model.md](/Volumes/data/development/oc/specs/001-curriculum-production-system/data-model.md)
- [ ] T004 Finalize the repository-facing interface contract in [/Volumes/data/development/oc/specs/001-curriculum-production-system/contracts/artifact-contract.md](/Volumes/data/development/oc/specs/001-curriculum-production-system/contracts/artifact-contract.md)
- [ ] T005 Align the implementation plan and research notes with the constitution in [/Volumes/data/development/oc/specs/001-curriculum-production-system/plan.md](/Volumes/data/development/oc/specs/001-curriculum-production-system/plan.md) and [/Volumes/data/development/oc/specs/001-curriculum-production-system/research.md](/Volumes/data/development/oc/specs/001-curriculum-production-system/research.md)
- [ ] T006 Validate that the quickstart flow points only to current authoritative files in [/Volumes/data/development/oc/specs/001-curriculum-production-system/quickstart.md](/Volumes/data/development/oc/specs/001-curriculum-production-system/quickstart.md)

**Checkpoint**: The repository now has one explicit artifact model and one explicit contract for curriculum, support materials, and tooling.

---

## Phase 3: User Story 1 - Create Curriculum Artifacts From Explicit Specs (Priority: P1) 🎯 MVP

**Goal**: Enable contributors and agents to create units and lessons without inventing missing structure.

**Independent Test**: A contributor can create one unit and one lesson package using the spec package, subject guidance, and production templates, with the required metadata and review state present.

### Implementation for User Story 1

- [ ] T007 [US1] Cross-check [/Volumes/data/development/oc/research/14-production-templates/unit-template.md](/Volumes/data/development/oc/research/14-production-templates/unit-template.md) against the required `Curriculum Unit` fields in `data-model.md`
- [ ] T008 [US1] Cross-check [/Volumes/data/development/oc/research/14-production-templates/lesson-template.md](/Volumes/data/development/oc/research/14-production-templates/lesson-template.md) against the required `Lesson Artifact` fields in `data-model.md`
- [ ] T009 [P] [US1] Confirm subject-specific constraints are referenced from [/Volumes/data/development/oc/research/13-subject-foundations/README.md](/Volumes/data/development/oc/research/13-subject-foundations/README.md) and the four current subject packs
- [ ] T010 [US1] Create one pilot unit package from the production templates and this spec package
- [ ] T011 [US1] Create one pilot lesson package linked to the pilot unit and record standards, accessibility, assessment, and review status
- [ ] T012 [US1] Validate the pilot artifacts with [/Volumes/data/development/oc/research/14-production-templates/release-review-checklist.md](/Volumes/data/development/oc/research/14-production-templates/release-review-checklist.md)

**Checkpoint**: Unit and lesson creation is now demonstrably spec-driven and independently reviewable.

---

## Phase 4: User Story 2 - Produce Teacher-Facing And Learner-Facing Support Materials Consistently (Priority: P1)

**Goal**: Ensure support materials derive from the same instructional logic and metadata as curriculum artifacts.

**Independent Test**: From one unit package, a contributor can derive at least one teacher-facing support artifact and one learner-facing support artifact with consistent alignment and review status.

### Implementation for User Story 2

- [ ] T013 [US2] Define the minimum `Support Material` fields and derivation expectations in authoring guidance that references `data-model.md`
- [ ] T014 [P] [US2] Create or adapt one teacher-facing support template from the production system
- [ ] T015 [P] [US2] Create or adapt one learner-facing support template from the production system
- [ ] T016 [US2] Produce pilot support materials tied to the pilot unit or lesson from US1
- [ ] T017 [US2] Validate support material alignment, accessibility, and review metadata using the same release-review framework

**Checkpoint**: Support materials can be generated without inventing a parallel structure.

---

## Phase 5: User Story 3 - Build Supporting Software Against The Same Curriculum Specification Model (Priority: P2)

**Goal**: Make future tooling consume the same artifact model rather than inventing its own schema.

**Independent Test**: A contributor can write a software feature spec, such as metadata validation or standards extraction, that references the shared artifact model and contract.

### Implementation for User Story 3

- [ ] T018 [US3] Define the first tooling target in a new software feature spec that consumes the shared artifact model
- [ ] T019 [P] [US3] Map the tooling target to `Software Feature Spec` fields in [/Volumes/data/development/oc/specs/001-curriculum-production-system/data-model.md](/Volumes/data/development/oc/specs/001-curriculum-production-system/data-model.md)
- [ ] T020 [US3] Ensure the software feature spec references required review gates and does not bypass human approval
- [ ] T021 [US3] Document the expected inputs and outputs against [/Volumes/data/development/oc/specs/001-curriculum-production-system/contracts/artifact-contract.md](/Volumes/data/development/oc/specs/001-curriculum-production-system/contracts/artifact-contract.md)

**Checkpoint**: Supporting software can be planned against the same source-of-truth model as curriculum artifacts.

---

## Phase 6: User Story 4 - Enable Multi-Agent Collaboration With One Authoritative Specification Set (Priority: P2)

**Goal**: Let Codex, Copilot, Claude Code, and similar agents work from the same package without conflicting assumptions.

**Independent Test**: Different agents can produce structurally compatible draft artifacts when pointed at the constitution, spec, plan, data model, contracts, and quickstart flow.

### Implementation for User Story 4

- [ ] T022 [US4] Validate that [/Volumes/data/development/oc/AGENTS.md](/Volumes/data/development/oc/AGENTS.md) and the quickstart document point to the same authority order
- [ ] T023 [P] [US4] Add any missing agent-facing notes needed to preserve the artifact contract and review gates
- [ ] T024 [US4] Run at least one cross-agent pilot prompt against the same spec package and compare structural compatibility
- [ ] T025 [US4] Record any agent-compatibility gaps and update the spec package if required

**Checkpoint**: The spec package is usable across multiple agent systems.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Tighten consistency across the package and prepare downstream implementation work.

- [ ] T026 [P] Re-run consistency review across `spec.md`, `plan.md`, `research.md`, `data-model.md`, `quickstart.md`, and `tasks.md`
- [ ] T027 [P] Confirm all file references in the spec package are current and absolute where required
- [ ] T028 Prepare the next feature spec for the first concrete curriculum pilot or tooling pilot

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: starts immediately
- **Foundational (Phase 2)**: depends on Setup and blocks all user-story execution
- **User Stories (Phases 3-6)**: depend on Foundational completion
- **Polish (Phase 7)**: depends on desired story work being complete

### User Story Dependencies

- **US1**: starts first after Foundational and establishes the MVP
- **US2**: depends on US1 artifacts or equivalent curriculum source artifacts
- **US3**: depends on the shared model and contract, but not on all support-material work
- **US4**: depends on the existence of the final spec package and benefits from US1-US3 outputs

### Parallel Opportunities

- T009, T014, T015, T019, T023, T026, and T027 can run in parallel
- After Phase 2, US3 and parts of US4 can proceed while US1/US2 pilot artifacts are being completed

## Implementation Strategy

### MVP First

1. Complete Setup
2. Complete Foundational tasks
3. Deliver US1 with one pilot unit and one pilot lesson
4. Validate readiness with the release-review framework

### Incremental Delivery

1. Add support-material derivation after the curriculum artifact workflow is stable
2. Add the first tooling spec once the shared artifact model is proven
3. Validate multi-agent compatibility after the package is exercised in real authoring work
