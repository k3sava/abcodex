---
id: ins_husain-decision-model-threshold-tuning
operator: Hamel Husain
operator_role: AI evals practitioner and educator; co-author of Evals for AI Engineers
co_operators: [Antaripa Saha]
source_url: https://hamel.dev/blog/posts/decision-model-evals/
source_type: essay
source_title: "How To Use Decision Models for Evals"
source_date: 2026-10-20
captured_date: 2026-10-22
domain: [ai-native, engineering]
lifecycle: [evals, ai-workflow]
maturity: applied
artifact_class: playbook
score: { originality: 3, specificity: 5, evidence: 5, transferability: 5, source: 4 }
tier: B
related: []
raw_ref: ""
---

# The default 0.50 eval threshold ignores your data and can miss all failures

## Claim
Decision models for LLM evals ship with a 0.50 default failure threshold, but applying that default without tuning it on labeled data can miss every failure when a model's scores cluster below 0.50.

## Mechanism
A decision model outputs a 0-to-1 probability that a trace is a failure. The API flags a failure when the score equals or exceeds a threshold, defaulting to 0.50. But models vary in how they distribute scores. One model might score all actual failures at 0.40 and all passing traces at 0.10. That model perfectly separates the classes at a 0.30 threshold, yet the 0.50 default catches nothing. The threshold must be tuned on labeled traces, balancing precision and recall for the specific use case and cost tolerance.

## Conditions
Holds when: you are using decision models as automated LLM-eval judges; the default threshold has not been validated against labeled examples from your own data.
Fails when: you have already verified on labeled data that the default threshold matches your failure distribution; the default may coincidentally be correct for your model and task.

## Evidence
Husain and Saha tested six decision models on 98 labeled apartment-leasing traces. After threshold tuning, Perplexity, Liquid d1-ultra, and OpenAI Decisions met an 80% precision and 80% recall minimum. Liquid d1 and Clef Flash did not.

> "Using this default without checking it against your data can give you subpar results."

Clef Flash's calibration failure was concrete: one score group had an average predicted failure probability of about 8%, yet 60% of those traces were real failures.

OpenAI Decisions had the highest F1 (0.87) at 3.72 cents per 100 eval runs. Perplexity cost 0.82 cents with an F1 of 0.79, making OpenAI approximately 4.5 times more expensive.

## Signals
- Your decision-model flagged failure rate differs substantially from your manual spot-check rate.
- Running the model at multiple thresholds shows large swings in precision/recall, indicating the 0.50 default is not the inflection point.

## Counter-evidence
Threshold tuning requires labeled data, which many teams lack early in a product's life. The default 0.50 is a reasonable starting point when no labeled set exists. Some practitioners argue investing in a labeled dataset is the higher-priority step before tuning the threshold.

## Cross-references
- (none in current corpus)
