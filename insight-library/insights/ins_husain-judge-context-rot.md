---
id: ins_husain-judge-context-rot
operator: Hamel Husain
operator_role: Independent AI consultant and researcher
co_operators: [Shreya Shankar]
source_url: https://hamel.dev/blog/posts/evals-faq/
source_type: essay
source_title: "AI Evals: Everything You Need to Know"
source_date: 2026-09-18
captured_date: 2026-09-25
domain: [ai-native, engineering]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_husain-shankar-criteria-drift, ins_husain-binary-over-likert, ins_husain-triage-before-eval-tooling]
raw_ref: ""
---

# Excess context in LLM judge prompts degrades accuracy; judges need only the evidence relevant to the specific failure

## Claim
Adding context to an LLM judge prompt past the minimum needed for the specific failure being evaluated reduces accuracy. Judges do better with less.

## Mechanism
LLM judges are asked to assess whether an output meets a criterion. When the prompt includes context beyond what that criterion requires, the judge's attention distributes across the irrelevant material. The irrelevant material can introduce confounding signals, cause the judge to partially rationalize the excess context when forming its verdict, or simply dilute the signal the judge needs. Husain and Shankar call this context rot. The fix is to give each judge only the information it needs to evaluate the specific failure class it is responsible for.

## Conditions
Holds when: the judge prompt contains context that is not directly relevant to the criterion being evaluated (e.g., full conversation history when the criterion only requires the final response, or system prompt boilerplate when the criterion is factual accuracy).
Fails when: the failure criterion genuinely requires broad context to evaluate correctly (e.g., detecting a contradiction between the current response and something stated earlier in the conversation). In those cases, the relevant history is load-bearing, not excess.

## Evidence
From Husain and Shankar's September 2026 FAQ on AI evals:

> "Extra context can cause context rot and make the judge worse"

Their guidance is to scope each judge to the minimum context needed for its specific failure class, rather than passing the full conversation and system prompt by default.

## Signals
- Judge accuracy improves after stripping system prompt boilerplate from the judge context.
- Different failure classes require different context windows for accurate evaluation.
- A single catch-all judge performs worse than multiple scoped judges, each given only its relevant context.

## Counter-evidence
Building per-failure-class judges adds system complexity: more prompts to maintain, more evaluation runs per output. Teams with limited eval infrastructure may find a single general-purpose judge easier to operate even at reduced accuracy. The tradeoff is valid at small scale. Context rot becomes the dominant problem as scale and accuracy requirements rise.

## Cross-references
- `ins_husain-shankar-criteria-drift`: the upstream failure mode where criteria themselves are unstable; context rot compounds unstable criteria by adding noise to an already noisy signal.
- `ins_husain-binary-over-likert`: the companion annotation-quality finding from the same source; together they form a practical guide to eval data quality.
- `ins_husain-triage-before-eval-tooling`: the sequencing rule this finding sits within; getting context right is part of the annotation phase, not the automation phase.
