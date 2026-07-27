---
id: ins_sen-ai-overviews-click-reduction
operator: Ananya Sen
operator_role: Associate Professor, Carnegie Mellon University Heinz College of Information Systems and Public Policy
co_operators: [Saharsh Agarwal]
source_url: https://mobiledevmemo.com/podcast-quantifying-the-impact-of-ai-overviews-on-outbound-clicks-with-ananya-sen-and-saharsh-agarwal/
source_type: talk
source_title: "Quantifying the Impact of AI Overviews on Outbound Clicks"
source_date: 2026-07-21
captured_date: 2026-07-27
domain: [seo, aeo, ai-native-systems-and-products]
lifecycle: [strategy, ai-workflow]
maturity: applied
artifact_class: research
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 3 }
tier: B
related: [ins_indig-seo-aio-decoupling, ins_fishkin-zero-click-walled-garden, ins_indig-ai-search-category-ownership]
raw_ref: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6513059"
---

# AI Overviews reduce outbound clicks by 40% with no corresponding improvement in user satisfaction

## Claim
A controlled field experiment found that Google AI Overviews reduce outbound clicks to publisher pages by 40%, conditional on a search occurring. Users with AI Overviews hidden and users who saw them reported identical search satisfaction. The click reduction carries no user experience benefit.

## Mechanism
AI Overviews appear at the top of search results and summarize answers before publisher links are visible. When a query triggers an Overview, users read the summary and resolve their intent without clicking through. The field experiment isolated this effect using a custom browser extension with roughly 1,000 participants over two weeks, toggling AI Overviews on or off as the treatment condition.

The result: 40% fewer outbound clicks when AI Overviews are shown. User satisfaction scores in both groups were statistically indistinguishable. The summary layer captures user attention and resolves the query sufficiently to remove click motivation, without making the experience meaningfully better.

A second finding sharpens the picture: only 7-8% of clicks in the study originated from the links inside AI Overviews themselves. The Overview block captures intent resolution while contributing almost no replacement traffic to publishers.

## Conditions
Holds when: the query has a clear enough answer that a summary resolves it; publisher pages add depth but do not complete the action the user needs. Fails when: the query requires specificity, recency, personal context, or downstream action (booking, purchasing, discovery) that a summary cannot provide. High-intent commercial queries may retain click-through even with AI Overviews active.

## Evidence
Ananya Sen and Saharsh Agarwal, presenting field experiment results on the Mobile Dev Memo podcast, July 21, 2026:

"Showing AI Overviews reduces clicks by 40% conditional on a search happening"

On user experience parity:

"users in both groups felt exactly the same"

## Signals
- Publisher sites seeing organic click declines despite stable ranking positions should measure AI Overview exposure rate on their top queries before diagnosing a ranking problem.
- The 7-8% click-through rate from within AI Overview links means Overview presence is not a meaningful traffic replacement for organic click loss.
- Queries where AI Overviews consistently appear represent directly measurable revenue at risk from Google's summary layer.

## Counter-evidence
The experiment captures a point in time and a specific query set. AI Overviews may add more value in complex, multi-step query categories not represented in the sample. If AI Overviews increase total search volume by improving perceived quality at the session level, the net effect on absolute publisher traffic could be smaller than the 40% per-search number suggests. The format is still evolving: richer Overview formats with more outbound links could shift the click distribution.

## Cross-references
- `ins_indig-seo-aio-decoupling`: Indig's finding that SEO ranking and AIO citation are separate signals requiring separate optimization. This study provides the quantified cost of AI Overview presence on the traffic side.
- `ins_fishkin-zero-click-walled-garden`: Rand Fishkin's zero-click search framework. This field experiment provides the first direct measurement of the AI-era substitution rate under controlled conditions.
- `ins_indig-ai-search-category-ownership`: Indig's finding that AI search category ownership is built through brand mentions. This study establishes the traffic context: click substitution by AI Overviews makes building the mention layer more valuable, not less, since traffic from AI-cited pages is increasingly contingent on Overview presence.
