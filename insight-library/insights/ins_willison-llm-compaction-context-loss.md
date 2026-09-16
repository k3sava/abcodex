---
id: ins_willison-llm-compaction-context-loss
operator: Simon Willison
operator_role: Creator of Datasette; programmer and writer on AI and open-source software
co_operators: []
source_url: https://simonwillison.net/2026/Sep/12/astra-running-routes/
source_type: post
source_title: "Generating running routes with GPT-6 Astra and ChatGPT Work"
source_date: 2026-09-12
captured_date: 2026-09-16
domain: [ai-native, engineering]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_willison-multimodel-security-audit-workflow, ins_willison-agent-attack-tooling-fingerprint]
raw_ref: ""
---

# LLM systems that auto-compact context must preserve pre-compacted messages and expose them via tool calls, or every agent action before compaction becomes permanently unverifiable

## Claim
Any LLM system that automatically compacts conversation history must retain the full pre-compacted transcript in an accessible store and expose it through tool calls. Without this, the code run, files written, and API calls made before compaction become permanently unverifiable, breaking reproducibility for users and audit traceability for operators.

## Mechanism
When a long-running agent session approaches context capacity, the system summarizes old messages to keep the active window within bounds. The summary preserves intent but discards the exact commands, tool calls, code executed, and responses from the compacted period. An engineer debugging unexpected behavior, a user trying to reproduce a result, or a compliance officer auditing an action cannot access the pre-compaction record. If the system also restricts direct visibility into what code ran during the session, as some hosted AI work environments do, the compaction compounds with opacity to make the session's full action log irrecoverable.

The fix is architectural: treat pre-compaction context as an append-only artifact that must be persisted to a queryable store and made accessible through agent tool calls. This is the same requirement that logging systems impose on long-running background processes. The compacted summary is fine for active reasoning; the original transcript is required for post-session verification.

## Conditions
Holds when: the LLM system compacts context without retaining a full transcript; the agent performed actions with side effects (file writes, API calls, code execution, geospatial queries) before compaction; and the user or operator later needs to verify, reproduce, or audit what happened.

Fails when: the system retains the full pre-compaction transcript in a queryable store and makes it accessible through tool calls or a session log API; or the session involved no side-effect-producing actions that require post-session verification.

## Evidence
Willison documents a 27-minute ChatGPT Work session using GPT-6 Astra to generate geospatial running routes. At session end, when he requested the Python code used in the session, the system reported the thread had been compacted and the earlier code was no longer accessible. The code that ran, the API calls made, and the intermediate outputs were gone.

> "any LLM system that uses compaction needs to both preserve the pre-compacted text and make that text available via agent tool calls, to protect against this kind of problem."

The specific failure here is that compaction removed not just the reasoning but the verifiable record of what the agent actually did. Without the pre-compaction log, there is no way to know exactly which route calculations ran, what data was queried, or what intermediate steps produced the final output.

## Signals
- Post-session requests for the code, queries, or data used in an agent run return "unavailable" or "this thread was compacted" messages
- Debugging a surprising agent output requires reconstructing what happened from its effects rather than from a recorded action log
- Audit requests for agent work sessions cannot be fulfilled because session history is not persisted beyond the active context window
- Users of hosted AI work environments find they cannot reproduce yesterday's agentic result even with the same prompt

## Counter-evidence
Retaining full pre-compaction transcripts increases storage costs at scale and may surface sensitive intermediate state. Some system designers argue that the agent's outputs, the files and results it produces, are the relevant audit trail, not the intermediate reasoning steps. Willison's counter is that "what the agent did" and "what the agent produced" are not equivalent when the agent's action produced an unexpected result: you need the action log to understand the gap between intent and outcome.

## Cross-references
- `ins_willison-multimodel-security-audit-workflow`: the importance of reproducible audit trails in AI-assisted code review; this card identifies the architectural condition that breaks traceability in long sessions.
- `ins_willison-agent-attack-tooling-fingerprint`: forensic attribution of AI agent activity requires retained action logs; this card names what breaks when those logs are not retained.
