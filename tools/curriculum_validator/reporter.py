from __future__ import annotations

import json

from .rules import ValidationResult


def render_text_report(result: ValidationResult) -> str:
    lines: list[str] = []
    lines.append(f"Package: {result.package_path}")
    lines.append("")
    lines.append("Artifacts:")
    for artifact in result.artifacts:
        lines.append(
            f"- {artifact.artifact_type}: {artifact.title} [{artifact.path}]"
        )
        review_status = artifact.findings_context.get("review_status")
        if review_status:
            lines.append(f"  review_status: {review_status}")
        if artifact.source_refs:
            lines.append(f"  source_refs: {', '.join(artifact.source_refs)}")
        if artifact.standards:
            lines.append(f"  standards: {', '.join(artifact.standards)}")

    lines.append("")
    lines.append(f"Release ready: {'yes' if result.release_ready else 'no'}")
    lines.append("")
    lines.append("Findings:")
    if not result.findings:
        lines.append("- none")
    else:
        for finding in result.findings:
            lines.append(
                f"- {finding.severity.upper()} [{finding.code}] {finding.artifact_path}: {finding.message}"
            )
    return "\n".join(lines)


def render_json_report(result: ValidationResult) -> str:
    payload = {
        "package_path": result.package_path,
        "release_ready": result.release_ready,
        "artifacts": [
            {
                "artifact_type": artifact.artifact_type,
                "title": artifact.title,
                "path": str(artifact.path),
                "metadata": artifact.metadata,
                "standards": artifact.standards,
                "source_refs": artifact.source_refs,
                "review_status": artifact.findings_context.get("review_status", ""),
                "artifact_id": artifact.findings_context.get("artifact_id", ""),
            }
            for artifact in result.artifacts
        ],
        "findings": [
            {
                "severity": finding.severity,
                "code": finding.code,
                "artifact_path": finding.artifact_path,
                "message": finding.message,
            }
            for finding in result.findings
        ],
    }
    return json.dumps(payload, indent=2, sort_keys=True)
