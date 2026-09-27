---
id: ins_tunguz-fat-middle-demand-distribution
operator: Tom Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/the-most-important-market-in-ai-is-the-middle/
source_type: essay
source_title: "The Most Important Market in AI Is the Middle"
source_date: 2026-09-23
captured_date: 2026-09-27
domain: [ai-native, founder-operator, strategy]
lifecycle: [strategy-bets, ai-workflow]
maturity: applied
artifact_class: metric-model
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_tunguz-sota-buyer-distribution, ins_tunguz-tier-segmentation-jevons, ins_tunguz-model-substitution-reinvestment]
raw_ref: ""
---

# AI intelligence demand follows a normal distribution, not a pyramid; mid-tier models dominate commercial spending because enterprise requirements are stable while AI costs fall exponentially

## Claim
The economic center of gravity in AI is not at the frontier. Mid-tier models capture 40% of enterprise spending and 30% of tokens because business requirements for "smart enough" AI are relatively stable while capability-per-dollar improves exponentially, pulling volume toward the tier that satisfies requirements at the lowest cost.

## Mechanism
Two curves move at different speeds. AI capability per dollar falls rapidly: a model delivering 77% of frontier performance can cost 2.5% of the frontier price. Enterprise workflow requirements for AI move slowly: a multi-step sales classification task, a document extraction workflow, or a customer-service routing job doesn't need to be better than "good enough." When the requirement is fixed and the cost of satisfying it keeps falling, the tier that satisfies it today becomes the standard choice and holds volume there. Frontier models capture the exploratory and high-stakes layer where requirements are still being defined. Mid-tier captures the production volume layer where requirements are set. This creates a normal distribution shape in revenue, not a pyramid.

## Conditions
Holds when: the AI task has a defined, stable requirement that a mid-tier model can satisfy. Production classification, extraction, summarization, and routing tasks fit this pattern. The cost gap between frontier and mid-tier is large enough (currently 10-40x per million tokens) to make tier selection economically significant.

Fails when: the task requires frontier-level reasoning or open-ended generation where no mid-tier model satisfies the requirement. Also fails when task volume is too low for cost differences to matter. Early-stage product development, where requirements are still shifting, will not show this pattern.

## Evidence
Tunguz documents spending data from September 2026:

> "Demand for intelligence is not a pyramid with a small, wealthy peak paying for everything beneath it. It is a normal distribution with a fat middle."

> "Intelligence costs keep plummeting. What enterprises demand from AI does not change nearly as fast."

> "Most business AI use is the messy middle: multi-step workflows that need a smart enough model at a price a company can afford."

Specific data:
- Claude Fable 5.1 captured only 3.7% of AI gateway spending in its first 12 days
- Mid-tier models claim 40% of enterprise spend and 30% of tokens
- Frontier model consumption fell from 53% of gateway volume (early August) to 45% (September 2026)
- Generic open-weight models run at an 86% discount to closed models
- Cursor achieved 86% cost reduction versus frontier baseline; Harvey cut costs 55%

## Signals
- Internal AI spend holds steady or falls while token volume grows, indicating production routing to mid-tier.
- Engineering conversations shift from "which frontier model" to "which tier satisfies our quality floor."
- Fine-tuning and open-weight model adoption accelerates as the cost-quality gap to frontier narrows.

## Counter-evidence
Gateway and OpenRouter data over-represent developer and API-native usage patterns. Enterprise procurement through cloud providers, which bundles volume discounts and compliance SLAs, may show higher frontier model share. The 40% spend figure for mid-tier is a snapshot; model release cycles compress fast enough that today's mid-tier becomes next quarter's value tier. The distribution shape could shift rapidly if frontier costs drop faster than mid-tier alternatives improve.

## Cross-references
- `ins_tunguz-sota-buyer-distribution`: Tunguz's August 2026 observation that 84% of tokens run on non-SOTA models. The September post extends that observation with a structural theory about why the distribution takes this shape.
- `ins_tunguz-tier-segmentation-jevons`: the supply-side mechanism; labs create tier segmentation to capture demand across quality bands.
- `ins_tunguz-model-substitution-reinvestment`: buyers switching to cheaper tiers reinvest savings in more tokens rather than returning budget.
