---
id: ins_tunguz-category-leaders-agent-infrastructure
operator: Tomasz Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://www.tomtunguz.com/a-winner-in-every-category/
source_type: essay
source_title: "A Winner in Every Category"
source_date: 2026-08-11
captured_date: 2026-08-16
domain: [growth-demand, ai-native]
lifecycle: [growth-loops, content-strategy]
maturity: applied
artifact_class: metric-model
score: { originality: 4, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_tunguz-sota-buyer-distribution]
raw_ref: ""
---

# Category leaders are trading on agent-infrastructure positioning, not AI feature announcements, which is why their revenue multiples diverge from the median software company

## Claim
Established category leaders (CrowdStrike at 3.9x, Cloudflare at 3.4x, Shopify at 8.1x revenue multiple) are outperforming the median software company because they have become unavoidable infrastructure for enterprise AI agent deployments, not because they added AI features to existing products.

## Mechanism
AI agents require trustworthy, structured external services to take actions in the world. A security agent must route through an endpoint protection layer. A commerce agent must route through a payments and storefront layer. A network automation agent must route through a traffic management layer. Companies that already own the category endpoint own the agent handshake by default.

Tunguz identifies the pattern directly in each case. CrowdStrike: "Every AI agent an enterprise deploys is a new endpoint to defend." Cloudflare: "More than half the traffic crossing its network is no longer human." Shopify: "Shopping agents send orders that convert new buyers at twice the rate of other channels."

The premium over median multiples reflects the market pricing in durability. The agent economy cannot route around these companies. Competitors who want to serve agent-driven enterprise workflows must integrate with them or rebuild category trust from zero. That structural position is what the multiple is tracking, not the AI feature releases that appear in the press coverage.

## Conditions
Holds when: the category leader owns the endpoint that agents must touch to complete their tasks (security telemetry, network routing, commerce checkout). The durability depends on no disintermediation layer appearing between the AI agent coordination stack and the category endpoint.

Fails when: a new agent coordination layer commoditizes the integration surface and abstracts away which category leader handles the underlying operation. Also fails if the category leader's core product erodes before the agent economy matures.

## Evidence
Tunguz's August 11 analysis cites revenue multiples and operational data for three category leaders:

- CrowdStrike: 3.9x revenue multiple. Positioning: endpoint security for every enterprise AI agent.
- Cloudflare: 3.4x revenue multiple. Operational signal: more than half of network traffic is now non-human.
- Shopify: 8.1x revenue multiple. Conversion signal: shopping agents convert new buyers at twice the rate of other channels.

The median software company multiple is not specified in the piece but the implied comparison is to the broad SaaS cohort, where Tunguz's earlier work established non-frontier price-performance as the dominant pressure.

> "Every AI agent an enterprise deploys is a new endpoint to defend."

> "More than half the traffic crossing its network is no longer human."

> "Shopping agents send orders that convert new buyers at twice the rate of other channels."

## Signals
- Enterprise software companies with category ownership see agent-driven integrations in their API traffic before the growth shows in headline metrics.
- Revenue multiples of category leaders diverge from SaaS median as agent adoption compounds.
- Sales cycles shorten for category leaders as procurement teams treating them as required infrastructure rather than optional tooling.

## Counter-evidence
The three companies Tunguz cites are highly selected. The analysis does not address category leaders who do not benefit from agent routing, nor does it identify the mechanism by which a non-leader in a given category could replicate the positioning. The 8.1x Shopify multiple may reflect e-commerce cyclicality rather than pure agent-infrastructure pricing. The Cloudflare non-human traffic figure includes bots and automated scrapers that predate the agent economy, making the agent-specific attribution imprecise.

## Cross-references
- `ins_tunguz-sota-buyer-distribution`: from the same operator, on how 84% of enterprise tokens bypass frontier models; the category-leader thesis explains who captures value when commodity models handle the bulk of inference.
