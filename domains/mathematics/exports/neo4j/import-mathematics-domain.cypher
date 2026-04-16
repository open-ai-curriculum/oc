LOAD CSV WITH HEADERS FROM 'file:///mathematics-domain-graph.csv' AS row
CALL {
  WITH row
  WHERE row.record_type = 'node'
  MERGE (n:CapabilityNode:MathematicsNode {id: row.node_id})
  SET n.name = row.node_name,
      n.slug = row.node_slug,
      n.domain = row.domain,
      n.graph_id = row.graph_id,
      n.family_id = row.family_id,
      n.family_name = row.family_name,
      n.implementation_state = row.node_implementation_state,
      n.node_directory = row.node_directory,
      n.support_tier = CASE trim(row.support_tier) WHEN '' THEN null ELSE row.support_tier END,
      n.maturity_state = CASE trim(row.maturity_state) WHEN '' THEN null ELSE row.maturity_state END,
      n.supported_profiles = CASE trim(row.supported_profiles) WHEN '' THEN [] ELSE split(row.supported_profiles, '|') END,
      n.evidence_class = CASE trim(row.evidence_class) WHEN '' THEN null ELSE row.evidence_class END,
      n.node_package_shape = CASE trim(row.node_package_shape) WHEN '' THEN null ELSE row.node_package_shape END,
      n.dependency_count = toInteger(row.dependency_count),
      n.declared_artifact_file_count = toInteger(row.declared_artifact_file_count),
      n.artifact_file_count = toInteger(row.artifact_file_count),
      n.status_count = toInteger(row.status_count),
      n.statuses = CASE trim(row.statuses) WHEN '' THEN [] ELSE split(row.statuses, '|') END,
      n.verification_gate_count = toInteger(row.verification_gate_count),
      n.verification_gate_types = CASE trim(row.verification_gate_types) WHEN '' THEN [] ELSE split(row.verification_gate_types, '|') END,
      n.failure_mode_count = toInteger(row.failure_mode_count),
      n.direct_accuracy_threshold = CASE trim(row.direct_accuracy_threshold) WHEN '' THEN null ELSE toFloat(row.direct_accuracy_threshold) END,
      n.explanation_required = CASE row.explanation_required WHEN 'true' THEN true WHEN 'false' THEN false ELSE null END,
      n.transfer_required = CASE row.transfer_required WHEN 'true' THEN true WHEN 'false' THEN false ELSE null END,
      n.retention_check_days = CASE trim(row.retention_check_days) WHEN '' THEN null ELSE toInteger(row.retention_check_days) END
  RETURN 1 AS applied
}
CALL {
  WITH row
  WHERE row.record_type = 'dependency'
  MATCH (n:CapabilityNode:MathematicsNode {id: row.node_id})
  MATCH (d:CapabilityNode:MathematicsNode {id: row.dependency_id})
  MERGE (n)-[:DEPENDS_ON]->(d)
  RETURN 1 AS applied
}
RETURN count(*) AS processed_rows;
