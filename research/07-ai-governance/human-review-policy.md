# Human Review Policy for AI-Assisted Curriculum

## Purpose

This policy defines the minimum human review required before AI-assisted curriculum artifacts can be treated as publishable within this repository.

It operationalizes the principle that AI output is draft material until reviewed and approved by accountable humans.

## Scope

This policy applies to any artifact materially shaped by AI, including:

- lessons
- units
- assessments
- rubrics
- teacher guides
- exemplars
- standards mappings
- summaries or support materials

## Policy Statement

No AI-assisted artifact may be published as a project-approved curriculum resource until it has passed human review appropriate to its risk level.

Human review is required because AI systems can produce:

- factual errors
- invented citations
- weak instructional sequencing
- inaccessible formats
- biased or exclusionary framing
- invalid or gameable assessments

## Review Roles

### Primary reviewer

Responsible for:

- reading the full artifact
- checking instructional coherence
- confirming the artifact is ready for further review or revision

### Domain reviewer

Required when the artifact covers sensitive, technical, or specialized content.

Examples:

- math/science accuracy reviewer
- history/civics sensitivity reviewer
- accessibility reviewer
- assessment quality reviewer

### Release reviewer

Responsible for confirming:

- required review gates are complete
- provenance is recorded
- release conventions are satisfied

In smaller teams, one person may hold multiple roles, but the functions must still be performed.

## Risk Levels

### Level 1: Standard instructional content

Examples:

- routine lessons
- practice materials
- teacher-facing summaries

Required review:

- primary review
- release review

### Level 2: High-impact instructional content

Examples:

- summative assessments
- standards maps
- core unit overviews
- materials that shape student evaluation

Required review:

- primary review
- relevant domain review
- release review

### Level 3: Sensitive content

Examples:

- health
- identity
- civics
- controversial history
- special education or accommodation guidance
- content that could introduce safety, legal, or privacy risk

Required review:

- primary review
- domain review by an appropriate subject-matter reviewer
- inclusion/sensitivity review
- release review

## Required Review Checks

Every AI-assisted artifact should be reviewed for:

### 1. Accuracy

- claims are correct
- examples are correct
- references are real if included
- there are no fabricated quotations or sources

### 2. Instructional Quality

- objectives are clear
- activities match objectives
- assessment matches intended learning
- sequence is coherent for the intended grade band

### 3. Accessibility and Inclusion

- structure is usable
- barriers are reduced
- language and examples are inclusive
- delivery format does not create unnecessary exclusion

### 4. Assessment Integrity

If the artifact contains assessment:

- the task measures what it claims to measure
- the item is not trivially solvable by generic AI prompting
- instructions are clear and fair
- scoring expectations are usable

### 5. Safety and Privacy

- there is no harmful advice
- no unnecessary student data assumptions are embedded
- any tool-dependent workflow avoids unsafe privacy practices

## Review Outcomes

Each reviewed artifact should end in one of three states:

- `approved`
- `approved with revisions`
- `not approved`

If significant issues are found, the artifact should return to draft status.

## Minimum Review Record

For each AI-assisted artifact, record:

- artifact name or path
- reviewer name or identifier
- review date
- risk level
- approval state
- key issues found
- key fixes made

This can be lightweight, but it must exist.

## Fast Rules for Reviewers

Reject or return for revision if any of the following are found:

- fabricated citations
- factual errors in core content
- inaccessible essential content
- stereotypes or biased framing
- assessment tasks that do not align to the objective
- instructions that require external tools without explanation or vetting

## Initial Repository Recommendation

Until more detailed workflow tooling exists:

1. treat all AI-assisted content as requiring at least one full human read
2. require a second reviewer for assessments and sensitive topics
3. do not publish AI-generated citations or case examples without verification

## Relationship to Future Artifacts

This policy should eventually connect to:

- `model-evaluation-checklist.md`
- accessibility review checklist
- HQIM review rubric
- release checklist

## Sources

- TeachAI. *AI Guidance for Schools Toolkit*. [https://www.teachai.org/toolkit](https://www.teachai.org/toolkit)
- TeachAI. *Principles for AI Guidance*. [https://www.teachai.org/toolkit-principles](https://www.teachai.org/toolkit-principles)
- NIST AI Resource Center. [https://airc.nist.gov/](https://airc.nist.gov/)

## Confidence

Medium-high confidence.

Reason:

- the need for human oversight is strongly supported
- exact workflow roles may evolve as the repository's contributor model matures
