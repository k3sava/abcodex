---
id: ins_mollick-commission-not-steer
operator: Ethan Mollick
operator_role: Professor, Wharton School; author of Co-Intelligence and Co-Existence
co_operators: []
source_url: https://www.oneusefulthing.org/p/what-it-feels-like-to-work-with-mythos
source_type: essay
source_title: "What it feels like to work with Mythos"
source_date: 2026-06-09
captured_date: 2026-06-14
domain: [ai-native, future-of-work]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: case-study
score: { originality: 4, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_mollick-co-existence-phase-shift, ins_mollick-patron-not-wizard, ins_willison-fable-relentlessly-proactive]
raw_ref: ""
---

# Frontier models capable of multi-hour autonomous runs require commissioning, not steering

## Claim
When an AI model can execute 9-plus-hour complex projects from a single design document, the productive relationship shifts from steering (guiding each step interactively) to commissioning (setting the goal and reviewing the output).

## Mechanism
Steering assumes the human can evaluate each intermediate step and redirect. When a model works for hours across hundreds of tool calls, the human cannot meaningfully supervise the process; they can only evaluate the deliverable. Mollick found that Fable 5 simultaneously launched research subagents, ran adversarial validation groups, and produced working software from a single prompt. The relevant judgment shifted from "what should it do next?" to "does the outcome meet the brief?" This is the same relationship a client has with a contractor: the contractor plans and executes, the client evaluates the result.

## Conditions
Holds when: the task can be fully specified in a written brief before work begins, and the output is evaluable by the human without reviewing each intermediate step.
Fails when: tasks require judgment calls that cannot be anticipated in the brief, the stakes of unreviewed autonomy are too high, or the desired output cannot be defined clearly upfront (exploratory research, novel design).

## Evidence
Mollick tested Fable 5 on three classes of complex work. Building Concord, a data analysis calibration tool, ran for 9.5 hours. Building an isochrone map required researching 2,200-plus flights and multiple rail and road databases. Single initial prompts produced fully playable browser games. The model "launched a workflow, adversarial groups of agents that did research and tested each others results" without human prompting.

> "I no longer steer; I commission"

> "I just asked for something and it happened. And also unnerving because I just asked for something and it happened"

He concluded the model "outperformed basically every other public model I have used by a considerable margin."

## Signals
- The useful checkpoints shift from mid-task reviews to reviewing completed deliverables.
- Planning the brief upfront becomes more valuable than iterative prompting mid-task.
- The initial prompt or document becomes the primary determinant of output quality.

## Counter-evidence
Mollick notes that production costs with Fable 5 are "genuinely unclear" because it is twice the price of Opus and burns tokens fast across long runs. The commissioning frame requires a task that can be specified clearly in advance. Exploratory or open-ended work may still require interactive steering. Mollick also flagged that safety guardrails trip too often on security-adjacent requests, defaulting to a smaller model mid-task and breaking the autonomous run.

## Cross-references
- `ins_mollick-co-existence-phase-shift`: co-existence provides the strategic frame for why commissioning is now the right mode for many knowledge tasks.
- `ins_mollick-patron-not-wizard`: the patron role (setting constraints, not executing) is the practical precursor to the commissioning frame described here.
- `ins_willison-fable-relentlessly-proactive`: Willison's breadth-first agent behavior is the underlying mechanism that makes commissioning viable across long, unpredicted paths.
