---
id: ins_hamel-eval-is-product-smell
operator: Hamel Husain
operator_role: AI consultant and researcher
co_operators: []
source_url: https://hamel.dev/blog/posts/eval-smell/
source_type: essay
source_title: "Evals are a product smell"
source_date: 2026-06-29
captured_date: 2026-07-02
domain: [engineering, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_error-analysis-highest-leverage-eval-step, ins_evals-are-data-analysis-on-llm-apps]
raw_ref: ""
---

# When a team says an AI product is hard to eval, the bottleneck is product design, not eval methodology

## Claim
"Hard to eval" is a product design problem. Artifacts that AI systems produce and that creators cannot easily verify are typically hard for users to verify too, and the right fix is redesigning the product for verifiability before building evals.

## Mechanism
Evaluation difficulty surfaces the same quality problem that users encounter. If a curriculum builder produces lesson plans from scratch, creators cannot check correctness without redoing the research. If a data agent returns a final answer without showing its steps, neither creators nor users can trust it. If a medical literature tool emits a summary without citing sources, both audiences are stuck. In each case, the product asks the user to accept the artifact on faith. Husain's argument: redesign so the artifact carries its own evidence. Add provenance and intermediate steps to data agents. Anchor curriculum builders to vetted templates rather than freeform generation. Surface citations in medical summaries. Once the product is verifiable, evals follow naturally because the criteria are explicit.

## Conditions
Holds when: the AI product produces complex artifacts (reports, lesson plans, data analyses, diagnoses) where correctness is not self-evident from the output alone.

Fails when: the output is inherently verifiable by inspection (code that either runs or doesn't, translations with a known reference text, classification tasks with ground-truth labels). In those cases, eval methodology is the real bottleneck.

## Evidence
Husain describes a recurring pattern across multiple AI product reviews:

> "Artifacts that are hard for you to verify are often hard for users too."

> "Designing your product for ease of verification should come before building evals."

He gives three concrete examples. A curriculum builder that generates lesson plans from scratch is hard to eval because neither creators nor users can check factual accuracy without re-doing the research. Anchoring to vetted templates solves both problems at once. A data agent that returns a final number without intermediate steps forces anyone checking it to

> "redo the work from scratch to verify the output"

Adding provenance (intermediate steps, source queries) makes the agent's work auditable and the eval criteria obvious.

## Signals
- Your eval rubric requires human judgment on every row because there is no clear right answer.
- QA reviewers spend more time on each artifact than users do.
- Teams debate eval methodology while the product ships without meaningful quality checks.
- Users report that they cannot trust the output without checking it themselves.

## Counter-evidence
Some AI products are genuinely hard to eval because the task is subjective (creative writing, tone matching, personalized coaching). In those cases, product redesign may not help much; the challenge is constructing a valid subjective evaluation, not making the output more transparent. Husain's framework applies most directly to tasks with a ground truth or a verifiable process, not to tasks where quality is inherently in the eye of the beholder.

## Cross-references
- `ins_error-analysis-highest-leverage-eval-step` (on where to invest in the eval stack)
- `ins_evals-are-data-analysis-on-llm-apps` (on treating evals as data work)
