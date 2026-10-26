---
id: ins_zukowski-snf-wednesday-algorithm-switch
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
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 3, source: 4 }
tier: B
related: [ins_zukowski-nextfest-momentum-beats-base, ins_zukowski-steam-slop-temporal-filter]
raw_ref: ""
---

# Valve switches Steam Next Fest from randomized baseline visibility to merit-based ranking on the first Wednesday

## Claim
In Steam Next Fest, every game receives minimum randomized front-page placement for the first one to two days. On the first Wednesday, Valve shifts to merit-based ranking that concentrates visibility on games already accumulating the most demo plays and wishlist activity.

## Mechanism
The first phase gives even low-base games a signal-collection window. Valve reads early play-session length, wishlist velocity, and explicit feedback gathered in that window to rank games for the remainder of the festival. Games that entered SNF with a large pre-existing follower base and strong recent momentum convert the minimum exposure into engagement fast enough to win the transition to merit. Games that rely on the lottery phase alone hit a cliff once merit-based ranking takes over.

The practical consequence: a game's decisive competition window is days one and two, not the full six days. By Wednesday, rank order is largely determined by pre-festival preparation, not festival-week actions.

## Conditions
Holds when: Valve maintains the current SNF algorithm structure. Valve does not document this mechanism publicly. Zukowski inferred it from behavioral patterns across multiple festival editions.

Fails when: Valve changes the timing or weighting of the merit transition. Games in genres with strong day-three and day-four organic traffic may recover positions, but the evidence suggests Wednesday is the pivot.

## Evidence
Zukowski identified the switch while analyzing October 2026 SNF behavioral data across 7,240 games. He describes the mechanism directly:

> "On the first Wednesday of SNF, Valve switches from giving all games a baseline of visibility to giving visibility to top-performing games."

He clarifies: Valve gives each game the same *minimum* through randomized front-page placement on days one and two, not identical total visibility.

## Signals
- Your wishlist growth rate accelerates in the first 48 hours of SNF, then flattens by day three.
- Your day-one demo CCU rank closely predicts your day-five rank.
- Developers with strong pre-festival followings see compounding traffic from Wednesday onward; developers without a pre-built audience see traffic drop after day two.

## Counter-evidence
The mechanism is inferred from behavioral observation, not Valve documentation. Valve does not publish festival algorithm specs. The claim that Wednesday is the transition day is based on Zukowski's reading of CCU curves across editions. A single algorithm change by Valve would invalidate the timing without notice.

## Cross-references
- `ins_zukowski-nextfest-momentum-beats-base`: why pre-festival wishlist momentum predicts festival outcomes better than total accumulated wishlists; the Wednesday switch is the mechanism that activates the momentum advantage.
- `ins_zukowski-steam-slop-temporal-filter`: the temporal AI-slop suppression that operates on days three to six; both mechanisms are time-structured curation on the same festival timeline.
