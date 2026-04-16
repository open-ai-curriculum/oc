---
id: quality-gates
type: reference
domain: repository-governance
status: stable
version: "1.0"
dependencies: [learning-system-constitution, learning-system-requirements, platform-manifest, maturity-model]
tags: [quality, validation, governance, ci]
last_updated: "2026-04-15"
related: [platform-manifest, specs-index, maturity-model]
---

# Repository Quality Gates

This document defines the active quality-gate discipline for the current repository direction.

It is a governance document, not a release approval document. Passing these gates means the repository is structurally and semantically consistent with its governed model. It does not mean learner-impacting artifacts are approved for classroom use.

## Purpose

The repository uses quality gates to prevent silent drift between:

- governing documents
- maintained specifications
- domain capability graphs
- node-package contracts
- capability-registry coverage
- validation tooling

The immediate objective is to ensure that graph-driven repository work fails fast when one layer changes without the others.

## Active Gate Types

### 1. Documentation Integrity Gate

The repository must preserve a valid maintained-doc corpus.

This gate verifies:

- required maintained documents exist
- required frontmatter is present
- maintained local links resolve
- dependency-map entries resolve to real documents

Primary entrypoint:

```bash
node /Volumes/data/development/oc/scripts/validate-docs.js
```

### 2. Capability Registry Gate

The capability registry must remain complete and internally valid.

This gate verifies:

- required capability-registry fields exist
- governing specification references resolve
- current-state artifact references resolve
- mathematics node packages are represented in the registry
- learning-to-learn implemented node packages are represented in the registry

Primary source:

- [capability-registry.json](/Volumes/data/development/oc/docs/capability-registry.json)

### 3. Mathematics Domain Structural Gate

The mathematics domain must preserve complete package coverage and allowed config contracts.

This gate verifies:

- every graph node has a node package
- every node package includes the required artifact set
- only allowed `node-config.yaml` contract categories are present
- legacy schema forms do not re-enter the repository

Primary entrypoint:

```bash
node /Volumes/data/development/oc/scripts/audit-mathematics-domain.js
```

### 4. Mathematics Domain Semantic Gate

The authoritative graph and node-package layer must agree semantically.

This gate verifies:

- graph node `id` matches package `id`
- graph node `name` matches package `name`
- graph `depends_on` matches package `dependencies`
- graph nodes represented as implemented still reconcile to actual governed packages

This is the guard against silent graph drift.

### 5. Learning-To-Learn Domain Structural Gate

The learning-to-learn domain must preserve complete package coverage, graph consistency, and operational artifact integrity across the current canonical graph.

This gate verifies:

- required learning-to-learn domain scaffold files exist
- every learning-to-learn graph node has an implemented node package
- every implemented learning-to-learn node package includes the required artifact set
- learning-to-learn node-config files preserve the expected contract sections
- package IDs and dependencies reconcile to the authoritative learning-to-learn graph
- learning-to-learn implemented node packages are represented in the capability registry
- the learning-to-learn runtime slice targets the expected upper-band parity nodes
- the learning-to-learn artifact registry targets the expected upper-band parity nodes
- the learning-to-learn operational export summary reconciles to the authoritative graph node count

Primary entrypoint:

```bash
node /Volumes/data/development/oc/scripts/validate-learning-to-learn-domain.js
```

### 6. Mathematics Cross-Domain Runtime Gate

The bounded mathematics fraction slice that routes into `learning_to_learn` must remain structurally consistent with both the mathematics runtime package and the learning-to-learn attachment registry.

This gate verifies:

- the cross-domain runtime slice exists and matches its schema
- all referenced mathematics nodes exist in the authoritative graph
- the runtime slice points to the governed learning-to-learn attachment registry
- the runtime slice covers the relevant mathematics-to-learning-to-learn attachment routes for the fraction slice

Primary entrypoint:

```bash
node /Volumes/data/development/oc/scripts/validate-mathematics-cross-domain-runtime.js
```

### 7. Mathematics Cross-Domain Routing Example Gate

The bounded mathematics fraction slice must include worked learner-state examples whose expected routing decisions remain consistent with the declared runtime rules and attachment registry.

This gate verifies:

- the worked routing example file exists
- each worked case references a real runtime rule
- expected decision types match the runtime rule
- routed learning-to-learn nodes are justified by the attachment registry for the relevant fraction failure modes

Primary entrypoint:

```bash
node /Volumes/data/development/oc/scripts/validate-mathematics-cross-domain-routing-examples.js
```

## Current Enforced Commands

Repository-wide maintained-doc validation:

```bash
node /Volumes/data/development/oc/scripts/validate-docs.js
```

Mathematics-domain-specific audit:

```bash
node /Volumes/data/development/oc/scripts/audit-mathematics-domain.js
```

Learning-to-learn-domain-specific audit:

```bash
node /Volumes/data/development/oc/scripts/validate-learning-to-learn-domain.js
```

Mathematics cross-domain runtime audit:

```bash
node /Volumes/data/development/oc/scripts/validate-mathematics-cross-domain-runtime.js
```

Mathematics cross-domain routing example audit:

```bash
node /Volumes/data/development/oc/scripts/validate-mathematics-cross-domain-routing-examples.js
```

## CI Operationalization

These same gates should run automatically in CI so that graph and contract drift fail on pull request and push, not only during local review.

The expected CI behavior is:

1. install runtime prerequisites
2. run repository validation
3. fail the workflow on any structural or semantic mismatch

## What These Gates Do Not Mean

Passing the quality gates does not authorize:

- classroom release
- mastery claims about learners
- instructional effectiveness claims
- standards-alignment claims that have not been reviewed
- human-review substitution

These gates are engineering and governance gates only.

## Change Discipline

When changing the repository, update all affected layers together:

1. authoritative graph or governing doc
2. node-package contracts and artifacts
3. capability-registry references
4. validation or audit tooling when the contract changes

If a change intentionally introduces a new allowed contract category, update:

- this document
- [platform-manifest.md](/Volumes/data/development/oc/docs/reference/platform-manifest.md)
- [validate-docs.js](/Volumes/data/development/oc/scripts/validate-docs.js) or [audit-mathematics-domain.js](/Volumes/data/development/oc/scripts/audit-mathematics-domain.js) as appropriate

## Current Practical Standard

At the current repository stage, the minimum acceptable condition is:

- `validate-docs.js` passes
- `audit-mathematics-domain.js` passes
- `validate-learning-to-learn-domain.js` passes
- `validate-mathematics-cross-domain-runtime.js` passes
- `validate-mathematics-cross-domain-routing-examples.js` passes
- the maintained governance documents describe the same active system model as the graph and registry

Anything weaker leaves the repo vulnerable to silent structural drift.
