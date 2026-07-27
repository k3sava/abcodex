---
id: ins_shipper-opus5-scaffolding-reset
operator: Dan Shipper
operator_role: CEO and co-founder, Every
co_operators: []
source_url: https://every.to/vibe-check/opus-5
source_type: essay
source_title: "Vibe Check: Claude Opus 5 Is Brilliant in Flashes, Frustrating in Practice"
source_date: 2026-07-24
captured_date: 2026-07-27
domain: [ai-native, agent-frameworks, prompt-context-and-evals]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_thariq-rewrites-now-rational, ins_weng-harness-recursive-self-improvement, ins_horthy-trajectory-poisoning-reset]
raw_ref: ""
---

# Scaffolding built for a less capable model constrains a stronger one; upgrading models sometimes requires deleting the scaffold, not adapting it

## Claim
Prompts, skills, and plugins optimized for a less capable model encode the constraints that model needed but a more capable one does not. When the new model argues with instructions and stops mid-task, the scaffolding is often the bottleneck. The fix is deletion and a clean rebuild, not iteration on what exists.

## Mechanism
Less capable models need constraint-heavy scaffolding: dense instructions anticipating edge cases, plugins that enforce structure, skills that narrow the search space. Those constraints are load-bearing for the weaker model. A stronger model that can infer intent from sparse instructions still gets them applied. Because it is capable enough to recognize them as overspecified, it pushes back or stops. The user sees the model failing. The real problem is the scaffolding was written for a different capability tier.

Every's team tested Claude Opus 5 across coding, writing, knowledge work, and their internal agent. The model argued with instructions, stopped before finishing tasks, and did not work with their existing skills and plugins. Their first diagnosis was model regression. Then they deleted all existing skills and rebuilt from scratch. Without the constraint layer, Opus 5 performed substantially better.

The pattern: scaffolding built to compensate for specific model weaknesses becomes a ceiling, not a floor, when the weakness is no longer there.

## Conditions
Holds when: the scaffolding was built to compensate for specific capability gaps in a prior model, and those gaps do not exist in the new one. Fails when: the scaffolding encodes legitimate domain logic, compliance requirements, or quality guardrails that are capability-independent. Those survive model upgrades and should be preserved.

## Evidence
Dan Shipper in "Vibe Check: Claude Opus 5 Is Brilliant in Flashes, Frustrating in Practice":

> "Claude Opus 5 is brilliant in flashes and frustrating in practice—it builds strong software and grinds through bugs for hours, but its best work often requires tearing down the systems you already rely on."

From the same piece, on Every's testing experience:

> "In its first week at Every, it argued with instructions, stopped before the work was finished, and generally didn't play well with our existing skills and plugins like compound engineering."

## Signals
- When a model upgrade causes the model to argue with or stop responding to instructions, audit the scaffolding before blaming the model.
- Higher-capability models constrained by scaffolding written for a weaker generation will underperform the unconstrained version.
- Test: run the new model with zero existing scaffolding and compare output to the scaffolded version before deciding what to keep.

## Counter-evidence
Not all scaffolding is capability compensation. Scaffolding encoding policy constraints, business logic, or quality standards survives model upgrades. Deletion-then-rebuild has a real cost: accumulated institutional knowledge about what the AI should do may not survive the rebuild if it lived in the scaffolding rather than in documentation. Teams without explicit records of why scaffolding exists may lose the intent along with the code.

## Cross-references
- `ins_thariq-rewrites-now-rational`: the same logic at the codebase level. When accumulated structure fights the new approach, a clean break outperforms patching.
- `ins_weng-harness-recursive-self-improvement`: the harness between model and task is where capability is expressed. Harness mismatch across model generations is one of the seven bottlenecks Weng identifies.
- `ins_horthy-trajectory-poisoning-reset`: the session-level parallel. A conversation history that constrains the model is fixed by reset, not continued correction. Both cases share the same structure: the accumulated context has become an obstacle rather than a guide.
