---
id: ins_sumner-parallel-adversarial-agent-rewrite
operator: Jarred Sumner
operator_role: Creator of Bun JavaScript runtime; software engineer at Anthropic
co_operators: []
source_url: https://bun.com/blog/bun-in-rust
source_type: essay
source_title: "Rewriting Bun in Rust"
source_date: 2026-07-08
captured_date: 2026-07-09
domain: [engineering, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: case-study
score: { originality: 4, specificity: 5, evidence: 5, transferability: 3, source: 4 }
tier: B
related: [ins_willison-cross-model-review, ins_mollick-14h-agent-run-cost, ins_mollick-commission-not-steer]
raw_ref: ""
---

# Parallel adversarial reviewer agents compressed a 960K-line language migration into 11 days at $165K by eliminating shared-blind-spot failure modes

## Claim
Running separate Claude agent instances as adversarial reviewers alongside implementers compressed a 960,000-line Zig-to-Rust rewrite into 11 days at roughly $165,000 in API costs, a task Jarred Sumner estimated would have required a team of engineers a year.

## Mechanism
The adversarial reviewer pair breaks the shared-blind-spot problem. An implementer agent produces code and commits. A separate reviewer agent reads the same code with fresh context, no generation-phase priors, and a prompt that asks it to find bugs. The reviewer catches errors the implementer overlooked because it was not conditioned by the generation choices.

A conformance test suite with 1.386 million assertions across all platforms provides an objective correctness compass at every step. Agents cycle: implement, test, adversarial review, fix, commit. The test suite passes or fails deterministically; neither the implementer nor the reviewer can hallucinate a passing result.

Work is distributed by crate, file, or error type across 64 simultaneous instances running in four separate worktrees. Distribution prevents any single instance from accumulating context drift across a million-line codebase. Peak output reached 58 commits in one minute.

## Conditions
Holds when: a comprehensive, language-agnostic test suite already exists and covers the behavior being ported; tasks can be decomposed by crate or file boundary; one human can monitor agent outputs and redirect on failures without reviewing every commit.
Fails when: no conformance test suite exists (agents cannot self-evaluate correctness); the codebase has untestable implicit invariants; or the refactor requires design judgment that cannot be specified in a brief.

## Evidence
> "This Rust rewrite would've taken a team of engineers...a year of work. With 1 engineer using Fable & closely monitoring Claude Code, we went from start to 100% of the test suite passing on all platforms in 11 days."

Key metrics: 6,502 commits; peak 58 commits in one minute; 1,300 lines of code per minute at peak; net diff of +1,009,272 lines; approximately $165,000 at API pricing; 5.9 billion uncached input tokens and 690 million output tokens.

Three bugs caught by adversarial review that the implementers missed: (1) use-after-free in async pipe closure handling; (2) negative timestamp handling producing invalid timespec values; (3) eager evaluation in `unwrap_or` for color-mix percentages.

## Signals
- Reviewer agents flag distinct error categories from what implementers self-reported.
- The test suite serves as the ground truth across all parallel branches.
- Commit rate is measurable in commits per minute rather than story points per sprint.

## Counter-evidence
The Bun rewrite was unusually tractable: it had a mature, platform-agnostic test suite; a clear functional equivalence target; and one engineer deeply familiar with the original codebase who could monitor and redirect. Most software projects lack these conditions. The $165K cost is also non-trivial; at non-Max API pricing, similar tasks require explicit budget approval and scope management.

## Cross-references
- `ins_willison-cross-model-review`: Willison's practice of having a competing provider review code generalizes the adversarial-reviewer principle at a smaller scale.
- `ins_mollick-14h-agent-run-cost`: Mollick's 14-hour autonomous run at $251 establishes the lower-cost end of the same pattern; the Bun rewrite is the large-scale case.
- `ins_mollick-commission-not-steer`: the commissioning frame (set the goal, review the result) is the operating mode Sumner used: one engineer monitoring, agents executing.
