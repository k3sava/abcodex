---
id: ins_agents-erased-cross-platform-advantage
operator: Mustafa Ali
operator_role: Mobile engineer, Shopify
co_operators: []
source_url: https://shopify.engineering/back-to-native
source_type: essay
source_title: "Native is now the future of mobile at Shopify"
source_date: 2026-09-10
captured_date: 2026-09-11
domain: [engineering-ai-eng, ios-app-craft, ai-native]
lifecycle: [ai-workflow, strategy]
maturity: frontier
artifact_class: case-study
score: { originality: 5, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_shopify-native-migration-coding-agents]
raw_ref: ""
---

# Coding agents erased the cost advantage of cross-platform mobile frameworks

## Claim
Coding agents made separate native codebases cheaper to maintain than a single shared cross-platform codebase, reversing the economic case that drove Shopify to React Native in 2020.

## Mechanism
The original argument for cross-platform frameworks rests on one assumption: writing code once is cheaper than writing it twice. Coding agents break that assumption. They handle implementation, translation, testing, and review between platforms. What previously cost two full-stack developer workflows now costs one developer directing agents across two worktrees. The per-platform maintenance premium disappears. Once the cost premium disappears, the native side of the trade-off dominates: faster startup times, smaller app sizes, full access to platform-specific capabilities, no framework abstraction layer to fight.

## Conditions
Holds when: coding agents are capable enough to port, scaffold, wire, and test platform-specific code with minimal human review. Fails when: the agent quality is insufficient for platform-specific APIs, or the team lacks native platform expertise to review agent output for correctness.

## Evidence
Shopify adopted React Native in 2020 to avoid duplication across iOS and Android. By late 2025, agents were handling enough implementation, translation, and review work that maintaining two codebases no longer cost more than maintaining one.

> "LLMs changed one of the core assumptions behind our 2020 decision, so we reevaluated our mobile stack from first principles."

> "agents can now do enough of the implementation, translation, testing, and review work that it's no longer the deciding factor it was in 2020."

## Signals
- Agent sessions produce working native platform code from cross-platform implementations without full rewrites
- A single engineer with agents can maintain a native codebase previously requiring a dedicated platform team
- Build times, app size, and startup performance measurably improve after moving from the abstraction layer to native

## Counter-evidence
Cross-platform frameworks retain the advantage for teams without native platform expertise or when agent output quality is insufficient for platform-specific APIs. Teams with small user bases may not see the performance gains justify the migration cost. The trade-off inverts again if model quality stagnates.

## Cross-references
- ins_shopify-native-migration-coding-agents: the Shopify Engineering case study showing the concrete migration result, quantified performance gains, and the agent-assisted proof-of-concept timeline.
