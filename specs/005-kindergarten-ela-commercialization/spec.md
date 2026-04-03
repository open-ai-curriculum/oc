# Feature Specification: Kindergarten ELA Commercialization

**Feature Branch**: `005-kindergarten-ela-commercialization`  
**Created**: 2026-04-03  
**Status**: Draft  
**Input**: User direction: "Create the dedicated kindergarten ELA commercialization package and define its full-year module structure, text architecture, and lesson inventory."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Define the full-year kindergarten ELA program shape (Priority: P1)

A curriculum lead can see the intended module structure for a full-year kindergarten ELA program instead of treating existing literacy pilots as standalone units.

**Why this priority**: The repository needs a real annual ELA subject program before further textbook expansion is meaningful.

**Independent Test**: A contributor can identify the kindergarten ELA modules, their approximate duration, and the literacy strands emphasized in each.

**Acceptance Scenarios**:

1. **Given** the kindergarten commercialization artifacts, **When** a contributor reads the ELA package, **Then** they can see a year-long module sequence rather than isolated pilots.
2. **Given** a request to create new kindergarten literacy lessons, **When** the contributor consults the ELA package, **Then** they can place those lessons into the correct module and strand.

### User Story 2 - Define the kindergarten ELA text architecture (Priority: P1)

A curriculum designer can tell what kinds of texts and text sets the program requires across the year.

**Why this priority**: Commercial-grade literacy programs depend on strong text architecture, not just lesson topics.

**Independent Test**: A contributor can identify the repository's intended use of read-alouds, shared reading texts, decodables, poems/chants, picture supports, and home-reading assets.

**Acceptance Scenarios**:

1. **Given** the ELA commercialization package, **When** a contributor reads the text architecture document, **Then** they can see which text families are required and how they function instructionally.
2. **Given** a request to source or generate a new student text, **When** the contributor consults the package, **Then** they can determine whether the text belongs in read-aloud, shared reading, decodable, or another text family.

### User Story 3 - Define a full-year lesson inventory (Priority: P1)

A build lead can measure progress toward a commercially credible kindergarten ELA program using a real annual lesson inventory.

**Why this priority**: The repository currently has only a few literacy pilot lessons and needs a year-scale lesson map.

**Independent Test**: A contributor can identify planned weekly kindergarten ELA lessons across the year and the lesson types used in each module.

**Acceptance Scenarios**:

1. **Given** the ELA package, **When** a reviewer checks the lesson inventory, **Then** they can trace a 36-week kindergarten ELA sequence.
2. **Given** a partially authored kindergarten ELA set, **When** the build lead compares it to the inventory, **Then** the missing yearly coverage is explicit.

## Edge Cases

- How should the program treat text-heavy expectations that exceed independent kindergarten reading ability?
- How should decodable-text work be sequenced so it does not distort oral language and comprehension priorities?
- How should multilingual and accessibility supports show up in a yearly literacy architecture rather than only in lesson notes?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The repository MUST create a dedicated kindergarten ELA commercialization package as a canonical subject-program layer.
- **FR-002**: The package MUST define a full-year module structure for kindergarten ELA.
- **FR-003**: The package MUST define the role of major literacy strands, including oral language, comprehension, phonological awareness, foundational skills, writing, speaking/listening, and language.
- **FR-004**: The package MUST define the kindergarten ELA text architecture, including read-aloud, shared reading, decodable, poetry/chant, picture-support, and family-reading asset types.
- **FR-005**: The package MUST define a year-scale lesson inventory aligned to the module structure.
- **FR-006**: The package MUST include standards-band mapping tied to kindergarten ELA expectations.
- **FR-007**: The package MUST explicitly preserve accessibility, multilingual support, and teacher-mediated participation expectations.
- **FR-008**: The package MUST connect existing kindergarten literacy pilot packets to the new annual ELA architecture.
- **FR-009**: The package MUST remain consistent with the kindergarten commercialization architecture established in `specs/004-kindergarten-commercial-grade-program/`.

### Key Entities *(include if feature involves data)*

- **ELA Module**: A time-bounded portion of the kindergarten literacy year with defined strand priorities and lesson patterns.
- **Text Family**: A type of text or media asset used in the ELA program for a distinct instructional purpose.
- **Lesson Inventory Item**: A planned lesson slot in the annual ELA sequence identified by week, lesson number, and instructional role.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The repository contains a dedicated kindergarten ELA commercialization package under `curriculum/kindergarten/`.
- **SC-002**: The package defines a full-year module structure spanning the kindergarten year.
- **SC-003**: The package defines a reusable text architecture for kindergarten ELA.
- **SC-004**: The package defines a week-banded lesson inventory covering the full year.
- **SC-005**: The package maps existing literacy pilots into the broader annual ELA architecture.

## Assumptions

- The kindergarten ELA program will be the first true commercial-grade subject prototype in the repository.
- The first implementation pass will define the architecture and inventory rather than fully author every lesson page.
- Human review remains required before any resulting ELA artifacts are treated as classroom-ready.
