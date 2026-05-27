---
id: ins_andrew-ng-top-down-workflow-redesign
operator: Andrew Ng
operator_role: Managing General Partner, AI Fund; Founder, DeepLearning.AI
co_operators: []
source_url: "https://8thlight.com/insights/production-is-the-new-prototype-notes-from-langchain-interrupt-2026"
source_type: recap
source_title: "Production is the New Prototype: Notes from LangChain Interrupt 2026"
source_date: 2026-05-22
captured_date: 2026-05-27
domain: [ai-gtm, operations]
lifecycle: [growth-loops]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 3, evidence: 3, transferability: 4, source: 3 }
tier: B
related: [ins_maja-voje-ai-buyer-controls-interaction, ins_rebuild-gtm-around-ai, ins_cash-four-stage-growth-automation]
raw_ref: 
---

# Top-down workflow redesign from desired outcome delivers 20 to 50 percent transformation; bottom-up task automation delivers only incremental gains

## Claim
Top-down workflow redesign produces 20 to 50 percent transformation. Bottom-up task automation produces only incremental gains. The difference is the starting question.

## Mechanism
Bottom-up automation finds tasks that already exist and speeds them up. The improvement ceiling is set by the task. Top-down redesign starts from the desired outcome and asks which tasks should not exist. Removing a step produces larger gains than accelerating it. AI makes task removal more feasible because the constraint is no longer human capacity but organizational willingness to rethink from a blank process. When the starting point is "what does the outcome require?" rather than "what are our current tasks?", the design space expands.

## Conditions
Holds when: the workflow being automated has accumulated steps that exist for historical rather than functional reasons, which is common in processes built before modern tooling.
Fails when: the workflow is already tightly optimized and every step is load-bearing. Redesign also requires enough organizational authority to actually remove steps.

## Evidence
Ng stated this at LangChain Interrupt 2026, naming the 20 to 50 percent figure as the outcome of top-down redesign versus the incremental result of bottom-up automation.

The conference context (from the 8th Light writeup) showed this pattern confirmed across multiple production deployments: Monday.com, Rippling, and Clay. Clay processes 350 million agent tasks monthly and treats cost as a first-class engineering constraint, not an afterthought, which only becomes possible when the workflow is redesigned rather than automated as-is.

## Signals
- Current AI implementation focuses on making existing tasks faster rather than eliminating tasks
- No one has asked which tasks would disappear if the process started from a blank page
- Improvement metrics are measured in percentage points rather than step counts

## Counter-evidence
The 20 to 50 percent claim is a conference statement, not a published controlled study. Top-down redesign requires organizational authority and willingness to change that most teams do not have on the first implementation. Bottom-up automation wins in practice because it does not require executive redesign approval.

## Cross-references
- [[ins_maja-voje-ai-buyer-controls-interaction]]
- [[ins_rebuild-gtm-around-ai]]
- [[ins_cash-four-stage-growth-automation]]
