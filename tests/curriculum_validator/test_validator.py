from __future__ import annotations

import json
from pathlib import Path
import subprocess
import sys
import unittest

from tools.curriculum_validator.parser import discover_package
from tools.curriculum_validator.rules import validate_package


FIXTURES = (
    Path(__file__).resolve().parent / "fixtures" / "curriculum_packages"
)


class CurriculumValidatorTests(unittest.TestCase):
    def test_valid_draft_fixture_has_no_findings_and_is_not_release_ready(self) -> None:
        summary = discover_package(FIXTURES / "valid_draft")
        result = validate_package(summary)

        self.assertFalse(result.release_ready)
        self.assertEqual([], result.findings)
        self.assertEqual(
            {"unit", "lesson", "standards_map", "review_record", "support_material"},
            {artifact.artifact_type for artifact in result.artifacts},
        )

    def test_broken_fixture_surfaces_strict_findings(self) -> None:
        summary = discover_package(FIXTURES / "broken_package")
        result = validate_package(summary)

        self.assertFalse(result.release_ready)
        codes = {finding.code for finding in result.findings}
        self.assertIn("missing-field", codes)
        self.assertIn("missing-source-refs", codes)
        self.assertIn("missing-section", codes)
        self.assertIn("invalid-review-status", codes)
        self.assertIn("missing-review-record", codes)

    def test_cli_json_output_includes_release_ready_flag(self) -> None:
        fixture = FIXTURES / "valid_draft"
        output = subprocess.check_output(
            [
                sys.executable,
                "-m",
                "tools.curriculum_validator.cli",
                str(fixture),
                "--format",
                "json",
            ],
            cwd=Path(__file__).resolve().parents[2],
            text=True,
        )
        payload = json.loads(output)
        self.assertIn("release_ready", payload)
        self.assertFalse(payload["release_ready"])
        self.assertGreaterEqual(len(payload["artifacts"]), 5)


if __name__ == "__main__":
    unittest.main()
