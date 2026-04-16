# Mathematics Operational Graph Export

## Purpose

This export is the first physically unified operational mathematics graph package for external graph tooling and adaptive-system traversal prototypes.

It joins these layers into one importable graph surface:

- capability nodes and prerequisite topology
- capability families
- standards-native entities and alignment edges
- artifact registry and attached artifact nodes
- runtime slice and decision-rule nodes

## Files

- `mathematics-operational-nodes.csv`
- `mathematics-operational-relationships.csv`
- `mathematics-operational-summary.json`
- `import-mathematics-operational-graph.cypher`

## Entity Counts

- total nodes: `374`
- total relationships: `4107`
- `Artifact`: `26`
- `ArtifactRegistry`: `2`
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

## Relationship Counts

- `ALIGNS_TO_CCSS_ANCHOR`: `146`
- `ALIGNS_TO_CONTENT_DOMAIN`: `172`
- `ALIGNS_TO_GRADE_BAND`: `172`
- `ALIGNS_TO_PERFORMANCE_LEVEL`: `146`
- `ALIGNS_TO_STATE_PROFILE`: `2190`
- `BELONGS_TO_FAMILY`: `146`
- `CONTAINS_ARTIFACT`: `26`
- `COVERS_NODE`: `5`
- `DEPENDS_ON`: `281`
- `ENTRY_NODE`: `1`
- `HAS_ACCESSIBILITY_SUPPORT`: `2`
- `HAS_ASSESSMENT_BUNDLE`: `4`
- `HAS_ASSESSMENT_UNIT`: `68`
- `HAS_DECISION_RULE`: `5`
- `HAS_ERROR_ANALYSIS_TASK`: `1`
- `HAS_EXEMPLAR`: `1`
- `HAS_GUIDED_PRACTICE`: `1`
- `HAS_INTERVENTION`: `4`
- `HAS_LANGUAGE_SUPPORT`: `2`
- `HAS_LESSON_PATTERN`: `3`
- `HAS_RETENTION_CHECK`: `1`
- `HAS_TEACHER_DECISION_SUPPORT`: `4`
- `HAS_VERIFICATION_TASK`: `2`
- `HAS_WORKED_EXAMPLE`: `1`
- `MAPS_TO_CAPABILITY`: `399`
- `OPERATES_ON`: `25`
- `REFERENCES_ARTIFACT_REGISTRY`: `1`
- `REGISTERS_SCOPE`: `12`
- `UNLOCKS`: `281`
- `USES_ARTIFACT_REGISTRY`: `5`

## Import Notes

The Cypher import script assumes Neo4j can read these CSV files from its import directory and that APOC is available for dynamic relationship creation.

This export is operational infrastructure, not instructional approval. Human review is still required for learner-impacting claims and artifacts.
