---
id: ins_tunguz-harness-layer-margin-engine
operator: Tom Tunguz
operator_role: General Partner at Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/the-four-questions-of-ai/
source_type: essay
source_title: "The Four Questions of AI"
source_date: 2026-11-02
captured_date: 2026-11-03
domain: [ai-native-company-building, product-gtm]
lifecycle: [unit-economics, pricing]
maturity: applied
artifact_class: metric-model
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_tunguz-thin-wrapper-feature-absorption, ins_tunguz-ai-stack-double-pendulum]
raw_ref: ""
---

# Controlling input context is the primary lever for AI gross margin

## Claim
Input context makes up as much as 98% of tokens in an AI request. A well-designed harness layer that controls context assembly can cut total cost by 71% and raise gross margin from 38% to 75%.

## Mechanism
Token cost is approximately linear: you pay per token whether it comes from the user prompt, the retrieved context, the system instructions, or the model's output. When input context dominates (up to 98% of tokens), the harness layer, the code that assembles what goes into the prompt, controls the largest cost line. Smaller, smarter context retrieval; tighter system prompts; routing subtasks to cheaper domain-tuned models. Each cuts the numerator directly without touching the model layer at all. Tunguz reports that 83% of agent task calls already go to smaller or domain-tuned models, which confirms the routing pattern is already practice at scale.

## Conditions
Holds when: the product relies on retrieval-augmented generation or long system prompts where context volume dwarfs the user query.
Fails when: the bottleneck is compute-intensive generation (long-form output, heavy reasoning chains) or when context is already minimal and the dominant cost is model inference on output tokens.

## Evidence
Tunguz reports the 98% figure from portfolio observation across AI companies at Theory Ventures. The 71% cost reduction and gross margin improvement from 38% to 75% came from harness-layer redesign alone, with no change to the underlying model.

> "the fight moves to who owns the harness"

## Signals
- Your cost-per-call scales nearly linearly with retrieved document count, not query complexity.
- Cutting retrieved chunks from 20 to 5 per query drops cost more than switching to a smaller model.
- Gross margin improves when you redesign the prompt assembly layer without changing the model.

## Counter-evidence
The 98% figure and GM numbers are portfolio observations, not a peer-reviewed study. Token profiles vary widely by product: a long-form writing product differs from a short-answer chatbot. The same routing that sends 83% of subtasks to smaller models compresses margins differently across product types, so the 71% savings and 75% GM are not universal.

## Cross-references
- See `ins_tunguz-thin-wrapper-feature-absorption` for why the application layer above the harness is at risk.
- See `ins_tunguz-ai-stack-double-pendulum` for the full stack framing this sits within.
