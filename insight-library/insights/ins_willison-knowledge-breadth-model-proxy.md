---
id: ins_willison-knowledge-breadth-model-proxy
operator: Simon Willison
operator_role: Co-creator of Django; creator of Datasette
co_operators: []
source_url: https://simonwillison.net/2026/Jun/9/claude-fable-5/
source_type: essay
source_title: "Initial impressions of Claude Fable 5"
source_date: 2026-06-09
captured_date: 2026-06-13
domain: [ai-native, engineering]
lifecycle: [ai-workflow]
maturity: frontier
artifact_class: framework
score: { originality: 3, specificity: 3, evidence: 3, transferability: 3, source: 4 }
tier: C
related: [ins_willison-fable-relentlessly-proactive]
raw_ref: ""
---

# Asking a model about an obscure open-source project it has no incentive to fabricate is a practical proxy for its training depth

## Claim
A model's ability to recall accurate details about a minor open-source project is a reliable practical proxy for its parameter depth and training breadth. Larger models retain more edge-case knowledge; that retention gap becomes visible when you test on content too obscure to confidently hallucinate.

## Mechanism
Training breadth correlates with parameter count: larger models can store more edge-case detail without losing it to compression. A small open-source project with modest traffic and few widely-cited discussions will appear in training data, but only models with enough capacity to retain low-salience content will surface it correctly. The heuristic works because fabricating a correct answer on an obscure project requires knowing the real answer anyway; a model that has not retained the data will either produce a vague non-answer or hallucinate details that can be falsified by anyone who knows the project.

## Conditions
Holds when: the project is genuinely obscure, with low traffic, few stars, and limited discussion on high-authority sites; making recall rather than inference the only reliable path to a correct answer.
Fails when: the project is famous enough that a smaller model could have been trained on it; or when the model confidently hallucinates a plausible-sounding description that passes a superficial check. Requires the evaluator to know the ground truth to detect correct recall versus plausible fabrication.

## Evidence
Willison compared Claude Fable 5 against a smaller model by asking both about his own minor open-source tools. Fable correctly identified files-to-prompt, a project Willison released in April 2024, and described it accurately; the smaller model failed to surface it.

> "knowledge like this is a reasonably good proxy for model size—you can cram a whole lot more details into a larger number of parameters."

## Signals
- A model names a minor project and describes its purpose accurately without being prompted for specifics.
- The same query on a smaller model produces a vague response or an incorrect description.
- The recall pattern repeats across multiple obscure tools or documents you created, not just one.

## Counter-evidence
Knowledge breadth is a proxy, not a guarantee. A model can be large and still have gaps in specific domains if its training corpus skewed away from those areas. Willison names this a "reasonably good proxy," not a definitive test. Fabrication remains a risk on edge-case queries: a confident-sounding wrong answer can fool an evaluator who does not know the ground truth.

## Cross-references
- `ins_willison-fable-relentlessly-proactive`: Willison's follow-up observation from June 11 that Claude Fable 5 deploys breadth-first problem decomposition across every available technique when blocked, suggesting the same training depth shows up in behavior as well as recall.
