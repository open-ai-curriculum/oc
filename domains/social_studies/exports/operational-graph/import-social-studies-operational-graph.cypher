LOAD CSV WITH HEADERS FROM 'file:///social-studies-operational-nodes.csv' AS row
CALL {
  WITH row
  MERGE (n:Entity {id: row.`id:ID(Entity)`})
  SET n.name = row.name, n.entity_type = row.entity_type, n.domain = row.domain, n.source_layer = row.source_layer, n.subtype = CASE trim(row.subtype) WHEN '' THEN null ELSE row.subtype END
  WITH n, row
  CALL apoc.create.addLabels(n, CASE trim(row.`:LABEL`) WHEN '' THEN [] ELSE split(row.`:LABEL`, ';') END) YIELD node
  RETURN 1 AS applied
}
RETURN count(*) AS processed_nodes;

LOAD CSV WITH HEADERS FROM 'file:///social-studies-operational-relationships.csv' AS row
CALL {
  WITH row
  MATCH (s:Entity {id: row.`:START_ID(Entity)`})
  MATCH (t:Entity {id: row.`:END_ID(Entity)`})
  CALL apoc.create.relationship(s, row.`:TYPE`, {domain: row.domain, source_layer: row.source_layer, mapping_status: CASE trim(row.mapping_status) WHEN '' THEN null ELSE row.mapping_status END, relationship_type: CASE trim(row.relationship_type) WHEN '' THEN null ELSE row.relationship_type END, artifact_type: CASE trim(row.artifact_type) WHEN '' THEN null ELSE row.artifact_type END, purpose: CASE trim(row.purpose) WHEN '' THEN null ELSE row.purpose END, decision_type: CASE trim(row.decision_type) WHEN '' THEN null ELSE row.decision_type END, rule_id: CASE trim(row.rule_id) WHEN '' THEN null ELSE row.rule_id END}, t) YIELD rel
  RETURN 1 AS applied
}
RETURN count(*) AS processed_relationships;
