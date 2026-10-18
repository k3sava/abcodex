---
id: ins_willison-quality-goal-prompt
operator: Simon Willison
operator_role: Independent developer; creator of Datasette; prolific LLM and agentic-engineering blogger
co_operators: []
source_url: https://simonwillison.net/2026/Oct/14/tree-appreciator/
source_type: post
source_title: "Tree Appreciator"
source_date: 2026-10-14
captured_date: 2026-10-18
domain: [engineering, ai-native]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: workflow
score: { originality: 3, specificity: 4, evidence: 3, transferability: 5, source: 4 }
tier: B
related: [ins_willison-engineering-core-is-direction]
raw_ref: ""
---

# Explicitly stating a quality goal in a creative coding prompt produces noticeably more polished output than a functional spec alone

## Claim
Adding a direct quality instruction, such as "make sure it is fun and beautiful," to a creative coding prompt produces a noticeably more polished result than a purely functional spec, and Willison reports this works "uncomfortably well."

## Mechanism
An LLM generating code defaults to functional correctness as the implicit goal: does the output behave as specified? Stating an explicit quality criterion adds a second evaluation axis during generation. The model can steer toward the stated quality attribute at each decision point, including in choices that the functional spec did not constrain: what animations to include, how scoring mechanics feel, how much polish to apply to edge cases. Without the quality instruction, the model satisfies the spec. With it, the model satisfies the spec while also optimizing for the stated attribute throughout generation.

## Conditions
Holds when: the task has degrees of freedom not fully constrained by the functional spec, so the model has room to optimize for quality. Fails when: the task is fully determined by the spec and there is no room for quality-oriented choices; or when the quality criterion is too vague for the model to use operationally (e.g., "good" or "excellent" without further specificity); or when compute budget is too tight for the extended generation that quality optimization implies.

## Evidence
Willison prompted Claude Opus 5.5 Max in the default iPhone chat interface to build a Three.js spot-the-difference game built around appreciating differences between generated trees, adding the explicit instruction: "Think hard about how to make sure it is both fun and beautiful." The model ran for 3 hours and 7 minutes and produced a game with procedurally generated three-dimensional trees, drag-and-zoom exploration, music, animations, achievements, appreciation points, and a herbarium entry mechanic for discovered differences. Willison's summary: the explicit fun instruction works "uncomfortably well."

## Signals
- The output includes polish elements (animations, sound, achievement mechanics) not mentioned in the functional requirement.
- The model makes choices in unspecified degrees of freedom that align with the stated quality goal rather than defaulting to minimum-spec implementations.
- The output surprises you with decisions you would have made had you thought of them.

## Counter-evidence
A single experiment with one model and one task type is thin evidence. The effect may be specific to creative or entertainment software with high degrees of freedom; functional business tools with tight specifications may see less impact. Extended compute time (3 hours 7 minutes) helped here. The effect under tighter time or token budgets is unknown. The quality gain is also not measured against a controlled baseline using the same prompt without the quality instruction.

## Cross-references
- `ins_willison-engineering-core-is-direction`: Willison's earlier card on the engineering core of AI deployment shifting toward direction quality. This card adds an applied technique: quality goals as an explicit direction mechanism within individual prompts.
