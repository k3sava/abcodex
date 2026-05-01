---
id: pb_measurement-framework
title: PMM measurement framework
maintained_by: codex maintainers
captured_date: 2026-05-01
domain: [measurement, pmm, gtm]
uses_cards: [ins_absolute-counts-over-conversion-rates, ins_long-term-holdouts-30-40-evaporate, ins_experimentation-paralysis]
originating_operators: [archie-abrams, elena-verna]
secondary_sources:
  - team-brain/workflows/cro-experiment.md
---

# Measurement framework playbook

Design, implement, and operate a PMM measurement system. Synthesizes Reforge's metric constellation, OKR (Doerr), and the F.A.C.T.S. + MAYO frameworks. Output is a measurement blueprint sized to the team's data maturity.

## When to use

Pre-OKR season. After a reorg. When PMM and sales pipeline numbers do not reconcile. When the team has many dashboards and no shared source of truth.

## Steps

1. **Audit current state.** Inventory data sources, tracking tools, reporting gaps.
2. **Define business-aligned goals.** Translate company OKRs into measurable PMM goals.
3. **Select the metric constellation (Balfour/Reforge).** Choose output metrics across retention, engagement, monetization. Decompose each into input metrics.
4. **Map metrics to PMM workstreams.** Messaging, launches, enablement, CI, campaigns. Assign KPIs.
5. **Choose attribution model.** Blend MMM (strategic), MTA (tactical), incrementality (confidence). Match to sales-cycle length and data maturity.
6. **Design the KPI dashboard.** Stakeholder-specific views: exec, PMM team, cross-functional.
7. **Set reporting cadence.** Weekly / monthly / quarterly tied to actual decision forums. Reports arrive BEFORE the meetings where decisions get made.
8. **Integrate data sources.** CRM + analytics + ad platforms + PMM tools into unified reporting.
9. **Establish baselines and targets.** Use historical data. No aspirational guesses.
10. **Build feedback loops.** Review, refine, retire metrics as priorities shift.

## Frameworks

- **Metric constellation:** Output metrics across retention/engagement/monetization, with input metrics decomposed under each, and tradeoff metrics monitored opposite each.
- **OKR:** Objectives + 2–5 Key Results.
- **F.A.C.T.S. (PMA):** Focus, Alignment, Commitment, Tracking, Stretching.
- **MAYO (Dock):** Motions, Actions, Yield, Outcomes.
- **Three-workstream PMM model:** Value-Based Messaging / Product GTM / Revenue Enablement.
- **Launch KPI hierarchy:** Awareness → Engagement → Adoption → Revenue, tiered T0–T3.

## Quality gates

- Every KPI traces to revenue, pipeline, or customer value. No orphan vanity metrics.
- Output metrics cover all three dimensions (retention, engagement, monetization).
- Input metrics are actionable — the team can directly influence them.
- Tradeoff metrics monitored alongside primary metrics.
- Attribution model matches actual sales-cycle length.
- Cadence matches decision rhythm.
- Baselines from historical data, not guesses.
- Sales/product/finance agree on shared definitions.
- Quarterly review and retire/replace cycle defined.

## Common failure modes

- Single north-star fixation. Hides problems in the other dimensions.
- Output metrics without input metrics. You detect problems too late.
- Vanity metrics masquerading as KPIs.
- Composite metrics that merge dissimilar actions and hide tradeoffs.
- No attribution plan before launch. Tracking added post-go-live cannot prove impact.
- 50+ KPIs creating paralysis. Focus on 3–7 per workstream.
- Misaligned MQL definitions across marketing/sales.
- Short-termism — measuring performance only, ignoring brand and long-term pipeline.
- Static framework that never gets revisited.
- Siloed reporting tools.
- Optimizing conversion rates while absolute counts shrink (`ins_absolute-counts-over-conversion-rates`).
- Calling experiment wins before long-term holdouts evaporate (`ins_long-term-holdouts-30-40-evaporate`).
- Running tests that won't reach significance in a month (`ins_experimentation-paralysis`).

## Outputs

1. North-star metric constellation.
2. OKR structure.
3. KPI dashboard spec with stakeholder views.
4. Reporting cadence + review forums.
5. Attribution model selection with rationale.
6. PMM metrics by deliverable type.
7. Baselines + targets.
8. Data integration requirements.
