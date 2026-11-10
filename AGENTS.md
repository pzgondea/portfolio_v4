# AGENTS.md — Agent Operating Rules & Documentation Governance

## Repository Scope
This repository houses the personal executive architecture portfolio of **Paul Zgondea** (`paul.zgondea.com`), built using Hugo static site generator, customized dark obsidian styling, and automated GitHub Pages deployment.

---

## Part 1: Documentation System & Rules (Portable Reference)

### 1. The Strict 5-Tier Separation

#### Tier 1: MIND_MAP.md (Durable Orientation Index)
- **Purpose**: High-level concept graph for orientation. Overview nodes `[1-5]` act as navigational hubs.
- **Rule**: Edit only when a durable concept, component, location, or relationship changes. Never put dates, approvals, rollout status, verification logs, or session narratives here.
- **Format** (defined in `MIND_MAP_FORMAT.md`): Strictly single-line nodes: `[N] **Title** - Description with [N] inline graph references.`. Maximum 600 characters per line. Header lines start with `#` or `>` or remain blank.

#### Tier 2: docs/live/ (Operational Runbooks)
- **Purpose**: The current ground truth for deployed systems (ports, deployment triggers, failover steps, recovery checklists).
- **Rule**: Updated in place as runtime behavior changes. Must reflect what is actively running right now.

#### Tier 3: docs/goals/ (Target Designs & Blueprints)
- **Purpose**: Architectural proposals and end-state blueprints written before implementation.
- **Rule**: Never treat as current operational truth until deployed and transitioned to `docs/live/`.

#### Tier 4: docs/TODO.md (Prioritized Backlog)
- **Purpose**: Terse, active tasks backlog.
- **Strict Limits**: Max 6 lines per item, max 200 lines total.
- **Format**: `Outcome + Owner/decision needed + Link to runbook/blueprint`. Delete items when completed.

#### Tier 5: docs/CHANGELOG.md & docs/archive/postmortems/ (Milestones & History)
- **Purpose**: Record completed architectural transitions in `docs/CHANGELOG.md`. Record root-cause incident analyses under `docs/archive/postmortems/`.
- **Rule**: Never use an uncurated append-only sprint log. Keep entries curated and architectural.

---

### 2. Documentation Integrity & Anti-Drift Protocol

- **Strict Command Verification**: Never document hypothetical CLI commands or flags without verifying syntax against `--help`, official docs, or local execution. Prefix untested commands with `UNVERIFIED:`.
- **Fact Grounding & Single Source of Truth**: Never state an IP, port, protocol, path, or schedule from memory or assumptions. Ground every fact in the configuration source. Define facts in a single file and link to it; never duplicate tables across docs.
- **Declaratively Generated Blocks**: Sections that track runtime facts (e.g. reverse proxy routes) must use `<!-- BEGIN GENERATED: <id> -->` and `<!-- END GENERATED: <id> -->` with an automated generator script (`--check` mode enforced in presubmit).
- **Source-to-Doc Mapping (`doc-map.txt`)**: A pre-commit gate maps core configuration files to their runbooks. Staging a code change without staging its corresponding runbook fails presubmit unless bypassed explicitly with `NO_DOC=1`.

---

## Agent Operational Workflows

1. **Local Build Check**:
   Before committing, always run local Hugo verification:
   ```bash
   hugo --gc --minify
   ```
2. **Docs Validation**:
   Validate that documentation conforms to format rules:
   ```bash
   python3 scripts/validate-docs.py
   ```
3. **Safety Backup**:
   The `backup-main` git branch serves as an untouched fallback snapshot. Never force-push or alter `backup-main`.
