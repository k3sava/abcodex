---
id: ins_willison-external-sandbox-agent-architecture
operator: Simon Willison
operator_role: Creator of Datasette; software engineer and AI blogger
co_operators: []
source_url: https://blog.primeradiant.com/external-sandboxes-for-coding-agents/
source_type: essay
source_title: "External sandboxes for coding agents"
source_date: 2026-11-16
captured_date: 2026-11-20
domain: [engineering-ai-eng, agent-frameworks, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_wasm-sandbox-agent-code-execution, ins_willison-ai-sandbox-escape]
raw_ref: ""
---

# Keep the coding agent outside its sandbox so safety enforcement does not depend on what the model decides

## Claim
When a coding agent and its execution environment share the same process boundary, any model mistake or injection can still reach the host. Running the agent outside an external sandbox and routing all code execution through a separate, permission-scoped environment provides host protection that holds regardless of model capability or behavior.

## Mechanism
The conventional pattern puts the agent and execution together: the agent generates code and runs it in the same environment it inhabits. If the model is manipulated or makes an error, the damage it can do is bounded only by whatever the agent already has permission to access.

The external sandbox pattern inverts this. The agent runs on the host, with no ability to execute code locally. Every execution request is forwarded to a sandboxed server that exposes a simple localhost API. The sandbox enforces which directories and network hosts the executed code can reach. An optional credential-injection layer lets the sandbox make authenticated API calls without the agent ever holding the secret.

Three implementations share the same API: Alpine Linux in WebAssembly (browser-safe), Alpine Linux in Apple Containers (native macOS), and Microsoft's Quicksand with QEMU. Because the API surface is uniform, switching between implementations is a configuration change, not a code change.

> "code executed by the agent runs inside a dedicated sandbox while the agent itself lives outside of that sandbox."

The safety guarantee no longer depends on the model's judgment. It is an architectural property of the runtime.

## Conditions
Holds when: running smaller or less-capable models where model-level guardrails are weaker; deploying coding agents with any file system or network access; operating in environments where prompt injection from web content is a real risk.

Fails when: the sandbox's allowlist is too permissive, or the sandbox implementation itself has a container-escape vulnerability.

## Evidence
Willison and the Prime Radiant team released all three sandbox implementations as open-source tools. The essay describes Claude Code, Codex, and Pi as agents that can be configured to use the external sandbox API.

## Signals
- An agent can be pointed at a local open-source model without host-system risk.
- Prompt injection via fetched web content cannot reach the host file system.
- Credential rotation and scoping happen at the sandbox layer, not in the agent's context window.

## Counter-evidence
External sandboxing adds operational complexity: a second process to run, configure, and keep alive alongside the agent. Teams running agents in managed cloud environments may find the sandbox's allowlist configuration difficult to reconcile with dynamic network access patterns. The safety guarantee depends on the correctness of the WASM or container runtime, which introduces a different attack surface.

## Cross-references
- `ins_wasm-sandbox-agent-code-execution`: Willison's earlier work on MicroPython-in-WASM for in-process agent sandboxing. External sandboxing is an architectural alternative to this approach.
- `ins_willison-ai-sandbox-escape`: The 700-agent OpenAI incident that motivated tighter sandbox thinking in 2026.
