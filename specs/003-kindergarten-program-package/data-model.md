# Data Model: Kindergarten Program Package

## Overview

This feature adds a program-layer model above the repository’s packet model.

Program artifacts are assembled from governed packet artifacts and remain traceable to them.

## Entity: Program Package

**Purpose**: Represents the assembled kindergarten instructional program.

**Fields**

- `program_id`: stable repository identifier
- `grade_band`: kindergarten
- `included_packet_refs`: source packet identifiers
- `program_status`: draft, teacher-usable, classroom-ready, or released
- `assembly_notes`: notes on scope, omissions, and sequencing

**Relationships**

- has many `Textbook Artifact`
- has many `Workbook Artifact`
- has many `Teacher Edition Artifact`
- has many `Assessment Pack Artifact`
- has many `Grading Key Artifact`

## Entity: Textbook Artifact

**Purpose**: Student-facing instructional content volume assembled from packet-aligned lessons, texts, visuals, and prompts.

**Fields**

- `textbook_id`
- `title`
- `source_packet_refs`
- `source_lesson_refs`
- `content_scope`
- `accessibility_notes`
- `review_status`

## Entity: Workbook Artifact

**Purpose**: Student-facing practice and response materials aligned to packet lessons.

**Fields**

- `workbook_id`
- `title`
- `source_packet_refs`
- `source_lesson_refs`
- `included_assignment_refs`
- `home_practice_refs`
- `accessibility_notes`
- `review_status`

## Entity: Teacher Edition Artifact

**Purpose**: Teacher-facing instructional execution artifact for day-to-day classroom use.

**Fields**

- `teacher_edition_id`
- `title`
- `source_packet_refs`
- `source_lesson_refs`
- `lesson_narrative_refs`
- `classroom_assignment_refs`
- `assessment_refs`
- `grading_key_refs`
- `pacing_notes`
- `review_status`

## Entity: Assessment Pack Artifact

**Purpose**: A grouped set of lesson checks, quizzes, tests, observation tools, or performance tasks.

**Fields**

- `assessment_pack_id`
- `title`
- `source_packet_refs`
- `included_assessment_refs`
- `scoring_guidance_refs`
- `review_status`

## Entity: Grading Key Artifact

**Purpose**: Teacher-facing scoring support for workbook and assessment artifacts.

**Fields**

- `grading_key_id`
- `title`
- `source_packet_refs`
- `answer_key_refs`
- `rubric_refs`
- `exemplar_refs`
- `review_status`

## Cross-Layer Mapping Rules

- program artifacts must reference their source packet and lesson IDs
- no program artifact may imply approval if the source packet remains unreviewed
- student-facing and teacher-facing program artifacts inherit accessibility, AI-governance, and review obligations from the source packets

## Maturity States

### Packet-Complete

Minimum:

- unit
- lesson
- standards map
- review record
- support-material baseline

### Teacher-Usable

Minimum:

- packet-complete
- lesson narrative
- classroom task sheet
- answer key or exemplar
- scoring guidance

### Classroom-Ready

Minimum:

- teacher-usable
- workbook materials
- assessment pack
- grading key
- completed human review for instructional quality and usability
