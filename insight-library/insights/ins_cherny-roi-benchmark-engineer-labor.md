---
id: ins_cherny-roi-benchmark-engineer-labor
operator: Boris Cherny
operator_role: Head of Claude Code, Anthropic
co_operators: []
source_url: https://fortune.com/2026/06/09/boris-cherny-claude-code-says-comparing-ai-costs-to-wrong-thing-anthropic/
source_type: essay
source_title: "The man behind Claude Code says you're comparing AI costs to the wrong thing"
source_date: 2026-06-09
captured_date: 2026-06-12
domain: [ai-native, founder-operator]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_underfund-deliberately]
raw_ref: ""
---

# Comparing AI tool costs to software subscriptions produces a misleading ROI case; the right benchmark is what an engineer would have billed

## Claim
ROI evaluations for AI coding tools systematically undervalue them because buyers compare subscription cost to other software subscription costs. The correct benchmark is the engineering labor the AI replaces. Compared to that, the economics flip.

## Mechanism
Finance teams and buyers are conditioned to evaluate software cost against other software cost. A $200-500/month AI coding tool looks expensive next to a $30/month SaaS product. But the work AI does is labor, not software. A developer who uses AI to rewrite a codebase across programming languages in six days is replacing work estimated at one full engineer-year. Comparing the tool's monthly cost to that labor cost produces a very different ROI. The wrong benchmark is baked into how evaluation frameworks were built, not into actual value delivered. Changing the comparison point changes the decision.

## Conditions
Holds when: the work the AI does would otherwise be done by a paid engineer, and that work can be estimated in time or cost.
Fails when: the AI does work that no one would have paid an engineer to do (speculative exploration, drafts that never ship), or when the AI functions as a research or search tool rather than a production labor tool.

## Evidence
Cherny cites a specific case: a developer who rewrote an entire codebase across programming languages in six days. Cherny estimates that work at one full engineer-year.

> "Compare it to what the cost would have been if an engineer had done this work."

## Signals
- Your org optimizes AI tool costs by limiting token usage before tracking work output per token.
- Finance compares AI subscriptions to software line items rather than labor line items.
- Teams with the highest AI spend also report the highest output-per-engineer ratios.

## Counter-evidence
The labor-replacement framing works cleanly for output a specific engineer would have been paid to produce. It is harder to apply when AI enables entirely new categories of work that would never have been commissioned at human labor rates, or when the output is exploratory and never ships. Cherny's six-day rewrite example is unusually clean; most AI-assisted work involves shorter loops where the labor-replacement calculation is less direct.

## Cross-references
- `ins_underfund-deliberately`: the deliberate underfunding strategy requires trusting AI to absorb work that headcount would have done, which is the same logic applied to hiring decisions.
