---
id: ins_tunguz-sota-buyer-distribution
operator: Tomasz Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/model-release-exhaustion/
source_type: essay
source_title: "Honestly, Who Buys SOTA?"
source_date: 2026-08-14
captured_date: 2026-08-15
domain: [ai-native, engineering]
lifecycle: [strategy, ai-workflow]
maturity: applied
artifact_class: metric-model
score: { originality: 3, specificity: 5, evidence: 4, transferability: 4, source: 5 }
tier: B
related: [ins_tunguz-tier-segmentation-jevons, ins_tunguz-model-substitution-reinvestment]
raw_ref: ""
---

# Enterprise AI workloads run overwhelmingly on non-frontier models because buyers optimize for price-over-performance, not benchmark scores

## Claim
Eighty-four percent of tokens on OpenRouter run on non-state-of-the-art models. The six models that generate the supermajority of that volume deliver 77% of frontier performance at 2.5% of Claude Fable 5's price. Most enterprise buyers have already settled on this price-over-performance tradeoff and are not waiting for the next frontier release.

## Mechanism
Frontier model releases improve benchmark scores every few months, but application teams are optimizing against a different objective. For production workloads, the relevant tradeoff is cost per task at acceptable quality, not maximum benchmark performance. A model delivering 77% of frontier capability at 2.5% of frontier cost resolves a different Pareto problem: how to handle a large volume of inference-bound tasks within budget. Frontier models capture the research and high-stakes judgment layer; commodity-grade models capture the production volume layer. These are separate markets. Labs racing to release SOTA every six weeks are generating diminishing incremental demand from the production application segment.

> "84% of tokens on OpenRouter are not state of the art."

> "Application deployment is the other story...They are optimizing against a different Pareto frontier, price over performance."

Tunguz also notes that adoption of the newest frontier model is slow even within a single provider: Fable 5 captured only 6% of Anthropic token volume and 11% of spend one month after launch.

## Conditions
Holds when: the workload is production inference at scale and task quality at the 77-percentile-of-frontier level is acceptable. Applies most directly to bulk classification, summarization, extraction, and generation tasks where human review does not catch every output.

Fails when: the task genuinely requires frontier-level reasoning, novel problem solving, or high-stakes outputs where quality differences between tiers translate directly into business risk.

## Evidence
OpenRouter token distribution data from the week of August 10, 2026:
- 84% of total token volume runs on non-SOTA models
- Six models account for approximately 80% of that volume
- Blended price for those six models: $0.50 per million tokens
- Claude Fable 5: $20 per million tokens (40x more expensive)
- Those six models deliver approximately 77% of frontier benchmark performance
- Fable 5 captured 6% of Anthropic token share and 11% of spend in its first month post-launch
- Best open-weight models scored 80% of frontier benchmarks by May 2026, up from 48% a year prior

## Signals
- Monthly AI inference cost holds steady or falls even as token volume grows, indicating production routing to cheaper tiers.
- Engineering discussions center on task-routing and model selection by cost tier rather than migration to the latest release.
- Internal benchmarks show sub-1% quality regression when switching from frontier to mid-market model on most production task types.

## Counter-evidence
OpenRouter reflects developer and API-native usage; enterprise contracts procured through cloud providers and direct relationships may show different distribution. Frontier model share may undercount use cases where privacy, compliance, or SLA requirements mandate a specific model. The 77% performance figure compresses across benchmark types; tasks that skew toward frontier-only capabilities (novel reasoning, long-horizon agents) will show larger quality gaps.

## Cross-references
- `ins_tunguz-tier-segmentation-jevons`: the supply-side version of this finding; labs create tier segmentation precisely to capture the demand Tunguz is observing here.
- `ins_tunguz-model-substitution-reinvestment`: buyers who switch to cheaper models reinvest savings in more tokens rather than returning budget.
