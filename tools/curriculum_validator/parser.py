from __future__ import annotations

from dataclasses import dataclass, field
from pathlib import Path
import re
from typing import Iterable


METADATA_KEY_RE = re.compile(r"^- ([^:]+):\s*(.*)$")
LIST_ITEM_RE = re.compile(r"^\s*-\s+(.*)$")
NESTED_LIST_ITEM_RE = re.compile(r"^\s{2,}-\s+(.*)$")


@dataclass
class ArtifactSummary:
    artifact_type: str
    title: str
    path: Path
    metadata: dict[str, str] = field(default_factory=dict)
    headings: list[str] = field(default_factory=list)
    standards: list[str] = field(default_factory=list)
    source_refs: list[str] = field(default_factory=list)
    findings_context: dict[str, object] = field(default_factory=dict)


@dataclass
class PackageSummary:
    package_path: Path
    artifacts: list[ArtifactSummary]


def discover_package(package_path: Path) -> PackageSummary:
    artifacts = []
    for path in sorted(package_path.rglob("*.md")):
        if path.name == "README.md":
            continue
        artifacts.append(parse_artifact(path))
    return PackageSummary(package_path=package_path, artifacts=artifacts)


def parse_artifact(path: Path) -> ArtifactSummary:
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()
    title = extract_title(lines) or path.stem
    metadata = extract_metadata(lines)
    headings = extract_headings(lines)
    standards = extract_standards(lines)
    source_refs = extract_source_refs(lines)
    artifact_type = classify_artifact(path, title, metadata)
    findings_context = {
        "review_status": normalize_value(
            metadata.get("Review status") or metadata.get("review_status", "")
        ),
        "unit_ref": metadata.get("Unit") or metadata.get("unit_id", ""),
        "artifact_id": first_present(
            metadata,
            [
                "Unit ID",
                "Lesson ID",
                "Support ID",
                "mapping_id",
                "review_id",
            ],
        ),
    }
    return ArtifactSummary(
        artifact_type=artifact_type,
        title=title,
        path=path,
        metadata=metadata,
        headings=headings,
        standards=standards,
        source_refs=source_refs,
        findings_context=findings_context,
    )


def extract_title(lines: list[str]) -> str:
    for line in lines:
        if line.startswith("# "):
            return line[2:].strip()
    return ""


def extract_metadata(lines: list[str]) -> dict[str, str]:
    metadata: dict[str, str] = {}
    for idx, line in enumerate(lines):
        match = METADATA_KEY_RE.match(line)
        if not match:
            continue
        key = match.group(1).strip()
        value = match.group(2).strip()
        if value:
            metadata[key] = value
            continue

        collected = []
        cursor = idx + 1
        while cursor < len(lines):
            next_line = lines[cursor]
            if not next_line.strip():
                cursor += 1
                continue
            nested = NESTED_LIST_ITEM_RE.match(next_line)
            if nested:
                collected.append(nested.group(1).strip())
                cursor += 1
                continue
            break
        metadata[key] = "; ".join(collected)
    return metadata


def extract_headings(lines: Iterable[str]) -> list[str]:
    headings: list[str] = []
    for line in lines:
        if line.startswith("## "):
            headings.append(line[3:].strip())
    return headings


def extract_standards(lines: Iterable[str]) -> list[str]:
    standards = []
    for line in lines:
        if "CCSS." in line:
            standards.append(line.strip().lstrip("- ").strip())
    return standards


def extract_source_refs(lines: list[str]) -> list[str]:
    refs: list[str] = []
    in_source_refs = False
    for line in lines:
        if line.strip().startswith("- Source artifact refs:"):
            in_source_refs = True
            continue
        if in_source_refs:
            if not line.strip():
                continue
            nested = NESTED_LIST_ITEM_RE.match(line)
            if nested:
                refs.append(nested.group(1).strip().strip("` "))
                continue
            break
    return refs


def classify_artifact(path: Path, title: str, metadata: dict[str, str]) -> str:
    lower_name = path.name.lower()
    lower_title = title.lower()
    if "review record" in lower_title or "review-record" in lower_name:
        return "review_record"
    if "standards map" in lower_title or "standards-map" in lower_name:
        return "standards_map"
    if metadata.get("Support ID") or "teacher guide" in lower_title or "learner support" in lower_title:
        return "support_material"
    if metadata.get("Lesson ID") or lower_name.startswith("lesson-"):
        return "lesson"
    if metadata.get("Unit ID") or lower_name == "unit.md":
        return "unit"
    return "unknown"


def first_present(metadata: dict[str, str], keys: list[str]) -> str:
    for key in keys:
        value = metadata.get(key)
        if value:
            return value.strip().strip("` ")
    return ""


def normalize_value(value: str) -> str:
    return value.strip().lower()
