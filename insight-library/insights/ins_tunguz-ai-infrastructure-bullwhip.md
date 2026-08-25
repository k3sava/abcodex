---
id: ins_tunguz-ai-infrastructure-bullwhip
operator: Tomasz Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://www.tomtunguz.com/the-ai-cost-stack/
source_type: essay
source_title: "The AI Bullwhip"
source_date: 2026-08-23
captured_date: 2026-08-25
domain: [ai-native, engineering]
lifecycle: [strategy, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 4, transferability: 3, source: 4 }
tier: B
related: [ins_tunguz-intelligence-per-watt, ins_breunig-fable-tier-routing]
raw_ref: ""
---

# AI infrastructure shortages cascade through hardware layers in multi-year waves, not all at once

## Claim
Each AI infrastructure bottleneck resolves in one hardware layer only to surface in the next, following the classic bullwhip pattern: GPU constraints in 2023, memory and flash in 2024-25, CPUs in late 2025, storage in 2026, and data center power capacity through 2031.

## Mechanism
A demand shock at the application layer propagates upstream through hardware supply chains. Each layer has a manufacturing lead time of 12-24 months, so shortages and overreactions arrive one layer at a time. Suppliers face an impossible choice: underbuild and lose market share, or overbuild and absorb fixed costs when demand normalizes. The mismatch between order books and actual demand amplifies at each layer, producing a sequential rather than simultaneous constraint cascade.

## Conditions
Holds when: AI infrastructure demand grows faster than any single hardware layer can respond within 12 months, forcing sequential constraint.
Fails when: Demand stabilizes or contracts sharply before the cascade completes. Over $2 billion in data center expansions arriving 2027-2028 may flip the 2026 shortage into a 2028 glut if revenue growth slows.

## Evidence
Tunguz traces a specific cascade with data at each layer: H100 GPU rental rates exceeded $9/hour in 2023; SSD prices rose 80% quarterly in mid-2024 as manufacturers shifted production toward High Bandwidth Memory; Intel Xeon ASPs rose 27% year-over-year in late 2025 as agentic workloads shifted CPU-to-GPU ratios to 1:1; Western Digital and Seagate 2026 storage production sold out; data centers now cost $20 billion per gigawatt with turbine lead times of three years and order books extending through 2031.

> "If you don't build enough, you lose market share. If you build too much, you get dinged for fixed costs."

## Signals
- Infrastructure pricing for a given hardware layer spikes while adjacent layers remain stable.
- Your cloud provider announces shortages or extended lead times for a specific component class.
- Hardware average selling prices for a component rise 20% or more year-over-year without a new product generation explaining the increase.

## Counter-evidence
Bullwhip overcorrection is the equal risk. If AI software revenue does not justify $20B/GW facility costs by 2028, the same cascade dynamic produces surplus rather than shortage. Historical semiconductor cycles suggest the overshoot often exceeds the original shortage. Tunguz names this risk explicitly: "over $2 billion in infrastructure expansions arriving 2027-2028 may face overcapacity."

## Cross-references
- `ins_tunguz-intelligence-per-watt`: local models now handle 89% of everyday queries at lower cost, partially reducing the demand pressure that drives the cascade.
- `ins_breunig-fable-tier-routing`: premium model pricing forces routing optimization, which shapes the demand curve for different hardware tiers.
