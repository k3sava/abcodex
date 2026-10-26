---
id: ins_zukowski-ai-disclosure-tier-stratification-oct26
operator: Chris Zukowski
operator_role: Founder, How to Market a Game
co_operators: []
source_url: https://howtomarketagame.com/2026/10/21/how-sloppy-is-the-october-2026-steam-next-fest/
source_type: essay
source_title: "How sloppy is the October 2026 Steam Next Fest"
source_date: 2026-10-21
captured_date: 2026-10-26
domain: [growth-demand, founder-operator]
lifecycle: [launch]
maturity: applied
artifact_class: metric-model
score: { originality: 3, specificity: 5, evidence: 4, transferability: 3, source: 4 }
tier: B
related: [ins_zukowski-steam-slop-temporal-filter, ins_zukowski-nextfest-momentum-beats-base]
raw_ref: ""
---

# AI-disclosing games made up 8% of the top 25 but 35% of games ranked 101 or lower in October 2026 Steam Next Fest

## Claim
In the October 2026 Steam Next Fest, 8% of the top 25 games by peak demo CCU disclosed AI use, compared to 35% of the 6,942 games ranked 101 or lower.

## Mechanism
Two forces drive this stratification. First, player behavior filtering: players who engage with festival demos, even briefly, send behavioral signals (short session lengths, low wishlist conversion) that suppress AI-heavy games in Valve's ranking algorithm before Wednesday's merit-based transition. Second, genre confounding: AI disclosure rates are highest in Strategy, RTS, and Tactical RPG genres (46-55%), which attract narrower audiences than the Action RPG and platformer titles dominating the top 25. Whether the mechanism is aesthetic player repulsion, genre-preference mismatch, or both, the rank outcome is consistent.

This extends the June 2026 temporal filter finding with cross-sectional rank evidence: AI-disclosed games are not merely filtered out over time, they also cluster at the bottom of the rank distribution.

## Conditions
Holds when: using peak demo CCU as the performance measure. AI disclosure is voluntary; games using AI tools without disclosure are not counted. Code-tool disclosure is explicitly excluded from Valve's disclosure requirements, so the 23.1% code-disclosure figure likely undercounts actual AI use in development.

Fails when: the genre distribution in SNF shifts toward AI-heavy genres that attract large audiences, or when players stop penalizing AI-disclosed games in their behavioral signals.

## Evidence
Zukowski scraped the full October 2026 SNF across 7,240 games. AI disclosure rates by CCU rank tier:
- Top 25: 8% (2 of 25 games)
- Ranks 26-50: 12% (3 of 25)
- Ranks 51-100: 26% (13 of 50)
- Ranks 101+: 35% (2,427 of 6,942)

Total AI-disclosing games: 2,502, or 34.6% of all participating games. Art and visuals is the most common disclosure category at 75.7% of disclosing games, followed by text and localization at 37.7% and audio/voice at 37.6%.

Median followers one day before SNF: top 25 at 5,519; ranks 101+ at 15. Games in the bottom tier entered the festival with almost no audience, making AI disclosure a confounded variable with underfollowed status.

## Signals
- Your game is in a high-AI-disclosure genre (Strategy, RTS, Tactical RPG, Card Game), placing you in a cohort that has historically underperformed on demo CCU per follower count.
- Your demo play sessions are shorter than your genre median, the signal Valve reads before Wednesday's algorithm transition.
- Your festival rank in the first 48 hours tracks with your rank by day six; the data shows no late-stage recovery pattern in the top-25 cohort.

## Counter-evidence
Genre confounding is real: AI-heavy games cluster in genres that may simply attract narrower audiences than mainstream action and adventure titles dominating the top 25. Distinguishing player aversion to AI aesthetics from lower genre demand is not possible with the available data. Zukowski notes a Chinese-developer cluster (three of the AI-disclosed Strategy RPGs with the highest CCU in the dataset are from Chinese studios) as a possible cultural factor in disclosure rates.

## Cross-references
- `ins_zukowski-steam-slop-temporal-filter`: the June 2026 temporal filter finding that AI-slop games get suppressed by day three; this card adds cross-sectional rank evidence from October 2026.
- `ins_zukowski-nextfest-momentum-beats-base`: pre-festival follower base is the strongest single predictor of SNF rank; AI-disclosed games in the bottom tier entered with a median of 15 followers, versus 5,519 for the top 25.
