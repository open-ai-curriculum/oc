# Feature Specification: Curriculum Artifact Validator

**Feature Branch**: `002-curriculum-artifact-validator`  
**Created**: 2026-04-01  
**Status**: Draft  
**Input**: User continuation request following `001-curriculum-production-system`: define the first supporting software feature against the shared artifact model.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Validate curriculum package completeness (Priority: P1)

A contributor or agent can run a validator against a curriculum package and receive a structured report showing whether the package contains the minimum required governed artifacts and metadata.

**Why this priority**: The repository now has a shared artifact model, but contributors still need an operational way to check whether a package actually conforms to it.

**Independent Test**: Run the validator against the Grade 5 math pilot package and receive a report identifying the unit, lesson, standards map, review records, support materials, and any missing required metadata.

**Acceptance Scenarios**:

1. **Given** a curriculum package with a unit, lesson, standards map, and review records, **When** the validator runs, **Then** it reports the package contents and whether required metadata fields are present.
2. **Given** a package missing a required governed artifact or core field, **When** the validator runs, **Then** it reports the gap clearly without fabricating a fix.

---

### User Story 2 - Report release-gate readiness without replacing human review (Priority: P1)

A reviewer or agent can use the tool to see which release gates appear documented and which still require human completion.

**Why this priority**: The constitution requires human review, so the first tool must help reviewers rather than imply automated approval.

**Independent Test**: Run the validator against the Grade 5 math pilot package and confirm it reports that the package remains draft because human review is outstanding.

**Acceptance Scenarios**:

1. **Given** review records that indicate draft-only status, **When** the validator runs, **Then** it reports the package as not release-ready.
2. **Given** documented review gates with unresolved items, **When** the validator runs, **Then** it identifies unresolved gates but does not mark the package approved.

---

### User Story 3 - Expose shared metadata for future tooling and exports (Priority: P2)

A developer can use the validator’s output as a machine-readable summary of the repository’s curriculum artifact model.

**Why this priority**: Future tooling should consume the same shared artifact model rather than inventing parallel schemas.

**Independent Test**: The validator can emit a structured summary of artifact IDs, types, review status, standards references, and source relationships for one package.

**Acceptance Scenarios**:

1. **Given** a governed curriculum package, **When** the validator runs in summary mode, **Then** it outputs stable structured fields derived from the shared artifact model.
2. **Given** support materials derived from a unit or lesson, **When** the validator runs, **Then** it captures their source references and review status alongside the core curriculum artifacts.

---

### Edge Cases

- What happens when a package mixes draft and approved-with-changes states across artifacts?
- How should the validator handle packages that predate the current artifact model and are missing explicit IDs?
- What happens when standards claims appear in a unit or lesson but no standalone standards map is present?
- How should the validator treat provisional subject areas or partially built pilot packages?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The validator MUST read repository-native curriculum packages without requiring a proprietary platform or hidden external state.
- **FR-002**: The validator MUST recognize at least these artifact categories: curriculum unit, lesson artifact, support material, standards mapping record, and review record.
- **FR-003**: The validator MUST report whether each discovered artifact exposes the minimum shared metadata required by `/specs/001-curriculum-production-system/contracts/artifact-contract.md`.
- **FR-004**: The validator MUST identify missing required artifact relationships, including missing source references for support materials and missing parent-unit references for lessons.
- **FR-005**: The validator MUST report review status and unresolved release-gate indicators, but it MUST NOT grant or imply final approval.
- **FR-006**: The validator MUST flag packages that appear to omit required review records for artifacts marked in ways that suggest readiness beyond draft.
- **FR-007**: The validator MUST report standards references found in artifact files and note whether a standalone standards mapping record is present.
- **FR-008**: The validator MUST tolerate provisional or incomplete packages and label them explicitly rather than treating them as hard parser failures when core structure is still intelligible.
- **FR-009**: The validator MUST produce a human-readable report suitable for contributors and reviewers.
- **FR-010**: The validator SHOULD produce a machine-readable summary that future tools can consume.
- **FR-011**: The validator MUST avoid requiring or storing real student PII.
- **FR-012**: The validator MUST preserve the repository’s constitution by treating human review as mandatory and non-bypassable.

### Key Entities *(include if feature involves data)*

- **Validation Run**: A single execution of the validator against one package path.
- **Artifact Summary**: Structured metadata about one discovered governed artifact.
- **Validation Finding**: A reported issue, warning, or informational note tied to one artifact or package.
- **Release Gate Summary**: A package-level view of which review gates are documented, unresolved, or absent.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A contributor can run the validator against the Grade 5 math pilot package and receive a report that correctly identifies the package’s unit, lesson, support materials, standards map, and review records.
- **SC-002**: The validator report clearly distinguishes between documented draft completeness and actual release approval.
- **SC-003**: The validator surfaces missing required metadata or relationships without inventing values.
- **SC-004**: The validator output uses the same artifact categories and review-state logic defined in `001-curriculum-production-system`.
- **SC-005**: The validator can be used by agents or humans without needing repository-specific undocumented knowledge.

## Assumptions

- The first validator can operate over Markdown files and repository conventions rather than a formal schema registry.
- Some current and future packages will remain provisional, so the tool must distinguish incomplete from invalid.
- The validator is a review-support tool, not an approval engine.
