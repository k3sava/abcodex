---
id: ins_tunguz-compute-threshold-pacing-fallacy
operator: Tom Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/what-does-the-pause-mean/
source_type: essay
source_title: "What Does Pacing Mean?"
source_date: 2026-09-14
captured_date: 2026-09-21
domain: [ai-native]
lifecycle: [strategy-bets]
maturity: frontier
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 2, source: 4 }
tier: C
related: [ins_amodei-embedded-evaluators-pacing]
raw_ref: ""
---

# Fixed compute thresholds fail as AI pacing policy because training compute grows roughly five-fold annually, making any static ceiling self-defeating

## Claim
No AI pacing proposal has named a speed. Five competing camps each define "pacing" to serve different interests, and the one mechanism that could produce an actual number, a training compute threshold, has already failed: training compute grows roughly five times annually, making fixed ceilings obsolete before they can be enforced.

## Mechanism
A compute threshold sets a FLOP ceiling above which new training runs require regulatory review or are prohibited. The 2023 U.S. executive order set this ceiling at 10^26 FLOPS. The mechanism fails because frontier training compute quintuples roughly every year. A ceiling set today marks the frontier in roughly 12 months. The 2023 order was revoked before any model crossed it; Grok-3 shipped shortly after at a scale that would have crossed the threshold. A fixed number requires constant legislative revision to stay meaningful, but rulemaking cycles run 18 to 24 months. Compute thresholds are structurally behind the frontier they are designed to govern.

## Conditions
Holds when: AI training compute continues scaling at historical rates (~5x annually) and regulatory rulemaking cycles remain slower than that pace.
Fails when: training compute scaling plateaus, or governance bodies build automatic threshold-escalation mechanisms tied to observed frontier scaling.

## Evidence
Tunguz analyzed Dario Amodei's call to "pace" AI development and found five camps, each with a different definition of acceptable speed: the interpretability camp (understanding before deployment), the labor camp (worker protection from displacement), the economic camp (growth to service AI CapEx debt), the geopolitical camp (sustaining U.S. position against China), and the regulatory-capture camp (no new rules at all). None named a pace metric. The 2023 U.S. executive order set 10^26 FLOPS as its quantitative lever. That order was revoked before any frontier model crossed it. Grok-3 shipped in the weeks following, illustrating the gap between rulemaking timelines and training compute velocity.

## Signals
- A pacing proposal uses "speed" or "pace" without specifying a metric or enforcement trigger.
- Regulators cite compute thresholds from orders older than 12 months without proposing updated values.
- A frontier model ships whose training run would have crossed the threshold set by prior legislation.

## Counter-evidence
Interpretability researchers argue that capability thresholds, not compute thresholds, are the right lever: governing what models can do (autonomous research, weapon design assistance) rather than how much compute trained them. Capability-based thresholds can remain stable even as raw compute scales. The EU AI Act and proposed U.S. legislation are exploring capability-based definitions, which would sidestep the scaling-obsolescence problem Tunguz identifies.

## Cross-references
- `ins_amodei-embedded-evaluators-pacing`
