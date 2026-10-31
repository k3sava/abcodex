---
id: ins_dombrowski-surface-shapes-query-expression
operator: Cate Dombrowski
operator_role: AI search researcher, iPullRank
co_operators: []
source_url: https://ipullrank.com/ai-search-user-behavior
source_type: essay
source_title: "How the Same 16,000 Users Behave in AI Search vs. Google"
source_date: 2026-10-29
captured_date: 2026-10-31
domain: [aeo-llm-search, seo, growth-demand]
lifecycle: [attribution-measurement, strategy-bets]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 5, evidence: 4, transferability: 5, source: 4 }
tier: B
related: [ins_dombrowski-ai-google-query-moment-split, ins_taylor-ai-agents-answer-framing, ins_king-ai-search-branding-not-traffic]
raw_ref: ""
---

# Google trained users to compress needs into keywords; AI surfaces break that conditioning

## Claim
The same users phrase the same need as a 5-word keyword on Google but a 9-word question on an AI surface, because Google trained a keyword-compression reflex that AI surfaces do not reward.

## Mechanism
Years of Google use conditioned users to strip context and personal framing from queries. Google's relevance model rewarded short, intent-dense strings and punished conversational language. AI language models respond better when given context, constraints, and the actual question rather than keyword fragments. Users adapt. The surface shapes the expression, not the underlying need.

## Conditions
Holds when: the user has experience with both surfaces and is expressing a genuine information need rather than navigating to a known URL.

Fails when: the query is a known-URL navigation task (where both surfaces produce near-identical short strings) or the user is new to AI search and transfers their Google habit verbatim.

## Evidence
From 267 matched query pairs where the same user addressed the same need on both surfaces: median AI prompt, 9 words; median Google search, 5 words. Questions appeared in 27% of AI prompts versus 8% of Google queries. Personal context (role, situation, purpose) appeared in 8% of AI prompts versus 1.2% of Google searches.

> "Google trained all of us to compress a need into a few nouns."

## Signals
- AI prompts from your audience contain job titles, use-case context, and constraints that never appear in their Google queries. This is signal, not noise. It names what they actually want the answer to do.
- Content structured to answer a question with context and constraints gets cited in AI answers more than content optimized for keyword density.

## Counter-evidence
Data is from November 2024, US desktop, ages 35-44. AI adoption patterns have shifted since. The enriched prompting behavior may also reflect early-adopter behavior rather than the median user. As AI becomes more default, some users may settle back into compressed query habits inside AI surfaces, especially for quick factual lookups.

## Cross-references
- `ins_dombrowski-ai-google-query-moment-split` covers the companion finding: 96% of AI prompts had no Google counterpart in the same session, separating the surfaces by cognitive moment.
- `ins_taylor-ai-agents-answer-framing` covers the related finding from Mike Taylor: AI agents prefer answer-first headlines over curiosity-framing teasers, because the agent is matching a headline to a question rather than evaluating the click value.
