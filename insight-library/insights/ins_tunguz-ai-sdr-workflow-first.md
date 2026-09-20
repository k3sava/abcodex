---
id: ins_tunguz-ai-sdr-workflow-first
operator: Tomasz Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/single-digit-thousand-dollar-ai-sdr/
source_type: essay
source_title: "When Inbound Sells Itself"
source_date: 2026-09-15
captured_date: 2026-09-20
domain: [ai-native, gtm, sales]
lifecycle: [automation, growth-loops]
maturity: applied
artifact_class: workflow
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 5 }
tier: A
related: []
raw_ref: ""
---

# Codifying the best human workflow before deployment is the critical bottleneck for AI inbound sales agents, not model capability

## Claim
AI inbound sales agents achieve their reported ROI only when the full workflow of the company's best human rep is documented, encoded into deterministic sequences, and validated in shadow mode before any headcount is removed.

## Mechanism
Shadow your top inbound rep across every interaction: every step, every tool call, every branching decision. Encode those steps as a deterministic agent workflow. Run the agent alongside the human in shadow mode. Validate until the agent exceeds 90th-percentile human performance on the same leads. Only then pull the human out.

The mechanism behind this discipline: generative AI agents can construct plausible responses to inbound leads from general training, but "plausible" is not the same as "the best response your company has earned through iteration." Without capturing what your best rep actually does, the agent approximates a generic playbook. With the full workflow encoded, the agent inherits and can exceed that accumulated best practice. The bottleneck is always workflow quality, not model capability.

## Conditions
Holds when: the company has a working inbound lead flow with at least one strong rep whose workflow is repetitive enough to observe and document; shadow-mode validation is possible at the actual inbound volume; the company can tolerate a validation period before reducing headcount.

Fails when: the workflow is highly variable across reps, deals, or market segments and cannot be meaningfully codified; inbound volume is too low to generate reliable shadow-mode signal; the role depends on relationship capital or judgment that cannot be encoded deterministically.

## Evidence
Vercel case study cited by Tunguz. Outcome after applying this methodology: 90% of inbound sales development automated, 32x ROI on the sales development agent, and a team reduction from 10 people to 1.25 people at a single-digit thousands annual infrastructure cost.

> "We had 90% automation of sales development for inbound. And our support agent that we've home-built handles 93% of all support cases…"
>
> Jeanne DeWitt Grosser, COO of Vercel

## Signals
- Agent response quality meets or exceeds your top human rep in shadow-mode testing before go-live
- Inbound lead response times drop to near-instant with no decline in qualification rate
- SDR headcount reduction happens by attrition or reassignment, not by degraded pipeline quality
- Infrastructure cost is a fraction of the prior SDR team budget

## Counter-evidence
This approach works specifically for well-defined inbound workflows. Enterprise sales cycles with complex multi-stakeholder dynamics and high relationship dependency are out of scope. A company that has not yet optimized its human SDR workflow cannot capture that process in agent form; the agent amplifies whatever exists, including bad practice. The 32x ROI figure is a single case study from a well-resourced, high-inbound-volume company. Results in lower-volume or less-structured inbound environments are unverified.

## Cross-references
- (none in current corpus)
