# Security Baseline

## Purpose

This document defines a minimum security baseline for repository workflows related to curriculum development, collaboration, and any future tool-enabled features.

The project may not yet operate a production application, but weak security practice can still expose:

- contributor accounts
- private planning materials
- accidental student data
- trust in the project's outputs

## Core Position

Security should be proportionate to risk, but it should not be deferred until after tools or integrations are already in use.

For this repository, the baseline goal is to reduce avoidable risk in:

- accounts
- shared files
- external tools
- AI-assisted workflows
- accidental data exposure

## Minimum Security Expectations

### 1. Account Protection

- Contributors should use strong unique passwords for relevant services.
- Multi-factor authentication should be enabled wherever available for repository and publishing accounts.
- Shared accounts should be avoided.

### 2. Least-Privilege Access

- Grant the minimum access needed for a contributor's role.
- Remove or reduce access when it is no longer needed.
- Avoid broad admin permissions by default.

### 3. Sensitive Data Avoidance

- Do not store real student PII in the repository.
- Do not commit exports, screenshots, or logs containing protected information.
- Prefer synthetic or anonymized examples.

### 4. Tool Risk Awareness

- Do not assume a useful tool is a safe tool.
- Vet external platforms before recommending them for classroom or contributor use.
- Be cautious with tools that store content remotely or reuse submitted data.

### 5. Secure Collaboration Practice

- Review changes before publication.
- Prefer versioned, reviewable workflows over opaque document sprawl.
- Record meaningful decisions about sensitive workflows.

### 6. AI Workflow Safety

- Do not paste student PII into general-purpose AI tools by default.
- Treat prompts and outputs as potentially sensitive when they include unpublished material.
- Review AI outputs for privacy and security implications, not just content quality.

## Repository Guardrails

The repository should adopt these defaults:

- no real student data in tracked files
- no secrets or credentials in tracked files
- no recommendation of classroom-facing tools without at least basic vetting
- no assumption that free or nonprofit tools are automatically safe

## Security Review Questions

Before adopting a new workflow or tool, ask:

1. What accounts or permissions does this require?
2. Could this expose sensitive content or student data?
3. Can the workflow be done with less access or less data?
4. Does the tool create lock-in or opaque data handling?
5. Would a reasonable school IT or privacy reviewer accept this setup?

## Incident-Oriented Common Failure Modes

Watch for:

- repository commits containing sensitive screenshots or exports
- credentials or tokens committed accidentally
- contributors using personal tools with unclear storage practices
- AI prompt logs containing confidential material
- classroom workflows introduced without local IT/privacy review

## Immediate Repository Recommendation

Until a fuller security process exists, the project should:

1. keep student data out of repository workflows
2. require MFA for core maintainer accounts where supported
3. review external tools before recommending them
4. treat AI workflows as needing privacy and security caution

## Relationship to Other Documents

Use this baseline with:

- `student-data-privacy.md`
- `tool-vetting-framework.md`
- AI governance documents

## Sources

- U.S. Department of Education. *Protecting Student Privacy* portal. [https://studentprivacy.ed.gov/](https://studentprivacy.ed.gov/)
- U.S. Department of Education. *Student Privacy and Online Educational Services*. [https://studentprivacy.ed.gov/sites/default/files/resource_document/file/Student%20Privacy%20and%20Online%20Educational%20Services%20%28February%202014%29_0.pdf](https://studentprivacy.ed.gov/sites/default/files/resource_document/file/Student%20Privacy%20and%20Online%20Educational%20Services%20%28February%202014%29_0.pdf)
- TeachAI. *AI Guidance for Schools Toolkit*. [https://www.teachai.org/toolkit](https://www.teachai.org/toolkit)

## Confidence

Medium confidence.

Reason:

- the baseline principles are strong
- a more technical control set would depend on actual infrastructure choices later
