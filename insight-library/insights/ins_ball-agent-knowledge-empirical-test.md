---
id: ins_ball-agent-knowledge-empirical-test
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
artifact_class: workflow
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 3 }
tier: B
related: [ins_ball-observability-legible-to-agent, ins_ball-specification-bug-era]
raw_ref: ""
---

# AGENTS.md files and skills should be tested empirically, not trusted by presence

## Claim
Written agent guidance in AGENTS.md files, skills, and documentation accumulates without guarantee that agents follow it; the only reliable test is a controlled comparison that measures whether behavior changes when the guidance is present.

## Mechanism
Agent knowledge files grow organically: teams add instructions when a problem recurs. But agents do not read every file with equal attention. Guidance that sits in a location the agent never loads, or that the agent is not trained to weight heavily, has zero effect on output while adding noise to the files a human reads. A control/treatment split, running the same tasks with and without a given piece of guidance and comparing results, reveals whether the content actually changes agent behavior. Content that shows no effect should be removed.

## Conditions
Holds when: there is a repeatable task or eval that can be run with and without a given piece of guidance.
Fails when: the task is too rare or too large to run as a controlled comparison, or when the guidance covers edge cases that appear only infrequently.

## Evidence
From Ball's "How I work with Agents" thread (October 25, 2026):

> "Evaluate whether agent knowledge works. Test AGENTS.md files, skills, and docs by running control agents without them and treatment agents with them, then compare results. Remove guidance that shows no effect."

Ball also applies this pattern at the codebase level, using one agent to push a change and then spawning three others without revealing it to compare their behavior as a measure of agent-friendliness.

## Signals
- AGENTS.md files are shorter because content that failed the control/treatment test was removed.
- Agent task performance on the tested dimension improves after guidance is validated and trimmed.
- Teams run a small eval on any new guidance before adding it to the shared file.

## Counter-evidence
Controlled evaluation of guidance files requires infrastructure (eval harnesses, consistent tasks, reliable comparison metrics) that most teams do not have. In practice, teams will add guidance reactively and never test it. The guidance-as-dead-weight problem is real but the test Ball describes requires meaningful engineering investment to run reliably.

## Cross-references
- See `ins_ball-observability-legible-to-agent` for Ball on the related principle that agents need legible failure modes, not just task instructions.
