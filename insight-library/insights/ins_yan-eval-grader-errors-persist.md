---
id: ins_yan-eval-grader-errors-persist
operator: Eugene Yan
operator_role: Principal Applied Scientist; author of eugeneyan.com
co_operators: []
source_url: https://eugeneyan.com/writing/public-evals
source_type: essay
source_title: "Lessons from 12 Evals: Where They Break and What to Measure Instead"
source_date: 2026-11-22
captured_date: 2026-11-26
domain: [engineering, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 5, evidence: 5, transferability: 4, source: 5 }
tier: B
related: [ins_husain-harness-beats-model, ins_husain-binary-over-likert, ins_yan-pass-k-reliability-metric]
raw_ref: ""
---

# Grader errors outlast model errors in LLM evals, making grader quality the binding constraint on eval accuracy

## Claim
As LLM accuracy rises, grader failures become the dominant source of evaluation noise, so investing in grader quality yields higher signal improvement than adding harder tasks.

## Mechanism
Grader errors are roughly constant regardless of model capability. Model errors shrink with each new generation. At some point, the proportion of wrong eval results attributable to grader mistakes exceeds those attributable to model mistakes. The eval score stops reflecting model quality and starts reflecting grader quality. Harder tasks slow leaderboard saturation, but they do not fix the core problem: a grader that rejects correct work will continue rejecting it even as models improve.

## Conditions
Holds when: a corpus of evals has been in use long enough that models are approaching ceiling on existing tasks, and grader design has not kept pace with model improvement.
Fails when: the eval is newly designed, grader quality is high, and model performance still has headroom. Early-stage evals typically fail more from model errors than grader errors.

## Evidence
In a study of twelve public LLM benchmarks, Yan found that eight showed evidence of graders rejecting correct work. Specific examples:

- Terminal Bench 4.0: a reviewer found 41 of 65 tasks graded on requirements not stated in the prompt.
- BrowseComp: trainers disagreed with the reference answer on 50 of 367 questions (14%).
- Harvey LAB: Artificial Analysis found material hallucinations in more than 60% of otherwise passing results.
- AutomationBench: 57% of assertions check only whether output contains or excludes a string.

> "In eight of twelve public evals studied, there's evidence the grader failed work that should have passed."

## Signals
- Grader-related bugs outnumber model-related bugs in your eval error log.
- Error analysis shows the model completed the task correctly but the grader rejected it on a formatting or phrasing requirement not in the task spec.
- Leaderboard rankings shift unpredictably when grader scripts are updated, without any model change.

## Counter-evidence
Grader improvement has diminishing returns: at some point, grader quality is good enough that remaining failures are genuinely model errors. Some benchmarks (math, code execution) have deterministic graders where grader failure is near zero, and in those cases harder tasks remain the right lever.

## Cross-references
- `ins_husain-harness-beats-model`: Hamel Husain's complementary claim that harness quality determines more of the production result than model capability.
- `ins_husain-binary-over-likert`: Husain on why binary grading criteria reduce grader drift compared with multi-point scales.
- `ins_yan-pass-k-reliability-metric`: Eugene Yan on the related point that average pass rate also misleads when grader noise inflates apparent consistency.
