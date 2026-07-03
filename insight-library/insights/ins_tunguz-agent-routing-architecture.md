---
id: ins_tunguz-agent-routing-architecture
operator: Tomasz Tunguz
operator_role: Founder and General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/ai-execution-routing/
source_type: essay
source_title: "Most AI Work Can Wait"
source_date: 2026-07-01
captured_date: 2026-07-03
domain: [ai-native, engineering]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 5, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_tunguz-minimill-local-routing, ins_tunguz-async-inference-latency-tradeoff]
raw_ref: ""
---

# Routing architecture is the first design decision in an AI agent system, not model selection

## Claim
In AI agent systems, the routing layer should be designed before selecting models. A well-built router sends 70 to 80 percent of tasks to local or async models, reducing inference costs by 90 percent or more, while frontier real-time inference handles only high-consequence requests.

## Mechanism
Most agent tasks do not require real-time frontier-model reasoning. A three-layer routing system handles the classification: a skill classifier converts user requests into concrete operations; a router evaluates each task against complexity, context size, and failure-mode signals to assign a processing tier; and a model selector picks the cheapest model meeting confidence thresholds for that tier. Five failure-mode signals trigger escalation to real-time inference: missing repo context, long dependency chains, risky migrations, security-sensitive prompts, and high-consequence writes. A nightly batch evaluator updates router weights by processing completed tasks against known-good outcomes, catching new failure modes before they accumulate in production. The result is that model choice becomes the last decision, not the first.

## Conditions
Holds when: agent task volume is high enough that routing overhead pays off and at least half of tasks are classifiable as simple or deferrable. Fails when: all tasks require immediate frontier-model reasoning (real-time decision support, latency-sensitive user-facing queries) or when the team lacks capacity to build and maintain a three-layer routing layer.

## Evidence
Tunguz cites Coinbase: after implementing "better defaults, routing, & caching," Coinbase cut AI spend nearly in half while token usage grew. Theory Ventures built its own router with synchronous failure-mode signals and a nightly evaluation loop.

> "Prioritize routing over model choice. Most AI work runs on cheap local models."

> "The model choice is the last decision, not the first."

> "70-80% of traffic runs on local models that cost nothing per call"

Async batch reasoning costs two orders of magnitude less than real-time synchronous inference.

## Signals
- AI spend falls while token count grows after routing implementation.
- The fraction of tasks routed to real-time frontier inference stabilizes below 30 percent.
- Nightly evaluator surfaces new failure-mode patterns before they appear as production errors.

## Counter-evidence
Tunguz's Coinbase example involves a large organization with a specific workload mix; the 70 to 80 percent routing rate may not generalize to products where most tasks are judgment-heavy and latency-sensitive. The three-layer architecture requires sustained engineering investment that small teams or pre-product-market-fit companies may not afford. The five failure-mode signals are Theory Ventures' classification, not a universal taxonomy.

## Cross-references
- `ins_tunguz-minimill-local-routing`: the June 5, 2026 card measuring Tunguz's personal two-tier workflow, where 78% of tasks ran locally and average latency fell from 47 seconds to 19 seconds.
- `ins_tunguz-async-inference-latency-tradeoff`: the June 25, 2026 card on accepting 2-minute latency to reduce costs by 6x on background workloads.
