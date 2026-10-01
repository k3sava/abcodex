---
id: ins_willison-tokenmaxx-cost-correction
operator: Simon Willison
operator_role: Independent developer, co-creator of Django, creator of Datasette; technology journalist and blogger at simonwillison.net
co_operators: []
source_url: https://simonwillison.net/2026/Sep/27/2026-in-llms-so-far/
source_type: essay
source_title: "2026 in LLMs (so far)"
source_date: 2026-09-27
captured_date: 2026-10-01
domain: [engineering-ai-eng, agentic-coding, ai-native]
lifecycle: [ai-workflow, strategy]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 3, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_willison-max-thinking-token-burn, ins_willison-agentic-cost-removes-discipline, ins_willison-game-loop-agent-limit]
raw_ref: ""
---

# The tokenmaxxing proxy for model quality collapsed when agent deployments proved that cost per outcome is the binding constraint, not capability per call.

## Claim
Evaluating model quality by token-count output (tokenmaxxing) became a misleading heuristic once real agent deployments revealed that chained inference across multi-step tasks multiplies per-token costs to a scale where cost-per-outcome is the actual constraint, not raw model capability.

## Mechanism
Tokenmaxxing assumed that models generating more tokens per response were higher-quality reasoners. In single-call evaluations, that correlated with reasoning depth. In agentic workflows, each task step is a separate inference call. A 30-step agent task multiplies the per-call cost by 30. At frontier model prices, that arithmetic makes high-token-count behavior a cost liability rather than a quality signal. The dominant constraint shifts from "which model is most capable per call" to "which model completes the task at an acceptable total cost." Willison observed this directly: real deployments of agents hit expensive ceilings that benchmark-pass-rate comparisons never surfaced.

## Conditions
Holds when: agent tasks require many sequential model calls at frontier prices; the task completion cost scales with per-step token count.

Fails when: tasks are single-call or very short chains; cached intermediate outputs flatten the cost curve; sub-frontier models are already in use and token count was never the bottleneck.

## Evidence
Willison described the shift in his September 2026 year-in-review keynote at WeAreDevelopers World Congress North America, observing that after tokenmaxxing emerged as a trend in late 2025, real agent deployments corrected it:

> "the agents are expensive"

The observation captures the corrective signal. The tokenmaxxing proxy held when agents were hypothetical. It broke when practitioners ran agents at scale and received billing surprises.

## Signals
- Cost overruns on tasks that appeared cheap in single-call benchmark conditions
- Teams routing agent-step calls to smaller or cheaper models rather than frontier models
- Per-task cost becoming a first-class evaluation criterion alongside benchmark accuracy

## Counter-evidence
Some agentic tasks genuinely benefit from high-token reasoning at each step. Complex multi-constraint planning, adversarial review, and long-chain reasoning problems may justify the cost if they compress human review time. The critique of tokenmaxxing lands on tasks where token count measured verbosity rather than reasoning depth. For those tasks, the signal was always misleading; agents just made the cost of the mistake visible.

## Cross-references
- `ins_willison-max-thinking-token-burn`: the mechanics of token budget exhaustion in extended thinking mode, a related failure where token-maximizing behavior produces no usable output at all.
- `ins_willison-agentic-cost-removes-discipline`: agentic workflows shift the dominant constraint from time to cognitive load; cost is the third constraint that emerges at deployment scale.
- `ins_willison-game-loop-agent-limit`: from the same keynote, on what agents cannot self-evaluate regardless of token count or model quality.
