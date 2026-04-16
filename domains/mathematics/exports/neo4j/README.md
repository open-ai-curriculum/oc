# Neo4j Export

This directory contains Neo4j export artifacts for the mathematics master knowledge graph.

## Files

- `mathematics-domain-graph.csv`: combined node-and-relationship export for `LOAD CSV`
- `mathematics-domain-nodes.csv`: node-only export for `neo4j-admin database import`
- `mathematics-domain-dependencies.csv`: relationship-only export for `neo4j-admin database import`
- `import-mathematics-domain.cypher`: ready-to-run `LOAD CSV` import query for the single-file export

## Export Semantics

The CSV uses two row types:

- `node`: defines a graph node
- `dependency`: defines a `DEPENDS_ON` relationship from `node_id` to `dependency_id`

The single-file format is designed for Neo4j `LOAD CSV` workflows.

The node-only and relationship-only CSVs are provided for Neo4j admin or bulk import workflows that expect separate files.

## Regenerate

```bash
python3 scripts/export-mathematics-neo4j.py
```

## `LOAD CSV` Import

```cypher
:source import-mathematics-domain.cypher
```

## Neo4j Admin Import

Example shape for offline import into an empty database:

```bash
neo4j-admin database import full \
  --nodes=mathematics-domain-nodes.csv \
  --relationships=mathematics-domain-dependencies.csv \
  neo4j
```
