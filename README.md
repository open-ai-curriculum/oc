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

The active proof domain remains mathematics. Governed scaffolds now also exist for `ela_literacy`, `science`, `computer_science`, and `learning_to_learn`.

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

The mathematics domain now also includes:

- a standards-augmented graph layer for graph-native standards traversal
- a master graph architecture document defining the intended operational role of the mathematics graph in an adaptive curriculum system

The new `ela_literacy` domain is now present as a governed scaffold with:

- an authoritative master graph
- a first downstream capability slice
- standards-baseline linkage
- explicit claim boundaries around its still-unimplemented node layer

The new `science` domain is now present as a governed scaffold with:

- a K-12 science spine
- a capability-graph scaffold that preserves practice, modeling, explanation, and content dependencies together
- NGSS-informed structural posture
- explicit claim boundaries around its not-yet-implemented node layer

The new `computer_science` domain is now present as a governed scaffold with:

- a K-12 computer science spine
- a capability-graph scaffold covering programming, algorithms, data, systems, quality, and impacts together
- explicit AP CSP and AP CSA pathway readiness as downstream graph territory
- explicit claim boundaries around its still-unimplemented node layer

The new `learning_to_learn` domain is now present as a governed cross-domain scaffold with:

- a pre-K through Grade 12 learning-process spine
- a capability-graph scaffold covering attention, monitoring, memory, strategy, self-regulation, and transfer
- full implementation of the current 20-node canonical graph
- an architecture package, artifact attachment layer, runtime package, and operational export scaffold
- explicit boundaries preventing it from replacing subject-domain prerequisites
- explicit claim boundaries preserving draft status for learner-impacting use

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
9. [ELA/literacy domain](domains/ela_literacy/README.md)
10. [science domain](domains/science/README.md)
11. [computer science domain](domains/computer_science/README.md)
12. [learning-to-learn domain](domains/learning_to_learn/README.md)

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
- [`domains/ela_literacy/`](domains/ela_literacy/README.md)
- [`domains/science/`](domains/science/README.md)
- [`domains/computer_science/`](domains/computer_science/README.md)
- [`domains/learning_to_learn/`](domains/learning_to_learn/README.md)
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

The ELA/literacy domain currently adds:

- a governed full-domain scaffold
- an initial early-literacy-to-paragraph-writing slice
- a standards-alignment baseline for later node mapping

The science domain currently adds:

- a governed K-12 science spine
- a capability-graph scaffold aligned to NGSS-informed structure
- an upstream build plan for later node-package and standards-mapping work

The computer science domain currently adds:

- a governed K-12 computer science spine
- a capability-graph scaffold aligned to programming, systems, data, quality, and impacts structure
- an upstream build plan for later node-package, standards-support, and AP-facing pathway work

The learning-to-learn domain currently adds:

- a governed cross-domain spine for learning-process development
- a fully implemented 20-node capability graph for attention, monitoring, memory, strategy, feedback use, and transfer
- an architecture package, artifact attachment layer, runtime slice package, and operational export scaffold

## Quality Gates

The repository now has active structural and semantic validation for the mathematics domain.

The `science` domain is currently scaffolded without a dedicated domain audit or implemented node packages.

The `ela_literacy` and `learning_to_learn` domains now have dedicated domain audits. The `learning_to_learn` domain currently has full implemented coverage across its canonical 20-node graph plus operational attachment, runtime, and export surfaces.

The validation path checks:

- maintained documentation integrity
- capability registry completeness
- mathematics node-package coverage
- learning-to-learn full graph node-package coverage
- learning-to-learn operational attachment, runtime, and export artifact coverage
- mathematics cross-domain runtime coverage for the `F1` through `F5` fraction slice
- mathematics cross-domain worked-routing example coverage for the `F1` through `F5` fraction slice
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

For learning-to-learn-domain checks only:

```bash
node scripts/validate-learning-to-learn-domain.js
```

For mathematics cross-domain runtime checks only:

```bash
node scripts/validate-mathematics-cross-domain-runtime.js
```

For mathematics cross-domain routing example checks only:

```bash
node scripts/validate-mathematics-cross-domain-routing-examples.js
```

## Non-Negotiables

- No learner-impacting or classroom-ready claim without human review.
- No mastery claim based on exposure, activity, attendance, or completion alone.
- No advancement that ignores unstable dependencies.
- No averaging-away of failure modes when they can be classified meaningfully.
- No validator output should be treated as instructional approval authority.

## License

This project and all repository contents are licensed under [PolyForm Noncommercial 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0/). See [LICENSE](LICENSE).
