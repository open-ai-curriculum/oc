#!/usr/bin/env python3

from __future__ import annotations

import csv
import xml.etree.ElementTree as ET
from pathlib import Path

import json


REPO_ROOT = Path(__file__).resolve().parent.parent
OPERATIONAL_EXPORT_ROOT = REPO_ROOT / "domains" / "mathematics" / "exports" / "operational-graph"
INPUT_NODES = OPERATIONAL_EXPORT_ROOT / "mathematics-operational-nodes.csv"
INPUT_EDGES = OPERATIONAL_EXPORT_ROOT / "mathematics-operational-relationships.csv"
INPUT_SUMMARY = OPERATIONAL_EXPORT_ROOT / "mathematics-operational-summary.json"

OUTPUT_DIR = REPO_ROOT / "domains" / "mathematics" / "exports" / "gephi"
NODES_CSV = OUTPUT_DIR / "mathematics-gephi-nodes.csv"
EDGES_CSV = OUTPUT_DIR / "mathematics-gephi-edges.csv"
GEXF_PATH = OUTPUT_DIR / "mathematics-gephi-graph.gexf"


NODE_FIELDS = [
    "Id",
    "Label",
    "EntityType",
    "Subtype",
    "Domain",
    "SourceLayer",
    "FamilyId",
    "FamilyName",
    "ImplementationState",
    "PrimaryGradeBand",
    "PrimaryContentDomain",
    "OfficialIdentifier",
    "DocumentPath",
    "ArtifactType",
    "Purpose",
    "DeliveryFormat",
    "SourcePath",
    "DecisionType",
    "Outcome",
    "RegistryId",
    "SliceId",
    "Status",
    "ReviewStatus",
    "SupportedProfiles",
    "MappedFamilyIds",
    "MappedGradeBands",
    "MappedContentDomains",
    "NodeIds",
    "EntryNodeIds",
    "LearnerStateFields",
    "VerificationGateTargets",
    "FailureModeTargets",
    "InterventionTargets",
    "ResponseModesSupported",
    "AccessibilityTags",
    "LanguageSupportTags",
    "AppliesWhen",
]

EDGE_FIELDS = [
    "Source",
    "Target",
    "Type",
    "Label",
    "Weight",
    "Domain",
    "SourceLayer",
    "MappingStatus",
    "RelationshipType",
    "ArtifactType",
    "Purpose",
    "DecisionType",
    "RuleId",
]


def read_csv(path: Path) -> list[dict[str, str]]:
    with path.open(newline="", encoding="utf-8") as handle:
        return list(csv.DictReader(handle))


def pipe(value: str) -> str:
    return value.replace(";", "|") if value else ""


def load_operational_rows() -> tuple[list[dict], list[dict], dict]:
    if not INPUT_NODES.exists() or not INPUT_EDGES.exists():
        raise FileNotFoundError(
            "Operational export inputs are missing. Run scripts/export-mathematics-operational-graph.py first."
        )
    nodes = read_csv(INPUT_NODES)
    edges = read_csv(INPUT_EDGES)
    summary = json.loads(INPUT_SUMMARY.read_text()) if INPUT_SUMMARY.exists() else {}
    return nodes, edges, summary


def build_gephi_rows() -> tuple[list[dict], list[dict], dict]:
    nodes, edges, summary = load_operational_rows()
    gephi_nodes: list[dict] = []
    gephi_edges: list[dict] = []

    for node in nodes:
        entity_id = node["id:ID(Entity)"]
        label = node["name"]
        entity_type = node["entity_type"]
        official_identifier = node.get("official_identifier", "")
        if official_identifier and official_identifier != label:
            label = f"{official_identifier} {label}"

        gephi_nodes.append(
            {
                "Id": entity_id,
                "Label": label,
                "EntityType": entity_type,
                "Subtype": node.get("subtype", ""),
                "Domain": node.get("domain", ""),
                "SourceLayer": node.get("source_layer", ""),
                "FamilyId": node.get("family_id", ""),
                "FamilyName": node.get("family_name", ""),
                "ImplementationState": node.get("implementation_state", ""),
                "PrimaryGradeBand": node.get("primary_grade_band", ""),
                "PrimaryContentDomain": node.get("primary_content_domain", ""),
                "OfficialIdentifier": official_identifier,
                "DocumentPath": node.get("document_path", ""),
                "ArtifactType": node.get("artifact_type", ""),
                "Purpose": node.get("purpose", ""),
                "DeliveryFormat": node.get("delivery_format", ""),
                "SourcePath": node.get("source_path", ""),
                "DecisionType": node.get("decision_type", ""),
                "Outcome": node.get("outcome", ""),
                "RegistryId": node.get("registry_id", ""),
                "SliceId": node.get("slice_id", ""),
                "Status": node.get("status", ""),
                "ReviewStatus": node.get("review_status", ""),
                "SupportedProfiles": pipe(node.get("supported_profiles:string[]", "")),
                "MappedFamilyIds": pipe(node.get("mapped_family_ids:string[]", "")),
                "MappedGradeBands": pipe(node.get("mapped_grade_bands:string[]", "")),
                "MappedContentDomains": pipe(node.get("mapped_content_domains:string[]", "")),
                "NodeIds": pipe(node.get("node_ids:string[]", "")),
                "EntryNodeIds": pipe(node.get("entry_node_ids:string[]", "")),
                "LearnerStateFields": pipe(node.get("learner_state_fields:string[]", "")),
                "VerificationGateTargets": pipe(node.get("verification_gate_targets:string[]", "")),
                "FailureModeTargets": pipe(node.get("failure_mode_targets:string[]", "")),
                "InterventionTargets": pipe(node.get("intervention_targets:string[]", "")),
                "ResponseModesSupported": pipe(node.get("response_modes_supported:string[]", "")),
                "AccessibilityTags": pipe(node.get("accessibility_tags:string[]", "")),
                "LanguageSupportTags": pipe(node.get("language_support_tags:string[]", "")),
                "AppliesWhen": pipe(node.get("applies_when:string[]", "")),
            }
        )

    for edge in edges:
        gephi_edges.append(
            {
                "Source": edge[":START_ID(Entity)"],
                "Target": edge[":END_ID(Entity)"],
                "Type": "Directed",
                "Label": edge[":TYPE"],
                "Weight": 1,
                "Domain": edge.get("domain", ""),
                "SourceLayer": edge.get("source_layer", ""),
                "MappingStatus": edge.get("mapping_status", ""),
                "RelationshipType": edge.get("relationship_type", ""),
                "ArtifactType": edge.get("artifact_type", ""),
                "Purpose": edge.get("purpose", ""),
                "DecisionType": edge.get("decision_type", ""),
                "RuleId": edge.get("rule_id", ""),
            }
        )

    return gephi_nodes, gephi_edges, summary


def write_csv(path: Path, fieldnames: list[str], rows: list[dict]) -> None:
    with path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def write_gexf(nodes: list[dict], edges: list[dict]) -> None:
    ET.register_namespace("", "http://www.gexf.net/1.2draft")
    gexf = ET.Element("{http://www.gexf.net/1.2draft}gexf", {"version": "1.2"})
    graph_el = ET.SubElement(
        gexf,
        "{http://www.gexf.net/1.2draft}graph",
        {"mode": "static", "defaultedgetype": "directed"},
    )

    attributes_el = ET.SubElement(
        graph_el,
        "{http://www.gexf.net/1.2draft}attributes",
        {"class": "node", "mode": "static"},
    )
    attr_keys = [
        ("entity_type", "string"),
        ("subtype", "string"),
        ("domain", "string"),
        ("source_layer", "string"),
        ("family_id", "string"),
        ("family_name", "string"),
        ("implementation_state", "string"),
        ("primary_grade_band", "string"),
        ("primary_content_domain", "string"),
        ("official_identifier", "string"),
        ("document_path", "string"),
        ("artifact_type", "string"),
        ("purpose", "string"),
        ("delivery_format", "string"),
        ("source_path", "string"),
        ("decision_type", "string"),
        ("outcome", "string"),
        ("registry_id", "string"),
        ("slice_id", "string"),
        ("status", "string"),
        ("review_status", "string"),
        ("supported_profiles", "string"),
        ("mapped_family_ids", "string"),
        ("mapped_grade_bands", "string"),
        ("mapped_content_domains", "string"),
        ("node_ids", "string"),
        ("entry_node_ids", "string"),
        ("learner_state_fields", "string"),
        ("verification_gate_targets", "string"),
        ("failure_mode_targets", "string"),
        ("intervention_targets", "string"),
        ("response_modes_supported", "string"),
        ("accessibility_tags", "string"),
        ("language_support_tags", "string"),
        ("applies_when", "string"),
    ]
    for attr_id, attr_type in attr_keys:
        ET.SubElement(
            attributes_el,
            "{http://www.gexf.net/1.2draft}attribute",
            {"id": attr_id, "title": attr_id, "type": attr_type},
        )

    nodes_el = ET.SubElement(graph_el, "{http://www.gexf.net/1.2draft}nodes")
    for node in nodes:
        node_el = ET.SubElement(
            nodes_el,
            "{http://www.gexf.net/1.2draft}node",
            {"id": node["Id"], "label": node["Label"]},
        )
        attvalues_el = ET.SubElement(node_el, "{http://www.gexf.net/1.2draft}attvalues")
        value_map = {
            "entity_type": node["EntityType"],
            "subtype": node["Subtype"],
            "domain": node["Domain"],
            "source_layer": node["SourceLayer"],
            "family_id": node["FamilyId"],
            "family_name": node["FamilyName"],
            "implementation_state": node["ImplementationState"],
            "primary_grade_band": node["PrimaryGradeBand"],
            "primary_content_domain": node["PrimaryContentDomain"],
            "official_identifier": node["OfficialIdentifier"],
            "document_path": node["DocumentPath"],
            "artifact_type": node["ArtifactType"],
            "purpose": node["Purpose"],
            "delivery_format": node["DeliveryFormat"],
            "source_path": node["SourcePath"],
            "decision_type": node["DecisionType"],
            "outcome": node["Outcome"],
            "registry_id": node["RegistryId"],
            "slice_id": node["SliceId"],
            "status": node["Status"],
            "review_status": node["ReviewStatus"],
            "supported_profiles": node["SupportedProfiles"],
            "mapped_family_ids": node["MappedFamilyIds"],
            "mapped_grade_bands": node["MappedGradeBands"],
            "mapped_content_domains": node["MappedContentDomains"],
            "node_ids": node["NodeIds"],
            "entry_node_ids": node["EntryNodeIds"],
            "learner_state_fields": node["LearnerStateFields"],
            "verification_gate_targets": node["VerificationGateTargets"],
            "failure_mode_targets": node["FailureModeTargets"],
            "intervention_targets": node["InterventionTargets"],
            "response_modes_supported": node["ResponseModesSupported"],
            "accessibility_tags": node["AccessibilityTags"],
            "language_support_tags": node["LanguageSupportTags"],
            "applies_when": node["AppliesWhen"],
        }
        for attr_id, value in value_map.items():
            ET.SubElement(
                attvalues_el,
                "{http://www.gexf.net/1.2draft}attvalue",
                {"for": attr_id, "value": str(value)},
            )

    edges_el = ET.SubElement(graph_el, "{http://www.gexf.net/1.2draft}edges")
    for idx, edge in enumerate(edges):
        ET.SubElement(
            edges_el,
            "{http://www.gexf.net/1.2draft}edge",
            {
                "id": str(idx),
                "source": edge["Source"],
                "target": edge["Target"],
                "label": edge["Label"],
                "weight": str(edge["Weight"]),
                "type": "directed",
            },
        )

    tree = ET.ElementTree(gexf)
    tree.write(GEXF_PATH, encoding="utf-8", xml_declaration=True)


def write_readme(summary: dict, nodes: list[dict], edges: list[dict]) -> None:
    lines = [
        "# Gephi Export",
        "",
        "This directory contains Gephi-ready exports of the unified mathematics operational graph.",
        "",
        "## Included Layers",
        "",
        "- capability nodes and prerequisite topology",
        "- capability family nodes",
        "- standards-native entities and alignment edges",
        "- artifact registry and artifact attachment nodes",
        "- runtime slice and decision-rule nodes",
        "",
        "## Files",
        "",
        "- `mathematics-gephi-nodes.csv`: node table for Gephi CSV import",
        "- `mathematics-gephi-edges.csv`: edge table for Gephi CSV import",
        "- `mathematics-gephi-graph.gexf`: single-file graph export for direct Gephi import",
        "",
        "## Current Counts",
        "",
        f"- nodes: `{len(nodes)}`",
        f"- edges: `{len(edges)}`",
    ]
    for entity_type, count in sorted(summary.get("entity_type_counts", {}).items()):
        lines.append(f"- `{entity_type}`: `{count}`")

    lines.extend(
        [
            "",
            "## Import Options",
            "",
            "### Direct graph import",
            "",
            "Open `mathematics-gephi-graph.gexf` directly in Gephi.",
            "",
            "### CSV import",
            "",
            "Import `mathematics-gephi-nodes.csv` as the node table and `mathematics-gephi-edges.csv` as the edge table.",
            "",
            "The edge file uses:",
            "",
            "- `Source`",
            "- `Target`",
            "- `Type=Directed`",
            "- `Label` as the typed relationship name",
            "",
            "## Regenerate",
            "",
            "```bash",
            "python3 scripts/export-mathematics-operational-graph.py",
            "python3 scripts/export-mathematics-gephi.py",
            "```",
            "",
        ]
    )
    (OUTPUT_DIR / "README.md").write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    gephi_nodes, gephi_edges, summary = build_gephi_rows()
    write_csv(NODES_CSV, NODE_FIELDS, gephi_nodes)
    write_csv(EDGES_CSV, EDGE_FIELDS, gephi_edges)
    write_gexf(gephi_nodes, gephi_edges)
    write_readme(summary, gephi_nodes, gephi_edges)
    print(NODES_CSV.relative_to(REPO_ROOT))
    print(EDGES_CSV.relative_to(REPO_ROOT))
    print(GEXF_PATH.relative_to(REPO_ROOT))


if __name__ == "__main__":
    main()
