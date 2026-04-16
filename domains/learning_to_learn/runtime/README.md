# Learning-To-Learn Runtime

This directory contains graph-runtime artifacts for the `learning_to_learn` domain.

## Purpose

These artifacts operationalize learner state and navigation against the learning-to-learn graph so bounded process-support slices can be simulated, validated, and later used by adaptive systems.

## Files

- `runtime-slice.schema.json`: canonical JSON Schema for learning-to-learn runtime slice packages
- `independent-learning-upper-band-runtime-slice.yaml`: bounded runtime slice for the upper-band independent-learning nodes
- `independent-learning-upper-band-routing-examples.yaml`: worked learner-state cases and expected routing decisions for the upper-band slice

## Claim Boundary

These runtime slices are draft operational models. They define graph-native state and navigation intent. They do not yet constitute a full learner-state service or production adaptive engine.
