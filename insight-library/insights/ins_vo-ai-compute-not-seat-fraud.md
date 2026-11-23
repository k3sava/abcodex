---
id: ins_vo-ai-compute-not-seat-fraud
operator: Claire Vo
operator_role: Founder and CEO, ChatPRD
co_operators: []
source_url: https://www.chatprd.ai/how-i-ai/token-fraud-is-eating-ai-margins-here-s-how-claire-vo-is-fighting-it
source_type: essay
source_title: "Token Fraud Is Eating AI Margins"
source_date: 2026-11-16
captured_date: 2026-11-23
domain: [ai-native, founder-operator]
lifecycle: [pricing-packaging, product]
maturity: applied
artifact_class: case-study
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 4 }
tier: B
related: []
raw_ref: ""
---

# AI products sell compute, not seats. Fraudsters optimize for maximum token consumption per request. Request-count rate limits do not stop this. Dollar-based spend caps do.

## Claim
AI products face a fraud model that SaaS products do not: attackers gain authorized access via trials or promo codes and consume inference budget at cost. Every fraudulent model call is a real line item. Defenses must move from authentication controls to spend-rate controls at the model and billing layer.

## Mechanism
Traditional SaaS fraud seeks unauthorized access to data or features. The product's cost of serving a fraudster is near-zero. The attacker gets something the company sells; the company pays almost nothing.

AI product fraud works differently. The attacker gets authorized access, often for free, and uses it to call expensive models at high token counts. The company pays the inference cost per call. Access restrictions, rate limits, and CAPTCHA solve the wrong problem because the attacker is authorized.

> "If you sell AI, you sell compute."

> "Count dollars, not requests."

Vo identified six distinct attack patterns at ChatPRD:

1. Trial farming. Creating multiple accounts to extend free compute access.
2. Promo-code resale. Obtaining promotional credits and selling access to others.
3. Card abuse. Using stolen or low-balance cards to pass initial payment checks before charges process.
4. Relay traffic tunneling. Routing third-party traffic through the product's API to resell access.
5. MCP worker creation. Programmatic account creation for autonomous agents consuming compute continuously. One MCP worker, when probed, stated:

> "I'm never sleeping."

6. Model probing. Using the product as a free inference layer to test model capabilities and pricing.

Vo's response, applied after losses reached tens of thousands of dollars over approximately one year:

Shut off free trials. No free access removes the entry point for most of patterns 1, 3, and 5.

Dollar-based spend caps per period, not request counts. A fraudster optimizing for maximum token consumption will stay under request-count limits while blowing through dollar caps because high-token requests count the same as low-token requests.

Model allowlist in application code, not via API. This prevents relay traffic from accessing models the application does not expose.

Country and IP blocking via edge firewall (Vo used Vercel Firewall). Vo found that a large fraction of fraud originated from known high-fraud regions.

Hourly automated review of signups and unusual thread patterns, with auto-bans at high-confidence thresholds.

A silent downgrade to cheaper models for suspected fraud, before a full ban, reduces costs while the confidence threshold accumulates.

## Conditions
Holds when: the product offers AI-powered features where model calls constitute a material operating cost, and the product has a free tier, trials, or promo codes that provide authorized access to those calls.

Fails when: inference costs are negligible relative to other operating costs; the product has no open access mechanisms; or the user base is small enough that manual review is sufficient.

## Evidence
Vo published this case study on the ChatPRD blog and "How I AI" newsletter on November 16, 2026. Direct financial impact: fraud cost ChatPRD tens of thousands of dollars in inference costs over approximately one year. Card-testing fraud: $200,000 in attempted purchases detected via Stripe Radar. Stripe CEO estimate (cited by Vo): as many as 1 in 6 new signups to AI firms are fraudsters.

## Signals
- Inference costs are growing faster than user count or feature adoption.
- A small number of accounts account for a disproportionate share of model calls.
- Stripe or payment processor flags a surge in declined cards on initial charges.
- Thread patterns show unusually high token counts for queries that do not require them.

## Counter-evidence
Shutting off free trials trades fraud prevention for conversion. For products where trials are the primary acquisition channel, this cost may exceed the fraud loss. Country and IP blocking introduces false positives and may exclude legitimate users. Automated ban systems at high confidence still produce errors; Vo does not report false-positive rates.

## Cross-references
- (none in current corpus)
