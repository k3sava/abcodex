---
id: ins_johnston-holtz-agentic-skills-diffusion
operator: Drew Johnston
operator_role: Researcher, OpenAI
co_operators: [David Holtz]
source_url: https://arxiv.org/abs/2606.26959
source_type: research
source_title: "Agentic AI at Work: Evidence from a Large-Scale Deployment"
source_date: 2026-06-25
captured_date: 2026-06-30
domain: [ai-native, engineering, future-of-work]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: case-study
score: { originality: 4, specificity: 5, evidence: 5, transferability: 4, source: 5 }
tier: B
related: []
raw_ref: ""
---

# Agentic AI spreads beyond engineering into legal and research roles when skills-sharing lowers the adoption floor

## Claim
Agentic AI tools diffuse rapidly across non-engineering knowledge work when skills, meaning shareable workflow templates, exist to reduce the prompt-engineering barrier. Without skills, adoption stays concentrated in the roles that built the tool.

## Mechanism
Engineers adopt agentic tools first because they can construct effective prompts from existing technical context. Skills encode that prompt engineering work into reusable templates that non-technical users can deploy without understanding the underlying mechanics. Once skills exist, the adoption floor drops: a legal professional or researcher can trigger a complex agentic workflow by selecting a template rather than writing from scratch. Organizational diffusion then follows the skills catalog rather than individual technical capacity.

## Conditions
Holds when: shareable workflow templates exist and are discoverable by non-technical users. Works best in organizations with mixed-function teams where at least one technical person can author skills that others consume. Measurable within a quarter of deployment.

Fails when: the agentic tool lacks a skills or template layer, forcing every user to construct prompts independently. Also slower in highly regulated environments where workflow templates must pass legal review before distribution.

## Evidence
Johnston and Holtz studied Codex deployment across OpenAI's own workforce from December 2024 through early 2026, covering engineering, legal, research, and general knowledge workers:

- Total Codex users grew 5 times during the first half of 2026.
- Legal staff produced 13 times more output tokens per user.
- Researchers produced 50 times more output tokens per user.
- Codex usage in 8-hour-complexity tasks grew 10 times.
- 26.6% of active users used the skills functionality, and this cohort drove the majority of cross-functional diffusion.
- Codex largely replaced ChatGPT as the default AI tool for non-engineering roles inside OpenAI.

The researchers found that skills-sharing was the key mechanism separating roles that scaled rapidly from roles that plateaued at initial adoption levels.

## Signals
- Agentic tool usage in legal and research roles rises after skills are published by engineering or product teams.
- A small cohort of power users authoring skills precedes a broader wave of adoption.
- Output tokens per user grows faster than user count, indicating depth of use rather than shallow adoption.

## Counter-evidence
This study covers a single organization (OpenAI), which is not a typical knowledge-work firm. OpenAI staff are unusually AI-literate, which may lower the skills-authoring barrier beyond what most organizations can achieve. The 50x researcher output metric reflects tokens, not task quality or business outcomes; more tokens do not automatically mean better research. The diffusion pattern may not replicate in organizations where skills must pass compliance or legal review before they can be shared.

## Cross-references
- (none in current corpus)
