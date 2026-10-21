---
id: ins_mollick-automation-satisficing-trap
operator: Ethan Mollick
operator_role: Professor, Wharton School; author of Co-Intelligence and Co-Existence
co_operators: []
source_url: https://www.charterworks.com/ethan-mollick-ai-wharton-co-existence/
source_type: essay
source_title: "Ethan Mollick on AI, Wharton, and Co-Existence"
source_date: 2026-10-18
captured_date: 2026-10-21
domain: [ai-native, leadership-org]
lifecycle: [strategy, ai-workflow]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 3, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_mollick-institutional-lag-ai-curve, ins_100-percent-automation-rule, ins_mollick-ai-single-player-org-gap]
raw_ref: ""
---

# Automation-first AI strategies satisfice at current model quality and forfeit compound gains from augmentation

## Claim
Choosing automation over augmentation optimizes for a fixed capability level at the moment models are weakest. Each new model generation improves beyond what was automated, but the organization has no human-AI collaboration to compound, only a system to rebuild. Mollick predicts the automation-first approach will lead to long-term failure.

## Mechanism
Automation targets a threshold: does this task meet the minimum acceptable standard without a human in the loop? Once automated, the task is treated as solved. But AI models improve on an exponential curve, and each generation handles tasks the previous one could not. An augmentation approach compounds: better models raise the ceiling of what the human-AI pair can achieve. An automation approach just gets new robots at each generation change, with switching costs and integration work that slow real adoption.

Mollick adds a second failure mode: automation concentrates all quality risk at the output end. A model running without a human in the loop produces failures that no one catches until they reach the customer or the next downstream step. Augmentation catches failures in-session, when the cost of correction is low.

## Conditions
Holds when: models are improving faster than organizations can rebuild their automated workflows; the tasks being automated require quality judgment that a fixed-threshold test cannot fully capture; the organization cares about long-run capability, not one-time cost reduction.

Fails when: the task is genuinely rote and bounded, with a stable and verifiable quality floor; the volume is high enough that automation's cost advantage outweighs the compounding forgone; the organization has a short planning horizon.

## Evidence
Mollick calls automation a "well-worn playbook" that he predicts is "going to lead to disaster." He argues companies must build their own approaches rather than waiting for best practices to emerge. The Charter interview frames the risk in terms of model dependence: an organization "run by Claude" using a single model's default approach is specifically named as a failure pattern to avoid.

## Signals
- Teams treating current model output as a fixed capability level rather than a starting floor
- No process for re-evaluating automated tasks as models improve
- Human reviewers catching failures downstream rather than collaborating earlier in the workflow
- Cost-cutting framed as the primary goal of AI adoption

## Counter-evidence
Automation has clear wins at sufficient volume with a stable quality floor: invoice processing, image classification, structured data extraction. `ins_100-percent-automation-rule` makes the case that 95% automation is not automation at all, suggesting the floor must be set high rather than abandoned. Augmentation also requires judgment and skilled collaborators, which organizations may not have. For organizations with limited AI-literate staff, automation with a high threshold may outperform messy augmentation in practice.

## Cross-references
- `ins_100-percent-automation-rule`: if the quality floor cannot be set at 100%, automation creates worse outcomes than a manual process.
- `ins_mollick-institutional-lag-ai-curve`: the automation trap accelerates institutional lag because each new model generation requires a rebuild cycle.
- `ins_mollick-ai-single-player-org-gap`: augmentation requires the group-level process redesign that the org gap blocks.
