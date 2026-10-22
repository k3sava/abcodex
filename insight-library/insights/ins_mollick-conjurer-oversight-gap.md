---
id: ins_mollick-conjurer-oversight-gap
operator: Ethan Mollick
operator_role: Professor, Wharton School; author of Co-Intelligence and Co-Existence
co_operators: []
source_url: https://www.oneusefulthing.org/p/30-months-on-the-exponential-in-charts
source_type: essay
source_title: "30 Months on the Exponential (in Charts)"
source_date: 2026-10-20
captured_date: 2026-10-22
domain: [ai-native, future-of-work]
lifecycle: [ai-workflow, delegation]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 3, evidence: 3, transferability: 4, source: 5 }
tier: B
related: [ins_mollick-delegation-over-prompting, ins_mollick-commission-not-steer, ins_mollick-patron-not-wizard]
raw_ref: ""
---

# Conjurers summon agents without necessarily seeing what the agents do

## Claim
The emergence of real autonomous agents adds a third human-AI work mode to the centaur and cyborg taxonomy: the conjurer, who summons agents, assigns work, and evaluates what comes back, with the specific risk of losing visibility into what the AI actually did.

## Mechanism
Centaurs divide work by type: humans handle human parts, AI handles AI parts. Cyborgs blend the two, co-editing at the step level. Conjurers operate at a higher abstraction: they commission entire agent runs and judge outputs. The abstraction introduces an oversight gap. Because the conjurer does not see each intermediate step, errors accumulate invisibly until the output arrives. The conjurer's power is scale; the conjurer's risk is opacity. Mollick illustrates both with his own book launch: he delegated chart-making to an orchestrator agent that also caught his math error, but the agent did things he did not fully see or direct.

## Conditions
Holds when: agents can autonomously complete multi-step tasks with minimal interruption; the conjurer's role becomes framing, launching, and judging.
Fails when: the task requires tight co-editing at each step; the cyborg mode is more productive there.

## Evidence
Mollick introduces the conjurer frame in his October 2026 essay, extending the centaur and cyborg modes he described earlier:

> "Conjurers summon agents when needed, assign them work, and evaluates what comes back."

He notes this mode is powerful but adds: the risk is losing control over what the AI is actually doing.

## Signals
- You describe your work as "I gave the agent a task and reviewed the result" rather than "I worked with the AI step by step."
- The gap between what you asked for and what arrived surprises you more often.
- You cannot explain what steps the agent took to produce the output.

## Counter-evidence
Some practitioners argue the oversight gap is manageable with structured logging and checkpoints. If every agent action is logged and surfaced, the conjurer can audit retrospectively. On this view, the opacity problem is a tooling problem, not an inherent mode problem.

## Cross-references
- `ins_mollick-delegation-over-prompting`: delegation clarity as the new core competency.
- `ins_mollick-commission-not-steer`: commissioning vs. steering as the agentic-era shift.
- `ins_mollick-patron-not-wizard`: the patron role for AI-produced work.
