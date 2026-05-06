---
id: ins_use-new-tools-as-new-tools
operator: Benjamin Mann
operator_role: Co-founder, Anthropic
source_url: https://www.lennysnewsletter.com/p/anthropic-co-founder-benjamin-mann
source_type: podcast
source_title: The Economic Turing Test, mission over money, transformative AI
source_date: 2026-04-28
captured_date: 2026-05-01
domain: [ai-native, engineering, leadership]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 4, transferability: 5, source: 5 }
tier: A
related: [ins_economic-turing-test-for-ai, ins_dont-box-the-model-in]
raw_ref: raw/podcasts/benjamin-mann--economic-turing-test--2026-04-28.md
---

# Use new tools as new tools, not as old tools, be ambitious and retry from scratch

## Claim
Operators who use AI tools as upgraded versions of old tools (fancier autocomplete, slightly faster search) under-perform operators who treat them as new tools, pushing for ambitious, end-to-end outcomes and retrying from a clean prompt when stuck rather than iterating against broken context.

## Mechanism
LLMs degrade fast when context is polluted by failed attempts. Repeated retries against the same broken state stack errors. Starting fresh with an ambitious end-state goal ("build the whole thing") gives the model room to plan its own decomposition, which is often better than the operator's. The discipline is two-part: ambitious framing, plus the willingness to throw away and re-prompt.

## Conditions
Holds when:
- The operator can hold the ambitious end-state in mind without micromanaging.
- The cost of retry is low (a few minutes, a few tokens).
- The model is capable enough to handle the ambitious framing.

Fails when:
- Compliance or audit requires the original context preserved (legal review, regulated workflows).
- The operator does not yet have judgment to recognise pollution and reset.
- Retry costs are high (long-running jobs, expensive multi-tool chains).

## Evidence
> "People who use the new tools as if they were old tools tend to not succeed."

Specific pattern Mann names: Claude Code users who ask for ambitious changes and retry the prompt 3+ times outperform those who try once and bang on the same failure.

· Benjamin Mann on Lenny's Podcast, 2026-04-28

## Signals
- Team velocity per AI-fluent operator climbs sharply versus AI-skeptical or AI-incremental peers.
- Stuck operators ship a "throw away and start over" reset rather than nineteen iterative tweaks.
- Output quality improves with retries-from-scratch, not with retries-on-context.

## Counter-evidence
For some classes of debugging, preserving context is essential and resetting destroys hard-won state. The discipline is a heuristic, not an absolute.

## Cross-references
- `ins_economic-turing-test-for-ai`, same operator, the destination this discipline reaches
- `ins_dont-box-the-model-in`, Boris Cherny's architectural complement
