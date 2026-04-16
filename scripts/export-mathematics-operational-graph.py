#!/usr/bin/env python3

from __future__ import annotations

import csv
import json
import re
from datetime import date
from pathlib import Path

import yaml


REPO_ROOT = Path(__file__).resolve().parent.parent
DOMAIN_ROOT = REPO_ROOT / "domains" / "mathematics"
EXPORT_ROOT = DOMAIN_ROOT / "exports" / "operational-graph"
ARTIFACT_ATTACHMENT_ROOT = DOMAIN_ROOT / "artifact-attachments"

MASTER_GRAPH_PATH = DOMAIN_ROOT / "master-knowledge-graph.yaml"
STANDARDS_GRAPH_PATH = DOMAIN_ROOT / "standards-augmented-graph.json"
ASSESSMENT_OVERLAY_PATH = DOMAIN_ROOT / "assessment-overlays" / "assessment-overlays.json"
RUNTIME_SLICE_PATH = DOMAIN_ROOT / "runtime" / "fraction-spine-runtime-slice.yaml"

OUTPUT_NODES = EXPORT_ROOT / "mathematics-operational-nodes.csv"
OUTPUT_RELATIONSHIPS = EXPORT_ROOT / "mathematics-operational-relationships.csv"
OUTPUT_SUMMARY = EXPORT_ROOT / "mathematics-operational-summary.json"
OUTPUT_CYPHER = EXPORT_ROOT / "import-mathematics-operational-graph.cypher"
OUTPUT_README = EXPORT_ROOT / "README.md"


NODE_FIELDNAMES = [
    "id:ID(Entity)",
    "name",
    "entity_type",
    "domain",
    "source_layer",
    "subtype",
    "family_id",
    "family_name",
    "implementation_state",
    "primary_grade_band",
    "primary_content_domain",
    "official_identifier",
    "document_path",
    "artifact_type",
    "purpose",
    "delivery_format",
    "source_path",
    "decision_type",
    "outcome",
    "registry_id",
    "slice_id",
    "status",
    "review_status",
    "supported_profiles:string[]",
    "mapped_family_ids:string[]",
    "mapped_grade_bands:string[]",
    "mapped_content_domains:string[]",
    "node_ids:string[]",
    "entry_node_ids:string[]",
    "learner_state_fields:string[]",
    "verification_gate_targets:string[]",
    "failure_mode_targets:string[]",
    "intervention_targets:string[]",
    "response_modes_supported:string[]",
    "accessibility_tags:string[]",
    "language_support_tags:string[]",
    "applies_when:string[]",
    ":LABEL",
]

REL_FIELDNAMES = [
    ":START_ID(Entity)",
    ":END_ID(Entity)",
    ":TYPE",
    "domain",
    "source_layer",
    "mapping_status",
    "relationship_type",
    "artifact_type",
    "purpose",
    "decision_type",
    "rule_id",
]


def slugify(value: str) -> str:
    value = value.lower().strip()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")


def load_yaml(path: Path) -> dict:
    return yaml.safe_load(path.read_text())


def load_json(path: Path) -> dict:
    return json.loads(path.read_text())


def as_list(value: object) -> list[str]:
    if value is None:
        return []
    if isinstance(value, list):
        return [str(item) for item in value]
    return [str(value)]


def labels(*values: str) -> str:
    return ";".join(value for value in values if value)


def artifact_edge_type(artifact_type: str) -> str:
    mapping = {
        "LessonPattern": "HAS_LESSON_PATTERN",
        "VerificationTask": "HAS_VERIFICATION_TASK",
        "InterventionAsset": "HAS_INTERVENTION",
        "TeacherDecisionSupport": "HAS_TEACHER_DECISION_SUPPORT",
        "WorkedExample": "HAS_WORKED_EXAMPLE",
        "AssessmentBundle": "HAS_ASSESSMENT_BUNDLE",
        "ReteachRoutine": "HAS_INTERVENTION",
        "Exemplar": "HAS_EXEMPLAR",
        "ErrorAnalysisTask": "HAS_ERROR_ANALYSIS_TASK",
        "LanguageSupport": "HAS_LANGUAGE_SUPPORT",
        "AccessibilitySupport": "HAS_ACCESSIBILITY_SUPPORT",
        "GuidedPracticeSet": "HAS_GUIDED_PRACTICE",
        "RetentionCheck": "HAS_RETENTION_CHECK",
    }
    return mapping.get(artifact_type, "HAS_ARTIFACT")


def ensure_dir() -> None:
    EXPORT_ROOT.mkdir(parents=True, exist_ok=True)


def load_artifact_registries() -> list[dict]:
    registries: list[dict] = []
    for registry_path in sorted(ARTIFACT_ATTACHMENT_ROOT.glob("*.yaml")):
        registry = load_yaml(registry_path)
        registry["_source_path"] = str(registry_path.relative_to(REPO_ROOT))
        registries.append(registry)
    return registries


def resolve_artifact_target_entity_id(
    artifact: dict,
    capability_index: dict[str, dict],
    known_assessment_entity_ids: set[str],
) -> str:
    target_entity_type = artifact.get("target_entity_type")
    target_entity_id = artifact.get("target_entity_id", "")

    if target_entity_type == "CapabilityNode":
        return f"capability:{target_entity_id}" if target_entity_id in capability_index else ""

    if target_entity_type in {"AssessmentOverlay", "AssessmentUnit"}:
        return target_entity_id if target_entity_id in known_assessment_entity_ids else ""

    if target_entity_type in {"GradeBand", "ContentDomain", "StandardsAnchor", "PerformanceLevel"}:
        return target_entity_id

    return ""


def build_capability_index(master_graph: dict) -> tuple[list[dict], list[dict], dict[str, dict]]:
    nodes: list[dict] = []
    relationships: list[dict] = []
    index: dict[str, dict] = {}

    for family in master_graph.get("families", []):
        family_id = family["id"]
        family_name = family["name"]
        family_entity_id = f"family:{family_id.lower()}"
        nodes.append(
            {
                "id:ID(Entity)": family_entity_id,
                "name": family_name,
                "entity_type": "CapabilityFamily",
                "domain": "mathematics",
                "source_layer": "capability_topology",
                "subtype": "family",
                "family_id": family_id,
                "family_name": family_name,
                "implementation_state": "",
                "primary_grade_band": "",
                "primary_content_domain": "",
                "official_identifier": "",
                "document_path": "",
                "artifact_type": "",
                "purpose": "",
                "delivery_format": "",
                "source_path": "",
                "decision_type": "",
                "outcome": "",
                "registry_id": "",
                "slice_id": "",
                "status": "",
                "review_status": "",
                "supported_profiles:string[]": [],
                "mapped_family_ids:string[]": [family_id],
                "mapped_grade_bands:string[]": [],
                "mapped_content_domains:string[]": [],
                "node_ids:string[]": [],
                "entry_node_ids:string[]": [],
                "learner_state_fields:string[]": [],
                "verification_gate_targets:string[]": [],
                "failure_mode_targets:string[]": [],
                "intervention_targets:string[]": [],
                "response_modes_supported:string[]": [],
                "accessibility_tags:string[]": [],
                "language_support_tags:string[]": [],
                "applies_when:string[]": [],
                ":LABEL": labels("Entity", "CapabilityFamily"),
            }
        )

        for node in family.get("nodes", []):
            node_id = node["id"]
            entity_id = f"capability:{node_id}"
            node_row = {
                "id:ID(Entity)": entity_id,
                "name": node["name"],
                "entity_type": "CapabilityNode",
                "domain": "mathematics",
                "source_layer": "capability_topology",
                "subtype": "capability",
                "family_id": family_id,
                "family_name": family_name,
                "implementation_state": node.get("implementation_state", ""),
                "primary_grade_band": "",
                "primary_content_domain": "",
                "official_identifier": node_id,
                "document_path": "",
                "artifact_type": "",
                "purpose": "",
                "delivery_format": "",
                "source_path": "",
                "decision_type": "",
                "outcome": "",
                "registry_id": "",
                "slice_id": "",
                "status": "",
                "review_status": "",
                "supported_profiles:string[]": [],
                "mapped_family_ids:string[]": [family_id],
                "mapped_grade_bands:string[]": [],
                "mapped_content_domains:string[]": [],
                "node_ids:string[]": [],
                "entry_node_ids:string[]": [],
                "learner_state_fields:string[]": [],
                "verification_gate_targets:string[]": [],
                "failure_mode_targets:string[]": [],
                "intervention_targets:string[]": [],
                "response_modes_supported:string[]": [],
                "accessibility_tags:string[]": [],
                "language_support_tags:string[]": [],
                "applies_when:string[]": [],
                ":LABEL": labels("Entity", "CapabilityNode"),
            }
            nodes.append(node_row)
            index[node_id] = node_row

            relationships.append(
                {
                    ":START_ID(Entity)": entity_id,
                    ":END_ID(Entity)": family_entity_id,
                    ":TYPE": "BELONGS_TO_FAMILY",
                    "domain": "mathematics",
                    "source_layer": "capability_topology",
                    "mapping_status": "",
                    "relationship_type": "",
                    "artifact_type": "",
                    "purpose": "",
                    "decision_type": "",
                    "rule_id": "",
                }
            )

            for dependency_id in node.get("depends_on", []):
                relationships.append(
                    {
                        ":START_ID(Entity)": entity_id,
                        ":END_ID(Entity)": f"capability:{dependency_id}",
                        ":TYPE": "DEPENDS_ON",
                        "domain": "mathematics",
                        "source_layer": "capability_topology",
                        "mapping_status": "",
                        "relationship_type": "",
                        "artifact_type": "",
                        "purpose": "",
                        "decision_type": "",
                        "rule_id": "",
                    }
                )
                relationships.append(
                    {
                        ":START_ID(Entity)": f"capability:{dependency_id}",
                        ":END_ID(Entity)": entity_id,
                        ":TYPE": "UNLOCKS",
                        "domain": "mathematics",
                        "source_layer": "capability_topology",
                        "mapping_status": "",
                        "relationship_type": "",
                        "artifact_type": "",
                        "purpose": "",
                        "decision_type": "",
                        "rule_id": "",
                    }
                )

    return nodes, relationships, index


def summarize_scalar(values: set[str]) -> str:
    if not values:
        return ""
    if len(values) == 1:
        return next(iter(values))
    return "multiple"


def build_capability_alignment_context(standards_graph: dict, capability_index: dict[str, dict]) -> dict[str, dict]:
    grade_band_labels = {
        entity["id"]: entity["label"]
        for entity in standards_graph.get("entities", {}).get("grade_bands", [])
    }
    content_domain_labels = {
        entity["id"]: entity["label"]
        for entity in standards_graph.get("entities", {}).get("content_domains", [])
    }

    context: dict[str, dict] = {}
    for node_id, capability in capability_index.items():
        context[node_id] = {
            "family_ids": {capability.get("family_id", "")} if capability.get("family_id") else set(),
            "grade_bands": set(),
            "content_domains": set(),
        }

    for edge in standards_graph.get("edges", []):
        source_id = edge.get("source")
        if source_id not in context:
            continue
        if edge["type"] == "ALIGNS_TO_GRADE_BAND":
            context[source_id]["grade_bands"].add(grade_band_labels.get(edge["target"], edge["target"]))
        if edge["type"] == "ALIGNS_TO_CONTENT_DOMAIN":
            context[source_id]["content_domains"].add(content_domain_labels.get(edge["target"], edge["target"]))

    for node_id, capability in capability_index.items():
        capability["primary_grade_band"] = summarize_scalar(context[node_id]["grade_bands"])
        capability["primary_content_domain"] = summarize_scalar(context[node_id]["content_domains"])
        capability["mapped_grade_bands:string[]"] = sorted(context[node_id]["grade_bands"])
        capability["mapped_content_domains:string[]"] = sorted(context[node_id]["content_domains"])

    return context


def build_standards_layer(standards_graph: dict, capability_index: dict[str, dict]) -> tuple[list[dict], list[dict]]:
    nodes: list[dict] = []
    relationships: list[dict] = []

    entity_group_map = {
        "grade_bands": ("GradeBand", "grade_band"),
        "content_domains": ("ContentDomain", "content_domain"),
        "performance_levels": ("PerformanceLevel", "performance_level"),
        "ccss_anchors": ("StandardsAnchor", "ccss_anchor"),
        "state_profiles": ("StateProfile", "state_profile"),
    }

    for group_name, (entity_type, subtype) in entity_group_map.items():
        for entity in standards_graph["entities"].get(group_name, []):
            nodes.append(
                {
                    "id:ID(Entity)": entity["id"],
                    "name": entity["label"],
                    "entity_type": entity_type,
                    "domain": "mathematics",
                    "source_layer": "standards_overlay",
                    "subtype": subtype,
                    "family_id": "",
                    "family_name": "",
                    "implementation_state": "",
                    "primary_grade_band": entity.get("grade_band_or_category", ""),
                    "primary_content_domain": entity.get("domain", ""),
                    "official_identifier": entity.get("official_identifier", ""),
                    "document_path": entity.get("document_path", ""),
                    "artifact_type": "",
                    "purpose": "",
                    "delivery_format": "",
                    "source_path": "",
                    "decision_type": "",
                    "outcome": "",
                    "registry_id": "",
                    "slice_id": "",
                    "status": "",
                    "review_status": "",
                    "supported_profiles:string[]": [],
                    "mapped_family_ids:string[]": [],
                    "mapped_grade_bands:string[]": [],
                    "mapped_content_domains:string[]": [],
                    "node_ids:string[]": [],
                    "entry_node_ids:string[]": [],
                    "learner_state_fields:string[]": [],
                    "verification_gate_targets:string[]": [],
                    "failure_mode_targets:string[]": [],
                    "intervention_targets:string[]": [],
                    "response_modes_supported:string[]": [],
                    "accessibility_tags:string[]": [],
                    "language_support_tags:string[]": [],
                    "applies_when:string[]": [],
                    ":LABEL": labels("Entity", entity_type),
                }
            )

    for edge in standards_graph.get("edges", []):
        if edge["type"] == "DEPENDS_ON":
            continue
        source_id = edge["source"]
        source_entity = f"capability:{source_id}" if source_id in capability_index else source_id
        relationships.append(
            {
                ":START_ID(Entity)": source_entity,
                ":END_ID(Entity)": edge["target"],
                ":TYPE": edge["type"],
                "domain": "mathematics",
                "source_layer": "standards_overlay",
                "mapping_status": edge.get("mapping_status", ""),
                "relationship_type": edge.get("relationship_type", ""),
                "artifact_type": "",
                "purpose": "",
                "decision_type": "",
                "rule_id": "",
            }
        )

    return nodes, relationships


def build_assessment_overlay_layer(
    overlay_catalog: dict,
    capability_index: dict[str, dict],
    capability_alignment_context: dict[str, dict],
) -> tuple[list[dict], list[dict]]:
    nodes: list[dict] = []
    relationships: list[dict] = []

    for overlay in overlay_catalog.get("overlays", []):
        overlay_entity_id = f"assessment-overlay:{overlay['overlay_id']}"
        unit_ids = [unit["unit_id"] for unit in overlay.get("coverage_units", [])]
        overlay_family_ids: set[str] = set()
        overlay_grade_bands: set[str] = set()
        overlay_content_domains: set[str] = set()

        for unit in overlay.get("coverage_units", []):
            for node_id in unit.get("mapped_capability_nodes", []):
                context = capability_alignment_context.get(node_id)
                if not context:
                    continue
                overlay_family_ids.update(context["family_ids"])
                overlay_grade_bands.update(context["grade_bands"])
                overlay_content_domains.update(context["content_domains"])

        nodes.append(
            {
                "id:ID(Entity)": overlay_entity_id,
                "name": overlay["title"],
                "entity_type": "AssessmentOverlay",
                "domain": "mathematics",
                "source_layer": "assessment_overlay",
                "subtype": "assessment_overlay",
                "family_id": "",
                "family_name": overlay["assessment_family"],
                "implementation_state": "",
                "primary_grade_band": summarize_scalar(overlay_grade_bands),
                "primary_content_domain": summarize_scalar(overlay_content_domains),
                "official_identifier": overlay["overlay_id"],
                "document_path": "",
                "artifact_type": "",
                "purpose": overlay.get("overlay_summary_classification", ""),
                "delivery_format": "",
                "source_path": str(ASSESSMENT_OVERLAY_PATH.relative_to(REPO_ROOT)),
                "decision_type": "",
                "outcome": "",
                "registry_id": "",
                "slice_id": "",
                "status": overlay.get("status", ""),
                "review_status": "",
                "supported_profiles:string[]": [],
                "mapped_family_ids:string[]": sorted(overlay_family_ids),
                "mapped_grade_bands:string[]": sorted(overlay_grade_bands),
                "mapped_content_domains:string[]": sorted(overlay_content_domains),
                "node_ids:string[]": [],
                "entry_node_ids:string[]": [],
                "learner_state_fields:string[]": [],
                "verification_gate_targets:string[]": [],
                "failure_mode_targets:string[]": [],
                "intervention_targets:string[]": [],
                "response_modes_supported:string[]": [],
                "accessibility_tags:string[]": [],
                "language_support_tags:string[]": [],
                "applies_when:string[]": unit_ids,
                ":LABEL": labels("Entity", "AssessmentOverlay"),
            }
        )

        for unit in overlay.get("coverage_units", []):
            unit_entity_id = f"assessment-unit:{overlay['overlay_id']}:{unit['unit_id']}"
            unit_family_ids: set[str] = set()
            unit_grade_bands: set[str] = set()
            unit_content_domains: set[str] = set()
            for node_id in unit.get("mapped_capability_nodes", []):
                context = capability_alignment_context.get(node_id)
                if not context:
                    continue
                unit_family_ids.update(context["family_ids"])
                unit_grade_bands.update(context["grade_bands"])
                unit_content_domains.update(context["content_domains"])
            nodes.append(
                {
                    "id:ID(Entity)": unit_entity_id,
                    "name": unit["title"],
                    "entity_type": "AssessmentUnit",
                    "domain": "mathematics",
                    "source_layer": "assessment_overlay",
                    "subtype": "assessment_unit",
                    "family_id": "",
                    "family_name": overlay["assessment_family"],
                    "implementation_state": "",
                    "primary_grade_band": summarize_scalar(unit_grade_bands),
                    "primary_content_domain": summarize_scalar(unit_content_domains),
                    "official_identifier": unit["unit_id"],
                    "document_path": "",
                    "artifact_type": "",
                    "purpose": unit.get("coverage_classification", ""),
                    "delivery_format": "",
                    "source_path": str(ASSESSMENT_OVERLAY_PATH.relative_to(REPO_ROOT)),
                    "decision_type": "",
                    "outcome": "",
                    "registry_id": "",
                    "slice_id": "",
                    "status": overlay.get("status", ""),
                    "review_status": "",
                    "supported_profiles:string[]": [],
                    "mapped_family_ids:string[]": sorted(unit_family_ids),
                    "mapped_grade_bands:string[]": sorted(unit_grade_bands),
                    "mapped_content_domains:string[]": sorted(unit_content_domains),
                    "node_ids:string[]": unit.get("mapped_capability_nodes", []),
                    "entry_node_ids:string[]": [],
                    "learner_state_fields:string[]": [],
                    "verification_gate_targets:string[]": [],
                    "failure_mode_targets:string[]": [],
                    "intervention_targets:string[]": [],
                    "response_modes_supported:string[]": [],
                    "accessibility_tags:string[]": [],
                    "language_support_tags:string[]": [],
                    "applies_when:string[]": [],
                    ":LABEL": labels("Entity", "AssessmentUnit"),
                }
            )

            relationships.append(
                {
                    ":START_ID(Entity)": overlay_entity_id,
                    ":END_ID(Entity)": unit_entity_id,
                    ":TYPE": "HAS_ASSESSMENT_UNIT",
                    "domain": "mathematics",
                    "source_layer": "assessment_overlay",
                    "mapping_status": unit.get("coverage_classification", ""),
                    "relationship_type": "",
                    "artifact_type": "",
                    "purpose": "",
                    "decision_type": "",
                    "rule_id": "",
                }
            )

            for node_id in unit.get("mapped_capability_nodes", []):
                if node_id not in capability_index:
                    continue
                relationships.append(
                    {
                        ":START_ID(Entity)": unit_entity_id,
                        ":END_ID(Entity)": f"capability:{node_id}",
                        ":TYPE": "MAPS_TO_CAPABILITY",
                        "domain": "mathematics",
                        "source_layer": "assessment_overlay",
                        "mapping_status": unit.get("coverage_classification", ""),
                        "relationship_type": "",
                        "artifact_type": "",
                        "purpose": "",
                        "decision_type": "",
                        "rule_id": "",
                    }
                )

    return nodes, relationships


def build_artifact_layer(
    registries: list[dict],
    capability_index: dict[str, dict],
    known_assessment_entity_ids: set[str],
) -> tuple[list[dict], list[dict]]:
    nodes: list[dict] = []
    relationships: list[dict] = []

    for registry in registries:
        registry_id = f"artifact-registry:{registry['registry_id']}"
        primary_node_ids = as_list(registry.get("target_scope", {}).get("primary_node_ids"))
        nodes.append(
            {
                "id:ID(Entity)": registry_id,
                "name": registry["registry_id"],
                "entity_type": "ArtifactRegistry",
                "domain": "mathematics",
                "source_layer": "artifact_attachment",
                "subtype": "artifact_registry",
                "family_id": "",
                "family_name": "",
                "implementation_state": "",
                "primary_grade_band": "",
                "primary_content_domain": "",
                "official_identifier": registry["registry_id"],
                "document_path": "",
                "artifact_type": "",
                "purpose": "",
                "delivery_format": "",
                "source_path": registry.get("_source_path", ""),
                "decision_type": "",
                "outcome": "",
                "registry_id": registry["registry_id"],
                "slice_id": "",
                "status": registry.get("status", ""),
                "review_status": "",
                "supported_profiles:string[]": [],
                "mapped_family_ids:string[]": [],
                "mapped_grade_bands:string[]": [],
                "mapped_content_domains:string[]": [],
                "node_ids:string[]": primary_node_ids,
                "entry_node_ids:string[]": [],
                "learner_state_fields:string[]": [],
                "verification_gate_targets:string[]": [],
                "failure_mode_targets:string[]": [],
                "intervention_targets:string[]": [],
                "response_modes_supported:string[]": [],
                "accessibility_tags:string[]": [],
                "language_support_tags:string[]": [],
                "applies_when:string[]": [],
                ":LABEL": labels("Entity", "ArtifactRegistry"),
            }
        )

        for node_id in primary_node_ids:
            if node_id in capability_index:
                relationships.append(
                    {
                        ":START_ID(Entity)": registry_id,
                        ":END_ID(Entity)": f"capability:{node_id}",
                        ":TYPE": "REGISTERS_SCOPE",
                        "domain": "mathematics",
                        "source_layer": "artifact_attachment",
                        "mapping_status": "",
                        "relationship_type": "",
                        "artifact_type": "",
                        "purpose": "",
                        "decision_type": "",
                        "rule_id": "",
                    }
                )

        for artifact in registry.get("artifacts", []):
            artifact_id = f"artifact:{artifact['artifact_id']}"
            nodes.append(
                {
                    "id:ID(Entity)": artifact_id,
                    "name": artifact["title"],
                    "entity_type": "Artifact",
                    "domain": "mathematics",
                    "source_layer": "artifact_attachment",
                    "subtype": "artifact",
                    "family_id": "",
                    "family_name": "",
                    "implementation_state": "",
                    "primary_grade_band": artifact.get("grade_band", ""),
                    "primary_content_domain": artifact.get("content_domain", ""),
                    "official_identifier": artifact["artifact_id"],
                    "document_path": "",
                    "artifact_type": artifact.get("artifact_type", ""),
                    "purpose": artifact.get("purpose", ""),
                    "delivery_format": artifact.get("delivery_format", ""),
                    "source_path": artifact.get("source_path", ""),
                    "decision_type": "",
                    "outcome": "",
                    "registry_id": registry["registry_id"],
                    "slice_id": "",
                    "status": artifact.get("status", ""),
                    "review_status": artifact.get("review_status", ""),
                    "supported_profiles:string[]": [],
                    "mapped_family_ids:string[]": [],
                    "mapped_grade_bands:string[]": [],
                    "mapped_content_domains:string[]": [],
                    "node_ids:string[]": [artifact.get("primary_node_id", "")] if artifact.get("primary_node_id") else [],
                    "entry_node_ids:string[]": [],
                    "learner_state_fields:string[]": [],
                    "verification_gate_targets:string[]": as_list(artifact.get("verification_gate_targets")),
                    "failure_mode_targets:string[]": as_list(artifact.get("failure_mode_targets")),
                    "intervention_targets:string[]": as_list(artifact.get("intervention_targets")),
                    "response_modes_supported:string[]": as_list(artifact.get("response_modes_supported")),
                    "accessibility_tags:string[]": as_list(artifact.get("accessibility_tags")),
                    "language_support_tags:string[]": as_list(artifact.get("language_support_tags")),
                    "applies_when:string[]": [],
                    ":LABEL": labels("Entity", "Artifact", artifact.get("artifact_type", "")),
                }
            )

            relationships.append(
                {
                    ":START_ID(Entity)": registry_id,
                    ":END_ID(Entity)": artifact_id,
                    ":TYPE": "CONTAINS_ARTIFACT",
                    "domain": "mathematics",
                    "source_layer": "artifact_attachment",
                    "mapping_status": "",
                    "relationship_type": "",
                    "artifact_type": artifact.get("artifact_type", ""),
                    "purpose": artifact.get("purpose", ""),
                    "decision_type": "",
                    "rule_id": "",
                }
            )

            resolved_target_entity_id = resolve_artifact_target_entity_id(
                artifact,
                capability_index,
                known_assessment_entity_ids,
            )
            if resolved_target_entity_id:
                relationships.append(
                    {
                        ":START_ID(Entity)": resolved_target_entity_id,
                        ":END_ID(Entity)": artifact_id,
                        ":TYPE": artifact_edge_type(artifact.get("artifact_type", "")),
                        "domain": "mathematics",
                        "source_layer": "artifact_attachment",
                        "mapping_status": "",
                        "relationship_type": "",
                        "artifact_type": artifact.get("artifact_type", ""),
                        "purpose": artifact.get("purpose", ""),
                        "decision_type": "",
                        "rule_id": "",
                    }
                )

            grade_band = artifact.get("grade_band")
            if grade_band:
                relationships.append(
                    {
                        ":START_ID(Entity)": artifact_id,
                        ":END_ID(Entity)": f"grade-band:{slugify(grade_band)}",
                        ":TYPE": "ALIGNS_TO_GRADE_BAND",
                        "domain": "mathematics",
                        "source_layer": "artifact_attachment",
                        "mapping_status": "registry-declared",
                        "relationship_type": "",
                        "artifact_type": artifact.get("artifact_type", ""),
                        "purpose": artifact.get("purpose", ""),
                        "decision_type": "",
                        "rule_id": "",
                    }
                )

            content_domain = artifact.get("content_domain")
            if content_domain:
                relationships.append(
                    {
                        ":START_ID(Entity)": artifact_id,
                        ":END_ID(Entity)": f"content-domain:{slugify(content_domain)}",
                        ":TYPE": "ALIGNS_TO_CONTENT_DOMAIN",
                        "domain": "mathematics",
                        "source_layer": "artifact_attachment",
                        "mapping_status": "registry-declared",
                        "relationship_type": "",
                        "artifact_type": artifact.get("artifact_type", ""),
                        "purpose": artifact.get("purpose", ""),
                        "decision_type": "",
                        "rule_id": "",
                    }
                )

    return nodes, relationships


def build_runtime_layer(runtime_slice: dict, capability_index: dict[str, dict], registry: dict) -> tuple[list[dict], list[dict]]:
    nodes: list[dict] = []
    relationships: list[dict] = []

    slice_entity_id = f"runtime-slice:{runtime_slice['slice_id']}"
    registry_entity_id = f"artifact-registry:{registry['registry_id']}"

    nodes.append(
        {
            "id:ID(Entity)": slice_entity_id,
            "name": runtime_slice["slice_id"],
            "entity_type": "RuntimeSlice",
            "domain": "mathematics",
            "source_layer": "runtime_navigation",
            "subtype": "runtime_slice",
            "family_id": "",
            "family_name": "",
            "implementation_state": "",
            "primary_grade_band": "",
            "primary_content_domain": "",
            "official_identifier": runtime_slice["slice_id"],
            "document_path": "",
            "artifact_type": "",
            "purpose": "",
            "delivery_format": "",
            "source_path": str(RUNTIME_SLICE_PATH.relative_to(REPO_ROOT)),
            "decision_type": "",
            "outcome": "",
            "registry_id": registry["registry_id"],
            "slice_id": runtime_slice["slice_id"],
            "status": runtime_slice.get("status", ""),
            "review_status": runtime_slice.get("review_status", ""),
            "supported_profiles:string[]": [],
            "mapped_family_ids:string[]": [],
            "mapped_grade_bands:string[]": [],
            "mapped_content_domains:string[]": [],
            "node_ids:string[]": as_list(runtime_slice.get("node_ids")),
            "entry_node_ids:string[]": as_list(runtime_slice.get("entry_node_ids")),
            "learner_state_fields:string[]": as_list(runtime_slice.get("learner_state_fields")),
            "verification_gate_targets:string[]": [],
            "failure_mode_targets:string[]": [],
            "intervention_targets:string[]": [],
            "response_modes_supported:string[]": [],
            "accessibility_tags:string[]": [],
            "language_support_tags:string[]": [],
            "applies_when:string[]": [],
            ":LABEL": labels("Entity", "RuntimeSlice"),
        }
    )

    relationships.append(
        {
            ":START_ID(Entity)": slice_entity_id,
            ":END_ID(Entity)": registry_entity_id,
            ":TYPE": "REFERENCES_ARTIFACT_REGISTRY",
            "domain": "mathematics",
            "source_layer": "runtime_navigation",
            "mapping_status": "",
            "relationship_type": "",
            "artifact_type": "",
            "purpose": "",
            "decision_type": "",
            "rule_id": "",
        }
    )

    for node_id in as_list(runtime_slice.get("node_ids")):
        if node_id in capability_index:
            relationships.append(
                {
                    ":START_ID(Entity)": slice_entity_id,
                    ":END_ID(Entity)": f"capability:{node_id}",
                    ":TYPE": "COVERS_NODE",
                    "domain": "mathematics",
                    "source_layer": "runtime_navigation",
                    "mapping_status": "",
                    "relationship_type": "",
                    "artifact_type": "",
                    "purpose": "",
                    "decision_type": "",
                    "rule_id": "",
                }
            )

    for node_id in as_list(runtime_slice.get("entry_node_ids")):
        if node_id in capability_index:
            relationships.append(
                {
                    ":START_ID(Entity)": slice_entity_id,
                    ":END_ID(Entity)": f"capability:{node_id}",
                    ":TYPE": "ENTRY_NODE",
                    "domain": "mathematics",
                    "source_layer": "runtime_navigation",
                    "mapping_status": "",
                    "relationship_type": "",
                    "artifact_type": "",
                    "purpose": "",
                    "decision_type": "",
                    "rule_id": "",
                }
            )

    for rule in runtime_slice.get("navigation_rules", []):
        rule_id = f"decision-rule:{rule['rule_id']}"
        nodes.append(
            {
                "id:ID(Entity)": rule_id,
                "name": rule["rule_id"],
                "entity_type": "DecisionRule",
                "domain": "mathematics",
                "source_layer": "runtime_navigation",
                "subtype": "decision_rule",
                "family_id": "",
                "family_name": "",
                "implementation_state": "",
                "primary_grade_band": "",
                "primary_content_domain": "",
                "official_identifier": rule["rule_id"],
                "document_path": "",
                "artifact_type": "",
                "purpose": rule.get("artifact_selection", ""),
                "delivery_format": "",
                "source_path": str(RUNTIME_SLICE_PATH.relative_to(REPO_ROOT)),
                "decision_type": rule.get("decision_type", ""),
                "outcome": rule.get("outcome", ""),
                "registry_id": registry["registry_id"],
                "slice_id": runtime_slice["slice_id"],
                "status": "",
                "review_status": runtime_slice.get("review_status", ""),
                "supported_profiles:string[]": [],
                "mapped_family_ids:string[]": [],
                "mapped_grade_bands:string[]": [],
                "mapped_content_domains:string[]": [],
                "node_ids:string[]": as_list(runtime_slice.get("node_ids")),
                "entry_node_ids:string[]": [],
                "learner_state_fields:string[]": [],
                "verification_gate_targets:string[]": [],
                "failure_mode_targets:string[]": [],
                "intervention_targets:string[]": [],
                "response_modes_supported:string[]": [],
                "accessibility_tags:string[]": [],
                "language_support_tags:string[]": [],
                "applies_when:string[]": as_list(rule.get("applies_when")),
                ":LABEL": labels("Entity", "DecisionRule"),
            }
        )

        relationships.append(
            {
                ":START_ID(Entity)": slice_entity_id,
                ":END_ID(Entity)": rule_id,
                ":TYPE": "HAS_DECISION_RULE",
                "domain": "mathematics",
                "source_layer": "runtime_navigation",
                "mapping_status": "",
                "relationship_type": "",
                "artifact_type": "",
                "purpose": "",
                "decision_type": rule.get("decision_type", ""),
                "rule_id": rule["rule_id"],
            }
        )

        relationships.append(
            {
                ":START_ID(Entity)": rule_id,
                ":END_ID(Entity)": registry_entity_id,
                ":TYPE": "USES_ARTIFACT_REGISTRY",
                "domain": "mathematics",
                "source_layer": "runtime_navigation",
                "mapping_status": "",
                "relationship_type": "",
                "artifact_type": "",
                "purpose": rule.get("artifact_selection", ""),
                "decision_type": rule.get("decision_type", ""),
                "rule_id": rule["rule_id"],
            }
        )

        for node_id in as_list(runtime_slice.get("node_ids")):
            if node_id in capability_index:
                relationships.append(
                    {
                        ":START_ID(Entity)": rule_id,
                        ":END_ID(Entity)": f"capability:{node_id}",
                        ":TYPE": "OPERATES_ON",
                        "domain": "mathematics",
                        "source_layer": "runtime_navigation",
                        "mapping_status": "",
                        "relationship_type": "",
                        "artifact_type": "",
                        "purpose": "",
                        "decision_type": rule.get("decision_type", ""),
                        "rule_id": rule["rule_id"],
                    }
                )

    return nodes, relationships


def write_csv(path: Path, rows: list[dict], fieldnames: list[str]) -> None:
    with path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        for row in rows:
            normalized = {}
            for key in fieldnames:
                value = row.get(key, "")
                normalized[key] = value
            writer.writerow(normalized)


def write_import_cypher() -> None:
    OUTPUT_CYPHER.write_text(
        """LOAD CSV WITH HEADERS FROM 'file:///mathematics-operational-nodes.csv' AS row
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
""",
        encoding="utf-8",
    )


def write_readme(summary: dict) -> None:
    lines = [
        "# Mathematics Operational Graph Export",
        "",
        "## Purpose",
        "",
        "This export is the first physically unified operational mathematics graph package for external graph tooling and adaptive-system traversal prototypes.",
        "",
        "It joins these layers into one importable graph surface:",
        "",
        "- capability nodes and prerequisite topology",
        "- capability families",
        "- standards-native entities and alignment edges",
        "- artifact registry and attached artifact nodes",
        "- runtime slice and decision-rule nodes",
        "",
        "## Files",
        "",
        "- `mathematics-operational-nodes.csv`",
        "- `mathematics-operational-relationships.csv`",
        "- `mathematics-operational-summary.json`",
        "- `import-mathematics-operational-graph.cypher`",
        "",
        "## Entity Counts",
        "",
        f"- total nodes: `{summary['node_count']}`",
        f"- total relationships: `{summary['relationship_count']}`",
    ]
    for entity_type, count in sorted(summary["entity_type_counts"].items()):
        lines.append(f"- `{entity_type}`: `{count}`")

    lines.extend(
        [
            "",
            "## Relationship Counts",
            "",
        ]
    )
    for rel_type, count in sorted(summary["relationship_type_counts"].items()):
        lines.append(f"- `{rel_type}`: `{count}`")

    lines.extend(
        [
            "",
            "## Import Notes",
            "",
            "The Cypher import script assumes Neo4j can read these CSV files from its import directory and that APOC is available for dynamic relationship creation.",
            "",
            "This export is operational infrastructure, not instructional approval. Human review is still required for learner-impacting claims and artifacts.",
            "",
        ]
    )
    OUTPUT_README.write_text("\n".join(lines), encoding="utf-8")


def normalize_rows(rows: list[dict], fieldnames: list[str]) -> list[dict]:
    normalized_rows: list[dict] = []
    for row in rows:
        normalized = {}
        for field in fieldnames:
            value = row.get(field, "")
            if isinstance(value, list):
                normalized[field] = ";".join(str(item) for item in value if str(item))
            else:
                normalized[field] = value
        normalized_rows.append(normalized)
    return normalized_rows


def build_summary(nodes: list[dict], relationships: list[dict], artifact_registries: list[dict]) -> dict:
    entity_type_counts: dict[str, int] = {}
    relationship_type_counts: dict[str, int] = {}

    for node in nodes:
        entity_type = node["entity_type"]
        entity_type_counts[entity_type] = entity_type_counts.get(entity_type, 0) + 1

    for relationship in relationships:
        rel_type = relationship[":TYPE"]
        relationship_type_counts[rel_type] = relationship_type_counts.get(rel_type, 0) + 1

    return {
        "id": "mathematics-operational-graph-export",
        "domain": "mathematics",
        "generated_on": date.today().isoformat(),
        "source_files": [
            str(MASTER_GRAPH_PATH.relative_to(REPO_ROOT)),
            str(STANDARDS_GRAPH_PATH.relative_to(REPO_ROOT)),
            str(ASSESSMENT_OVERLAY_PATH.relative_to(REPO_ROOT)),
            *[registry["_source_path"] for registry in artifact_registries],
            str(RUNTIME_SLICE_PATH.relative_to(REPO_ROOT)),
        ],
        "node_count": len(nodes),
        "relationship_count": len(relationships),
        "entity_type_counts": entity_type_counts,
        "relationship_type_counts": relationship_type_counts,
    }


def main() -> None:
    ensure_dir()

    master_graph = load_yaml(MASTER_GRAPH_PATH)
    standards_graph = load_json(STANDARDS_GRAPH_PATH)
    assessment_overlays = load_json(ASSESSMENT_OVERLAY_PATH) if ASSESSMENT_OVERLAY_PATH.exists() else {"overlays": []}
    artifact_registries = load_artifact_registries()
    runtime_slice = load_yaml(RUNTIME_SLICE_PATH)

    capability_nodes, capability_relationships, capability_index = build_capability_index(master_graph)
    capability_alignment_context = build_capability_alignment_context(standards_graph, capability_index)
    standards_nodes, standards_relationships = build_standards_layer(standards_graph, capability_index)
    assessment_nodes, assessment_relationships = build_assessment_overlay_layer(
        assessment_overlays,
        capability_index,
        capability_alignment_context,
    )
    known_assessment_entity_ids = {node["id:ID(Entity)"] for node in assessment_nodes}
    artifact_nodes, artifact_relationships = build_artifact_layer(
        artifact_registries,
        capability_index,
        known_assessment_entity_ids,
    )
    runtime_registry = next(
        registry
        for registry in artifact_registries
        if registry["registry_id"] == "mathematics-fraction-spine-attachments"
    )
    runtime_nodes, runtime_relationships = build_runtime_layer(runtime_slice, capability_index, runtime_registry)

    all_nodes = capability_nodes + standards_nodes + assessment_nodes + artifact_nodes + runtime_nodes
    all_relationships = (
        capability_relationships
        + standards_relationships
        + assessment_relationships
        + artifact_relationships
        + runtime_relationships
    )

    summary = build_summary(all_nodes, all_relationships, artifact_registries)

    write_csv(OUTPUT_NODES, normalize_rows(all_nodes, NODE_FIELDNAMES), NODE_FIELDNAMES)
    write_csv(OUTPUT_RELATIONSHIPS, normalize_rows(all_relationships, REL_FIELDNAMES), REL_FIELDNAMES)
    OUTPUT_SUMMARY.write_text(json.dumps(summary, indent=2), encoding="utf-8")
    write_import_cypher()
    write_readme(summary)

    print(OUTPUT_NODES.relative_to(REPO_ROOT))
    print(OUTPUT_RELATIONSHIPS.relative_to(REPO_ROOT))
    print(OUTPUT_SUMMARY.relative_to(REPO_ROOT))
    print(OUTPUT_CYPHER.relative_to(REPO_ROOT))
    print(OUTPUT_README.relative_to(REPO_ROOT))


if __name__ == "__main__":
    main()
