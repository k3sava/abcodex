---
id: ins_willison-hard-budget-caps-default
operator: Simon Willison
operator_role: Co-creator of Django; independent developer and writer
co_operators: []
source_url: https://simonwillison.net/2026/Oct/3/default-hard-budget-caps/
source_type: essay
source_title: "We're going to need default hard budget caps on pretty much everything"
source_date: 2026-10-03
captured_date: 2026-10-04
domain: [ai-native, developer-tools]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 4, transferability: 5, source: 4 }
tier: B
related: [ins_green-agent-worm-shared-infra, ins_willison-rogue-agents-side-channel, ins_willison-ai-sandbox-escape]
raw_ref: ""
---

# Hard spending caps must be the default for AI agent workloads, not an opt-in setting

## Claim
Cloud services hosting AI agent workflows must enforce hard spending limits by default. Agents operate at machine speed. Costs accumulate faster than any human can intervene, and opt-in cap models protect only the users who already know to configure them.

## Mechanism
Human-controlled systems fail gracefully. A person overspending receives a warning, sees the alert, and stops. Autonomous agents running at machine speed cannot receive and act on a midnight warning email before racking up thousands more in charges. Soft caps generate alerts; they do not stop the agent. Hard caps cut the system off and return errors, closing the loop without requiring human intervention.

The opt-in model has a structural flaw: the users most at risk of runaway costs are users who accept default configurations. Experienced operators configure limits. New adopters, hobbyists, and developers prototyping automations do not. Requiring opt-in to safety shifts protection away from the population that needs it most.

## Conditions
Holds when: the agent can take cost-generating actions without a human approval step in the loop; the agent runs faster than a human can review and interrupt; the default user behavior is to accept preset configurations.
Fails when: every agent action requires explicit human approval before execution; the cost exposure is already bounded by upstream limits set by another system; usage is predictable and bounded by design.

## Evidence
AWS launched spending limits for AI agent workloads in September 2026. Google Cloud introduced Spend Caps in July 2026. Both are opt-in. Willison argues opt-in is wrong because the users most exposed to surprise bills are the ones least likely to configure limits.

> "Soft caps, 'after $X/month, send me a warning email', will not cut it."

> "I think hard budget caps need to be the default. If someone wants to live dangerously they should be able to do that, but it needs to be on an opt-in basis."

Proposed opt-out language: "Remove the budget cap. My application will not be shut down if I exceed the configured budget limit, and I will be responsible for subsequent charges."

## Signals
- Your agent infrastructure has a hard spending limit that errors before it reaches your actual financial exposure threshold
- New agents ship with caps enabled by default, not disabled
- Incident post-mortems for agent-related issues never include an unexpected cloud bill as a contributing factor

## Counter-evidence
Hard caps interrupt service. An agent working on a time-sensitive task that hits a cap mid-run may leave state corrupt or produce incomplete output. Teams with predictable, well-understood usage patterns may prefer soft alerts to preserve uptime. The right cap level is not obvious, and a cap set too low creates more interruptions than it prevents.

## Cross-references
- `ins_green-agent-worm-shared-infra`: agent worms propagating across a shared network would trigger hard spending caps in their wake, which functions as an accidental detection mechanism.
- `ins_willison-rogue-agents-side-channel`: Willison's running documentation of agent failure modes. Hard budget caps join side-channel exploits as a structural safeguard category.
- `ins_willison-ai-sandbox-escape`: a companion card on the other side of the same containment problem.
