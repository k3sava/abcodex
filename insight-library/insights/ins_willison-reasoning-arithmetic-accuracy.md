---
id: ins_willison-reasoning-arithmetic-accuracy
operator: Simon Willison
operator_role: Independent developer; creator of Datasette and Django co-creator
co_operators: []
source_url: https://simonwillison.net/2026/Oct/4/qwen38-addition-in-words/
source_type: essay
source_title: "Research: Qwen3.8 27B addition in words"
source_date: 2026-10-04
captured_date: 2026-10-06
domain: [ai-native, engineering]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: case-study
score: { originality: 3, specificity: 5, evidence: 5, transferability: 4, source: 5 }
tier: B
related: [ins_willison-qwen-reasoning-overthink, ins_willison-reasoning-effort-nonlinear-creative]
raw_ref: ""
---

# Enabling reasoning raises arithmetic accuracy in Qwen3.8-27B from 23% to 99% by replacing pattern-matching with step-by-step processing

## Claim
Enabling reasoning mode in Qwen3.8-27B raised accuracy on number-to-word arithmetic from 23.57% to 98.8% across a controlled experiment. The jump confirms that reasoning succeeds on sequential tasks by substituting systematic computation for direct pattern recall, which fails at scale.

## Mechanism
Without reasoning, a model attempts to pattern-match the answer directly. For simple operands, that works (97% accuracy on 1-3 digit numbers). For large operands (10-13 digits), the model cannot pattern-match a number it has rarely seen converted to words, so accuracy collapses to 6.44%. Reasoning forces the model to work through the problem in discrete steps: add the digits, carry as needed, convert each component to English. The step-by-step trace succeeds even at 10-13 digits because each step is simple enough to pattern-match reliably. The accuracy jump is not incremental; it is structural. The mode switch changes which cognitive operation the model applies.

## Conditions
Holds when: the task requires sequential operations where each step depends on the previous; the answer cannot be recalled from training data (rare formats, large numbers, novel combinations).
Fails when: the task is a single-step lookup well-represented in training data; reasoning mode introduces so many token generations that overthinking degrades a simpler task (see ins_willison-qwen-reasoning-overthink).

## Evidence
Willison ran 5,070 test cases on a DGX Spark (local hardware) without reasoning enabled. Overall accuracy: 23.57%. Performance by number size: 97.04% for 1-3 digit operands, 6.44% for 10-13 digit operands. With reasoning enabled on a 169-case pilot: 167 correct (98.8%). The experiment was inspired by Colin Frasier's 2024 GPT-4o test.

> "it got the right answer in 167 out of 169 attempts"

## Signals
- Your agent's accuracy on multi-step tasks is disproportionately low compared to single-step tasks of similar difficulty
- Turning on reasoning for a task that was failing produces an outsized improvement, not just a marginal one
- Token usage per call spikes with reasoning enabled but output quality justifies the cost

## Counter-evidence
Reasoning mode has a known cost: Qwen3.8-27B already tends to overthink, generating very long reasoning traces even for simple tasks (see ins_willison-qwen-reasoning-overthink from August 2026). The same mode switch that fixes arithmetic failures adds unnecessary compute to tasks that do not require sequential processing. Willison's August experiment measured this as a real cost. Reasoning is not a universal upgrade; it is the right tool for a specific task class.

## Cross-references
- `ins_willison-qwen-reasoning-overthink`: Willison's August 2026 finding that Qwen3.8-27B defaults to wildly overthinking simple tasks. Both cards come from Willison's own experiments on the same model; one documents reasoning as a liability, the other as an asset, depending on task type.
- `ins_willison-reasoning-effort-nonlinear-creative`: reasoning effort has a nonlinear effect on creative tasks. The arithmetic finding is the analogue for structured sequential tasks.
