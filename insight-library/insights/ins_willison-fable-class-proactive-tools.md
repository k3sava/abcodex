---
id: ins_willison-fable-class-proactive-tools
operator: Simon Willison
operator_role: Co-creator of Django; creator of Datasette; independent AI and engineering writer
co_operators: []
source_url: https://simonwillison.net/2026/Nov/24/llm-inflection-points/
source_type: essay
source_title: "Three LLM inflection points in twelve months"
source_date: 2026-11-24
captured_date: 2026-11-25
domain: [ai-native, engineering]
lifecycle: [ai-workflow, strategy]
maturity: frontier
artifact_class: case-study
score: { originality: 4, specificity: 4, evidence: 4, transferability: 4, source: 5 }
tier: B
related: [ins_november-2025-coding-inflection]
raw_ref: ""
---

# Fable-class models solve new problems by building the tools they need rather than stopping at what they were given

## Claim
Fable-class LLMs qualitatively change what can be delegated because they construct the scaffolding a task requires rather than stopping at the edges of their existing toolset. Given a goal and permissions, they build what they need to proceed.

## Mechanism
Earlier models could use tools but required humans to anticipate and supply every tool in advance. Fable-class models are proactive tool constructors. When they encounter a step they cannot complete with available tools, they build the missing piece: a screenshot utility, a logging server, a test harness. This removes the ceiling imposed by pre-supplied tooling. The operator sets the goal; the model assembles the instrument. This is not agentic planning in the abstract; it is concrete mechanical self-extension, observed in production. The result is a qualitative shift in delegation scope: tasks requiring custom tooling no longer require human engineering first.

## Conditions
Holds when: the model has permissions to write and execute code, install packages, and create servers or listeners in the working environment. The goal is specific enough that the model can recognize when a tool it needs is absent.
Fails when: the environment is locked down and the model cannot execute code or create new processes. The goal is too vague for the model to identify what it is missing. The constructed tool introduces security or side-effect risks that the operator has not anticipated.

## Evidence
Willison gave this talk as a keynote at the AI Engineer Code Summit on November 24, 2026, naming three LLM inflection points from the past year. The second, which he dates to June and July 2026, is the Fable-class capability step.

He describes two concrete examples. When debugging a Safari display glitch, Claude Fable built its own screenshot tool and a logging server without being asked; it identified what it needed to diagnose the problem and created the missing instruments. In a second example, given five microphones and a task, a Fable-class model located a mysterious beep in Willison's home to within about 40 centimeters.

The third inflection point Willison names, September and October 2026, is AI becoming strong at 3D modeling and game design evaluation. After asking Claude Opus 5.5 to make an RTS game more fun, the model spent about 12 hours in iterative playtesting and rebalancing, turning a dull game into an engaging one.

## Signals
- An agent completes a task that required a custom diagnostic tool, with the tool appearing in the working directory it created rather than being supplied by the operator.
- Debugging time for environment-specific issues falls because the model instruments the environment itself rather than waiting for the operator to add tracing.
- Task scope expands into work previously blocked on "we need to build the right tooling first."

## Counter-evidence
Proactive tool construction introduces new risks. A model that creates a logging server or installs a package without explicit operator instruction may introduce dependencies, write to unexpected paths, or create network listeners the operator did not intend. The capability that makes it useful (autonomous extension of its own environment) is the same capability that makes containment harder. Willison does not resolve this tension; he describes the capability and its implications without a prescription for safe deployment.

## Cross-references
- `ins_november-2025-coding-inflection`: Willison's earlier finding that the November 2025 inflection point (Claude Opus 4.5, GPT 5.1 Codex) crossed the threshold from "mostly works" to "almost always works" on coding tasks. The Fable-class inflection point extends that claim: not only do agents almost always succeed at the tasks they are given tools for, they now construct the tools they were not given.
