# Research Notes: Spec-Driven Curriculum Production System

## Decision 1: Use a text-first, repository-native artifact system

**Decision**: Treat Markdown-based repository artifacts as the source of truth for curriculum units, lessons, support materials, review records, and planning artifacts.

**Rationale**: The constitution requires portability and low lock-in. The research base already assumes editable, portable source artifacts and reviewable repository workflows. A text-first system is also the most compatible baseline for Codex, Copilot, Claude Code, and human contributors.

**Alternatives considered**:

- Proprietary authoring tools as the primary source of truth: rejected because they increase lock-in and reduce inspectability.
- Final-format files as the canonical artifact source: rejected because they weaken traceability and versioned review.

## Decision 2: Bind curriculum, support materials, and software to one shared model

**Decision**: Use one shared artifact model for curriculum content, support materials, and future supporting software.

**Rationale**: The baseline spec and constitution both state that software should operate on the same artifact categories and review gates used for curriculum materials. This avoids schema drift and prevents tool-building from inventing a parallel system.

**Alternatives considered**:

- Separate metadata models for curriculum and software: rejected because it would undermine cross-agent consistency and tool interoperability.
- Software-only schemas defined later: rejected because it would make future tooling retrofitted instead of aligned by design.

## Decision 3: Make human review and AI provenance required design elements

**Decision**: Include review state and AI-use/provenance as required model elements for substantial AI-assisted work.

**Rationale**: The constitution prohibits autonomous publication. The AI governance research and human-review policy both require draft status until review, plus traceability for meaningful AI use.

**Alternatives considered**:

- Optional AI-use notes: rejected because optional provenance is not enforceable.
- Review captured only in informal comments: rejected because release decisions must be inspectable and reusable by humans and tools.

## Decision 4: Treat accessibility, inclusion, privacy, and tooling safety as artifact-level requirements

**Decision**: Require accessibility, inclusion, privacy, and tool-safety concerns to appear in the spec-driven artifact system rather than as post hoc checks.

**Rationale**: The constitution and research on accessibility, privacy, and tool vetting treat these as baseline quality requirements. Embedding them in the artifact model keeps them visible to agents and reviewers.

**Alternatives considered**:

- Handle accessibility only during final QA: rejected because it encourages retrofits and incomplete drafts.
- Treat privacy/tooling risk as software-only concerns: rejected because curriculum workflows can still expose unsafe tool or data assumptions.

## Decision 5: Use subject foundations as bounded constraints, not generic decoration

**Decision**: Require curriculum authoring and review to reference subject-specific guidance for mathematics, literacy, science, and civics/history when those subjects apply.

**Rationale**: The subject foundations exist to prevent generic lesson generation. Tying artifact creation to discipline-specific constraints improves quality and reduces weak cross-subject abstraction.

**Alternatives considered**:

- One universal lesson template with no subject lens: rejected because it leads to shallow, non-disciplinary work.
- Subject guidance as optional reading: rejected because optional subject grounding is too easy for agents to ignore.

## Decision 6: Preserve provisional states explicitly

**Decision**: Allow subject packs, artifact packages, and tooling plans to be marked provisional, incomplete, or draft rather than implying production readiness.

**Rationale**: The feature spec explicitly requires incomplete areas to be marked as such. The research base is still uneven by subject and implementation depth, so the system must distinguish draft completeness from release readiness.

**Alternatives considered**:

- Hide incomplete areas until fully mature: rejected because iterative repo development is expected.
- Treat structurally complete artifacts as final by default: rejected because it violates the review and evidence posture.

## Decision 7: Represent contracts as repository conventions rather than network APIs

**Decision**: Define the first contract for this feature as a repository artifact contract rather than an HTTP or CLI API.

**Rationale**: The current feature establishes the common data and document boundary that humans, agents, and future tools will consume. There is no stable runtime interface yet, but there is a stable file-and-metadata interface.

**Alternatives considered**:

- Premature REST or CLI contract definitions: rejected because there is no implemented service surface yet.
- No explicit contract: rejected because agents need a concrete interface now.

## Open Follow-On Areas

- Add machine-validated metadata conventions once supporting software exists.
- Add sample curriculum packages that exercise the full artifact model end to end.
- Add stricter interoperability packaging contracts if the repo begins exporting to external curriculum systems.
