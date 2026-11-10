# MIND_MAP_FORMAT.md — Durable Orientation Index Specification

## Purpose
`MIND_MAP.md` is a durable, machine-parsable concept graph designed for rapid agent and human orientation in this repository. It maps components, data flows, operational boundaries, and relationships.

---

## Strict Grammar & Format Rules

1. **Header Lines**:
   - Must start with `#` (Markdown title/section headers), `>` (blockquotes / orientation notes), or be completely blank.

2. **Graph Nodes**:
   - Every node must occupy exactly **one single physical line** (no wrapped lines, no multi-line paragraphs).
   - Format:
     ```
     [N] **Title** - Description text with [M] inline graph references.
     ```
   - Maximum line length: **600 characters**.
   - Node identifiers `[N]` must be unique positive integers.

3. **Overview Hubs [1-5]**:
   - The first 5 nodes `[1]`, `[2]`, `[3]`, `[4]`, and `[5]` must serve as top-level architectural hubs representing the primary subsystems.
   - All subsequent nodes `[6+]` connect into these hubs or cross-reference other nodes.

4. **Durable Content Only**:
   - Only document enduring architectural concepts, component locations, boundaries, and relationships.
   - **Forbidden in MIND_MAP.md**:
     - Ephemeral dates and timestamps
     - PR numbers, task lists, or approvals
     - Rollout percentages or session work narratives
     - In-progress verification logs

5. **Validation**:
   - Format compliance is enforced via `scripts/validate-docs.py`.
