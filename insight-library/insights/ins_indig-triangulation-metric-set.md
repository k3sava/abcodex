---
id: ins_indig-triangulation-metric-set
operator: Kevin Indig
operator_role: Founder, Growth Memo; growth advisor and SEO researcher
co_operators: [George Bonaci]
source_url: https://www.growth-memo.com/p/the-collapse-of-attribution
source_type: essay
source_title: "The Collapse of Attribution"
source_date: 2026-09-28
captured_date: 2026-09-30
domain: [growth-demand, pmm, seo]
lifecycle: [attribution-measurement, strategy, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_indig-attribution-organic-misfit, ins_indig-ai-search-attribution-gap, ins_indig-gsc-attribution-gap]
raw_ref: ""
---

# Three metrics with non-overlapping blind spots, triangulated together, produce a more reliable channel-contribution estimate than any attribution model.

## Claim
Because no single metric covers the full path from discovery to conversion, the practical replacement for attribution is a triangulated set: one metric for exposure, one for behavioral engagement, and one for causal outcomes. Each has different blind spots, and the overlap in their signals is where confidence lives.

## Mechanism
Attribution fails because it requires a closed-loop signal chain. Triangulation works around that by combining signals that do not share the same gap. Exposure metrics (share of voice in AI search, brand mention frequency, ad reach) capture presence without requiring conversion events. Behavioral signals (branded search volume, direct traffic trends, email open rates) capture engagement without requiring session-level attribution. Causal experiments (geo holdouts, randomized control groups, quasi-experiments) capture outcome evidence without relying on referral headers. No single leg of the triangle is accurate. Together, they triangulate to a confidence range. Where all three point the same direction, confidence is high. Where they diverge, the divergence itself is a diagnostic signal.

## Conditions
Holds when: the marketing mix includes brand, content, or organic channels with non-linear discovery paths, and the business has enough volume and patience to run incrementality experiments.

Fails when: budget is too small to run meaningful holdout experiments, or the product category moves too fast for the experimental feedback cycle to be actionable.

## Evidence
Indig developed this framework with George Bonaci, VP Growth at Ramp, in September 2026. Bonaci's critique drives the design: "Attribution and direct measurement has become a crutch replacing critical thinking." The triangulation framework is a response to that crutch. Indig names three components: exposure metrics, behavioral signals, and incrementality testing. All three require deliberate instrument choice, not dashboard defaults.

## Signals
- Teams that adopt triangulation identify channels they were under-investing in (typically organic) that attribution models had previously credited to other channels.
- Incrementality experiments surface lift from brand and content programs that attribution dashboards recorded as zero-contribution.
- Behavioral signals like branded search lift become leading indicators of future revenue, replacing trailing attribution conversion counts.

## Counter-evidence
Triangulation requires more analytical sophistication than reading an attribution dashboard. Teams under resource pressure or without strong data literacy may generate false confidence from poorly executed triangulation (bad holdout design, geographic confounders, small sample sizes). The framework is only as strong as the quality of each instrument. Indig acknowledges this is harder than attribution, but argues the difficulty is warranted because attribution's apparent ease is an illusion.

## Cross-references
- `ins_indig-attribution-organic-misfit`: the structural argument for why attribution fails organic channels.
- `ins_indig-ai-search-attribution-gap`: the AI-specific failure mode this framework addresses.
- `ins_indig-gsc-attribution-gap`: the GSC-specific measurement gap that triangulation partially addresses.
