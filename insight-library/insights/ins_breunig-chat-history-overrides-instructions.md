---
id: ins_breunig-chat-history-overrides-instructions
operator: Drew Breunig
operator_role: Writer and AI product thinker, dbreunig.com
co_operators: []
source_url: https://dbreunig.com/2026/10/24/the-state-of-context-engineering.html
source_type: essay
source_title: "The State of Context Engineering"
source_date: 2026-10-24
captured_date: 2026-10-31
domain: [engineering-ai-eng, ai-native-operating]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 4, transferability: 5, source: 4 }
tier: B
related: [ins_breunig-context-inertia-agent-fixation, ins_breunig-deterministic-probabilistic-split, ins_breunig-long-context-error-amplification]
raw_ref: ""
---

# Accumulated examples in chat history override explicit instructions before the user notices

## Claim
When contradictory examples accumulate in a conversation's history, models treat those past exchanges as implicit demonstrations and begin following the pattern rather than the stated rule, a failure mode Breunig calls context distraction.

## Mechanism
Models do not cleanly separate their instructions from the examples in their context. Past exchanges function as few-shot demonstrations. After enough exchanges that diverge from an explicit instruction, the pattern-matching weight of those examples outpulls the instruction, and the model quietly shifts its behavior to match what it has been shown rather than what it was told.

## Conditions
Holds when: the conversation is long enough to accumulate several exchanges that deviate from instructions, either through user behavior or tool outputs that implicitly model a different style.

Fails when: context is short, regularly pruned, or the harness periodically resets the system prompt to reassert instructions.

## Evidence
Camassa and Shiller ran a "Do as I Say, Not as I Do" experiment across 13 models. Smaller models such as Gemma 3 12B followed the explicit instruction less than half the time after a few contradictory examples. Even Opus 4.6 was affected, though it required more contradictory examples to shift. Gemini 2.5 began repeating past actions beyond roughly 100K tokens.

> "Those examples start to influence the model."

Breunig also observed Gemini 2.5 reverting to behaviors it had been explicitly instructed to avoid after a long run, attributing the drift to the weight of accumulated example exchanges.

## Signals
- The model starts producing outputs in a style it was told not to use, and does so consistently.
- Restating the explicit instruction brings it back briefly, but drift resumes.
- Behavior is harder to correct the longer the session has been running.

## Counter-evidence
The effect is stronger in smaller models. Large frontier models need more contradictory examples before the drift is measurable. In short-context or single-turn uses, the effect is not observed. Harnesses that reload the system prompt on every call eliminate most of the risk at the cost of latency.

## Cross-references
- `ins_breunig-context-inertia-agent-fixation` covers a different failure mode: agents fixating on a hypothesis once formed rather than drifting from a prior instruction.
- `ins_breunig-long-context-error-amplification` covers the related issue that longer contexts admit more errors alongside more information.
