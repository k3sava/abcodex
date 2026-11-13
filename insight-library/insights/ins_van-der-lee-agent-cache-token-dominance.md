---
id: ins_van-der-lee-agent-cache-token-dominance
operator: Antoine van der Lee
operator_role: Creator of SwiftLee and RocketSim; iOS developer educator
co_operators: []
source_url: https://avanderlee.com/ai-development/agentic-engineering-ai-fundamentals-course/
source_type: essay
source_title: "Agentic engineering: why I built the AI Fundamentals course"
source_date: 2026-11-09
captured_date: 2026-11-13
domain: [agentic-coding, engineering, ai-native]
lifecycle: [ai-workflow, attribution-measurement]
maturity: applied
artifact_class: metric-model
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 3 }
tier: B
related: [ins_tunguz-harness-layer-margin-engine, ins_van-der-lee-rockettrace-agent-trace]
raw_ref: ""
---

# In agentic coding sessions, 94% of token usage is cache reads and only 0.6% is agent replies, making output verbosity the wrong lever for cost reduction

## Claim
Cache reads dominated 94.2% of tokens across 1,674 agent sessions, with agent replies at 0.6%. Developers who optimize reply verbosity to cut costs are targeting the smallest cost driver by an order of magnitude.

## Mechanism
Most of an agentic session's token budget is consumed by the model reading context it already processed: the system prompt, prior conversation turns, tool call results, and injected files. All of that is cached and re-read on each turn. The fraction that generates new output is small by comparison. Agents with long instruction sets and large context windows pay most of their bill on input processing, not generation. The implication for cost optimization runs against the intuitive target. Telling an agent to write shorter replies saves a fraction of a percent of cost. Trimming the system prompt, reducing the number of injected files, or capping context window size saves a substantial amount. Measure first; optimize the right variable.

## Conditions
Holds when: the agent uses long system prompts, file injection, or multi-turn context accumulation; the agent workflow involves repeated turns on the same codebase or task.
Fails when: the agent workflow is single-turn without persistent context (cache reads are minimal); the model and pricing tier charge differently for cache reads versus new context; the task involves very long generated outputs (documentation, full file rewrites) where generation tokens dominate.

## Evidence
Van der Lee measured 1,674 of his own agent sessions across a development period. His reported breakdown: cache reads 94.2%, context tokens approximately 5.2%, agent replies 0.6%. He derived this from his billing data, not from inference logs, and notes the finding reoriented how he teaches token cost optimization in his AI Fundamentals course. He also states the finding recurred across different tools and models, meeting his filter for a durable lesson rather than a tool-specific artifact.

## Signals
- Billing data shows cache-read tokens dominate the total, with output tokens in low single-digit percentages.
- Shortening system prompt length produces measurable cost reductions; reducing reply verbosity does not.
- Developer intuition about token costs ("the agent writes too much") correlates poorly with actual invoice line items.

## Counter-evidence
Van der Lee's sample is one developer's sessions, not a representative dataset across team sizes, model providers, or task types. Pricing models differ across providers: some charge cache reads at a fraction of full-context rates, some at parity, and some include a cache write overhead. The same billing patterns may not hold for teams running agentic pipelines with many parallel, short-context tasks. Tunguz's earlier finding (ins_tunguz-harness-layer-margin-engine) covers similar ground at the product-company level, suggesting the pattern generalizes, but van der Lee's data is a single-developer empirical point.

## Cross-references
- `ins_tunguz-harness-layer-margin-engine`: Tunguz reports input context at 85.7-98.2% of tokens at the enterprise product level, corroborating the direction of van der Lee's individual measurement.
- `ins_van-der-lee-rockettrace-agent-trace`: Van der Lee's earlier instrument for measuring agent performance in Xcode workflows, showing measurement as a recurring theme in his practice.
