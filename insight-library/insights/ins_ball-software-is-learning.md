---
id: ins_ball-software-is-learning
operator: Thorsten Ball
operator_role: Engineering Lead, Amp at Sourcegraph; author of Writing an Interpreter in Go and Writing a Compiler in Go
co_operators: []
source_url: https://registerspill.thorstenball.com/p/building-software-is-learning
source_type: essay
source_title: "Building Software Is Learning"
source_date: 2026-06-02
captured_date: 2026-06-18
domain: [engineering, ai-native]
lifecycle: [process-cadence, ai-workflow]
maturity: foundational
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 5, source: 4 }
tier: B
related: []
raw_ref: ""
---

# Minimizing time-to-feedback is the single most valuable practice when building new software

## Claim
Building new software is inherently learning, and the most productive practice is minimizing the gap between a first attempt and feedback from reality.

## Mechanism
When you build something genuinely new, you cannot fully specify requirements upfront. Misalignment between intent and implementation is not a failure of execution; it is an expected property of novel work. The implication is structural: the earlier you discover misalignment, the less work gets discarded. Any mechanism that compresses the "try something" to "reality responds" cycle directly reduces wasted work. Feedback can come from CI, code review, customer reaction, teammate input, a demo, or a written spec. All of these sources count equally in Ball's framing; the question is only which is available fastest.

## Conditions
Holds when: the work is genuinely new, meaning the team does not already know exactly how the output should behave. Applies to software features, agent prompts, product prototypes, and agentic coding tasks where behavior must be discovered through iteration.

Fails when: requirements are well-understood and the work is implementation of a known spec. In those cases, careful upfront planning and batch execution can be faster than short feedback loops.

## Evidence
Ball wrote this as an internal note to the Amp team on feedback and shipping faster. He describes multiple feedback mechanisms that compress the discovery cycle: 1-hour prototypes before full-feature work, written specs before coding, daily incremental shipping, and focused scope on uncertain elements only.

> "building new software is learning! If you're building something new and you don't yet fully know how exactly it's supposed to work"

> "the most important thing you can do when you're building something new: reducing the time it takes you to go from 'let me try something' to getting your ass whooped by reality."

He also recommends writing a README or API example before building as a way to surface design flaws that only become visible when you try to explain the interface.

## Signals
- Teams that prototype in one hour before full-feature development report fewer late-stage pivots and integration surprises.
- Shipping incremental features daily catches integration problems before they compound.
- Writing a spec or API example before coding reveals conceptual gaps that reviews miss.

## Counter-evidence
The fast-feedback model can produce local optima. Constant short-cycle iteration can miss architectural problems that only surface after weeks of accumulated choices. Some senior engineers argue that a longer planning phase prevents more rework than fast feedback cycles, especially for distributed systems where integration costs are high and each feedback cycle is expensive to set up.

## Cross-references
- (none in current corpus)
