---
id: ins_skok-salesperson-unit-economics
operator: David Skok
operator_role: General Partner Matrix Partners; founder For Entrepreneurs blog
source_url: https://www.forentrepreneurs.com/saas-metrics-2/
source_type: essay
source_title: "SaaS Metrics 2.0 — Sales Capacity Planning"
source_date: 2015-09-01
captured_date: 2026-05-05
domain: [sales-cs, gtm, leadership]
lifecycle: [hiring-team-design, capacity-planning, financial-planning]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 5 }
tier: A
related: [ins_ltv-cac-ratio-and-cash-flow-trough, ins_skok-sales-rep-failure-rate]
raw_ref: raw/expert-content/experts/david-skok.md
---

# Salesperson unit economics is its own model — ramp time, payback, and failure rate, not just customer LTV/CAC

## Claim
Most SaaS finance models track customer-level unit economics (CAC, LTV, payback period) but ignore salesperson-level unit economics — ramp time to full productivity, payback period for the rep's fully-loaded cost, and failure rate (% of hires who never reach quota). These metrics determine how many hires you actually need to hit revenue plan and how much cash burns during ramp. They are distinct from customer unit economics and require their own model.

## Mechanism
A new sales hire produces no revenue for the first 3-6 months while ramping, costs the company their fully-loaded compensation throughout, and has a non-trivial probability of never reaching quota at all. The cumulative cash burn per hire is substantial; the cumulative cash burn across a hiring class is the single largest growth-stage expense most SaaS companies face. Without a salesperson-level model, finance plans assume linear quota attainment that doesn't match reality. The right model surfaces (a) how many hires to plan against the revenue target after ramp + failure adjustments, and (b) how much cash you need to fund the ramp before quota cohort starts paying back.

## Conditions
Holds when:
- The company has a dedicated sales team with quota-based compensation.
- Ramp times are non-trivial (most enterprise B2B; less critical for inside / SMB).
- Cash position requires explicit modeling of pre-payback burn.

Fails when:
- Pure self-serve / PLG with no sales hires — model doesn't apply.
- Hyper-fast-ramp inside-sales motions where ramp is < 30 days.
- The company has unlimited capital and can absorb mis-modeled hiring without consequence.

## Evidence
> "This salesperson-level unit economics model is distinct from customer-level unit economics and is essential for modeling hiring velocity."

— see `raw/expert-content/experts/david-skok.md` line 17.

## Signals
- Hiring plan submitted to board includes ramp curves, payback timelines, and failure-rate assumptions explicitly.
- Sales-rep cohort tracking shows actual ramp curves vs. planned, with adjustments to next-cohort assumptions.
- Cash plan / runway calculation is sensitive to hiring velocity, not just revenue plan.

## Counter-evidence
For early-stage companies before a repeatable sales motion, salesperson unit economics is too noisy to model — sample size is too small and the motion is changing too fast. Skok's framework is most operative once there are 5+ reps and a stable motion; below that, founder-led selling dominates and the model is moot.

## Cross-references
- `ins_skok-sales-rep-failure-rate` — the hard input the model requires.
- `ins_ltv-cac-ratio-and-cash-flow-trough` — customer unit economics counterpart.
