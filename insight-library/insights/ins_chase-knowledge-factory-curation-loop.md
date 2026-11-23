---
id: ins_chase-knowledge-factory-curation-loop
operator: Harrison Chase
operator_role: Co-founder and CEO, LangChain
co_operators: []
source_url: https://www.langchain.com/blog/knowledge-factory
source_type: essay
source_title: "How to Build a Knowledge Factory"
source_date: 2026-11-21
captured_date: 2026-11-23
domain: [ai-native, engineering-ai-eng]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_chase-goal-driven-agent-architecture, ins_chase-context-engineering-vs-code-inspection]
raw_ref: ""
---

# Production agents need a closed curator loop. Agents flag gaps during execution. A separate curator agent updates the knowledge store on a schedule. Neither role works inside the other.

## Claim
Production agents degrade when their knowledge goes stale, but agents must not maintain their own knowledge. The fix is a "knowledge factory": a system where executing agents flag gaps during runs, and a dedicated curator agent reads those flags, plus raw sources and execution traces, and updates the knowledge store. The boundary between execution and curation must be explicit.

## Mechanism
Agents encounter wrong or missing knowledge while doing real work. If they corrected it themselves, two problems follow: the fix is locally scoped (the agent only knows what it needed in this run) and corrections from multiple agents create contradictions.

A curator agent solves both. It is not running tasks. Its only job is to read what flagged agents reported, check the underlying sources, and update the knowledge store in a consistent way. Because one curator reads all flags, the updates are coherent rather than fragmented.

Chase identifies three categories of knowledge that the factory must maintain:

Skills. The procedures agents follow to do their work. These are the most volatile: an agent that finds a faster path to a result should flag it, and the curator should evaluate whether to update the standard procedure.

Domain knowledge. Slow-changing facts about the world the agent operates in. Agents that encounter outdated facts should flag them.

Data-access guidance. Which sources are authoritative for which questions, and how to query them. This is often the most neglected category and the most consequential when it is wrong.

The recommended starting point: pick one recurring workflow, build the curator loop for it, and confirm the loop closes before expanding. Upfront documentation written before agents run does not work because agents reveal gaps that documentation writers do not predict. The gaps appear in production.

## Conditions
Holds when: agents run repeatedly on the same class of tasks, encounter consistent failure patterns, and have a mechanism to flag those patterns. Requires a scheduler to trigger the curator agent.

Fails when: the use case is a one-shot deployment with no recurring workflow; there is no mechanism for agents to signal gaps; or curator updates cannot be validated before they affect live agents.

## Evidence
Chase published this framework on the LangChain blog on November 21, 2026. The knowledge factory design and the three-category taxonomy are his direct formulation from building production agent systems at LangChain.

## Signals
- Agents encounter the same knowledge gap in multiple separate runs. A curator loop would have closed this after the first occurrence.
- Different agents give contradictory answers to the same question. This indicates fragmented knowledge updates rather than a single curator writing to a shared store.
- Knowledge documentation grows but agent performance does not improve. This indicates the documentation was written without reference to actual execution failures.

## Counter-evidence
The curator-agent pattern adds infrastructure. Small teams may find the overhead of maintaining a scheduler, a curator agent, and a flagging protocol exceeds the cost of manually updating knowledge when failures surface. The framework also assumes that production runs generate enough data for a curator to reason from, which is not true in early deployments.

## Cross-references
- `ins_chase-goal-driven-agent-architecture`: Chase on the six architectural properties of goal-driven agents. Cross-run memory in that card requires a durable knowledge store; the knowledge factory is one pattern for building it.
- `ins_chase-context-engineering-vs-code-inspection`: Chase on treating context engineering as a first-class discipline. The knowledge factory is an operational implementation of that principle.
