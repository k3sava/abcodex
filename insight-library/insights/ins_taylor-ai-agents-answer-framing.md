---
id: ins_taylor-ai-agents-answer-framing
operator: Mike Taylor
operator_role: Head of Evals, Every
co_operators: []
source_url: https://every.to/also-true-for-humans/how-to-get-ai-agents-to-recommend-your-articles
source_type: essay
source_title: "How to Get AI Agents to Recommend Your Articles"
source_date: 2026-10-27
captured_date: 2026-10-30
domain: [aeo, pmm]
lifecycle: [messaging-narrative, growth-loops]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 5, evidence: 5, transferability: 5, source: 4 }
tier: A
related: [ins_solis-third-party-citation-prioritization, ins_lily-ray-about-page-ai-citation-multiplier, ins_aleyda-solis-aeo-offsite-corroboration-floor]
raw_ref: ""
---

# AI agents cite articles whose headlines state the answer directly; curiosity-framing headlines get ignored because agents match questions, not scroll for interest

## Claim
Rewriting a headline from curiosity-framing to answer-framing can move an article from cited in 1% of AI agent sessions to cited in 100%, because agents try to match a question to the most directly relevant result rather than browsing by interest.

## Mechanism
Human readers scroll feeds with curiosity; a clever teaser works because it piques their interest enough to click. AI agents do not have that curiosity drive. They receive a user question and try to find the most relevant source for a specific answer. A title that reads as an answer signals direct relevance. A title that reads as an opinion, a question, or a teaser looks like commentary, not a reference to cite. The agent's matching heuristic favors explicitness.

## Conditions
Holds when: the AI agent is in a question-answering mode, selecting among several search results to recommend, with no memory or personalization overriding the headline signal.
Fails when: the agent has strong user-specific context that overrides headline matching, or when the agent's retrieval is semantic embedding-based rather than headline-driven.

## Evidence
Taylor ran 2,484 sessions across four models: Claude Opus 5.5, Sonnet 5.5, Haiku 5.5, and GPT-6.1-Sol. Each session saw one headline version. Agents received a user question and five to eight search results in random order, then chose two to cite. One article about prompting went from 2 citations in 240 sessions (under 1%) to 240 of 240 after a single title and subtitle rewrite. Agent preferences for posts showed a Spearman correlation of 0.00 with human traffic rankings. Taylor tested conditions with no user profile, a one-line user ask, and a detailed user profile.

> "An agent isn't motivated by curiosity; it's trying to match a headline to a specific question."

> "A clever line that doesn't say what the article teaches doesn't work on AI."

## Signals
- Rewriting a headline from a question or teaser to a declarative answer statement increases AI citation rates in simulated retrieval tests.
- An article's performance in AI-driven traffic diverges from its performance in human social-driven traffic.
- Articles with answer-framing headlines outperform topic-framing ones when the query is narrow and specific.

## Counter-evidence
Taylor's study is simulations, not live traffic. He flags this limitation himself: the effect on real agent-driven visits is untested. The 0.00 correlation between agent and human preferences suggests answer-framing may hurt human social distribution even as it helps AI citation. Optimizing for agents could create a two-audience problem where neither is fully served. The principle may erode if most publishers adopt answer-framing simultaneously and agents develop more nuanced matching criteria.

## Cross-references
- See `ins_solis-third-party-citation-prioritization` for Solis on the third-party citation landscape that this framing targets.
- See `ins_lily-ray-about-page-ai-citation-multiplier` for Lily Ray on the role of structural page signals in AI citation.
