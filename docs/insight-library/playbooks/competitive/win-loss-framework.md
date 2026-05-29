---
id: pb_win-loss-framework
title: Close the loop from won and lost deals back to positioning
maintained_by: codex maintainers
captured_date: 2026-05-01
domain: [competitive, sales-enablement, voc]
uses_cards: [ins_jtbd-interviews-surface-customer-language, ins_no-decision-is-the-real-competitor, ins_sales-team-detects-positioning-failure-first]
originating_operators: [bob-moesta]
secondary_sources:
  - team-brain/workflows/win-loss-framework.md
  - team-brain/workflows/call-intelligence.md
---

# Close the loop from won and lost deals back to positioning

Closes the loop from closed deals back to positioning, competitive, and CS. Win/loss without continuous synthesis stays ad hoc; the signal is in the deals, the gap is in the loop. This playbook standardizes the loop.

Source synthesis: Bob Moesta (JTBD switch interview, `ins_jtbd-interviews-surface-customer-language`); Dunford (sales detects positioning failure first, `ins_sales-team-detects-positioning-failure-first`); the structural insight that "no decision" is the real competitor (`ins_no-decision-is-the-real-competitor`).

## When to use

- Continuous monthly cadence on closed-lost.
- Quarterly synthesis pass.
- After any pricing change or competitive entrant.
- Before a positioning or battlecard refresh.

## The loop

```
Closed-lost deal  → call-intel deep dive (if AE call recorded)
                  → closed-lost interview (5–7 question script)
                  → theme extraction
                  → positioning-drift signal (if patterns diverge from ICP / pillar)
                  → battlecard insight (if competitive loss)
                  → objection-library update

Closed-won deal   → pattern match against best-deal cohort
                  → narrative reinforcement signal
                  → case-study candidate flag (if allowed-claims fit)
```

## Closed-lost interview question bank

Keep to 7 max, one primary per theme:

1. **Timing.** What was happening in your business when you started looking?
2. **Trigger.** What made you start evaluating solutions at that moment?
3. **Alternatives.** Who else did you look at? What was the short list?
4. **Decision drivers.** What were the 2–3 things that mattered most?
5. **Vendor comparison.** What did the vendor you chose do better than us?
6. **Our gap.** Where did we fall short, price, capability, team fit, confidence?
7. **Would reopen?** What would we need to show you to get back in the conversation?

## Theme extraction (monthly)

Cluster closed-lost reasons into six gap types:

- **Positioning gap.** Prospects thought we were X; we are Y. Feeds positioning.
- **Capability gap.** Genuinely lacks feature. Feeds product.
- **Competitive gap.** Competitor positioned a capability we have but we didn't communicate. Feeds battlecards.
- **Price gap.** Genuine value-price mismatch. Feeds pricing.
- **Trust/brand gap.** Confidence issue. Feeds content + social.
- **Team-fit gap.** Hiring/timing. Not addressable via PMM.

## Closed-won pattern match

Pattern-match every won deal against the best-deal cohort. Surface narrative reinforcement signals. Flag case-study candidates that fit allowed-claims rules.

## Outputs

1. `themes.md`, top 5 lost-reason themes with supporting transcripts.
2. `won-patterns.md`, top 3 won-reason patterns with supporting transcripts.
3. Per-theme signals emitted to positioning, battlecard, objection library.
4. Case-study candidate list.

## Non-goals

- Customer surveys. Too many caveats. Interviews only.
- Calling every lost deal. Capacity-bound, sample smartly, weight by ARR.
- Public case studies without written customer approval.

## Quality gates

- Every closed-lost deal in scope has a written disposition reason; interviews on a weighted sample.
- Theme extraction monthly, not ad hoc.
- Drift between themes and current positioning surfaced explicitly.
- Battlecard updates traced to specific lost deals.
- No invented quotes, every quote in themes file traces to a recorded interview or call.

## Common failure modes

- CRM disposition codes treated as the answer. Codes tell you who; interviews tell you why.
- One-shot win/loss audits that never recur. Themes only matter if they update positioning.
- Surveying instead of interviewing. Surveys average out the signal.
- Sampling skewed to closed-lost only. Closed-won patterns are equally informative.
- "No-decision" deals excluded from analysis. The real competitor is often inertia.
- Themes generated but not propagated, battlecards and positioning not updated.
- Public case studies pulled from unapproved transcripts.
