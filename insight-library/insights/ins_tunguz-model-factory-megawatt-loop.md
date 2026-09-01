---
id: ins_tunguz-model-factory-megawatt-loop
operator: Tomasz Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/revenue-per-megawatt/
source_type: essay
source_title: "Revenue per Megawatt & The AI Model Factory"
source_date: 2026-08-27
captured_date: 2026-09-01
domain: [ai-native, engineering]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: metric-model
score: { originality: 3, specificity: 5, evidence: 4, transferability: 3, source: 4 }
tier: B
related: [ins_tunguz-intelligence-per-watt, ins_tunguz-model-substitution-reinvestment]
raw_ref: ""
---

# AI model labs generate 3-5x revenue per megawatt over cost, and the margin compounds into the next training run

## Claim
AI model companies operate as electricity-to-intelligence converters: they generate up to $50M in revenue per megawatt against a $10-15M compute cost, and the margin funds a compounding training loop that makes each subsequent model cheaper to run.

## Mechanism
Inference capacity bought at $10-15M per megawatt is sold as cognitive services at up to $50M per megawatt. The gross margin funds the next training run. Each new model is more parameter-efficient than the previous one, which lowers inference cost per unit of output even as intelligence improves. Cheaper inference expands the margin pool again, and the cycle repeats. The compounding asset is not any single model but the model factory as a system. Model efficiency improvement (not pricing power) is the primary driver: a model delivering identical intelligence at 90% lower parameter count generates higher per-megawatt profit even if the per-token price falls.

## Conditions
Holds when: a lab has reached sufficient scale that inference revenue reliably outpaces training cost, as Anthropic did, moving from -94% gross margin in 2024 to 40-50% in 2025.
Fails when: a lab is pre-scale and training costs dominate, or when open-weight competitors drive inference pricing below the cost recovery threshold faster than the lab can improve efficiency.

## Evidence
Tunguz cites SemiAnalysis analyst Dylan Patel on the unit economics:

> "The base cost of compute tends to be around 10 or 13 or $15 million per megawatt. In the case of Anthropic, the revenue has gone as high as $50 million per megawatt."

Jason Warner of Poolside names the structural asset:

> "The Model Factory is the compounding asset."

Anthropic's reported trajectory: -94% gross margin in 2024, 40-50% gross margin in 2025, $10.9B revenue with $559M operating profit in 2026.

## Signals
- Gross margin improves with each model generation even when per-token pricing falls
- Training run costs per intelligence unit drop each cycle
- A lab reinvests inference profit without raising new external capital in a given training cycle

## Counter-evidence
Open-weight competitors such as GLM-5.3-Flash reportedly match Claude Opus performance at a 90-97% cost reduction. If the efficiency curve of open models outpaces proprietary ones, the ASP compression outpaces the margin reinvestment cycle and the compounding loop breaks.

## Cross-references
- ins_tunguz-intelligence-per-watt (local model efficiency and the intelligence-per-watt metric for on-device deployment)
- ins_tunguz-model-substitution-reinvestment (the substitution wave that compresses pricing as model parity rises)
