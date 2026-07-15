---
id: ins_zukowski-nextfest-momentum-beats-base
operator: Chris Zukowski
operator_role: Founder, How to Market a Game
co_operators: []
source_url: https://howtomarketagame.com/2026/07/14/games-that-used-momentum-for-steam-next-fest-success/
source_type: essay
source_title: "Games that used momentum for Steam Next Fest Success"
source_date: 2026-07-14
captured_date: 2026-07-15
domain: [growth-demand, founder-operator]
lifecycle: [launch]
maturity: applied
artifact_class: metric-model
score: { originality: 3, specificity: 5, evidence: 5, transferability: 3, source: 4 }
tier: B
related: [ins_zukowski-overexposure-impossible, ins_zukowski-steam-personal-calendar-launch-discovery, ins_zukowski-steam-slop-temporal-filter]
raw_ref: ""
---

# Two-week pre-festival wishlist momentum predicts Steam Next Fest results better than total accumulated wishlists, with a Spearman correlation of 0.81 versus 0.76

## Claim
A game's wishlist velocity in the two weeks before Steam Next Fest predicts its festival success more reliably than its total cumulative wishlist count, with a Spearman rank correlation of 0.81 for momentum versus 0.76 for base wishlists.

## Mechanism
Steam's discovery algorithm weights recency. Games gathering wishlists in the run-up to a festival signal active interest to the platform's ranking system, which treats recent engagement as an indicator of current relevance. A high base count with no recent activity suggests a game peaked in discovery months or years ago and may have stale audience interest. A lower base with strong recent momentum suggests active marketing beats, creator coverage, or social sharing that is still compounding. The algorithm responds to the slope of the curve, not just its height.

A secondary mechanism is audience quality. Developers generating momentum in the two weeks before the festival are typically running targeted marketing campaigns, which attracts players who are genuinely interested now rather than players who wishlisted years earlier and forgot.

## Conditions
Holds when: the developer can generate genuine marketing beats in the two-week window before the festival, such as a new trailer, a content creator video, or a community push. The correlation is for the developers who try to generate momentum, not for those who simply wait.
Fails when: a game lacks the development progress or media assets to run a credible marketing push in the two-week window. Forcing premature announcements can attract noise wishlists that do not convert, potentially weakening the quality of the signal.

## Evidence
Zukowski analyzed developer-reported results from Steam Next Fest June 2026 with Spearman rank correlation:

- Momentum (two-week pre-fest wishlists): Spearman rho 0.81, explaining 64% of variance in log-log regression
- Base (total lifetime wishlists): Spearman rho 0.76, explaining 58% of variance

High-base and high-momentum games succeeded 82% of the time, earning 3,000 or more wishlists in 28 of 34 cases. Zukowski characterizes the momentum-only strategy:

> "Momentum-maxxing is a high-risk, medium-reward strategy"

His overall prescription:

> "The safest bet is to gather a bunch of wishlists AND do a big marketing push in the 2 weeks prior."

## Signals
- Your two-week pre-festival wishlist rate is higher than your trailing 30-day average.
- Creator and press coverage is scheduled to publish in the final two weeks rather than at the Steam page announcement.
- Daily wishlist counts are accelerating rather than flat in the run-up to the festival start date.

## Counter-evidence
A Spearman correlation of 0.81 is strong but not deterministic. The gap between 0.81 and 0.76 is modest and may not justify a full strategy pivot for developers who struggle to generate reliable two-week marketing beats. The only game in the low-base, high-momentum category succeeded (1 of 1), but a sample of one is not a useful data point. First-time developers without existing audiences may not be able to generate genuine momentum in a two-week window, making the base-wishlist route more achievable.

## Cross-references
- `ins_zukowski-steam-slop-temporal-filter`: behavioral curation that runs on the same festival timeline, suppressing low-quality entries after day two. Momentum and temporal curation are complementary festival mechanics.
- `ins_zukowski-steam-personal-calendar-launch-discovery`: Steam's wishlist calendar drives launch-day sales; momentum before the festival compounds the calendar effect at launch.
- `ins_zukowski-overexposure-impossible`: the over-exposure impossibility claim implies that generating marketing beats repeatedly before the festival carries no cost in audience fatigue, supporting a momentum-heavy strategy.
