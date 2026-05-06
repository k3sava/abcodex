---
id: ins_anchoring-pricing-negotiation
operator: Daniel Kahneman
operator_role: Nobel laureate; Princeton emeritus; co-founder of behavioral economics
source_url: https://en.wikipedia.org/wiki/Anchoring_effect
source_type: book
source_title: "Thinking, Fast and Slow — Anchoring"
source_date: 2011-10-25
captured_date: 2026-05-05
domain: [gtm, sales-cs, pmm]
lifecycle: [pricing-packaging, sales-enablement, deal-strategy]
maturity: foundational
artifact_class: framework
score: { originality: 4, specificity: 5, evidence: 5, transferability: 5, source: 5 }
tier: A
related: [ins_system1-system2-thinking, ins_loss-aversion-status-quo-bias]
raw_ref: raw/expert-content/experts/daniel-kahneman.md
---

# The first number sets the range, anchoring decides the negotiation before it starts

## Claim
The first number a buyer encounters disproportionately shapes every subsequent estimate, even when the buyer knows the anchor is arbitrary. In B2B pricing this means the initial pricing conversation defines the negotiation range, not the final price; the discount you eventually concede is computed from your anchor, not from value.

## Mechanism
System 1 fixes on the first numerical reference point and adjusts incrementally outward. The adjustment is almost always insufficient, final estimates land closer to the anchor than to what an unanchored evaluator would say. This holds even when subjects know the anchor was generated randomly (the classic Kahneman/Tversky wheel-of-fortune experiment). For pricing, the implication is that the published price, the first quote, and the first discount asked-for all become anchors; the seller who lets the buyer set the anchor is negotiating from inside a range the buyer chose.

## Conditions
Holds when:
- The category lacks a salient market price (most B2B SaaS, professional services, custom integrations).
- The buyer has high uncertainty about fair value and is using cues to construct an estimate.
- Negotiation is over multiple rounds, where each round adjusts incrementally from the prior anchor.

Fails when:
- The market has a transparent reference price (commodity SaaS, public-listed pricing pages, RFP-driven procurement with comp data).
- The buyer is professional procurement with comp data and treats the anchor as a starting bluff.
- Counter-anchors are deployed early and explicitly (a strong "list price" + "package floor" frame).

## Evidence
> "the first number you encounter disproportionately influences all subsequent estimates (why initial pricing discussions set the range for the entire negotiation)"

· see `raw/expert-content/experts/daniel-kahneman.md` line 16.

## Signals
- Sales motion that opens with a high-anchor list price + clear value justification, then negotiates to a target price within a pre-defined floor.
- Pricing pages that publish the high anchor explicitly rather than leaving it to discovery.
- Discount-rate analytics show tighter clustering around list when reps anchor first vs. when they let the buyer state a budget first.

## Counter-evidence
Aggressive high-anchoring against unsophisticated buyers can backfire as a trust violation when discovered, especially in PLG bottom-up motions where buyers compare notes in public. In transparent markets (consumer subscriptions, public PaaS), high anchors get punished by review sites within days.

## Cross-references
- `ins_system1-system2-thinking`, anchoring is one of the named System-1 biases that requires structured process to override.
- `ins_loss-aversion-status-quo-bias`, anchoring and loss-aversion compound: a high anchor combined with the buyer's loss-aversion to switching produces the largest deal sizes.
