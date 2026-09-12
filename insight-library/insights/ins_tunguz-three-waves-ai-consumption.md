---
id: ins_tunguz-three-waves-ai-consumption
operator: Tom Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/three-waves-of-ai-consumption/
source_type: essay
source_title: "The Three Waves of AI Consumption"
source_date: 2026-09-07
captured_date: 2026-09-12
domain: [ai-native, engineering-ai-eng, founder-operator]
lifecycle: [strategy, ai-workflow]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 5 }
tier: A
related: [ins_tunguz-ai-agent-night-shift, ins_tunguz-ai-productivity-operating-layer]
raw_ref: ""
---

# Agent token consumption crossed human consumption on February 6, 2026 and now follows three order-of-magnitude waves driven by parallelization, not generation speed

## Claim
AI token demand does not grow because models generate faster. It grows because agents run in parallel across three distinct consumption waves, each roughly two orders of magnitude larger than the last. Agent consumption crossed human consumption on a specific date and has not reversed.

## Mechanism
Wave one is chat. One active user consumes roughly one million tokens per day. By June 2026, chat represented only one-third of enterprise token output.

Wave two is single agents. Each agent consumes 100 to 200 million tokens daily. Codex alone accounted for 64% of combined enterprise token usage. On OpenRouter, agent token consumption grew from 0.51 trillion to 7.3 trillion tokens in six months. Human token consumption grew 2.8x in the same period.

Wave three is meta-harnesses: one top-level agent dispatching many parallel sub-agents. Analyzing 200 YCombinator startups across 30 data columns runs costs tens of millions of tokens per run.

The core mechanism is that parallelization multiplies consumption at every layer. A meta-harness does not just process one task faster; it processes many tasks at once, each at wave-two scale. Goldman Sachs projects consumer and enterprise agents will consume 120 quadrillion tokens monthly by 2030, 24 times the 2026 level.

> "On February 6, 2026, agents on OpenRouter consumed more tokens than humans did."

> "Consumption does not grow because generation gets quicker. It grows because parallelization compounds."

## Conditions
Holds when: AI products are building on agentic architectures where tasks fan out across parallel agent calls rather than single-turn completions. Most applicable to infrastructure, developer tooling, and research platforms already running multi-agent workflows.

Fails when: adoption is still in single-turn, human-facing mode. Companies where AI is primarily a chat assistant or a copilot for individual tasks will sit at wave one for longer. The wave-two and wave-three dynamics require intentional agentic architecture, not just model access.

## Evidence
Tunguz draws on OpenRouter's published token consumption data through mid-2026. The 14x agent growth versus 2.8x human growth is a direct ratio from that dataset. The February 6 crossing date is specific enough to verify from OpenRouter's own public charts. The Goldman Sachs projection is from their 2026 AI infrastructure research note.

The wave taxonomy maps to observable infrastructure decisions: Codex at 64% of enterprise usage is a measurable production fact, not an estimate.

## Signals
- Your inference costs are growing faster than the number of users or engineers using the product.
- Agent task volume exceeds human query volume in your logs.
- A single agent session consumes more tokens than dozens of human sessions combined.
- Infrastructure costs are rising despite stable user count, because the relevant unit is agent-hours, not human users.

## Counter-evidence
The three-wave taxonomy is an analytical frame, not a law of physics. Adoption does not automatically progress from wave one to wave two. Many enterprises remain at wave one for years because the workflow redesign required for agentic architectures is not trivial.

The Goldman Sachs 2030 projection of 120 quadrillion tokens/month is a forecast, not confirmed data. Prior AI infrastructure forecasts have been accurate directionally but often wrong on magnitude and timing. The 14x agent growth rate may not compound indefinitely; the primary growth signal is OpenRouter data, which skews toward developer and API users, not the median enterprise adopter.

Tunguz also does not account for efficiency improvements that could reduce per-task token consumption even as task volume grows. Better models and shorter context windows could compress wave-two consumption significantly.

## Cross-references
- `ins_tunguz-ai-agent-night-shift`: Tunguz's September 8 analysis of the 3x productivity claim as agent shift-work economics rather than intelligence gain. Companion piece: same source, different lens.
- `ins_tunguz-ai-productivity-operating-layer`: Tunguz's earlier July 2026 three-regime model for how organizations achieve different productivity multipliers based on operating-layer design.
