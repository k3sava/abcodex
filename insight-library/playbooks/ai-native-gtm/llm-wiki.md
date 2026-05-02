---
id: pb_llm-wiki
title: LLM wiki — persistent knowledge substrate for AI agents
maintained_by: codex maintainers
captured_date: 2026-05-01
domain: [ai-native-gtm, knowledge, substrate]
uses_cards: [ins_llm-wiki-pattern, ins_bottleneck-is-context-not-capability, ins_llms-are-new-os-agents-are-apps]
originating_operators: [andrej-karpathy]
secondary_sources:
  - team-brain/workflows/llm-wiki.md
  - team-brain/workflows/self-evolution.md
---

# LLM wiki playbook

A method for giving AI agents durable, cross-session memory through a structured wiki the agent maintains. Adapted from Andrej Karpathy's LLM wiki pattern (`ins_llm-wiki-pattern`). The wiki is the brain. The agent is the programmer. Markdown editor is the IDE.

Why: AI agents lose context between sessions. Memory files help but are shallow (key-value recall). A wiki is deeper — it synthesizes, cross-references, and evolves. The agent reads the wiki at session start, works with compressed context instead of re-deriving state, and writes back what it learns. This addresses `ins_bottleneck-is-context-not-capability`: when the agent isn't doing what you want, fix the context.

## Three layers

1. **Raw sources (`raw/`).** Immutable, append-only. LinkedIn posts, articles, podcasts, screenshots, recruiter emails. One file per artifact. Attribution in frontmatter. Never edited after creation.
   - `raw/articles/` — blog posts, essays, gists
   - `raw/linkedin-posts/`
   - `raw/podcasts/` — transcripts, chapter notes
   - `raw/assets/` — images, screenshots, PDFs
2. **Synthesis wiki (everything else).** Agent-maintained. Projects, people, companies, concepts, decisions, tools. Each page is live. Stubs are fine. "Unknown" is a legal value.
3. **Schema (`CLAUDE.md` constitution).** Small, stable, rarely edited. Defines page frontmatter, operations, rules. Every agent reads this first.

## Four operations

1. **INGEST.** Source → `raw/{subdir}/{slug}.md` with frontmatter → stub a wiki page if warranted → append to `log.md`.
2. **QUERY.** Read `index.md` (catalog) → read 1–3 relevant pages → extract, cite paths. If the answer isn't there, say so. Do not fabricate.
3. **LINT.** Walk every page. Check for orphans, contradictions, stale claims, missing pages, naming drift, schema violations, index mismatches. Write findings. Fix high-impact in place. Leave low-impact documented.
4. **INDEX + LOG.** `index.md` is the content catalog (one line per page, under 200 lines). `log.md` is the chronological append-only timeline.

## Setup

1. **Directory.** `wiki/` with `CLAUDE.md`, `system-prompt.md`, `index.md`, `log.md`, `README.md`, plus `raw/`, `projects/`, `concepts/`, `decisions/`, `people/`, `companies/`, `tools/`, `lint/`.
2. **Schema (`CLAUDE.md`).** Page frontmatter format, four operations, domain-specific rules (anti-fab, voice, confidentiality), integration points, change protocol.
3. **Agent distillation (`system-prompt.md`).** Compressed (~50–80 lines). What gets `@`-imported into your CLAUDE.md so the agent loads it at session start without burning context on the full constitution.
4. **Wire into sessions.** Add `@/path/to/wiki/system-prompt.md` and `@/path/to/wiki/index.md` to `~/CLAUDE.md`. These imports expand inline at session start.
5. **Seed initial pages.** Start with what you reference most. Stubs are fine. The agent fills in as it works.
6. **Optional: register as Obsidian vault** with attachment folder → `raw/assets/`, graph color groups by path, backlinks enabled.

## Greppable log format

```
## YYYY-MM-DD

- [harness] kind | subject — short description
```

Harness = which agent/tool wrote this. Kind ∈ {ingest, query, lint, decision, ship, correction, upgrade, debrief, observation}. Subject = short noun phrase matching a wiki page name.

Enables: `grep "[harness]" log.md`, `grep "| decision |" log.md`.

## Page frontmatter

```yaml
title:
type: person | company | project | concept | decision | tool | raw
status: active | paused | archived | stub
last_updated: YYYY-MM-DD
related: [other-page.md]
domain: <tags>
```

## Anti-fabrication rules

- Every claim traces to `raw/`, memory, code, or the operator's own words.
- If a claim does not trace, write "unverified" and stop.
- Tag metrics with attribution tier (verified / self-reported / contextual / indirect / direct).
- Don't re-read pages already read this session. Grep before bulk reads.

## Common failure modes

- Treating raw/ as editable. Raw is append-only.
- Index.md balloons past 200 lines.
- Lint passes that fix nothing — file findings, fix high-impact, document low-impact.
- "Just in case" bulk reads burning context.
- Agent rewriting page sections it did not mean to touch — read before write.
- Synthesis pages mirroring raw/ verbatim. Synthesis is compression + cross-reference, not transcription.

## Integration points

- LLM agents (Claude Code, codex, cursor) load schema + index at session start.
- Personal memory (short, dense) links to wiki — do not duplicate.
- Web/API layer can serve wiki via routes for cross-machine access.
- Any link the agent encounters can be ingested into raw/ and stubbed in synthesis.
