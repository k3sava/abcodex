---
id: ins_indig-citation-share-not-raw-count
operator: Kevin Indig
operator_role: Growth advisor; creator of Growth Memo; former VP SEO at Shopify
co_operators: []
source_url: https://www.growth-memo.com/p/denominaitor
source_type: essay
source_title: "DenominAItor"
source_date: 2026-11-23
captured_date: 2026-11-25
domain: [aeo, content-strategy, growth]
lifecycle: [attribution-and-measurement, strategy]
maturity: applied
artifact_class: metric-model
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_indig-algorithm-visibility-rental, ins_indig-engine-fragmentation]
raw_ref: ""
---

# AI citation counts mislead because model updates inflate the denominator, not your standing

## Claim
Raw AI citation counts are not a reliable measure of your brand's visibility. The total citations an engine hands out per answer (the denominator) expands and contracts with model updates, so a rising count can mean the engine changed, not that you improved.

## Mechanism
When a model update causes an engine to serve 51% more cited URLs per prompt, every brand's raw citation count rises automatically. No one improved their content. The denominator grew. The inverse also holds: when engines pull back on citations, raw counts fall even for brands that strengthened their position. Tracking share (your cited URLs as a percentage of all cited URLs in the same answers) normalizes for denominator shifts. Share rises only if you outperform the average in the same answers. This is the same logic that makes market share more meaningful than revenue in a growing market.

## Conditions
Holds when: AI engines regularly update their retrieval behavior and citation volume. The same prompts are used across measurement windows. Brand and competitor sets are held stable.
Fails when: prompt composition changes between windows, introducing selection bias that distorts both numerator and denominator. Engines consolidate or diverge in ways that change which brands appear in the same answers.

## Evidence
Indig tracks citation data from May to September 2026 across ChatGPT, Gemini, and Perplexity using HubSpot aggregate data. ChatGPT's August 6 update coincided with 51% more cited URLs per prompt and 14% more brand mentions. Perplexity's cited URLs per prompt rose about 80% over the same period while estimated referral traffic fell. The correlation between citations and referrals was negative across all three engines. On Gemini, the citation-to-mention correlation shifted from roughly negative 0.45 over the full period to positive 0.92 within a single July window.

Indig names the central principle directly: "model releases are the new algorithm updates."

## Signals
- Your raw citation count rises without any new content published or strategy changed, coinciding with a model update.
- Competitor citation counts rise at the same rate as yours after an update, suggesting denominator inflation rather than a competitive gain.
- Referral traffic does not follow citation count, confirming citations are expanding without driving incremental reach.

## Counter-evidence
Share measurement requires a stable, representative prompt set, which is difficult to maintain as user behavior evolves. A brand with very low baseline citations may show volatile share even when the absolute change is small. Indig's data uses HubSpot as a proxy; individual brand behavior may differ from the aggregate. Engine-level denominator shifts also vary by category, so a brand in a niche topic may not experience the same denominator dynamics as a broad brand.

## Cross-references
- `ins_indig-algorithm-visibility-rental`: Indig's earlier finding that visibility earned from an algorithm shift reverts unless backed by genuine authority. The DenominAItor argument extends this to AI search: engine-driven count increases are as reversible as algorithm-gifted ranks.
- `ins_indig-engine-fragmentation`: Different engines index different populations. Combined with the denominator argument, this means a brand can hold share on one engine while losing it on another even if raw counts look flat.
