# Scope Migration Note — 2026-05-01

The original scaffold (504 seeded insights) framed the corpus as **AI-Native PMM/GTM** specifically, with explicit OS-alignment scoring tied to Commons / Flywheel / clearPMM.

As of 2026-05-01, codex's scope is broader: **all-domain operator insights**, open-corpus, transcript-grounded.

## What changed
- Thesis: rewritten as a substrate, not a personal-OS layer.
- Taxonomy: expanded from 5 domains to 11 (Product, PMM, GTM, Growth, Design, Eng, AI-native, Leadership, Sales/CS, Research, Founder craft).
- Scoring: "OS alignment" replaced with "Source integrity".
- Schema: formalized in `insight-card-schema.md`. Every card now requires operator + source URL + date + mechanism + conditions.
- Raw layer: added `raw/` for transcripts, essays, talks, threads, books, research.

## What this means for legacy content
- The 504 seeded insights remain in place under `01_thought-leaders/` and `02_domains/`.
- They will be re-scored against the new model as transcript sources are ingested.
- Cards that lack primary-source attribution will move to `raw/legacy/` until sources are recovered, or be archived.

## Next ingestion priorities
1. Lenny's Podcast — primary corpus, episode-by-episode transcripts.
2. Cross-domain operator essays (First Round, NfX, Stratechery, Ben Thompson, Patrick Collison, etc.).
3. Conference talks (SaaStr, Config, AI Engineer Summit).
4. Existing wiki + obsidian + commons substrate already on this machine — extract domain-agnostic insights only.

Anything client-specific stays out of codex by design.
