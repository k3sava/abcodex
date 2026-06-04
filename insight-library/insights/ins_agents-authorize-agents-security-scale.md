---
id: ins_agents-authorize-agents-security-scale
operator: Jonathan Jaffe
operator_role: Chief Information Security Officer, Lemonade
co_operators: []
source_url: https://tomtunguz.com/jonathan-jaffe-office-hours-post-event/
source_type: recap
source_title: Security in the Age of AI Agents
source_date: 2026-05-28
captured_date: 2026-06-04
domain: [ai-native, engineering]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 3 }
tier: B
related: [ins_wasm-sandbox-agent-code-execution]
raw_ref: ""
---

# At agent scale, security governance must shift from humans approving humans to automated agent-identity and policy systems

## Claim
When AI agents multiply into the thousands, human-gated approval can no longer scale; security teams must instead build agent-identity systems where each agent carries a unique identity, and automated policy governs what each agent can authorize at the point of action.

## Mechanism
Human approval gates assume a human is available to review each decision. At agent scale, the number of agent-to-agent interactions exceeds any human review capacity. The right model mirrors how zero-trust networking moved from perimeter-level policy to per-resource policy: each agent gets a cryptographically verifiable identity and automated policy runs at the point of action rather than through a human approval queue. Attackers who compromise one agent's identity gain only that agent's permissions, limiting blast radius. Security practitioners shift from approving requests to engineering the automated policy platform that agents operate within.

## Conditions
Holds when: the organization runs multiple AI agents that interact with each other or with external systems; the interaction frequency exceeds human review capacity; and the security team has the engineering capability to build agent-identity infrastructure.

Fails when: there are only a handful of agents with narrow, predictable interactions that humans can still realistically gate; or the regulatory environment requires documented human sign-off on each agent action.

## Evidence
> "The future of security isn't humans gating humans — it's agents authorizing agents."
· Jonathan Jaffe, CISO Lemonade, via Tomasz Tunguz, https://tomtunguz.com/jonathan-jaffe-office-hours-post-event/, 2026-05-28

> "Every agent needs to have an identity...you need a way to control policy for all of these agents."
· Jonathan Jaffe, ibid.

> "Automation is the only way you can deal with the scale of what's coming at us now."
· Jonathan Jaffe, ibid.

## Signals
- Security teams tracking per-agent identity and per-agent action logs rather than per-human approval records.
- Policy engines running at API call time rather than through asynchronous human review queues.
- Each agent in the system has its own credential set that can be independently audited or revoked.

## Counter-evidence
Automated agent-authorization creates new attack surfaces: compromising one agent's identity grants everything that agent can authorize. Human approval gates, however slow, provide a second line of defense that pure agent-to-agent authorization bypasses. The model also assumes the identity system is itself secure, which adds a new critical dependency. Teams that move to agent-authorizing-agent before their identity infrastructure is hardened increase risk rather than reduce it.

## Cross-references
- `ins_wasm-sandbox-agent-code-execution`: complementary agent security pattern; WASM sandboxing handles code-execution risk, agent-identity handles authorization risk.
