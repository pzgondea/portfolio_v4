#!/usr/bin/env python3
"""
validate-docs.py — Documentation & Format Presubmit Validator
Enforces format rules for MIND_MAP.md and repository documentation.
"""

import sys
import re
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent

def validate_mind_map():
    mind_map_path = REPO_ROOT / "MIND_MAP.md"
    if not mind_map_path.exists():
        print("ERROR: MIND_MAP.md is missing.")
        return False

    errors = []
    with open(mind_map_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    hub_pattern = re.compile(r"^\[([1-5])\]\s+\*\*(.+?)\*\*\s+-\s+(.+)$")
    node_pattern = re.compile(r"^\[(\d+)\]\s+\*\*(.+?)\*\*\s+-\s+(.+)$")
    found_hubs = set()
    node_ids = set()

    for idx, raw_line in enumerate(lines, 1):
        line = raw_line.rstrip("\r\n")

        # Check line length constraint (max 600 chars)
        if len(line) > 600:
            errors.append(f"Line {idx} exceeds 600 characters ({len(line)} chars).")

        # Empty lines and header lines start with # or >
        if not line or line.startswith("#") or line.startswith(">"):
            continue

        # Check node syntax
        hub_match = hub_pattern.match(line)
        if hub_match:
            hub_id = int(hub_match.group(1))
            found_hubs.add(hub_id)

        node_match = node_pattern.match(line)
        if not node_match:
            errors.append(f"Line {idx} violates single-line node grammar: {line[:50]}...")
        else:
            nid = int(node_match.group(1))
            if nid in node_ids:
                errors.append(f"Line {idx}: Duplicate node identifier [{nid}].")
            node_ids.add(nid)

    # Verify all 5 navigational hubs are present
    missing_hubs = set(range(1, 6)) - found_hubs
    if missing_hubs:
        errors.append(f"MIND_MAP.md is missing required overview hubs: {sorted(missing_hubs)}")

    if errors:
        print("MIND_MAP.md Validation Failures:")
        for err in errors:
            print(f"  - {err}")
        return False

    print(f"MIND_MAP.md validation passed ({len(node_ids)} total nodes verified).")
    return True

def main():
    print("Running repository documentation presubmit checks...")
    ok = validate_mind_map()
    if not ok:
        sys.exit(1)
    print("All documentation presubmit checks passed.")
    sys.exit(0)

if __name__ == "__main__":
    main()
