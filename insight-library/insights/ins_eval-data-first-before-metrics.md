---
id: ins_eval-data-first-before-metrics
operator: Hamel Husain
operator_role: Independent AI engineer; co-creator of the AI Evals for Engineers and PMs course; co-author of Evals for AI Engineers (O'Reilly, 2026)
co_operators: []
source_url: https://hamel.dev/blog/posts/claude-auto-evals/index.html
source_type: essay
source_title: "Claude's new auto eval tool"
source_date: 2026-09-30
captured_date: 2026-10-02
domain: [engineering-ai-eng, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: playbook
score: { originality: 3, specificity: 5, evidence: 4, transferability: 5, source: 4 }
tier: B
related: [ins_husain-binary-over-likert, ins_husain-shankar-criteria-drift]
raw_ref: ""
---

# An eval tool that skips data exploration before evaluator selection produces premature, bundled metrics that miss the real failure modes.

## Claim
Any LLM evaluation tool that routes practitioners toward selecting evaluators before they have examined raw failure data is structurally broken: it trains practitioners to build evals before they understand what they are measuring, which produces overly broad metrics that obscure rather than diagnose problems.

## Mechanism
Evaluators are hypotheses about what matters. A hypothesis formed before looking at data is a guess. When practitioners skip data exploration, they tend to bundle multiple distinct failure types into a single metric because they have not yet seen which failure patterns actually dominate. The resulting evaluator fires on a broad signal that conflates separate causes. Diagnosis and debugging then require disassembling the metric into its components, which takes more time than starting with data would have. The correct order is: look at the data, identify distinct failure patterns, write targeted evaluators for each one. An automated tool that reverses this order makes the workflow faster but produces worse evaluators.

## Conditions
Holds when: the application has multiple failure modes that require different interventions; the evaluator is new and no established metric already fits; the eval will be used to guide improvement decisions rather than just pass/fail gating.

Fails when: a well-understood metric already exists for the task type (e.g., BLEU for translation); the goal is a quick sanity check rather than deep diagnosis; the team has enough domain knowledge to correctly anticipate failure patterns without looking at data first.

## Evidence
Husain reviewed Anthropic's Claude auto eval plugin and found that the tool recommends evaluators to the user before they have examined the underlying data. One generated evaluator bundled four distinct failure types into a single metric. He tested the tool's issue-discovery capability positively (it outperformed other auto-eval approaches at identifying novel failures) but rated the workflow design fundamentally flawed because of the premature evaluation selection.

> "you should be looking at data first to inform your understanding and prioritize which evals to write"

> "if an eval tool doesn't put looking at data at the center of your workflow, it's not worth using"

He also flagged that the tool uses markdown-based review inside a chat interface, which is too low-bandwidth for the kind of iterative data exploration that good eval design requires. A web application with in-situ annotation is the minimum viable annotation interface.

## Signals
- Evaluators that flag many false positives or false negatives and require frequent post-hoc calibration
- Teams spending more time interpreting eval results than fixing the failure modes they were supposed to diagnose
- Multiple distinct error types showing up under a single evaluation label

## Counter-evidence
Automated eval tools that skip data exploration can surface issue types practitioners would not have anticipated. Husain's own review credits the Claude plugin with outperforming other auto-eval approaches on novel issue discovery. For teams with no prior exposure to a new failure domain, the tool's suggestion may be better than a blank page, even if imperfect. The critique is about workflow design, not the tool's issue-detection capability.

## Cross-references
- `ins_husain-binary-over-likert`: binary metrics over Likert scales for the same reason data shape must precede metric design. The data-first principle runs through both.
- `ins_husain-shankar-criteria-drift`: criteria drift occurs when evaluators are written before the failure signal is stable, the same root cause this card diagnoses.
