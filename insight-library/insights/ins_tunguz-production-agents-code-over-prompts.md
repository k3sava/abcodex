---
id: ins_tunguz-production-agents-code-over-prompts
operator: Tomasz Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/how-to-automate-inbound/
source_type: essay
source_title: "How to Automate Inbound"
source_date: 2026-10-06
captured_date: 2026-10-07
domain: [ai-native, gtm, sales]
lifecycle: [automation, ai-workflow]
maturity: applied
artifact_class: workflow
score: { originality: 4, specificity: 5, evidence: 4, transferability: 5, source: 5 }
tier: A
related: [ins_tunguz-ai-sdr-workflow-first]
raw_ref: ""
---

# Production AI agent workflows run 65% deterministic code; a prompt that grows past 1,000 lines is a signal to replace it with explicit rules

## Claim
At production scale, AI inbound agent workflows should route roughly 65% of decisions through deterministic code and only 14% through LLM inference. When a prompt exceeds ~1,000 lines, that is a signal to replace the accumulated logic with explicit rules.

## Mechanism
Probabilistic inference is expensive and unreliable for decisions that have clear categorical answers. Routing logic ("is this lead qualified?", "does this email fall in bucket A or B?") does not benefit from model judgment. It needs repeatability and auditability.

When teams let a prompt handle routing logic, the prompt grows. A 125-line starting prompt written by a top SDR grew to 1,000 lines at Vercel before the team replaced it. At that scale, a prompt becomes harder for a model to follow consistently, and edge cases multiply.

Replacing routing logic with deterministic rules compresses cost, removes variability, and makes the agent auditable. The model's job narrows to genuine judgment: the ambiguous minority of interactions where language and context actually matter.

## Conditions
Holds when: the workflow has identifiable categorical decisions that repeat; the team has enough production data to write explicit rules for the major buckets; inference cost matters at the target volume.
Fails when: the workflow handles open-ended, context-dependent interactions where rules cannot capture the variation space; the team lacks operational data to define rules up front; the product is too early to have stable routing categories.

## Evidence
Vercel's inbound automation, observed and published by Tunguz October 6, 2026. The agent workflow started with a 125-line prompt written by a top SDR. It grew to 1,000 lines before the team rebuilt it as 14 explicit deterministic rules. Production state at time of writing: 65% pure code nodes, 14% fully agentic nodes. Annual inference cost: ~$1,000.

> "The model shouldn't get to decide, we just want that to occur. So now actually, our inbound is 14 rules."

> "We kicked it off in June, kept human in the loop from our top SDRs, & by August pulled the human out."

## Signals
- Your team edits a prompt repeatedly to handle edge cases that keep slipping through
- Prompt length has grown past 500 lines and latency or cost is rising
- Agent behavior becomes inconsistent on inputs that should have categorical answers
- A rule-rewrite of the same logic produces more stable outcomes at lower cost

## Counter-evidence
This architecture assumes a workflow with stable, definable routing logic. Inbound sales for a product with clear ICP is a good fit. Enterprise sales with complex multi-stakeholder dynamics, or early-stage teams that have not yet codified their workflow, are out of scope. The 65%/14% split is from one well-resourced company with high inbound volume. Over-indexing on rules can make a system brittle when market conditions change and the rules need updating.

## Cross-references
- `ins_tunguz-ai-sdr-workflow-first`: codifying the best human workflow is the prerequisite step; this card covers what the production architecture looks like once that workflow is captured.
