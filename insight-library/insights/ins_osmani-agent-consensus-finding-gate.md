---
id: ins_osmani-agent-consensus-finding-gate
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
related: [ins_osmani-review-runs-before-pr, ins_code-review-coverage-trust-ladder]
raw_ref: ""
---

# Requiring multi-agent consensus before posting a code review finding cuts noise and raised substantive comment share from 16% to 54%

## Claim
Running several independent agents on the same change and requiring majority agreement before posting a finding filters false positives, so the comments that reach a human are consistently real bugs rather than noise.

## Mechanism
A single agent reviewer makes its own call on each potential issue. When it is wrong (false positive), a human must read, evaluate, and dismiss the comment, which trains authors to ignore review feedback overall. Running a panel of agents simultaneously and applying a voting threshold before any finding is posted means that only findings where multiple independent agents agree reach a human. The noise cost of acting on reviews falls, so the value-per-comment rises.

The filter runs in two stages: first, style, diagnostics, and cleanup findings are dropped before voting begins, because A/B testing showed those comments were net-negative for author behavior. Second, the remaining findings go to a separate group of agents for voting.

## Conditions
Holds when: the voting quorum is set high enough to filter genuine noise; the agents are diverse enough that one systematic error does not dominate all votes; the team measures false-positive rate and adjusts quorum based on data.

Fails when: agents share the same systematic bias and vote as a bloc on false positives; the quorum threshold is too low to filter noise; style and cleanup findings are not pre-filtered, polluting the voting pool.

## Evidence
From the October 15, 2026 post by Osmani, Lunt, and Wang:

> "Several agents look for bugs at the same time. Then a separate group votes on each finding, and it only gets posted if enough of them agree it's real."

> "Findings that are only about style, diagnostics, or cleanup get dropped. We A/B tested those filters on our own PRs before keeping them."

After launch of the research preview, the share of PRs with substantive review comments rose from 16% to 54%. Mean reviews to pass fell from 2.08 to 1.32.

## Signals
- Author complaint rate about noisy or irrelevant comments falls
- Resolve-without-fix rate on review threads drops (fewer findings authors think are wrong)
- Substantive comment share rises as a percentage of total comments posted

## Counter-evidence
The voting mechanism's false-negative rate (real bugs that fail to reach quorum) is not reported. A high quorum threshold that cuts noise may also cut genuine low-confidence findings. The system is self-reported; Anthropic has an incentive to present favorable metrics. The technique was tested on the Claude Code team's own repository, which may not generalize to codebases with different complexity profiles.

## Cross-references
- `ins_osmani-review-runs-before-pr`: Companion card from the same source. Pre-PR review and consensus gating work together; consensus gating determines what gets posted after the review runs.
- `ins_code-review-coverage-trust-ladder`: Cat Wu's trust-ladder model uses 100% per-category coverage as the bar. The consensus gate is one mechanism for getting reliable coverage within a category.
