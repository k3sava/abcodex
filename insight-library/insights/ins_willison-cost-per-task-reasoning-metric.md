---
id: ins_willison-cost-per-task-reasoning-metric
operator: Simon Willison
operator_role: Co-creator of Django; creator of Datasette
co_operators: []
source_url: https://simonwillison.net/2026/Nov/10/muse-ember/
source_type: essay
source_title: "Muse and Ember"
source_date: 2026-11-10
captured_date: 2026-11-11
domain: [engineering, ai-native]
lifecycle: [ai-workflow, process]
maturity: applied
artifact_class: metric-model
score: { originality: 3, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_willison-specialized-parser-stdlib-bottleneck]
raw_ref: ""
---

# Cost-per-task is the correct unit for comparing AI reasoning models, not price-per-token

## Claim
Price-per-token misleads when comparing AI reasoning models because reasoning token counts vary dramatically across models and settings; cost-per-task on a standard benchmark is the correct comparison unit.

## Mechanism
Reasoning models generate variable numbers of internal thinking tokens before producing an answer. A model with a lower list price may still cost more per completed task if it reasons more verbosely. Cost-per-task normalizes this by measuring total spend to pass a benchmark at a given accuracy level. Artificial Analysis publishes this metric alongside their standard intelligence benchmarks. Their Pareto frontier chart shows the boundary where no model simultaneously offers lower cost and higher capability; any model below the frontier is dominated and should be avoided by a rational buyer.

## Conditions
Holds when: comparing models that use chain-of-thought or extended reasoning, where token counts are not fixed per request type. Applies to any team budgeting AI spend against a volume of tasks.

Fails when: comparing models that have fixed output lengths, or when the task is so short that reasoning overhead is negligible. Also fails if the benchmark used to compute cost-per-task is poorly matched to the actual task distribution.

## Evidence
Willison published this framing in a Nov 10, 2026 post reviewing AI tools. His assessment:

> "comparing price-per-token doesn't really make sense these days"

The reasoning: a model running extended thinking on a problem may use 10x more tokens than a compact model on the same task. At those multiples, nominal token price is a weak proxy for actual spend. Artificial Analysis publishes cost-per-task benchmarks alongside their standard intelligence scores, letting buyers plot capability vs. cost on the same axis and read the Pareto frontier directly.

## Signals
- Internal AI spend growing faster than task volume: reasoning verbosity may explain the gap.
- Different models showing wildly different total costs for similar task queues: a per-token comparison would have missed this.
- Budget forecasting errors when switching models mid-quarter.

## Counter-evidence
Cost-per-task depends heavily on which benchmark is used. If the benchmark tasks are easier or harder than your real workload, the metric misdirects. Some teams prefer to benchmark on their own task distribution and measure cost directly rather than using a third-party index. The Pareto frontier is also a snapshot; model pricing changes frequently, and a model that is off the frontier today may be on it after a price cut.

## Cross-references
- `ins_willison-specialized-parser-stdlib-bottleneck`: Both cards share the same underlying method: replace a lazy comparison unit (language vs. language; token vs. token) with one that measures the actual variable that matters (input-matched parsing speed; task-completion cost).
