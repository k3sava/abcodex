---
id: ins_willison-agent-dri-accountability
operator: Simon Willison
operator_role: Co-creator of Django; creator of Datasette; prolific open-source developer
co_operators: []
source_url: https://simonwillison.net/2026/Jul/12/directly-responsible-individuals/
source_type: essay
source_title: "Directly Responsible Individuals"
source_date: 2026-07-12
captured_date: 2026-07-13
domain: [ai-native, engineering, leadership-org]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 3, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_mollick-commission-not-steer, ins_ronacher-harness-loop-comprehension-cost]
raw_ref: ""
---

# AI agents cannot hold the DRI role because accountability requires the capacity to own consequences, which machines lack

## Claim
AI agents should never be assigned as the Directly Responsible Individual for a project. The DRI role requires someone who can be held accountable for outcomes, and machines cannot bear accountability the way humans can.

## Mechanism
The DRI framework requires a named party who owns success or failure externally. Accountability involves more than decision-making: it includes the social, legal, and reputational capacity to answer for what was done. A machine that makes a decision cannot be fired, sued, or questioned after the fact. Assigning DRI to an agent creates a structural gap: decisions get made but no accountable party exists to own them. Willison traces this principle to a 1979 IBM training slide: "A computer can never be held accountable, therefore a computer must never make a management decision."

## Conditions
Holds when: projects carry real stakes and require someone to own failure externally. Organizations using DRI frameworks, OKRs, or RACI models.
Fails when: the "project" is a fully automated pipeline (batch job, scheduled cron) where the human who designed and deployed the system is the implicit DRI. Automation is not the same as delegating accountability.

## Evidence
Willison wrote: "An agent should never be considered the DRI for a project — that's something that feels uniquely human to me, because humans can take accountability for their actions where machines cannot."

He cites the IBM slide as precedent: "A computer can never be held accountable, therefore a computer must never make a management decision."

## Signals
- Post-mortems name human owners, not systems or agents.
- Teams report agent outputs as recommendations, not decisions.
- When an agent's output causes harm, a human accepts responsibility.

## Counter-evidence
In high-frequency automated systems (fraud detection, content moderation, algorithmic trading), machines make consequential decisions continuously with no per-decision human review. The accountability falls on the team that built and deployed the system, diffused across the organization. The DRI principle applies to project-level accountability; it does not resolve accountability diffusion in always-on automated systems.

## Cross-references
- Related to `ins_mollick-commission-not-steer`: frontier models running 9-hour autonomous projects still require a human commissioning owner, not a machine DRI.
- Related to `ins_ronacher-harness-loop-comprehension-cost`: Ronacher's concern about hands-off harnesses producing worse outcomes implies the same structural gap.
