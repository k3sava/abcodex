---
id: ins_willison-haiku55-context-cliff
operator: Simon Willison
operator_role: Independent developer; creator of Datasette and Django co-creator
co_operators: []
source_url: https://simonwillison.net/2026/Oct/7/claude-haiku-5-5/
source_type: essay
source_title: "Claude Haiku 5.5"
source_date: 2026-10-07
captured_date: 2026-10-09
domain: [engineering, ai-native]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: metric-model
score: { originality: 3, specificity: 5, evidence: 4, transferability: 5, source: 4 }
tier: B
related: [ins_willison-hard-budget-caps-default, ins_willison-cloud-budget-caps-default, ins_willison-sonnet5-tokenizer-cost]
raw_ref: ""
---

# Haiku 5.5 pricing jumps 5x at the 100k-token context boundary, creating a cost cliff that long-running agent loops will cross

## Claim
Haiku 5.5 costs $0.10 input / $0.50 output per million tokens below the 100k-token context limit, then jumps to $0.50 input / $2.50 output above it. Agent loops that accumulate context across many turns will hit this boundary. Luna (xAI's small model) holds $0.03 input pricing up to 272k tokens, making it a better fit for long-running agent contexts at the current price points.

## Mechanism
Context length pricing tiers exist because larger context windows require proportionally more compute per forward pass. A 200k-token context does not cost twice a 100k-token context; it costs more, because attention mechanisms scale with context length.

For a chat session with a human, context rarely crosses the 100k boundary. For an agent loop running over many turns, context accumulates: each tool result, each intermediate reasoning step, each iteration adds tokens to the running context window. A loop that starts light can cross the 100k boundary mid-run and incur 5x higher pricing for the remainder of the session.

The practical implication: agent builders who pick Haiku 5.5 for its low starting price need to model the expected context accumulation across their loop. A loop that routinely crosses 100k tokens is not priced like a $0.10 input model. Luna's cliff is at 272k tokens, giving significantly more headroom before the price jump.

## Conditions
Holds when: agent loops accumulate context across many turns without periodic context truncation or summarization; the loop runs until task completion rather than on fixed-length windows; the builder picked Haiku 5.5 primarily for cost.
Fails when: the agent loop explicitly truncates or summarizes context to stay under the 100k limit; the task completes in short sessions that never approach the boundary; the team uses a different pricing tier or negotiated rate.

## Evidence
Simon Willison documented the pricing structure on October 7, 2026:

Haiku 5.5 pricing tiers (per million tokens):
- Below 100k context: $0.10 input / $0.50 output
- Above 100k context: $0.50 input / $2.50 output (5x increase)

For comparison: Luna (xAI) holds $0.03 input / $0.14 output up to 272k tokens before its cliff.

Willison's analysis frames this as a structural concern for agent builders who default to Haiku 5.5 for its low headline cost without modeling the context accumulation profile of their specific loop.

## Signals
- Agent loop costs are significantly higher than back-of-envelope estimates based on per-call token counts
- Individual run costs spike on long sessions while short sessions match the expected rate
- Switching to explicit context truncation at 80k tokens reduces per-run cost substantially
- A comparison with Luna shows lower cost on loops that routinely exceed 100k tokens

## Counter-evidence
The 100k-token cliff is only relevant for agent loops that actually cross it. Most short-form agent interactions, customer support bots, and single-pass coding tasks complete well under 100k tokens. Haiku 5.5 remains the lowest-cost option for tasks that stay under the boundary. Willison does not publish benchmark comparisons showing quality differences between Haiku 5.5 and Luna for typical agent tasks; cost-per-run comparisons depend on both the token cliff and the quality of output per run.

## Cross-references
- `ins_willison-hard-budget-caps-default`: hard budget caps guard against uncontrolled spend; the context cliff makes caps even more necessary for agent builders.
- `ins_willison-cloud-budget-caps-default`: AI coding agents that accumulate large contexts are exactly the workload that crosses this cliff, compounding cloud cost exposure.
- `ins_willison-sonnet5-tokenizer-cost`: Willison previously flagged Sonnet 5's tokenizer inefficiency; tokenizer overhead adds to context length and can push loops over the 100k boundary earlier than expected.
