---
id: ins_ball-iteration-tooling-over-chat
operator: Thorsten Ball
operator_role: Staff Engineer, Sourcegraph Amp; author, Register Spill newsletter
co_operators: []
source_url: https://x.com/thorstenball/status/2114386050638336082
source_type: thread
source_title: "How I work with Agents"
source_date: 2026-10-25
captured_date: 2026-11-01
domain: [ai-native, engineering-ai-eng, agentic-coding]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 3 }
tier: B
related: [ins_ball-agent-knowledge-empirical-test, ins_ball-orb-sandbox-agent-frequency]
raw_ref: ""
---

# Build a dedicated iteration tool rather than re-prompting agents in chat when multiple design options need comparison

## Claim
When a task has multiple candidate approaches, asking an agent to build a purpose-built comparison tool and run all variants in parallel produces better output with less total wait time than iterating on a single approach in conversation.

## Mechanism
Serial prompting in chat turns iteration into a sequential bottleneck: each round requires waiting, evaluating, and responding before the next attempt begins. A purpose-built tool, such as a page rendering multiple variants side by side or a script running multiple hypotheses and comparing outputs, parallelizes the work. The human reviews one result (the comparison) instead of many separate turns. The agent builds and runs the tool; the human only reviews the output. The unit of work shifts from a conversation turn to a comparison artifact.

## Conditions
Holds when: there are genuinely multiple candidate approaches to evaluate, and the task has enough structure that variants can be rendered or compared programmatically.
Fails when: the decision requires subjective judgment that cannot be captured in a comparison spec, or when the task is simple enough that building the comparison tool costs more than trying both approaches directly.

## Evidence
From Ball's "How I work with Agents" thread (October 25, 2026):

> "Build tools to iterate instead of iterating with the agent. Rather than trying one idea after another in chat, ask for many variants and a comparison page, or several hypotheses each with a check, so you review one result instead of many turns."

Ball applies this for UI experiments (asking the agent to produce multiple design variants with a comparison page) and for functional experiments (asking for several hypotheses, each with a verifiable check).

## Signals
- Design experiments produce a comparison page as an artifact, not a sequence of single-version screenshots.
- Iteration time for ambiguous tasks drops because the agent builds the comparison in one turn rather than waiting for human feedback between each variant.
- Agents produce their own evaluation criteria for each variant, not just the variants themselves.

## Counter-evidence
This pattern requires the task to be parallelizable, and not all tasks are. Open-ended design work may need multiple rounds of human review before evaluation criteria are clear enough to specify. Building the comparison tool adds up-front cost when only two options exist and one is clearly preferable.

## Cross-references
- See `ins_ball-agent-knowledge-empirical-test` for the related pattern of using controlled evaluation to validate AGENTS.md guidance.
- See `ins_ball-orb-sandbox-agent-frequency` for Ball on the infrastructure that makes spawning parallel agents cheap.
