---
id: ins_cohen-rice-confidence-framework-noise
operator: Jason Cohen
operator_role: Founder, WP Engine; writer at A Smart Bear
co_operators: []
source_url: https://longform.asmartbear.com/confidence/
source_type: essay
source_title: "Lost confidence"
source_date: 2026-06-21
captured_date: 2026-06-29
domain: [product-management, founder-operator-craft]
lifecycle: [strategy-bets, process-operating-cadence]
maturity: foundational
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 5 }
tier: B
related: [ins_wysiati-overconfidence]
raw_ref: ""
---

# RICE-style confidence scores are mathematically undefined and empirically uncorrelated with outcomes

## Claim
Confidence-based prioritization frameworks (RICE and equivalents) are not noisy inputs to good decisions; they are undefined inputs. Confidence cannot be consistently defined, measured, or validated, so weighting it makes prioritization worse, not better.

## Mechanism
Cohen identifies three independent failure modes, each sufficient on its own to break confidence-based scoring:

**Definitional failure.** What does "30% confidence" mean? To be meaningful, a confidence score requires historical calibration: tracking predicted confidence against actual outcomes across many projects. No team does this. Without calibration data, any number entered is an unconstrained estimate, indistinguishable from arbitrary.

**Empirical failure.** Projects consistently run over time and under-deliver impact regardless of the stated confidence at kickoff. Cohen's observation from building WP Engine to $100M ARR: the correlation between pre-project confidence and post-project outcome is effectively zero. The distribution of confident predictions overlaps completely with the distribution of unconfident ones in terms of success rates.

**Structural bias.** High-impact, high-uncertainty projects, the kind that might actually change trajectory, score low on confidence by construction. A framework that penalizes uncertainty systematically deprioritizes the projects with the most upside. The result is a portfolio biased toward incremental, predictable work.

## Conditions
Applies to any team using RICE, ICE, or similar frameworks where a confidence or probability-of-success multiplier is part of the scoring formula.

Does not apply when "confidence" is replaced by something measurable, such as the percentage of customers actively requesting a feature, or the technical feasibility estimated from a working prototype.

The alternatives Cohen proposes are designed for the condition he identifies: genuine Knightian uncertainty, where the future is unknowable rather than merely unpredictable. They include always-true features (valued by >51% of customers), quick discovery (SLC prototypes with dummy gates), asymmetric bets (bounded downside, large potential upside), and portfolio approaches for reliable incremental returns.

## Evidence
Cohen built and scaled WP Engine from zero to more than $100M ARR. From the essay:

> "Stop pretending you can quantify confidence, or even define it. Instead, use techniques that work whenever the future is unpredictable. Because it always is."

He presents the 2x2 of (high confidence / low confidence) × (succeeded / failed) and notes that experienced product managers have strong stories in all four cells. Confidence carries no predictive signal when the same score is associated with both strong and weak outcomes at similar rates.

## Signals
- Teams remove confidence from their scoring formula and report no measurable degradation in prioritization quality.
- Projects that were previously deprioritized due to low confidence scores are re-evaluated using asymmetric-bet or always-true criteria, and some prove high-value.
- Confidence-scored backlogs correlate with high predictability and low strategic impact over time.

## Counter-evidence
Some teams report that the act of discussing confidence during scoring sessions surfaces tacit disagreements about feasibility and market risk, even when the number itself is unreliable. The score functions as a forcing function for conversation, not as a data point.

For large, structured organizations with historical project data, limited confidence calibration may be possible, reducing (though not eliminating) the definitional problem. Forecasting researchers like Philip Tetlock argue that calibrated forecasters can develop meaningful probability estimates with training. Cohen's argument applies most sharply to teams without this infrastructure.

## Cross-references
- `ins_wysiati-overconfidence`: The WYSIATI pattern describes how teams construct confident narratives from incomplete information. Cohen's argument is the downstream consequence: the confidence number entered into RICE reflects narrative completeness, not actual probability.
