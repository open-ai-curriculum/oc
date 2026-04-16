# Gephi Export

This directory contains Gephi-ready exports of the unified mathematics operational graph.

## Included Layers

- capability nodes and prerequisite topology
- capability family nodes
- standards-native entities and alignment edges
- artifact registry and artifact attachment nodes
- runtime slice and decision-rule nodes

## Files

- `mathematics-gephi-nodes.csv`: node table for Gephi CSV import
- `mathematics-gephi-edges.csv`: edge table for Gephi CSV import
- `mathematics-gephi-graph.gexf`: single-file graph export for direct Gephi import

## Current Counts

- nodes: `367`
- edges: `4076`
- `Artifact`: `20`
- `ArtifactRegistry`: `1`
- `AssessmentOverlay`: `13`
- `AssessmentUnit`: `68`
- `CapabilityFamily`: `22`
- `CapabilityNode`: `146`
- `ContentDomain`: `21`
- `DecisionRule`: `5`
- `GradeBand`: `18`
- `PerformanceLevel`: `1`
- `RuntimeSlice`: `1`
- `StandardsAnchor`: `36`
- `StateProfile`: `15`

## Import Options

### Direct graph import

Open `mathematics-gephi-graph.gexf` directly in Gephi.

### CSV import

Import `mathematics-gephi-nodes.csv` as the node table and `mathematics-gephi-edges.csv` as the edge table.

The edge file uses:

- `Source`
- `Target`
- `Type=Directed`
- `Label` as the typed relationship name

## Regenerate

```bash
python3 scripts/export-mathematics-operational-graph.py
python3 scripts/export-mathematics-gephi.py
```
