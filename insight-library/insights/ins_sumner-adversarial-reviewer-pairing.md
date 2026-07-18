---
id: ins_sumner-adversarial-reviewer-pairing
operator: Jarred Sumner
operator_role: Creator of Bun JavaScript runtime
co_operators: []
source_url: https://bun.com/blog/bun-in-rust
source_type: essay
source_title: "Rewriting Bun in Rust"
source_date: 2026-07-08
captured_date: 2026-07-18
domain: [engineering, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: workflow
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_sumner-pre-agent-pattern-documents, ins_cherny-code-review-next-bottleneck]
raw_ref: ""
---

# Pairing implementer agents with dedicated adversarial reviewer agents catches bug categories that single-context review misses

## Claim
Pairing implementer agents with separate adversarial reviewer agents, each given explicit instructions to find reasons the code fails, catches bug categories that single-context code review misses.

## Mechanism
When the same context that wrote code also reviews it, the model carries forward its own assumptions and blind spots. A separate reviewer instance with no shared context and an explicit adversarial mandate approaches the code without those priors. Sumner ran 64 concurrent Claude agents during the Bun-in-Rust migration. Reviewer instances were instructed to find failures, not to confirm correctness. This framing shift produced qualitatively different review behavior: the reviewer looked for reasons to reject rather than reasons to accept, which surfaced failure modes the implementer had not modeled. Three bug categories were caught by reviewers that implementers missed entirely.

## Conditions
Holds when: parallel agent capacity is available; the codebase is large enough that no single context can hold it; code correctness matters enough to justify the compute overhead of a second pass.
Fails when: the reviewer is given the same context as the implementer, collapsing the adversarial dynamic; or when the review prompt is too general and lacks an explicit instruction to find failure modes.

## Evidence
Sumner documented the Bun-in-Rust migration in a July 8, 2026 essay. The migration ported 535,000 lines of Zig to Rust in 11 days, with 6,502 commits, 5.9 billion input tokens, and 64 concurrent Claude agents. The reviewer pairing was explicit: separate instances were instantiated specifically to find problems, not to validate. Three bug categories were caught this way that the implementer pass had not surfaced.

## Signals
- Reviewer agents return objections rather than confirmations.
- Bug counts from reviewer pass exceed zero even when implementer pass was clean.
- Distinct bug categories appear in the reviewer pass that did not appear during implementation.

## Counter-evidence
The technique requires significant compute: a second full-context pass per implementation unit at 64-agent parallelism. For smaller codebases or lower-stakes changes, a single-pass review may be sufficient. The three bug categories caught are not enumerated in the essay, so the severity and type of failures remains unspecified. It is also unclear whether the same result could be achieved by a different review prompt given to the same implementer context, or whether the separate instance is the key variable.

## Cross-references
- ins_sumner-pre-agent-pattern-documents: the pre-migration pattern-mapping documents that gave all 64 agent instances a shared reference before code generation began, complementing the adversarial review pass.
- ins_cherny-code-review-next-bottleneck: Cherny's observation that code review becomes the throughput constraint when code generation moves to AI, which the adversarial reviewer pattern directly addresses by automating the review step.
