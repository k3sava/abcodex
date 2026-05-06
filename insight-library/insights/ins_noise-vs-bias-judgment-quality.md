---
id: ins_noise-vs-bias-judgment-quality
operator: Daniel Kahneman
operator_role: Nobel laureate; Princeton emeritus; co-founder of behavioral economics
source_url: https://en.wikipedia.org/wiki/Noise:_A_Flaw_in_Human_Judgment
source_type: book
source_title: "Noise: A Flaw in Human Judgment"
source_date: 2021-05-18
captured_date: 2026-05-05
domain: [leadership, strategy, research-discovery]
lifecycle: [risk-quality, hiring-team-design, strategy-bets]
maturity: foundational
artifact_class: framework
score: { originality: 5, specificity: 5, evidence: 5, transferability: 5, source: 5 }
tier: A
related: [ins_system1-system2-thinking, ins_wysiati-overconfidence]
raw_ref: raw/expert-content/experts/daniel-kahneman.md
---

# Noise is at least as damaging as bias, and most orgs have no instrument to even see it

## Claim
Bias is the average error across many judgments, a systematic skew. Noise is the unwanted variability between judgments that should be identical: two interviewers rating the same candidate differently, two PMMs scoring the same launch, two doctors diagnosing the same patient. Noise is at least as damaging as bias, far more underappreciated, and invisible without measurement.

## Mechanism
Decision quality has two failure modes. Bias is consistent error in one direction, easier to spot because patterns appear across many decisions. Noise is *unstructured* error, it cancels in the average, which is why org-level metrics make it look like nothing is wrong. Two PMs presented with the same competitive intel will write different positioning recs not because either is biased, but because mood, recent context, anchoring, and order-of-evidence-encountered shift each rater independently. The fix is structural: independent written ratings before group discussion, rubric-based scoring, mechanical aggregation, and noise-audits that measure inter-rater variance directly.

## Conditions
Holds when:
- Judgments are subjective and made by multiple people across an org (hiring, performance review, deal qualification, launch readiness).
- The judgments feel "qualitative" enough that people resist standardising them.
- Disagreements are rationalised individually ("we just had different reads") rather than measured systematically.

Fails when:
- The judgment is fully formulaic (price = cost × markup), no human variability to add noise.
- Genuine expert intuition in pattern-rich domains where structured rubrics destroy more value than they save (Klein-style RPD).
- Standardisation cost exceeds the cost of the noise (low-stakes high-frequency calls).

## Evidence
> "Bias is the average error across many judgments (always too high or too low), but noise is the unwanted variability in judgments that should be identical."

> "noise is at least as damaging as bias and far more underappreciated"

· see `raw/expert-content/experts/daniel-kahneman.md` lines 16, 18.

## Signals
- A "noise audit" runs on a critical decision class, give 6 raters the same case, measure variance.
- Hiring rubrics fixed before each candidate; raters submit independent scores before the debrief.
- Forecasts include both a point estimate and an inter-rater spread, treated as a quality signal.

## Counter-evidence
Standardisation can flatten edge cases that experts would correctly handle as exceptions, the rubric becomes a ceiling on quality, not a floor. Gary Klein's *Sources of Power* argues that in pattern-rich expert domains (firefighters, ER doctors), the noise is *correct* because the experts are integrating cues a rubric cannot capture. Noise reduction is therefore a means to a quality end, not a quality goal in itself.

## Cross-references
- `ins_system1-system2-thinking`, System 1 produces both bias and noise; structured process addresses both but via different mechanisms.
- `ins_wysiati-overconfidence`, WYSIATI explains why noise is invisible: each individual rater is confident their judgment is the right one.
