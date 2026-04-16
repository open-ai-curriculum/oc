LOAD CSV WITH HEADERS FROM 'file:///social-studies-domain-nodes.csv' AS row
MERGE (n:CapabilityNode {node_id: row.`node_id:ID(CapabilityNode)`})
SET n.name = row.name, n.slug = row.slug, n.domain = row.domain, n.graph_id = row.graph_id, n.family_id = row.family_id, n.family_name = row.family_name, n.implementation_state = row.implementation_state;

LOAD CSV WITH HEADERS FROM 'file:///social-studies-domain-dependencies.csv' AS row
MATCH (s:CapabilityNode {node_id: row.`:START_ID(CapabilityNode)`})
MATCH (t:CapabilityNode {node_id: row.`:END_ID(CapabilityNode)`})
MERGE (s)-[:DEPENDS_ON {domain: row.domain, graph_id: row.graph_id}]->(t);
