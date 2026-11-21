---
id: ins_indig-ghost-citation-brand-gap
operator: Kevin Indig
operator_role: Founder, Growth Memo; growth advisor and AI search researcher
co_operators: []
source_url: https://www.growth-memo.com/p/ai-search-meta-analysis-q4-2026
source_type: research
source_title: "AI Search Meta Analysis - Q4 2026"
source_date: 2026-11-16
captured_date: 2026-11-21
domain: [aeo-llm-search, seo]
lifecycle: [aeo, attribution]
maturity: frontier
artifact_class: metric-model
score: { originality: 3, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_indig-citation-vs-mention-depth-breadth, ins_indig-ai-search-category-ownership]
raw_ref: ""
---

# More than 6 in 10 AI search domain appearances are ghost citations: the page is used but the brand is never named

## Claim
In a Semrush study of 3,981 AI search domain appearances, 61.7% were ghost citations: the domain was attributed as a source but the brand name never appeared in the AI answer. Only 13.2% of appearances were both cited and named. Appearing in AI search as a source does not mean buyers hear your name.

## Mechanism
AI retrieval and brand attribution are decoupled in multi-source answers. The model pulls a page as evidence for a factual statement ("this product costs $X," "this framework supports Y"), appending the URL as a citation without rendering the brand name in the prose. The buyer sees the fact and the footnote URL, not the brand. The page is working as evidence; it is not working as brand advertising. A team that tracks "AI appearances" via total citation count is measuring how often their content is used as evidence, not how often their brand is promoted.

This is an extension of Indig's earlier finding that citations and mentions are optimized differently. Ghost citations show that the two outcomes diverge at scale: 61.7% of appearances produce no brand name in the answer at all.

## Conditions
Holds when: the brand's content is cited as factual evidence for claims in AI-generated prose; the AI platform presents multi-source inline citations rather than named brand recommendations.

Fails when: the brand has category-defining recognition and the AI uses the brand name as a shorthand for the category (e.g., "Salesforce" for CRM). In those cases, citation and mention tend to co-occur.

## Evidence
Semrush study cited in Indig's Q4 2026 AI search meta-analysis. Sample: 3,981 recorded domain appearances across AI search responses.

Breakdown:
- 61.7% were citations without a brand mention (ghost citations)
- 25.1% were mentions without a citation (named but not sourced)
- 13.2% were both cited and mentioned

The study covers domain appearances, not unique queries or sessions. It was conducted on a sample curated by Semrush, a commercially interested party, so the figures should be treated as directional rather than representative.

## Signals
- AI search citation monitoring shows growing appearance counts while AI-referred brand search volume stays flat.
- Competitor brand names appear in AI answers that cite your pages, because the competitor is recommended and your content is evidence.
- Pages optimized for AI citation receive traffic from AI-referred sessions, but users do not recognize the brand when surveyed post-visit.

## Counter-evidence
Ghost citations may still produce indirect effects. A buyer who follows a cited URL sees the brand on arrival. The 61.7% figure measures appearance type, not downstream behavior. Brands optimizing for topical authority may intentionally accept ghost citations as the path to building mention share over time (per ins_indig-citation-vs-mention-depth-breadth). The Semrush sample is not disclosed as random, so the split may not reflect the full range of AI platforms or query types.

## Cross-references
- `ins_indig-citation-vs-mention-depth-breadth`: Indig's earlier finding that citations and mentions respond to different optimization inputs. Ghost citations quantify how large the gap is in practice: most appearances produce a citation without any mention.
- `ins_indig-ai-search-category-ownership`: Category leaders are defined by mention dominance, not citation frequency. Ghost citations explain why citation volume does not reliably predict category leadership in AI search.
