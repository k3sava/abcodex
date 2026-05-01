# codex

A primary-source operator insight corpus. Lenny's-style transcripts + atomic insight cards + cross-domain knowledge graph. Open-corpus by intent.

## What's here
- **`insight-library/`** — the corpus. Schema, taxonomy, raw sources, atomic insight cards, synthesis, playbooks. Start at [`insight-library/README.md`](insight-library/README.md).
- **`docs/`** — interactive knowledge-graph site, deployed via GitHub Pages. See [`docs/index.html`](docs/index.html).

## Scope
Cross-domain operator wisdom: Product, PMM, GTM, Design, Engineering, AI-native operating, Leadership, Sales, Research. Not client-specific. Not a blog. Not commentary — a structured record of what operators said and shipped, with sources.

## Use
Other projects (personal or team) can:
- Link to insight cards by ID.
- Ingest curated batches via the corpus structure.
- Cite synthesis pages instead of duplicating insights into their own repos.

A consumption layer (MCP server / Pages search) is planned in `insight-library/05_application/`.

## License
Insight cards are MIT (see `LICENSE` when added). Raw sources retain their original copyright; codex captures excerpts under fair use, with attribution and links to canonical sources.
