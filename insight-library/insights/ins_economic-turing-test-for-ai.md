---
id: ins_economic-turing-test-for-ai
operator: Benjamin Mann
operator_role: Co-founder, Anthropic; tech lead product engineering; ex-OpenAI GPT-3 architect
source_url: https://www.lennysnewsletter.com/p/anthropic-co-founder-benjamin-mann
source_type: podcast
source_title: The Economic Turing Test, mission over money, transformative AI
source_date: 2026-04-28
captured_date: 2026-05-01
domain: [ai-native, strategy-bets, gtm]
lifecycle: [strategy-bets, attribution-measurement]
maturity: frontier
artifact_class: metric-model
score: { originality: 5, specificity: 5, evidence: 4, transferability: 5, source: 5 }
tier: A
related: [ins_use-new-tools-as-new-tools, ins_dont-box-the-model-in]
raw_ref: raw/podcasts/benjamin-mann--economic-turing-test--2026-04-28.md
---

# The Economic Turing Test — would you hire the agent if you didn't know it was a machine?

## Claim
The right benchmark for "is this AI system transformative?" is not a generic capability test but the Economic Turing Test: contract an agent for one to three months on a specific job; if you would hire it back, having believed it was a person, it has passed for that role. Aggregate to a money-weighted basket of jobs and call 50% the threshold for transformative AI.

## Mechanism
Generic AGI debates are unfalsifiable. The Economic Turing Test grounds the question in revealed-preference: would a real buyer pay a real wage for the agent's output, blind to its origin? The answer is per-role and per-workstream, which makes it actionable for product teams. It also re-orders the conversation from "is the model smart enough?" to "for which specific workstream does this agent already pass?" — a question with concrete answers and concrete economic stakes.

## Conditions
Holds when:
- The role has a market-clearing wage for human labor (a contractor benchmark exists).
- The work product is evaluable by the buyer over a meaningful time window.
- The buyer is willing to evaluate honestly rather than pattern-match on origin.

Fails when:
- The role is so novel there is no contractor benchmark.
- Evaluation is cheap to game (one-shot tasks the agent can fake at the surface but not maintain).
- The buyer's bias against AI overrides their own commercial judgment.

## Evidence
> "If you contract an agent for a month or three months on a particular job, if you decide to hire that agent and it turns out to be a machine rather than a person, then it's passed the Economic Turing Test for that role."

Reference points Mann anchors against: Fin/Intercom resolves 82% of customer-service tickets fully automated; the remaining 18% is genuinely harder. Anthropic's own engineering reports 95% of Claude Code's code is written by Claude with 10–20x output multiplier.

— Benjamin Mann on Lenny's Podcast, 2026-04-28

## Signals
- Specific workstreams cross the threshold and become "agent-default" with humans on review.
- Money-weighted percentage of agent-passable workstreams climbs over quarters.
- Pricing conversations shift from per-seat to per-outcome (ties into Bret Taylor's outcomes-based pricing thesis).

## Counter-evidence
The test isolates economic substitution but ignores trust, legal exposure, and failure-mode novelty. An agent might pass the test for ninety days and then produce a catastrophic compounding error a human would not. Aggregation to a 50% threshold for "transformative AI" is provocative but arbitrary; reasonable operators can disagree about the right denominator and weighting.

## Cross-references
- `ins_use-new-tools-as-new-tools` — the operator-side complement
- `ins_dont-box-the-model-in` — the architectural prerequisite for passing the test at scale
