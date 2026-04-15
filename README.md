# Spec-Driven Learning System

## Current State

This repository is an engineering and governance workspace for a spec-driven learning system.

It is no longer an open-curriculum publishing repository. The active direction is to define, validate, and harden a learning architecture in which:

- capabilities are explicit
- prerequisite dependencies are enforced
- mastery is demonstrated rather than inferred
- failure modes are classified
- interventions are targeted
- verification is continuous
- learner state is observable

Curriculum, assessments, teacher-use materials, and software are downstream products of that governed system.

## Current Coverage

The active proof domain is mathematics.

The authoritative mathematics graph in [master-knowledge-graph.yaml](domains/mathematics/master-knowledge-graph.yaml) is currently implemented end to end across the modeled scope:

- zero-state pre-kindergarten foundations
- elementary mathematics
- middle-school mathematics
- secondary mathematics
- Advanced Placement pathways through AP Calculus BC territory

Current modeled completion:

- `132/132` graph nodes implemented
- `100%` of the currently modeled mathematics graph covered by governed node packages

This does not mean the repository is classroom-release ready. It means the modeled mathematics capability graph and node-package layer are structurally implemented and now protected by validation.

## Governing Sources

Read in this order:

1. [constitution memory](.specify/memory/constitution.md)
2. [foundation constitution](docs/foundation/constitution.md)
3. [foundation architecture](docs/foundation/architecture.md)
4. [maintained specs index](docs/specs/index.md)
5. [learning-system requirements](docs/specs/learning-system-requirements.md)
6. [platform manifest](docs/reference/platform-manifest.md)
7. [system feature spec](specs/007-spec-driven-learning-system/spec.md)
8. [mathematics domain](domains/mathematics/README.md)

The cross-agent operating rules are defined in [AGENTS.md](AGENTS.md).

## Repository Layout

Primary governed areas:

- [`.specify/memory/constitution.md`](.specify/memory/constitution.md)
- [`docs/foundation/`](docs/foundation/constitution.md)
- [`docs/specs/`](docs/specs/index.md)
- [`docs/reference/`](docs/reference/platform-manifest.md)
- [`docs/standards/`](docs/standards/index.md)
- [`specs/007-spec-driven-learning-system/`](specs/007-spec-driven-learning-system/spec.md)
- [`domains/mathematics/`](domains/mathematics/README.md)
- [`docs/capability-registry.json`](docs/capability-registry.json)
- [`docs/dependency-map.json`](docs/dependency-map.json)

Validation and audit tooling:

- [`scripts/validate-docs.js`](scripts/validate-docs.js)
- [`scripts/audit-mathematics-domain.js`](scripts/audit-mathematics-domain.js)

## What The Repository Produces

This repository currently produces three governed artifact classes:

1. learning-system specifications
2. domain capability models and node packages
3. supporting validation and observability tooling

The mathematics node packages already encode:

- node identity and dependency edges
- mastery thresholds
- verification gates
- failure-mode inventories
- intervention mappings
- learner-state schemas
- teacher-observability and agent-behavior guidance

## Quality Gates

The repository now has active structural and semantic validation for the mathematics domain.

The validation path checks:

- maintained documentation integrity
- capability registry completeness
- mathematics node-package coverage
- graph-to-package ID and name consistency
- graph-to-package dependency consistency
- allowed node-config contract shapes

Run:

```bash
node scripts/validate-docs.js
```

For mathematics-domain checks only:

```bash
node scripts/audit-mathematics-domain.js
```

## Non-Negotiables

- No learner-impacting or classroom-ready claim without human review.
- No mastery claim based on exposure, activity, attendance, or completion alone.
- No advancement that ignores unstable dependencies.
- No averaging-away of failure modes when they can be classified meaningfully.
- No validator output should be treated as instructional approval authority.

## License

This project and all repository contents are licensed under [PolyForm Noncommercial 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0/). See [LICENSE](LICENSE).
