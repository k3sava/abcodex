---
id: ins_chase-agent-infra-rebuild-tax
operator: Harrison Chase
operator_role: Co-founder and CEO, LangChain
co_operators: []
source_url: https://www.langchain.com/blog/managed-deep-agents-is-now-in-public-beta
source_type: post
source_title: "Managed Deep Agents is now in public beta"
source_date: 2026-08-07
captured_date: 2026-08-11
domain: [engineering, ai-native]
lifecycle: [development, production]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_chase-compound-intelligence-ownership]
raw_ref: ""
---

# The primary cost in production agent development is rebuilding the same infrastructure per project

## Claim
The main cost in production agent development is not AI capability but the repeated engineering of identical infrastructure per project: durable execution, state persistence, sandboxing, authentication, and retry handling.

## Mechanism
Each new agent project starts by rebuilding the same substrate before the team can work on actual business logic. Durable execution alone, ensuring an agent survives process crashes, network failures, and model timeouts, is a multi-week engineering task when built from scratch. Teams that route all new agent projects through shared managed infrastructure compress time-to-production from months to days. The shared layer handles the substrate; each project contributes only the agent-specific logic.

## Conditions
Holds when: team is building more than one or two production agents; agent tasks require reliable multi-step execution with state that survives failures; infrastructure work is visibly duplicated across projects.
Fails when: agents are genuinely one-shot with no state persistence needed; team is at early experimentation stage where premature standardization would constrain architecture choices; agent tasks are short enough that failure recovery is not a meaningful concern.

## Evidence
LangChain's Managed Deep Agents product, released in public beta on August 7, 2026, packages durable execution, memory persistence, skill loading, sandbox lifecycle management, and deployment into a shared runtime. The architecture reflects LangChain's observation across its user base: infrastructure rebuild cost, not AI capability cost, is what delays production agentic deployments. The blog post notes the platform handles the runtime layer so teams can focus on agent logic rather than substrate.

## Signals
- Engineering time on new agent projects skews toward infrastructure setup before any agent-specific work begins
- Multiple projects in the same organization have independently implemented identical retry and persistence logic
- Agent reliability improves substantially once infrastructure is abstracted to a shared managed layer

## Counter-evidence
Managed agent infrastructure imposes vendor dependency and may optimize for common cases at the expense of teams with unusual persistence or execution requirements. Chase has previously argued for building AI capabilities as proprietary internal compounding assets (`ins_chase-compound-intelligence-ownership`), which sits in some tension with outsourcing the infrastructure layer to a managed platform.

## Cross-references
- `ins_chase-compound-intelligence-ownership`
