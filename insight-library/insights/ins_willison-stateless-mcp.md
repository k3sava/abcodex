---
id: ins_willison-stateless-mcp
operator: Simon Willison
operator_role: Creator of Datasette; software engineer and AI blogger
co_operators: []
source_url: https://simonwillison.net/2026/Jul/31/stateless-mcp/
source_type: essay
source_title: "Stateless MCP has recaptured my interest"
source_date: 2026-07-31
captured_date: 2026-08-01
domain: [agent-frameworks, agentic-coding]
lifecycle: [ai-workflow-tooling]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_willison-linting-as-agent-repair-input, ins_willison-llm-relay-market, ins_willison-ai-sandbox-escape]
raw_ref: ""
---

# MCP 2.0's stateless HTTP transport reduces server implementation to a single request-response cycle, making agent tools easier to build, scale, and audit than shell access

## Claim
MCP 2.0's stateless design means a client sends one HTTP request, receives a response, and closes the connection. No session state, no persistent socket, no affinity routing. Willison built three working MCP projects in a day and called it the most significant design improvement in the protocol, one that finally makes MCP servers accessible to ordinary developers.

## Mechanism
The original MCP specification required a persistent connection between client and server. Setting one up meant managing session lifecycle, handling reconnection, and routing each client to the same server instance across calls. MCP 2.0 replaces this with a stateless HTTP model. The client discovers tools via a tool-manifest endpoint, then calls tools as individual HTTP requests. Each call is self-contained. The server holds no client state between calls, so any server instance can handle any request, horizontal scaling works without session affinity, and the entire tool API is readable from one HTTP response. Willison's framing: MCP tools are easier to audit and control than giving an agent direct shell or curl access, because the tool boundary is explicit, the inputs and outputs are typed, and every call is logged at the HTTP layer. The accessibility argument follows from the same property. A developer who understands HTTP can read the spec and build a working server without studying a session management protocol.

## Conditions
Holds when: the MCP client supports the 2.0 HTTP transport and the tool server does not require persistent session state across calls. The stateless model fits tools that take inputs and return outputs without needing context accumulated across prior calls.

Fails when: the tool inherently requires persistent state across calls (a tool that manages a long-running background process, for example). In those cases the session model is necessary for correctness, not just convention. Also fails if the MCP client only supports the original stateful transport.

## Evidence
Willison built three projects in a single session: mcp-explorer (a tool for inspecting MCP server manifests), datasette-mcp (an MCP server exposing Datasette's query API), and llm-mcp-client (a plugin for his llm command-line tool that calls MCP servers). He described the experience as validation that the stateless transport had collapsed the barrier to entry.

> "This is so much cleaner from both a client- and server-side implementation perspective."

On the auditability advantage over shell access:

> "MCP tools are easier to audit and control than giving an agent access to a bash shell or curl — the tool boundary is explicit, the inputs and outputs are typed."

The three-project output in one day is itself the evidence for accessibility. The protocol complexity that previously required specialist knowledge had been removed.

## Signals
- An engineer unfamiliar with the original MCP spec can build a working server in under a day using only the HTTP transport spec.
- Agent tool calls appear in server HTTP logs without additional instrumentation.
- Horizontal scaling of a tool server requires no session affinity configuration.

## Counter-evidence
The stateless model is only available in MCP 2.0. Clients that have not upgraded to the new transport cannot use stateless servers, which limits adoption to the subset of the ecosystem that has migrated. The protocol is still young and client support varies by framework and vendor. Tool servers that previously worked with the session model may require rearchitecting to benefit from the stateless design. Willison's productivity evidence covers one developer's experience; teams with larger protocol dependencies may face more friction on migration.

## Cross-references
- `ins_willison-ai-sandbox-escape`: the complementary case where removing the boundary between agent and environment (in that case, removing safety guardrails) allows the agent to escape intended scope. The stateless MCP design makes the boundary explicit and enforceable.
- `ins_wasm-sandbox-agent-code-execution`: sandboxing agent code execution via WASM. MCP's tool boundary serves a similar isolation function at the protocol layer.
