# Research Methodology

## Purpose

This document defines how the `research/` directory should be expanded, cited, reviewed, and maintained.

The repository is intended to support an open-source, AI-assisted K-12 curriculum effort. That requires research discipline beyond general documentation. The goal is to ensure that future curriculum and governance work is grounded in credible, current, and decision-useful evidence.

## Methodology Principles

### 1. Prefer Primary Sources

Use official or primary sources whenever possible:

- standards bodies
- government guidance
- original framework publishers
- consensus professional standards
- directly documented case evidence

Secondary summaries may be used for orientation, but they should not be the sole basis for project-critical decisions.

### 2. Separate Stable from Time-Sensitive Claims

Not all claims age at the same rate.

#### Stable claims

These usually remain valid over long periods:

- backward design principles
- Bloom's taxonomy concepts
- general assessment validity concepts
- UDL as a design stance

#### Time-sensitive claims

These require explicit date handling:

- AI governance guidance
- product or platform recommendations
- state standards changes
- legal or policy interpretations
- interoperability implementation guidance
- market size and cost claims

For time-sensitive claims, record the relevant date in the source note.

### 3. Distinguish Evidence from Recommendation

Every research document should clearly separate:

- what a source says
- what the project infers from that source
- what the repository recommends doing

That distinction matters because this repository is not only describing the field; it is making operating decisions based on it.

### 4. Use Explicit Confidence Levels

Contributors should classify major findings as:

- `high confidence`: grounded in official or well-established sources with broad agreement
- `medium confidence`: supported by credible sources but still context-dependent
- `provisional`: plausible and useful, but incomplete, emerging, or awaiting stronger evidence

### 5. Avoid Unsupported Quantification

Do not include broad market, cost-saving, or impact claims unless:

- the source is explicit
- the scope is clear
- the context is comparable

If evidence is indirect or variable, say so.

## Required Structure for Research Files

Every substantial research document should include these sections or equivalents:

1. purpose or scope
2. key findings
3. implications for this project
4. open questions or limits
5. sources

## Source Evaluation Rubric

When evaluating whether to rely on a source, review it across these dimensions:

### Authority

- Is the authoring organization credible in this domain?
- Is the document official guidance, consensus standard, research, or commentary?

### Currency

- When was it published or updated?
- Is recency important for this topic?

### Relevance

- Does it apply to K-12 curriculum design, open education, accessibility, AI, privacy, or interoperability?
- Is the source directly useful for this repository's decisions?

### Specificity

- Does it support a concrete recommendation?
- Or is it only general context?

### Transferability

- Does it apply broadly, or only to a narrow local context?
- If local, can the lesson still inform repository policy?

## Citation Practice

At minimum, citations should include:

- source title
- organization
- link
- publication or update context where known

For major claims, also include:

- why the source is being used
- whether the recommendation is direct or inferred

## Evidence Classes

Use these evidence classes in research notes when helpful:

- `official guidance`
- `technical standard`
- `consensus professional standard`
- `peer-reviewed research`
- `field framework`
- `case evidence`
- `commentary`

## Review Workflow

### Drafting

The author prepares the research note and records source metadata.

### Verification

A reviewer checks:

- claim-to-source alignment
- date sensitivity
- missing counterpoints
- overstatements
- broken links

### Approval for operational use

A document is ready to guide project decisions when:

- major claims are cited
- limitations are noted
- recommendations are explicit
- the file does not depend mainly on placeholder text

## Handling Incomplete Research

If a topic is important but evidence is still incomplete:

1. create the file anyway if it is needed for planning
2. mark uncertain sections clearly
3. label recommendations as provisional
4. list the missing sources needed to close the gap

Do not present provisional research as settled guidance.

## Relationship to Curriculum Production

The research directory is not just background reading. It should directly inform:

- curriculum design criteria
- assessment design
- content accessibility requirements
- AI generation and review policy
- contributor workflows
- publication and governance decisions

If a research file does not create a useful project decision, policy, rubric, or constraint, it should be reconsidered.

## Immediate Phase 1 Standards

During the current cleanup phase, every existing research file should at least:

- stop linking to non-existent internal files without labeling them as future work
- distinguish current evidence from aspirational statements
- reference shared sources where applicable

## Future Phase 2 Standards

As the repository matures, research files should also include:

- explicit contributor checklists
- operational review criteria
- update history
- cross-links to implementation artifacts and templates
