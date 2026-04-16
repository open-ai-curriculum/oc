---
id: mathematics-assessment-framework-assurance-register
type: domain-analysis
domain: mathematics
status: draft
version: "0.1"
dependencies: [mathematics-external-assessment-coverage-scan, mathematics-assessment-overlays-index, mathematics-assessment-overlay-coverage-summary]
tags: [mathematics, assessment, assurance, governance]
last_updated: "2026-04-15"
related: [mathematics-domain, mathematics-external-assessment-coverage-scan, mathematics-assessment-overlays-index]
support_tier: Core release
maturity_state: Drafted
supported_profiles: [assessment-framework-assurance]
evidence_class: Synthetic
---

# Mathematics Assessment Framework Assurance Register

## Purpose

This register codifies the current assurance posture for each maintained external mathematics assessment family.

## Framework Register

| Assessment family | Assurance classification | Official blueprint verified | Overlay present | Current graph posture |
| --- | --- | --- | --- | --- |
| SAT | `overlay_backed_and_blueprint_verified` | `yes` | `yes` | `strong` |
| PSAT/NMSQT | `overlay_backed_and_blueprint_verified` | `yes` | `yes` | `strong` |
| ACT | `overlay_backed_with_remaining_integrated_skills_gap` | `yes` | `yes` | `substantial_but_compressed` |
| AP Statistics | `overlay_backed_and_blueprint_verified` | `yes` | `yes` | `strong` |
| AP Precalculus | `overlay_backed_and_blueprint_verified` | `yes` | `yes` | `strong` |
| AP Calculus AB | `overlay_backed_and_blueprint_verified` | `yes` | `yes` | `strong` |
| AP Calculus BC | `overlay_backed_and_blueprint_verified` | `yes` | `yes` | `strong` |
| State achievement tests | `standards_surface_only` | `no` | `no` | `strong_for_standards_aligned_content` |
| NAEP | `framework_verified_with_accepted_grade_12_compression` | `yes` | `no` | `substantial_but_compressed` |
| IB DP Mathematics | `overlay_backed_with_partial_pathway_fidelity` | `yes` | `yes` | `partial` |
| TerraNova | `provisional_unverified_blueprint` | `no` | `no` | `provisional` |

## Next Actions

- `SAT`: Continue overlay-aware workflow hardening.
- `PSAT/NMSQT`: Continue overlay-aware workflow hardening.
- `ACT`: Deepen modeling and integrated-skills artifact support and reporting.
- `AP Statistics`: Continue export and workflow hardening.
- `AP Precalculus`: Continue export and workflow hardening.
- `AP Calculus AB`: Continue export and workflow hardening.
- `AP Calculus BC`: Continue export and workflow hardening.
- `State achievement tests`: Keep claims at standards-surface level unless state blueprint audits are codified.
- `NAEP`: Maintain the current grade-12 compression boundary unless a stronger maintained NAEP crosswalk demonstrates that further decomposition is necessary.
- `IB DP Mathematics`: Deepen HL-lift and internal-assessment governance beyond the initial registry surface.
- `TerraNova`: Remain explicitly provisional unless a current public official blueprint is codified.

## Claim Boundary

This register records repository assurance posture. It does not by itself elevate any assessment family to a release-approved exam-preparation claim.
