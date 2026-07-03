---
id: ins_indig-engine-fragmentation
operator: Kevin Indig
operator_role: Growth advisor and SEO researcher, Growth Memo
co_operators: []
source_url: https://www.growth-memo.com/p/2026-growth-memo-research-summary
source_type: research
source_title: "2026 Growth Memo Research Summary"
source_date: 2026-06-24
captured_date: 2026-07-03
domain: [aeo, seo, growth-demand]
lifecycle: [measurement-experimentation, attribution, strategy]
maturity: frontier
artifact_class: research
score: { originality: 4, specificity: 5, evidence: 5, transferability: 4, source: 4 }
tier: A
related: [ins_ghost-citation-gap, ins_kevin-indig-reasoning-lift-two-universes, ins_indig-algorithm-visibility-rental]
raw_ref: ""
---

# Only 2.37 percent of URLs cited by AI search engines appear across all three major platforms; 91 percent live in exactly one

## Claim
Across 3.7 million citations from 20,000 prompts covering ChatGPT, Perplexity, and Google AI Overviews, only 2.37% of cited URLs appear in all three engines for the same prompt. Ninety-one percent appear in exactly one, making AI search visibility a platform-specific, non-portable asset.

## Mechanism
Each major AI search engine draws on distinct retrieval algorithms, training data, and citation selection heuristics. A URL that earns a citation in Perplexity does so by matching that engine's weighting of source recency, domain authority, and structured data. The same URL may fail to clear ChatGPT's cutoffs or Google AI Overviews' criteria, which reflect different indexing and trust signals. Building citation authority in one engine does not transfer to the others because the underlying selection mechanisms differ.

Indig proposes three metrics to track the resulting risk: Presence (domain appearance across engines), Portability (fraction of citations that appear in all three), and Concentration (citation dependence on a single engine). High Concentration means one algorithm update or source-policy change can eliminate the majority of an organization's AI search visibility.

## Conditions
Holds when: the organization targets users across ChatGPT, Perplexity, and Google AI Mode simultaneously. Fails when: the audience predominantly uses one engine, making cross-engine portability irrelevant. Also fails for very high-authority domains that all engines cite by default regardless of content format.

## Evidence
Indig analyzed 3.7 million citations from 20,000 prompts across ChatGPT, Perplexity, and Google AI Overviews using Omnia data.

> "only 2.37% of cited URLs appear in all 3 LLMs for the same prompt. 91% live in exactly one."

> "There is no single AI Visibility."

## Signals
- Top AI-cited pages appear in Perplexity but not ChatGPT or Google AI Mode for the same queries.
- Citation tracking shows a Concentration score above 70 percent for a single engine.
- A platform update drops AI search traffic by more than 20 percent in a single week, confirming fragile concentration.

## Counter-evidence
The study covers three engines at one point in time. As engines converge on shared data pipelines or federation standards, fragmentation may decrease. The 91% figure measures citation URL overlap, not traffic impact; a page cited only in Perplexity may drive more business than one cited across all three at lower intent levels. Some content categories (widely-cited factual reference, well-known product comparisons) may show higher portability than the dataset average.

## Cross-references
- `ins_ghost-citation-gap`: Indig's April 2026 finding that 62% of AI citations never name the brand. That measures the citation-mention gap within a single engine. The engine-fragmentation finding adds a second dimension: citations earned in one engine rarely appear in another.
- `ins_kevin-indig-reasoning-lift-two-universes`: Only 25.6% of cited domains overlap between standard and high-reasoning AI modes on the same engine. Engine fragmentation and reasoning-mode fragmentation are compounding risks.
