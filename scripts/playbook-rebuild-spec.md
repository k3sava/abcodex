# Playbook rebuild spec (canonical format)

You are rebuilding ONE playbook in the abcodex operator-insight library to match
the gold-reference playbook at `insight-library/playbooks/competitive/competitive-analysis.md`.
Read that reference file in full before you start. Your output must hit its bar.

## Why this exists

The playbooks were written 2026-05-01 and frozen. Since then ~500 new insight
cards have been ingested. Your rebuild must (a) match the canonical structure and
voice, and (b) weave in the relevant NEW insights so the playbook is current.

## Absolute rules (anti-fabrication — overrides everything)

1. Every `ins_…`, `pat_…`, `con_…` reference you write MUST already exist on disk.
   Verify each one: `ls insight-library/insights/<id>.md` (or grep). If it does not
   resolve, do not write it. NEVER invent an ID.
2. Every `> "quoted"` block must be copied verbatim from a real source: either the
   `## Evidence` block of an insight card, or the card's `raw_ref` file. Quote text
   is immutable — copy exactly, including any em dashes inside the quote. If you
   cannot find the exact words in a real file, do not add the quote.
3. Never invent metrics, dates, company names, or attributions. If a claim does not
   trace to a card or raw source, omit it.
4. Preserve any existing verbatim quotes in the current playbook (re-verify they
   trace to source; if one does not, drop it rather than keep an unverifiable quote).

## Voice rules

- Zero em dashes (—) anywhere EXCEPT inside `> "verbatim quote"` blocks. Use periods,
  commas, colons, or middots (·). The en dash (–) is fine in numeric ranges (5–10).
- Attribution style: `> · Operator Name, Source, Date` on its own line under the
  quote (middot, NOT `> — Name`). Convert any old `> — Name` attributions.
- Kill-list, never use: orchestration, seamless, strategic, leverage, transform,
  holistic, synergy, bespoke, unlock, robust, comprehensive, cutting-edge,
  innovative, paradigm, dive, delve, embark, journey.
- No throat-clearing openers ("It's worth noting", "Furthermore").
- Plain English. Gary Provost cadence: vary sentence length. Short. Then longer.
- Operator voice: someone who ran the play, not a consultant or an AI.

## Canonical structure

Frontmatter (keep existing id and captured_date; keep maintained_by/depth/domain):
```
---
id: pb_…                      # unchanged
title: <declarative sentence, already fixed — keep it, no em dash>
maintained_by: codex maintainers
captured_date: <unchanged>
depth: full
domain: [...]                 # keep, extend if clearly warranted
uses_cards: [ins_…, …]        # 5–12 REAL ids you actually reference in the body
uses_patterns: [pat_…, …]     # REAL pattern ids you reference
uses_contradictions: [con_…]  # REAL contradiction ids if relevant (may be omitted)
originating_operators: [slug, …]  # operator dir slugs (lowercase-hyphen), must exist
---
```

Body, in this order:
1. `# <title>` (matches frontmatter title exactly).
2. One or two opening sentences. State the quality bar of the artifact (what makes
   it good / when it succeeds), like the reference does.
3. `## When to use` — 3–5 bullets of concrete triggers.
4. `## How to use` — numbered steps as `### N. <instructive sentence header>`. The
   header is a full instruction, not a noun phrase. Each step is prose with inline
   `` `ins_…` `` / `` `pat_…` `` refs where a claim is backed by a card, plus
   `> "quote"` / `> · attribution` blocks for the strongest operator evidence, and
   markdown tables where a model/matrix helps. 6–12 steps typical.
5. `## Check your work` — checklist bullets a practitioner ticks before shipping.
6. `## What goes wrong` — bold-led failure modes, each with a `pat_`/`con_` ref
   where one applies.
7. `## What you get` — numbered list of the concrete deliverables/outputs.
   (A domain-specific synthesis section like the reference's `## Compare honestly`
   is encouraged where the topic has one natural framework; optional.)

## How to find real cards to cite (fixes staleness)

Your playbook's domain tags are given in your task. List candidate insights:
```
python3 -c "import json; d=json.load(open('insight-library/INDEX.json')); \
[print(i['id'],'|',i.get('captured_date'),'|',i.get('tier',''),'|',i.get('operator',''),'::',(open('insight-library/'+i['path']).read().split('# ',1)[1].split(chr(10))[0] if i.get('path') else '')) \
for i in d['insights'] if set(i.get('domain',[])) & {DOMAINS}]"
```
Prefer Tier A/B cards and cards captured AFTER 2026-05-01 (the new material). Open
the actual card file to read its claim + Evidence quote before citing it. Patterns
and contradictions: the full lists are in INDEX.json under `patterns`/`contradictions`.

## Self-check before you report DONE

Run and paste results:
1. Em dashes outside quotes: `grep -nv '^>' <file> | grep '—'` → should be empty
   (ignore en dashes –). Quote lines (`>`) may keep em dashes.
2. Every inline ref resolves:
   `for id in $(grep -oE 'ins_[a-z0-9-]+|pat_[a-z0-9-]+|con_[a-z0-9-]+' <file> | sort -u); do \
     ls insight-library/insights/$id.md insight-library/synthesis/patterns/$id.md \
        insight-library/synthesis/contradictions/$id.md >/dev/null 2>&1 || echo "MISSING $id"; done`
   → should print nothing.
3. originating_operators slugs exist: `ls insight-library/operators/<slug>` for each.
4. Title has no em dash; H1 == frontmatter title.

## Report format

Return: file rebuilt, # steps, list of ins_/pat_/con_ ids cited (with a note that
each was verified to exist), # of `> quote` blocks and that each was traced to
source, and the self-check results. Status: DONE / DONE_WITH_CONCERNS / BLOCKED.
