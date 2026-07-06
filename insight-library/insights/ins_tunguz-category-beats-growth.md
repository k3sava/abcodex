---
id: ins_tunguz-category-beats-growth
operator: Tomasz Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/cio-choices-clear-2026/
source_type: essay
source_title: "The CIO's Choices are Clear in 2026"
source_date: 2026-06-30
captured_date: 2026-07-06
domain: [ai-native, founder-operator, sales]
lifecycle: [strategy-bets, pricing]
maturity: frontier
artifact_class: metric-model
score: { originality: 4, specificity: 5, evidence: 5, transferability: 4, source: 4 }
tier: B
related: [ins_tunguz-compute-cost-inversion, ins_tunguz-model-substitution-reinvestment]
raw_ref: ""
---

# AI agent substitution for human seats is making product category, not growth rate, the primary determinant of SaaS market performance

## Claim
Across 87 public SaaS and platform companies, growth rate no longer predicts stock performance. Category does. Infrastructure and security companies are up 68% and 17% over one year while business applications with seat-based pricing are down 36%, despite all three groups posting similar revenue growth rates.

## Mechanism
AI agents are substituting for the human workers who generate demand for seat-licensed software. A company that once required 9,000 human seats for customer operations now runs 5,000 people and delegates the remaining volume to agents. The SaaS vendor holds a per-seat contract on a shrinking headcount. Renewal pressure compresses seat counts and multiples. Infrastructure that agents run on (compute, messaging, data querying, edge routing, security) is priced per consumption, not per seat. As agent activity grows, consumption-priced infrastructure revenue scales with it. The market is buying the token path and selling the headcount path.

## Conditions
Holds when: AI agents can substitute for the human workflows that generate seat demand; the SaaS product charges per seat rather than per outcome or per consumption.
Fails when: the SaaS product has a network effect that makes it more valuable as more human users participate; or when the product captures usage from the agents themselves through agent-native or consumption-based pricing.

## Evidence
Tunguz analyzed 87 public SaaS and platform companies. Sector stock returns over one year:
- Infrastructure and Dev Tools: +68.5% on 21.4% revenue growth, trading at 10.0x EV/Sales
- Security: +17.6% on 24.1% revenue growth, trading at 11.6x EV/Sales
- Business Applications: -36.2% on 12.5% revenue growth, trading at 3.4x EV/Sales

Agentforce now handles approximately 50% of Salesforce's own customer interactions. Marc Benioff, on Salesforce's internal headcount:

> "I've reduced it from 9,000 heads to about 5,000, because I need less heads."

Tunguz's synthesis of the pattern:

> "The market buys the AI stack and sells the seat-priced application layer."

## Signals
- Public SaaS companies with seat-based pricing trade at compressed multiples relative to peers with similar growth rates
- CIOs publicly discuss headcount reductions while sustaining or increasing throughput via agents
- DigitalOcean, Datadog, Palo Alto Networks, and Fortinet all outperform horizontal business applications by a wide margin

## Counter-evidence
Some seat-based applications embed network effects agents cannot replace. Collaborative tools where human participation generates the value (shared documents, discussion boards) do not face the same substitution pressure. The 36% decline in business applications may also partly reflect multiple compression from inflated pandemic-era valuations rather than pure agent substitution alone.

## Cross-references
- ins_tunguz-compute-cost-inversion: the cost-structure side of the same transition, where AI-native companies invert traditional compute-to-payroll ratios
- ins_tunguz-model-substitution-reinvestment: how token price declines sustain infrastructure demand through reinvestment effects
