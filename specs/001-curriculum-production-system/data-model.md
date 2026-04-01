# Data Model: Spec-Driven Curriculum Production System

## Overview

This feature uses a repository-native artifact model. The entities below describe the minimum shared structure that curriculum content, support materials, reviews, and future supporting software must recognize.

## Entity: Curriculum Unit

**Purpose**: Represents a standards-aligned instructional sequence at the unit level.

**Fields**

- `unit_id`: stable repository identifier
- `title`: human-readable unit title
- `subject_area`: mathematics, literacy, science, civics/history, or explicitly provisional subject
- `grade_band`: intended learner range
- `learning_goals`: explicit desired results
- `standards_summary`: summary of standards alignment
- `lesson_sequence`: ordered list of lesson references
- `assessment_evidence`: unit-level evidence of mastery
- `accessibility_notes`: barriers, supports, and inclusion considerations
- `materials_and_dependencies`: texts, tools, media, or prerequisites
- `ai_use_record`: provenance note when substantial AI assistance was used
- `review_status`: draft, in-review, approved with changes, approved, or rejected

**Relationships**

- has many `Lesson Artifact`
- has many `Support Material`
- has one or more `Standards Mapping Record`
- has one or more `Review Record`

**Validation Rules**

- must include at least one learning goal
- must include standards alignment or an explicit explanation of why standards do not apply
- must not be marked approved without at least one review record
- must not reference student PII

## Entity: Lesson Artifact

**Purpose**: Represents a lesson-level instructional artifact.

**Fields**

- `lesson_id`: stable repository identifier
- `unit_id`: parent unit reference
- `title`: lesson title
- `objective`: lesson-level learning target
- `standards_refs`: specific standards identifiers or mapped references
- `lesson_flow`: opening, core learning activity, checks for understanding, and closure
- `materials`: required resources and tools
- `assessment_notes`: formative or summative evidence planned in the lesson
- `accessibility_notes`: accommodations, scaffold design, representation, and participation supports
- `subject_specific_notes`: discipline-aware constraints from subject foundations
- `ai_use_record`: provenance note when applicable
- `review_status`: draft, in-review, approved with changes, approved, or rejected

**Relationships**

- belongs to one `Curriculum Unit`
- has one or more `Standards Mapping Record`
- has one or more `Review Record`
- may have many `Support Material`

**Validation Rules**

- must map to a parent unit or explicitly note standalone status
- must include objective, standards references, accessibility notes, and assessment notes
- must not be marked approved without review evidence

## Entity: Support Material

**Purpose**: Represents teacher-facing or learner-facing materials derived from curriculum intent.

**Fields**

- `support_id`: stable repository identifier
- `artifact_type`: teacher guide, scaffold, rubric, exemplar, handout, professional learning aid, or other declared type
- `audience`: teacher, learner, facilitator, or reviewer
- `source_artifact_refs`: linked unit or lesson identifiers
- `purpose`: what instructional or implementation problem the support material addresses
- `alignment_notes`: how the material preserves the objectives, standards, and assessment logic of the source artifact
- `accessibility_notes`: accessibility and inclusion considerations
- `ai_use_record`: provenance note when applicable
- `review_status`: draft, in-review, approved with changes, approved, or rejected

**Relationships**

- derives from one or more `Curriculum Unit` or `Lesson Artifact`
- may have one or more `Review Record`

**Validation Rules**

- must identify its intended audience
- must identify at least one source artifact
- must not contradict source objectives or standards alignment

## Entity: Standards Mapping Record

**Purpose**: Provides inspectable alignment between an artifact and an applicable standards framework.

**Fields**

- `mapping_id`: stable repository identifier
- `artifact_ref`: linked unit, lesson, or support material
- `framework_name`: standards framework name
- `standard_identifier`: specific standard code or descriptor
- `alignment_type`: direct, supporting, partial, or contextual
- `alignment_evidence`: short rationale or evidence note
- `status`: draft, reviewed, or approved

**Relationships**

- belongs to one curriculum or support artifact
- may be referenced by `Review Record`

**Validation Rules**

- must include a framework name and standard identifier
- decorative or unsupported mappings are not allowed

## Entity: Review Record

**Purpose**: Captures formal review state and release decisions.

**Fields**

- `review_id`: stable repository identifier
- `artifact_ref`: linked artifact identifier
- `review_type`: alignment, accuracy, accessibility, assessment, AI governance, privacy/tool-safety, or release review
- `reviewer`: named human reviewer or accountable review role
- `review_date`: ISO date
- `findings`: summary of issues or confirmation
- `decision`: pass, pass with changes, hold, or fail
- `follow_up_actions`: required revisions or next steps

**Relationships**

- belongs to one artifact
- may reference one or more `Standards Mapping Record`

**Validation Rules**

- review records must be human-accountable
- approval decisions must be traceable to at least one completed review record

## Entity: Software Feature Spec

**Purpose**: Represents a supporting software feature that consumes or validates curriculum artifacts.

**Fields**

- `feature_id`: stable repository identifier
- `title`: software feature name
- `target_artifact_types`: unit, lesson, support material, standards mapping, review record, or combinations
- `feature_goal`: user-facing purpose
- `input_requirements`: metadata or files the tool consumes
- `output_behavior`: report, validation result, transformation, export, or other declared behavior
- `governance_constraints`: privacy, portability, accessibility, and AI-governance constraints
- `review_gates`: quality checks the tool must enforce or expose
- `status`: draft, planned, implemented, validated

**Relationships**

- consumes one or more artifact entities
- may generate or update `Review Record` state, but must not bypass human approval

**Validation Rules**

- must reference existing artifact categories from this model
- must not require student PII in versioned repository content
- must preserve or expose required review metadata instead of hiding it

## Cross-Entity State Model

The shared release lifecycle is:

1. `draft`
2. `in-review`
3. `approved with changes`
4. `approved`
5. `rejected`

Additional notes:

- `approved` requires completed review records
- `approved with changes` allows controlled iteration but is not final publication
- provisional subject areas remain allowed, but they must be labeled as provisional or incomplete
