---
id: ins_build-for-next-model-not-current
operator: Sherwin Wu
operator_role: Head of Engineering, OpenAI API and Developer Platform
source_url: https://www.lennysnewsletter.com/p/engineers-are-becoming-sorcerers
source_type: podcast
source_title: Sherwin Wu — Codex inside OpenAI, engineers as managers — Lenny's Podcast
source_date: 2026-04-28
captured_date: 2026-05-01
domain: [ai-native, engineering, product]
lifecycle: [strategy-bets, ai-workflow]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 4, transferability: 5, source: 5 }
tier: A
related: [ins_remove-features-as-models-improve, ins_build-products-that-dont-yet-work, ins_november-2025-coding-inflection]
raw_ref: raw/podcasts/sherwin-wu--openai-codex-engineers-as-managers--2026-04-28.md
---

# Build for the model six months out — the current model will eat your scaffolding

## Claim
"This is the worst the models will ever be." Build product surfaces and harnesses that the next model will make work, not the current model's scaffolding. Customer requests for V1 scaffolding are valid, but the V2 model will obsolete most of those requests on arrival. Heavy investment in current-model plumbing is depreciating before you ship it.

## Mechanism
The release cadence is now monthly to quarterly. Any complex scaffolding built around current-model failure modes pays off for one cycle and then becomes overhead. Lighter, more model-agnostic harnesses pay off across cycles. The discipline is to build the *thinnest* scaffolding that produces value today and degrade gracefully when the model improves.

## Conditions
Holds when:
- The team is building on a frontier model with predictable improvement cadence.
- The product can ship value today with light scaffolding.

Fails when:
- The product has hard requirements that genuinely need heavy plumbing (regulatory, security).
- The team uses "next model will fix it" as an excuse to defer real product work.

## Evidence
> "This is the worst the models will ever be."

Kevin Weil's quote, repeated by Sherwin. Echoed by Boris Cherny ("build for six months out") and Cat Wu ("build products that don't yet work"). Three operators converging.

> "Listening to customers isn't always right in AI. The field and the models themselves change so quickly. They tend to disrupt themselves. The models will eat your scaffolding for breakfast."

— Sherwin Wu on Lenny's Podcast, 2026-04-28

## Signals
- Each model launch unlocks at least one feature in your backlog that previously didn't work.
- Scaffolding investments are tracked against expected model-launch obsolescence.
- The team has a documented "remove on next launch" list, not just a "build" list.

## Counter-evidence
Capability overhang (Amole Naik) cuts the same way but from the growth side. Both operators converge: build adaptive, not heavy. The opposite failure — perpetual deferral — is real; "next model will fix it" can be a permanent dodge. Pair the principle with explicit ship cadence.

## Cross-references
- `ins_remove-features-as-models-improve` — Cat Wu's complementary cleanup directive
- `ins_build-products-that-dont-yet-work` — same pattern, different framing
- `ins_november-2025-coding-inflection` — the threshold this principle follows
