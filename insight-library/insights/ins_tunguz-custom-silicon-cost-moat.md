---
id: ins_tunguz-custom-silicon-cost-moat
operator: Tom Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/intelligence-per-dollar-2026/
source_type: essay
source_title: "Price War in the Chip Aisle"
source_date: 2026-10-13
captured_date: 2026-10-16
domain: [ai-native, founder-operator]
lifecycle: [strategy, ai-workflow]
maturity: frontier
artifact_class: metric-model
score: { originality: 4, specificity: 5, evidence: 4, transferability: 3, source: 4 }
tier: B
related: [ins_tunguz-inference-surpasses-databases, ins_tunguz-ai-infrastructure-credit-event, ins_tunguz-three-waves-ai-consumption]
raw_ref: ""
---

# Custom silicon creates a 3.8x AI serving cost advantage while frontier intelligence scores converge

## Claim
Five frontier models score within five points of each other on Tunguz's intelligence index, but their serving costs differ by 3.8x, with the gap attributable to custom silicon, making hardware infrastructure the emerging moat in AI.

## Mechanism
Model intelligence is converging at the frontier. Serving cost is not. Hardware efficiency, specifically power consumption per token, now differentiates cost structure more than model architecture choices. Google's TPU v4 delivers 1.3 to 1.9x lower power consumption than comparable Nvidia A100 hardware (Google-reported figures), allowing Google to serve tokens at a lower cost per unit at equivalent margins. The moat compounds from two sources: the capex already deployed ($180 to 190B in Google's 2026 guidance) is difficult to replicate in the near term, and intelligence differences between labs have narrowed too far for capability to justify a premium.

Tunguz derives his estimate: Google can serve tokens roughly 44% cheaper than peers at midpoint power assumptions. This is an inference from Google's own v4-era benchmarks, not an independently audited figure.

## Conditions
Holds when: frontier models remain within five intelligence-index points of each other; model capability improvements don't reset the relative benchmark.

Fails when: one lab makes a step-change improvement in model capability that justifies a significant price premium above competitors; hardware efficiency gains converge across providers through third-party chip advances.

## Evidence
- Google Argon costs $1.99 per intelligence-index task in Tunguz's analysis, 74% below Fable 5.1, 67% below Opus 5.5, 56% below Muse Wonder, 39% below Astra.
- TPU v4 benchmarks (Google-reported): 1.2 to 1.7x faster than Nvidia A100, 1.3 to 1.9x less power.
- Derived estimate: approximately 80% more tokens per serving cost at midpoint power assumptions.
- Google 2026 capex guidance: $180 to 190B, versus approximately $120B for Microsoft despite Microsoft having a cloud business approximately 37% of Google's size.
- Satya Nadella on Maia 300: "delivers 40% more tokens per watt compared to leading GPU-based systems."
- OpenAI Jalapeño: reportedly delivers 1.5 to 1.9x more throughput per watt than Nvidia GB200/GB300, but Tunguz adjusts to approximately 1.5x on a matched basis against comparable hardware.

## Signals
- Google Argon pricing falling faster than competitors when labs make public price cuts
- Google capex guidance growing proportionally faster than Microsoft and AWS
- Token output costs per dollar converging slower between Google and non-Google labs than intelligence benchmark gaps would predict

## Counter-evidence
Google's Amin Vahdat reportedly attributes most intelligence-per-watt gains to model-side improvements, not silicon. OpenAI's Jalapeño narrows the per-watt throughput gap to approximately 1.5x on a matched basis, suggesting the silicon advantage is eroding faster than capex figures imply. The $1.99 per task figure uses Tunguz's own intelligence-index methodology and is not independently benchmarked.

## Cross-references
- `ins_tunguz-inference-surpasses-databases`: AI inference spending will overtake database software by 2027; custom silicon cost structure determines which lab captures that market.
- `ins_tunguz-ai-infrastructure-credit-event`: The AI infrastructure financing is a macroeconomic credit event; hardware capex already committed is the mechanism behind the debt pressure.
- `ins_tunguz-three-waves-ai-consumption`: Token consumption is growing in three order-of-magnitude waves; serving cost per token is the binding constraint on that growth trajectory.
