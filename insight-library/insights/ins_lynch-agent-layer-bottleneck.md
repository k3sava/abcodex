---
id: ins_lynch-agent-layer-bottleneck
operator: Michael Lynch
operator_role: Bootstrapped founder; former software engineer at Google and Microsoft; author of Refactoring English
co_operators: []
source_url: https://mtlynch.io/why-are-coding-agents-so-dumb/
source_type: essay
source_title: "Why Are Coding Agents So Dumb?"
source_date: 2026-10-09
captured_date: 2026-10-11
domain: [engineering, ai-native]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: case-study
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_al-dahle-narrow-model-beats-frontier, ins_ronacher-codemode-harness-bash-limit]
raw_ref: ""
---

# Coding agent quality stalls at the orchestration layer despite model improvements; serial execution, no model routing, and opaque plans are agent failures benchmarks miss

## Claim
Coding agents improved slowly since early 2025 despite the underlying models improving substantially. The bottleneck is the agent layer: task orchestration, model routing, plan generation, and stopping behavior. Benchmarks measure model capability, not agent orchestration quality. The failures go unmeasured and deprioritized.

## Mechanism
Lynch separates the model (generates outputs) from the agent (connects outputs to files, commands, and APIs). Model quality is measured by benchmark scores and is visibly improving. Agent quality is measured by almost nothing in common use.

The specific agent-layer failures Lynch documents:

**Serial execution.** Agents decompose tasks into subtasks and run them one at a time, including subtasks with no interdependencies. Tasks that could run concurrently queue instead.

**No model routing.** Every subtask routes to the same frontier model. The agent never delegates a simple operation to a cheaper, faster model.

**Self-knowledge gaps.** Agents must search the web to discover their own features. They have no reliable internal index of their own capabilities.

**Opaque plans.** Agent-generated plans mix low-level design decisions and implementation steps in ways that humans cannot review or redirect before execution begins.

**Stopping on trivials.** Agents halt on questions a competent developer resolves independently: which git branch to use, what to name a variable.

The reason these failures persist is a principal-agent problem. Executives who fund agent development evaluate on metrics legible to them: benchmark scores and demo quality. Agent orchestration failures are not legible from those metrics.

## Conditions
Holds when: agents run multi-step tasks involving research, file changes, and external calls; agents are evaluated on benchmarks that test model capability rather than orchestration quality; leadership sets priorities without daily hands-on use of the tools.
Fails when: agents run single-step or tightly-bounded tasks where orchestration failures do not surface; organizations track agent quality through task-completion rates and cost-per-task rather than benchmark scores alone.

## Evidence
Michael Lynch published this analysis on October 9, 2026, drawing on daily use of multiple coding agents as a bootstrapped founder:

> "Why are you doing these embarrassingly parallel tasks one at a time?"

> "the agent never stops and says, 'Wait, this is something another model could do cheaper and faster.'"

> "pay attention to metrics that are legible to them, such as slick demos and benchmark scores."

Lynch notes that "barely any of the benchmarks I've seen measure the agents themselves."

## Signals
- Agent runs independent subtasks sequentially over many minutes
- A coding agent routes a one-line git commit message through the frontier model
- Agent-generated task plans require significant cleanup before a developer can act on them
- Agent pauses mid-task on a decision it should have resolved independently
- Cost per coding task stays high even as token prices fall, because inefficient routing sends cheap work to expensive models

## Counter-evidence
Lynch acknowledges that the incentive explanation does not fully account for why agent-layer investment remains low even as feature addition rates stay high. Building reliable concurrency and model routing in an agentic loop is genuinely hard. Many end users may not notice the inefficiencies Lynch identifies.

## Cross-references
- `ins_al-dahle-narrow-model-beats-frontier`: Airbnb routes frontier models to high-stakes coding tasks and small specialist models to low-latency tasks, implementing the delegation Lynch says agents never do.
- `ins_ronacher-codemode-harness-bash-limit`: codemode addresses concurrent tool execution at the harness layer, one specific instance of the serial execution problem Lynch describes.
