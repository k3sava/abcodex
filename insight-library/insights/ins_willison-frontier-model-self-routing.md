---
id: ins_willison-frontier-model-self-routing
operator: Simon Willison
operator_role: Creator of Datasette; independent software developer and blogger
co_operators: []
source_url: https://simonwillison.net/2026/Jul/3/judgement/
source_type: essay
source_title: "Fable's Judgement"
source_date: 2026-07-03
captured_date: 2026-07-07
domain: [agentic-coding, ai-native, engineering]
lifecycle: [ai-workflow]
maturity: frontier
artifact_class: workflow
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_willison-cross-model-review, ins_ronacher-harness-overfit-tool-schema]
raw_ref: ""
---

# Telling a frontier model to self-route tasks to cheaper subagent models outperforms pre-written routing rules on both cost and quality

## Claim
Delegating routing judgment to the frontier model itself, by telling it to choose the right model tier per task, produces better cost-to-quality outcomes than pre-writing routing heuristics, because the model's in-context assessment of task complexity is more accurate than rules defined before the task exists.

## Mechanism
Pre-written routing rules ("use Sonnet for X, use Haiku for Y") are rigid. They cannot read the actual task before deciding. The frontier model can. Its training has implicitly learned to distinguish judgment-heavy work from mechanical implementation, and it adjusts routing per task rather than per task-type. Judgment-heavy work (design, audit, data synthesis) stays in the main model loop; mechanical implementation routes to cheaper subagents. The model's self-assessment of where it is needed is more granular than any static rule set.

## Conditions
Holds when: the main model is a frontier-tier model with subagent spawn capability (Fable or Opus tier). The task mix genuinely includes both judgment-heavy and mechanical work where the cost difference between tiers matters.
Fails when: the main model is smaller and less capable of reliably assessing task complexity. Routing judgment requires a model that can distinguish task types in context.

## Evidence
Simon Willison documented this after a fireside chat with Cat Wu and Thariq Shihipar from the Claude Code team at the AIE 2026 conference.

> "One of the most interesting tips I got from the Fireside Chat I hosted with Cat Wu and Thariq Shihipar from the Claude Code team at AIE on Wednesday was to let Fable (and to a certain extent Opus) use their own judgement rather than dictating how they should work."

On test-coverage routing as an example:

> "The example they gave was testing. You can tell Fable 'only use automated testing for larger features, don't update and run tests for small copy or design changes' — but it's better to just tell Fable to use its own judgement when deciding to write tests instead."

Willison's working memory note for the model:

> "Why: cost/efficiency — implementation work rarely needs the top-tier model; judgment, review, and synthesis stay with the main loop.
>
> How to apply: when a task in this project is primarily writing/editing code, spawn an Agent with a model override (sonnet for substantive implementation, haiku for trivial/mechanical edits) and a self-contained prompt; review the result in the main loop before committing. Design, auditing, data synthesis, and anything judgment-heavy stays in the main model."

On results:

> "So far it seems to be working well. I'm getting a _ton_ of work done and my Fable allowance is shrinking less quickly than before."

## Signals
- Token consumption at the frontier tier drops without a corresponding drop in output quality on complex tasks.
- Subagent model choices made by the main model roughly match what an expert would have chosen manually.
- Subagent spawn frequency increases as the main model learns which tasks qualify for delegation.

## Counter-evidence
One developer's informal report over a short time window. No controlled comparison against a pre-written routing rule set on the same tasks. The Fable/Opus tier cost profile is unusual enough that routing matters significantly; on cheaper models the cost delta may not justify the added complexity.

## Cross-references
- `ins_willison-cross-model-review`: using competing model providers to review each other's work.
- `ins_ronacher-harness-overfit-tool-schema`: how newer frontier models accumulate harness-specific behavioral drift.
- `pat_execution-cheap-judgement-scarce`: the broader pattern of judgment remaining the scarce, non-delegatable part of AI workflows.
