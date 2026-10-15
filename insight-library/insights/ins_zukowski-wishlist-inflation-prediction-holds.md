---
id: ins_zukowski-wishlist-inflation-prediction-holds
operator: Chris Zukowski
operator_role: Founder, How to Market a Game; game marketing researcher
co_operators: []
source_url: https://howtomarketagame.com/2026/10/13/wishlist-inflation-is-real-but-they-are-still-important/
source_type: essay
source_title: "Wishlist inflation is real, but they are still important"
source_date: 2026-10-13
captured_date: 2026-10-15
domain: [growth-demand, founder-operator]
lifecycle: [launch, growth-loops]
maturity: applied
artifact_class: metric-model
score: { originality: 3, specificity: 5, evidence: 4, transferability: 3, source: 4 }
tier: B
related: [ins_zukowski-demo-conversion-sickos, ins_zukowski-festival-genre-over-count]
raw_ref: ""
---

# Steam wishlist inflation cut per-wishlist conversion in half since 2023, but wishlist count still predicts launch sales

## Claim
Each Steam wishlist now converts to roughly half the launch-month sales it did in 2020 to 2022, but wishlist count still predicts launch sales with an R² of 0.72, making it the most reliable leading indicator despite the inflation.

## Mechanism
Valve made wishlisting easier over the 2023 to 2026 period, adding hover-tooltip stars and frictionless festival opt-ins. As a result, wishlists function more like bookmarks than purchase intent. Wishlist volume also grew as more developers ran wishlist campaigns actively.

The inflation affects all games proportionally. A game with twice the wishlists of a peer still sells roughly twice as much at launch. The absolute conversion rate (units sold per wishlist) fell; the relative prediction did not. Zukowski's log-log regression across 160 games shows R² = 0.72 for 2023 to 2025 games versus R² = 0.77 for 2020 to 2022 games, a small drop that he attributes to noise given the smaller early-era sample.

Velocity (wishlists added in the 30 days before launch) adds a slight improvement when combined with total count, but does not replace it as a predictor.

## Conditions
Holds when: comparing games within the same release era (comparing total wishlists across eras requires inflation adjustment); the game has a normal Steam page and has been live long enough to accumulate organic wishlists.

Fails when: wishlist velocity is artificially inflated through a festival the game is not genuinely suited for; the game is in a niche where Valve's personalized discovery surfaces push it to unusually high conversion audiences; wishlists come overwhelmingly from a single traffic spike rather than sustained interest.

## Evidence
Zukowski analyzed 160 games released between 2020 and 2025 (34 from 2020 to 2022, 126 from 2023 to 2025). First-month unit sales per wishlist fell by roughly half between the two eras. Log-log R² for total wishlists: 0.77 (early era) versus 0.72 (recent era). Spearman correlations: 0.89 versus 0.87. He names three causes of inflation: frictionless Valve UX changes, festival wishlists with weaker intent, and more developers actively chasing the metric.

## Signals
- Games with higher total wishlists outperform lower-wishlist games at launch within the same release cohort
- A game that hits the Popular Upcoming threshold launches into a distribution event; one below it does not
- Wishlist velocity in the final 30 days adds marginal predictive value over total count alone

## Counter-evidence
The sample of 34 games from 2020 to 2022 is small and Zukowski notes this himself, so the difference in R² between eras may be noise. The study covers only games analyzed by one researcher using his own methodology. Different genre categories and price points may have different conversion rates that are not visible in the aggregate. Valve's June 2026 store refresh may have further changed conversion dynamics not yet captured by this dataset.

## Cross-references
- `ins_zukowski-festival-genre-over-count`: Genre fit within a festival matters more than wishlist count alone for activation outcomes.
- `ins_zukowski-demo-conversion-sickos`: Demo conversion rates cluster into a bimodal distribution; wishlist prediction explains launch volume, not conversion rate variation.
