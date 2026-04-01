from __future__ import annotations

from dataclasses import dataclass

from .parser import ArtifactSummary, PackageSummary


REQUIRED_FIELDS = {
    "unit": ["Unit ID", "Subject", "Grade / grade band", "Review status"],
    "lesson": ["Lesson ID", "Unit", "Subject", "Grade / grade band", "Review status"],
    "support_material": [
        "Support ID",
        "Artifact type",
        "Audience",
        "Review status",
    ],
}


@dataclass
class ValidationFinding:
    severity: str
    code: str
    artifact_path: str
    message: str


@dataclass
class ValidationResult:
    package_path: str
    artifacts: list[ArtifactSummary]
    findings: list[ValidationFinding]
    release_ready: bool


def validate_package(summary: PackageSummary) -> ValidationResult:
    findings: list[ValidationFinding] = []
    artifacts = summary.artifacts

    by_type: dict[str, list[ArtifactSummary]] = {}
    for artifact in artifacts:
        by_type.setdefault(artifact.artifact_type, []).append(artifact)
        findings.extend(validate_required_fields(artifact))

    findings.extend(validate_relationships(artifacts, by_type))
    release_ready = evaluate_release_ready(artifacts, findings)

    return ValidationResult(
        package_path=str(summary.package_path),
        artifacts=artifacts,
        findings=findings,
        release_ready=release_ready,
    )


def validate_required_fields(artifact: ArtifactSummary) -> list[ValidationFinding]:
    findings: list[ValidationFinding] = []
    required = REQUIRED_FIELDS.get(artifact.artifact_type, [])
    for field_name in required:
        if not artifact.metadata.get(field_name):
            findings.append(
                ValidationFinding(
                    severity="error",
                    code="missing-field",
                    artifact_path=str(artifact.path),
                    message=f"Missing required field `{field_name}` for {artifact.artifact_type}.",
                )
            )
    if artifact.artifact_type in {"unit", "lesson"} and not artifact.standards:
        findings.append(
            ValidationFinding(
                severity="warning",
                code="missing-standards",
                artifact_path=str(artifact.path),
                message="No standards references detected in artifact text.",
            )
        )
    if artifact.artifact_type == "support_material" and not artifact.source_refs:
        findings.append(
            ValidationFinding(
                severity="error",
                code="missing-source-refs",
                artifact_path=str(artifact.path),
                message="Support material is missing source artifact references.",
            )
        )
    return findings


def validate_relationships(
    artifacts: list[ArtifactSummary], by_type: dict[str, list[ArtifactSummary]]
) -> list[ValidationFinding]:
    findings: list[ValidationFinding] = []
    unit_ids = {
        artifact.metadata.get("Unit ID", "").strip().strip("` ")
        for artifact in by_type.get("unit", [])
        if artifact.metadata.get("Unit ID")
    }
    artifact_ids = {
        artifact.findings_context.get("artifact_id", "")
        for artifact in artifacts
        if artifact.findings_context.get("artifact_id")
    }

    for lesson in by_type.get("lesson", []):
        unit_ref = lesson.metadata.get("Unit", "").strip().strip("` ")
        if unit_ref and unit_ref not in unit_ids:
            findings.append(
                ValidationFinding(
                    severity="error",
                    code="unknown-unit-ref",
                    artifact_path=str(lesson.path),
                    message=f"Lesson references unknown unit `{unit_ref}`.",
                )
            )

    for support in by_type.get("support_material", []):
        for source_ref in support.source_refs:
            if source_ref not in artifact_ids:
                findings.append(
                    ValidationFinding(
                        severity="warning",
                        code="unknown-source-ref",
                        artifact_path=str(support.path),
                        message=f"Support material references unknown artifact `{source_ref}`.",
                    )
                )

    if by_type.get("unit") or by_type.get("lesson"):
        if not by_type.get("standards_map"):
            findings.append(
                ValidationFinding(
                    severity="warning",
                    code="missing-standards-map",
                    artifact_path=str(artifacts[0].path if artifacts else ""),
                    message="Package does not include a standalone standards mapping record.",
                )
            )
        if not by_type.get("review_record"):
            findings.append(
                ValidationFinding(
                    severity="error",
                    code="missing-review-record",
                    artifact_path=str(artifacts[0].path if artifacts else ""),
                    message="Package does not include any review record artifacts.",
                )
            )
    return findings


def evaluate_release_ready(
    artifacts: list[ArtifactSummary], findings: list[ValidationFinding]
) -> bool:
    if any(finding.severity == "error" for finding in findings):
        return False

    for artifact in artifacts:
        review_status = artifact.findings_context.get("review_status", "")
        if review_status and review_status not in {"approved", "approved with revisions"}:
            return False
    return True
