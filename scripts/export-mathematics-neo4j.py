#!/usr/bin/env python3

from __future__ import annotations

import csv
from pathlib import Path

import yaml


REPO_ROOT = Path(__file__).resolve().parent.parent
GRAPH_PATH = REPO_ROOT / "domains" / "mathematics" / "master-knowledge-graph.yaml"
OUTPUT_DIR = REPO_ROOT / "domains" / "mathematics" / "exports" / "neo4j"
OUTPUT_CSV = OUTPUT_DIR / "mathematics-domain-graph.csv"
OUTPUT_NODES_CSV = OUTPUT_DIR / "mathematics-domain-nodes.csv"
OUTPUT_RELATIONSHIPS_CSV = OUTPUT_DIR / "mathematics-domain-dependencies.csv"
OUTPUT_CYPHER = OUTPUT_DIR / "import-mathematics-domain.cypher"


FIELDNAMES = [
    "record_type",
    "domain",
    "graph_id",
    "family_id",
    "family_name",
    "node_id",
    "node_name",
    "node_slug",
    "node_implementation_state",
    "node_directory",
    "support_tier",
    "maturity_state",
    "supported_profiles",
    "evidence_class",
    "node_package_shape",
    "dependency_count",
    "declared_artifact_file_count",
    "artifact_file_count",
    "status_count",
    "statuses",
    "verification_gate_count",
    "verification_gate_types",
    "failure_mode_count",
    "direct_accuracy_threshold",
    "explanation_required",
    "transfer_required",
    "retention_check_days",
    "relationship_type",
    "dependency_id",
    "dependency_name",
    "dependency_slug",
]

NODE_FIELDNAMES = [
    "node_id:ID(CapabilityNode)",
    "name",
    "slug",
    "domain",
    "graph_id",
    "family_id",
    "family_name",
    "implementation_state",
    "node_directory",
    "support_tier",
    "maturity_state",
    "supported_profiles:string[]",
    "evidence_class",
    "node_package_shape",
    "dependency_count:int",
    "declared_artifact_file_count:int",
    "artifact_file_count:int",
    "status_count:int",
    "statuses:string[]",
    "verification_gate_count:int",
    "verification_gate_types:string[]",
    "failure_mode_count:int",
    "direct_accuracy_threshold:float",
    "explanation_required:boolean",
    "transfer_required:boolean",
    "retention_check_days:int",
    ":LABEL",
]

RELATIONSHIP_FIELDNAMES = [
    ":START_ID(CapabilityNode)",
    ":END_ID(CapabilityNode)",
    ":TYPE",
    "domain",
    "graph_id",
]

LOAD_CSV_CYPHER = """LOAD CSV WITH HEADERS FROM 'file:///mathematics-domain-graph.csv' AS row
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
"""


def slugify(node_id: str, node_name: str) -> str:
    return f"{node_id.lower()}-{node_name.replace('_', '-')}"


def load_graph() -> dict:
    return yaml.safe_load(GRAPH_PATH.read_text())


def load_yaml(path: Path) -> dict:
    return yaml.safe_load(path.read_text())


def build_node_index(graph: dict) -> dict[str, dict]:
    index: dict[str, dict] = {}
    for family in graph.get("families", []):
        for node in family.get("nodes", []):
            index[node["id"]] = {
                "family_id": family["id"],
                "family_name": family["name"],
                "node_id": node["id"],
                "node_name": node["name"],
                "node_slug": slugify(node["id"], node["name"]),
                "node_implementation_state": node.get("implementation_state", ""),
            }
    return index


def package_shape(config: dict) -> str:
    if "artifact_files" in config:
        return "artifact-index-config"
    return "mastery-node-config"


def csv_bool(value: object) -> str:
    if value is True:
        return "true"
    if value is False:
        return "false"
    return ""


def pipe_join(values: list[str] | None) -> str:
    return "|".join(values or [])


def build_package_index() -> dict[str, dict]:
    nodes_root = REPO_ROOT / "domains" / "mathematics" / "nodes"
    package_index: dict[str, dict] = {}

    for config_path in sorted(nodes_root.glob("*/node-config.yaml")):
        directory = config_path.parent.name
        config = load_yaml(config_path)
        node_id = config["id"]
        mastery = config.get("mastery", {})
        statuses = config.get("statuses", [])
        verification_gates = config.get("verification_gates", [])
        failure_modes = config.get("failure_modes", [])
        artifact_files = config.get("artifact_files", [])
        actual_artifact_files = sorted(
            file_path.name
            for file_path in config_path.parent.iterdir()
            if file_path.is_file() and file_path.name != "node-config.yaml"
        )

        package_index[node_id] = {
            "node_directory": directory,
            "support_tier": config.get("support_tier", ""),
            "maturity_state": config.get("maturity_state", ""),
            "supported_profiles": pipe_join(config.get("supported_profiles", [])),
            "evidence_class": config.get("evidence_class", ""),
            "node_package_shape": package_shape(config),
            "dependency_count": len(config.get("dependencies", [])),
            "declared_artifact_file_count": len(artifact_files),
            "artifact_file_count": len(actual_artifact_files),
            "status_count": len(statuses),
            "statuses": pipe_join(statuses),
            "verification_gate_count": len(verification_gates),
            "verification_gate_types": pipe_join(
                [gate.get("type", "") for gate in verification_gates]
            ),
            "failure_mode_count": len(failure_modes),
            "direct_accuracy_threshold": mastery.get("direct_accuracy_threshold", ""),
            "explanation_required": csv_bool(mastery.get("explanation_required")),
            "transfer_required": csv_bool(mastery.get("transfer_required")),
            "retention_check_days": mastery.get("retention_check_days", ""),
        }

    return package_index


def export_csv() -> Path:
    graph = load_graph()
    graph_id = graph.get("graph", {}).get("id", "master_knowledge_graph")
    domain = graph.get("domain", "mathematics")
    node_index = build_node_index(graph)
    package_index = build_package_index()

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    with OUTPUT_CSV.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=FIELDNAMES)
        writer.writeheader()

        for family in graph.get("families", []):
            for node in family.get("nodes", []):
                node_meta = node_index[node["id"]]
                package_meta = package_index.get(node["id"], {})
                writer.writerow(
                    {
                        "record_type": "node",
                        "domain": domain,
                        "graph_id": graph_id,
                        "family_id": node_meta["family_id"],
                        "family_name": node_meta["family_name"],
                        "node_id": node_meta["node_id"],
                        "node_name": node_meta["node_name"],
                        "node_slug": node_meta["node_slug"],
                        "node_implementation_state": node_meta["node_implementation_state"],
                        "node_directory": package_meta.get("node_directory", ""),
                        "support_tier": package_meta.get("support_tier", ""),
                        "maturity_state": package_meta.get("maturity_state", ""),
                        "supported_profiles": package_meta.get("supported_profiles", ""),
                        "evidence_class": package_meta.get("evidence_class", ""),
                        "node_package_shape": package_meta.get("node_package_shape", ""),
                        "dependency_count": package_meta.get("dependency_count", ""),
                        "declared_artifact_file_count": package_meta.get("declared_artifact_file_count", ""),
                        "artifact_file_count": package_meta.get("artifact_file_count", ""),
                        "status_count": package_meta.get("status_count", ""),
                        "statuses": package_meta.get("statuses", ""),
                        "verification_gate_count": package_meta.get("verification_gate_count", ""),
                        "verification_gate_types": package_meta.get("verification_gate_types", ""),
                        "failure_mode_count": package_meta.get("failure_mode_count", ""),
                        "direct_accuracy_threshold": package_meta.get("direct_accuracy_threshold", ""),
                        "explanation_required": package_meta.get("explanation_required", ""),
                        "transfer_required": package_meta.get("transfer_required", ""),
                        "retention_check_days": package_meta.get("retention_check_days", ""),
                        "relationship_type": "",
                        "dependency_id": "",
                        "dependency_name": "",
                        "dependency_slug": "",
                    }
                )

                for dependency_id in node.get("depends_on", []):
                    dependency = node_index[dependency_id]
                    writer.writerow(
                        {
                            "record_type": "dependency",
                            "domain": domain,
                            "graph_id": graph_id,
                            "family_id": node_meta["family_id"],
                            "family_name": node_meta["family_name"],
                            "node_id": node_meta["node_id"],
                            "node_name": node_meta["node_name"],
                            "node_slug": node_meta["node_slug"],
                            "node_implementation_state": node_meta["node_implementation_state"],
                            "node_directory": package_meta.get("node_directory", ""),
                            "support_tier": package_meta.get("support_tier", ""),
                            "maturity_state": package_meta.get("maturity_state", ""),
                            "supported_profiles": package_meta.get("supported_profiles", ""),
                            "evidence_class": package_meta.get("evidence_class", ""),
                            "node_package_shape": package_meta.get("node_package_shape", ""),
                            "dependency_count": package_meta.get("dependency_count", ""),
                            "declared_artifact_file_count": package_meta.get("declared_artifact_file_count", ""),
                            "artifact_file_count": package_meta.get("artifact_file_count", ""),
                            "status_count": package_meta.get("status_count", ""),
                            "statuses": package_meta.get("statuses", ""),
                            "verification_gate_count": package_meta.get("verification_gate_count", ""),
                            "verification_gate_types": package_meta.get("verification_gate_types", ""),
                            "failure_mode_count": package_meta.get("failure_mode_count", ""),
                            "direct_accuracy_threshold": package_meta.get("direct_accuracy_threshold", ""),
                            "explanation_required": package_meta.get("explanation_required", ""),
                            "transfer_required": package_meta.get("transfer_required", ""),
                            "retention_check_days": package_meta.get("retention_check_days", ""),
                            "relationship_type": "DEPENDS_ON",
                            "dependency_id": dependency["node_id"],
                            "dependency_name": dependency["node_name"],
                            "dependency_slug": dependency["node_slug"],
                        }
                    )

    return OUTPUT_CSV


def export_admin_csvs(graph: dict, graph_id: str, domain: str, node_index: dict[str, dict], package_index: dict[str, dict]) -> tuple[Path, Path]:
    with OUTPUT_NODES_CSV.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=NODE_FIELDNAMES)
        writer.writeheader()

        for family in graph.get("families", []):
            for node in family.get("nodes", []):
                node_meta = node_index[node["id"]]
                package_meta = package_index.get(node["id"], {})
                writer.writerow(
                    {
                        "node_id:ID(CapabilityNode)": node_meta["node_id"],
                        "name": node_meta["node_name"],
                        "slug": node_meta["node_slug"],
                        "domain": domain,
                        "graph_id": graph_id,
                        "family_id": node_meta["family_id"],
                        "family_name": node_meta["family_name"],
                        "implementation_state": node_meta["node_implementation_state"],
                        "node_directory": package_meta.get("node_directory", ""),
                        "support_tier": package_meta.get("support_tier", ""),
                        "maturity_state": package_meta.get("maturity_state", ""),
                        "supported_profiles:string[]": package_meta.get("supported_profiles", "").replace("|", ";"),
                        "evidence_class": package_meta.get("evidence_class", ""),
                        "node_package_shape": package_meta.get("node_package_shape", ""),
                        "dependency_count:int": package_meta.get("dependency_count", ""),
                        "declared_artifact_file_count:int": package_meta.get("declared_artifact_file_count", ""),
                        "artifact_file_count:int": package_meta.get("artifact_file_count", ""),
                        "status_count:int": package_meta.get("status_count", ""),
                        "statuses:string[]": package_meta.get("statuses", "").replace("|", ";"),
                        "verification_gate_count:int": package_meta.get("verification_gate_count", ""),
                        "verification_gate_types:string[]": package_meta.get("verification_gate_types", "").replace("|", ";"),
                        "failure_mode_count:int": package_meta.get("failure_mode_count", ""),
                        "direct_accuracy_threshold:float": package_meta.get("direct_accuracy_threshold", ""),
                        "explanation_required:boolean": package_meta.get("explanation_required", ""),
                        "transfer_required:boolean": package_meta.get("transfer_required", ""),
                        "retention_check_days:int": package_meta.get("retention_check_days", ""),
                        ":LABEL": "CapabilityNode;MathematicsNode",
                    }
                )

    with OUTPUT_RELATIONSHIPS_CSV.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=RELATIONSHIP_FIELDNAMES)
        writer.writeheader()

        for family in graph.get("families", []):
            for node in family.get("nodes", []):
                for dependency_id in node.get("depends_on", []):
                    writer.writerow(
                        {
                            ":START_ID(CapabilityNode)": node["id"],
                            ":END_ID(CapabilityNode)": dependency_id,
                            ":TYPE": "DEPENDS_ON",
                            "domain": domain,
                            "graph_id": graph_id,
                        }
                    )

    return OUTPUT_NODES_CSV, OUTPUT_RELATIONSHIPS_CSV


def export_cypher() -> Path:
    OUTPUT_CYPHER.write_text(LOAD_CSV_CYPHER, encoding="utf-8")
    return OUTPUT_CYPHER


def main() -> None:
    graph = load_graph()
    graph_id = graph.get("graph", {}).get("id", "master_knowledge_graph")
    domain = graph.get("domain", "mathematics")
    node_index = build_node_index(graph)
    package_index = build_package_index()

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    export_csv()
    export_admin_csvs(graph, graph_id, domain, node_index, package_index)
    export_cypher()

    print(OUTPUT_CSV.relative_to(REPO_ROOT))
    print(OUTPUT_NODES_CSV.relative_to(REPO_ROOT))
    print(OUTPUT_RELATIONSHIPS_CSV.relative_to(REPO_ROOT))
    print(OUTPUT_CYPHER.relative_to(REPO_ROOT))


if __name__ == "__main__":
    main()
