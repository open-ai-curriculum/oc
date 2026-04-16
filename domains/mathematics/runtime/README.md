# Mathematics Runtime

This directory contains graph-runtime artifacts for the mathematics domain.

## Purpose

These artifacts operationalize learner state and navigation against the mathematics graph so bounded slices can be simulated, validated, and later executed in adaptive systems.

## Files

- `runtime-slice.schema.json`: canonical JSON Schema for mathematics runtime slice packages
- `cross-domain-runtime-slice.schema.json`: canonical JSON Schema for bounded mathematics runtime slices that route into `learning_to_learn`
- `fraction-spine-runtime-slice.yaml`: initial runtime slice for the `F1` through `F5` fraction spine
- `fraction-spine-cross-domain-runtime-slice.yaml`: bounded runtime slice for `F1` through `F5` when learning-to-learn support routing is active
- `fraction-spine-cross-domain-routing-guide.md`: human-readable routing guide for the fraction-to-learning-to-learn bridge
- `fraction-spine-cross-domain-routing-examples.yaml`: worked learner-state cases and expected routing decisions for the cross-domain bridge

## Claim Boundary

The runtime slices in this directory are draft operational models. They define graph-native state and navigation intent. They do not yet constitute a full learner-state service or production adaptive engine.
