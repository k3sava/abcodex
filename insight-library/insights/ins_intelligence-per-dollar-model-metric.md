---
id: ins_intelligence-per-dollar-model-metric
operator: Tomasz Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/tokens-per-result/
source_type: essay
source_title: Intelligence Per Dollar
source_date: 2026-06-03
captured_date: 2026-06-04
domain: [ai-native, engineering]
lifecycle: [ai-workflow, pricing]
maturity: applied
artifact_class: metric-model
score: { originality: 3, specificity: 5, evidence: 4, transferability: 5, source: 4 }
tier: B
related: [ins_commoditize-the-complement-ai]
raw_ref: ""
---

# Enterprise AI buyers are shifting from benchmark rankings to intelligence per dollar as budget pressure reshapes model selection

## Claim
As enterprise AI costs reach unsustainable levels, the primary model-selection criterion is shifting from raw benchmark performance to intelligence per dollar, the ratio of task-completion capability to token spend.

## Mechanism
Token-based pricing creates runaway costs at production scale. When outcome-per-dollar matters more than best-possible-output, buyers route workloads to the cheapest model that clears the task bar, not the most capable one. This forces model providers to compete on cost efficiency rather than leaderboard position alone. The constraint is real: Uber exhausted its AI budget in four months; Salesforce earmarked $300M for Anthropic tokens while simultaneously freezing engineering hires. Budget pressure at these scale points is not theoretical.

## Conditions
Holds when: production workloads have predictable task types; budget constraints are binding; and multiple models can clear the task bar with meaningfully different cost profiles.

Fails when: the task requires frontier capability with no cheaper substitute, or the cost is negligible relative to the business value of a better answer.

## Evidence
Microsoft's MAI-Code-1-Flash matches Claude Haiku 4.5 on SWE-Bench Verified using roughly one-third the tokens. GPT 5.5 and Claude Opus 4.8 score similarly on the Intelligence Index (approximately 60 each) but differ by 40% in cost ($3,357 versus $4,685 per unit).

> "what is my intelligence per dollar?"
· Tomasz Tunguz, https://tomtunguz.com/tokens-per-result/, 2026-06-03

Uber capped employee AI spend after exhausting its budget in four months. Salesforce allocated $300M for Anthropic tokens and froze engineering hires. Both signal that the denominator now matters as much as the numerator.

## Signals
- Procurement teams asking vendors for cost-per-resolved-ticket or cost-per-decision, not accuracy-on-benchmark.
- Model routing logic selecting cheaper models for routine tasks and reserving frontier models for edge cases.
- Engineering teams tracking dollars-per-outcome alongside latency and accuracy in production dashboards.

## Counter-evidence
Anchoring on intelligence-per-dollar can optimize for the wrong denominator. Frontier models on high-value tasks (compliance, legal, medical decisions) often justify their premium; optimizing for cheapest-that-clears-the-bar introduces errors that cost more than the token savings. The right denominator is business outcome per dollar, not task-completion rate per dollar.

## Cross-references
- `ins_commoditize-the-complement-ai`: Tunguz's earlier framing on AI labs commoditizing the application layer; budget constraints here add cost pressure as a second driver.
