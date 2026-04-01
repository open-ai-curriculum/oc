# Tool Vetting Framework

## Purpose

This framework defines how the project should evaluate external tools before recommending them for classroom-facing, contributor, or student-data-adjacent use.

It is especially important for:

- AI tools
- assessment platforms
- collaboration tools
- analytics systems
- content-hosting tools

## Core Position

The repository should not recommend a tool merely because it is popular, inexpensive, or convenient.

A tool should be considered acceptable only if it is:

- educationally useful
- privacy-conscious
- reasonably secure
- accessible
- operationally legible to adopters

## Default Rule

If a tool requires student data, school accounts, or classroom deployment, treat it as requiring formal vetting.

## Evaluation Dimensions

### 1. Educational Fit

Questions:

- Does the tool serve a real instructional or operational need?
- Is it improving teaching and learning, or just adding complexity?
- Could the same goal be met with a simpler or non-data-collecting approach?

Reject or caution if:

- the tool is mainly novelty-driven
- the educational value is unclear

### 2. Privacy

Questions:

- Does the tool collect or store student PII?
- Can it be used without student PII?
- Is local institutional approval needed?
- Are data use, retention, and disclosure practices clear?

Reject or caution if:

- data practices are unclear
- student data collection is unnecessary
- repository guidance would encourage unsafe use

### 3. Security and Vendor Control

Questions:

- Does the tool appear to have a credible security posture?
- Are account and access controls understandable?
- Is there a risk of exposing sensitive student or school information?

Reject or caution if:

- basic vendor controls are opaque
- sensitive use is implied without corresponding safeguards

### 4. Accessibility

Questions:

- Can diverse users access the tool reasonably well?
- Does the tool create obvious barriers for keyboard, screen-reader, caption, or contrast needs?
- Would recommending the tool contradict the repository's accessibility baseline?

Reject or caution if:

- the tool creates avoidable accessibility barriers
- there is no accessible path for essential use

### 5. Licensing, Portability, and Lock-In

Questions:

- Can users export their work?
- Does the tool force adoption of a proprietary workflow?
- Would the tool undermine the project's open and portable curriculum goals?

Reject or caution if:

- export is poor or absent
- the workflow deepens platform lock-in

### 6. Operational Clarity

Questions:

- Can a school or educator understand how to adopt the tool responsibly?
- Are setup, maintenance, and support expectations clear?
- Is the recommendation realistic for under-resourced environments?

Reject or caution if:

- the tool assumes infrastructure or staffing that most adopters will not have

## Recommendation Categories

After review, place the tool in one category:

### `recommended with standard caution`

Use when:

- educational fit is clear
- no major privacy, accessibility, or lock-in issue is apparent

### `use only with local vetting`

Use when:

- the tool may be useful
- but it touches privacy, compliance, security, or procurement concerns

### `not recommended`

Use when:

- risks materially outweigh benefits
- the repository cannot responsibly suggest the tool

## Minimum Review Record

For each reviewed tool, record:

- tool name
- intended use
- student-data exposure level
- recommendation category
- major risks
- required cautions
- review date

## AI Tool-Specific Questions

If the tool uses generative AI, also ask:

- Will users paste student work or student data into it?
- Are outputs reviewable and correctable?
- Does the tool create overreliance or shallow automation?
- Are provenance and disclosure expectations manageable?

## Initial Repository Recommendation

Until fuller operational tooling exists, the repository should:

1. avoid recommending tools that require student PII by default
2. prefer tools that support export and open workflows
3. label classroom-facing digital tools as requiring local vetting unless clearly low risk

## Relationship to Other Documents

This framework should be used with:

- `student-data-privacy.md`
- accessibility standards and checklist
- AI governance framework

## Sources

- U.S. Department of Education. *Student Privacy and Online Educational Services*. [https://studentprivacy.ed.gov/sites/default/files/resource_document/file/Student%20Privacy%20and%20Online%20Educational%20Services%20%28February%202014%29_0.pdf](https://studentprivacy.ed.gov/sites/default/files/resource_document/file/Student%20Privacy%20and%20Online%20Educational%20Services%20%28February%202014%29_0.pdf)
- U.S. Department of Education. *Protecting Student Privacy* portal. [https://studentprivacy.ed.gov/](https://studentprivacy.ed.gov/)
- TeachAI. *AI Guidance for Schools Toolkit*. [https://www.teachai.org/toolkit](https://www.teachai.org/toolkit)
- W3C. *Web Content Accessibility Guidelines (WCAG) 2.2*. [https://www.w3.org/TR/WCAG22/](https://www.w3.org/TR/WCAG22/)

## Confidence

Medium-high confidence.
