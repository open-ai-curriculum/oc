#!/usr/bin/env python3

from __future__ import annotations

import json
import re
from collections import OrderedDict
from datetime import date
from pathlib import Path

import yaml


REPO_ROOT = Path(__file__).resolve().parent.parent
GRAPH_PATH = REPO_ROOT / "domains" / "mathematics" / "master-knowledge-graph.yaml"
STANDARDS_MAP_PATH = REPO_ROOT / "docs" / "standards" / "mathematics-node-standards-map.json"
OUTPUT_YAML = REPO_ROOT / "domains" / "mathematics" / "standards-augmented-graph.yaml"
OUTPUT_JSON = REPO_ROOT / "domains" / "mathematics" / "standards-augmented-graph.json"
OUTPUT_MD = REPO_ROOT / "domains" / "mathematics" / "standards-augmented-graph.md"


def slugify(value: str) -> str:
    value = value.lower().strip()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")


def load_yaml(path: Path) -> dict:
    return yaml.safe_load(path.read_text())


def load_json(path: Path) -> dict:
    return json.loads(path.read_text())


def build_augmented_graph() -> dict:
    graph = load_yaml(GRAPH_PATH)
    standards_map = load_json(STANDARDS_MAP_PATH)

    capability_nodes = []
    edges = []
    grade_bands: OrderedDict[str, dict] = OrderedDict()
    content_domains: OrderedDict[str, dict] = OrderedDict()
    performance_levels: OrderedDict[str, dict] = OrderedDict()
    ccss_anchors: OrderedDict[str, dict] = OrderedDict()
    state_profiles: OrderedDict[str, dict] = OrderedDict()

    family_lookup = {}
    dependency_lookup = {}
    for family in graph.get("families", []):
        for node in family.get("nodes", []):
            family_lookup[node["id"]] = {
                "family_id": family["id"],
                "family_name": family["name"],
                "implementation_state": node.get("implementation_state", ""),
            }
            dependency_lookup[node["id"]] = list(node.get("depends_on", []))

    for profile in standards_map.get("state_profiles", []):
        profile_id = profile["profile_id"]
        state_profiles[profile_id] = {
            "id": profile_id,
            "label": profile["title"],
            "type": "state_profile",
            "relationship_type": profile["relationship_type"],
            "document_path": profile["document_path"],
        }

    for node in standards_map.get("nodes", []):
        node_id = node["node_id"]
        family_meta = family_lookup[node_id]

        capability_nodes.append(
            {
                "id": node_id,
                "label": node["node_name"],
                "type": "capability_node",
                "family_id": family_meta["family_id"],
                "family_name": family_meta["family_name"],
                "implementation_state": family_meta["implementation_state"],
                "dependencies": node["graph_dependencies"],
            }
        )

        for dependency_id in node["graph_dependencies"]:
            edges.append(
                {
                    "source": node_id,
                    "target": dependency_id,
                    "type": "DEPENDS_ON",
                }
            )

        content = node["content_baseline"]
        perf = node["performance_baseline"]
        ccss = node["ccss_mathematics"]

        grade_band_label = content["primary_grade_band"]
        grade_band_id = f"grade-band:{slugify(grade_band_label)}"
        if grade_band_id not in grade_bands:
            grade_bands[grade_band_id] = {
                "id": grade_band_id,
                "label": grade_band_label,
                "type": "grade_band",
            }
        edges.append(
            {
                "source": node_id,
                "target": grade_band_id,
                "type": "ALIGNS_TO_GRADE_BAND",
                "mapping_status": content["mapping_status"],
            }
        )

        content_domain_label = content["primary_content_domain"]
        content_domain_id = f"content-domain:{slugify(content_domain_label)}"
        if content_domain_id not in content_domains:
            content_domains[content_domain_id] = {
                "id": content_domain_id,
                "label": content_domain_label,
                "type": "content_domain",
            }
        edges.append(
            {
                "source": node_id,
                "target": content_domain_id,
                "type": "ALIGNS_TO_CONTENT_DOMAIN",
                "mapping_status": content["mapping_status"],
                "cluster_or_grouping": content["cluster_or_grouping"],
            }
        )

        performance_label = perf["minimum_expected_performance_level"]
        performance_id = f"performance-level:{slugify(performance_label)}"
        if performance_id not in performance_levels:
            performance_levels[performance_id] = {
                "id": performance_id,
                "label": performance_label,
                "type": "performance_level",
            }
        edges.append(
            {
                "source": node_id,
                "target": performance_id,
                "type": "ALIGNS_TO_PERFORMANCE_LEVEL",
                "mapping_status": perf["mapping_status"],
                "stretch_level": perf["stretch_performance_level"],
            }
        )

        ccss_anchor_label = ccss["anchor_statement"]
        ccss_anchor_id = f"ccss-anchor:{slugify(ccss['grade_band_or_category'])}:{slugify(ccss_anchor_label)}"
        if ccss_anchor_id not in ccss_anchors:
            ccss_anchors[ccss_anchor_id] = {
                "id": ccss_anchor_id,
                "label": ccss_anchor_label,
                "type": "ccss_anchor",
                "grade_band_or_category": ccss["grade_band_or_category"],
                "domain": ccss["domain"],
                "cluster_or_grouping": ccss["cluster_or_grouping"],
                "official_identifier": ccss["official_identifier"],
            }
        edges.append(
            {
                "source": node_id,
                "target": ccss_anchor_id,
                "type": "ALIGNS_TO_CCSS_ANCHOR",
                "mapping_status": ccss["mapping_status"],
                "review_status": ccss["review_status"],
            }
        )

        for profile_id, state_mapping in node["state_profiles"].items():
            edges.append(
                {
                    "source": node_id,
                    "target": profile_id,
                    "type": "ALIGNS_TO_STATE_PROFILE",
                    "mapping_status": state_mapping["mapping_status"],
                    "relationship_type": state_mapping["relationship_type"],
                }
            )

    return {
        "meta": {
            "id": "mathematics-standards-augmented-graph",
            "domain": "mathematics",
            "generated_on": date.today().isoformat(),
            "source_graph": str(GRAPH_PATH.relative_to(REPO_ROOT)),
            "source_standards_map": str(STANDARDS_MAP_PATH.relative_to(REPO_ROOT)),
            "capability_node_count": len(capability_nodes),
            "grade_band_count": len(grade_bands),
            "content_domain_count": len(content_domains),
            "performance_level_count": len(performance_levels),
            "ccss_anchor_count": len(ccss_anchors),
            "state_profile_count": len(state_profiles),
            "edge_count": len(edges),
        },
        "entities": {
            "capability_nodes": capability_nodes,
            "grade_bands": list(grade_bands.values()),
            "content_domains": list(content_domains.values()),
            "performance_levels": list(performance_levels.values()),
            "ccss_anchors": list(ccss_anchors.values()),
            "state_profiles": list(state_profiles.values()),
        },
        "edges": edges,
    }


def write_markdown(augmented_graph: dict) -> None:
    meta = augmented_graph["meta"]
    lines = [
        "# Standards-Augmented Mathematics Graph",
        "",
        "## Purpose",
        "",
        "This artifact joins the canonical mathematics capability graph to grade-band and standards entities so standards alignment can participate in graph-native traversal, reporting, and mastery heat-map generation.",
        "",
        "## Sources",
        "",
        f"- `{meta['source_graph']}`",
        f"- `{meta['source_standards_map']}`",
        "",
        "## Entity Counts",
        "",
        f"- capability nodes: `{meta['capability_node_count']}`",
        f"- grade bands: `{meta['grade_band_count']}`",
        f"- content domains: `{meta['content_domain_count']}`",
        f"- performance levels: `{meta['performance_level_count']}`",
        f"- CCSS anchors: `{meta['ccss_anchor_count']}`",
        f"- state profiles: `{meta['state_profile_count']}`",
        f"- total edges: `{meta['edge_count']}`",
        "",
        "## Edge Types",
        "",
        "- `DEPENDS_ON`",
        "- `ALIGNS_TO_GRADE_BAND`",
        "- `ALIGNS_TO_CONTENT_DOMAIN`",
        "- `ALIGNS_TO_PERFORMANCE_LEVEL`",
        "- `ALIGNS_TO_CCSS_ANCHOR`",
        "- `ALIGNS_TO_STATE_PROFILE`",
        "",
        "## Claim Boundary",
        "",
        "This is a generated operational graph artifact. The canonical capability topology remains the mathematics master knowledge graph. The standards-augmented graph exists to support traversal, reporting, and mastery/coverage analysis that require standards entities to be graph-native.",
        "",
    ]
    OUTPUT_MD.write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    augmented_graph = build_augmented_graph()
    OUTPUT_YAML.write_text(yaml.safe_dump(augmented_graph, sort_keys=False), encoding="utf-8")
    OUTPUT_JSON.write_text(json.dumps(augmented_graph, indent=2), encoding="utf-8")
    write_markdown(augmented_graph)
    print(OUTPUT_YAML.relative_to(REPO_ROOT))
    print(OUTPUT_JSON.relative_to(REPO_ROOT))
    print(OUTPUT_MD.relative_to(REPO_ROOT))


if __name__ == "__main__":
    main()
