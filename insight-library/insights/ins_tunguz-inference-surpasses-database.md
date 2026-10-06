---
id: ins_tunguz-inference-surpasses-database
operator: Tomasz Tunguz
operator_role: Founder and General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/inference-is-the-most-important-market-in-software/
source_type: essay
source_title: "Inference Is the Most Important Market in Software"
source_date: 2026-10-05
captured_date: 2026-10-06
domain: [ai-native, founder-operator, engineering]
lifecycle: [strategy, pricing-and-packaging]
maturity: frontier
artifact_class: metric-model
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 5 }
tier: B
related: [ins_tunguz-inference-pricing-value-beats-cost-plus, ins_tunguz-inference-stack-fragmentation]
raw_ref: ""
---

# AI inference will pass the database market in 2027 while compressing gross margins below the SaaS norm

## Claim
AI inference spending is growing from $25B (2025) to roughly $350B (2027) as token costs fall ~47% per quarter, and the resulting infrastructure costs push AI application gross margins below the 72% floor that classic SaaS achieves.

## Mechanism
Capability-adjusted token prices fall fast and consistently, driven by model efficiency gains, new architectures, and competitive resets (frontier prices fell from $11.25 to $4.00 after GPT-6 Sol). Volume grows faster than price falls. The result: inference is no longer a rounding error in COGS. It is the dominant cost line, routinely exceeding 50% of COGS for AI-native applications. Classic SaaS achieves ~72% gross margins partly because its infrastructure costs are small and predictable. AI applications built on inference cannot match that structure at equivalent revenue scale. The margin compression is structural, not a startup-phase inefficiency.

## Conditions
Holds when: the product is inference-heavy (AI-generated answers, real-time reasoning, per-request compute); the company competes on capability rather than workflow lock-in.
Fails when: the company has negotiated reserved capacity at fixed cost; when the product's AI use is thin (a feature, not the core loop); when durable model IP shields margins from commodity pricing.

## Evidence
Tunguz projects the inference market at roughly $130B in 2026, approaching Gartner's $161B database forecast, and at roughly $350B in 2027, nearly 2x the projected $190B database market. Token prices at the frontier peaked at $11.25, reset to $4.00 after a single major release.

> "Infrastructure costs are suddenly a significant contributor to overall COGS, & potentially more than half"

AWS launched spending limits in September 2026. Google Cloud introduced Spend Caps in July 2026. Both are direct responses to the budget exposure inference workloads create.

## Signals
- Gross margin below 65% on an AI-native product despite high ARR growth
- Infrastructure line items displacing engineering labor as the largest cost category
- Customers asking about bring-your-own-key (BYOK) options to capture margin on lower revenue

## Counter-evidence
BYOK shifts cost to the customer and preserves the vendor's margin percentage, though at lower absolute revenue. Some AI applications that route to smaller, cheaper models for routine tasks may hold margins near the SaaS norm. Token prices could stabilize or reverse if model training costs stop falling, interrupting the compression dynamic.

## Cross-references
- `ins_tunguz-inference-pricing-value-beats-cost-plus`: the earlier June 2026 piece on inference pricing strategy. The October piece quantifies the market-level stakes behind that pricing choice.
- `ins_tunguz-inference-stack-fragmentation`: fragmentation across inference providers creates routing opportunities that could partially offset margin compression.
