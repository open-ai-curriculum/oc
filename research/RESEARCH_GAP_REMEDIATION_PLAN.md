# Research Gap Remediation Plan

## Purpose

This plan converts the current research review into a practical remediation program so the repository can develop a credible, current, and reusable research base for open-source K-12 curriculum development.

The goal is not only to improve the quality of the `research/` directory, but to make it usable as an operating reference for future curriculum design, review, release, and governance work.

## Current State Summary

The existing research set provides a usable starting orientation around:

- backward design and core curriculum frameworks
- standards-based design
- open-source advocacy
- implementation guidance
- assessment strategy

However, it is not yet strong enough to function as a state-of-the-art research foundation because it has four major weaknesses:

1. Many claims are uncited or insufficiently sourced.
2. Several linked follow-on documents do not exist.
3. Important best-practice domains are missing.
4. The materials are largely conceptual and do not yet define operational quality controls.

## Remediation Objectives

The remediation effort should produce a research base that is:

- evidence-backed
- current as of 2024-2026 guidance where recency matters
- operationally useful for contributors
- aligned with open education and open-source best practices
- suitable for AI-assisted curriculum production and review

## Priority Gaps

### Gap 1: Citation and Evidence Discipline

The current research makes strategic and quantitative claims without a reference model, source table, or evidence grading.

#### Why this matters

Without citations, the repository cannot distinguish:

- durable educational principles from recent trends
- primary guidance from opinion
- measured evidence from advocacy language

#### Required outputs

- `research/references.md`
- `research/research-methodology.md`
- source annotation template for every major research file

#### Minimum standard

Each major assertion should identify:

- source
- publication or update date
- source type: official guidance, academic research, industry framework, or commentary
- confidence level for use in project decisions

### Gap 2: AI Governance for AI-Generated Curriculum

The repository charter depends heavily on AI generation, but the research does not yet define a governance model for AI-assisted content production.

#### Why this matters

This project cannot responsibly generate curriculum at scale without clear controls for:

- hallucination and factual error
- age appropriateness
- bias and representation
- human review requirements
- provenance and traceability
- model evaluation and revalidation

#### Required outputs

- `research/07-ai-governance/ai-governance-framework.md`
- `research/07-ai-governance/human-review-policy.md`
- `research/07-ai-governance/model-evaluation-checklist.md`

#### Research focus

- human-in-the-loop review
- disclosure and provenance
- safe use of generative AI in schools
- prompt/version traceability
- test and evaluation practices
- academic integrity implications

### Gap 3: Accessibility and Inclusive Delivery Standards

The current research mentions UDL, but not the operational standards needed to publish accessible curriculum assets and digital experiences.

#### Why this matters

Inclusive design requires more than pedagogical intent. It requires standards, tests, and artifact requirements.

#### Required outputs

- `research/08-accessibility-and-inclusion/accessibility-standards.md`
- `research/08-accessibility-and-inclusion/accessibility-review-checklist.md`
- `research/08-accessibility-and-inclusion/multimodal-content-guidance.md`

#### Research focus

- CAST UDL 3.0
- WCAG 2.2
- document accessibility
- captions, transcripts, alt text, reading order
- printable and offline access
- supports for multilingual and diverse learner contexts

### Gap 4: Privacy, Student Data, and Security

The current research does not yet define how student data, analytics, assessment data, and AI-enabled workflows will be handled.

#### Why this matters

Any open curriculum intended for real adoption needs privacy and security guidance, especially if the project later ships tools, analytics, or AI-assisted features.

#### Required outputs

- `research/09-privacy-and-security/student-data-privacy.md`
- `research/09-privacy-and-security/tool-vetting-framework.md`
- `research/09-privacy-and-security/security-baseline.md`

#### Research focus

- FERPA-aligned handling
- data minimization
- third-party tool review
- retention and deletion expectations
- parent/community trust considerations

### Gap 5: Interoperability and Machine-Readable Standards Mapping

The current standards work is instructional, but not technical.

#### Why this matters

An open curriculum should be portable across systems and reusable without manual rework. That requires metadata, identifiers, and machine-readable standards relationships.

#### Required outputs

- `research/10-interoperability/interoperability-overview.md`
- `research/10-interoperability/standards-tagging-model.md`
- `research/10-interoperability/content-packaging-options.md`

#### Research focus

- 1EdTech CASE
- content portability
- standards tagging conventions
- learning object metadata
- packaging and exchange formats

### Gap 6: OER Licensing, Governance, and Sustainability

The current open-source argument is strong rhetorically but underdeveloped operationally.

#### Why this matters

A durable open curriculum needs governance, contribution policy, maintenance ownership, localization strategy, and a licensing posture that works globally and practically.

#### Required outputs

- `research/11-oer-governance/oer-governance-model.md`
- `research/11-oer-governance/licensing-analysis.md`
- `research/11-oer-governance/contributor-governance.md`

#### Research focus

- UNESCO OER Recommendation
- public domain vs. CC licensing tradeoffs
- source file publication norms
- localization and adaptation workflows
- sustainability and stewardship models

### Gap 7: High-Quality Instructional Materials and Review Criteria

The current research references standards and frameworks but lacks a rigorous materials-quality model.

#### Why this matters

The project needs a concrete definition of what “good” curriculum looks like before it scales generation.

#### Required outputs

- `research/12-hqim-and-review/hqim-review-framework.md`
- `research/12-hqim-and-review/unit-review-rubric.md`
- `research/12-hqim-and-review/lesson-review-rubric.md`

#### Research focus

- coherence across lessons and units
- rigor and grade-level appropriateness
- assessment alignment
- teacher usability
- cultural and linguistic responsiveness
- accessibility within materials, not only around them

### Gap 8: Real Case Studies and Comparative Evidence

The current `06-case-studies` directory is only a placeholder.

#### Why this matters

The repository needs grounded examples of what real adoption, governance, and quality assurance look like in practice.

#### Required outputs

- at least 5 fully documented case studies
- at least 2 comparative analyses of open vs. commercial approaches
- 1 case study template for future contributions

#### Recommended case study structure

- context
- problem statement
- implementation model
- governance model
- outcomes and evidence
- lessons learned
- replication guidance

## Structural Cleanup Work

Before expanding the research set, fix the current structural issues:

1. Remove or replace broken links to non-existent files.
2. Mark placeholder sections clearly where evidence is still being assembled.
3. Add a bibliography section to every major research document.
4. Standardize terminology across:
   - open source
   - open educational resources
   - public domain
   - standards-aligned
   - AI-generated

## Proposed Directory Expansion

```text
research/
├── README.md
├── EXECUTIVE_SUMMARY.md
├── references.md
├── research-methodology.md
├── 01-curriculum-frameworks/
├── 02-standards-based-design/
├── 03-open-source-advantages/
├── 04-implementation-guides/
├── 05-assessment-strategies/
├── 06-case-studies/
├── 07-ai-governance/
├── 08-accessibility-and-inclusion/
├── 09-privacy-and-security/
├── 10-interoperability/
├── 11-oer-governance/
└── 12-hqim-and-review/
```

## Execution Plan

### Phase 1: Stabilize the Research Base

#### Duration

1-2 weeks

#### Actions

1. Add `references.md` and `research-methodology.md`.
2. Repair broken links and placeholders.
3. Add source sections to current files.
4. Separate evidence-backed findings from opinion or strategic positioning.

#### Exit criteria

- no broken internal links in `research/`
- every existing research file includes sources or an explicit citation TODO section
- methodology for evaluating sources is documented

### Phase 2: Fill Decision-Critical Gaps

#### Duration

2-4 weeks

#### Actions

1. Add AI governance research pack.
2. Add accessibility/inclusion research pack.
3. Add privacy/security research pack.
4. Add interoperability research pack.
5. Add OER governance/licensing research pack.
6. Add HQIM/materials review research pack.

#### Exit criteria

- each new area includes one overview, one policy/checklist artifact, and one implementation-oriented document
- all new files rely primarily on official or primary sources

### Phase 3: Build Operational Review Artifacts

#### Duration

2-3 weeks

#### Actions

1. Create unit and lesson review rubrics.
2. Create accessibility and AI review checklists.
3. Create standards mapping template.
4. Create contributor review workflow for curriculum submissions.

#### Exit criteria

- a contributor can use the repository to draft, review, and approve a curriculum artifact with documented gates

### Phase 4: Add Real Evidence Through Case Studies

#### Duration

1-2 weeks

#### Actions

1. Add real case studies and comparative analyses.
2. Document what succeeded, what failed, and what was required operationally.
3. Capture patterns relevant to open curriculum release and maintenance.

#### Exit criteria

- `06-case-studies/` contains substantive examples, not placeholders

## Source Prioritization

When expanding the research base, prioritize sources in this order:

1. official standards and guidance bodies
2. government or public policy guidance
3. peer-reviewed or consensus educational research
4. established field organizations
5. practitioner reports and case evidence

### Priority source categories

- CAST for UDL
- UNESCO for OER policy
- W3C and Section 508 resources for accessibility
- U.S. Department of Education resources for privacy and edtech policy
- NIST for AI risk and evaluation framing
- 1EdTech for interoperability and standards exchange
- EdReports and similar quality-review organizations for instructional materials quality

## Recommended Research Rules for Contributors

Any contributor expanding `research/` should follow these rules:

1. Prefer primary sources over summaries.
2. Record publication or last-updated dates where recency matters.
3. Mark unstable claims clearly.
4. Separate normative recommendations from observed evidence.
5. Avoid broad quantitative claims unless directly supported.
6. Note where the project is making an inference rather than repeating a source.

## Immediate Next Deliverables

The highest-value next documents to create are:

1. `research/references.md`
2. `research/research-methodology.md`
3. `research/07-ai-governance/ai-governance-framework.md`
4. `research/08-accessibility-and-inclusion/accessibility-standards.md`
5. `research/11-oer-governance/licensing-analysis.md`
6. `research/12-hqim-and-review/hqim-review-framework.md`

## Definition of Done

The research base can be considered ready to support broader curriculum development when:

- core claims are cited
- decision-critical best-practice domains are covered
- current standards and policy guidance are reflected
- operational checklists and rubrics exist
- case studies are real and evidence-based
- contributors can follow a repeatable review and governance process

## Final Recommendation

Do not treat the current `research/` directory as the final foundation for curriculum development. Treat it as Phase 0 orientation material.

The repository should now move into a structured remediation phase focused on:

- evidence quality
- operational readiness
- AI governance
- accessibility
- privacy
- interoperability
- OER governance
- curriculum quality review

Once those are in place, the project will have a much stronger basis for building an open-source curriculum that is credible, scalable, and defensible.
