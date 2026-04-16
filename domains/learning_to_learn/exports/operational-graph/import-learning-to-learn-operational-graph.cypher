// Draft import scaffold for the learning-to-learn operational graph export.
// Assumes Neo4j can read the CSV files from its import directory.

LOAD CSV WITH HEADERS FROM 'file:///learning-to-learn-operational-nodes.csv' AS row
MERGE (n {id: row.id})
SET n.label = row.label, n.name = row.name;

LOAD CSV WITH HEADERS FROM 'file:///learning-to-learn-operational-relationships.csv' AS row
MATCH (a {id: row.source})
MATCH (b {id: row.target})
CALL apoc.create.relationship(a, row.relationship, {}, b) YIELD rel
RETURN count(rel);
