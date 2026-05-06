---
id: pb_humanizer
title: Humanizer — strip AI-writing tells from any draft
maintained_by: codex maintainers
captured_date: 2026-05-01
domain: [copywriting, ai-native-gtm, voice]
uses_cards: [ins_evals-are-data-analysis-on-llm-apps, ins_llm-as-judge-binary-not-likert]
originating_operators: []
secondary_sources:
  - flywheel/skills/humanizer/SKILL.md
  - flywheel/skills/voice-enforce/SKILL.md
  - flywheel/skills/voice-enforce-vale/SKILL.md
  - https://en.wikipedia.org/wiki/Wikipedia:WikiProject_AI_Cleanup
  - https://github.com/blader/humanizer
---

# Humanizer playbook

Audit any draft against the full anti-AI-writing canon, then rewrite the failing parts so the output reads like a sharp human typed it. Three-layer detection: rule packs (Vale) → semantic check → LLM rewrite. Single-pass operator workflow.

Source synthesis: Wikipedia WikiProject AI Cleanup field guide (rule-source-of-truth), blader/humanizer v2.5.1 (workflow + audit pattern), Cole Schaefer (Honey Copy sentence craft), Joanna Wiebe (Copyhackers conversion canon), per-claim factuality eval (Hamel + Shreya, `ins_evals-are-data-analysis-on-llm-apps`, `ins_llm-as-judge-binary-not-likert`).

## When to use

Any customer-facing draft before publish: LP, email, blog, content, ad, video script. Especially before any LLM-drafted content that the team will sign their name to.

## The 11 detection rule packs

| Rule pack | Severity | Source |
|---|---|---|
| KillList | error | operator-voice canon |
| WeakVerbs | warning | sentence craft |
| AbstractNouns | warning | conversion canon |
| ThroatClearing | error | operator-voice |
| Cliches | warning | AI-fingerprint canon |
| BannedVocabulary | error | brand voice DNA, dead AI vocabulary |
| NegativeParallelism | error (the big one) | the most common AI tell, "It's not X, it's Y" |
| MetaCommentary | error | "In conclusion," "It's worth noting that…" |
| ParticiplePhrases | warning | overused construction in AI prose |
| ChatbotArtifacts | error | "Certainly!", "Great question!", "I'd be happy to…" |
| CopulaAvoidance | warning | overuse of "to be" verbs |
| DeadPhrases | error | "delve," "unleash," "tapestry," "navigate the landscape" |

Negative parallelism is THE BIG ONE because every LLM produces it dozens of times per response. Detection alone catches the gap; humanizer closes it with a rewrite layer.

## Three layers

1. **Detection.** Vale rule packs flag every violation with line, match, severity, and fix hint.
2. **Semantic check.** LLM ingests surrounding paragraph + Vale finding + voice DNA principles → produces a single replacement sentence/clause that fixes the violation, preserves the underlying claim, matches the asset's voice. Non-destructive: writes to a sibling file for human review.
3. **Audit signature pass.** After detection + optional rewrite, ask the LLM the blader/humanizer audit question:
 > "What makes this obviously AI generated?"
 
 Record the answer. If it names new tells the rule packs missed, add them to the rule-pack queue. This is the auto-improvement loop.

## Output

- Per-violation table: rule × severity × line × match × why × fix-hint.
- Single-line summary: PASS / FAIL N errors M warnings.
- Sibling file `<asset>.humanized.md` with rewrites applied span by span (when rewrite flag is on).

## Exit codes

- 0, clean (warnings allowed unless strict).
- 1, error-level violations found.
- 2, file/tool not available.

## Composes with

- **Voice-enforce gate**, voice-enforce is the gate; humanizer is the editor that produces the rewrite.
- **CRO rubric**, distinct surface. CRO fails on structure; humanizer fails on voice.
- **Preflight**, humanizer is the strict superset of voice-enforce.

## Refusal patterns

- **Substrate gap.** If brand-voice canon is missing or stale, refuse to rewrite, would invent voice instead of inheriting it.
- Internal-spec asset (substrate, raw, intel), bypass automatically.
- Empty asset / non-markdown, exit 2 with explanation.

## Calibration

Track under taste-type "voice-enforcement" and "humanizer-rewrite." Brier signal: post-publish reader-detection rate. Look for low AI-detection rate on the published page.

## Common failure modes

- Rewriting without the brand-voice canon loaded → drift. The rewrite invents voice instead of inheriting it.
- Treating the rule packs as static. Every new model variant produces new tells; the audit-layer feedback loop must run.
- Auto-merging rewrites without human review.
- Running humanizer AFTER claim-verify. Run voice gates before truth gates so substrate-cited claims are not over-rewritten.
- Stopping at detection. Detection without rewrite leaves operators to fix by hand.

## Why this matters

Detection alone catches the gap. Without the rewrite layer, operators get a fail report and fix by hand, that is the gate's role, not the editor's. With the humanizer, the operator gets a draft + a reviewable rewrite in one pass. The compound is read-time-to-ship reduction.
