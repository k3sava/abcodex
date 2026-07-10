---
id: ins_ball-problem-not-solution
operator: Thorsten Ball
operator_role: Engineering Lead, Amp at Sourcegraph; author of Writing an Interpreter in Go and Writing a Compiler in Go
co_operators: []
source_url: https://registerspill.thorstenball.com/p/ownership
source_type: essay
source_title: "Ownership"
source_date: 2026-07-08
captured_date: 2026-07-10
domain: [engineering, founder-operator]
lifecycle: [process-cadence]
maturity: foundational
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 5, source: 3 }
tier: B
related: [ins_ball-software-is-learning]
raw_ref: ""
---

# Engineering ownership begins with naming the actual problem, not accepting the proposed solution

## Claim
True engineering ownership starts with diagnosing the actual problem rather than executing on the stated solution. What engineers are typically handed is already a proposed solution, and accepting it without question means skipping the step where the most value is created.

## Mechanism
When someone says "the problem is we need to migrate from X to Y," they have already collapsed an underlying problem into a solution. The actual problem is what the migration is meant to address: poor performance, brittle behavior, a scaling ceiling. Reopening that question before starting work exposes whether the proposed solution is the right one. Ball defines ownership as end-to-end responsibility: from "we have a problem" to "we don't have to think about it again." That span starts at problem definition, not solution selection.

## Conditions
Holds when: the team operates without a dedicated product manager or QA layer, meaning engineers carry the full diagnostic load from problem identification through production verification.
Fails when: the problem is genuinely well-defined before it reaches the engineer, the proposed solution was already validated by a decision-maker with full context, or the engineer is too junior to expand scope safely without supervision.

## Evidence
Ball names the failure mode directly:

> "Maybe you think 'the problem is that we need to migrate from using X to using Y', but that's not a problem, that's a solution."

On the scope of full ownership:

> "Think about what the problem actually is...The expectation is that you own the solution of a problem from end to end. From 'we have a problem' to 'we don't have to think about it again.'"

## Signals
- Engineers ask "what problem does this solve?" before starting implementation work.
- Migration and refactor tickets are accompanied by a one-paragraph problem statement.
- Teams surface alternative solutions to stated-solution asks before committing to one.

## Counter-evidence
Ball acknowledges the expectation does not apply uniformly across seniority. For junior engineers, reopening problem definition may be counterproductive if they lack context to evaluate alternatives. A senior engineer expanding scope on a well-understood migration may also spend analysis time that adds no value over simply executing an agreed plan.

## Cross-references
- `ins_ball-software-is-learning`: Ball's earlier framing of software development as a continuous learning process.
- `pat_diagnose-before-execute`: the cross-operator convergence on diagnosing before executing, now extended to the engineering layer.
