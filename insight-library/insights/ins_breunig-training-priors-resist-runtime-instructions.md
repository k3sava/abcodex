---
id: ins_breunig-training-priors-resist-runtime-instructions
operator: Drew Breunig
operator_role: Writer and AI product thinker, dbreunig.com
co_operators: []
source_url: https://dbreunig.com/2026/10/24/the-state-of-context-engineering.html
source_type: essay
source_title: "The State of Context Engineering"
source_date: 2026-10-24
captured_date: 2026-11-02
domain: [engineering-ai-eng, ai-native-operating]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 4, transferability: 5, source: 4 }
tier: B
related: [ins_breunig-chat-history-overrides-instructions, ins_breunig-long-context-error-amplification, ins_breunig-deterministic-probabilistic-split]
raw_ref: ""
---

# Models resist runtime instructions that contradict what they practiced during training

## Claim
A model's training environment embeds behavioral defaults that resist runtime instructions asking for different behavior. Smaller models especially revert to trained patterns when instructions push against what training reinforced.

## Mechanism
Training optimizes against a specific environment: specific tools, API shapes, and interaction patterns. When runtime instructions ask the model to behave differently, they ask it to override patterns reinforced across many training steps. The model's weights carry momentum toward trained behavior. This is not an instruction-comprehension failure. The model can read the instruction. It defaults back anyway. Smaller models have less capacity to hold the override. Larger models comply eventually, but the compliance cost appears as first-attempt errors and the need for repetition.

## Conditions
Holds when: instructions request patterns that differ from dominant training-era norms. Examples: parallel tool calls when training assumed serial; a specific MCP tool API when training saw similar but differently shaped APIs.
Fails when: the model's training spanned diverse behavioral patterns, or the gap between trained behavior and requested behavior is small.

## Evidence
Breunig observes that smaller models botch initial Playwright MCP calls before recovering. Training saw similar tools but different API shapes, so the model defaults toward the trained pattern on first attempt. He notes Claude Code's system prompt repeats the instruction to use parallel tool calls across many lines. The repetition is a signal: the prompt author ran into this resistance and added emphasis to override it.

> "when the model doesn't do what you ask because you're working against what it was trained to do."

> "The environment it was trained in had similar tools that looked different than Playwright."

> "The training environments these models learned to use were, for a long time, largely serial."

> "When you crack open a prompt and see repetition and all-caps, there's a good chance you're fighting the weights."

## Signals
- A system prompt contains repetitions or all-caps instructions on the same point.
- The model reliably fails on the first attempt at a specific tool call, then recovers.
- Smaller models perform worse than larger models on the same instruction despite both being capable of the underlying task.

## Counter-evidence
Consistent in-context examples of the target behavior reduce first-attempt error rates. Sufficiently large context with repeated demonstrations can steer the model within a session. The resistance is a cost, not a permanent ceiling.

## Cross-references
- `ins_breunig-chat-history-overrides-instructions` covers a related but distinct failure mode: chat history examples drift behavior away from explicit instructions at runtime, while training priors do it at the weights level before the session starts.
- `ins_breunig-deterministic-probabilistic-split` frames the broader issue: deterministic systems run the same code on every call, while models carry probabilistic priors that require active management in the harness.
