---
id: ins_willison-llm-app-least-privilege
operator: Simon Willison
operator_role: Co-creator of Django; creator of Datasette
co_operators: []
source_url: https://simonwillison.net/2026/Nov/4/datasette-apps/
source_type: essay
source_title: "Datasette Apps"
source_date: 2026-11-04
captured_date: 2026-11-11
domain: [engineering, ai-native]
lifecycle: [ai-workflow, process]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_willison-agent-attack-tooling-fingerprint, ins_willison-agent-dri-accountability]
raw_ref: ""
---

# LLM-generated apps should be scoped to named stored queries only, with write access requiring explicit human approval at creation time

## Claim
LLM-generated data applications are safer when scoped at creation time to named stored queries the app was explicitly granted, with any write-capable queries requiring a separate human approval step before the app can run them.

## Mechanism
An LLM writing application code will reach for whatever data access is available. Without explicit constraints at the architecture level, generated code can read or modify data beyond the intended scope, either through hallucinated table names, overly broad queries, or prompt injection in live data. Willison's design for Datasette Apps solves this by inverting the default: the app can only call stored queries the creator named when building the app. The agent validates at app-creation time that every referenced query exists and is viewable. Write queries require an additional approval step from the human operator. The app never gains ambient access to the database; it gains access only to named, pre-vetted operations.

This is least-privilege applied at the generation boundary. The LLM generates the app against a constrained surface. Even if the generated code attempts to exceed scope, the architecture does not permit it.

## Conditions
Holds when: the application can be described as a set of named operations on known data. The named-query constraint works because the data access surface is finite and can be enumerated.

Fails when: the app requires ad-hoc query construction or the user queries are fundamentally unpredictable. Some applications need dynamic query generation; those require a different security model. Also does not address prompt injection in the app's own UI inputs after deployment.

## Evidence
Willison shipped Datasette Apps as a tool that lets users build small data applications through LLM-driven code generation. The design constraint he published November 4, 2026: apps reference stored queries by name; the agent validates at creation time that each referenced query exists and is viewable; write queries require explicit approval. The intent is to prevent LLM-generated code from accidentally accessing or modifying data outside the intended scope.

The design reflects a pattern Willison has applied across his agentic work: treat the LLM as a code generator operating against a surface you define, not a trusted agent operating against a surface it discovers.

## Signals
- LLM-generated data tools connecting to databases with broad read permissions: a surface that this design narrows.
- Teams discovering LLM-generated code querying tables the developer did not intend to include.
- Security reviews of LLM-integrated applications finding that scope constraints were left to prompt engineering rather than architecture.

## Counter-evidence
The named-query constraint only protects read and write paths that go through Datasette's stored query layer. Applications with their own database connections, or those that use ORM queries generated at runtime, fall outside this model. The approval step for write queries also requires that the human approver understands what a query does, which is not guaranteed. Willison's implementation is specific to Datasette; teams using other data tooling need to design equivalent least-privilege constraints for their stack.

## Cross-references
- `ins_willison-agent-dri-accountability`: Willison's consistent theme across cards: define the surface the agent operates against, make boundaries explicit in the architecture, require human approval for consequential actions.
- `ins_willison-agent-attack-tooling-fingerprint`: Threat framing: prompt injection via live data is an attack vector this design partially mitigates by limiting what queries can run.
