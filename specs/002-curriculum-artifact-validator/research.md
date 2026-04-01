# Research Notes: Curriculum Artifact Validator

## Decision 1: Build a local repository validator before any hosted tooling

**Decision**: Start with a local repository utility that reads Markdown artifacts directly.

**Rationale**: The repository is still establishing its production model. A local validator best matches the portability and low-lock-in requirements while keeping the first software feature simple and inspectable.

**Alternatives considered**:

- Hosted validation service: rejected as premature and more operationally complex.
- Editor-only plugin: rejected because it narrows usability and makes automation harder.

## Decision 2: Use the artifact contract as the validation boundary

**Decision**: Validate against `/specs/001-curriculum-production-system/contracts/artifact-contract.md` and the shared data model, not against ad hoc file heuristics alone.

**Rationale**: The artifact contract is the repository’s explicit software-facing interface. Tooling should consume that interface rather than rediscovering informal conventions.

**Alternatives considered**:

- Hard-coded path-only checks: rejected because they ignore metadata quality and relationships.
- Free-form linting rules without the shared model: rejected because they invite schema drift.

## Decision 3: Treat review status as reportable but non-authoritative

**Decision**: The validator reports documented review state and unresolved gates, but it does not approve artifacts.

**Rationale**: The constitution makes human review mandatory. The tool must support that process without misrepresenting automation as approval authority.

**Alternatives considered**:

- Automated approval when checklists appear complete: rejected as a constitution violation.
- Ignore review records entirely: rejected because review state is central to the artifact model.

## Decision 4: Prefer tolerant parsing over brittle rejection

**Decision**: The validator should tolerate incomplete pilot packages and older artifacts where the core structure is still discoverable.

**Rationale**: The repository is still evolving and the shared model explicitly allows provisional states. The first tool should surface gaps, not fail closed on every incomplete draft.

**Alternatives considered**:

- Strict schema enforcement from day one: rejected because it would be too brittle for current repository maturity.

## Decision 5: Produce both human-readable and structured output

**Decision**: Emit a readable report and a stable structured summary.

**Rationale**: Reviewers need direct clarity, while future tools need machine-consumable output based on the same model.

**Alternatives considered**:

- Human-readable text only: rejected because it weakens future tooling reuse.
- Structured output only: rejected because it would be less usable for current contributors.
