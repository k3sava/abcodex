---
id: ins_ball-specification-bug-era
operator: Thorsten Ball
operator_role: Engineering Lead, Amp at Sourcegraph; author of Register Spill newsletter
co_operators: []
source_url: https://thorstenball.com/blog/2026/09/19/what-i-believe-about-the-future-of-software-development/
source_type: essay
source_title: "What I believe about the future of software development"
source_date: 2026-09-19
captured_date: 2026-09-25
domain: [engineering, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 3, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_ball-naive-interventionism-ai-code, ins_ball-software-is-learning, ins_ball-problem-not-solution]
raw_ref: ""
---

# As AI handles coding reliably, most software bugs shift from implementation errors to specification errors

## Claim
When AI agents can reliably produce correct implementations of stated intent, the dominant bug class shifts from implementation errors (wrong code) to specification errors (wrong ask).

## Mechanism
Coding bugs exist because of the gap between human intent and machine execution. When AI narrows that gap reliably, failures concentrate at the earlier boundary: what the human asked versus what the human actually needed. Specification bugs survive AI because they originate before code generation begins. They are not coding problems. No amount of AI coding capability eliminates the error of asking for the wrong thing.

## Conditions
Holds when: AI coding reliability is high enough that implementation errors are rare for the task class at hand.
Fails when: AI reliability is still partial, and implementation errors remain frequent enough to warrant traditional debugging and code review.

## Evidence
Ball published these beliefs from direct experience building and shipping with Amp. His framing is direct:

> "Most bugs won't be 'coding' bugs...they'll be 'you asked for the wrong thing' bugs"

## Signals
- Bug reports increasingly describe behavior that was correctly implemented but wrong by product intent.
- Post-mortems trace failures to requirement ambiguity rather than coding mistakes.
- Engineers spend more time clarifying requirements and reviewing specs than reviewing code.
- The question "did it do what I asked?" replaces "did it do it correctly?"

## Counter-evidence
Code review and testing remain relevant while AI reliability is partial in the current period. Security vulnerabilities can emerge from AI-generated code in ways that bypass specification-level thinking entirely. Safety-critical domains may retain high implementation error rates for some time because stakes demand additional human verification layers.

## Cross-references
- `ins_ball-naive-interventionism-ai-code`: the pattern of humans over-correcting AI because they cannot evaluate output at speed, which this shifts.
- `ins_ball-software-is-learning`: the prior frame on software as a learning process, which specification clarity now extends.
- `ins_ball-problem-not-solution`: the ownership principle that maps cleanly to spec-first thinking.
