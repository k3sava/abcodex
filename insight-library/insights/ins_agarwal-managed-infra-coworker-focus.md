---
id: ins_agarwal-managed-infra-coworker-focus
operator: Paridhi Agarwal
operator_role: Engineer, Every
co_operators: []
source_url: https://every.to/source-code/why-we-handed-our-agent-s-infrastructure-to-anthropic
source_type: essay
source_title: "Why We Handed Our Agent's Infrastructure to Anthropic"
source_date: 2026-10-08
captured_date: 2026-10-10
domain: [engineering, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: case-study
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 4 }
tier: B
related: []
raw_ref: ""
---

# Small teams building production agents should cede infrastructure to a managed platform so they can stay focused on coworker behavior

## Claim
Every migrated from a self-hosted fleet of personal agents to a single shared agent on Anthropic's Claude Managed Agents (CMA). The migration let them stop maintaining uptime, token refresh, and crash recovery, and redirect all engineering attention toward the Slack threading, permissions, and shared memory that define the coworker experience.

## Mechanism
Self-hosted agent fleets distribute infrastructure responsibility across the product team. Every's previous "Plus One" model ran a personal agent per user. Each instance could crash, lose authentication, or require individual uptime monitoring. That maintenance surface scaled with user count, not with product features.

CMA separates the problem into two layers. Anthropic owns the brain (the model plus the execution harness) and the hands (computer use plus integrated tools). Every owns the coworker layer: the behavior, the Slack context, the permission model, the shared memory of past decisions.

> "We wanted to build a coworker, not run an infrastructure team."

That architectural split changes what the product team actually builds. Infrastructure bugs become Anthropic's responsibility. Every's engineers only touch the layer where user-facing behavior lives.

A secondary security consequence follows from the split: the agent operates without storing credentials.

> "The agent never holds a password or access token."

## Conditions
Holds when: the team is small (under 15 engineers), the agent behavior is the product differentiation, and infrastructure maintenance is pulling engineers away from user-facing work.

Fails when: the team requires multi-model routing (CMA only runs Claude), needs zero-data-retention guarantees, or has a large enough platform team to absorb infrastructure ownership.

## Evidence
Paridhi Agarwal published the engineering post-mortem on October 8, 2026. Every had been running a self-hosted personal agent fleet before the migration. The post details the maintenance burden that motivated the move and names the three trade-offs they accepted: Claude-only model routing, no ZDR, and vendor lock-in at the level of months to rebuild.

> "The limitation we feel most is that CMA only runs Claude."

The post does not provide before/after metrics on engineering time. The mechanism is structural rather than quantified.

## Signals
- Engineer time shifted from infrastructure incidents to product behavior work after migration
- Agent operates without credential storage, which simplifies security review
- Single shared agent architecture simplifies per-user debugging (one instance to inspect rather than N)
- Team accepted vendor lock-in consciously rather than discovering it late

## Counter-evidence
CMA lock-in is real. Every acknowledges it would take months to rebuild on a different platform. Teams with strong multi-model routing requirements, regulated data-retention policies, or the capacity to staff a platform team may find the managed trade-off unfavorable. Agarwal does not compare CMA against other managed agent platforms (OpenAI Assistants, Google Vertex Agent Builder). The case-study covers one company at one scale.

## Cross-references
- (none in current corpus)
