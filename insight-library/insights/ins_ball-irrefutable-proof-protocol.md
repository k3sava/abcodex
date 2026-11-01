---
id: ins_ball-irrefutable-proof-protocol
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
related: [ins_ball-production-gate-replaces-pr, ins_willison-instruction-over-review]
raw_ref: ""
---

# Demanding irrefutable proof from a coding agent replaces trust-based review with evidence-based confirmation

## Claim
When a coding agent reports success, explicitly asking for a demo, end-to-end walkthrough, or before/after benchmark shifts verification from trusting the summary to reviewing actual evidence.

## Mechanism
Without a proof requirement, the natural end state of an agent task is the agent reporting success. Humans tend to accept that report, especially when the code looks reasonable. Asking for irrefutable proof forces the agent to build and run something demonstrable, which surfaces integration failures that a passing unit test or a confident summary would hide. Ball credits Quinn for the phrase and describes it as "a major change" in how work is handed off between agent and human.

## Conditions
Holds when: the task has a testable output, such as a working feature, a performance improvement with a benchmark, or an end-to-end user flow.
Fails when: the deliverable is structural or architectural and there is no short demo that proves correctness; or when building the proof costs more than direct review.

## Evidence
From Ball's "How I work with Agents" thread (October 25, 2026):

> "Give me irrefutable proof that this works."

Ball describes agents as "good at producing demos, end-to-end walkthroughs, and before-and-after numbers." He also instructs his team's AGENTS.md to label what does and does not count as evidence, adding "this is not evidence" as an explicit note.

## Signals
- Agent tasks end with a linked demo, screen recording, or before/after performance diff rather than a prose summary.
- Integration failures surface during verification instead of post-merge.
- AGENTS.md includes a section labeling what counts as evidence.

## Counter-evidence
Not every task has a demonstrable proof. Refactoring, naming changes, and structural improvements require code review, not a demo. Applied too broadly, the proof requirement adds overhead without improving correctness. Ball acknowledges the pattern works for feature work, not all tasks.

## Cross-references
- See `ins_ball-production-gate-replaces-pr` for Ball on shifting the quality gate from pre-merge review to production observability.
- See `ins_willison-instruction-over-review` for Willison on the broader principle of confident instruction and confident verification.
