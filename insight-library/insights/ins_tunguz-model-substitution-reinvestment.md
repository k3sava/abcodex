---
id: ins_tunguz-model-substitution-reinvestment
operator: Tomasz Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/inflation-deflation-ai/
source_type: essay
source_title: "The Substitution Wave in AI"
source_date: 2026-06-07
captured_date: 2026-06-18
domain: [ai-native, engineering, founder-operator]
lifecycle: [ai-workflow, strategy]
maturity: applied
artifact_class: metric-model
score: { originality: 3, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_tunguz-harness-three-disciplines]
raw_ref: ""
---

# Model substitution savings are reinvested in more tokens, not returned to the budget

## Claim
When companies substitute cheaper open-source models for frontier closed models, they do not reduce their AI spend. They reinvest the savings in more tokens per workflow, keeping total costs flat while exponentially expanding compute volume.

## Mechanism
Open-source models have crossed a "good enough" threshold for most production use cases. This creates a predictable pattern: a team discovers a cheaper model with comparable benchmark performance, switches to it, then uses the freed budget to run more tasks, increase context length, or parallelize workloads. The AI bill stays roughly constant while throughput grows. Coinbase's engineering team described exactly this cycle: costs roughly flat while token usage continues to grow exponentially.

## Conditions
Holds when: a credible open-source alternative exists at the quality tier a team currently needs. The reinvestment pattern is strongest where usage is primarily inference-driven and where teams have discretion over context length and task volume.

Fails when: a task genuinely requires frontier capability with no open-source substitute meeting quality requirements. Also fails in regulated contexts where model provenance must be audited, or where Chinese open-source models introduce security risks unacceptable to the organization.

## Evidence
Tunguz cites four companies as evidence of the substitution and reinvestment cycle:

> "AI buyers across enterprise, app, and seller layers are substituting cheaper open-source models for frontier closed models."

> "Closed models are getting more expensive at the frontier; open models are getting cheaper at parity."

- Harvey switched from Opus to Kimi 2.6 for its legal agent benchmark, achieving comparable performance at approximately 11x lower cost ($84 vs. $954 per 100 tasks).
- Cursor's Composer 2.5 reached up to 10x efficiency gains over comparable models.
- Lindy switched to DeepSeek v4, saving millions annually while performance improved on many core use cases.
- Coinbase: costs roughly flat while token usage grows exponentially.

## Signals
- A team's monthly AI inference cost stays within a narrow band even as the number of tasks processed grows quarter over quarter.
- Engineering teams debate context length and parallelism, not whether to use AI at all.
- Model switching happens without engineering sprints or product redesigns.

## Counter-evidence
The pattern breaks for frontier tasks. Harvey's Kimi switch worked on legal reasoning benchmarks, but the same substitution may fail for novel task types where benchmark coverage is thin and where model quality differences are not yet measurable. Open-source models from Chinese labs also introduce supply chain risk: NIST data shows they are significantly more susceptible to agent hijacking attacks than US counterparts.

## Cross-references
- `ins_tunguz-harness-three-disciplines` (Tomasz Tunguz on competitive advantage shifting to harness engineering, June 2026)
