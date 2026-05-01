---
id: pb_synthetic-audience-test
title: Synthetic audience test — pre-flight buyer panel
maintained_by: codex maintainers
captured_date: 2026-05-01
domain: [messaging, ai-native-gtm, conversion]
uses_cards: [ins_jtbd-interviews-surface-customer-language, ins_test-positioning-in-live-sales-pitch]
originating_operators: []
secondary_sources:
  - flywheel/skills/synthetic-audience-test/SKILL.md
  - flywheel/skills/synth-audience/SKILL.md
---

# Synthetic audience test playbook

Pre-flight test of a positioning, LP, ad copy, or outbound opener variant against grounded buyer personas before live calibration. Returns a structured read (clarity, objections, comprehension gaps, predicted intent delta). **Directional only** — not a gate verdict. Use BEFORE filing a gate packet on the variant.

The synthetic audience is BUYERS, not marketers — like Nooks for SDR cold-call practice. Trusted-5 reviewers in the loop are sales/CS roles closest to the buyer voice, not internal marketers.

Source synthesis: Wynter B2B Message Layers (Clarity / Relevance / Value / Differentiation + Friction inverse), Gartner G00823537 Market Guide for B2B Message Testing (Clarity / Credibility / Urgency / Uniqueness / Value / Relevance), `ins_jtbd-interviews-surface-customer-language` (Moesta — verbatim language as primary signal).

## When to use

- Positioning claim before opening a positioning-update gate.
- LP hero variant before opening an experiment-launch gate.
- Ad copy before opening a content-publish gate.
- Cold-outbound opener or cancellation-save framing before sending.

## When NOT to use

- Pricing variants. Synthetic panels cannot predict elasticity.
- Novel product behavior with no analog. Hallucination risk.
- Anything where measured behavior is cheap and fast to get directly. Live > synthetic.

## Inputs

1. The variant under test (one block of copy, or N variants for comparison).
2. Optional: target persona slice. Default: all personas.
3. Optional: comparison anchor (current live copy, competitor claim) — improves the read.

## 7-dimension scoring rubric

Wynter ∪ Gartner. Score 1–5 per dimension per persona. **Wynter order rule:** if clarity < 3, do NOT score the later dimensions. The buyer never reaches them.

```yaml
variant_id: <id>
tested_at: YYYY-MM-DD
buyer_state: cold | researching | shortlisting | comparing | objecting | renewing
panel:
  - persona: <id>
    clarity_1to5            # I get it
    relevance_1to5          # It's for me
    value_1to5              # I want the promises
    differentiation_1to5    # I get how this is different
    credibility_1to5        # I believe the claims (data, not salesy)
    urgency_1to5            # I should act now
    friction_1to5           # Resistance / doubts (INVERSE — lower is better)
    one_read_takeaway: <verbatim — what the buyer thinks this says>
    objections: [verbatim]
    comprehension_gaps: [bullets]
    irrelevant_message_avoidance: true|false
    intent_lift_vs_anchor: -2..+2
    confidence: 0.0–1.0
    [VERIFY]_flags: [<dims where score derived from <50% literal overlap>]
predicted_winner: <variant_id>
forecast_recorded: false
```

## Output mode: directional only

Per iter-3 debrief: synthetic panels rank-invert on narrow high-intent product LPs at low N. Treat the read as direction, not verdict. Live calibration follows.

## Composes with

- **Voice-enforce / humanizer** — passes voice gates first.
- **Claim-verify** — substrate-truth verified before panel test.
- **CRO rubric** — runs after lp-cro on LP variants.
- **Gate packets** — synthetic-audience read goes IN the packet; downstream consumers must not tag the read as a gate verdict.

## Refusal patterns

- Panel personas missing or stale → refuse.
- Variant lacks a comparison anchor for high-stakes use → ask before scoring.
- Pricing or novel-behavior variant → refuse and recommend live test.

## Common failure modes

- Treating the read as a gate verdict.
- Running synthetic instead of cheap live tests.
- Personas built from internal assumptions, not VoC. Synthetic audience drifts from real buyer.
- Marketers as the trusted-5 reviewers. The signal is buyer voice — sales and CS are closer.
- Skipping the Wynter cascade — scoring later dimensions when clarity already failed.
- N too low. Low-N inverts on narrow high-intent product LPs.

## Calibration

Forecast recorded BEFORE live result. Brier score the panel's `predicted_winner` against the live winner. Track per-persona calibration across many bets. Personas with poor calibration get retired or refined.
