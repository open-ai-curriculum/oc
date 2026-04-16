# Neo4j Export

This directory contains Neo4j export artifacts for the social studies master knowledge graph.

## Files

- `social-studies-domain-graph.csv`: combined node-and-relationship export for `LOAD CSV`
- `social-studies-domain-nodes.csv`: node-only export for `neo4j-admin database import`
- `social-studies-domain-dependencies.csv`: relationship-only export for `neo4j-admin database import`
- `import-social-studies-domain.cypher`: ready-to-run `LOAD CSV` import query for the single-file export
