# AI Governance Framework for Open Curriculum

## Purpose

This document defines the baseline governance model for using AI to support the creation, revision, review, and maintenance of open curriculum materials in this repository.

It is intended to turn the project's charter-level commitment to AI-generated curriculum into a controlled operating model that protects educational quality, student safety, accessibility, and public trust.

## Scope

This framework applies to any use of AI in the project for:

- curriculum drafting
- lesson revision
- assessment item generation
- teacher-guide generation
- translation or localization support
- feedback summarization
- metadata tagging or standards mapping

It applies whether the AI output is directly published or only used as a drafting aid.

## Core Position

AI may accelerate curriculum development, but it does not reduce the repository's responsibility for:

- factual accuracy
- age appropriateness
- accessibility
- cultural and linguistic responsiveness
- standards alignment
- assessment quality
- licensing and provenance integrity

No curriculum artifact should be treated as trustworthy merely because AI produced it fluently.

## Project Governance Principles

### 1. Purpose Before Automation

AI should be used only where it serves educational goals, contributor productivity, or quality improvement. It should not be used simply because it is available.

Project implication:

- every AI-assisted workflow should identify the educational purpose it serves
- AI use that weakens instructional coherence or review quality should be rejected

### 2. Human Accountability Is Non-Delegable

Humans remain responsible for final approval of published materials.

Project implication:

- AI may propose content
- humans must approve content
- the project, not the model, owns the decision to publish

### 3. AI Output Is Draft Material Until Reviewed

All AI-generated text, tasks, assessments, rubrics, examples, and explanations should be treated as unverified until reviewed.

Project implication:

- generated artifacts begin in a draft state
- publication requires explicit review gates

### 4. Safety, Bias, and Representation Require Active Review

Generative systems can introduce:

- bias
- stereotypes
- historical inaccuracies
- unsafe advice
- uneven treatment of student groups

Project implication:

- review must include bias and representation checks, not only correctness checks

### 5. Traceability Matters

The repository should be able to explain how a curriculum artifact was produced and reviewed.

Project implication:

- AI-assisted artifacts should retain basic provenance records
- prompt, model, date, reviewer, and revision notes should be recoverable where practical

### 6. Academic Integrity Must Be Designed, Not Assumed

AI changes how learners may complete assignments and how teachers may assess understanding.

Project implication:

- curriculum and assessment design must account for AI-enabled misuse
- the project should prefer tasks that require reasoning, evidence, process visibility, and authentic application

## Approved AI Use Categories

The following uses are generally acceptable if reviewed:

- first-draft lesson plans
- differentiated examples and scaffolds
- reading-level adaptation drafts
- discussion prompt generation
- rubric drafting
- standards-tagging suggestions
- teacher-facing summary materials
- translation drafts requiring human review

## Restricted AI Use Categories

The following uses require stricter controls:

- assessments used for grading
- sensitive historical, civic, health, or identity-related topics
- student-facing feedback automation
- special education or accommodation guidance
- curriculum involving legal, medical, or mental-health framing

Required controls for restricted uses:

- subject-matter review
- bias and harm review
- factual/source verification
- clear suitability check for grade level

## Prohibited or Disfavored Uses

The project should avoid or prohibit:

- publishing unreviewed AI output
- generating citations without verification
- using AI to fabricate case studies, evidence, or classroom results
- using AI to make final judgments about individual students
- using AI output as a substitute for accessibility review
- passing copyrighted third-party material into workflows without confirming rights

## Required Review Gates

Every AI-assisted curriculum artifact should pass these gates before publication:

### Gate 1: Accuracy Review

Check for:

- factual correctness
- mathematical correctness
- internal consistency
- source-grounded claims where appropriate

### Gate 2: Instructional Review

Check for:

- coherence of objectives, tasks, and assessment
- standards alignment
- grade-level appropriateness
- teacher usability

### Gate 3: Inclusion and Accessibility Review

Check for:

- accessibility implications
- readability and modality support
- culturally responsive framing
- avoidable barriers for diverse learners

### Gate 4: Integrity and Safety Review

Check for:

- opportunities for cheating or shallow completion
- harmful or biased assumptions
- unsafe instructions or examples
- inappropriate collection or use of student data

### Gate 5: Provenance and Release Review

Check for:

- whether AI assistance is documented
- whether sources are recorded where needed
- whether the artifact meets repository release conventions

## Minimum Provenance Record

For substantial AI-assisted artifacts, record at least:

- date of generation
- tool or model used
- purpose of use
- name or identifier of reviewer
- major issues found and corrected

This does not need to be burdensome, but it must be enough to support accountability and re-review.

## Assessment-Specific Controls

Assessment materials need stricter governance because AI can distort validity.

Rules:

- do not assume an AI-generated assessment is valid because it is well written
- require human review of difficulty, clarity, alignment, and fairness
- prefer tasks that expose reasoning and process
- include opportunities for oral defense, annotation, reflection, or iterative drafts where appropriate
- avoid assessment designs that can be completed well by generic prompting alone

## Model Evaluation Expectations

Before relying on an AI workflow broadly, the project should test it against representative curriculum tasks.

Evaluation dimensions:

- factual reliability
- consistency across runs
- standards alignment quality
- bias or stereotyping risk
- accessibility-aware output quality
- hallucination rate in examples and references
- usefulness to teachers and reviewers

## Operational Rules for Contributors

Contributors using AI should:

1. treat AI output as provisional
2. verify claims and examples
3. document meaningful AI assistance
4. avoid overstating confidence in generated content
5. escalate sensitive topics for extra review

## Immediate Repository Policy Recommendation

Until fuller workflow documents are added, this repository should operate with the following default:

- AI-generated curriculum is allowed for draft creation
- no AI-generated curriculum is considered publishable without human review
- any assessment, policy, or student-facing content on sensitive topics requires enhanced review

## Open Questions for Phase 2

- what exact review artifact should store provenance
- how detailed AI disclosure should be in published curriculum
- whether the project should maintain approved-model lists
- how often legacy AI-generated content should be revalidated

## Sources

- TeachAI. *AI Guidance for Schools Toolkit* (March 2025). [https://www.teachai.org/toolkit](https://www.teachai.org/toolkit)
- TeachAI. *Principles for AI Guidance*. [https://www.teachai.org/toolkit-principles](https://www.teachai.org/toolkit-principles)
- TeachAI. *Sample Guidance*. [https://www.teachai.org/toolkit-guidance](https://www.teachai.org/toolkit-guidance)
- NIST AI Resource Center. [https://airc.nist.gov/](https://airc.nist.gov/)

## Confidence

Medium-high confidence.

Reason:

- the governance principles are well supported by current official and field guidance
- some operational details are still repository-specific and should be refined through pilot use
