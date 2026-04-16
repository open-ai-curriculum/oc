#!/usr/bin/env python3

from __future__ import annotations

import json
from datetime import date
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent
DOMAIN_ROOT = REPO_ROOT / "domains" / "mathematics"
OUTPUT_JSON = DOMAIN_ROOT / "assessment-framework-assurance-register.json"
OUTPUT_MD = DOMAIN_ROOT / "assessment-framework-assurance-register.md"


def register_entries() -> list[dict]:
    return [
        {
            "framework_id": "sat-suite-sat",
            "assessment_family": "SAT",
            "assurance_classification": "overlay_backed_and_blueprint_verified",
            "official_blueprint_verified": True,
            "maintained_overlay_present": True,
            "current_graph_posture": "strong",
            "next_action": "Continue overlay-aware workflow hardening.",
        },
        {
            "framework_id": "sat-suite-psat-nmsqt",
            "assessment_family": "PSAT/NMSQT",
            "assurance_classification": "overlay_backed_and_blueprint_verified",
            "official_blueprint_verified": True,
            "maintained_overlay_present": True,
            "current_graph_posture": "strong",
            "next_action": "Continue overlay-aware workflow hardening.",
        },
        {
            "framework_id": "act-mathematics",
            "assessment_family": "ACT",
            "assurance_classification": "overlay_backed_with_remaining_integrated_skills_gap",
            "official_blueprint_verified": True,
            "maintained_overlay_present": True,
            "current_graph_posture": "substantial_but_compressed",
            "next_action": "Deepen modeling and integrated-skills artifact support and reporting.",
        },
        {
            "framework_id": "ap-statistics",
            "assessment_family": "AP Statistics",
            "assurance_classification": "overlay_backed_and_blueprint_verified",
            "official_blueprint_verified": True,
            "maintained_overlay_present": True,
            "current_graph_posture": "strong",
            "next_action": "Continue export and workflow hardening.",
        },
        {
            "framework_id": "ap-precalculus",
            "assessment_family": "AP Precalculus",
            "assurance_classification": "overlay_backed_and_blueprint_verified",
            "official_blueprint_verified": True,
            "maintained_overlay_present": True,
            "current_graph_posture": "strong",
            "next_action": "Continue export and workflow hardening.",
        },
        {
            "framework_id": "ap-calculus-ab",
            "assessment_family": "AP Calculus AB",
            "assurance_classification": "overlay_backed_and_blueprint_verified",
            "official_blueprint_verified": True,
            "maintained_overlay_present": True,
            "current_graph_posture": "strong",
            "next_action": "Continue export and workflow hardening.",
        },
        {
            "framework_id": "ap-calculus-bc",
            "assessment_family": "AP Calculus BC",
            "assurance_classification": "overlay_backed_and_blueprint_verified",
            "official_blueprint_verified": True,
            "maintained_overlay_present": True,
            "current_graph_posture": "strong",
            "next_action": "Continue export and workflow hardening.",
        },
        {
            "framework_id": "state-achievement-tests",
            "assessment_family": "State achievement tests",
            "assurance_classification": "standards_surface_only",
            "official_blueprint_verified": False,
            "maintained_overlay_present": False,
            "current_graph_posture": "strong_for_standards_aligned_content",
            "next_action": "Keep claims at standards-surface level unless state blueprint audits are codified.",
        },
        {
            "framework_id": "naep-mathematics",
            "assessment_family": "NAEP",
            "assurance_classification": "framework_verified_with_accepted_grade_12_compression",
            "official_blueprint_verified": True,
            "maintained_overlay_present": False,
            "current_graph_posture": "substantial_but_compressed",
            "next_action": "Maintain the current grade-12 compression boundary unless a stronger maintained NAEP crosswalk demonstrates that further decomposition is necessary.",
        },
        {
            "framework_id": "ib-dp-mathematics",
            "assessment_family": "IB DP Mathematics",
            "assurance_classification": "overlay_backed_with_partial_pathway_fidelity",
            "official_blueprint_verified": True,
            "maintained_overlay_present": True,
            "current_graph_posture": "partial",
            "next_action": "Deepen HL-lift and internal-assessment governance beyond the initial registry surface.",
        },
        {
            "framework_id": "terranova-mathematics",
            "assessment_family": "TerraNova",
            "assurance_classification": "provisional_unverified_blueprint",
            "official_blueprint_verified": False,
            "maintained_overlay_present": False,
            "current_graph_posture": "provisional",
            "next_action": "Remain explicitly provisional unless a current public official blueprint is codified.",
        },
    ]


def build_markdown(entries: list[dict]) -> str:
    lines = [
        "---",
        "id: mathematics-assessment-framework-assurance-register",
        "type: domain-analysis",
        "domain: mathematics",
        "status: draft",
        'version: "0.1"',
        "dependencies: [mathematics-external-assessment-coverage-scan, mathematics-assessment-overlays-index, mathematics-assessment-overlay-coverage-summary]",
        "tags: [mathematics, assessment, assurance, governance]",
        f'last_updated: "{date.today().isoformat()}"',
        "related: [mathematics-domain, mathematics-external-assessment-coverage-scan, mathematics-assessment-overlays-index]",
        "support_tier: Core release",
        "maturity_state: Drafted",
        "supported_profiles: [assessment-framework-assurance]",
        "evidence_class: Synthetic",
        "---",
        "",
        "# Mathematics Assessment Framework Assurance Register",
        "",
        "## Purpose",
        "",
        "This register codifies the current assurance posture for each maintained external mathematics assessment family.",
        "",
        "## Framework Register",
        "",
        "| Assessment family | Assurance classification | Official blueprint verified | Overlay present | Current graph posture |",
        "| --- | --- | --- | --- | --- |",
    ]
    for entry in entries:
        lines.append(
            f'| {entry["assessment_family"]} | `{entry["assurance_classification"]}` | `{"yes" if entry["official_blueprint_verified"] else "no"}` | `{"yes" if entry["maintained_overlay_present"] else "no"}` | `{entry["current_graph_posture"]}` |'
        )

    lines.extend(["", "## Next Actions", ""])
    for entry in entries:
        lines.append(f'- `{entry["assessment_family"]}`: {entry["next_action"]}')

    lines.extend(
        [
            "",
            "## Claim Boundary",
            "",
            "This register records repository assurance posture. It does not by itself elevate any assessment family to a release-approved exam-preparation claim.",
            "",
        ]
    )
    return "\n".join(lines)


def main() -> None:
    entries = register_entries()
    payload = {
        "id": "mathematics-assessment-framework-assurance-register",
        "generated_on": date.today().isoformat(),
        "framework_count": len(entries),
        "frameworks": entries,
    }
    OUTPUT_JSON.write_text(json.dumps(payload, indent=2) + "\n")
    OUTPUT_MD.write_text(build_markdown(entries))
    print(OUTPUT_JSON.relative_to(REPO_ROOT))
    print(OUTPUT_MD.relative_to(REPO_ROOT))


if __name__ == "__main__":
    main()
