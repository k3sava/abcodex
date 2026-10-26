---
id: ins_zukowski-snf-demo-freshness-rank-correlation
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
score: { originality: 3, specificity: 4, evidence: 3, transferability: 3, source: 4 }
tier: B
related: [ins_zukowski-snf-percentage-growth-trap, ins_zukowski-nextfest-momentum-beats-base]
raw_ref: ""
---

# Top-ranked Steam Next Fest games had demos live an average of 18.8 days before the festival versus 36.6 days for bottom-ranked games

## Claim
In the October 2026 Steam Next Fest, games finishing in the top 25 by peak demo CCU had their demos live for an average of 18.8 days before the festival start, versus 26.9 days for ranks 51 to 100 and 36.6 days for games ranked 101 or lower.

## Mechanism
A newly-launched demo benefits from Valve's recency weighting. Fresh content appears in browse queues and new-release surfaces that older demos no longer qualify for. A demo launched two to three weeks before SNF captures that organic discovery spike, generates follower momentum just before the festival opens, and enters SNF at peak freshness for the Wednesday algorithm transition.

A second factor is developer coordination: developers who launch a demo to prepare for SNF tend to time it to a 2-to-3-week window, which is the top-25 median. Developers who launched demos earlier in development, without SNF timing in mind, show up in the longer averages of the lower rank tiers.

## Conditions
Holds when: comparing games where demo launch timing is a variable, not a constant. The correlation is monotonic across all four rank tiers in October 2026 SNF data.

Fails when: a game with an older demo has maintained continuous marketing activity that keeps the content fresh in Valve's recency weighting despite the demo's age. The mechanism is about signal freshness, not calendar age alone.

## Evidence
Zukowski's October 2026 SNF dataset across 7,240 games. Average days demo live before festival start by rank tier:
- Top 25: 18.8 days
- Ranks 26-50: 26.0 days
- Ranks 51-100: 26.9 days
- Ranks 101+: 36.6 days

The monotonic decline from the top tier to the bottom tier across all four levels is consistent with the recency mechanism.

## Signals
- Your demo is launching more than 60 days before SNF with no planned content refreshes. A page update or new trailer near the festival start may help signal active development.
- Your SNF planning timeline shows demo launch at roughly two to three weeks before the festival, matching the top-25 median.

## Counter-evidence
Demo age may be a proxy for overall developer preparation quality, not an independent causal factor. Games that launch demos close to SNF are also likely to have the best marketing assets, the most follower momentum, and the clearest genre targeting, all of which correlate independently with SNF performance. Separating demo freshness from overall marketing readiness requires controlling for pre-festival follower base, which this dataset does not do. The correlation is real; the causation is plausible but not confirmed.

## Cross-references
- `ins_zukowski-snf-percentage-growth-trap`: absolute follower base (rho 0.55) and raw gain (rho 0.52) are the dominant predictors; demo freshness may be a correlated signal for the underlying follower momentum mechanism rather than an independent predictor.
- `ins_zukowski-nextfest-momentum-beats-base`: the June 2026 finding linking pre-festival momentum to SNF success; demo freshness timing is a plausible contributing mechanism for why recent momentum matters.
