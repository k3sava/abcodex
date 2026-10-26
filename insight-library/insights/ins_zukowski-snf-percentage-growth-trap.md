---
id: ins_zukowski-snf-percentage-growth-trap
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
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_zukowski-nextfest-momentum-beats-base, ins_zukowski-wishlist-inflation-prediction-holds]
raw_ref: ""
---

# Pre-festival follower percentage growth is negatively correlated with Steam Next Fest performance while absolute base and raw gain are the real predictors

## Claim
In the October 2026 Steam Next Fest, pre-festival follower percentage growth (seven days to one day before SNF) correlated at Spearman rho -0.13 with peak demo CCU rank, while absolute follower count (rho 0.55) and raw follower gain (rho 0.52) were the reliable predictors.

## Mechanism
Percentage growth misleads because it is scale-invariant by design. A game with 15 followers gaining 12.5% adds fewer than two followers. Its percentage figure looks impressive, but the signal to Valve's algorithm is negligible: two additional followers from a pool of 15 cannot influence rank. A game with 5,519 followers gaining 7% adds roughly 386 followers per week, representing real active interest at algorithm-relevant volume.

The negative correlation of -0.13 reveals a specific trap: developers excited about a small-base percentage spike read it as momentum, when it is noise from a sample too small to carry meaning. The games that rank highest entered SNF with large absolute followings and large absolute gains, not high percentage gains. The bottom tier (ranks 101+) shows the highest percentage growth at 12.5%, while the top 25 show only 7.0%. The paradox confirms the metric is a vanity indicator for underfollowed games.

## Conditions
Holds when: comparing games across a wide range of follower bases. The October 2026 range was 15 median for ranks 101+ to 5,519 median for top 25. Percentage growth only becomes a valid relative comparison when all games being compared have large absolute bases, at which point percentage growth and raw gain are highly correlated anyway.

Fails when: a late-breaking creator shoutout generates thousands of real followers in the percentage-growth window. In that case, percentage growth and raw gain both spike together, and the base may catch up fast enough to matter for the SNF signal. That scenario is rare and usually visible as an anomalous spike rather than steady percentage growth.

## Evidence
Zukowski's October 2026 SNF analysis across 7,240 games. Spearman correlations with peak demo CCU:
- Total followers, one day before SNF: rho 0.55
- Raw follower gain, seven days to one day before SNF: rho 0.52
- Follower gain as percentage, same window: rho -0.13

Median followers and percentage growth by rank tier:
- Top 25: 5,519 followers, 7.0% gain
- Ranks 26-50: 3,834 followers, 4.0% gain
- Ranks 51-100: 1,605 followers, 4.1% gain
- Ranks 101+: 15 followers, 12.5% gain

The data is preliminary. Zukowski notes a follow-up analysis on total follower gains is planned.

## Signals
- Your pre-SNF percentage growth is high but your absolute follower count is under 500: the percentage is noise, not signal.
- Comparing your game to a successful peer reveals they had ten times your follower base even when your percentage growth matched theirs.
- Your analytics show acceleration but the raw weekly numbers are in the tens, not hundreds.

## Counter-evidence
The October 2026 correlations (0.55 for base, 0.52 for raw gain) are weaker than Zukowski's June 2026 finding of 0.81 for momentum and 0.76 for base. The gap may reflect methodology differences (followers versus wishlists, different festival sizes) or a genuine shift in how the algorithm weights pre-festival signals as festival participation grows. This is preliminary data and the follow-up analysis Zukowski plans may revise the correlations.

## Cross-references
- `ins_zukowski-nextfest-momentum-beats-base`: June 2026 finding that momentum (rho 0.81) beat base (0.76) as predictors; October 2026 shows both are roughly equal (0.55 vs 0.52) while percentage growth is anti-correlated (-0.13).
- `ins_zukowski-wishlist-inflation-prediction-holds`: Zukowski's October 13 post finding that wishlist-to-followers conversion rate holds even as SNF participation inflates; the same anti-inflation logic applies to percentage growth.
