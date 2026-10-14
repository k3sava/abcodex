---
id: ins_avilla-dynamic-workflow-topology
operator: CJ Avilla
operator_role: Member of Technical Staff, Anthropic
co_operators: [Harrison Stall]
source_url: https://www.latent.space/p/claude-dynamic-workflows
source_type: talk
source_title: "How Anthropic's Dynamic Workflows Coordinate Claude Agents"
source_date: 2026-10-13
captured_date: 2026-10-14
domain: [ai-native, engineering]
lifecycle: [ai-workflow]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_stall-budget-external-to-model]
raw_ref: ""
---

# Dynamic workflows delegate agent topology design to the model, not the developer

## Claim
In a dynamic workflow, the lead model designs its own task decomposition and agent topology at runtime, rather than following a developer-specified coordinator-subagent structure. The developer sets a session budget; the model determines how many agents to spawn and what each one does.

## Mechanism
Standard multi-agent setups require the developer to pre-configure a coordinator and a fixed subagent roster before the session starts. A dynamic workflow changes the order of operations. The lead agent receives the task, plans the decomposition, and writes a coordination program that determines the agent count and work distribution. Subagents share context through a filesystem but cannot message each other directly through the API, keeping each agent's context isolated and the coordination scheme explicit.

The result is adaptive parallelism. A task with many independent subtasks (scanning a stock watchlist, reviewing a corpus) can spawn many agents in parallel. A simpler task spawns fewer. The developer never needs to predict the right structure in advance.

The tradeoff is cost. Avilla stated the approach is "much more" expensive than a single-agent session, but "much more effective at finding all of the details." Stall framed it as applying test-time compute to tasks where coverage matters more than cost predictability.

## Conditions
Holds when: the optimal task decomposition is unknown before the session starts; the task contains many parallelizable subtasks; coverage completeness matters more than per-session cost.

Fails when: the task structure is well understood and fixed (a pre-configured routing scheme is cheaper and more predictable); per-session cost must be tightly controlled; the task has strong sequential dependencies that resist parallelism.

## Evidence
CJ Avilla and Harrison Stall demonstrated a stock watchlist workflow at AI Engineer New York on October 13, 2026. A scan phase assigned individual tickers to isolated agents; a review phase examined the combined findings before producing a final report. Avilla described the cost-coverage tradeoff directly at the talk. The Latent Space writeup published October 12 documents the design.

## Signals
- Lead agent writes a coordination program at session start rather than receiving a fixed script
- Agent count varies across runs of the same workflow type
- Session cost per task exceeds an equivalent single-agent session
- Coverage of a large parallel task improves relative to a single-context run

## Counter-evidence
Dynamic workflows are in research preview. No published benchmarks compare coverage quality against single-agent approaches across task types. The claim that it is "much more effective" comes from the engineers presenting it, who have an interest in adoption. The cost increase is real and stated explicitly; for cost-sensitive use cases, a pre-configured routing scheme remains the practical default.

## Cross-references
- `ins_stall-budget-external-to-model`: Stall's design principle for budget enforcement in the same system.
- `ins_ronacher-codemode-harness-bash-limit`: Ronacher's brain-hands split is the architectural foundation that dynamic workflows extend to the multi-agent case.
- `ins_lynch-agent-layer-bottleneck`: Lynch named serial execution of parallelizable tasks as a core failure mode. Dynamic workflows address exactly that failure at the API level.
