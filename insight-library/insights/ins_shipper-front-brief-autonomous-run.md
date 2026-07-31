---
id: ins_shipper-front-brief-autonomous-run
operator: Dan Shipper
operator_role: CEO and co-founder, Every
co_operators: []
source_url: https://every.to/context-window/taming-opus-5
source_type: essay
source_title: "Taming Opus 5"
source_date: 2026-07-28
captured_date: 2026-07-31
domain: [ai-native, prompt-context-and-evals]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: playbook
score: { originality: 4, specificity: 4, evidence: 3, transferability: 5, source: 4 }
tier: B
related: [ins_shipper-opus5-scaffolding-reset, ins_mollick-commission-not-steer, ins_horthy-trajectory-poisoning-reset]
raw_ref: ""
---

# Front-load the full brief and evaluate the finished artifact; interrupting an autonomous run resets the model's planning state

## Claim
Autonomous frontier models are optimized for single-run execution, not iterative chat. The correct operating protocol is: write the complete brief in the first prompt, let the model run without interruption, then evaluate the finished artifact rather than the model's in-progress narration. Mid-task correction resets the model's planning state and produces worse output than a clean uninterrupted run.

## Mechanism
A frontier model that receives a full brief at the start allocates reasoning across the entire task scope. When a user interrupts mid-run to redirect or correct, the model re-enters a narrower context: the current exchange rather than the original full-scope brief. The planning trajectory resets. Subsequent output reflects the interrupted context, not the original intent.

Narration compounds the problem. Models describe their process while executing. Users who correct based on narration are responding to process commentary, not to output quality. The narration may be verbose or hedged even when the final artifact is correct. Evaluating the narration as if it were the output trains users to intervene unnecessarily, making outcomes worse.

Every's operational protocol for Opus 5 following this insight: write the full brief, include output format expectations, run batch jobs where possible, and filter output rather than redirect mid-task. The task boundaries matter. A model that can run a three-hour coding job should be handed a three-hour brief, not a sequence of fifteen-minute prompts.

## Conditions
Holds when: the model has sufficient capability to execute the full brief from a single initial prompt, and when the task can be fully specified before execution begins. Strongest for coding, research, and writing tasks with clear completion criteria.

Fails when: the task is genuinely exploratory and the brief cannot be written until intermediate results are known. Also fails when the model makes a consequential error early in the run that, if uncorrected, invalidates all subsequent work. In those cases, early intervention is correct.

## Evidence
Shipper in "Taming Opus 5":

> "Skills preserve assumptions about the model they were written for. Try them freely but treat each new model release as a reason to prune."

The pruning instruction is the operational signal: each new model generation changes what instructions are load-bearing and which are now constraints the model no longer needs. The brief itself must be audited at each model upgrade, not just the scaffolding.

Every's testing found that when they provided complete upfront context and resisted mid-task correction, output quality improved substantially. The model's autonomous runs outperformed the interrupted ones even when the interruptions were well-intentioned attempts to improve the output.

## Signals
- When a model's in-progress narration sounds uncertain or verbose but the finished artifact is correct, the narration is not a reliable quality signal and should not trigger intervention.
- Tasks that go wrong consistently at the same point in the run are more likely experiencing a brief-specification gap than a model capability failure.
- Switching from iterative back-and-forth to single-brief runs and observing output quality change is the fastest test of whether this holds for a specific workflow.

## Counter-evidence
Full-brief construction is harder to write and easier to get wrong than iterative prompting. A poorly written upfront brief with no mid-course correction produces a finished artifact that is entirely wrong, whereas iterative correction catches errors earlier. For teams without a strong brief-writing discipline, iterative correction may produce better average outcomes even if it produces worse ceiling outcomes. Shipper's findings are based on Every's internal use of Opus 5 on coding and writing tasks; results may not generalize to all task types or model capabilities.

## Cross-references
- `ins_shipper-opus5-scaffolding-reset`: the same source period from Every's Opus 5 testing, but a different mechanism. That card covers when to delete existing scaffolding entirely. This card covers how to construct the initial brief when starting a run. Both address the same upgrade moment from different angles.
- `ins_mollick-commission-not-steer`: Mollick's framing that frontier models require commissioning rather than steering. This card operationalizes the commission step: the brief is the commission document, and once issued it should run to completion.
- `ins_horthy-trajectory-poisoning-reset`: mid-conversation correction as a trajectory problem at the session level. The brief-construction principle here is the task-level parallel: the full context at the start determines the planning trajectory, and interruption degrades it.
