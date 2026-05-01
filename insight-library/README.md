# Codex — Operator Insight Corpus

Primary-source operator insights across Product, PMM, GTM, Design, Engineering, AI-native operating, and Leadership. Lenny's-style transcript corpus + atomic insight cards + cross-domain knowledge graph.

Open-corpus by intent: every claim is attributed, sourced, and dated, so the library can ship to the world without retroactive cleanup.

## Layout
- `00_meta/` — thesis, taxonomy, scoring model, insight-card schema, source-credibility rules
- `raw/` — immutable source layer (podcasts, essays, talks, threads, books, research)
- `01_thought-leaders/` — operator profiles and curated insight indexes per person
- `02_domains/` — domain-shaped views (PMM, GTM, Product, AI-native, etc.)
- `03_synthesis/` — cross-source patterns, contradictions, batch progress, coverage matrices
- `04_playbooks/` — promoted multi-insight artifacts (sequenced steps, templates)
- `05_application/` — how external systems can consume codex (linking patterns, MCP, Pages)

## Operating loop
1. **Ingest** — add source to `raw/<type>/<slug>.md` with full frontmatter.
2. **Extract** — pull atomic claims into `0X_<domain>/<operator>/<insight-slug>.md` per the schema in `00_meta/insight-card-schema.md`.
3. **Score** — apply the 5-dimension model in `00_meta/scoring-model.md`. Tier A/B/C.
4. **Cross-link** — fill `related:` frontmatter and `## Cross-references`. Surface contradictions in `03_synthesis/`.
5. **Promote** — when a pattern appears across operators, write a synthesis or playbook entry that cites the underlying cards.

## Definition of done for each insight card
- One atomic claim, attributed to one operator
- Primary source URL + date
- Mechanism, conditions, and at least one piece of evidence
- Score across all 5 dimensions
- Tier assigned
- At least one cross-reference if a related card exists

## Current state
- Governance layer: thesis, taxonomy (12 domains, 14 lifecycle tags, 7 source types), scoring, schema.
- Raw substrate: scaffolded, ingestion in progress.
- Seeded insights: **504** (legacy from initial scaffolding under PMM/GTM-only thesis; under re-scoring against new schema).

## Licensing
Source materials in `raw/` retain their original copyright; capture is under fair-use for excerpts and quotes. Insight cards (the codex-original layer) are MIT-licensed at repo root. Always link to the canonical source — codex is a citation layer, not a replacement.
