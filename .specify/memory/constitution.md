# Open Curriculum Constitution

## Core Principles

### I. Learning-First and Standards-Aligned

All curriculum, teacher materials, assessments, and supporting software MUST begin with clear learning goals and explicit standards alignment where applicable.

Implications:

- artifacts MUST state the intended learner outcome
- standards tags MUST be specific and plausible, not decorative
- instruction, assessment, and support materials MUST align to the same target

### II. Human-Reviewed AI, Never Autonomous Publication

AI MAY be used for drafting, transformation, and support work, but no AI-assisted artifact is publishable without human review.

Implications:

- AI output is draft material until reviewed
- sensitive topics and graded assessments require elevated review
- AI use and meaningful provenance MUST be recorded for substantial artifacts

### III. Accessibility and Inclusion by Default

Accessibility and inclusion are not optional enhancement work. They are baseline requirements for all curriculum and software produced in this repository.

Implications:

- curriculum artifacts MUST consider accessibility from the start
- digital outputs MUST be designed toward WCAG 2.2-informed practice
- lesson, unit, and assessment design MUST reduce avoidable barriers
- examples, framing, and source choices MUST be reviewed for inclusion and cultural respect

### IV. Evidence, Accuracy, and Trustworthiness

This repository MUST prefer defensible, reviewable, and source-aware work over fluent but weak output.

Implications:

- factual, historical, mathematical, and scientific claims MUST be reviewed for correctness
- invented citations, quotations, or evidence are prohibited
- synthesis documents MUST not overstate what the evidence supports
- subject-specific risks MUST be checked in authoring and release review

### V. Portability, Privacy, and Safe Tooling

Curriculum and software MUST be designed so they are portable, privacy-conscious, and not unnecessarily dependent on a single platform or unsafe external tool.

Implications:

- source-of-truth artifacts SHOULD remain editable and portable
- real student PII MUST NOT be stored in repository content
- classroom-facing or student-data-adjacent tools require vetting
- software and content choices SHOULD minimize avoidable lock-in

## Artifact Requirements

The repository is expected to produce three broad classes of outputs:

1. curriculum artifacts
   - units
   - lessons
   - assessments
   - teacher guides
   - standards maps
2. support materials
   - review rubrics
   - implementation guides
   - accessibility notes
   - professional learning aids
3. software and tooling
   - curriculum packaging tools
   - metadata and standards utilities
   - review workflow support tools

All three classes MUST comply with the core principles above.

## Workflow and Quality Gates

Every substantial artifact MUST pass these gates before release:

1. alignment and coherence review
2. quality and factual accuracy review
3. accessibility and inclusion review
4. assessment review when assessment is involved
5. AI governance review when AI was used
6. privacy and tool-safety review when tools, data, or software are involved

The repository templates and checklists in `research/14-production-templates/` are the default operational forms for these gates unless a later spec replaces them with a stricter mechanism.

## Spec-Driven Development Rules

Spec-driven work in this repository MUST follow this order:

1. constitution
2. feature specification
3. clarification if needed
4. implementation plan
5. tasks
6. implementation

Agents MUST treat the following as authoritative inputs when creating specifications or plans:

- `.specify/memory/constitution.md`
- `research/EXECUTIVE_SUMMARY.md`
- `research/README.md`
- `research/13-subject-foundations/`
- `research/14-production-templates/`

## Governance

This constitution supersedes informal contributor preference when there is a conflict about artifact quality, release readiness, or workflow.

Any future amendment MUST:

- update this file
- explain the reason for the change
- preserve compatibility with existing specs or document required migration

All specifications, plans, tasks, code, and review decisions MUST be checked against this constitution.

**Version**: 1.0.0 | **Ratified**: 2026-04-01 | **Last Amended**: 2026-04-01
