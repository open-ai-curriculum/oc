#!/usr/bin/env python3

from __future__ import annotations

import csv
import xml.etree.ElementTree as ET
from pathlib import Path

import yaml


REPO_ROOT = Path(__file__).resolve().parent.parent
GRAPH_PATH = REPO_ROOT / "domains" / "ela_literacy" / "master-knowledge-graph.yaml"
NODES_ROOT = REPO_ROOT / "domains" / "ela_literacy" / "nodes"
OUTPUT_DIR = REPO_ROOT / "domains" / "ela_literacy" / "exports" / "gephi"
NODES_CSV = OUTPUT_DIR / "ela-literacy-gephi-nodes.csv"
EDGES_CSV = OUTPUT_DIR / "ela-literacy-gephi-edges.csv"
GEXF_PATH = OUTPUT_DIR / "ela-literacy-gephi-graph.gexf"


NODE_FIELDS = [
    "Id", "Label", "FamilyId", "FamilyLabel", "Domain", "GraphId", "ImplementationState",
    "NodeDirectory", "SupportTier", "MaturityState", "SupportedProfiles", "EvidenceClass",
    "NodePackageShape", "DependencyCount", "DeclaredArtifactFileCount", "ArtifactFileCount",
    "StatusCount", "Statuses", "VerificationGateCount", "VerificationGateTypes",
    "FailureModeCount", "DirectAccuracyThreshold", "ExplanationRequired", "TransferRequired",
    "RetentionCheckDays"
]

EDGE_FIELDS = ["Source", "Target", "Type", "Label", "Weight", "Domain", "GraphId"]


def load_yaml(path: Path) -> dict:
    return yaml.safe_load(path.read_text())


def pipe_join(values: list[str] | None) -> str:
    return "|".join(values or [])


def csv_bool(value: object) -> str:
    if value is True:
        return "true"
    if value is False:
        return "false"
    return ""


def package_shape(config: dict) -> str:
    if "artifact_files" in config:
        return "artifact-index-config"
    return "mastery-node-config"


def build_package_index() -> dict[str, dict]:
    package_index: dict[str, dict] = {}
    for config_path in sorted(NODES_ROOT.glob("*/node-config.yaml")):
        directory = config_path.parent.name
        config = load_yaml(config_path)
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
        package_index[config["id"]] = {
            "NodeDirectory": directory,
            "SupportTier": config.get("support_tier", ""),
            "MaturityState": config.get("maturity_state", ""),
            "SupportedProfiles": pipe_join(config.get("supported_profiles", [])),
            "EvidenceClass": config.get("evidence_class", ""),
            "NodePackageShape": package_shape(config),
            "DependencyCount": len(config.get("dependencies", [])),
            "DeclaredArtifactFileCount": len(artifact_files),
            "ArtifactFileCount": len(actual_artifact_files),
            "StatusCount": len(statuses),
            "Statuses": pipe_join(statuses),
            "VerificationGateCount": len(verification_gates),
            "VerificationGateTypes": pipe_join([gate.get("type", "") for gate in verification_gates]),
            "FailureModeCount": len(failure_modes),
            "DirectAccuracyThreshold": mastery.get("direct_accuracy_threshold", ""),
            "ExplanationRequired": csv_bool(mastery.get("explanation_required")),
            "TransferRequired": csv_bool(mastery.get("transfer_required")),
            "RetentionCheckDays": mastery.get("retention_check_days", ""),
        }
    return package_index


def build_graph_rows() -> tuple[list[dict], list[dict]]:
    graph = load_yaml(GRAPH_PATH)
    package_index = build_package_index()
    domain = graph.get("domain", "ela_literacy")
    graph_id = graph.get("graph", {}).get("id", "master_knowledge_graph")
    nodes = []
    edges = []
    for family in graph.get("families", []):
        for node in family.get("nodes", []):
            package_meta = package_index.get(node["id"], {})
            nodes.append(
                {
                    "Id": node["id"],
                    "Label": f"{node['id']} {node['name']}",
                    "FamilyId": family["id"],
                    "FamilyLabel": family["name"],
                    "Domain": domain,
                    "GraphId": graph_id,
                    "ImplementationState": node.get("implementation_state", ""),
                    "NodeDirectory": package_meta.get("NodeDirectory", ""),
                    "SupportTier": package_meta.get("SupportTier", ""),
                    "MaturityState": package_meta.get("MaturityState", ""),
                    "SupportedProfiles": package_meta.get("SupportedProfiles", ""),
                    "EvidenceClass": package_meta.get("EvidenceClass", ""),
                    "NodePackageShape": package_meta.get("NodePackageShape", ""),
                    "DependencyCount": package_meta.get("DependencyCount", ""),
                    "DeclaredArtifactFileCount": package_meta.get("DeclaredArtifactFileCount", ""),
                    "ArtifactFileCount": package_meta.get("ArtifactFileCount", ""),
                    "StatusCount": package_meta.get("StatusCount", ""),
                    "Statuses": package_meta.get("Statuses", ""),
                    "VerificationGateCount": package_meta.get("VerificationGateCount", ""),
                    "VerificationGateTypes": package_meta.get("VerificationGateTypes", ""),
                    "FailureModeCount": package_meta.get("FailureModeCount", ""),
                    "DirectAccuracyThreshold": package_meta.get("DirectAccuracyThreshold", ""),
                    "ExplanationRequired": package_meta.get("ExplanationRequired", ""),
                    "TransferRequired": package_meta.get("TransferRequired", ""),
                    "RetentionCheckDays": package_meta.get("RetentionCheckDays", ""),
                }
            )
            for dependency_id in node.get("depends_on", []):
                edges.append(
                    {
                        "Source": node["id"],
                        "Target": dependency_id,
                        "Type": "Directed",
                        "Label": "DEPENDS_ON",
                        "Weight": 1,
                        "Domain": domain,
                        "GraphId": graph_id,
                    }
                )
    return nodes, edges


def write_csv(path: Path, fieldnames: list[str], rows: list[dict]) -> None:
    with path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def write_gexf(nodes: list[dict], edges: list[dict]) -> None:
    ET.register_namespace("", "http://www.gexf.net/1.2draft")
    gexf = ET.Element("{http://www.gexf.net/1.2draft}gexf", {"version": "1.2"})
    graph_el = ET.SubElement(gexf, "{http://www.gexf.net/1.2draft}graph", {"mode": "static", "defaultedgetype": "directed"})
    nodes_el = ET.SubElement(graph_el, "{http://www.gexf.net/1.2draft}nodes")
    for node in nodes:
        ET.SubElement(nodes_el, "{http://www.gexf.net/1.2draft}node", {"id": node["Id"], "label": node["Label"]})
    edges_el = ET.SubElement(graph_el, "{http://www.gexf.net/1.2draft}edges")
    for index, edge in enumerate(edges):
        ET.SubElement(edges_el, "{http://www.gexf.net/1.2draft}edge", {"id": str(index), "source": edge["Source"], "target": edge["Target"], "label": edge["Label"], "weight": str(edge["Weight"])})
    ET.ElementTree(gexf).write(GEXF_PATH, encoding="utf-8", xml_declaration=True)


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    nodes, edges = build_graph_rows()
    write_csv(NODES_CSV, NODE_FIELDS, nodes)
    write_csv(EDGES_CSV, EDGE_FIELDS, edges)
    write_gexf(nodes, edges)
    print(NODES_CSV.relative_to(REPO_ROOT))
    print(EDGES_CSV.relative_to(REPO_ROOT))
    print(GEXF_PATH.relative_to(REPO_ROOT))


if __name__ == "__main__":
    main()
