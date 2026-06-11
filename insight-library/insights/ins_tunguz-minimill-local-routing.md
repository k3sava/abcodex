---
id: ins_tunguz-minimill-local-routing
operator: Tomasz Tunguz
operator_role: Founder and General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/using-local-ai-to-work-faster/
source_type: essay
source_title: "The Minimill of AI"
source_date: 2026-06-05
captured_date: 2026-06-11
domain: [ai-native, engineering]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: workflow
score: { originality: 3, specificity: 5, evidence: 4, transferability: 3, source: 4 }
tier: B
related: []
raw_ref: ""
---

# Two-tier local/cloud AI routing cuts response latency by 60% and lifts throughput 25% by keeping simple tasks on-device

## Claim
Routing AI tasks by complexity, with a local model handling the majority and routing only complex work to a cloud model, captures 78% of the workload locally, cuts average response latency from 47 seconds to 19 seconds, and lifts throughput by 25%.

## Mechanism
A local model classifies each incoming task as simple or complex and handles the simple ones directly. Complex tasks are forwarded to a cloud model. The local model handles its own routing, so no separate classification step adds latency. Because the local model absorbs roughly 78% of the total workload, cloud queue pressure drops sharply, queue age falls from 73 seconds to 4 seconds, and per-task cloud cost drops proportionally to the local handling rate. The architecture works because most knowledge-work AI tasks do not require frontier-model reasoning. The cloud model remains fully available for the minority of tasks where that additional capability changes the result.

## Conditions
Holds when: a significant share of AI tasks are well-scoped and within the capable local model's range, and the classification step can distinguish simple from complex reliably.
Fails when: most tasks require frontier reasoning, when the local model misclassifies edge cases at high rates, or when the hardware and integration work needed to deploy a capable local model exceeds team capacity.

## Evidence
Tunguz measured his own two-tier system over May 29 to June 4, 2026. A local model on his Mac classified and handled tasks routed through Asana.

- 78% of AI work handled locally, with daily peaks reaching 88%
- Average task duration fell from 47 seconds to 19 seconds
- Throughput improved by 25%
- Queue age dropped from 73 seconds to 4 seconds

Tunguz uses Nucor Steel's minimill history as the analogy: Nucor built capital-light facilities close to demand and eventually outcompeted larger integrated mills on cost and speed. He argues local AI follows the same disruptive economics: lower cost, lower latency, close to the workload.

## Signals
- Queue age and average task latency fall materially after routing high-volume routine tasks to a local model.
- The share of tasks routed to the cloud stabilizes at a minority as the local model handles its routine share correctly.
- Per-task cloud cost drops in proportion to the local handling rate.

## Counter-evidence
Tunguz's measurements come from a single personal workflow, not a controlled study or multi-team benchmark. The 78% local-handling rate depends entirely on his specific task mix. Teams with more complex or judgment-heavy AI workloads may see a much lower local-handling rate, making the latency and cost gains proportionally smaller. The analogy to Nucor Steel also glosses over the setup cost: deploying and maintaining a capable local model requires hardware investment and integration work that smaller teams or individuals may not be able to absorb.

## Cross-references
- (none in current corpus)
