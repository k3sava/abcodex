---
id: ins_mollick-task-horizon-metr-doubling
operator: Ethan Mollick
operator_role: Associate Professor, Wharton School; author of Co-Intelligence and Co-Existence
co_operators: []
source_url: https://www.oneusefulthing.org/p/30-months-on-the-exponential-in-charts
source_type: essay
source_title: 30 Months on the Exponential (in Charts)
source_date: 2026-10-20
captured_date: 2026-10-24
domain: [ai-native, engineering, leadership]
lifecycle: [ai-workflow, strategy-bets]
maturity: frontier
artifact_class: metric-model
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_mollick-14h-agent-run-cost, ins_mollick-conjurer-oversight-gap]
raw_ref: ""
---

# AI task duration at 50% success has doubled eight times since GPT-4, from minutes to hours

## Claim
On the METR Long Horizon Benchmark, the length of human work AI can complete at 50% success doubled eight times from GPT-4's release, advancing from roughly four-minute tasks in 2024 to roughly 17 hours by April 2026; the benchmark then saturated, and separate research suggests the real achievable horizon may reach 17 weeks.

## Mechanism
Each model generation improves on the prior at a measurable compounding rate. The METR benchmark captures one specific dimension of that progress. Benchmark saturation does not mean progress stopped; it means the test design could no longer discriminate at the capability frontier. Researchers who design longer tasks to probe the new frontier find the achievable duration continues to extend past the saturated benchmark limit.

## Conditions
Holds when: Tracking autonomous-task duration as a capability metric for frontier models, using METR benchmark methodology or equivalent long-horizon test suites.

Fails when: The task requires persistent human judgment that cannot be specified in a prompt (strategy decisions, ethical calls, novel domain knowledge). Long autonomous runs also accumulate errors that compound; 17-hour tasks complete at 50% success, not reliably. A 50% pass rate means half of all runs fail.

## Evidence
METR Long Horizon Benchmark results show eight doublings from GPT-4's baseline. Four minutes at 50% success in 2024, approximately 17 hours by April 2026. The benchmark saturated, and separate studies suggest the achievable horizon may be 17 weeks or more.

Mollick also cites the cost of a correct answer on a GPQA-equivalent benchmark falling from approximately 30 cents to approximately 0.04 cents over the same period, suggesting capability gains are running alongside cost compression.

## Signals
- Internal benchmarks for production coding agents show tasks that required human handoff in 2024 completing autonomously in 2026
- Agent run-cost per successful task continues to fall as new model generations arrive
- Benchmark saturation events signal capability has exceeded the test design rather than stalled

## Counter-evidence
A 50% success rate at 17 hours means half of autonomous runs fail. The useful planning implication is not "AI can do 17-hour tasks reliably" but rather "AI can attempt 17-hour tasks and succeed half the time with human evaluation at the output." The 17-week estimate from other studies is speculative and not yet verifiable with current benchmarks. Mollick does not name the specific studies.

## Cross-references
- ins_mollick-14h-agent-run-cost: Mollick's earlier June 2026 data on agent run duration and cost from "The Twilight of the Chatbots"
- ins_mollick-conjurer-oversight-gap: how delegation-mode (conjurer) scales agent work but reduces human visibility into in-progress errors
