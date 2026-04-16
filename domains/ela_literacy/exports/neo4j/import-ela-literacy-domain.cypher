LOAD CSV WITH HEADERS FROM 'file:///ela-literacy-domain-graph.csv' AS row
CALL {
  WITH row
  WHERE row.record_type = 'node'
  MERGE (n:CapabilityNode:ElaLiteracyNode {id: row.node_id})
  SET n.name = row.node_name,
      n.slug = row.node_slug,
      n.domain = row.domain,
      n.graph_id = row.graph_id,
      n.family_id = row.family_id,
      n.family_name = row.family_name
  RETURN 1 AS applied
}
CALL {
  WITH row
  WHERE row.record_type = 'dependency'
  MATCH (n:CapabilityNode:ElaLiteracyNode {id: row.node_id})
  MATCH (d:CapabilityNode:ElaLiteracyNode {id: row.dependency_id})
  MERGE (n)-[:DEPENDS_ON]->(d)
  RETURN 1 AS applied
}
RETURN count(*) AS processed_rows;
