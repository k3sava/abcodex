---
id: ins_credential-injection-proxy
operator: Cat Wu
operator_role: Head of Product, Claude Code and Co-work, Anthropic
co_operators: []
source_url: https://simonwillison.net/2026/Jul/21/cat-and-thariq/
source_type: talk
source_title: "A Fireside Chat with Cat and Thariq from the Claude Code team"
source_date: 2026-07-21
captured_date: 2026-07-28
domain: [agentic-coding, ai-native, security]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: workflow
score: { originality: 3, specificity: 5, evidence: 4, transferability: 4, source: 5 }
tier: B
related: [ins_willison-prompt-injection-role-confusion, ins_willison-web-fetch-chained-exfiltration, ins_claude-tag-proactive-pr-rate]
raw_ref: ""
---

# Proxy injection of credentials at request time lets agents make authenticated calls without ever holding sensitive tokens

## Claim
Coding agents running production automation need authenticated access to internal services, but granting an agent stored credentials creates exfiltration risk. A proxy-injection pattern resolves the conflict: credentials are never stored by or accessible to the agent. The proxy intercepts outbound requests and injects credentials at transit time. The agent can use the credentials for the specific request but cannot read them.

## Mechanism
The agent constructs an API request to an internal service. The request passes through a credential proxy. The proxy validates the request, appends the required credentials, and forwards it to the target service. The agent receives the API response. At no point does the agent have access to the credential value itself.

The key asymmetry is between usability and accessibility. The agent can use the Datadog API because the proxy makes the credential available downstream. The agent cannot access (read, copy, forward) the credential because the proxy holds it, not the agent. An agent compromised via prompt injection cannot exfiltrate credentials it never held.

## Conditions
Holds when: the agent's requests can be routed through a controllable proxy layer; the proxy has its own authentication to the credential store (a secrets manager or key management service); the target API accepts credentials injected at the HTTP layer.

Fails when: the agent needs real-time credential values for multi-step handshakes where the proxy cannot intermediate; or when the credential itself is embedded in the response payload that the agent reads as part of its normal operation.

## Evidence
Cat Wu, describing Anthropic's identity and credential management system for Claude Code at the AI Engineer World's Fair fireside chat, July 21, 2026:

> "the Datadog credentials are only usable by the agent but not accessible by the agent — we insert them on the fly when the agent tries to make a Datadog request"

## Signals
- Agent workflows access authenticated APIs without storing secrets in system prompts or environment variables visible to the model
- Audit logs show the agent making API calls to internal services, but the agent's context contains no credential material
- Prompt injection attacks on the agent produce no credential values in exfiltrated output

## Counter-evidence
Proxy-injection adds latency and infrastructure complexity. For high-frequency tool calls, the round-trip through a credential proxy introduces measurable overhead. The proxy itself becomes a high-value target: compromise of the proxy exposes all credentials it manages simultaneously. The pattern also assumes the agent's outbound requests can be routed through a proxy layer, which does not hold in all execution environments.

## Cross-references
- `ins_willison-prompt-injection-role-confusion`: related security failure mode where prompt injection exploits a different trust boundary.
- `ins_willison-web-fetch-chained-exfiltration`: an exfiltration chain that credential injection directly mitigates by removing the credential from the agent's reachable context.
