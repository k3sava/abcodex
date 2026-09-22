---
id: ins_willison-decision-model-opacity
operator: Simon Willison
operator_role: Creator of Datasette; co-creator of Django
co_operators: []
source_url: https://simonwillison.net/2026/Sep/21/jev/
source_type: essay
source_title: "Jev by TypeSafe AI: decision intelligence models"
source_date: 2026-09-21
captured_date: 2026-09-22
domain: [ai-native, engineering]
lifecycle: [ai-workflow]
maturity: frontier
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_tunguz-decision-model-bifurcation, ins_willison-stateless-mcp, ins_willison-ai-product-capability-opacity]
raw_ref: ""
---

# Decision models that output typed numbers instead of text remove the reasoning trace, making decisions fast and cheap but unexplainable

## Claim
Specialized decision models sacrifice interpretability in exchange for efficiency: where text-generating LLMs produce readable output that serves as a natural audit trail, decision models output probability distributions directly, removing any trace of the reasoning behind a decision.

## Mechanism
Text-generating LLMs produce their reasoning incrementally as token sequences. The chain-of-thought, the hedges, the stated conditions, all appear as readable text before the final answer. Readers and auditors can inspect the reasoning. Decision models short-circuit this: they accept text inputs but output only floating point numbers corresponding to categories, ratings, or binary answers. There is no intermediate text. The model's reasoning is opaque by design. The output is a number with a confidence score. You can verify the decision, but you cannot explain the path to it.

## Conditions
Holds when: audit trails, decision explainability, or regulatory compliance require that the reasoning behind an automated decision can be inspected or challenged. Applies to any regulated context (financial services, healthcare, hiring, content moderation under platform policy) where the organization must be able to explain why a specific decision was made.

Fails when: the decision is purely operational and no audit obligation exists. Many internal workflow automation tasks have no explainability requirement. In those cases, the float-output tradeoff is purely beneficial.

## Evidence
Willison documents TypeSafe's Jev model, which accepts text inputs and returns floats rather than text.

> "it still accepts text inputs, but instead of text output it returns floating point numbers corresponding to categories, yes/no questions, ratings, and associated confidence scores."

> "Jev doesn't even give you that: put in all the text you want, the only thing you're going to get back is a floating point number."

LLMs produce text that serves as a natural audit trail even when not designed for it. Decision models provide no such trail by default. Willison notes the pricing: $0.042 per million input tokens with output tokens free, reflecting that the model generates effectively nothing as output.

## Signals
- An organization deploying a decision model in a regulated context will face audit requests for a decision that produced only a float, with no explanation to give.
- The cost savings from decision models may be offset by the compliance engineering required to reconstruct explanations from supporting evidence.
- Any task that requires a human reviewer to understand why the model decided X cannot use a pure float-output decision model without supplementary logging.

## Counter-evidence
Decision models can be wrapped with explanation layers: the float output triggers a second call to a text-generating model that explains the decision in terms of the inputs. This adds cost and latency but preserves an audit trail. Many high-volume classification tasks, email triage, content moderation, spam filtering, have no per-decision audit requirement. The interpretability tradeoff only matters in contexts with explicit accountability obligations.

## Cross-references
- `ins_tunguz-decision-model-bifurcation`: same-day coverage of the same product family from the economic angle; Tunguz focuses on cost and accuracy gains, Willison on the governance tradeoff.
- `ins_willison-stateless-mcp`: Willison's complementary concern about state and auditability in agent deployments via MCP.
- `ins_willison-ai-product-capability-opacity`: Willison's earlier argument about AI product pages obscuring what models can actually do.
