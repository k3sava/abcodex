---
id: ins_indig-substitutability-not-format
operator: Kevin Indig
operator_role: Founder of Growth Memo; ex-Shopify SEO director
co_operators: []
source_url: https://www.growth-memo.com/p/has-google-demoted-listicles
source_type: essay
source_title: "Has Google demoted listicles?"
source_date: 2026-08-24
captured_date: 2026-09-02
domain: [growth-demand, content]
lifecycle: [strategy-bets, attribution-measurement]
maturity: applied
artifact_class: metric-model
score: { originality: 4, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_indig-listicle-freshness-rank-signal]
raw_ref: ""
---

# Google demotes substitutable content, not the listicle format itself

## Claim
Google's ranking demotion targets listicles that are interchangeable with competitors' coverage, not the listicle format as a category. Differentiated content with original data, distinctive editorial perspective, or non-replicable selection criteria survives the demotion pattern.

## Mechanism
Substitutability is a proxy signal for content value. When a page covers the same items in the same sequence with the same editorial framing as dozens of competitor pages, Google's signals detect the interchangeability and weight it as low marginal value. The content contributes nothing that the indexed set does not already contain.

Content that cannot be replicated verbatim or near-verbatim by a competitor carries a non-substitutability signal. This includes: original survey data, proprietary testing, editorial selections backed by stated criteria, and authorial perspective that depends on lived experience. The ranking systems are not evaluating the list format; they are evaluating whether any individual page adds something irreplaceable to the result set.

## Conditions
Holds when: the content category is competitive enough that multiple sites publish materially identical coverage. Substitutability is a spectrum, and the demotion effect is proportional to the degree of interchangeability.

Fails when: the category is thin enough that any listicle provides unique coverage. In niche verticals with few published sources, listicle format is not the differentiating variable because all pages are effectively non-substitutable by scarcity.

## Evidence
Indig analyzed 5.32 million organic result rows covering 60,000 United States English-language desktop Google queries across 15 verticals, collected with SE Ranking data during a 47-hour window in August 2026. The dataset showed Google trimming listicles from top positions without removing the format from results pages entirely. The pages that moved down were distinguishable from the pages that held position by their substitutability relative to competitor coverage of the same topic.

A related Claude skill Indig published on August 27, 2026, uses a substitutability score to flag pages before publication, treating the research finding as an actionable pre-publish filter.

## Signals
- Your listicle covers items identical to the top 3 competitors with no proprietary selection criteria.
- Ranking dropped after a Google core update despite stable freshness and technical quality.
- You can swap competitor page A for competitor page B in the result set and the user experience does not change.

## Counter-evidence
The mechanism assumes Google has reliable signals for substitutability, which has not been confirmed by Google. The demotion pattern Indig identifies could also be explained by co-variation between substitutability and other ranking factors, such as backlink diversity or engagement signals. An alternative interpretation: the pages that held position had stronger link profiles, and substitutability correlates with but does not cause the demotion. Indig's dataset is observational; causal attribution requires a controlled experiment.

## Cross-references
- `ins_indig-listicle-freshness-rank-signal`: The complementary finding that freshness is the strongest individual predictor of listicle ranking. Both insights from Indig's August 2026 research series on listicle ranking factors.
