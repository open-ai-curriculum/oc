#!/usr/bin/env python3

from __future__ import annotations

import csv
from pathlib import Path

import yaml


REPO_ROOT = Path(__file__).resolve().parent.parent
GRAPH_PATH = REPO_ROOT / "domains" / "ela_literacy" / "master-knowledge-graph.yaml"
OUTPUT_DIR = REPO_ROOT / "domains" / "ela_literacy" / "exports" / "neo4j"
OUTPUT_CSV = OUTPUT_DIR / "ela-literacy-domain-graph.csv"
OUTPUT_NODES_CSV = OUTPUT_DIR / "ela-literacy-domain-nodes.csv"
OUTPUT_RELATIONSHIPS_CSV = OUTPUT_DIR / "ela-literacy-domain-dependencies.csv"
OUTPUT_CYPHER = OUTPUT_DIR / "import-ela-literacy-domain.cypher"


FIELDNAMES = [
    "record_type", "domain", "graph_id", "family_id", "family_name", "node_id", "node_name",
    "node_slug", "node_implementation_state", "node_directory", "support_tier", "maturity_state",
    "supported_profiles", "evidence_class", "node_package_shape", "dependency_count",
    "declared_artifact_file_count", "artifact_file_count", "status_count", "statuses",
    "verification_gate_count", "verification_gate_types", "failure_mode_count",
    "direct_accuracy_threshold", "explanation_required", "transfer_required",
    "retention_check_days", "relationship_type", "dependency_id", "dependency_name", "dependency_slug"
]

LOAD_CSV_CYPHER = """LOAD CSV WITH HEADERS FROM 'file:///ela-literacy-domain-graph.csv' AS row
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
"""


def slugify(node_id: str, node_name: str) -> str:
    return f"{node_id.lower()}-{node_name.replace('_', '-')}"


def load_graph() -> dict:
    return yaml.safe_load(GRAPH_PATH.read_text())


def main() -> None:
    graph = load_graph()
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    graph_id = graph.get("graph", {}).get("id", "master_knowledge_graph")
    domain = graph.get("domain", "ela_literacy")

    with OUTPUT_CSV.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=FIELDNAMES)
        writer.writeheader()
        for family in graph.get("families", []):
            for node in family.get("nodes", []):
                writer.writerow(
                    {
                        "record_type": "node",
                        "domain": domain,
                        "graph_id": graph_id,
                        "family_id": family["id"],
                        "family_name": family["name"],
                        "node_id": node["id"],
                        "node_name": node["name"],
                        "node_slug": slugify(node["id"], node["name"]),
                        "node_implementation_state": node.get("implementation_state", ""),
                        "node_directory": "",
                        "support_tier": "",
                        "maturity_state": "",
                        "supported_profiles": "",
                        "evidence_class": "",
                        "node_package_shape": "",
                        "dependency_count": len(node.get("depends_on", [])),
                        "declared_artifact_file_count": "",
                        "artifact_file_count": "",
                        "status_count": "",
                        "statuses": "",
                        "verification_gate_count": "",
                        "verification_gate_types": "",
                        "failure_mode_count": "",
                        "direct_accuracy_threshold": "",
                        "explanation_required": "",
                        "transfer_required": "",
                        "retention_check_days": "",
                        "relationship_type": "",
                        "dependency_id": "",
                        "dependency_name": "",
                        "dependency_slug": "",
                    }
                )
                for dependency_id in node.get("depends_on", []):
                    writer.writerow(
                        {
                            "record_type": "dependency",
                            "domain": domain,
                            "graph_id": graph_id,
                            "family_id": family["id"],
                            "family_name": family["name"],
                            "node_id": node["id"],
                            "node_name": node["name"],
                            "node_slug": slugify(node["id"], node["name"]),
                            "node_implementation_state": node.get("implementation_state", ""),
                            "node_directory": "",
                            "support_tier": "",
                            "maturity_state": "",
                            "supported_profiles": "",
                            "evidence_class": "",
                            "node_package_shape": "",
                            "dependency_count": len(node.get("depends_on", [])),
                            "declared_artifact_file_count": "",
                            "artifact_file_count": "",
                            "status_count": "",
                            "statuses": "",
                            "verification_gate_count": "",
                            "verification_gate_types": "",
                            "failure_mode_count": "",
                            "direct_accuracy_threshold": "",
                            "explanation_required": "",
                            "transfer_required": "",
                            "retention_check_days": "",
                            "relationship_type": "DEPENDS_ON",
                            "dependency_id": dependency_id,
                            "dependency_name": dependency_id,
                            "dependency_slug": dependency_id.lower(),
                        }
                    )

    with OUTPUT_NODES_CSV.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.writer(handle)
        writer.writerow(["node_id:ID(CapabilityNode)", "name", "slug", "domain", "graph_id", "family_id", "family_name", ":LABEL"])
        for family in graph.get("families", []):
            for node in family.get("nodes", []):
                writer.writerow([node["id"], node["name"], slugify(node["id"], node["name"]), domain, graph_id, family["id"], family["name"], "CapabilityNode;ElaLiteracyNode"])

    with OUTPUT_RELATIONSHIPS_CSV.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.writer(handle)
        writer.writerow([":START_ID(CapabilityNode)", ":END_ID(CapabilityNode)", ":TYPE", "domain", "graph_id"])
        for family in graph.get("families", []):
            for node in family.get("nodes", []):
                for dependency_id in node.get("depends_on", []):
                    writer.writerow([node["id"], dependency_id, "DEPENDS_ON", domain, graph_id])

    OUTPUT_CYPHER.write_text(LOAD_CSV_CYPHER, encoding="utf-8")
    print(OUTPUT_CSV.relative_to(REPO_ROOT))
    print(OUTPUT_NODES_CSV.relative_to(REPO_ROOT))
    print(OUTPUT_RELATIONSHIPS_CSV.relative_to(REPO_ROOT))
    print(OUTPUT_CYPHER.relative_to(REPO_ROOT))


if __name__ == "__main__":
    main()
