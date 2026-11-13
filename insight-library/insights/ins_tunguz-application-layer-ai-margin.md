---
id: ins_tunguz-application-layer-ai-margin
operator: Tom Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/who-captures-the-most-margin-in-ai/
source_type: essay
source_title: "Who Captures the Most Margin in AI?"
source_date: 2026-11-11
captured_date: 2026-11-13
domain: [ai-native, pricing, founder-operator]
lifecycle: [pricing-packaging, strategy-bets]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_tunguz-harness-layer-margin-engine, ins_tunguz-thin-wrapper-feature-absorption]
raw_ref: ""
---

# Application companies capture the largest share of AI gross profit because ROI-based pricing protects them from compute cost pressure

## Claim
At a 40% gross margin, application companies capture roughly 40% of AI value-stack gross profit, outpacing neoclouds (28%) and inference vendors (24%), because they price on delivered business outcome rather than commodity compute.

## Mechanism
Every layer in the AI stack sells a different unit. Power sells kilowatts. Data centers sell rack capacity. Neoclouds sell GPU-hours. Inference vendors sell tokens. Application companies sell outcomes. When an application can point to a 70% cost saving or a 30% revenue increase, it commands a price disconnected from raw compute cost. This insulates application margin from upstream price moves: if inference costs double, an application that saves customers $10M can still charge $3M, while inference vendors must compete on pure cost. The same dynamics that made SaaS defensible against infrastructure commoditization apply here. Vertical integration further stabilizes margin by letting one entity absorb price pressure across layers instead of passing it in both directions.

## Conditions
Holds when: the application delivers measurable, attributable business outcomes; customers can verify ROI; the application layer is not trivially replaceable by a model that absorbs its core feature.
Fails when: the application has thin differentiation (the "thin wrapper" problem); a new model ships a built-in capability that makes the application redundant; compute costs fall faster than application pricing adjusts upward.

## Evidence
Tunguz converts each layer's pricing to a common unit of dollars per watt per year. Source data: CoreWeave Q3 2026 annualized revenue implies $9.15/w/yr; Anthropic's S-1/A reports short-term burst compute at $13/GPU-hr; CBRE's 10MW+ wholesale rate is $1.98/w/yr; Core Scientific filings imply $0.75-0.80/w/yr in electricity cost. After hardware depreciation, Tunguz estimates neocloud gross profit at $0-2/w/yr at today's blended contract rates. His model distributes the pool: power 3%, data centers 5%, inference vendors 24%, neoclouds 28%, applications 40%.

## Signals
- Application gross margin is stable or rising while inference provider margins compress.
- Enterprise buyers pay a price premium above pure inference cost that scales with their reported ROI, not with model compute cost.
- Vertically integrated AI providers (those who run their own inference and applications) report higher blended gross margins than pure-play infrastructure vendors.

## Counter-evidence
Tunguz's model is built on approximations, not audited per-layer disclosures. His assumptions include PUE, rack power density, billing utilization, and cache hit rates, all of which vary. The "thin wrapper" risk is real: if a frontier model absorbs the application's core capability, the pricing power collapses regardless of the layer economics model. The 40% application margin also assumes customers accept outcome-based pricing, which many enterprise procurement processes resist.

## Cross-references
- `ins_tunguz-harness-layer-margin-engine`: Tunguz's earlier finding that input context drives 85.7-98.2% of tokens, making harness design the primary cost lever inside the application layer.
- `ins_tunguz-thin-wrapper-feature-absorption`: The thin wrapper failure mode that cancels application margin when a model absorbs the core feature.
