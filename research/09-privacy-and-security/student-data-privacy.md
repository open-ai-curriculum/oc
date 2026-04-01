# Student Data Privacy Guidance

## Purpose

This document defines the privacy baseline the repository should assume when publishing curriculum materials and designing any future supporting workflows, tools, analytics, or AI-enabled features.

The project may currently be content-focused, but privacy requirements need to be established early because later tooling decisions can create risk quickly.

## Core Position

The repository should default to privacy-preserving design.

That means:

- do not collect student data unless there is a clear need
- do not assume contributors or adopters can share student information freely
- do not build workflows that require personally identifiable student information unless governance explicitly allows it

## Practical Rule

As a default operating stance, this repository should be able to function without collecting student PII at all.

If a future workflow requires student data, that workflow should be treated as exceptional and reviewed separately.

## Baseline Privacy Principles

### 1. Data Minimization

Collect or process the least amount of information necessary.

Project implication:

- sample artifacts should use fictional or anonymized data
- curriculum examples should not depend on real student records

### 2. Approved Tools Only

Any tool used in classroom-facing or student-data-adjacent workflows should be vetted by the adopting school or district.

Project implication:

- the repository should not casually recommend tools that collect student data without a vetting process

### 3. Direct Human Responsibility

Educators and institutions remain responsible for privacy compliance when using tools with education records or related PII.

Project implication:

- project documentation should not imply that a third-party tool can be used freely just because it is useful

### 4. No Unnecessary Re-Disclosure

Student information should not be shared onward without authorization and need.

Project implication:

- contributors should avoid storing student examples, screenshots, exports, or logs in the repository

### 5. Security and Privacy Are Linked

Weak tool choices often create both privacy and security risk.

Project implication:

- privacy review should include basic security and vendor-control questions

## Repository Rules

The following should be treated as repository defaults:

### Allowed by default

- fully synthetic examples
- anonymized templates
- fictional student profiles for demonstration
- aggregate examples with no identifiable learner information

### Not allowed by default

- uploading real student work with identifying information
- committing screenshots containing student names, IDs, grades, or records
- using external AI tools with student data unless an adopting institution has approved that use
- storing exported student analytics in the repository

## Guidance for Tool-Enabled Workflows

If the project later recommends online tools, platforms, or AI assistants for classroom use, the guidance should state:

1. check institutional approval first
2. confirm whether the tool collects or stores PII
3. confirm whether the school retains appropriate control over data use and maintenance
4. confirm that data is not reused for unauthorized purposes
5. involve IT/privacy review before classroom deployment

## Privacy Review Questions

Before the project introduces a tool-dependent workflow, ask:

1. Does this workflow require student PII at all?
2. Could the same goal be achieved with synthetic, local, or anonymized data?
3. Does the tool create new disclosure, retention, or vendor-use risks?
4. Is the institution able to review and approve the tool?
5. Does the workflow create risk that contributors will accidentally commit protected data?

## AI-Specific Privacy Guidance

AI-enabled workflows deserve extra caution because users often paste sensitive information into prompts.

Repository guidance should therefore assume:

- student data should not be pasted into general-purpose AI tools by default
- anonymization is preferred but should not be treated as magically risk-free
- any student-data use with AI tools should require explicit institutional approval

## Immediate Repository Policy Recommendation

Until more detailed privacy tooling exists, the repository should state:

- do not include real student PII in repository content
- do not recommend classroom use of data-collecting tools without local vetting
- prefer synthetic examples for all demonstrations and templates

## Planned Follow-On Documents

- `tool-vetting-framework.md`
- `security-baseline.md`

## Sources

- U.S. Department of Education. *I want to use online tool or application as part of my course. However, I am worried that it is a violation of FERPA. What should I do?* [https://studentprivacy.ed.gov/faq/i-want-use-online-tool-or-application-part-my-course-however-i-am-worried-it-violation-ferpa](https://studentprivacy.ed.gov/faq/i-want-use-online-tool-or-application-part-my-course-however-i-am-worried-it-violation-ferpa)
- U.S. Department of Education. *Student Privacy and Online Educational Services*. [https://studentprivacy.ed.gov/sites/default/files/resource_document/file/Student%20Privacy%20and%20Online%20Educational%20Services%20%28February%202014%29_0.pdf](https://studentprivacy.ed.gov/sites/default/files/resource_document/file/Student%20Privacy%20and%20Online%20Educational%20Services%20%28February%202014%29_0.pdf)
- U.S. Department of Education. *Protecting Student Privacy* portal. [https://studentprivacy.ed.gov/](https://studentprivacy.ed.gov/)
- TeachAI. *Principles for AI Guidance*. [https://www.teachai.org/toolkit-principles](https://www.teachai.org/toolkit-principles)

## Confidence

Medium-high confidence.

Reason:

- the baseline privacy stance is strongly supported by official guidance
- more detailed operational controls should still be added if the project introduces tooling or analytics
