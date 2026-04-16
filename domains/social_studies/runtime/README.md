# Social Studies Runtime

This directory contains graph-runtime artifacts for the social studies domain.

## Purpose

These artifacts operationalize learner state and navigation against the social studies graph so bounded slices can be simulated, validated, and later executed in adaptive systems.

## Files

- `runtime-slice.schema.json`: canonical JSON Schema for social studies runtime slice packages
- `cross-domain-runtime-slice.schema.json`: canonical JSON Schema for bounded social studies runtime slices that route into `learning_to_learn`
- `inquiry-civics-entry-runtime-slice.yaml`: initial runtime slice for the `Q1`, `H1`, and `C1` entry slice
- `inquiry-civics-entry-cross-domain-runtime-slice.yaml`: bounded runtime slice for the same entry slice when learning-to-learn support routing is active
- `geography-economics-systems-runtime-slice.yaml`: middle-grades systems slice for `G3`, `G4`, `E3`, and `E4`
- `geography-economics-systems-cross-domain-runtime-slice.yaml`: cross-domain variant for the same geography-economics systems slice
- `capstone-public-argument-runtime-slice.yaml`: secondary capstone slice for `Q6`, `H5`, `C5`, `G5`, `E5`, `A1`, and `A2`
- `capstone-public-argument-cross-domain-runtime-slice.yaml`: cross-domain capstone slice with learning-process support routing
- `capstone-public-argument-cross-domain-routing-guide.md`: human-readable routing guide for the capstone bridge
- `capstone-public-argument-cross-domain-routing-examples.yaml`: worked learner-state cases and expected routing decisions for the capstone bridge

## Claim Boundary

The runtime slices in this directory are draft operational models. They define graph-native state and navigation intent. They do not yet constitute a full learner-state service or production adaptive engine.
