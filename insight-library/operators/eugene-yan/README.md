---
name: Eugene Yan
slug: eugene-yan
roles:
  - Principal Applied Scientist
  - author of eugeneyan.com
domains_active: [engineering, ai-native]
captured_first: 2026-11-26
external:
  website: https://eugeneyan.com
  linkedin: https://www.linkedin.com/in/eugeneyan
---

# Eugene Yan

## Bio
Eugene Yan. Applied scientist and writer who publishes practical research on building reliable LLM systems at eugeneyan.com. His work covers LLM evals, retrieval systems, applied machine learning, and production AI patterns. He is widely cited in the AI engineering community for translating complex systems research into operational guidance. Where most evaluation writing focuses on benchmark results, Yan focuses on what makes benchmarks wrong: grader failures, misleading aggregate metrics, and the human attention cost that constrains how fast eval quality can improve.

## Operating themes
- **Eval reliability over headline scores.** Argues that benchmark scores mislead without grader audits, reliability metrics like pass^k, and production-harness validation. His study of twelve public evals found that eight had graders rejecting correct work.
- **Human attention as the production bottleneck.** Pushes back on token-cost framing; positions human review time as the limiting resource in evaluation, labeling, and debugging workflows.
- **Systematic error analysis over intuition.** Advocates tracing failures to their structural cause before changing models or prompts.

## Cards
- `ins_yan-eval-grader-errors-persist`, Grader errors outlast model errors in LLM evals, making grader quality the binding constraint on eval accuracy [Tier B]
- `ins_yan-pass-k-reliability-metric`, Average pass rate hides production reliability; measuring pass-at-k reveals whether a model can run unsupervised [Tier B]
- `ins_yan-eval-attention-bottleneck`, Token cost per eval task is the wrong efficiency metric because human review time, not compute, constrains how fast evals improve [Tier B]
