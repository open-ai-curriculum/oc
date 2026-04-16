#!/usr/bin/env python3

from __future__ import annotations

import json
from datetime import date
from pathlib import Path

import yaml


REPO_ROOT = Path(__file__).resolve().parent.parent
DOMAIN_ROOT = REPO_ROOT / "domains" / "mathematics"
GRAPH_PATH = DOMAIN_ROOT / "master-knowledge-graph.yaml"
OVERLAY_ROOT = DOMAIN_ROOT / "assessment-overlays"
OUTPUT_JSON = OVERLAY_ROOT / "assessment-overlays.json"
OUTPUT_INDEX = OVERLAY_ROOT / "index.md"
OUTPUT_SUMMARY_JSON = OVERLAY_ROOT / "coverage-summary.json"
OUTPUT_SUMMARY_MD = OVERLAY_ROOT / "coverage-summary.md"


def load_graph_nodes() -> set[str]:
    graph = yaml.safe_load(GRAPH_PATH.read_text())
    return {
        node["id"]
        for family in graph.get("families", [])
        for node in family.get("nodes", [])
    }


def overlay_specs() -> list[dict]:
    today = date.today().isoformat()
    return [
        {
            "overlay_id": "sat-mathematics-overlay",
            "title": "SAT Mathematics Overlay",
            "assessment_family": "SAT",
            "assessment_version_or_cycle": "current-public-framework",
            "status": "draft",
            "overlay_summary_classification": "content_complete",
            "coverage_units": [
                {"unit_id": "sat-algebra", "title": "Algebra", "coverage_classification": "covered", "mapped_capability_nodes": ["E1", "E2", "E3", "A1", "A2", "A3", "A4", "A5", "K1", "K2", "K3", "K4", "K5", "K6"], "unresolved_gaps": []},
                {"unit_id": "sat-advanced-math", "title": "Advanced Math", "coverage_classification": "covered", "mapped_capability_nodes": ["K7", "B1", "B2", "B3", "B7", "B8"], "unresolved_gaps": []},
                {"unit_id": "sat-problem-solving-and-data-analysis", "title": "Problem-Solving and Data Analysis", "coverage_classification": "covered", "mapped_capability_nodes": ["Q1", "Q2", "Q3", "Q4", "J5", "J6", "W1", "W2", "W3", "W4"], "unresolved_gaps": []},
                {"unit_id": "sat-geometry-and-trigonometry", "title": "Geometry and Trigonometry", "coverage_classification": "covered", "mapped_capability_nodes": ["M9", "H1", "H2", "H3", "H4", "H5", "B4", "B6"], "unresolved_gaps": []},
            ],
            "unresolved_gaps": [],
            "source_documents": ["domains/mathematics/external-assessment-coverage-scan.md"],
            "claim_boundary": "SAT coverage is modeled as an assessment overlay over the canonical mathematics graph; it does not claim test-score guarantees.",
            "generated_on": today,
        },
        {
            "overlay_id": "psat-nmsqt-mathematics-overlay",
            "title": "PSAT/NMSQT Mathematics Overlay",
            "assessment_family": "PSAT/NMSQT",
            "assessment_version_or_cycle": "current-public-framework",
            "status": "draft",
            "overlay_summary_classification": "content_complete",
            "coverage_units": [
                {"unit_id": "psat-algebra", "title": "Algebra", "coverage_classification": "covered", "mapped_capability_nodes": ["E1", "E2", "E3", "A1", "A2", "A3", "A4", "A5", "K1", "K2", "K3", "K4", "K5", "K6"], "unresolved_gaps": []},
                {"unit_id": "psat-advanced-math", "title": "Advanced Math", "coverage_classification": "covered", "mapped_capability_nodes": ["K7", "B1", "B2", "B3", "B7"], "unresolved_gaps": []},
                {"unit_id": "psat-problem-solving-and-data-analysis", "title": "Problem-Solving and Data Analysis", "coverage_classification": "covered", "mapped_capability_nodes": ["Q1", "Q2", "Q3", "Q4", "J5", "J6", "W1", "W2", "W3", "W4"], "unresolved_gaps": []},
                {"unit_id": "psat-geometry-and-trigonometry", "title": "Geometry and Trigonometry", "coverage_classification": "covered", "mapped_capability_nodes": ["M9", "H1", "H2", "H4", "H5", "B4"], "unresolved_gaps": []},
            ],
            "unresolved_gaps": [],
            "source_documents": ["domains/mathematics/external-assessment-coverage-scan.md"],
            "claim_boundary": "PSAT/NMSQT coverage is represented as a reporting-surface overlay, not as a separate capability graph.",
            "generated_on": today,
        },
        {
            "overlay_id": "act-mathematics-overlay",
            "title": "ACT Mathematics Overlay",
            "assessment_family": "ACT",
            "assessment_version_or_cycle": "current-public-framework",
            "status": "draft",
            "overlay_summary_classification": "content_substantial_but_compressed",
            "coverage_units": [
                {"unit_id": "act-number-and-quantity", "title": "Number and Quantity", "coverage_classification": "covered", "mapped_capability_nodes": ["J1", "J2", "J3", "J4", "S1", "S2", "B8", "B10"], "unresolved_gaps": []},
                {"unit_id": "act-algebra", "title": "Algebra", "coverage_classification": "covered", "mapped_capability_nodes": ["E1", "E2", "E3", "A1", "A2", "A3", "K1", "K4", "K6", "K7", "B1", "B2"], "unresolved_gaps": []},
                {"unit_id": "act-functions", "title": "Functions", "coverage_classification": "covered", "mapped_capability_nodes": ["K2", "K3", "K5", "K7", "B1", "B2", "B3", "B4", "B5", "B6", "B7"], "unresolved_gaps": []},
                {"unit_id": "act-geometry", "title": "Geometry", "coverage_classification": "covered", "mapped_capability_nodes": ["G5", "G6", "G7", "M9", "H1", "H2", "H3", "H4", "H5", "B9"], "unresolved_gaps": []},
                {"unit_id": "act-statistics-and-probability", "title": "Statistics and Probability", "coverage_classification": "covered", "mapped_capability_nodes": ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9"], "unresolved_gaps": []},
                {"unit_id": "act-integrating-essential-skills", "title": "Integrating Essential Skills", "coverage_classification": "partially_covered", "mapped_capability_nodes": ["Q1", "Q2", "Q3", "Q4", "J5", "J6", "K5", "W2"], "unresolved_gaps": ["ACT integrating-essential-skills expectations still rely on cross-family transfer behavior rather than a distinct governed skill-strand package."]},
                {"unit_id": "act-modeling", "title": "Modeling", "coverage_classification": "partially_covered", "mapped_capability_nodes": ["J6", "K5", "W2", "B9", "B10"], "unresolved_gaps": ["ACT modeling still depends on cross-category synthesis and scenario interpretation that is broader than current node-level contracts."]},
            ],
            "unresolved_gaps": ["ACT cross-category modeling posture is still broader than a simple node list and remains only partially captured through overlay-level synthesis units."],
            "source_documents": ["domains/mathematics/external-assessment-coverage-scan.md"],
            "claim_boundary": "ACT coverage is content-surface oriented and does not claim full ACT item-format or reporting-policy equivalence.",
            "generated_on": today,
        },
        {
            "overlay_id": "ap-statistics-overlay",
            "title": "AP Statistics Overlay",
            "assessment_family": "AP Statistics",
            "assessment_version_or_cycle": "current-public-course-framework",
            "status": "draft",
            "overlay_summary_classification": "content_complete",
            "coverage_units": [
                {"unit_id": "ap-stat-1", "title": "Exploring One-Variable Data", "coverage_classification": "covered", "mapped_capability_nodes": ["W1"], "unresolved_gaps": []},
                {"unit_id": "ap-stat-2", "title": "Exploring Two-Variable Data", "coverage_classification": "covered", "mapped_capability_nodes": ["W2"], "unresolved_gaps": []},
                {"unit_id": "ap-stat-3", "title": "Collecting Data", "coverage_classification": "covered", "mapped_capability_nodes": ["W3"], "unresolved_gaps": []},
                {"unit_id": "ap-stat-4", "title": "Probability, Random Variables, and Probability Distributions", "coverage_classification": "covered", "mapped_capability_nodes": ["W4"], "unresolved_gaps": []},
                {"unit_id": "ap-stat-5", "title": "Sampling Distributions", "coverage_classification": "covered", "mapped_capability_nodes": ["W5"], "unresolved_gaps": []},
                {"unit_id": "ap-stat-6", "title": "Inference for Categorical Data: Proportions", "coverage_classification": "covered", "mapped_capability_nodes": ["W6"], "unresolved_gaps": []},
                {"unit_id": "ap-stat-7", "title": "Inference for Quantitative Data: Means", "coverage_classification": "covered", "mapped_capability_nodes": ["W7"], "unresolved_gaps": []},
                {"unit_id": "ap-stat-8", "title": "Inference for Categorical Data: Chi-Square", "coverage_classification": "covered", "mapped_capability_nodes": ["W8"], "unresolved_gaps": []},
                {"unit_id": "ap-stat-9", "title": "Inference for Quantitative Data: Slopes", "coverage_classification": "covered", "mapped_capability_nodes": ["W9"], "unresolved_gaps": []},
            ],
            "unresolved_gaps": [],
            "source_documents": ["domains/mathematics/external-assessment-coverage-scan.md"],
            "claim_boundary": "AP Statistics is represented as a unit-level overlay over governed capability nodes; classroom sequencing and scoring rubrics are out of scope.",
            "generated_on": today,
        },
        {
            "overlay_id": "ap-precalculus-overlay",
            "title": "AP Precalculus Overlay",
            "assessment_family": "AP Precalculus",
            "assessment_version_or_cycle": "current-public-course-framework",
            "status": "draft",
            "overlay_summary_classification": "content_complete",
            "coverage_units": [
                {"unit_id": "ap-precalc-1", "title": "Polynomial and Rational Functions", "coverage_classification": "covered", "mapped_capability_nodes": ["B1", "B2"], "unresolved_gaps": []},
                {"unit_id": "ap-precalc-2", "title": "Exponential and Logarithmic Functions", "coverage_classification": "covered", "mapped_capability_nodes": ["B2", "B3"], "unresolved_gaps": []},
                {"unit_id": "ap-precalc-3", "title": "Trigonometric and Polar Functions", "coverage_classification": "covered", "mapped_capability_nodes": ["B4", "B6"], "unresolved_gaps": []},
                {"unit_id": "ap-precalc-4", "title": "Functions Involving Parameters, Vectors, and Matrices", "coverage_classification": "covered", "mapped_capability_nodes": ["B9", "B10", "AP2"], "unresolved_gaps": []},
            ],
            "unresolved_gaps": [],
            "source_documents": ["domains/mathematics/external-assessment-coverage-scan.md"],
            "claim_boundary": "AP Precalculus overlay tracks course-unit support over the canonical graph and does not replace the underlying capability topology.",
            "generated_on": today,
        },
        {
            "overlay_id": "ap-calculus-ab-overlay",
            "title": "AP Calculus AB Overlay",
            "assessment_family": "AP Calculus AB",
            "assessment_version_or_cycle": "current-public-course-framework",
            "status": "draft",
            "overlay_summary_classification": "content_complete",
            "coverage_units": [
                {"unit_id": "ap-calc-ab-1", "title": "Limits and Continuity", "coverage_classification": "covered", "mapped_capability_nodes": ["AP3"], "unresolved_gaps": []},
                {"unit_id": "ap-calc-ab-2", "title": "Differentiation: Definition and Fundamental Properties", "coverage_classification": "covered", "mapped_capability_nodes": ["AP3", "AP4"], "unresolved_gaps": []},
                {"unit_id": "ap-calc-ab-3", "title": "Differentiation: Composite, Implicit, and Inverse Functions", "coverage_classification": "covered", "mapped_capability_nodes": ["AP4"], "unresolved_gaps": []},
                {"unit_id": "ap-calc-ab-4", "title": "Contextual Applications of Differentiation", "coverage_classification": "covered", "mapped_capability_nodes": ["AP5"], "unresolved_gaps": []},
                {"unit_id": "ap-calc-ab-5", "title": "Analytical Applications of Differentiation", "coverage_classification": "covered", "mapped_capability_nodes": ["AP5"], "unresolved_gaps": []},
                {"unit_id": "ap-calc-ab-6", "title": "Integration and Accumulation of Change", "coverage_classification": "covered", "mapped_capability_nodes": ["AP6"], "unresolved_gaps": []},
                {"unit_id": "ap-calc-ab-7", "title": "Differential Equations", "coverage_classification": "covered", "mapped_capability_nodes": ["AP8"], "unresolved_gaps": []},
                {"unit_id": "ap-calc-ab-8", "title": "Applications of Integration", "coverage_classification": "covered", "mapped_capability_nodes": ["AP7"], "unresolved_gaps": []},
            ],
            "unresolved_gaps": [],
            "source_documents": ["domains/mathematics/external-assessment-coverage-scan.md"],
            "claim_boundary": "AP Calculus AB overlay tracks unit-level capability support, not calculator policy or scoring-procedure equivalence.",
            "generated_on": today,
        },
        {
            "overlay_id": "ap-calculus-bc-overlay",
            "title": "AP Calculus BC Overlay",
            "assessment_family": "AP Calculus BC",
            "assessment_version_or_cycle": "current-public-course-framework",
            "status": "draft",
            "overlay_summary_classification": "content_complete",
            "coverage_units": [
                {"unit_id": "ap-calc-bc-ab-core", "title": "AB Core Units", "coverage_classification": "covered", "mapped_capability_nodes": ["AP3", "AP4", "AP5", "AP6", "AP7", "AP8"], "unresolved_gaps": []},
                {"unit_id": "ap-calc-bc-series", "title": "BC Series and Polynomial Approximation Extensions", "coverage_classification": "covered", "mapped_capability_nodes": ["AP9"], "unresolved_gaps": []},
            ],
            "unresolved_gaps": [],
            "source_documents": ["domains/mathematics/external-assessment-coverage-scan.md"],
            "claim_boundary": "AP Calculus BC overlay extends the AB overlay with BC-only series and approximation surfaces over the same canonical graph.",
            "generated_on": today,
        },
        {
            "overlay_id": "ib-mathematics-aa-overlay",
            "title": "IB Mathematics AA Overlay",
            "assessment_family": "IB Mathematics AA",
            "assessment_version_or_cycle": "current-public-subject-brief",
            "status": "draft",
            "overlay_summary_classification": "content_partial",
            "coverage_units": [
                {"unit_id": "ib-aa-algebra", "title": "Number and Algebra", "coverage_classification": "covered", "mapped_capability_nodes": ["J1", "J2", "J3", "A1", "A2", "K7", "B1", "B2", "B3", "B8"], "unresolved_gaps": []},
                {"unit_id": "ib-aa-functions", "title": "Functions", "coverage_classification": "covered", "mapped_capability_nodes": ["K2", "K5", "K7", "B2", "B3", "B4", "B5", "B6"], "unresolved_gaps": []},
                {"unit_id": "ib-aa-geometry-and-trigonometry", "title": "Geometry and Trigonometry", "coverage_classification": "covered", "mapped_capability_nodes": ["H1", "H2", "H4", "H5", "B4", "B6", "B9"], "unresolved_gaps": []},
                {"unit_id": "ib-aa-statistics-and-probability", "title": "Statistics and Probability", "coverage_classification": "partially_covered", "mapped_capability_nodes": ["W1", "W2", "W3", "W4", "W5", "W6", "W7"], "unresolved_gaps": ["IB AA pathway detail remains partial because SL/HL distinctions and internal-assessment expectations are not yet carried by dedicated capability lifts."]},
                {"unit_id": "ib-aa-calculus", "title": "Calculus", "coverage_classification": "covered", "mapped_capability_nodes": ["AP3", "AP4", "AP5", "AP6", "AP7", "AP8"], "unresolved_gaps": []},
            ],
            "unresolved_gaps": ["AA summary overlay is now complemented by SL/HL variants, but HL-specific lifts and internal-assessment expectations remain only partially modeled."],
            "source_documents": ["domains/mathematics/external-assessment-coverage-scan.md"],
            "claim_boundary": "IB Mathematics AA overlay is exploratory and content-surface oriented; IB internal-assessment and level-specific requirements are not yet fully modeled.",
            "generated_on": today,
        },
        {
            "overlay_id": "ib-mathematics-ai-overlay",
            "title": "IB Mathematics AI Overlay",
            "assessment_family": "IB Mathematics AI",
            "assessment_version_or_cycle": "current-public-subject-brief",
            "status": "draft",
            "overlay_summary_classification": "content_partial",
            "coverage_units": [
                {"unit_id": "ib-ai-number-and-algebra", "title": "Number and Algebra", "coverage_classification": "covered", "mapped_capability_nodes": ["J1", "J2", "J3", "Q1", "Q2", "Q3", "Q4", "A1", "A2"], "unresolved_gaps": []},
                {"unit_id": "ib-ai-functions", "title": "Functions", "coverage_classification": "covered", "mapped_capability_nodes": ["K2", "K3", "K5", "B2", "B3", "B4", "B10"], "unresolved_gaps": []},
                {"unit_id": "ib-ai-geometry-and-trigonometry", "title": "Geometry and Trigonometry", "coverage_classification": "covered", "mapped_capability_nodes": ["M9", "H1", "H2", "H4", "H5", "B4", "B9", "B10"], "unresolved_gaps": []},
                {"unit_id": "ib-ai-statistics-and-probability", "title": "Statistics and Probability", "coverage_classification": "covered", "mapped_capability_nodes": ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9"], "unresolved_gaps": []},
                {"unit_id": "ib-ai-calculus", "title": "Calculus", "coverage_classification": "partially_covered", "mapped_capability_nodes": ["AP3", "AP4", "AP6"], "unresolved_gaps": ["IB AI pathway differentiation and technology-mediated emphases are not yet modeled as distinct overlay units."]},
            ],
            "unresolved_gaps": ["AI summary overlay is now complemented by SL/HL variants, but level-specific expectations and internal-assessment constraints remain only partially modeled."],
            "source_documents": ["domains/mathematics/external-assessment-coverage-scan.md"],
            "claim_boundary": "IB Mathematics AI overlay is exploratory and does not yet claim full AA/AI or SL/HL pathway fidelity.",
            "generated_on": today,
        },
        {
            "overlay_id": "ib-mathematics-aa-sl-overlay",
            "title": "IB Mathematics AA SL Overlay",
            "assessment_family": "IB Mathematics AA SL",
            "assessment_version_or_cycle": "current-public-subject-brief",
            "status": "draft",
            "overlay_summary_classification": "content_partial",
            "coverage_units": [
                {"unit_id": "ib-aa-sl-number-and-algebra", "title": "Number and Algebra", "coverage_classification": "covered", "mapped_capability_nodes": ["J1", "J2", "J3", "A1", "A2", "K7", "B1", "B2", "B3", "B8"], "unresolved_gaps": []},
                {"unit_id": "ib-aa-sl-functions", "title": "Functions", "coverage_classification": "covered", "mapped_capability_nodes": ["K2", "K5", "K7", "B2", "B3", "B4", "B5", "B6"], "unresolved_gaps": []},
                {"unit_id": "ib-aa-sl-geometry-and-trigonometry", "title": "Geometry and Trigonometry", "coverage_classification": "covered", "mapped_capability_nodes": ["H1", "H2", "H4", "H5", "B4", "B6", "B9"], "unresolved_gaps": []},
                {"unit_id": "ib-aa-sl-statistics-and-probability", "title": "Statistics and Probability", "coverage_classification": "partially_covered", "mapped_capability_nodes": ["W1", "W2", "W3", "W4", "W5", "W6", "W7"], "unresolved_gaps": ["IB AA SL statistics expectations are represented at the content-surface level, but SL-specific assessment constraints and exploration expectations are not yet encoded as governed artifacts."]},
                {"unit_id": "ib-aa-sl-calculus", "title": "Calculus", "coverage_classification": "covered", "mapped_capability_nodes": ["AP3", "AP4", "AP5", "AP6", "AP7"], "unresolved_gaps": []},
            ],
            "unresolved_gaps": ["IB AA SL now has an explicit overlay, but internal-assessment expectations remain outside the current governed artifact set."],
            "source_documents": ["domains/mathematics/external-assessment-coverage-scan.md"],
            "claim_boundary": "IB Mathematics AA SL overlay is a maintained course-level view over the canonical graph; SL policies and internal assessment remain only partially modeled.",
            "generated_on": today,
        },
        {
            "overlay_id": "ib-mathematics-aa-hl-overlay",
            "title": "IB Mathematics AA HL Overlay",
            "assessment_family": "IB Mathematics AA HL",
            "assessment_version_or_cycle": "current-public-subject-brief",
            "status": "draft",
            "overlay_summary_classification": "content_partial",
            "coverage_units": [
                {"unit_id": "ib-aa-hl-number-and-algebra", "title": "Number and Algebra", "coverage_classification": "partially_covered", "mapped_capability_nodes": ["J1", "J2", "J3", "A1", "A2", "K7", "B1", "B2", "B3", "B7", "B8"], "unresolved_gaps": ["IB AA HL breadth is only partially represented because level-specific extension expectations are not governed as distinct HL lift nodes."]},
                {"unit_id": "ib-aa-hl-functions", "title": "Functions", "coverage_classification": "partially_covered", "mapped_capability_nodes": ["K2", "K5", "K7", "B2", "B3", "B4", "B5", "B6", "B7"], "unresolved_gaps": ["HL function expectations are partially captured through broader advanced-function nodes rather than explicit HL-only lifts."]},
                {"unit_id": "ib-aa-hl-geometry-and-trigonometry", "title": "Geometry and Trigonometry", "coverage_classification": "partially_covered", "mapped_capability_nodes": ["H1", "H2", "H4", "H5", "B4", "B6", "B9", "B10"], "unresolved_gaps": ["HL geometry/trigonometry enrichments are represented only at broad content-surface level."]},
                {"unit_id": "ib-aa-hl-statistics-and-probability", "title": "Statistics and Probability", "coverage_classification": "partially_covered", "mapped_capability_nodes": ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9"], "unresolved_gaps": ["HL statistics expectations and internal-assessment implications are not yet captured as distinct governed lifts."]},
                {"unit_id": "ib-aa-hl-calculus", "title": "Calculus", "coverage_classification": "partially_covered", "mapped_capability_nodes": ["AP3", "AP4", "AP5", "AP6", "AP7", "AP8", "AP9"], "unresolved_gaps": ["The graph exposes substantial HL calculus territory, but explicit HL-only differentiation is still absent."]},
            ],
            "unresolved_gaps": ["IB AA HL now has an explicit overlay, but HL-specific lifts and internal-assessment expectations remain only partially governed."],
            "source_documents": ["domains/mathematics/external-assessment-coverage-scan.md"],
            "claim_boundary": "IB Mathematics AA HL overlay captures current content-surface support only; it does not claim full HL pathway or internal-assessment fidelity.",
            "generated_on": today,
        },
        {
            "overlay_id": "ib-mathematics-ai-sl-overlay",
            "title": "IB Mathematics AI SL Overlay",
            "assessment_family": "IB Mathematics AI SL",
            "assessment_version_or_cycle": "current-public-subject-brief",
            "status": "draft",
            "overlay_summary_classification": "content_partial",
            "coverage_units": [
                {"unit_id": "ib-ai-sl-number-and-algebra", "title": "Number and Algebra", "coverage_classification": "covered", "mapped_capability_nodes": ["J1", "J2", "J3", "Q1", "Q2", "Q3", "Q4", "A1", "A2"], "unresolved_gaps": []},
                {"unit_id": "ib-ai-sl-functions", "title": "Functions", "coverage_classification": "covered", "mapped_capability_nodes": ["K2", "K3", "K5", "B2", "B3", "B4", "B10"], "unresolved_gaps": []},
                {"unit_id": "ib-ai-sl-geometry-and-trigonometry", "title": "Geometry and Trigonometry", "coverage_classification": "covered", "mapped_capability_nodes": ["M9", "H1", "H2", "H4", "H5", "B4", "B9", "B10"], "unresolved_gaps": []},
                {"unit_id": "ib-ai-sl-statistics-and-probability", "title": "Statistics and Probability", "coverage_classification": "covered", "mapped_capability_nodes": ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9"], "unresolved_gaps": []},
                {"unit_id": "ib-ai-sl-calculus", "title": "Calculus", "coverage_classification": "partially_covered", "mapped_capability_nodes": ["AP3", "AP4", "AP6"], "unresolved_gaps": ["IB AI SL calculus remains intentionally lighter than AA, but SL-specific technology and exploration expectations are not yet captured as governed artifacts."]},
            ],
            "unresolved_gaps": ["IB AI SL now has an explicit overlay, but internal-assessment expectations remain outside the current governed artifact set."],
            "source_documents": ["domains/mathematics/external-assessment-coverage-scan.md"],
            "claim_boundary": "IB Mathematics AI SL overlay is a maintained course-level view over the canonical graph; SL policies and internal assessment remain only partially modeled.",
            "generated_on": today,
        },
        {
            "overlay_id": "ib-mathematics-ai-hl-overlay",
            "title": "IB Mathematics AI HL Overlay",
            "assessment_family": "IB Mathematics AI HL",
            "assessment_version_or_cycle": "current-public-subject-brief",
            "status": "draft",
            "overlay_summary_classification": "content_partial",
            "coverage_units": [
                {"unit_id": "ib-ai-hl-number-and-algebra", "title": "Number and Algebra", "coverage_classification": "partially_covered", "mapped_capability_nodes": ["J1", "J2", "J3", "Q1", "Q2", "Q3", "Q4", "A1", "A2", "B10"], "unresolved_gaps": ["IB AI HL number/algebra emphasis is only partially differentiated from AI SL in the current graph."]},
                {"unit_id": "ib-ai-hl-functions", "title": "Functions", "coverage_classification": "partially_covered", "mapped_capability_nodes": ["K2", "K3", "K5", "B2", "B3", "B4", "B10"], "unresolved_gaps": ["AI HL function expectations remain partially represented because HL-specific extensions are not encoded as separate governed lifts."]},
                {"unit_id": "ib-ai-hl-geometry-and-trigonometry", "title": "Geometry and Trigonometry", "coverage_classification": "covered", "mapped_capability_nodes": ["M9", "H1", "H2", "H4", "H5", "B4", "B9", "B10"], "unresolved_gaps": []},
                {"unit_id": "ib-ai-hl-statistics-and-probability", "title": "Statistics and Probability", "coverage_classification": "partially_covered", "mapped_capability_nodes": ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9"], "unresolved_gaps": ["AI HL statistics breadth is substantial, but technology-mediated and internal-assessment expectations remain under-modeled."]},
                {"unit_id": "ib-ai-hl-calculus", "title": "Calculus", "coverage_classification": "partially_covered", "mapped_capability_nodes": ["AP3", "AP4", "AP6", "AP7"], "unresolved_gaps": ["The graph supports a meaningful AI HL calculus surface, but explicit HL-only pathway boundaries are still absent."]},
            ],
            "unresolved_gaps": ["IB AI HL now has an explicit overlay, but HL-specific lifts and internal-assessment expectations remain only partially governed."],
            "source_documents": ["domains/mathematics/external-assessment-coverage-scan.md"],
            "claim_boundary": "IB Mathematics AI HL overlay captures current content-surface support only; it does not claim full HL pathway or internal-assessment fidelity.",
            "generated_on": today,
        },
    ]


def build_index(overlays: list[dict]) -> str:
    lines = [
        "---",
        "id: mathematics-assessment-overlays-index",
        "type: domain-index",
        "domain: mathematics",
        "status: draft",
        'version: "0.1"',
        "dependencies: [mathematics-assessment-overlay-model, mathematics-external-assessment-coverage-scan, mathematics-master-knowledge-graph]",
        "tags: [mathematics, assessment, overlays, index]",
        f'last_updated: "{date.today().isoformat()}"',
        "related: [mathematics-domain, mathematics-assessment-overlay-model, mathematics-external-assessment-coverage-scan]",
        "support_tier: Core release",
        "maturity_state: Drafted",
        "supported_profiles: [assessment-overlay-index]",
        "evidence_class: Synthetic",
        "---",
        "",
        "# Mathematics Assessment Overlays",
        "",
        "## Purpose",
        "",
        "This package codifies maintained external-assessment overlays over the canonical mathematics graph.",
        "",
        "## Machine-Readable Catalog",
        "",
        "- [assessment-overlays.json](assessment-overlays.json)",
        "- [coverage-summary.json](coverage-summary.json)",
        "",
        "## Reporting Summary",
        "",
        "- [coverage-summary.md](coverage-summary.md)",
        "",
        "## Maintained Overlays",
        "",
        "| Overlay | Assessment family | Summary classification | Units |",
        "| --- | --- | --- | --- |",
    ]
    for overlay in overlays:
        slug = overlay["overlay_id"].replace("-overlay", "")
        lines.append(
            f"| [{overlay['title']}]({slug}.md) | {overlay['assessment_family']} | `{overlay['overlay_summary_classification']}` | `{len(overlay['coverage_units'])}` |"
        )
    lines.extend(["", "## Claim Boundary", "", "These overlays are derived graph views over maintained capability nodes. They do not replace the canonical mathematics graph or claim score guarantees."])
    return "\n".join(lines) + "\n"


def build_summary_payload(overlays: list[dict]) -> dict:
    summary_classification_counts: dict[str, int] = {}
    unit_classification_counts: dict[str, int] = {}
    assessment_families: list[dict] = []
    assessment_family_names: set[str] = set()
    overlay_level_names: set[str] = set()

    for overlay in overlays:
        summary_classification_counts[overlay["overlay_summary_classification"]] = (
            summary_classification_counts.get(overlay["overlay_summary_classification"], 0) + 1
        )
        assessment_family_names.add(overlay["assessment_family"])
        if overlay["assessment_family"].endswith(" SL") or overlay["assessment_family"].endswith(" HL"):
            overlay_level_names.add(overlay["assessment_family"].rsplit(" ", 1)[-1])
        coverage_counts: dict[str, int] = {}
        for unit in overlay["coverage_units"]:
            classification = unit["coverage_classification"]
            unit_classification_counts[classification] = unit_classification_counts.get(classification, 0) + 1
            coverage_counts[classification] = coverage_counts.get(classification, 0) + 1

        assessment_families.append(
            {
                "overlay_id": overlay["overlay_id"],
                "assessment_family": overlay["assessment_family"],
                "summary_classification": overlay["overlay_summary_classification"],
                "unit_count": len(overlay["coverage_units"]),
                "unit_classification_counts": coverage_counts,
                "unresolved_gap_count": len(overlay["unresolved_gaps"]),
            }
        )

    return {
        "id": "mathematics-assessment-overlay-coverage-summary",
        "generated_on": date.today().isoformat(),
        "overlay_count": len(overlays),
        "summary_classification_counts": summary_classification_counts,
        "unit_classification_counts": unit_classification_counts,
        "assessment_family_count": len(assessment_family_names),
        "level_variant_labels": sorted(overlay_level_names),
        "assessment_families": assessment_families,
    }


def build_summary_markdown(summary: dict) -> str:
    lines = [
        "---",
        "id: mathematics-assessment-overlay-coverage-summary",
        "type: domain-analysis",
        "domain: mathematics",
        "status: draft",
        'version: "0.1"',
        "dependencies: [mathematics-assessment-overlay-model, mathematics-assessment-overlays-index, mathematics-master-knowledge-graph]",
        "tags: [mathematics, assessment, overlays, reporting]",
        f'last_updated: "{summary["generated_on"]}"',
        "related: [mathematics-domain, mathematics-assessment-overlays-index, mathematics-external-assessment-coverage-scan]",
        "support_tier: Core release",
        "maturity_state: Drafted",
        "supported_profiles: [assessment-overlay-reporting]",
        "evidence_class: Synthetic",
        "---",
        "",
        "# Mathematics Assessment Overlay Coverage Summary",
        "",
        "## Purpose",
        "",
        "This report summarizes the maintained mathematics assessment-overlay package for downstream reporting and export validation.",
        "",
        "## Package Totals",
        "",
        f'- overlay count: `{summary["overlay_count"]}`',
        f'- assessment family count: `{summary["assessment_family_count"]}`',
        f'- level variants present: `{", ".join(summary["level_variant_labels"]) if summary["level_variant_labels"] else "none"}`',
        "",
        "### Overlay Summary Classifications",
        "",
    ]
    for key, value in sorted(summary["summary_classification_counts"].items()):
        lines.append(f"- `{key}`: `{value}`")

    lines.extend(["", "### Unit Coverage Classifications", ""])
    for key, value in sorted(summary["unit_classification_counts"].items()):
        lines.append(f"- `{key}`: `{value}`")

    lines.extend(
        [
            "",
            "## Assessment Families",
            "",
            "| Assessment family | Overlay id | Summary classification | Units | Unresolved gaps |",
            "| --- | --- | --- | --- | --- |",
        ]
    )
    for family in summary["assessment_families"]:
        lines.append(
            f'| {family["assessment_family"]} | `{family["overlay_id"]}` | `{family["summary_classification"]}` | `{family["unit_count"]}` | `{family["unresolved_gap_count"]}` |'
        )

    lines.extend(
        [
            "",
            "## Claim Boundary",
            "",
            "This report summarizes maintained overlay metadata for reporting and validation. It does not replace the underlying overlay documents or canonical capability graph.",
            "",
        ]
    )
    return "\n".join(lines)


def build_overlay_markdown(overlay: dict) -> str:
    lines = [
        "---",
        f"id: {overlay['overlay_id']}",
        "type: domain-analysis",
        "domain: mathematics",
        "status: draft",
        'version: "0.1"',
        "dependencies: [mathematics-assessment-overlay-model, mathematics-master-knowledge-graph, mathematics-external-assessment-coverage-scan]",
        "tags: [mathematics, assessment, overlay]",
        f"last_updated: \"{overlay['generated_on']}\"",
        "related: [mathematics-domain, mathematics-assessment-overlay-model, mathematics-external-assessment-coverage-scan]",
        "support_tier: Core release",
        "maturity_state: Drafted",
        "supported_profiles: [assessment-overlay]",
        "evidence_class: Synthetic",
        "---",
        "",
        f"# {overlay['title']}",
        "",
        "## Summary",
        "",
        f"- assessment family: `{overlay['assessment_family']}`",
        f"- version or cycle: `{overlay['assessment_version_or_cycle']}`",
        f"- overlay summary classification: `{overlay['overlay_summary_classification']}`",
        "",
        "## Coverage Units",
        "",
        "| Unit | Classification | Mapped nodes |",
        "| --- | --- | --- |",
    ]
    for unit in overlay["coverage_units"]:
        lines.append(
            f"| {unit['title']} | `{unit['coverage_classification']}` | {', '.join(f'`{node}`' for node in unit['mapped_capability_nodes'])} |"
        )
    lines.extend(["", "## Unresolved Gaps", ""])
    if overlay["unresolved_gaps"]:
        for gap in overlay["unresolved_gaps"]:
            lines.append(f"- {gap}")
    else:
        lines.append("- none recorded in the current overlay revision")
    lines.extend(["", "## Claim Boundary", "", overlay["claim_boundary"], ""])
    return "\n".join(lines)


def main() -> None:
    OVERLAY_ROOT.mkdir(parents=True, exist_ok=True)
    graph_nodes = load_graph_nodes()
    overlays = overlay_specs()
    for overlay in overlays:
        for unit in overlay["coverage_units"]:
            missing = [node_id for node_id in unit["mapped_capability_nodes"] if node_id not in graph_nodes]
            if missing:
                raise SystemExit(f"{overlay['overlay_id']} references missing graph nodes: {', '.join(missing)}")

    payload = {
        "meta": {
            "id": "mathematics-assessment-overlays",
            "generated_on": date.today().isoformat(),
            "source_graph": str(GRAPH_PATH.relative_to(REPO_ROOT)),
            "overlay_count": len(overlays),
        },
        "overlays": overlays,
    }
    summary = build_summary_payload(overlays)
    OUTPUT_JSON.write_text(json.dumps(payload, indent=2) + "\n")
    OUTPUT_SUMMARY_JSON.write_text(json.dumps(summary, indent=2) + "\n")
    OUTPUT_INDEX.write_text(build_index(overlays))
    OUTPUT_SUMMARY_MD.write_text(build_summary_markdown(summary))
    for overlay in overlays:
        slug = overlay["overlay_id"].replace("-overlay", "")
        (OVERLAY_ROOT / f"{slug}.md").write_text(build_overlay_markdown(overlay))
    print(OUTPUT_JSON.relative_to(REPO_ROOT))
    print(OUTPUT_SUMMARY_JSON.relative_to(REPO_ROOT))
    print(OUTPUT_INDEX.relative_to(REPO_ROOT))


if __name__ == "__main__":
    main()
