---
id: ins_indig-aggregator-chatgpt-citation-gap
operator: Kevin Indig
operator_role: Founder of Growth Memo; former VP SEO at Shopify
co_operators: []
source_url: https://www.growth-memo.com/p/growth-intelligence-brief-23
source_type: essay
source_title: "Growth Intelligence Brief #23"
source_date: 2026-08-20
captured_date: 2026-08-27
domain: [aeo, seo, growth]
lifecycle: [measurement, strategy]
maturity: frontier
artifact_class: metric-model
score: { originality: 3, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_indig-search-volatility-2026-baseline, ins_indig-slop-antibodies-distribution-gate]
raw_ref: ""
---

# Aggregators hold 76% of Google's SEO visibility but only 38% of ChatGPT's citation pool, requiring separate authority-building strategies for each surface

## Claim
Aggregator-style domains hold 76.0% of Google's SEO visibility but only 38.3% of ChatGPT's citation pool. The 37.7-point gap signals that traditional search winners are structurally disadvantaged in AI-generated answers, and that winning one surface does not transfer to the other.

## Mechanism
Google's ranking algorithm rewards content aggregation: more pages, more inbound links, higher domain authority from breadth. LLMs prefer authoritative primary sources that answer a query directly, without intermediation. The link-graph signals that give aggregators top Google positions do not translate to AI citation patterns, which weight source specificity and directness. A business that wins Google by aggregating content from many sources competes against its own sources when those sources are available directly in AI search. The two surfaces run on different authority models, and optimizing for one can actively deprioritize a business on the other.

## Conditions
Holds when: The comparison is between broad-topic aggregators (directories, comparison sites, review hubs) and the primary sources they aggregate. The domain's Google authority comes from breadth and link acquisition across many topics rather than deep topical expertise.
Fails when: The aggregator is the primary source, for example Reddit or Wikipedia for user-generated content, where the aggregation is also the content. Also less applicable in very narrow verticals with few competing primary sources.

## Evidence
Kevin Indig's Search Signals Index tracked approximately 2,600 companies across 26 verticals using two dimensions: SEO visibility and AI mentions.

> "Aggregators hold 76.0% of the SEO visibility split between the 2 company types, and only 38.3% of ChatGPT's citation pool."

The 37.7-point gap was not a rounding artifact; it emerged from a structured comparison across multiple verticals in the same measurement window.

## Signals
- The domain ranks well for broad commercial queries on Google but appears rarely in ChatGPT responses on the same topics.
- Competitors who are direct publishers or primary sources appear more often in AI-generated answers than their search rankings would predict.
- AI referral traffic in Analytics is low relative to organic search traffic share.

## Counter-evidence
Correlation between low AI citation and aggregator structure does not prove causation. ChatGPT's citation patterns may reflect training data composition as much as a real-time preference for primary sources. If the underlying LLM was trained heavily on aggregator content, the citation distribution could shift as models are retrained on newer corpora. Indig's data is a cross-sectional snapshot; longitudinal tracking is needed to confirm whether the gap persists across model updates.

## Cross-references
- `ins_indig-search-volatility-2026-baseline`: From the same GIB #23 source, shows that Google's own visibility rankings are now volatile at the weekly level. Aggregators winning Google today face volatility before they can address the AI citation gap.
- `ins_indig-slop-antibodies-distribution-gate`: Platform behavior penalizes certain content types regardless of stated quality. Both findings point to surface-specific authority signals that do not transfer across platforms.
