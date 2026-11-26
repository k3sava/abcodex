---
id: ins_yan-eval-attention-bottleneck
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
score: { originality: 3, specificity: 4, evidence: 3, transferability: 5, source: 5 }
tier: B
related: [ins_yan-eval-grader-errors-persist, ins_husain-triage-before-eval-tooling]
raw_ref: ""
---

# Token cost per eval task is the wrong efficiency metric because human review time, not compute, constrains how fast evals improve

## Claim
Optimizing LLM eval pipelines for token cost per task misidentifies the bottleneck. Human attention, the time required to build graders, review traces, and validate rubrics, is the scarce resource in evaluation.

## Mechanism
Writing a good grader requires human judgment about what correct output looks like, and that judgment must be validated against real examples. Graders degrade as models improve, requiring periodic review and rewriting. These steps require researcher time, not compute. A pipeline that is cheap per token but expensive per human review hour slows down as the team's attention fills up. Optimizing cost per task reduces a secondary cost while leaving the primary cost unchanged.

## Conditions
Holds when: the team is resource-constrained in research or engineering hours, not in compute budget. Applies most strongly when evals are being built or maintained for a production deployment.
Fails when: compute cost is genuinely the bottleneck, for example in a startup running thousands of eval variants simultaneously on a fixed cloud budget. In cost-limited contexts, token cost does matter.

## Evidence
> "Cost per task is a misleading metric; the scarce resource is human attention, not token cost."

The claim is supported by Yan's broader analysis of grader failure modes: each failure type requires human review to diagnose, classify, and fix. The cost of running a flawed eval many times is not just the token cost but also the analyst hours spent on misleading results.

## Signals
- Eval quality stagnates even as compute budgets increase.
- Grader issues are discovered months after the benchmark was deployed because no one had time to audit.
- Teams reduce eval scope to manage workload rather than to manage compute.

## Counter-evidence
In well-resourced teams with mature graders, human review time is not the binding constraint: the system runs largely on autopilot. The claim applies more to teams building evals for the first time than to those maintaining stable ones.

## Cross-references
- `ins_yan-eval-grader-errors-persist`: the complementary point that grader errors accumulate when graders aren't maintained, multiplying the human review cost.
- `ins_husain-triage-before-eval-tooling`: Hamel Husain's related argument that building eval tooling before defining what good looks like wastes both compute and human time.
