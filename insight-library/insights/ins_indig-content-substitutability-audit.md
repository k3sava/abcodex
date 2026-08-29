---
id: ins_indig-content-substitutability-audit
operator: Kevin Indig
operator_role: Founder of Growth Memo; former VP SEO at Shopify
co_operators: []
source_url: https://www.growth-memo.com/p/new-claude-skill-commodity-content
source_type: essay
source_title: "New Claude skill: Commodity Content Audit"
source_date: 2026-08-27
captured_date: 2026-08-29
domain: [seo, growth, pmm]
lifecycle: [content, strategy]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 5, source: 5 }
tier: B
related: [ins_indig-google-demoted-spam-listicles, ins_indig-search-volatility-2026-baseline, ins_indig-aggregator-chatgpt-citation-gap]
raw_ref: ""
---

# Google's demotion signal is content replaceability, not format or AI-generation volume

## Claim
Across 5.32 million search results, Google's August 2026 demotion pattern targets content that is interchangeable with competitors' content. The decisive signal is substitutability, not the listicle format or the presence of AI generation. Content that any competitor could have written loses rank. Content that only this source could have written does not.

## Mechanism
When Google's spam classifiers evaluate a content page, the relevant question is not "is this a listicle?" or "was this AI-generated?" It is "would a searcher find this page meaningfully different from the ten others covering the same topic?" Interchangeable structure, interchangeable claims, and interchangeable conclusions are the pattern that co-occurs with demotion. The underlying signal: if a page's content could be swapped in from a competitor's domain without the searcher noticing, Google's systems now penalize it.

Indig operationalized this observation into a Claude-powered audit. The prompt scores a given piece of content on its replaceability. A high replaceability score means the page shares structure, vocabulary, and claims with a large number of competing pages. A low replaceability score means the page carries a perspective, data set, or argument that resists substitution. The practical audit gives content teams a leading indicator before a ranking drop.

This extends the mechanism from `ins_indig-google-demoted-spam-listicles`, which showed that 62% of vendor-authored listicles gained organic traffic over the same period Google demoted AI-generated high-velocity listicles. Substitutability names what differentiates those two groups more precisely than format or production velocity alone.

## Conditions
Holds when: the content vertical is saturated with structurally similar pages (B2B software comparisons, informational health queries, consumer product reviews, listicle-format content at scale).

Fails when: the domain's authority signals are strong enough to override content quality assessments at the page level, or when the query set is so niche that Google's training data cannot distinguish substitutable from specific content.

## Evidence
Indig's dataset: 60K US-English desktop queries, 15 verticals, 5.32 million organic result rows collected in August 2026. The same dataset underlying `ins_indig-google-demoted-spam-listicles`. Indig's August 27 piece introduces a Claude audit skill that scores replaceability at the page level, enabling proactive identification before a demotion occurs.

## Signals
- Content scoring high on a replaceability audit loses organic position over a 4-6 week lag.
- Position-1 pages in demotion verticals carry proprietary data, original research, or arguments not found on competing pages.
- Vendor-authored listicles with unique comparison methodology maintain or gain positions while structurally identical pages on the same queries fall.

## Counter-evidence
The replaceability framing does not fully explain why some high-volume, high-domain-authority substitutable pages maintain positions. Domain authority signals may override page-level substitutability at the top of the index. The audit methodology is also a proxy metric, not a direct measure of what Google's classifier weighs.

## Cross-references
- `ins_indig-google-demoted-spam-listicles` provides the primary dataset and the broader demotion pattern; this card names the distinguishing signal more precisely.
- `ins_indig-search-volatility-2026-baseline` documents the volatility context in which demotion events are now occurring.
