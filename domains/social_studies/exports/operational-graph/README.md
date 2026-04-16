# Social Studies Operational Graph Export

## Purpose

This export is the first physically unified operational social studies graph package for external graph tooling and adaptive-system traversal prototypes.

It joins these layers into one importable graph surface:

- capability nodes and prerequisite topology
- capability families
- standards-native entities and alignment edges
- assessment overlays and assessment units
- artifact registries and attached artifact nodes
- runtime slices and decision-rule nodes

## Files

- `social-studies-operational-nodes.csv`
- `social-studies-operational-relationships.csv`
- `social-studies-operational-summary.json`
- `import-social-studies-operational-graph.cypher`

## Entity Counts

- total nodes: `275`
- total relationships: `1745`
- `Artifact`: `11`
- `ArtifactRegistry`: `3`
- `AssessmentOverlay`: `7`
- `AssessmentUnit`: `29`
- `CapabilityFamily`: `6`
- `CapabilityNode`: `146`
- `ContentDomain`: `6`
- `DecisionRule`: `21`
- `GradeBand`: `2`
- `PerformanceLevel`: `3`
- `RuntimeSlice`: `6`
- `StandardsAnchor`: `32`
- `StateProfile`: `3`

## Relationship Counts

- `ALIGNS_TO_CONTENT_DOMAIN`: `146`
- `ALIGNS_TO_GRADE_BAND`: `146`
- `ALIGNS_TO_PERFORMANCE_LEVEL`: `146`
- `ALIGNS_TO_REPOSITORY_ANCHOR`: `146`
- `ALIGNS_TO_STATE_PROFILE`: `438`
- `BELONGS_TO_FAMILY`: `146`
- `CONTAINS_ARTIFACT`: `11`
- `COVERS_NODE`: `28`
- `DEPENDS_ON`: `148`
- `ENTRY_NODE`: `6`
- `HAS_ASSESSMENT_UNIT`: `29`
- `HAS_DECISION_RULE`: `21`
- `MAPS_TO_CAPABILITY`: `166`
- `REGISTERS_SCOPE`: `14`
- `UNLOCKS`: `148`
- `USES_ARTIFACT_REGISTRY`: `6`
