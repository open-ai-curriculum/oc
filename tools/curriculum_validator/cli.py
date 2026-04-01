from __future__ import annotations

import argparse
from pathlib import Path
import sys

from .parser import discover_package
from .reporter import render_json_report, render_text_report
from .rules import validate_package


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="curriculum-validator",
        description="Validate governed curriculum packages against the shared artifact model.",
    )
    parser.add_argument("package_path", help="Path to the curriculum package directory.")
    parser.add_argument(
        "--format",
        choices=["text", "json"],
        default="text",
        help="Output format.",
    )
    return parser


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)
    package_path = Path(args.package_path).resolve()

    if not package_path.exists() or not package_path.is_dir():
        parser.error(f"Package path does not exist or is not a directory: {package_path}")

    summary = discover_package(package_path)
    result = validate_package(summary)

    if args.format == "json":
        print(render_json_report(result))
    else:
        print(render_text_report(result))

    return 0


if __name__ == "__main__":
    sys.exit(main())
