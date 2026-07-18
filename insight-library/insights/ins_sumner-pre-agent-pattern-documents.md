---
id: ins_sumner-pre-agent-pattern-documents
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
artifact_class: playbook
score: { originality: 3, specificity: 5, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_sumner-adversarial-reviewer-pairing]
raw_ref: ""
---

# Creating pattern-mapping documents before a large agentic migration gives parallel agents a shared reference that reduces per-file inference errors

## Claim
Creating pattern-mapping documents before beginning a large-scale agentic codebase migration gives agents a shared reference, reducing per-file inference errors and producing consistent outputs across parallel instances.

## Mechanism
When 64 agents work on different files simultaneously, each instance independently infers the mapping rules it was not given. Those inferences diverge. Inconsistent mappings produce inconsistent code. Sumner's team wrote two reference documents before code generation started: PORTING.md mapped Zig-specific patterns to their Rust equivalents, and LIFETIMES.tsv cross-referenced Zig ownership patterns against Rust lifetime annotations. Every agent instance received these documents as context. The result is that pattern inference happened once, by humans, before the run. Agents applied the mapping rather than re-deriving it, which reduced the divergence across 535,000 lines of ported code.

## Conditions
Holds when: the migration has identifiable recurring patterns that can be enumerated in advance; a human familiar with both source and target language can write the mapping before agents begin; the agents can receive the documents as context.
Fails when: the source language is too idiomatic for pattern enumeration to be tractable; the mapping is discovered during migration rather than before it; or agent context windows are too small to include the reference alongside the file being ported.

## Evidence
Sumner documented the Bun-in-Rust migration in a July 8, 2026 essay. PORTING.md and LIFETIMES.tsv were created before code generation began and distributed to all 64 concurrent agent instances. The migration completed in 11 days with 6,502 commits across 535,000 lines of Zig ported to Rust, a rate that would be impossible with per-file human review. The pattern documents are cited as a direct contributor to the consistency that made that rate achievable.

## Signals
- Agents produce structurally consistent code across files without repeated corrective prompting.
- Pattern documents grow shorter over time as edge cases are resolved and added.
- Post-migration diff shows common patterns handled uniformly rather than idiomatically per instance.

## Counter-evidence
The technique assumes someone on the team knows both source and target well enough to write the mapping before agents start. For teams porting to an unfamiliar language, the pattern document itself becomes a learning artifact that cannot be completed in advance. Sumner's team had deep Zig and Rust expertise. The approach may not generalize to migrations where the target language is new to the team.

## Cross-references
- ins_sumner-adversarial-reviewer-pairing: the adversarial reviewer pairing used during the same migration, which caught bug categories that pre-migration pattern documents did not prevent.
