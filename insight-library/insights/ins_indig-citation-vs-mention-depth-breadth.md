---
id: ins_indig-citation-vs-mention-depth-breadth
operator: Kevin Indig
operator_role: Founder, Growth Memo; growth advisor and AI search researcher
co_operators: []
source_url: https://www.growth-memo.com/p/does-topical-focus-make-your-brand
source_type: research
source_title: "Does topical focus make your brand more visible?"
source_date: 2026-08-03
captured_date: 2026-08-05
domain: [aeo, seo]
lifecycle: [aeo, positioning]
maturity: frontier
artifact_class: metric-model
score: { originality: 4, specificity: 5, evidence: 5, transferability: 4, source: 4 }
tier: B
related: [ins_indig-ai-search-category-ownership, ins_solis-saas-ai-third-party-citation-weight]
raw_ref: ""
---

# AI search citations and brand recommendations respond to different inputs; depth drives recommendations while breadth tolerates citations

## Claim
Citations (AI linking to a page as a source) and brand mentions (AI naming a brand as the answer to a buying query) are distinct AI search outcomes that respond to different optimization inputs. A brand can be cited across many topics if its content meets basic quality criteria. Getting named as a recommendation requires deep topical ownership within a category, not breadth across many categories.

## Mechanism
Citations emerge when a page meets relevance and quality criteria that are relatively topic-agnostic. Mentions require that the AI model has formed a strong prior about the brand's expertise in a specific domain, built up by consistent, deep presence across multiple prompt variants in that category.

The distinction has an industry dimension with practical implications. In low-stakes verticals (finance, real estate), topical breadth is positively associated with citation volume: more topics covered, more citation opportunities. In regulated verticals (legal, healthcare), brand mentions show persistent negative associations with breadth even when brands achieve full coverage of a category. The model's trust priors for these industries penalize the breadth signal more severely.

The implication is that a brand can appear frequently in AI-generated content (as a cited source) while losing ground on the commercial metric that matters (being named as the recommended solution). Monitoring "AI appearances" without separating citations from mentions conflates two signals that diverge under different optimization strategies.

## Conditions
Holds when: the brand operates in a category where AI search is a meaningful discovery channel and commercial intent queries exist. Holds when: the brand is not so dominant that AI treats it as a category synonym.

Fails when: the brand has category-defining recognition (e.g., the brand name is used as a generic term for the category). In these cases, breadth may not penalize mention share.

## Evidence
Kevin Indig, "Does topical focus make your brand more visible?" (Growth Memo, August 3, 2026). Dataset: 283,215 citations and 76,493 brand mentions across 1,094 categories.

- Distant categories: 50% of AI appearances are citations; 25% are mentions.
- Highly relevant categories: 74% citations, 44% mentions, 34% receiving both, showing that depth increases both but especially mentions.
- Shallow breadth (appearing in 1 of 5 prompt variants): negative mention-share coefficient (-0.051).
- Full category ownership (5 of 5 prompt variants): positive mention-share coefficient (+0.062).
- Finance: citation breadth association rises from +0.054 (1 prompt) to +0.139 (5 prompts).
- Real estate: association rises from +0.021 to +0.135.
- Legal: persistent negative mention association (-0.058) even at full category coverage.
- Healthcare: persistent negative mention association (-0.037).

> "You can be a source on pretty much any topic if it matches the regular criteria for source citations. But the AI recommends you in core topics."

## Signals
- Your brand appears in AI-generated responses as a citation but is not named as the recommended solution for your category queries.
- Expanding to adjacent content topics increases citation volume without increasing brand mention frequency.
- In a regulated vertical, full category content coverage does not close the mention gap with category leaders.
- Your AI monitoring tool shows growing "AI appearances" while inbound from AI-referred sessions stays flat.

## Counter-evidence
The dataset is a snapshot of current AI models. As models update their training corpora, the relationship between breadth and citation may shift. The negative coefficients for breadth-mention in legal and healthcare may reflect trust priors baked into training data rather than a structural limit, which could erode as model composition changes. The citation-mention distinction also requires tooling most brands do not have: separating AI source citations from named brand recommendations in model outputs is not straightforward at scale.

## Cross-references
- `ins_indig-ai-search-category-ownership`: Indig's July 20, 2026 finding that AI search category ownership concentrates fast and that category leaders are defined by mention dominance rather than citation frequency. This card adds the mechanism: citations and mentions respond to different inputs, and brands can optimize for one while losing ground on the other.
- `ins_solis-saas-ai-third-party-citation-weight`: Aleyda Solis's finding that third-party citations drive 84 to 93 percent of AI recommendation trust. Both cards converge on the idea that AI recommendation authority is built through external validation rather than self-reported expertise.
