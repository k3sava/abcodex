---
id: ins_yan-pass-k-reliability-metric
operator: Eugene Yan
operator_role: Principal Applied Scientist; author of eugeneyan.com
co_operators: []
source_url: https://eugeneyan.com/writing/public-evals
source_type: essay
source_title: "Lessons from 12 Evals: Where They Break and What to Measure Instead"
source_date: 2026-11-22
captured_date: 2026-11-26
domain: [engineering, ai-native]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: metric-model
score: { originality: 4, specificity: 4, evidence: 4, transferability: 5, source: 5 }
tier: B
related: [ins_yan-eval-grader-errors-persist, ins_yan-eval-attention-bottleneck]
raw_ref: ""
---

# Average pass rate hides production reliability; measuring pass-at-k reveals whether a model can run unsupervised

## Claim
Reporting average pass rate alone misrepresents production readiness, because it hides variance in whether a model completes the same task consistently. Pass-at-k, the probability of k consecutive successes, captures reliability in a way average pass rate cannot.

## Mechanism
A model that passes 80% of runs on average can still fail three times in a row half the time. For supervised tasks, failure on individual runs is recoverable. For production agents running unsupervised, the operative question is whether the model reliably succeeds, not whether it succeeds on average. Pass-at-k collapses consistency into a single metric: at k=5, it asks whether the model clears the same task five times in a row without human intervention. A model with high average pass rate but low pass-at-k will fail in production at a rate average scores do not predict.

## Conditions
Holds when: the deployment model is unsupervised or low-oversight, and reliability matters more than average capability. Also when comparing two models with similar average pass rates but different variance profiles.
Fails when: every task run is supervised and failures trigger human recovery. In a supervised setting, average pass rate is more informative than pass-at-k.

## Evidence
> "Most evals report average pass rate—this hides a huge difference in production."

Yan recommends measuring reliability (pass^k) alongside average pass rate and distinguishing all-pass grading (every check must pass) from partial-credit grading, since all-pass is more sensitive to individual check failures. A reference cited in the essay: Laban et al. found models scored 39% lower in multi-turn settings compared with single-turn settings, illustrating how single-shot metrics mask multi-step reliability degradation.

## Signals
- Two models with similar average scores produce very different production outcomes, one recoverable and one not.
- A model's error rate in production is higher than its benchmark error rate predicted.
- Pass-at-k scores diverge sharply from average pass rate on the same benchmark.

## Counter-evidence
Pass-at-k requires multiple independent runs of the same task, which increases evaluation cost. For small budgets, average pass rate may be the practical ceiling. Deterministic tasks may show no meaningful difference between average pass rate and pass-at-k.

## Cross-references
- `ins_yan-eval-grader-errors-persist`: Eugene Yan on the complementary point that grader errors inflate apparent average pass rate even when models improve.
- `ins_yan-eval-attention-bottleneck`: Eugene Yan on why human review time, not token cost, is the binding constraint on eval improvement speed.
