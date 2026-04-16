#!/usr/bin/env python3

from __future__ import annotations

import importlib.util
import json
import re
from collections import Counter
from pathlib import Path


REPO_ROOT = Path("/Volumes/data/development/oc")
STANDARDS_ROOT = REPO_ROOT / "docs/standards"
MAP_GENERATOR_PATH = REPO_ROOT / "scripts/generate-mathematics-standards-map.py"
OUTPUT_JSON = STANDARDS_ROOT / "mathematics-standards-inventory.json"
OUTPUT_MD = STANDARDS_ROOT / "mathematics-standards-inventory.md"
TODAY = "2026-04-15"


def load_map_module():
    spec = importlib.util.spec_from_file_location("math_standards_map_generator", MAP_GENERATOR_PATH)
    module = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    spec.loader.exec_module(module)
    return module


def slugify(text: str) -> str:
    text = text.lower().strip()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return re.sub(r"-+", "-", text).strip("-")


def coverage_expectation(ccss_mapping_status: str) -> str:
    if ccss_mapping_status == "mapped":
        return "direct"
    if ccss_mapping_status == "partial_readiness_alignment":
        return "readiness"
    return "out_of_scope"


def inventory_scope_status(ccss_mapping_status: str) -> str:
    if ccss_mapping_status == "mapped":
        return "in_scope"
    if ccss_mapping_status == "partial_readiness_alignment":
        return "in_scope_readiness_only"
    return "out_of_scope"


def build_inventory_records():
    map_module = load_map_module()
    graph = map_module.load_graph()
    grouped = {}

    for family in graph["families"]:
        for node in family["nodes"]:
            rule = map_module.base_rule(node["id"])
            key = (
                rule["primary_grade_band"],
                rule["primary_content_domain"],
                rule["cluster_or_grouping"],
                rule["anchor_statement"],
                rule["ccss_mapping_status"],
            )
            if key not in grouped:
                grouped[key] = {
                    "standard_id": "math-anchor-"
                    + slugify(
                        "::".join(
                            [
                                rule["primary_grade_band"],
                                rule["primary_content_domain"],
                                rule["cluster_or_grouping"],
                                rule["anchor_statement"],
                            ]
                        )
                    ),
                    "grade_band_or_category": rule["primary_grade_band"],
                    "domain": rule["primary_content_domain"],
                    "cluster_or_grouping": rule["cluster_or_grouping"],
                    "anchor_statement": rule["anchor_statement"],
                    "official_identifier": None,
                    "inventory_scope_status": inventory_scope_status(rule["ccss_mapping_status"]),
                    "coverage_expectation": coverage_expectation(rule["ccss_mapping_status"]),
                    "content_baseline_mapping_status": (
                        "mapped"
                        if rule["ccss_mapping_status"] != "out_of_scope_current_ccss_baseline"
                        else "repository_only_or_beyond_current_content_baseline"
                    ),
                    "ccss_mapping_status": rule["ccss_mapping_status"],
                    "coverage_note": rule["coverage_note"],
                    "family_ids": [],
                    "family_names": [],
                    "node_ids": [],
                    "node_names": [],
                    "source_documents": [
                        "docs/standards/mathematics-content-standards-baseline.md",
                        "docs/standards/ccss/common-core-state-standards-mathematics.md",
                    ],
                    "review_status": "draft",
                }

            record = grouped[key]
            if family["id"] not in record["family_ids"]:
                record["family_ids"].append(family["id"])
            if family["name"] not in record["family_names"]:
                record["family_names"].append(family["name"])
            record["node_ids"].append(node["id"])
            record["node_names"].append(node["name"])

    records = []
    for record in grouped.values():
        record["node_ids"].sort()
        record["node_names"].sort()
        record["family_ids"].sort()
        record["family_names"].sort()
        record["node_count"] = len(record["node_ids"])
        records.append(record)

    records.sort(
        key=lambda record: (
            record["grade_band_or_category"],
            record["domain"],
            record["cluster_or_grouping"],
            record["anchor_statement"],
        )
    )
    return records


def build_markdown(records: list[dict]) -> str:
    scope_counter = Counter(record["inventory_scope_status"] for record in records)
    expectation_counter = Counter(record["coverage_expectation"] for record in records)

    lines = [
        "---",
        "id: mathematics-standards-inventory",
        "type: standard",
        "domain: mathematics-standards",
        "status: draft",
        'version: "0.1"',
        "dependencies: [mathematics-content-standards-baseline, ccss-mathematics, mathematics-node-standards-map]",
        "tags: [standards, mathematics, inventory, coverage]",
        f'last_updated: "{TODAY}"',
        "related: [standards-index, mathematics-content-standards-baseline, mathematics-node-standards-map, ccss-index]",
        "standard_family: mathematics-standards-inventory",
        "standard_subject: mathematics",
        f"standards_version: mathematics-standards-inventory-{TODAY}",
        "standards_track: current",
        f'standards_effective_as_of: "{TODAY}"',
        "supersedes_standards_version: []",
        "---",
        "",
        "# Mathematics Standards Inventory",
        "",
        "## Purpose",
        "",
        "This document codifies the current anchor-level mathematics standards inventory that the repository can validate against the mathematics knowledge graph.",
        "",
        "The inventory is intentionally conservative:",
        "",
        "- it operates at the repository anchor level rather than claiming full official identifier-level coverage",
        "- it preserves direct, readiness-only, and out-of-scope distinctions",
        "- it exists so standards-to-node completeness can be validated explicitly rather than inferred from node-level mappings alone",
        "",
        "## Current Inventory Summary",
        "",
        f"- total inventory records: `{len(records)}`",
        f"- direct-coverage expectations: `{expectation_counter['direct']}`",
        f"- readiness-only expectations: `{expectation_counter['readiness']}`",
        f"- out-of-scope records: `{expectation_counter['out_of_scope']}`",
        "",
        "### Inventory Scope Status Counts",
        "",
    ]

    for status, count in sorted(scope_counter.items()):
        lines.append(f"- `{status}`: `{count}`")

    lines.extend(
        [
            "",
            "## Machine-Readable Inventory",
            "",
            f"- [mathematics-standards-inventory.json]({OUTPUT_JSON.name})",
            "",
            "## Canonical Inventory",
            "",
            "| Standard id | Grade band | Domain | Coverage expectation | Node count | Anchor statement |",
            "| --- | --- | --- | --- | --- | --- |",
        ]
    )

    for record in records:
        lines.append(
            "| "
            + f"`{record['standard_id']}` "
            + f"| {record['grade_band_or_category']} "
            + f"| {record['domain']} "
            + f"| `{record['coverage_expectation']}` "
            + f"| `{record['node_count']}` "
            + f"| {record['anchor_statement']} |"
        )

    lines.extend(
        [
            "",
            "## Claim Boundary",
            "",
            "This inventory codifies the current repository mathematics standards surface at the anchor level. It does not yet claim exhaustive official-standard identifier coverage for every public mathematics standards publication or every state-specific variant.",
        ]
    )

    return "\n".join(lines) + "\n"


def main():
    records = build_inventory_records()
    payload = {
        "meta": {
            "generated_on": TODAY,
            "inventory_record_count": len(records),
            "content_baseline_document": "docs/standards/mathematics-content-standards-baseline.md",
            "ccss_document": "docs/standards/ccss/common-core-state-standards-mathematics.md",
            "node_map_document": "docs/standards/mathematics-node-standards-map.json",
            "inventory_level": "anchor",
            "claim_boundary": (
                "This inventory is anchor-level and repository-governed. "
                "Official identifier-level completeness is not yet claimed."
            ),
        },
        "standards": records,
    }

    OUTPUT_JSON.write_text(json.dumps(payload, indent=2) + "\n")
    OUTPUT_MD.write_text(build_markdown(records))
    print(f"Generated {OUTPUT_JSON}")
    print(f"Generated {OUTPUT_MD}")


if __name__ == "__main__":
    main()
