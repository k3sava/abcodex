---
id: ins_indig-benchmark-citation-structure
operator: Kevin Indig
operator_role: Founder, Growth Memo; growth advisor
co_operators: []
source_url: https://www.growth-memo.com/p/why-most-original-data-never-gets
source_type: essay
source_title: "Why most original data never gets cited"
source_date: 2026-07-06
captured_date: 2026-07-07
domain: [aeo-llm-search, seo, content]
lifecycle: [aeo]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_ghost-citation-gap, ins_casey-hill-structural-prominence-llm-citations, ins_indig-ai-substitution-positioning-harm]
raw_ref: ""
---

# Primary research earns 3.3x more AI citations than ordinary pages but only when structured as a comparison benchmark, not as narrative analysis

## Claim
Primary research pages earn 3.3x the AI citation density of ordinary pages, but 97% of published original data misses this because it is structured as narrative analysis rather than as a benchmark that directly answers a buying comparison.

## Mechanism
AI retrieval for "which is best" queries reaches for content shaped as a comparison artifact: named entities ranked on named metrics, methodology boxed and cited, the comparison result surfaced in the first 30% of the page, and a canonical URL kept stable across site redesigns. Narrative research contains the same data but is not shaped to be "lifted" as a citable comparison answer. The model can find it but cannot extract a clean one-sentence response from it, so it does not cite it.

## Conditions
Holds when: the target query type is a buying comparison ("best X for Y", "X vs Y performance"). The category has named competing products or providers measurable on shared specs.
Fails when: the query is informational or exploratory rather than comparative. In categories without established comparators, there is no benchmark shape for the model to match against.

## Evidence
Kevin Indig analyzed citation patterns across 365 cited URLs on a set of commercial queries. Only 8 of 301 cited pages qualified as primary research (2.7%), yet those 8 pages earned 90 of 1,075 total citations (8.4%), averaging 11.3 citations per page versus 3.4 for others. Fivetran's warehouse benchmark, which ranked BigQuery, Redshift, Snowflake, and Databricks on speed and cost, captured 44 citations alone.

> "The win is not 'we published original data.' The win is 'we published a benchmark that answers a buying comparison,' and almost nobody builds one."

Indig's four-part structure for a citable benchmark:

> "1/ Lead with the comparison result. The headline finding ('X is fastest, Y is cheapest at scale') goes in the first 30% of the page. Result, then method, then nuance.
>
> 2/ Box the methodology. Sample, time window, what was measured, how. Attribution confidence is part of what makes a number citable.
>
> 3/ Explicitly frame it as a comparison if it is one. AI reaches for benchmarks on 'which is best' prompts. A table that compares named options on named specs is the shape it lifts.
>
> 4/ Keep the URL stable. One canonical page, kept live, not migrated or renamed every redesign."

On what makes content structurally liftable:

> "The structure is built to be lifted. Descriptive headings ('Results,' 'How much did performance improve?,' 'Why are our results different from previous benchmarks?') let AI map a question to the one passage that answers it."

## Signals
- Your primary research page earns citations for "which is best" queries in your category.
- A competitor's comparison benchmark appears in AI answers for queries your original study should answer.
- AI can extract a one-sentence finding from your research page without reading the full document.

## Counter-evidence
The dataset covers 365 cited URLs, skewed toward B2B software and data infrastructure. The 3.3x figure is derived from 8 primary research pages, a small sample. Results may not generalize to consumer, media, or informational verticals. Dead URLs in the set (64 of 365) suggest citation volume is also affected by link stability independently of content structure.

## Cross-references
- `ins_casey-hill-structural-prominence-llm-citations`: structural prominence (above-the-fold answers) drives AI citation rate.
- `ins_ghost-citation-gap`: being referenced without appearing in the recommendation itself.
- `ins_indig-ai-substitution-positioning-harm`: earlier Indig card on AI substituting for discovery rather than augmenting it.
