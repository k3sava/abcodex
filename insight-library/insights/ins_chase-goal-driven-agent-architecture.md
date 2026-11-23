---
id: ins_chase-goal-driven-agent-architecture
operator: Harrison Chase
operator_role: Co-founder and CEO, LangChain
co_operators: []
source_url: https://www.langchain.com/blog/from-tasks-to-goals
source_type: essay
source_title: "From Tasks to Goals"
source_date: 2026-11-16
captured_date: 2026-11-23
domain: [ai-native, engineering-ai-eng]
lifecycle: [ai-workflow, product]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 5, evidence: 3, transferability: 5, source: 4 }
tier: B
related: [ins_chase-agent-memory-next-frontier, ins_chase-compound-intelligence-ownership]
raw_ref: ""
---

# Goal-driven agents need six new architectural properties that task-driven agents do not. The gap begins the moment you stop handing the agent a task list and start handing it a goal.

## Claim
Moving from task-based to goal-based agents requires six architectural properties that task-based designs lack: continuous task selection by the agent itself, finer-grained tool access controls, async clarification channels, measurement and feedback mechanisms, explicit stopping rules and heartbeats, and persistent cross-run memory.

## Mechanism
A task has a fixed scope. It ends when complete. A goal persists until revoked. That difference propagates through every layer of the system.

Task selection. A task-based agent waits for its task list. A goal-based agent must generate, prioritize, and revise its own subtasks. The agent cannot be given a static list because the right tasks are not known upfront.

Tool access. A task agent calls a predictable set of tools. A goal agent encounters tool requirements that surface unpredictably during execution. This requires finer-grained permissions than "give the agent access to everything it might need."

Clarification. A task agent can pause and ask. A goal agent often runs in the background while the user is absent. It needs a dedicated channel (Slack, an inbox) for async questions, not an in-context chat interface that assumes someone is watching.

Measurement. A task has a done state. A goal needs metrics and human feedback loops that answer the question: is the agent making progress? Without these, there is no signal for improvement.

Stopping rules. A task ends naturally. A goal does not. Without explicit stopping criteria and heartbeat signals, a goal-based agent will keep acting. Chase's framing:

> "Ongoing responsibility does not mean the agent should always find something to do."

A well-designed goal agent needs a do-nothing path that fires when new information does not warrant action.

Memory. A task agent can start fresh each run. A goal agent that forgets prior decisions will repeat errors, re-ask settled questions, and give advice it already gave and that did not work. Cross-run memory is what lets feedback from one run improve the next.

> "Giving an agent a goal isn't simply giving it a bigger prompt."

> "As agents become more powerful, we're moving from giving them tasks to giving them goals."

## Conditions
Holds when: the agent is running on a persistent, open-ended objective rather than a discrete one-shot task. Applies at the architecture design stage.

Fails when: the use case is a single-session task with a clear completion criterion; task-based architecture is correct for those cases.

## Evidence
Chase published this framework on the LangChain blog on November 16, 2026. The six architectural requirements are his direct enumeration from operating multi-agent systems at scale via LangChain.

## Signals
- Your goal-based agent re-asks questions the user already answered in a prior run. This indicates missing cross-run memory.
- The agent calls a tool it does not need and fails. This indicates over-broad tool access rather than finer-grained permission modeling.
- The agent runs continuously with no meaningful output. This indicates absent stopping rules.

## Counter-evidence
The six properties Chase describes are requirements, not a framework with validated adoption data. Some of them (async clarification channels, stopping rules) are design principles more than engineering specifications. Teams may satisfy the properties without following the specific patterns Chase recommends.

## Cross-references
- `ins_chase-agent-memory-next-frontier`: Chase's earlier framing of persistent memory as the defining capability gap for agents. The cross-run memory requirement here extends that claim to goal-based architecture specifically.
- `ins_chase-compound-intelligence-ownership`: Chase on who controls the compound intelligence built by agents over time. Cross-run memory creates a knowledge asset with ownership implications.
