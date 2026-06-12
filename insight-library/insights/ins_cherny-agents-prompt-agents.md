---
id: ins_cherny-agents-prompt-agents
operator: Boris Cherny
operator_role: Head of Claude Code, Anthropic
co_operators: []
source_url: https://fortune.com/2026/06/08/anthropics-boris-cherny-creator-of-claude-code-says-there-are-days-he-manages-tens-of-thousands-of-ai-agents-at-once/
source_type: essay
source_title: "Anthropic's Claude Code creator says there are days he manages tens of thousands of AI agents at once"
source_date: 2026-06-08
captured_date: 2026-06-12
domain: [ai-native, engineering]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 4, transferability: 3, source: 4 }
tier: B
related: [ins_underfund-deliberately, ins_dont-box-the-model-in, ins_mollick-patron-not-wizard]
raw_ref: ""
---

# When AI agents prompt other AI agents, throughput scales with compute rather than headcount

## Claim
In a cascading multi-agent architecture, a top-level agent decomposes goals and formulates prompts for subordinate agents rather than having humans do the prompting. This removes the human from the inner execution loop and lets output scale with compute allocation, not with the number of people supervising.

## Mechanism
Traditional AI use keeps a human in the inner loop at every step, which caps throughput at human attention and typing speed. When a top-level Claude instance decomposes a goal, formulates task prompts, and routes those prompts to subordinate Claude instances for parallel execution, the human's role shifts to setting the top-level goal and reviewing results. The throughput ceiling becomes compute allocation, not human speed. The architecture is recursive: a managing agent can dispatch sub-agents, which can dispatch further sub-agents, creating a tree of parallel execution paths. Overnight, the system files pull requests, scans GitHub for new inputs, and proposes what to build next, all without a human in the loop at each step.

## Conditions
Holds when: the top-level goal can be decomposed into parallelizable subtasks and the managing agent can formulate coherent prompts for sub-agents without human intervention at each step.
Fails when: subtasks are highly interdependent by nature, when each step requires tacit human judgment that cannot be expressed in a prompt, or when infrastructure to manage agent output and resolve conflicts is not in place.

## Evidence
Boris Cherny, head of Claude Code at Anthropic, describes waking to find Claude has already filed pull requests after scanning GitHub overnight. He runs hundreds to tens of thousands of parallel agents on peak days.

> "You have a Claude Code, but it has subagents that are other Claudes. The user is no longer prompting Claude: It's actually another Claude that does the prompting."

> "Some days it's … thousands, or tens of thousands."

## Signals
- Pull requests appear without a human initiating them.
- The number of agents running in parallel far exceeds the number of humans supervising them.
- You define the top-level goal and review results; you do not write the prompts that kick off execution.

## Counter-evidence
Managing thousands of parallel agents creates new coordination overhead: reviewing their output, resolving conflicting changes, and catching agents that went in the wrong direction. Cherny's context is Anthropic's own infrastructure, which has unusually high trust in the model and unusually rich tooling. Teams without that infrastructure investment may find the overhead of managing agent output grows faster than the throughput gain. The architecture also depends on the managing agent formulating correct sub-agent prompts; failures cascade.

## Cross-references
- `ins_underfund-deliberately`: one person plus AI substrate beats four; this architecture provides the mechanism for that math at scale.
- `ins_dont-box-the-model-in`: giving the model tools and a goal without hard-coded workflows is the precondition for this architecture.
- `ins_mollick-patron-not-wizard`: the patron framing at the individual task level mirrors what Cherny describes at the infrastructure level.
