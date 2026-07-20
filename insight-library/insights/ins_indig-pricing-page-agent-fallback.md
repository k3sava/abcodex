---
id: ins_indig-pricing-page-agent-fallback
operator: Kevin Indig
operator_role: Founder, Growth Memo; growth advisor
co_operators: []
source_url: https://www.growth-memo.com/p/where-ai-agents-get-stuck-on-your
source_type: essay
source_title: "Where AI agents get stuck on your site"
source_date: 2026-07-13
captured_date: 2026-07-20
domain: [growth-demand, aeo-llm-search, gtm]
lifecycle: [strategy, aeo]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 5, evidence: 4, transferability: 5, source: 3 }
tier: B
related: [ins_indig-benchmark-citation-structure, ins_indig-engine-fragmentation]
raw_ref: ""
---

# B2B pricing pages are where AI agent retrieval breaks down and third-party directories take over vendor narratives

## Claim
When AI agents research B2B vendors without provided starting links, pricing pages are where first-party retrieval fails. Three failure modes drive agents from vendor-owned content to third-party sources outside vendor control.

## Mechanism
Indig ran 1,500 agent runs across 100 B2B products on three buyer tasks: pricing and features, integrations, and security and compliance. Integrations returned 93% first-party answer rates. Security returned 92%. Pricing came back at 79%. The gap traces to three failure modes. Opacity: vendors don't publish numeric prices, so agents have nothing to retrieve. Machine-unreadability: prices exist but sit inside PDFs, JavaScript calculators, or form-gated pages agents cannot parse. Access friction: bot-blocking, rate limits, or login walls.

When any of these fires, the agent falls back. Pricing triggered 77% of all third-party citations across the study versus near-zero for integrations and security.

The access friction finding is the sharpest signal. Access errors appeared in only 7% of runs overall. When they did, third-party citation rate jumped from 17% to 77%. Blocking agents from a pricing page nearly quintuples the probability that a buyer encounters that vendor's pricing through a competitor-controlled directory.

> "AI agents turn websites from showrooms into barcodes."

## Conditions
Holds when: the agent is performing vendor research with no provided starting links, forced to locate official sites independently. The failure modes stack: each one independently triggers fallback.

Fails when: the buyer hands the agent a direct URL, bypassing the retrieval step entirely.

## Evidence
1,500 agent runs across 100 B2B products. 5 runs per product per task. Results:

- Pricing/features: 79% first-party answer rate, 84% first-party citation share
- Integrations: 93% answer rate, 99% citation share
- Security/compliance: 92% answer rate, 99% citation share
- Access errors in 7% of runs; third-party fallback with errors: 77% vs. 17% without
- Pricing generated 77% of all 580 third-party citations across categories
- Third-party citation breakdown: editorial 52%, directories (G2, Capterra, Vendr) 46%, ecosystem 2%

## Signals
- Pricing queries in your category return competitor directories before your own pricing page.
- Your G2 or Capterra listing appears in AI answers ahead of your owned content.
- Agent runs on your pricing page return access errors or fall back to estimation.

## Counter-evidence
The study covers B2B software and services, skewed toward SaaS-style pricing structures. Hardware, professional services, and categories with legitimately complex custom pricing may show different fallback dynamics. The study does not measure whether third-party citations lead to worse conversion outcomes for vendors. Some buyer contexts expect third-party validation over first-party claims; the fallback may be a feature, not a failure, for certain categories.

## Cross-references
- `ins_indig-benchmark-citation-structure`: Indig's finding that citation weight goes to pages structured as buying comparisons. The third-party directories capturing pricing fallback are already structured this way, which compounds the advantage.
- `ins_indig-engine-fragmentation`: fragmentation across AI retrieval engines compounds the pricing fallback problem across surfaces.
