---
id: ins_cherny-adoption-maturity-bottlenecks
operator: Boris Cherny
operator_role: Creator and Head of Claude Code, Anthropic
co_operators: []
source_url: https://www.linkedin.com/posts/bcherny_steps-of-ai-adoption-activity-7483695059843043328-LBg_
source_type: post
source_title: "Steps of AI Adoption"
source_date: 2026-07-16
captured_date: 2026-07-18
domain: [ai-native, engineering]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 3, specificity: 5, evidence: 4, transferability: 5, source: 3 }
tier: B
related: [ins_cherny-agents-prompt-agents, ins_cherny-code-review-next-bottleneck]
raw_ref: ""
---

# At each AI adoption maturity level the binding constraint is guardrail design and approval process, not model capability

## Claim
At each AI adoption maturity level, the binding constraint is guardrail design and approval process, not model capability or token volume.

## Mechanism
The five-step framework (Gated at 0 agents, Assisted at roughly 1, Parallel at roughly 10, Supervised autonomy at roughly 100, AI-native at 1,000 or more) reveals that each transition requires removing a different organizational bottleneck. At Gated, the constraint is a security mindset with no approval pathway for Claude Code at all. At Assisted, the constraint is the engineer's own attention, since they must review every change. At Parallel, the constraint is managing multiple concurrent output streams and steering prompts across sessions. At Supervised autonomy, the constraint is trust and decision throughput. At AI-native, the constraint is designing per-task guardrails at scale and shifting from directing agents to setting intent. Verification loops (tests, lint, security scans), auto mode, automated code review, worktree isolation, routines, and cost monitoring are the mechanisms for crossing each threshold. More tokens, larger context windows, and a more capable model do not move an organization forward when the actual constraint is an approval gate or a manual review queue.

## Conditions
Holds when: the organization has already granted Claude Code access and engineers are actively using it; the stall is not a tool-availability problem but an operational process problem.
Fails when: the model genuinely cannot perform the required task, making model capability rather than process the true constraint; or when compliance requirements make approval gates necessary rather than organizational inertia.

## Evidence
Cherny observes that he talks to engineers daily and hears the same pattern across companies: one person achieves 10x output while the rest of the organization has not caught up. The framework diagnoses why different individuals are stalled at different maturity levels with different constraints. Anthropic itself operates at Step 3 as of July 2026, and Cherny reports personally reaching Step 4.

## Signals
- A team running Claude Code in auto mode is past the Step 1 attention-bottleneck.
- A team running parallel worktrees with subagents is approaching the Step 2 to 3 boundary.
- A team where Claude initiates workflows and files pull requests without a human prompt is at or near Step 4.
- Token spend growing without corresponding engineering output growth indicates a guardrail bottleneck rather than a model bottleneck.

## Counter-evidence
The framework is descriptive from observation, not experimentally validated. Organizations in regulated industries or with genuine compliance requirements may find that approval gates are not bottlenecks to remove but necessary constraints to maintain. The framework does not address how to adapt when security or legal constraints are the binding factor rather than organizational inertia. It also does not account for team size: a solo developer can operate at Step 4 without any organizational approval process, while a 500-person team may face structural constraints that do not map cleanly onto the five steps.

## Cross-references
- ins_cherny-code-review-next-bottleneck: Cherny's earlier observation that code review becomes the throughput constraint when code writing moves to AI, which is a specific instance of the Step 1 to Step 2 transition described in this framework.
- ins_cherny-agents-prompt-agents: the cascading multi-agent architecture that Step 3 and Step 4 organizations use, where a top-level agent prompts subordinate agents rather than having a human do the prompting.
