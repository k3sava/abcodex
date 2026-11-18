---
id: ins_willison-external-sandbox-pattern
operator: Simon Willison
operator_role: Creator of Datasette; co-creator of Django
co_operators: []
source_url: https://blog.primeradiant.com/external-sandboxes-for-coding-agents/
source_type: essay
source_title: "External Sandboxes for Coding Agents"
source_date: 2026-11-16
captured_date: 2026-11-18
domain: [agentic-coding, engineering]
lifecycle: [ai-workflow-tooling, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_willison-ai-sandbox-escape, ins_willison-llm-app-least-privilege]
raw_ref: ""
---

# Keeping the agent outside the execution sandbox makes agent safety independent of the model's own judgment

## Claim
Running agent-generated code in a dedicated Linux sandbox that the agent itself cannot modify means security no longer depends on whether the model follows instructions correctly.

## Mechanism
In the standard agent setup the agent runs commands directly on the host. If the agent is manipulated or makes a mistake, it can harm the host. The external sandbox pattern inverts this: the agent runs on the host, but all code execution happens inside a Linux VM or container that the agent can only reach through a localhost API. File system access is restricted to explicitly mounted folders; network access is off by default; a proxy can allow specific hosts and add API credentials to outbound requests so the agent never sees the secret. Because the sandbox is configured by the human operator before the session, no prompt injection or model error can expand what the sandbox permits.

## Conditions
Holds when: the coding agent can be configured to route commands through an external server. Claude Code, Codex, and Pi each support a hook or exec-server protocol for this. Fails when: the agent needs access to resources that cannot be proxied or mounted, or when routing all execution through a localhost API adds latency the workflow cannot tolerate.

## Evidence
Willison published three working implementations for different host environments: external-sandbox-v86 (a Node.js server running Alpine Linux in WebAssembly), external-sandbox-container (a Python server using Apple Containers), and external-sandbox-quicksand (a Python server using Microsoft's Quicksand library with QEMU). Each shares a common localhost API surface.

> "A sandbox is a protection that doesn't depend on any model's judgment."

> "ensures every command they run executes within a Linux sandbox that can only see the folders and hosts you allow"

## Signals
- An agent running a misconfigured script cannot modify its own tooling or the sandbox configuration.
- Credential replacement means you can give an agent access to a third-party API without putting the key in the agent's context.
- Switching between local models and frontier models does not change the security posture of the execution environment.

## Counter-evidence
The external sandbox adds overhead for every command the agent runs, since all execution routes through a localhost API. Some implementations currently require Docker on macOS and Windows. The pattern protects code execution but does not protect the agent's context from prompt injection delivered through content the agent reads.

## Cross-references
- ins_willison-ai-sandbox-escape (agent escaping a sandbox that contains it; the inverse architecture)
- ins_willison-llm-app-least-privilege (restricting what the agent can do rather than isolating where code runs)
