---
id: ins_willison-ai-product-capability-opacity
operator: Simon Willison
operator_role: Creator of Datasette; co-creator of Django; prolific LLM and agentic-engineering blogger
co_operators: []
source_url: https://simonwillison.net/2026/Aug/30/understanding-chatgpt-work/
source_type: essay
source_title: "Understanding ChatGPT Work"
source_date: 2026-08-30
captured_date: 2026-08-31
domain: [ai-native, engineering]
lifecycle: [ai-workflow-tooling, strategy-bets]
maturity: frontier
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 5 }
tier: B
related: [ins_willison-web-fetch-chained-exfiltration, ins_willison-auto-mode-blocks-self-remediation, ins_willison-prompt-injection-role-confusion]
raw_ref: ""
---

# AI product pages that describe use cases rather than capabilities make security assessment impossible

## Claim
Describing an AI product by what it is FOR rather than what it can DO prevents users and security teams from enumerating the attack surface. Use-case framing is adequate for adoption decisions but insufficient for risk decisions.

## Mechanism
Security assessment requires capability enumeration: what data can this system read? What external communication channels does it have? What untrusted content can it receive? These questions cannot be answered from use-case descriptions. Willison spent significant time reverse-engineering ChatGPT Work's actual tool inventory, which includes code execution with unrestricted internet access, a headless Chrome browser with JavaScript DOM manipulation, a persistent filesystem shared across sessions, sub-agent orchestration, and scheduled prompt automations. None of this is visible from the product page.

> "OpenAI explain Work in terms of what it's for, not what it actually does."

The gap matters because it makes pre-deployment security review impossible. A practitioner reading "ChatGPT Work helps your team get more done" cannot determine whether the product creates a lethal trifecta configuration, the combination of private data access, untrusted content exposure, and external communication capability that Willison has identified as the structural condition for agent-mediated data exfiltration.

The same dynamic appears across AI products: capability opacity is the norm, not the exception. Opacity may serve product goals (reducing friction) while conflicting with security goals (enabling informed consent).

## Conditions
Holds when: the product combines data access with external connectivity and the user or buyer lacks access to technical documentation at the capability level. Applies most sharply to products marketed to business buyers who delegate deployment to IT teams without full visibility into the underlying stack.

Fails when: the vendor publishes system prompts, tool descriptions, or a capability registry. The mitigation is documentation; the problem is adoption of that documentation.

## Evidence
Willison reverse-engineered ChatGPT Work's capabilities by direct experimentation, reporting that figuring out what the product actually does "took way more work than it should have." He published the tool inventory he recovered as a public service. The lethal trifecta, his prior framework from June 2025, maps directly onto ChatGPT Work: the product combines all three elements.

> "The code execution environment can now talk to the rest of the internet"

## Signals
- You cannot answer the question "what can this AI do?" from the product page alone.
- Security review of an AI product requires hands-on testing rather than documentation review.
- Deployment approval is blocked by inability to assess data flow and external communication capability.

## Counter-evidence
Detailed capability documentation can itself create risk by giving attackers a roadmap to the attack surface. Vendors balance disclosure against exploitation. Additionally, capability descriptions may not map cleanly to user mental models, and some opacity may serve usability rather than concealment. Willison's prescription to publish system prompts is not universal practice and some vendors argue it would create more harm than transparency would prevent.

## Cross-references
- `ins_willison-web-fetch-chained-exfiltration`: a concrete example of why capability enumeration matters; the attack was enabled by a web-fetching capability users may not have known existed.
- `ins_willison-auto-mode-blocks-self-remediation`: the same ChatGPT Work product triggers Willison's trifecta concern; opacity prevents pre-deployment mitigation.
- `ins_willison-prompt-injection-role-confusion`: the structural vulnerability that capability opacity hides from buyers who cannot identify which content inputs are untrusted.
