---
id: ins_willison-agentic-cost-removes-discipline
operator: Simon Willison
operator_role: Independent developer; creator of Datasette and Django co-creator
co_operators: []
source_url: https://simonwillison.net/2026/Aug/19/conceptual-integrity-and-counting-lines-of-code/
source_type: essay
source_title: "Conceptual integrity and counting lines of code"
source_date: 2026-08-19
captured_date: 2026-08-21
domain: [engineering, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 5, source: 4 }
tier: B
related: [ins_willison-reliability-erodes-review-discipline, ins_willison-confirmation-fatigue-agent-approval]
raw_ref: ""
---

# Agentic coding removes the time-cost filter that once kept poor architecture decisions out

## Claim
When agentic tools drop the implementation cost of writing code, the time-based discipline that previously filtered marginal features and poor architectural decisions disappears, shifting the real constraint from implementation speed to cognitive capacity.

## Mechanism
Pre-AI, developers used implementation cost as an implicit quality gate. The mental calculation "that would take a week" killed marginal feature ideas before any code was written. That gate is gone when the same code takes an hour. Features that would have been rejected on cost grounds get built, and the codebase grows in what Willison describes as "little weird bumps in funny different directions." The bottleneck shifts from time to cognitive load. A developer using agents can generate roughly 1,000 lines of production-ready code per day compared to 50-200 pre-AI. The problem: "I can churn out code a hundred times faster. I don't have the cognitive capacity to stay on top of 100 times the amount of code." Conceptual integrity, the shared mental model that keeps a codebase coherent, erodes under the volume, not from any single bad decision.

## Conditions
Holds when: the team is using agents to accelerate code generation without a compensating review or architectural discipline process.
Fails when: the team has explicit architectural governance that does not rely on implementation cost as the filter; or when the team intentionally limits what gets built regardless of how fast it can be generated.

## Evidence
Willison documents the lines-of-code shift from 50-200 lines per day pre-AI to roughly 1,000 lines per day with agents. He argues that line-count measurement does make sense for coding agents specifically because quality remains the constant: the count is the only thing that changed. The cognitive capacity observation is his own, noted in the context of maintaining team structures to distribute the review load that the speed increase creates.

## Signals
- Growing backlog of "easy wins" that bypass architectural review because they were cheap to build
- Increasing difficulty for any single person to hold the full system model in their head
- Bugs that span multiple modules that were each built quickly but were never considered together

## Counter-evidence
Some teams report that agents also improve code review by generating tests and documentation alongside implementation, which partially offsets the coherence risk. The bottleneck may be cognitive review in one direction (understanding what was built) but agents can also accelerate the review process itself.

## Cross-references
- `ins_willison-reliability-erodes-review-discipline`: a companion failure mode where higher agent reliability erodes the review habit
- `ins_willison-confirmation-fatigue-agent-approval`: cognitive fatigue from approving agent actions compounds the capacity constraint
