---
id: ins_willison-cross-model-review
operator: Simon Willison
operator_role: Creator of Datasette; programmer and writer on AI and open-source software
co_operators: []
source_url: https://simonwillison.net/2026/Jul/5/sqlite-utils-fable/
source_type: essay
source_title: "sqlite-utils 4.0rc2, mostly written by Claude Fable (for about $149.25)"
source_date: 2026-07-05
captured_date: 2026-07-06
domain: [ai-native, engineering]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: workflow
score: { originality: 4, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_willison-incomplete-schema-agent-loop, ins_willison-silent-degradation-trust-gap]
raw_ref: ""
---

# Having a competing AI model review another model's work finds significant bugs that same-model or same-provider review misses

## Claim
Routinely having a model from one AI provider review work produced by a model from a competing provider turns up meaningful errors often enough that it warrants becoming standard practice in any AI-assisted software workflow.

## Mechanism
Different models are trained on different corpora, fine-tuned with different objectives, and carry different failure-mode distributions. A model from one provider approaches the same codebase with different priors and blind spots than the model that generated it. Self-review by the same model, or by a model with similar post-training, reinforces shared blind spots. Cross-provider review breaks that pattern. The reviewing model encounters the code without the generation context that conditioned the original model's choices, and its different training distribution makes it more likely to notice errors that the generating model's post-training suppressed.

## Conditions
Holds when: the generating model and reviewing model are trained by different providers with distinct post-training pipelines; the output being reviewed is substantial enough to contain non-trivial failure modes.
Fails when: both models share the same base model or fine-tuning data; or when the review task is so simple that blind spots have no surface to manifest.

## Evidence
Willison delegated most of sqlite-utils 4.0rc2 to Claude Fable, then asked Fable to perform a final review before shipping stable. Fable identified five release-blocker bugs that had not surfaced during the development session, including a transaction-handling flaw where `delete_where()` failed to commit, causing silent data loss through rollback.

> "I've started habitually having Anthropic's best model review OpenAI's work and vice versa, because I've had that turn up interesting results often enough to be valuable."

The project involved 37 prompts, 34 commits, and modifications across 30 files at a total API cost of approximately $149.25.

## Signals
- Cross-model review sessions find category-level bugs in substantial codebases, not just style issues
- The reviewing model flags problems in different areas than a same-provider review would
- Bug reports from cross-model review require actual code changes, not just refactoring

## Counter-evidence
Cross-model review adds cost and latency to every release. For short-lived scripts or exploratory code, the overhead likely exceeds the value. The practice is most justified for production releases where a missed bug requires a point release and public announcement.

## Cross-references
- ins_willison-incomplete-schema-agent-loop: another systematic failure mode that structured review catches before deployment
- ins_willison-silent-degradation-trust-gap: related claim about how trust in AI output erodes review discipline over time
