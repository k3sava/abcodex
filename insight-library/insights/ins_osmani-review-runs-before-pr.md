---
id: ins_osmani-review-runs-before-pr
operator: Addy Osmani
operator_role: Principal engineer, Claude Code, Anthropic
co_operators: [Morgan Westlee Lunt, Qing Wang]
source_url: https://claude.dev/blog/solving-code-review-at-anthropic/
source_type: essay
source_title: "How the Claude Code team does code review"
source_date: 2026-10-15
captured_date: 2026-10-17
domain: [engineering, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: workflow
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_code-review-coverage-trust-ladder, ins_cherny-code-review-next-bottleneck]
raw_ref: ""
---

# Moving code review from a post-PR gate to a continuous writing-time loop eliminates most issues before a human sees the change

## Claim
Running code review continuously during writing, not after a PR is submitted, means most bugs are caught and fixed before any human reviewer allocates time to the change.

## Mechanism
The review-after-submit model creates a sequential bottleneck: write, wait for reviewer, fix, wait again. Shifting review to run during writing removes the wait. Before a PR exists, Claude runs tests, builds, and linters and a subagent reviews the diff with fresh context. By the time a human sees the pull request, the change has already been through at least one review-and-fix cycle. The human's role narrows from bug finding to correctness verification.

The Anthropic team describes it as review running "more like spellcheck while you write." The feedback is immediate, the iteration cost is low, and the queue waiting for human attention shrinks.

## Conditions
Holds when: the automated review system is fast enough to run on each commit attempt; the review quality is high enough that authors trust and act on the feedback before opening a PR; human reviewers calibrate their expectations to a pre-reviewed diff rather than first-pass code.

Fails when: review latency is high enough that authors stop waiting and open PRs anyway; automated review quality is low (high false-positive rate trains authors to ignore it); the team ships directly to main without PR workflows.

## Evidence
Osmani, Lunt, and Wang describe the shift in the October 15, 2026 post on claude.dev:

> "Now, review runs continuously, more like spellcheck while you write. Most changes have been reviewed and fixed by Claude at least once before a human is asked to look."

> "Most review now happens before a PR exists."

After the team launched this model, the share of PRs with substantive review comments rose from 16% to 54%, mean reviews to pass fell from 2.08 to 1.32, and the share of PRs needing five or more review rounds dropped from 8.9% to 1.5%. Merged PRs more than doubled from June to September while the revert share fell by more than 40%.

## Signals
- Authors report finding and fixing issues themselves before opening a PR
- Human reviewers comment less on surface-level bugs and more on design or correctness questions
- PR round counts fall; the first-round pass rate rises

## Counter-evidence
The Anthropic numbers come from one team on one codebase, not a controlled study. The team was running Claude Code on Claude Code, which may produce atypically high quality automated review. Teams where automated review fidelity is lower may not see the same gains. The technique also requires the full CI stack running locally or fast enough to not block commit flow.

## Cross-references
- `ins_code-review-coverage-trust-ladder`: Cat Wu's trust ladder builds per-category confidence in automated review over six months. The continuous review model is what happens after that trust is earned.
- `ins_cherny-code-review-next-bottleneck`: Boris Cherny's earlier observation that code review becomes the bottleneck when coding agents speed up writing; this post is the operational answer to that prediction.
