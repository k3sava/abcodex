---
id: ins_tunguz-preflight-skill-retrieval
operator: Tomasz Tunguz
operator_role: Founder and General Partner, Theory Ventures
co_operators: []
source_url: https://www.tomtunguz.com/the-ai-preflight-check/
source_type: essay
source_title: "The AI Preflight Check"
source_date: 2026-07-08
captured_date: 2026-07-13
domain: [ai-native, engineering]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 3 }
tier: B
related: [ins_tunguz-agent-routing-architecture, ins_tunguz-minimill-local-routing]
raw_ref: ""
---

# Agent forgetting is a memory architecture problem, not a context size problem, and the fix is selective skill retrieval before every task

## Claim
When an AI agent loses track mid-task, expanding the context window does not solve it. The real ceiling is memory architecture: agents that load everything into context degrade, while agents that retrieve only the relevant skills at task start stay sharp.

## Mechanism
Tunguz describes a three-layer system he calls the preflight check, borrowed from aviation pre-departure planning. Before executing any task, the system: (1) matches the incoming query to a library of stored skills via intent matching; (2) loads only the matched skills into the active context window; (3) executes the task locally for routine work, routing to frontier models for complexity. A background watchdog monitors overnight, logging which skills fired and which decisions succeeded. Successful patterns harden into deterministic code, reducing LLM reliance for stable work. The self-improving loop means the system gets cheaper and more reliable over time without any explicit retraining.

## Conditions
Holds when: the agent operates across many task types and needs to handle routine workloads efficiently. Gains the most when the skills library covers 70-80% of tasks.
Fails when: every task is novel with no repeatable pattern to load. Pure research agents or frontier-only creative tasks don't benefit from a preflight retrieval step.

## Evidence
Tunguz writes: "Preflight is retrieval. The agent inspects its skills library, picks the ones relevant to the task, and loads only those into the context window." He adds: "Context size is not the ceiling. Memory architecture is."

## Signals
- Agent performance stays consistent across long conversations.
- Routine task costs fall as more work shifts to deterministic code paths.
- The skills library grows over weeks without developer intervention.

## Counter-evidence
Maintaining a separate skills library adds system complexity and requires a curation layer. For teams without a watchdog process, the library can stagnate and diverge from current task patterns. The architecture is more complex to debug than a single-context approach.

## Cross-references
- Related to `ins_tunguz-agent-routing-architecture`: routing by task complexity (async vs. synchronous) is complementary to preflight skill retrieval.
- Related to `ins_tunguz-minimill-local-routing`: the local-first execution strategy applies to the preflight's 70-80% routine workload tier.
