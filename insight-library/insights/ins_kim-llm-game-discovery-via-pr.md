---
id: ins_kim-llm-game-discovery-via-pr
operator: Joseph Kim
operator_role: CEO, Lila Games; Founder, GameMakers Substack
co_operators: ["Kalie Moore"]
source_url: https://www.gamemakers.com/p/pr-for-gaming-studios
source_type: essay
source_title: "PR for Gaming Studios in the Age of AI"
source_date: 2026-09-01
captured_date: 2026-09-03
domain: [game-dev, aeo, content, pmm]
lifecycle: [awareness-discovery, content-ops]
maturity: applied
artifact_class: playbook
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 3 }
tier: B
related: [ins_indig-aggregator-chatgpt-citation-gap, ins_solis-third-party-citation-prioritization, ins_indig-ugc-citation-dominance]
raw_ref: ""
---

# LLMs recommend games by citation authority in training text, so studios without earned media coverage are invisible to AI-assisted discovery

## Claim
AI recommendation systems rank games by the density and authority of text citations in their training data, not by app store download or revenue rankings. Free-to-play games that dominate charts often appear nowhere in AI recommendations because they generate less written analysis than paid games.

## Mechanism
App stores measure popularity signals: downloads, revenue, ratings. LLMs build knowledge from written text: press coverage, buyer guides, listicles, Wikipedia entries, YouTube transcript text. A game that sells 10 million copies without generating significant press analysis has a large store footprint and a small citation footprint. When a user asks an AI assistant what game to buy, the AI draws on its citation footprint, not its download rank. Paid games generate more press analysis because journalists and reviewers treat them as worth evaluating. Free-to-play games generate engagement metrics instead of written evaluation. Kalie Moore, who co-wrote the piece after running an AI search audit across major LLMs, found this pattern holds consistently: AI recommendations track press coverage, not charts.

## Conditions
Holds when: users query AI assistants for game recommendations, a behavior growing at 70% year-over-year as of 2026. Applies most directly to games with significant gaps between app store rank and earned media coverage.

Fails when: a game has achieved sufficient press saturation that its citation footprint is already large relative to competitors. Also fails if a user queries specifically by genre with chart-sorting, in which case app store results dominate over AI recommendations.

## Evidence
Kim and Moore audited three major LLMs (ChatGPT, Gemini, Perplexity) on game recommendation prompts. Monument Valley was ranked #11 in the paid App Store but was the top pick across all three LLMs. A HiRise campaign using Forbes and Business Insider earned media placements led the game to outrank Roblox on 10 of 12 AI recommendation prompts. Across their sample, 74% of users chose the AI's top pick and 88% accepted the AI-generated shortlist without additional searches. They cite 9.5 billion monthly AI search visits growing at 70% year-over-year.

> "AI names games that are getting press coverage, and those are largely paid games."

Kim adds an execution constraint: "Do not use AI to write thought leadership. You lose everyone."

## Signals
- Your game ranks high in app stores but does not appear when you prompt AI assistants with your own game's category query.
- Competitor titles with less market share consistently appear above yours in AI recommendations.
- Review audits show low coverage in written media relative to download rank.

## Counter-evidence
The audit methodology is prompt-based and not a systematic audit of LLM training data, so the causal link between press coverage and AI recommendation is inferred. App store popularity may independently correlate with press coverage for paid games, making it hard to isolate citation authority as the distinct variable. As AI search grows, citation graph weighting will evolve and may incorporate signals beyond earned media text.

## Cross-references
- `ins_indig-aggregator-chatgpt-citation-gap`: Kevin Indig's finding that ChatGPT and aggregators draw citations from different source sets, creating a gap in attribution.
- `ins_solis-third-party-citation-prioritization`: Brian Solis on AI systems prioritizing third-party citations over brand-owned content.
- `ins_indig-ugc-citation-dominance`: Kevin Indig on user-generated content dominating AI citation patterns in certain verticals.
