# Daily additions log

One file per day in this directory. Each file is the entry point for "what landed in the corpus today" — the SPA reads the latest one, the README hello bar links to it, and `latest.json` carries its metadata for any downstream agent.

## File contract

```
insight-library/daily/YYYY-MM-DD.md
```

Frontmatter (required):

```yaml
---
date: YYYY-MM-DD                  # used for sort + display
title: One-sentence headline      # e.g. "Trace + feedback, judgement as bottleneck, pricing as product"
summary: 1-3 sentences            # rendered in the hello bar and README
sources:                          # where the insights came from (digest names, podcast titles, etc.)
  - source name
insights_added:                   # ids that were newly created today
  - ins_<slug>
operators_added:                  # operator slugs new to the corpus
  - <slug>
patterns_added: []                # synthesis pattern ids
playbooks_added: []               # playbook ids
---
```

Body: a short narrative grouping the day's adds by theme. Cross-link to the new cards by relative path, e.g. `[ins_traces-need-feedback-to-learn](insights/ins_traces-need-feedback-to-learn.md)`.

## Daily ingest workflow

1. Add the day's new insight cards under `insights/`, operator profiles under `operators/<slug>/README.md`, patterns under `synthesis/patterns/`, etc. Each follows its existing schema (see `00_meta/insight-card-schema.md`).
2. Update existing operator READMEs to list any new cards under their **Cards** section.
3. Write the daily entry: `daily/YYYY-MM-DD.md` with frontmatter + narrative body.
4. Run `node scripts/build-index.mjs` from the repo root.

The build script:
- Regenerates `INDEX.md` and `INDEX.json`.
- Writes `latest.json` (newest entry + most recent 30 daily entries) for cheap fetch from the SPA.
- Splices the latest summary into README.md between `<!-- LATEST:START --> ... <!-- LATEST:END -->`.
- Splices fresh corpus counts into README.md between `<!-- COUNTS:START --> ... <!-- COUNTS:END -->`.

5. Commit and push. The Pages workflow rebuilds and the SPA hello bar updates.

## Every named operator gets a profile

When ingesting a source, list **every** named human operator in it — primary author and co-authors. Each one gets:

1. An operator profile under `operators/<slug>/README.md` (or update the existing one).
2. The card's `operator` frontmatter field for the primary author.
3. A `co_operators: [Name1, Name2]` frontmatter field on the card for any additional named co-authors.

The build script and the SPA both surface `co_operators` so co-authors appear in the byline on the insight page and in the cards list on each operator's profile page. Skipping co-authors silently undercredits people who shipped the work.

The same rule applies to multi-operator convergences: the synthesis pattern card in `synthesis/patterns/` lists each operator and the card the convergence draws on. Don't bundle three operators' work into one card under one name.

For podcast guests / talk-show interviewees who are quoted but not the host: include them in the `Evidence` section with a clear attribution. Only create an operator profile if they ship original work elsewhere; if they're a one-off voice, the body credit is enough.

## Anti-fabrication rules still apply

Every card needs a verifiable source URL and date. If you only have a paraphrase, write `source_url` to the operator's publication root and put the precise pub date in the body — do not invent a slug. If the date is uncertain, mark `source_date: unknown`.
