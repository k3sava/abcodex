---
id: ins_tunguz-agent-checkout-upsell-bypass
operator: Tom Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/no-shirt-no-shoes-no-service-for-bots/
source_type: essay
source_title: "No Shirt, No Shoes, No Service for Bots"
source_date: 2026-11-13
captured_date: 2026-11-16
domain: [ai-native, founder-operator]
lifecycle: [strategy-bets]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_tunguz-reimagination-beats-efficiency, ins_tunguz-nvidia-ai-central-bank]
raw_ref: ""
---

# Retailers block AI shopping agents because base products are priced near cost and profit lives in the upsell stack agents bypass

## Claim
Major retailers block AI shopping agents not to protect user experience, but because agent-led checkout bypasses the ads, upgrades, and fees that generate their actual profit margin.

## Mechanism
In most consumer retail, the base product is priced near cost to drive volume. Profit concentrates in the add-on layer: advertising placements, seat upgrades, warranty plans, credit-card fees, service contracts. Human checkout flows surface these upsells at the moment of purchase. AI agents skip them. The agent selects the item, completes the transaction, and returns control to the user, never encountering the upsell prompt. Amazon's advertising business generates roughly $68.6B at approximately 50% gross margin, an amount equal to its entire non-AWS operating income. United Airlines' seat upgrades, bag fees, and co-brand card and insurance fees total roughly $8.0B, exceeding its $4.7B operating income. For these businesses, an agent that removes the upsell moment removes the profit center. Blocking is rational until they reprice the funnel.

## Conditions
Holds when: a retailer's profitability depends on add-on revenue captured during checkout rather than on base-product margin.

Fails when: the business earns on volume or transaction fees regardless of checkout path. Shopify charges approximately 3.1% on processed volume whether a human or agent completes the purchase, so it has an incentive to welcome agents rather than block them.

## Evidence
Tunguz published specific figures from public filings in his November 13 post:
- Amazon advertising: approximately $68.6B at roughly 50% gross margin, equal to non-AWS operating income
- United Airlines: seat and bag upgrades plus co-brand card and insurance fees totaling roughly $8.0B, exceeding $4.7B operating income
- Dell: services gross profit of roughly $10.4B, approximately 127% of operating income

Amazon blocked third-party shopping agents from purchasing on its site, citing security. United barred AI agents from booking and reserved the right to cancel bot-made reservations. Shopify opened its checkout API to agents.

Tunguz notes that bots reached roughly 54% of global web traffic in 2026, and monthly AI agent traffic rose approximately 8x between August and October of that year.

## Signals
- Large consumer retailers implementing agent blocks in checkout flows while preserving bot access to product-discovery pages
- Retailers testing explicit agent-checkout fees separate from product price
- Merchants with high service-attachment rates blocking agents; merchants with low attachment rates welcoming them

## Counter-evidence
Blocking may be temporary friction rather than permanent policy. Merchants can build agent-compatible upsell surfaces: an agent-readable offer API that presents upgrade options programmatically. If agents learn to surface upsells on behalf of users who opt in, the blocking rationale disappears. The framing also assumes agents are indifferent to upsells, but agents operating on behalf of users who have opted into recommendations could actively select upgrades. Shopify's willingness to open checkout to agents suggests the category is not uniformly hostile.

## Cross-references
- `ins_tunguz-reimagination-beats-efficiency`: adjacent Tunguz post from the same week on how AI changes what businesses can attempt.
- `ins_tunguz-nvidia-ai-central-bank`: same period Tunguz analysis on how AI economy infrastructure changes at the platform level.
