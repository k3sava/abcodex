---
id: ins_willison-emergent-agent-tooling
operator: Simon Willison
operator_role: Creator of Datasette; co-creator of Django; prolific LLM and agentic-engineering blogger
co_operators: []
source_url: https://simonwillison.net/2026/Aug/4/new-release-of-llm/
source_type: post
source_title: "New release of LLM adds support for reasoning traces, OpenAI Responses, server-side tools, and smarter logging"
source_date: 2026-08-04
captured_date: 2026-08-10
domain: [agent-frameworks, agentic-coding, engineering]
lifecycle: [ai-workflow-tooling, process-cadence]
maturity: frontier
artifact_class: case-study
score: { originality: 4, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_willison-stateless-mcp, ins_willison-reliability-erodes-review-discipline, ins_willison-knowledge-breadth-model-proxy]
raw_ref: ""
---

# Agent behaviors emerge from composable CLI primitives without requiring an explicit agent framework

## Claim
When a CLI tool assembles modular tool discovery, structured streaming events, and loop execution control as independent composable features, agent-shaped behavior emerges bottom-up without deliberate agent framework design.

## Mechanism
Willison released LLM 0.32 having added four features that each solved a specific user problem: (1) reasoning trace separation to stderr so piped outputs stay clean, (2) server-side tools from any provider loaded as single CLI arguments, (3) structured streaming events returning granular types (reasoning, text, tool calls, images) instead of flat strings, and (4) content-addressable message logging that avoids duplicate JSON storage across multi-turn conversations. None of these features were designed as agent primitives. Together they created what Willison called an "accidental agent framework": a CLI utility that can mix tools from different sources, maintain conversation state efficiently, expose reasoning, and pause for human approval mid-loop. The emergence pattern suggests dedicated agent architecture is not the only path to agent capability; it can also arrive as the convergence of composable lower-level features responding to real user need.

## Conditions
Holds when: (a) users have genuine need for multi-source tool mixing and the library assembles the right composable primitives to support it; (b) the task complexity fits single-threaded sequential tool execution.
Fails when: tasks require parallel execution, complex graph-based coordination, or persistent memory across independent sessions. Accidental agent frameworks hit ceilings that purpose-built frameworks handle by design.

## Evidence
Willison described the discovery of LLM's agent-shaped convergence directly:

> "There's something neat about having a CLI utility that can mix and match different tools from different sources with different models all as a one-liner"

He added: "Maybe the next version of LLM will bake the concept of an 'agent' into the core library." The accidental framing is notable: Willison shipped each feature for a concrete use case, not as part of a planned agent architecture.

## Signals
- Your CLI tool supports pluggable tools from multiple sources and users start building feedback loops with it
- Structured streaming events produce enough intermediate state for loop decisions without a dedicated execution layer
- Users are chaining your tool across multiple providers without asking for a dedicated agent mode

## Counter-evidence
Purpose-built agent frameworks (LangGraph, AutoGen) handle graph-based execution, branching, and persistent memory by design from the start. Accidental convergence produces a capable but constrained agent: it works for linear tool loops, not for multi-agent coordination, long-horizon memory, or parallel subtask execution. The "emergent" path works at small scale; it creates architectural debt at larger scale.

## Cross-references
- `ins_willison-stateless-mcp`: Willison on why stateless MCP design aids composability
- `ins_willison-reliability-erodes-review-discipline`: how growing agent reliability reshapes how people use agents
- `ins_willison-knowledge-breadth-model-proxy`: related to Willison's framing of LLM tools as proxies
