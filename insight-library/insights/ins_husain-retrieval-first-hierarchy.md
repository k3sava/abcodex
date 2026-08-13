---
id: ins_husain-retrieval-first-hierarchy
operator: Hamel Husain
operator_role: AI product advisor and ML educator; co-creator of AI Evals for Engineers course
co_operators: []
source_url: https://hamel.dev/notes/llm/ai-product-engineering/index.html
source_type: essay
source_title: "AI Product Engineering Notes"
source_date: 2026-08-12
captured_date: 2026-08-13
domain: [ai-native, engineering, product]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_evals-are-data-analysis-on-llm-apps, ins_husain-model-cascade-routing]
raw_ref: ""
---

# Optimize retrieval and context before touching systems, and post-train only after exhausting both

## Claim
AI product improvements should follow a specific sequence: retrieval and context first, then systems and harness, then post-training. Jumping to post-training before exhausting the first two stages wastes time and money on the highest-cost option.

## Mechanism
Retrieval improvements use the same model more effectively at no model cost. Systems and harness improvements reduce failure modes and overhead without retraining weights. Post-training requires labeled data, compute budget, and a retraining loop that takes days to weeks. Each stage is cheaper and faster than the next. Teams that skip to post-training discover later that retrieval fixes would have closed 80% of the error cases. Husain also notes that nearly every improvement in his 13-session course begins with good evals, placing measurement as the foundation that makes the sequence possible.

## Conditions
Holds when: the base model is fundamentally capable of the task and errors come from context gaps or harness failures rather than capability limits; evals exist to measure each stage's impact before moving to the next.
Fails when: the base model genuinely lacks the capability the task requires; or when the task is so domain-specific that retrieval cannot close the gap regardless of volume or quality.

## Evidence
Husain organized 13 sessions of his AI product engineering curriculum around this hierarchy. Five of 13 sessions address context improvements (multivector retrieval, search agents, embeddings, OCR, agent steering). He states the sequence directly: "The lowest-hanging fruit is to optimize retrieval and context. Once that's done, you should improve your systems and harness. Finally, consider post-training your own model after other approaches are exhausted."

## Signals
- Retrieval and prompt improvements close a measurable share of error cases before any model change is attempted
- Harness fixes (prompt structure, output parsing, retry logic) eliminate failure modes without touching weights
- Post-training becomes necessary only when the model consistently fails a specific sub-task despite optimal context

## Counter-evidence
The hierarchy assumes retrieval is a meaningful lever for the product's error types. For tasks requiring specialized reasoning, nuanced tone, or proprietary formats, retrieval improvements may hit a ceiling quickly. In those cases, post-training earlier can be more efficient than exhausting retrieval iterations that never close the gap.

## Cross-references
- `ins_evals-are-data-analysis-on-llm-apps`: evals are the measurement foundation that makes the retrieval-first sequence work; without error analysis, teams cannot tell which stage is responsible for which failures.
- `ins_husain-model-cascade-routing`: model cascade routing belongs in the systems-and-harness stage of this sequence, after retrieval is optimized and before post-training.
