---
id: ins_agent-sandbox-stateful-execution
operator: Simon Willison
operator_role: Co-creator of Django; creator of Datasette; independent AI engineering writer
co_operators: []
source_url: https://simonwillison.net/2026/Jun/6/micropython-in-a-sandbox/
source_type: essay
source_title: Running Python code in a sandbox with MicroPython and WASM
source_date: 2026-06-06
captured_date: 2026-06-07
domain: [engineering, ai-native]
lifecycle: [ai-workflow]
maturity: frontier
artifact_class: workflow
score: { originality: 4, specificity: 5, evidence: 3, transferability: 3, source: 4 }
tier: B
related: [ins_wasm-sandbox-agent-code-execution]
raw_ref: ""
---

# A queue-based MicroPython loop lets an AI agent accumulate Python state across sequential tool calls

## Claim
Running MicroPython in a persistent queue-based loop, rather than restarting the interpreter for each agent code call, preserves variables and functions between calls and enables iterative agent workflows where each step builds on the last.

## Mechanism
The sandbox runs MicroPython in a thread that blocks on a `get_next_python_code()` host function. The interpreter evaluates the code it receives, returns the result, then blocks again waiting for the next call. The agent enqueues new code with each tool invocation. Because the interpreter never exits, names defined in call N remain in scope when call N+1 executes. Sequential tool calls become a stateful Python session rather than a series of isolated executions.

Willison pairs this with wasmtime's "fuel" mechanism: a configurable per-operation budget that bounds CPU consumption per call without killing the interpreter or discarding its state. A 78-line C module compiled into a 362KB WebAssembly blob gates exactly which host functions the sandboxed code can invoke, ensuring selective integration with the host system.

## Conditions
Holds when: the agent needs to accumulate intermediate results across multiple Python executions (load a dataset in call 1, filter in call 2, aggregate in call 3); and the interpreter runs in a single-session context where its lifetime matches the agent session.

Fails when: the sandbox serves multiple concurrent sessions from a single interpreter instance (state isolation breaks across users); or when accumulated state grows large enough to exhaust the WASM module's memory allocation.

## Evidence
Willison describes the full design in the technical write-up accompanying the `micropython-wasm` alpha package and the `datasette-agent-micropython` plugin:

> "I've been experimenting with different approaches to running code in a sandbox for several years now, but my latest attempt feels like it might finally have all of the characteristics I've been looking for."
· Simon Willison, https://simonwillison.net/2026/Jun/6/micropython-in-a-sandbox/, 2026-06-06

The design choices combined: queue-based blocking loop for state persistence, fuel limits for CPU budgeting, memory constraints via wasmtime, and a minimal C shim for controlled host access.

## Signals
- Multi-step agent data analysis produces correct results that depend on intermediate values computed in earlier calls.
- Restarting the sandbox between calls breaks the workflow; the persistent design fixes it without relaxing isolation.

## Counter-evidence
Persistent state between calls creates contamination risk: a bad call can corrupt interpreter state for all subsequent calls in the same session. Isolation is guaranteed between sessions, not between calls within one session. MicroPython's standard library is a strict subset of CPython; agents that need numpy, pandas, or OS-level operations cannot use this pattern. The fuel-based CPU limit also requires calibration: too low and valid computations abort; too high and a runaway loop consumes excessive resources before the limit triggers.

## Cross-references
- `ins_wasm-sandbox-agent-code-execution`: The companion card covering WASM isolation as a security mechanism; this card extends that design with stateful execution for iterative workflows.
