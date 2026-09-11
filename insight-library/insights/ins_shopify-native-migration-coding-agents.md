---
id: ins_shopify-native-migration-coding-agents
operator: Jason Kim
operator_role: Mobile engineer, Shopify
co_operators: [Quique Fagoaga, Max Da Silva]
source_url: https://shopify.engineering/shop-app-migration
source_type: essay
source_title: "Migrating Shop app from React Native to native"
source_date: 2026-09-10
captured_date: 2026-09-11
domain: [engineering-ai-eng, ios-app-craft, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: case-study
score: { originality: 4, specificity: 5, evidence: 5, transferability: 3, source: 4 }
tier: B
related: [ins_agents-erased-cross-platform-advantage]
raw_ref: ""
---

# One engineer with coding agents proved a native mobile migration feasible in one week

## Claim
One engineer, using coding agents to port a React Native app to native SwiftUI, demonstrated in one week that a full feature-for-feature migration was achievable. A team of six completed the full migration in twelve weeks, reducing iOS startup by 23%, Android startup by 50%, and cutting Android app size by 109 MB.

## Mechanism
Coding agents are most effective when they have an existing implementation to work from. Given a React Native screen or component, agents can port defined features, scaffold new screens, wire up data, implement animations, and iterate on layouts from visual feedback. This means migration work becomes a supervision task, not a translation task. Engineers run multiple parallel agent sessions across separate git worktrees instead of one engineer making a change, running the app, and iterating.

## Conditions
Holds when: the source codebase is well-structured and the migration target platform has strong tooling (SwiftUI, Kotlin). Fails when: the source code is poorly documented, heavily custom-framework-dependent, or the agent lacks access to visual feedback loops for layout refinement.

## Evidence
The Shopify Shop app migration was completed by a core group of six engineers over twelve weeks, with feature teams joining afterward. The proof of concept was a one-week solo effort.

> "Agents were particularly effective when they had an existing implementation to work from. They ported defined features, scaffolded screens, wired up data, implemented animations, and refined layouts based on visual feedback."

> "Rather than having one developer make a change, run the app, and iterate, we now often run multiple agent sessions across separate worktrees."

Quantified results: iOS startup time fell 23%. Android startup time fell 50%. Session stability improved to 99.95%+ (a 10x reduction in crashes). Android app size dropped 109 MB (37.2% reduction). Android build time fell 75%.

## Signals
- Agent sessions produce working native screen implementations from existing cross-platform screens within the same sprint
- Migration velocity is high enough for one engineer to prove feasibility in days rather than weeks
- Post-migration performance metrics improve measurably across startup, crash rate, and binary size

## Counter-evidence
The case study assumes a capable existing React Native implementation as the agent's reference. Teams migrating from a poorly-architected codebase or one with significant custom native modules may not achieve the same translation fidelity. The six-engineer core team still required platform expertise to review and extend agent output.

## Cross-references
- ins_agents-erased-cross-platform-advantage: the first-principles reasoning behind why Shopify made this decision, with the mechanism for why coding agents change the cross-platform cost calculus.
