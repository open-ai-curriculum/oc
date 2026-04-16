# Standards-Augmented Social Studies Graph

## Purpose

This artifact joins the canonical social studies capability graph to repository anchor standards, performance levels, grade-band entities, content-domain entities, and drafted state-profile entities so alignment can participate in graph-native traversal and parity reporting.

## Sources

- `domains/social_studies/master-knowledge-graph.yaml`
- `docs/standards/social-studies-node-standards-map.json`
- `docs/standards/social-studies-standards-inventory.json`
- drafted state profiles under `docs/standards/states/`

## Entity Counts

- capability nodes: `146`
- grade bands: `2`
- content domains: `6`
- performance levels: `3`
- repository anchor standards: `32`
- state profiles: `3`
- total edges: `1170`

## Edge Types

- `DEPENDS_ON`
- `ALIGNS_TO_GRADE_BAND`
- `ALIGNS_TO_CONTENT_DOMAIN`
- `ALIGNS_TO_PERFORMANCE_LEVEL`
- `ALIGNS_TO_REPOSITORY_ANCHOR`
- `ALIGNS_TO_STATE_PROFILE`

## Current Interpretation Rule

The current overlay treats repository anchor standards as the authoritative standards entities and treats state-profile links as draft crosswalk-candidate edges. Those state-profile edges indicate plausible alignment surfaces for future reviewed mapping work, not official identifier-level equivalence.

## Claim Boundary

This is a repository-governed operational graph artifact. The canonical capability topology remains the social studies master knowledge graph, and the state-profile layer remains draft until reviewed crosswalk work is added.
