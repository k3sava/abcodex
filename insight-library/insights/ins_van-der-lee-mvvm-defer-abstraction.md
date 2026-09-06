---
id: ins_van-der-lee-mvvm-defer-abstraction
operator: Antoine van der Lee
operator_role: Indie iOS developer; creator of SwiftLee and RocketSim
co_operators: []
source_url: https://www.avanderlee.com/swiftui/mvvm/
source_type: essay
source_title: "MVVM in SwiftUI: Using view models without overengineering"
source_date: 2026-08-31
captured_date: 2026-09-06
domain: [engineering, ios]
lifecycle: [product-development]
maturity: applied
artifact_class: playbook
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 3 }
tier: B
related: [ins_xcode27-agent-skills-portability]
raw_ref: ""
---

# Blanket MVVM adoption in SwiftUI adds abstraction overhead without added separation; defer view model extraction until specific complexity markers appear

## Claim
SwiftUI's reactive model handles state binding natively through @Observable and @State. Adding a view model class to every view duplicates what the framework already provides. Defer extraction to when a view exhibits one of four complexity markers: asynchronous workflows, state transformation logic, business validation, or testable behavior.

## Mechanism
UIKit required view models because the framework provided no native data binding. Developers who carry this pattern into SwiftUI create an additional class layer that passes data through without transforming it, adding indirection without earning it. SwiftUI's @Observable macro, combined with @MainActor for thread safety, manages data binding at the view level with no additional type required.

Van der Lee's four-marker test inverts the default assumption. Start without a view model. Extract one only when the view crosses one of the four thresholds: it needs async/await workflows that require task management; it transforms raw state before presenting it; it validates input before applying it; it needs to be tested in isolation from the view layer. Until a view hits one of these markers, the view model adds an intermediate type without meaningful separation.

The practical result: views that previously required view models can use @Observable with direct state access. Protocol-based dependency injection enables testability when it becomes necessary. Code review can flag view models that pass data through without transforming it.

## Conditions
Holds when: the team uses modern SwiftUI patterns (@Observable, @MainActor, Swift Concurrency). Requires discipline at review to distinguish complexity that warrants extraction from complexity that should be refactored out.

Fails when: team-wide consistency is the primary goal and predictable file structure matters more than per-view architectural judgment. Large teams may prefer universal MVVM overhead over case-by-case decisions. The approach also requires Swift 6.4 and @Observable support.

## Evidence
Van der Lee illustrates with working SwiftUI + Swift Testing examples showing both paths: views using @Observable without a view model, and views where the four-marker test triggers extraction. The protocol-based dependency injection pattern demonstrates testability without mandatory view model extraction.

Van der Lee acknowledges the tension directly: "Consistency remains important, but consistency does not require every view to have a view model."

## Signals
- Pull requests show view models passing data through without any transformation or validation logic
- The team struggles to test view models because they contain no extractable behavior, only data relay
- New views added without view models pass the same review bar as those with them

## Counter-evidence
Universal MVVM enforces a predictable project structure: every screen has the same file layout, reducing cognitive load when moving between features or onboarding new team members. For teams with mixed iOS experience, the consistency argument for universal MVVM often outweighs the overhead argument. Van der Lee explicitly preserves team-level consistency as a valid reason to adopt MVVM universally even where the four markers are absent.

## Cross-references
- `ins_xcode27-agent-skills-portability`: Xcode 27 agent skills operate at the behavior level; deferring view model extraction until behavior warrants it aligns with the same defer-abstraction principle
