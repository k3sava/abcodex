---
id: ins_mccormick-ai-compiler-not-runtime
operator: Packy McCormick
operator_role: Founder, Not Boring Capital; writer, Not Boring newsletter
co_operators: [Markie Wagner]
source_url: https://www.notboring.co/p/return-on-tokens-rot
source_type: essay
source_title: "Return on Tokens (ROT)"
source_date: 2026-06-10
captured_date: 2026-06-16
domain: [ai-native, founder-operator, engineering]
lifecycle: [ai-workflow, process-cadence, strategy]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 4, transferability: 5, source: 4 }
tier: B
related: [ins_dark-factory-pattern, ins_skill-distillation-frontier-teacher]
raw_ref: ""
---

# Using AI as a compiler converts expensive thinking into cheap deterministic doing

## Claim
Companies that route AI into runtime agent execution at scale burn token budgets without proportional output. The correct pattern is to use AI rarely and expensively to compile business rules into deterministic code, then run that code without touching the model.

## Mechanism
The economic asymmetry is direct: thinking (using AI to reason about a process and convert it to code) happens once per process and costs tokens once. Doing (executing that process on every transaction) happens continuously and costs nothing if it runs as compiled code. Treating agents as the runtime means every execution re-invokes the model: the cost structure scales with transaction volume instead of being fixed at the compilation step. McCormick and Wagner call the alternative "software that tokenminimizes itself" and describe businesses that keep agents in the runtime as running a permanent token bill that cannot be optimized away, because the execution path itself is non-deterministic.

The mechanism is not just cost. Deterministic code is auditable, debuggable, and testable. An agent that executes at runtime produces opaque outputs. The compiler pattern produces a human-readable artifact (code) that can be reviewed, versioned, and corrected.

## Conditions
Holds when: the business process is sufficiently stable that compiling it to code does not immediately become stale; the process is repetitive enough that the per-execution savings exceed the compilation cost; and the process owner has enough understanding of the rules to specify them accurately.
Fails when: the process is genuinely ambiguous or evolves so rapidly that compiled rules are wrong within weeks; or when the human-in-the-loop design requires runtime judgment that cannot be expressed as deterministic rules.

## Evidence
McCormick and Wagner identify the pattern across three data points. Uber burned its entire 2026 Claude Code token budget by April, a 9-month budget consumed in 4 months, from using agents in the execution path of development workflows. AIG achieved 99%+ quality outcomes on multi-hour processes by compiling to deterministic code via Poetic. Poetic reports 100x less token usage compared to agent-based approaches running the same business logic.

McCormick frames the fundamental asymmetry:

> "Thinking is expensive but happens rarely. Doing is cheap and happens forever."

They describe agents in the runtime as "the BlackBerry of doing": functional, ubiquitous, and already heading toward obsolescence as compiled-code approaches mature.

## Signals
- Token spend grows proportionally with transaction volume rather than with the number of new processes or tasks.
- Agent outputs for the same process vary unpredictably across runs despite identical inputs.
- Debugging a production issue requires examining model output rather than reading code.

## Counter-evidence
The compiler pattern requires the business process to be specifiable in advance. Many valuable processes resist specification: customer escalation judgment, nuanced compliance review, context-sensitive negotiation. These remain candidates for runtime AI precisely because they cannot be compiled without losing fidelity. Wagner's company Poetic has demonstrated the pattern in specific high-volume, rule-bound processes (claims handling, insurance workflows); the generality of the approach across process types remains an active claim.

## Cross-references
- `ins_dark-factory-pattern`: Simon Willison's related observation that code generated without human review creates a factory nobody can audit; the compiler pattern is a partial answer by producing readable artifacts.
- `ins_skill-distillation-frontier-teacher`: Tomasz Tunguz's finding that frontier models can write executable procedural files cheaper local models then follow; structurally similar to the thinking-doing split described here.
