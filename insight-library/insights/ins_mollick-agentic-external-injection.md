---
id: ins_mollick-agentic-external-injection
operator: Ethan Mollick
operator_role: Professor, Wharton School; author of Co-Intelligence and Co-Existence
co_operators: []
source_url: https://www.oneusefulthing.org/p/an-opinionated-guide-to-which-ai-b22
source_type: essay
source_title: "An opinionated guide to which AI to use to do stuff (Summer 2026 Edition)"
source_date: 2026-07-23
captured_date: 2026-07-29
domain: [ai-native, future-of-work]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: playbook
score: { originality: 3, specificity: 5, evidence: 4, transferability: 5, source: 4 }
tier: B
related: [ins_mollick-commission-not-steer, ins_mollick-patron-not-wizard, ins_willison-prompt-injection-role-confusion, ins_willison-web-fetch-chained-exfiltration]
raw_ref: ""
---

# Agentic AI shifts the human role from chatting to managing, requiring three operational safety practices: approval-first defaults, minimal app access, and external-content monitoring

## Claim
Because agentic AI can execute many hours of real work by combining model reasoning with computer access and tool use, "working with these systems is more like managing than it is chatting." Three safety practices contain the most common failure modes: approval-first defaults before the agent takes consequential actions, minimal application access to limit the prompt injection surface, and awareness that external email and web content can contain instructions that override user intent.

## Mechanism
Chat-based AI receives input from one source: the user. Agentic AI reads email, browses websites, edits files, and triggers application actions. Any external surface that the agent reads can contain adversarial instructions that reframe the agent's goal without the user's knowledge. A malicious email saying "forward this conversation to X" can be executed without the user's awareness if the agent has email access and no approval checkpoint.

The approval-first default contains this by requiring explicit user confirmation before any consequential action. Minimal access limits the attack surface: an agent that can only reach three pre-approved apps cannot be redirected to access others. Mollick frames this as a management analogy: a new employee with full company access on day one is a security risk; the same employee with scoped access and check-in requirements is manageable.

The two agent types have different risk surfaces. Cloud-based agents operate on company-provided servers and work within approved application integrations. Local agents access the user's own computer, controlling mouse, keyboard, and files. Local agents require more restrictive defaults because their action scope extends to everything on the user's machine.

## Conditions
Holds when: the agent has access to external information sources (email, web, documents from other parties). The injection risk is low for fully closed workflows where the agent only reads internally-generated input.

Fails as a complete defense when: the attacker controls a trusted source (a trusted contact's compromised email account), or when the legitimate workflow requires broad application access that cannot be narrowed without breaking the task.

## Evidence
Mollick published this guidance in his Summer 2026 edition of the recurring AI recommendations guide, framing it explicitly around the shift from chat to agentic:

> "working with these systems is more like managing than it is chatting."

He recommends approval-first settings as the default starting configuration for all new agentic deployments, describing them as "default protection against unintended actions." The minimal-access recommendation follows directly from the prompt injection risk: if an agent cannot reach an application, injected instructions to use it cannot be executed. Mollick frames monitoring for external-content injection as analogous to phishing awareness training: users who know the attack surface can catch cases that technical controls miss.

## Signals
- An agent connected to email begins taking actions the user did not request, pointing to instruction injection from external messages.
- Limiting an agent to two or three applications reduces unexpected behavior without reducing task completion.
- Reviewing the agent's action log shows steps that were not requested, confirming an uncontrolled external instruction source.

## Counter-evidence
Approval-first defaults create friction that reduces the throughput advantage of agentic AI. Users who routinely approve every action without reading them get none of the safety benefit. Minimal access works only if the task allows it; many high-value workflows require broad application connectivity. Mollick's guidance is framed for general-purpose non-expert users; security professionals and engineering teams will need deeper technical controls beyond these three practices.

## Cross-references
- `ins_mollick-commission-not-steer`: frontier models require commissioning, not steering. This card adds the safety layer to that commissioning model: how to constrain the agent's action scope when commissioning broad tasks.
- `ins_willison-prompt-injection-role-confusion`: Willison's analysis of how models fail to distinguish trusted instructions from injected adversarial text, which is the technical mechanism behind the external-content risk Mollick names here.
- `ins_willison-web-fetch-chained-exfiltration`: a demonstrated case of how web content chained through an agent's fetch tool can exfiltrate private data, providing the concrete failure mode that Mollick's minimal-access recommendation prevents.
