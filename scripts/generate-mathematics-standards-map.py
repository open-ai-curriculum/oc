#!/usr/bin/env python3

from __future__ import annotations

import json
import re
from collections import Counter
from pathlib import Path

import yaml


REPO_ROOT = Path("/Volumes/data/development/oc")
GRAPH_PATH = REPO_ROOT / "domains/mathematics/master-knowledge-graph.yaml"
STANDARDS_ROOT = REPO_ROOT / "docs/standards"
STATE_STANDARDS_ROOT = STANDARDS_ROOT / "states"
OUTPUT_JSON = STANDARDS_ROOT / "mathematics-node-standards-map.json"
OUTPUT_MD = STANDARDS_ROOT / "mathematics-node-standards-map.md"
TODAY = "2026-04-14"


def humanize_slug(text: str) -> str:
    return text.replace("_", " ").replace("-", " ").strip()


def titleize(text: str) -> str:
    return " ".join(word.capitalize() for word in humanize_slug(text).split())


def prefix_for_node(node_id: str) -> str:
    match = re.match(r"([A-Z]+)", node_id)
    if not match:
      raise ValueError(f"Could not determine prefix for node id {node_id}")
    return match.group(1)


FAMILY_RULES = {
    "Z": {
        "primary_grade_band": "Pre-K",
        "primary_content_domain": "pre-standard mathematical readiness",
        "cluster_or_grouping": "pre-kindergarten quantitative and structural readiness",
        "anchor_statement": "pre-kindergarten readiness prior to kindergarten mathematics standards",
        "ccss_mapping_status": "out_of_scope_current_ccss_baseline",
        "coverage_note": "Repository zero-state readiness sits before the current kindergarten-through-high-school standards baseline.",
    },
    "C": {
        "primary_grade_band": "Kindergarten",
        "primary_content_domain": "counting and cardinality",
        "cluster_or_grouping": "counting sequence, cardinality, and comparison",
        "anchor_statement": "counting sequence, cardinality, numeral linkage, and quantity comparison",
        "ccss_mapping_status": "mapped",
        "coverage_note": "Direct kindergarten counting-and-cardinality alignment surface.",
    },
    "N": {
        "primary_grade_band": "Kindergarten to Grade 1",
        "primary_content_domain": "operations and algebraic thinking",
        "cluster_or_grouping": "whole-number composition and early addition/subtraction meaning",
        "anchor_statement": "compose and decompose numbers and reason about addition and subtraction",
        "ccss_mapping_status": "mapped",
        "coverage_note": "Direct early-operations alignment surface; later nodes also support base-ten readiness.",
    },
    "V": {
        "primary_grade_band": "Grades 1-3",
        "primary_content_domain": "number and operations in base ten",
        "cluster_or_grouping": "place value and multidigit whole-number reasoning",
        "anchor_statement": "understand place value and use it to structure multidigit comparison and operations",
        "ccss_mapping_status": "mapped",
        "coverage_note": "Direct base-ten alignment surface.",
    },
    "X": {
        "primary_grade_band": "Grades 4-5",
        "primary_content_domain": "number and operations in base ten / number and operations with fractions",
        "cluster_or_grouping": "decimal place value and fraction-decimal connections",
        "anchor_statement": "extend place-value reasoning to decimals and connect decimals to fraction benchmarks",
        "ccss_mapping_status": "mapped",
        "coverage_note": "Upper-elementary decimal and fraction-decimal connection surface.",
    },
    "U": {
        "primary_grade_band": "Kindergarten to Grade 3",
        "primary_content_domain": "operations and algebraic thinking / number and operations with fractions",
        "cluster_or_grouping": "equal groups, equal shares, and partitioning readiness",
        "anchor_statement": "reason about equal groups, equal shares, and partitioning as foundations for multiplication, division, and fractions",
        "ccss_mapping_status": "mapped",
        "coverage_note": "Mixed direct and readiness alignment surface across early operations and fractions.",
    },
    "T": {
        "primary_grade_band": "Grades 3-5",
        "primary_content_domain": "operations and algebraic thinking / number and operations in base ten",
        "cluster_or_grouping": "multiplicative reasoning and multidigit operation structure",
        "anchor_statement": "use multiplicative structure for facts, comparison, multidigit multiplication, and division",
        "ccss_mapping_status": "mapped",
        "coverage_note": "Direct upper-elementary multiplicative reasoning surface.",
    },
    "M": {
        "primary_grade_band": "Kindergarten to Grade 5",
        "primary_content_domain": "measurement and data",
        "cluster_or_grouping": "measurement attributes, units, comparison, and conversion",
        "anchor_statement": "reason about measurable attributes, units, comparison, representation, and conversion",
        "ccss_mapping_status": "mapped",
        "coverage_note": "Direct measurement-and-data surface across elementary mathematics.",
    },
    "G": {
        "primary_grade_band": "Kindergarten to Grade 5",
        "primary_content_domain": "geometry",
        "cluster_or_grouping": "shape, spatial reasoning, symmetry, and angle foundations",
        "anchor_statement": "recognize, compose, classify, and reason about geometric figures and spatial structure",
        "ccss_mapping_status": "mapped",
        "coverage_note": "Direct elementary-geometry surface; later nodes approach upper-elementary geometry foundations.",
    },
    "D": {
        "primary_grade_band": "Kindergarten to Grade 5",
        "primary_content_domain": "measurement and data",
        "cluster_or_grouping": "data representation and interpretation",
        "anchor_statement": "sort, represent, and interpret simple data sets and graphs",
        "ccss_mapping_status": "mapped",
        "coverage_note": "Direct elementary data-representation surface.",
    },
    "P": {
        "primary_grade_band": "Kindergarten to Grade 2",
        "primary_content_domain": "operations and algebraic thinking",
        "cluster_or_grouping": "pattern, rule, and structure readiness",
        "anchor_statement": "notice repeated and growing structure as readiness for algebraic thinking",
        "ccss_mapping_status": "partial_readiness_alignment",
        "coverage_note": "Pattern nodes are repository readiness structures that support later OA-style reasoning without claiming one-to-one official standard equivalence.",
    },
    "R": {
        "primary_grade_band": "Grades 2-3",
        "primary_content_domain": "number and operations with fractions",
        "cluster_or_grouping": "equal parts and unit-fraction readiness",
        "anchor_statement": "establish equal-part and unit-fraction meaning before formal fraction notation",
        "ccss_mapping_status": "partial_readiness_alignment",
        "coverage_note": "Readiness layer immediately preceding direct fraction-standards work.",
    },
    "F": {
        "primary_grade_band": "Grades 3-5",
        "primary_content_domain": "number and operations with fractions",
        "cluster_or_grouping": "fraction structure, equivalence, comparison, and operations",
        "anchor_statement": "reason about fraction quantity, equivalence, comparison, and operations",
        "ccss_mapping_status": "mapped",
        "coverage_note": "Direct fraction content-standards surface.",
    },
    "L": {
        "primary_grade_band": "Grades 1-5",
        "primary_content_domain": "number representation and magnitude on the number line",
        "cluster_or_grouping": "linear magnitude representation",
        "anchor_statement": "represent quantities and intervals on a linear number line",
        "ccss_mapping_status": "mapped",
        "coverage_note": "Cross-domain representation surface spanning whole-number and fraction magnitude.",
    },
    "Y": {
        "primary_grade_band": "Grades 3-5",
        "primary_content_domain": "reasonableness and estimation",
        "cluster_or_grouping": "benchmark and estimation reasoning",
        "anchor_statement": "use benchmarks and estimation to judge numerical and measurement reasonableness",
        "ccss_mapping_status": "mapped",
        "coverage_note": "Repository estimation surface spanning multiple elementary mathematics domains.",
    },
    "Q": {
        "primary_grade_band": "Grades 6-7",
        "primary_content_domain": "ratios and proportional relationships",
        "cluster_or_grouping": "ratio, unit rate, proportionality, and percent",
        "anchor_statement": "reason with ratios, unit rates, proportional relationships, and percent",
        "ccss_mapping_status": "mapped",
        "coverage_note": "Direct middle-grades ratio and proportional reasoning surface.",
    },
    "S": {
        "primary_grade_band": "Grades 6-7",
        "primary_content_domain": "the number system",
        "cluster_or_grouping": "signed number meaning and operations",
        "anchor_statement": "reason about signed-number magnitude, order, and operations",
        "ccss_mapping_status": "mapped",
        "coverage_note": "Direct middle-grades number-system surface.",
    },
    "E": {
        "primary_grade_band": "Grades 6-8",
        "primary_content_domain": "expressions and equations",
        "cluster_or_grouping": "equation solving and algebraic structure",
        "anchor_statement": "solve and interpret equations using structural equality and inverse reasoning",
        "ccss_mapping_status": "mapped",
        "coverage_note": "Direct middle-grades equations surface.",
    },
    "A": {
        "primary_grade_band": "Grades 6-8",
        "primary_content_domain": "expressions and equations / functions / geometry",
        "cluster_or_grouping": "expressions, inequalities, coordinates, and early linear relationships",
        "anchor_statement": "use variables, equations, inequalities, and coordinate reasoning to describe relationships",
        "ccss_mapping_status": "mapped",
        "coverage_note": "Bridge from middle-grades algebraic structure into functions and coordinate reasoning.",
    },
    "J": {
        "primary_grade_band": "Grades 6-7",
        "primary_content_domain": "the number system / ratios and proportional relationships",
        "cluster_or_grouping": "rational number operations and proportional application",
        "anchor_statement": "operate with rational numbers and apply proportional reasoning in context",
        "ccss_mapping_status": "mapped",
        "coverage_note": "Direct middle-grades rational-number and application surface.",
    },
    "K": {
        "primary_grade_band": "Grade 8 to High School",
        "primary_content_domain": "functions / algebra",
        "cluster_or_grouping": "function structure, linear relationships, systems, and quadratic foundations",
        "anchor_statement": "reason about functions, rate of change, multiple representations, systems, and early quadratic structure",
        "ccss_mapping_status": "mapped",
        "coverage_note": "Crosses from Grade 8 functions into high-school algebra/functions territory.",
    },
    "H": {
        "primary_grade_band": "Grade 8 to High School",
        "primary_content_domain": "geometry",
        "cluster_or_grouping": "transformations, proof, similarity, trigonometric foundations, and coordinate geometry",
        "anchor_statement": "reason about geometric structure, transformations, proof, similarity, and trigonometric relationships",
        "ccss_mapping_status": "mapped",
        "coverage_note": "Direct secondary geometry surface.",
    },
    "W": {
        "primary_grade_band": "Grades 6-12",
        "primary_content_domain": "statistics and probability",
        "cluster_or_grouping": "distributions, association, inference, design, and probability",
        "anchor_statement": "analyze data, reason about variability, and make probabilistic or inferential claims",
        "ccss_mapping_status": "mapped",
        "coverage_note": "Crosses from middle-grades statistics and probability into high-school statistics.",
    },
    "B": {
        "primary_grade_band": "High School",
        "primary_content_domain": "algebra / functions / number and quantity",
        "cluster_or_grouping": "advanced algebraic and precalculus structure",
        "anchor_statement": "reason about advanced algebraic structure, function families, and precalculus behavior",
        "ccss_mapping_status": "mapped",
        "coverage_note": "High-school advanced algebra and function-family surface.",
    },
    "AP": {
        "primary_grade_band": "Advanced Placement / Post-CCSS extension",
        "primary_content_domain": "advanced coursework beyond the current codified K-12 standards corpus",
        "cluster_or_grouping": "advanced placement statistics, precalculus, and calculus extensions",
        "anchor_statement": "advanced coursework nodes extend beyond the currently codified CCSS/state standards baseline",
        "ccss_mapping_status": "out_of_scope_current_ccss_baseline",
        "coverage_note": "Current repository standards corpus does not yet codify College Board AP standards, so these nodes remain explicitly out of scope for direct content-standard alignment.",
    },
}


NODE_OVERRIDES = {
    "C1": {
        "cluster_or_grouping": "know number names and the count sequence",
        "anchor_statement": "count sequence fluency and stable verbal counting",
    },
    "C2": {
        "cluster_or_grouping": "count to tell the number of objects",
        "anchor_statement": "one-to-one correspondence while counting objects",
    },
    "C3": {
        "cluster_or_grouping": "count to tell the number of objects",
        "anchor_statement": "cardinality and the final-count principle",
    },
    "C4": {
        "cluster_or_grouping": "compare numbers and quantities",
        "anchor_statement": "compare small quantities and determine more, less, or equal",
    },
    "C5": {
        "cluster_or_grouping": "connect numerals and quantities",
        "anchor_statement": "numeral recognition and writing readiness supporting numeral-quantity alignment",
        "ccss_mapping_status": "partial_readiness_alignment",
    },
    "C6": {
        "cluster_or_grouping": "connect numerals and quantities",
        "anchor_statement": "match symbols to counted quantities and quantity names",
    },
    "L1": {
        "primary_grade_band": "Grades 1-2",
        "primary_content_domain": "operations and algebraic thinking / number representation",
        "cluster_or_grouping": "ordered positions and magnitude representation",
        "anchor_statement": "use linear position to represent ordered whole-number magnitude",
    },
    "L2": {
        "primary_grade_band": "Grades 1-3",
        "primary_content_domain": "number and operations in base ten / number representation",
        "cluster_or_grouping": "whole-number intervals and jumps",
        "anchor_statement": "represent equal intervals and additive jumps on a number line",
    },
    "L3": {
        "primary_grade_band": "Grades 2-4",
        "primary_content_domain": "number and operations in base ten",
        "cluster_or_grouping": "multidigit magnitude representation",
        "anchor_statement": "locate and compare multidigit numbers on a number line",
    },
    "L4": {
        "primary_grade_band": "Grades 3-5",
        "primary_content_domain": "number and operations with fractions",
        "cluster_or_grouping": "fraction number-line representation",
        "anchor_statement": "represent fraction magnitude on the number line, including beyond one whole",
    },
    "Y1": {
        "primary_content_domain": "number and operations in base ten",
        "cluster_or_grouping": "rounding and benchmark reasoning",
        "anchor_statement": "use rounding and benchmark whole numbers to judge reasonableness",
    },
    "Y2": {
        "primary_content_domain": "number and operations in base ten",
        "cluster_or_grouping": "estimation for whole-number operations",
        "anchor_statement": "estimate whole-number operation results using place-value benchmarks",
    },
    "Y3": {
        "primary_content_domain": "measurement and data",
        "cluster_or_grouping": "measurement estimation and reasonableness",
        "anchor_statement": "estimate measurement outcomes and judge whether results are reasonable",
    },
    "Y4": {
        "primary_content_domain": "number and operations with fractions",
        "cluster_or_grouping": "fraction benchmark estimation",
        "anchor_statement": "use benchmark fractions to estimate and compare fraction quantities",
    },
}


def load_graph():
    return yaml.safe_load(GRAPH_PATH.read_text())


def load_state_profiles():
    profiles = []
    for path in sorted(STATE_STANDARDS_ROOT.glob("*-mathematics-standards.md")):
        text = path.read_text()
        relationship_match = re.search(r"relationship type:\s*`([^`]+)`", text)
        distinction_match = re.search(r"- notable state distinction: `([^`]+)`", text)
        profiles.append(
            {
                "profile_id": path.stem,
                "title": titleize(path.stem.replace("-mathematics-standards", "")) + " Mathematics Standards",
                "document_path": str(path.relative_to(REPO_ROOT)),
                "relationship_type": relationship_match.group(1) if relationship_match else "unclassified",
                "state_distinction_note": distinction_match.group(1) if distinction_match else "",
            }
        )
    return profiles


def base_rule(node_id: str):
    prefix = prefix_for_node(node_id)
    if prefix not in FAMILY_RULES:
        raise KeyError(f"No family rule for prefix {prefix} / node {node_id}")
    rule = dict(FAMILY_RULES[prefix])
    rule.update(NODE_OVERRIDES.get(node_id, {}))
    return rule


def build_state_mapping(node_rule: dict, profile: dict):
    if node_rule["ccss_mapping_status"] == "out_of_scope_current_ccss_baseline":
        status = "out_of_scope_current_profile"
        note = (
            "This node sits outside the currently codified K-12 mathematics standards surface, "
            "so no direct state-profile alignment is claimed."
        )
    elif profile["relationship_type"] == "baseline-aligned":
        status = "inherits_canonical_baseline_with_state_metadata"
        note = (
            "State profile is baseline-aligned. Use the canonical mathematics-content baseline mapping, "
            "but preserve explicit state distinctions during later identifier-level crosswalk work."
        )
    elif profile["relationship_type"] == "baseline-derived":
        status = "requires_state_identifier_crosswalk_from_canonical_baseline"
        note = (
            "State profile remains close enough to inherit the canonical content anchor, "
            "but identifier-level mapping and sequencing notes must be state-specific."
        )
    elif profile["relationship_type"] == "state-distinct":
        status = "conceptual_alignment_only_until_state_crosswalk_exists"
        note = (
            "The state profile is structurally distinct enough that this node currently maps only at the conceptual anchor level. "
            "A state-specific crosswalk is still required."
        )
    else:
        status = "unclassified_state_profile"
        note = "State profile relationship type is not yet classified strongly enough for a mapping posture."

    return {
        "mapping_status": status,
        "relationship_type": profile["relationship_type"],
        "alignment_note": note,
        "state_distinction_note": profile["state_distinction_note"],
    }


def build_node_record(node: dict, family: dict, state_profiles: list[dict]):
    rule = base_rule(node["id"])
    content_mapping = {
        "mapping_status": "mapped" if rule["ccss_mapping_status"] != "out_of_scope_current_ccss_baseline" else "repository_only_or_beyond_current_content_baseline",
        "primary_grade_band": rule["primary_grade_band"],
        "primary_content_domain": rule["primary_content_domain"],
        "cluster_or_grouping": rule["cluster_or_grouping"],
        "anchor_statement": rule["anchor_statement"],
        "coverage_note": rule["coverage_note"],
        "official_identifier": None,
        "review_status": "draft",
    }

    performance_mapping = {
        "mapping_status": "mapped",
        "minimum_expected_performance_level": "Proficient",
        "stretch_performance_level": "Advanced",
        "evidence_rule": (
            "A stable proficiency claim must respect the node's direct performance, meaning, transfer, and retention requirements, "
            "and must not hide dependency instability or dominant failure modes."
        ),
        "review_status": "draft",
    }

    ccss_mapping = {
        "mapping_status": rule["ccss_mapping_status"],
        "grade_band_or_category": rule["primary_grade_band"],
        "domain": rule["primary_content_domain"],
        "cluster_or_grouping": rule["cluster_or_grouping"],
        "anchor_statement": rule["anchor_statement"],
        "official_identifier": None,
        "coverage_note": rule["coverage_note"],
        "review_status": "draft",
    }

    state_mappings = {}
    for profile in state_profiles:
        state_mappings[profile["profile_id"]] = build_state_mapping(rule, profile)

    return {
        "node_id": node["id"],
        "node_name": node["name"],
        "family_id": family["id"],
        "family_name": family["name"],
        "graph_dependencies": node["depends_on"],
        "content_baseline": content_mapping,
        "performance_baseline": performance_mapping,
        "ccss_mathematics": ccss_mapping,
        "state_profiles": state_mappings,
    }


def generate_records():
    graph = load_graph()
    state_profiles = load_state_profiles()
    records = []
    for family in graph["families"]:
        for node in family["nodes"]:
            records.append(build_node_record(node, family, state_profiles))
    return records, state_profiles


def build_markdown(records: list[dict], state_profiles: list[dict]) -> str:
    total = len(records)
    ccss_counter = Counter(record["ccss_mathematics"]["mapping_status"] for record in records)
    state_counter = Counter()
    for record in records:
        for state_record in record["state_profiles"].values():
            state_counter[state_record["mapping_status"]] += 1

    lines = [
        "---",
        "id: mathematics-node-standards-map",
        "type: standard",
        "domain: mathematics-standards",
        "status: draft",
        'version: "0.1"',
        "dependencies: [mathematics-content-standards-baseline, mathematics-performance-standards-baseline, ccss-mathematics, state-standards-index]",
        "tags: [standards, mathematics, mapping, node-alignment]",
        f'last_updated: "{TODAY}"',
        "related: [standards-index, mathematics-content-standards-baseline, mathematics-performance-standards-baseline, ccss-index, state-standards-index]",
        "standard_family: mathematics-node-standards-map",
        "standard_subject: mathematics",
        f"standards_version: mathematics-node-standards-map-{TODAY}",
        "standards_track: current",
        f'standards_effective_as_of: "{TODAY}"',
        "supersedes_standards_version: []",
        "---",
        "",
        "# Mathematics Node Standards Map",
        "",
        "## Purpose",
        "",
        "This document records the current node-to-standards mapping surface for the mathematics domain.",
        "",
        "It maps every mathematics node to the mathematics standards artifacts already codified in `docs/standards/`. The current mapping is standards-family aware and claim-boundary constrained:",
        "",
        "- repository mathematics content baseline",
        "- repository mathematics performance baseline",
        "- Common Core State Standards for Mathematics family artifact",
        "- every codified state mathematics standards profile under `docs/standards/states/`",
        "",
        "The map does not yet claim official identifier-level equivalence for every node. Where the current standards corpus only supports conceptual or baseline-level alignment, that limitation is recorded explicitly.",
        "",
        "## Current Coverage",
        "",
        f"- total mapped mathematics nodes: `{total}`",
        f"- CCSS direct or partial mapping nodes: `{total - ccss_counter['out_of_scope_current_ccss_baseline']}`",
        f"- CCSS out-of-scope nodes: `{ccss_counter['out_of_scope_current_ccss_baseline']}`",
        f"- state profiles included per node: `{len(state_profiles)}`",
        "",
        "### CCSS Mapping Status Counts",
        "",
    ]

    for status, count in sorted(ccss_counter.items()):
        lines.append(f"- `{status}`: `{count}`")

    lines.extend(
        [
            "",
            "### State Profile Mapping Status Counts",
            "",
        ]
    )
    for status, count in sorted(state_counter.items()):
        lines.append(f"- `{status}`: `{count}`")

    lines.extend(
        [
            "",
            "## Mapping Method",
            "",
            "Each node record currently contains:",
            "",
            "- canonical content-baseline alignment",
            "- canonical performance-baseline expectation",
            "- CCSS mathematics mapping posture",
            "- state-profile mapping posture for each codified state mathematics standards profile",
            "",
            "The current map is intentionally conservative:",
            "",
            "- official identifiers remain `null` until the standards corpus supports reviewed identifier-level mapping",
            "- AP nodes are marked out of scope for the current K-12 standards corpus",
            "- baseline-derived and state-distinct profiles preserve the need for future state-specific crosswalk work",
            "",
            "## Full Machine-Readable Map",
            "",
            f"- [mathematics-node-standards-map.json]({OUTPUT_JSON.name})",
            "",
            "## Canonical Node Summary",
            "",
            "| Node | Grade band | Primary content domain | CCSS status | Canonical anchor |",
            "| --- | --- | --- | --- | --- |",
        ]
    )

    for record in records:
        lines.append(
            "| "
            + f"`{record['node_id']}` "
            + f"| {record['content_baseline']['primary_grade_band']} "
            + f"| {record['content_baseline']['primary_content_domain']} "
            + f"| `{record['ccss_mathematics']['mapping_status']}` "
            + f"| {record['content_baseline']['anchor_statement']} |"
        )

    lines.extend(
        [
            "",
            "## Claim Boundary",
            "",
            "This map records repository alignment posture. It does not certify legal compliance, psychometric validity, classroom sufficiency, or reviewed code-level equivalence to every public standards publication.",
        ]
    )

    return "\n".join(lines) + "\n"


def main():
    records, state_profiles = generate_records()
    payload = {
        "meta": {
            "generated_on": TODAY,
            "node_count": len(records),
            "state_profile_count": len(state_profiles),
            "content_baseline_document": "docs/standards/mathematics-content-standards-baseline.md",
            "performance_baseline_document": "docs/standards/mathematics-performance-standards-baseline.md",
            "ccss_document": "docs/standards/ccss/common-core-state-standards-mathematics.md",
        },
        "state_profiles": state_profiles,
        "nodes": records,
    }

    OUTPUT_JSON.write_text(json.dumps(payload, indent=2) + "\n")
    OUTPUT_MD.write_text(build_markdown(records, state_profiles))
    print(f"Generated {OUTPUT_JSON}")
    print(f"Generated {OUTPUT_MD}")


if __name__ == "__main__":
    main()
