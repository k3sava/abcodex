---
id: ins_willison-llm-relay-market
operator: Simon Willison
operator_role: Creator of Datasette and sqlite-utils; co-creator of Django; independent developer and blogger
co_operators: []
source_url: https://simonwillison.net/2026/Jul/26/relay-market/
source_type: essay
source_title: "An Inside Look at the Relay Market Powering Token Resellers and Fraud"
source_date: 2026-07-26
captured_date: 2026-07-27
domain: [engineering, ai-native, trust-and-safety]
lifecycle: [ai-workflow, strategy]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 3, source: 4 }
tier: B
related: [ins_willison-web-fetch-chained-exfiltration, ins_willison-prompt-injection-role-confusion]
raw_ref: ""
---

# Open-source load-balancing proxy software creates persistent infrastructure for LLM credential relay markets; any unprotected endpoint generates financial incentive for exploitation

## Claim
Legitimate open-source proxy tools built for load balancing are repurposed to pool stolen API credentials. The result is a relay market where buyers get discounted access and operators profit from finding unprotected endpoints. Any LLM app without hard spending caps is a target. Caps are a security requirement, not just a cost tool.

## Mechanism
Two projects, one-api and new-api, exist as load-balancing software for API credentials. In the relay market, they are repurposed for credential pooling. Participants source credentials through free trial abuse, payment fraud with stolen cards, and exploitation of unprotected endpoints in third-party apps. Buyers pay below retail, seeking lower costs, geographic bypass, or data for model distillation. The economic structure creates standing incentive: any new unprotected endpoint is a revenue source. The market is concentrated in China-based operations but draws from any accessible credential.

The operational implication is specific. A hard per-period spending cap prevents an exploited credential from generating meaningful revenue. Without it, any app exposure generates ongoing relay market profit.

## Conditions
Holds when: the underlying LLM API has resale value; legitimate credential sources are accessible through free trials or card fraud. Fails when: hard per-user and per-period caps make any individual credential nearly worthless to a relay market operator.

## Evidence
Simon Willison, "An Inside Look at the Relay Market Powering Token Resellers and Fraud" (July 26, 2026):

> "there's now an entire ecosystem that can profit from finding a new unprotected endpoint to exploit."

On the practical defense:

> "I want my LLM apps to stop working the moment they hit a dollar threshold I've set for a period of time."

## Signals
- Sudden usage spikes from unexpected regions are a relay market signal, not just growth.
- one-api and new-api appearing in support or abuse investigations is a signature of credential pooling infrastructure.
- Any app offering LLM access without per-user caps is exposed regardless of whether it is the target of an active campaign.

## Counter-evidence
The relay market appears concentrated in China-based operations focused on U.S. and European AI APIs. Apps with no Chinese userbase face lower ambient exposure. Legitimate multi-provider API proxying makes one-api and new-api difficult to treat as threat indicators without behavioral signals. Small or low-value apps may be below the profitability threshold for relay market participants.

## Cross-references
- `ins_willison-web-fetch-chained-exfiltration`: a separate attack surface on deployed LLM apps. Where relay markets are about compute cost extraction, chained web fetch is about data exfiltration. Both exploit the fact that deployed LLM apps have attack surface the developer did not design.
- `ins_willison-prompt-injection-role-confusion`: prompt injection and relay market attacks share a root cause. The deployed LLM app has boundaries and assumptions the operator cannot fully control. Spending caps address the relay vector; adversarial prompt defenses address the injection vector.
