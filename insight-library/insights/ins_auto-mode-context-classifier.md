---
id: ins_auto-mode-context-classifier
operator: Thariq Shihipar
operator_role: Engineering lead, Claude Code, Anthropic
co_operators: []
source_url: https://simonwillison.net/2026/Jul/21/cat-and-thariq/
source_type: talk
source_title: "A Fireside Chat with Cat and Thariq from the Claude Code team"
source_date: 2026-07-21
captured_date: 2026-07-28
domain: [agentic-coding, ai-native, security]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 5, evidence: 4, transferability: 5, source: 5 }
tier: A
related: [ins_examples-constrain-frontier-models, ins_agent-approval-gate, ins_thariq-rewrites-now-rational]
raw_ref: ""
---

# A conversation-context classifier grants or blocks agent tool calls per call rather than per tool type

## Claim
Static permission models for coding agents produce two failure modes: over-permission (the agent executes a tool call when it should not) and under-permission (the user cannot get the agent to act when they want it to). Claude Code's auto mode replaces static permissions with a classifier that evaluates each tool call against the current conversation instruction, granting or blocking the call based on what the user actually stated.

## Mechanism
Every agent turn in auto mode passes through a Sonnet-class classifier. The classifier receives the proposed tool call and the full conversation context. It asks: does this tool call match the permission implied by the user's current instruction? A "push this to GitHub" directive raises permission for that specific git push. A prior "don't push" directive blocks it. The classifier treats the conversation as a real-time permission signal rather than a pre-configured access control list.

The architectural shift is that permission is not a property of the tool; it is a function of the conversation state. The same tool call (git push) can be permitted or blocked within minutes in the same session, depending on what the user said most recently.

## Conditions
Holds when: the agent's instructions are conversational and can be updated in-session; the classifier correctly interprets directive language; the underlying model is capable enough to distinguish grant and revoke patterns in natural language.

Fails when: users give ambiguous or contradictory instructions the classifier cannot resolve; the classifier is vulnerable to prompt injection that falsely elevates tool permissions; or the latency of per-call classification is unacceptable in high-throughput agentic loops.

## Evidence
Thariq Shihipar, describing Claude Code's auto mode permission system at the AI Engineer World's Fair fireside chat, July 21, 2026:

> "Whenever Claude is doing a turn, or a bash call, there's a Sonnet classifier that is judging the tool call and also the context of the conversation — your instruction."

> "you don't want to give git push permissions all the time, but if you say 'push this to GitHub,' you want it to do it — and if you say 'don't push,' you want it to deny it."

## Signals
- Users can grant or revoke agent permissions mid-session by stating intent in natural language, without changing configuration files
- The same tool appears as allowed in some turns and blocked in others within a single session
- Permission grant and revoke patterns in execution logs align with conversational directives rather than static ACL entries

## Counter-evidence
The classifier pattern assumes the underlying model reliably parses permission intent from natural language. Edge cases that confuse the classifier (ambiguous pronouns, multi-step conditional instructions, contradictory directives from chained conversations) can produce unexpected permission grants. The classifier adds a model call to every agent turn, increasing both latency and cost. At enterprise scale, this overhead accumulates. The approach also places more trust in the conversation history than in explicit configuration, which may not satisfy compliance requirements in regulated environments.

## Cross-references
- `ins_examples-constrain-frontier-models`: Thariq's prior finding that strong models require fewer constraint specifications, the precondition for conversation-driven permissions to work reliably.
- `ins_agent-approval-gate`: the human approval gate pattern, which the context classifier partially replaces for in-session permission management.
