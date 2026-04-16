LOAD CSV WITH HEADERS FROM 'file:///mathematics-operational-nodes.csv' AS row
CALL {
  WITH row
  MERGE (n:Entity {id: row.`id:ID(Entity)`})
  SET n.name = row.name,
      n.entity_type = row.entity_type,
      n.domain = row.domain,
      n.source_layer = row.source_layer,
      n.subtype = CASE trim(row.subtype) WHEN '' THEN null ELSE row.subtype END,
      n.family_id = CASE trim(row.family_id) WHEN '' THEN null ELSE row.family_id END,
      n.family_name = CASE trim(row.family_name) WHEN '' THEN null ELSE row.family_name END,
      n.implementation_state = CASE trim(row.implementation_state) WHEN '' THEN null ELSE row.implementation_state END,
      n.primary_grade_band = CASE trim(row.primary_grade_band) WHEN '' THEN null ELSE row.primary_grade_band END,
      n.primary_content_domain = CASE trim(row.primary_content_domain) WHEN '' THEN null ELSE row.primary_content_domain END,
      n.official_identifier = CASE trim(row.official_identifier) WHEN '' THEN null ELSE row.official_identifier END,
      n.document_path = CASE trim(row.document_path) WHEN '' THEN null ELSE row.document_path END,
      n.artifact_type = CASE trim(row.artifact_type) WHEN '' THEN null ELSE row.artifact_type END,
      n.purpose = CASE trim(row.purpose) WHEN '' THEN null ELSE row.purpose END,
      n.delivery_format = CASE trim(row.delivery_format) WHEN '' THEN null ELSE row.delivery_format END,
      n.source_path = CASE trim(row.source_path) WHEN '' THEN null ELSE row.source_path END,
      n.decision_type = CASE trim(row.decision_type) WHEN '' THEN null ELSE row.decision_type END,
      n.outcome = CASE trim(row.outcome) WHEN '' THEN null ELSE row.outcome END,
      n.registry_id = CASE trim(row.registry_id) WHEN '' THEN null ELSE row.registry_id END,
      n.slice_id = CASE trim(row.slice_id) WHEN '' THEN null ELSE row.slice_id END,
      n.status = CASE trim(row.status) WHEN '' THEN null ELSE row.status END,
      n.review_status = CASE trim(row.review_status) WHEN '' THEN null ELSE row.review_status END,
      n.supported_profiles = CASE trim(row.`supported_profiles:string[]`) WHEN '' THEN [] ELSE split(row.`supported_profiles:string[]`, ';') END,
      n.mapped_family_ids = CASE trim(row.`mapped_family_ids:string[]`) WHEN '' THEN [] ELSE split(row.`mapped_family_ids:string[]`, ';') END,
      n.mapped_grade_bands = CASE trim(row.`mapped_grade_bands:string[]`) WHEN '' THEN [] ELSE split(row.`mapped_grade_bands:string[]`, ';') END,
      n.mapped_content_domains = CASE trim(row.`mapped_content_domains:string[]`) WHEN '' THEN [] ELSE split(row.`mapped_content_domains:string[]`, ';') END,
      n.node_ids = CASE trim(row.`node_ids:string[]`) WHEN '' THEN [] ELSE split(row.`node_ids:string[]`, ';') END,
      n.entry_node_ids = CASE trim(row.`entry_node_ids:string[]`) WHEN '' THEN [] ELSE split(row.`entry_node_ids:string[]`, ';') END,
      n.learner_state_fields = CASE trim(row.`learner_state_fields:string[]`) WHEN '' THEN [] ELSE split(row.`learner_state_fields:string[]`, ';') END,
      n.verification_gate_targets = CASE trim(row.`verification_gate_targets:string[]`) WHEN '' THEN [] ELSE split(row.`verification_gate_targets:string[]`, ';') END,
      n.failure_mode_targets = CASE trim(row.`failure_mode_targets:string[]`) WHEN '' THEN [] ELSE split(row.`failure_mode_targets:string[]`, ';') END,
      n.intervention_targets = CASE trim(row.`intervention_targets:string[]`) WHEN '' THEN [] ELSE split(row.`intervention_targets:string[]`, ';') END,
      n.response_modes_supported = CASE trim(row.`response_modes_supported:string[]`) WHEN '' THEN [] ELSE split(row.`response_modes_supported:string[]`, ';') END,
      n.accessibility_tags = CASE trim(row.`accessibility_tags:string[]`) WHEN '' THEN [] ELSE split(row.`accessibility_tags:string[]`, ';') END,
      n.language_support_tags = CASE trim(row.`language_support_tags:string[]`) WHEN '' THEN [] ELSE split(row.`language_support_tags:string[]`, ';') END,
      n.applies_when = CASE trim(row.`applies_when:string[]`) WHEN '' THEN [] ELSE split(row.`applies_when:string[]`, ';') END
  WITH n, row
  CALL apoc.create.addLabels(
    n,
    CASE trim(row.`:LABEL`) WHEN '' THEN [] ELSE split(row.`:LABEL`, ';') END
  ) YIELD node
  RETURN 1 AS applied
}
RETURN count(*) AS processed_nodes;

LOAD CSV WITH HEADERS FROM 'file:///mathematics-operational-relationships.csv' AS row
CALL {
  WITH row
  MATCH (s:Entity {id: row.`:START_ID(Entity)`})
  MATCH (t:Entity {id: row.`:END_ID(Entity)`})
  CALL apoc.create.relationship(
    s,
    row.`:TYPE`,
    {
      domain: row.domain,
      source_layer: row.source_layer,
      mapping_status: CASE trim(row.mapping_status) WHEN '' THEN null ELSE row.mapping_status END,
      relationship_type: CASE trim(row.relationship_type) WHEN '' THEN null ELSE row.relationship_type END,
      artifact_type: CASE trim(row.artifact_type) WHEN '' THEN null ELSE row.artifact_type END,
      purpose: CASE trim(row.purpose) WHEN '' THEN null ELSE row.purpose END,
      decision_type: CASE trim(row.decision_type) WHEN '' THEN null ELSE row.decision_type END,
      rule_id: CASE trim(row.rule_id) WHEN '' THEN null ELSE row.rule_id END
    },
    t
  ) YIELD rel
  RETURN 1 AS applied
}
RETURN count(*) AS processed_relationships;
