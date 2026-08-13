---
id: ins_husain-model-cascade-routing
operator: Hamel Husain
operator_role: AI product advisor and ML educator; co-creator of AI Evals for Engineers course
co_operators: []
source_url: https://hamel.dev/notes/llm/ai-product-engineering/index.html
source_type: essay
source_title: "AI Product Engineering Notes"
source_date: 2026-08-12
captured_date: 2026-08-13
domain: [ai-native, engineering, product]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: workflow
score: { originality: 3, specificity: 4, evidence: 3, transferability: 5, source: 4 }
tier: B
related: [ins_husain-retrieval-first-hierarchy]
raw_ref: ""
---

# Route classification tasks to a small model when confident and a large model when uncertain to preserve accuracy while cutting inference cost

## Claim
Routing classification tasks to a small model for high-confidence inputs and a large model for uncertain ones preserves large-model accuracy on the full task while materially reducing average inference cost.

## Mechanism
Most classification inputs cluster near the high-confidence end of a small model's probability distribution. For those inputs, the small model's prediction matches the large model's output, so the expensive call adds no value. The small model's confidence score acts as a routing gate: pass through when confidence exceeds a calibrated threshold, escalate when it does not. The large model processes only the subset of inputs where its additional capability changes the result. Total cost falls because the fraction requiring escalation is typically small.

## Conditions
Holds when: the small model produces a reliable confidence or probability signal; the task has sufficient volume that two-model routing infrastructure is justified; the confidence threshold can be calibrated on held-out eval data that confirms the signal is predictive.
Fails when: the small model is overconfident and its high-confidence outputs are wrong at meaningful rates; the task is open-ended and does not reduce to a classification framing; volume is too low to justify the routing complexity.

## Evidence
Husain documents the technique in his AI Product Engineering Notes (August 12, 2026): "a technique to route classification tasks to a small model when it's confident and to a large model when it's not, while preserving the large model's accuracy." He places this in the Systems section of his 13-session framework, the second stage after retrieval optimization.

## Signals
- Average inference cost per request falls while downstream accuracy metrics hold at large-model baseline
- Production routing logs show that most inputs resolve at the small model tier, confirming the high-confidence majority assumption
- The confidence threshold can be tuned: lowering it raises cost and improves coverage; raising it cuts cost with some accuracy tradeoff

## Counter-evidence
Confidence calibration is a known weak point in classification models. A small model that is overconfident routes inputs to itself with high stated confidence even when wrong, defeating the accuracy preservation goal. Teams must validate on held-out eval data that the small model's confidence score is genuinely predictive before deploying to production.

## Cross-references
- `ins_husain-retrieval-first-hierarchy`: model cascade routing belongs in the systems-and-harness stage of the optimization sequence, after retrieval is addressed and before post-training is attempted.
