---
id: ins_tunguz-power-ai-ceiling-2027
operator: Tom Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/watts-in-store-for-2027-inference/
source_type: essay
source_title: "Watts in Store for 2027: The AI Ceiling"
source_date: 2026-11-04
captured_date: 2026-11-07
domain: [ai-native-company-building, engineering]
lifecycle: [ai-workflow, strategy-and-bets]
maturity: applied
artifact_class: metric-model
score: { originality: 3, specificity: 5, evidence: 4, transferability: 3, source: 5 }
tier: B
related: [ins_tunguz-harness-layer-margin-engine]
raw_ref: ""
---

# Power, not chips, is the binding constraint on AI compute growth in 2027

## Claim
Power capacity in gigawatts, not processor supply, is the operative ceiling on AI compute in 2027, because finished server racks sit idle in warehouses while utility connections run years behind.

## Mechanism
When a data center is built faster than the grid can energize it, the economic constraint shifts from silicon to electrons. GPU rental prices rise not because chips are scarce but because powered slots are. The resulting scarcity forces three adaptations: harness efficiency (using context more carefully to serve more work per powered rack), algorithmic innovation (smaller models with comparable output), and pricing differentiation by latency. Each adaptation compresses cost per task even as the infrastructure bottleneck holds.

## Conditions
Holds when: grid interconnect timelines continue to lag data center construction, which is the current documented state.
Fails when: utility power expansion accelerates faster than current projections, or aggregate AI demand plateaus through efficiency gains.

## Evidence
Tunguz reports US capacity rising from about 38 GW to an 81 GW ceiling in 2027, with a consensus forecast of 43 GW of new build. Amazon reportedly received about $5B of Nvidia GB300 racks in August 2026 before substation power was ready. Short-term GPU rental rates reportedly rose from $3 to $12-13 per hour. Shell and concrete costs tripled to $1,033 per square foot. Gas turbines are reported as sold out through 2029.

## Signals
- GPU rental spot prices rising faster than chip cost curves suggest they should
- Data center announcements that name a power delivery date separately from a build completion date
- "Stranded rack" language in earnings calls or filings

## Counter-evidence
Efficiency gains may outrun the power constraint. Tunguz cites a 27B-parameter Qwen model scoring 52 on the Artificial Analysis index versus 51 for a 753B model. If per-task compute requirements fall fast enough, powered capacity becomes sufficient without new grid investment. DeepSeek, Qwen, and Kimi are cited for recent efficiency gains that challenge this ceiling.

## Cross-references
- ins_tunguz-harness-layer-margin-engine
