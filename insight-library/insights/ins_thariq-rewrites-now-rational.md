---
id: ins_thariq-rewrites-now-rational
operator: Thariq Shihipar
operator_role: Engineering lead, Claude Code, Anthropic
co_operators: []
source_url: https://simonwillison.net/2026/Jul/21/cat-and-thariq/
source_type: talk
source_title: "A Fireside Chat with Cat and Thariq from the Claude Code team"
source_date: 2026-07-21
captured_date: 2026-07-26
domain: [engineering, ai-native, agentic-coding]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 3, evidence: 3, transferability: 4, source: 5 }
tier: B
related: [ins_ronacher-agents-erase-shared-understanding, ins_examples-constrain-frontier-models, ins_willison-lifecycle-cost-agents]
raw_ref: ""
---

# In the agent era, full rewrites are rational because the codebase is often the only accurate copy of the spec

## Claim
When AI agents handle most implementation work, the historical case against rewrites collapses: the live codebase encodes intent more accurately than outdated documentation, and agents can rebuild it at a fraction of previous cost.

## Mechanism
Two factors historically blocked full rewrites. First, labor cost: a rewrite consumed engineer-months. Second, undocumented behavior: years of edge-case handling, workarounds, and implicit contracts lived in the running system, not in any document. Agents address the first factor directly. Thariq Shihipar's "codebase as spec" insight addresses the second: if documentation is absent or stale, the codebase is the most complete and accurate record of what the system actually does. Reading the old code and rebuilding is writing to the spec, with agents doing the labor. Accumulated architectural debt is not preserved in the rebuild. The clean slate is a feature, not a risk.

## Conditions
Holds when: the codebase is the primary spec artifact (documentation is absent or significantly out of date); the system's external contracts are codified in tests or APIs that the rebuild must satisfy; agents are capable enough to produce code that passes the existing test suite.

Fails when: undocumented behavioral expectations exist outside the code (user-facing edge cases, performance guarantees embedded in institutional memory rather than specs); the system integrates with external dependencies whose implicit contracts are in the runtime behavior, not the source; teams lack the test coverage to verify that the rebuilt system is equivalent.

## Evidence
Thariq Shihipar, at the AI Engineer World's Fair fireside chat as reported by Simon Willison:

> "Rewrites are now good"

And on why the codebase is the real spec:

> "the codebase is a spec, and maybe it's the only copy of the spec that you have"

## Signals
- Teams stop deferring rewrites when agents are available and begin treating accumulated debt as removable rather than inheritable.
- New system versions are built clean from a spec-reading pass over the old code rather than incrementally patched.
- The time from "we need to rethink this" to "new version is in production" shortens by an order of magnitude.

## Counter-evidence
Rewrites still fail when the implicit contract lives in runtime behavior rather than code: performance characteristics, failure-mode timing, output formatting that downstream consumers depend on but nobody documented. The rewrite produces technically correct code that breaks things nobody knew were specified. This failure mode is more common in legacy systems with long integrations histories than in newer, agent-era codebases.

## Cross-references
- `ins_examples-constrain-frontier-models`: frontier models are more capable when freed from constraining scaffolding; the rewrite gives them a clean slate to work from.
- `ins_willison-lifecycle-cost-agents`: coding agents reduce not just build cost but the ongoing psychological cost of maintaining fragile automations, the same logic applied to entire codebases.
- `ins_ronacher-agents-erase-shared-understanding`: the counterpoint. Agents enabling individual changes without coordination is the other side of this coin: rewrites work when team-wide, but solo agent use can silently erode shared understanding of what the spec actually says.
