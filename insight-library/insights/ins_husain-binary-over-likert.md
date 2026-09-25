---
id: ins_husain-binary-over-likert
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
score: { originality: 3, specificity: 5, evidence: 3, transferability: 5, source: 4 }
tier: B
related: [ins_husain-shankar-criteria-drift, ins_husain-triage-before-eval-tooling, ins_hamel-eval-is-product-smell]
raw_ref: ""
---

# Binary pass/fail annotation produces better quality than Likert scales by forcing judgment on uncertain cases

## Claim
Likert scales (1 to 5) degrade annotation quality by encoding genuine uncertainty as a middle value. Binary pass/fail forces annotators to commit, reducing variance and lowering the sample size needed to reach meaningful evaluation results.

## Mechanism
Middle values on a Likert scale (3 of 5) act as an escape hatch. Annotators who are unsure select the midpoint rather than committing to a judgment. That ambiguity enters the dataset as data, not as uncertainty. Binary judgment removes the escape hatch: each annotation is a forced choice. The resulting dataset has less noise, which means fewer labeled examples are needed to reach statistical significance, and the resulting evaluator gives fewer false impressions of confidence where the evidence is actually ambiguous.

## Conditions
Holds when: the annotation task involves judgment calls where humans are genuinely uncertain on some subset of cases.
Fails when: the judgment is inherently graded (e.g., severity of a security issue, degree of fluency) and collapsing to binary loses meaningful signal. In those cases, a binary anchor combined with optional severity notation preserves forced judgment while capturing gradation.

## Evidence
From Husain and Shankar's comprehensive FAQ, published on hamel.dev in September 2026 as a distillation of what the two learned teaching 5,000 engineers and PMs about AI evals:

> "Binary decisions force people to make a decision rather than hiding uncertainty"

They note this reduces annotation conflicts and lowers sample size requirements, which directly cuts the cost of building reliable evaluators.

## Signals
- Interrater agreement improves when switching from 5-point to binary labels on the same annotation task.
- The labeled dataset requires fewer examples to train a reliable judge.
- Post-annotation review shows fewer "3 of 5" scores that annotators could not later explain.

## Counter-evidence
Some evaluation tasks require ordinal distinctions that binary collapses destructively (e.g., safety severity ratings where a "2" and a "5" demand different responses). Teams doing graded harm evaluation often retain fine-grained scales for precisely this reason. The binary guidance applies most cleanly to quality-of-output annotations, not to risk or severity classifications.

## Cross-references
- `ins_husain-shankar-criteria-drift`: the complementary finding that annotation criteria shift as annotators see more examples, which binary judgment cannot fully prevent.
- `ins_husain-triage-before-eval-tooling`: the prior sequencing rule this annotation quality guidance sits within.
- `ins_hamel-eval-is-product-smell`: the broader principle that eval quality reflects product clarity.
