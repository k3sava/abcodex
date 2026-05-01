---
id: pb_pseo-framework
title: pSEO — programmatic pages without helpful-content nuking
maintained_by: codex maintainers
captured_date: 2026-05-01
domain: [seo, aeo, content]
uses_cards: [ins_ai-slop-loop, ins_ghost-citation-gap]
originating_operators: [lily-ray]
secondary_sources:
  - team-brain/workflows/pseo-framework.md
  - team-brain/workflows/keyword-research.md
  - team-brain/workflows/search-intent-map.md
---

# pSEO framework playbook

Programmatic SEO without getting nuked in the next Helpful Content update. The March 2024 Google update took out 95–98% of traffic for zero-oversight pSEO sites; hybrid sites with review-gated templates recovered within hours. The differentiator is human-in-the-loop, not scale.

Source synthesis: post-HCU forensics, Lily Ray on AI Overview substrate (`ins_ai-slop-loop`), the citation/mention gap (`ins_ghost-citation-gap`).

## Non-negotiable rule set

1. **Mandatory human edit pass** per generated page. No auto-publish.
2. **≥500 unique words** per page that are not template boilerplate.
3. **≥30% differentiation** between any two pages from the same template (measured on paragraph-level embedding distance).
4. **Monthly pruning.** Any pSEO page below N impressions after 90 days is noindexed or deleted.
5. **Weekly signal monitoring.** Search Console impressions + positions trend per template.

## Template structure

Each template lives in a directory with:

- `template.md` — skeleton with `{variable}` placeholders.
- `variables.csv` — the combinatorial variable set.
- `differentiation-rubric.md` — what makes pages non-duplicate.
- `review-checklist.md` — manual pass criteria.

## Build loop

```
template builder agent
  ↓ assemble variables + template + examples
  ↓ generate candidate page
  ↓ differentiation audit (embedding distance)
  ↓ human-value audit (does this answer a real question?)
template-publish gate (human approves the TEMPLATE, not each page)
  ↓ template unlocked for batch generation
seo writer → page instances with mandatory copy-reviewer pre-check
  ↓ sample review (1 in 10)
  ↓ final brand-voice check at template level
publish via LP builder or content-publish flow
```

## Safety gates

- **Template-level gate.** A reviewer approves the template after auditing 5 generated sample pages against the differentiation rubric and human-value test. Only after approval does the template unlock for volume generation.
- **Per-page sample gate.** 1 in 10 generated pages requires a human read before publish. Randomized sample, not deterministic — prevents gaming.
- **Post-publish watch.** Any template whose CTR or position regresses past a threshold gets flagged; investigate or kill.

## Common failure modes

- **Template drift into spam.** Same format, no real signal. Mitigation: human-value test at the template gate.
- **Cannibalization.** Two templates target overlapping SERPs. Mitigation: search-intent audit across all live templates before adding a new one.
- **Scaling without monitoring.** 10,000 pages, no oversight. Mitigation: weekly prune job + Search Console trends per template.
- **Boilerplate over 50%.** Differentiation drops, embedding distance fails the threshold.
- **Auto-publish.** Even one bad batch tanks domain trust under HCU.
- **Variable sets that produce empty pages.** "Best [tool] for [niche]" with zero data when the niche has no real evidence — page is filler.

## Quality gates

- Human approves every template.
- Every page over 500 unique non-boilerplate words.
- Differentiation ≥30% on embedding distance.
- 1-in-10 random page review before publish.
- Monthly prune of underperforming pages.
- Weekly Search Console trend review per template.

## What this connects to

- **Keyword research and search-intent map** upstream (avoid cannibalization).
- **Copy reviewer** for voice and claim validation.
- **AEO relevance engineering** for passages and schema on the long-tail.
