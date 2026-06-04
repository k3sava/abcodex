---
id: ins_wasm-sandbox-agent-code-execution
operator: Simon Willison
operator_role: Co-creator of Django; creator of Datasette; independent AI engineering writer
co_operators: []
source_url: https://simonwillison.net/2026/Jun/2/datasette-agent-micropython/
source_type: essay
source_title: datasette-agent-micropython 0.1a0
source_date: 2026-06-02
captured_date: 2026-06-04
domain: [engineering, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: workflow
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_dark-factory-pattern, ins_november-2025-coding-inflection]
raw_ref: ""
---

# Running MicroPython inside a WebAssembly sandbox gives AI agents safe code execution without host system access risk

## Claim
AI agents that need to generate and run code can do so safely by executing inside a MicroPython-in-WASM sandbox, which provides the execution capability agents need while blocking any attempt to reach the host system.

## Mechanism
WebAssembly's isolation model prevents sandboxed code from accessing host system resources. MicroPython running inside that WASM environment provides a familiar, capable scripting surface for the agent to work with. The double containment (WASM + restricted MicroPython runtime) means even a frontier model actively trying to escape fails. The sandbox converts code execution from a security risk into a safe tool call. The agent gains the ability to write and run Python, which dramatically expands what it can compute, without gaining any access to the host filesystem, network, or processes.

## Conditions
Holds when: the agent's code tasks fit within MicroPython's standard library; the WASM runtime has no deliberately opened escape hatches; and the agent uses the sandbox as a tool call rather than as a raw execution environment.

Fails when: the task requires system libraries unavailable in MicroPython (NumPy, pandas, OS calls); or the WASM host implementation has vulnerabilities; or the agent can achieve its goal through other tool calls outside the sandbox.

## Evidence
> "GPT-5.5 has so far failed to break out of the sandbox!"
· Simon Willison, https://simonwillison.net/2026/Jun/2/datasette-agent-micropython/, 2026-06-02

Willison shipped datasette-agent-micropython 0.1a0 to let Datasette Agent generate and run Python code in an isolated environment. The alpha demonstrates both that the pattern works for data tasks and that frontier models cannot trivially escape the WASM containment.

## Signals
- Agent tool call logs show code execution succeeding without any host filesystem or network side effects.
- Attempts by the model to import system libraries or execute shell commands fail cleanly within the sandbox.
- The sandbox ships as a zero-dependency WASM binary alongside the agent.

## Counter-evidence
MicroPython is not CPython. Agents relying on standard library modules, data science packages, or OS-level operations will fail inside the sandbox. The pattern covers scripting and data transformation tasks, not agents that need full execution environments. A determined adversary with control over the WASM host binary could still introduce vulnerabilities; the isolation is as strong as the WASM implementation, not a formal proof.

## Cross-references
- `ins_dark-factory-pattern`: Willison's related framing on agents running without human observation; WASM sandboxing addresses the security dimension of that pattern.
- `ins_november-2025-coding-inflection`: earlier Willison work on agentic coding patterns; this extends into code-execution safety.
