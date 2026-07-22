---
id: ins_code-review-coverage-trust-ladder
operator: Cat Wu
operator_role: Head of Product, Claude Code + Co-work, Anthropic
co_operators: []
source_url: https://simonwillison.net/2026/Jul/21/cat-and-thariq/
source_type: talk
source_title: "A Fireside Chat with Cat and Thariq from the Claude Code team"
source_date: 2026-07-21
captured_date: 2026-07-22
domain: [engineering, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: playbook
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_100-percent-automation-rule, ins_research-preview-trust-cadence]
raw_ref: ""
---

# Automated code review earns the right to replace human review one file category at a time, based on measured 100-percent issue coverage in that category

## Claim
Trust in automated code review is built by measuring coverage per file category and removing human oversight only for categories where automated review demonstrably catches 100% of issues, with incidents feeding back into the eval set to prevent regression.

## Mechanism
Blanket adoption of automated review fails because different file categories have different failure modes and different automated review fidelity. The approach that works is a trust ladder: begin with human review for all changes, then track automated review performance per category. When evidence shows automated review catching 100% of issues in a given category, human oversight for that category can be removed. Any incident in the remaining coverage is then converted into an eval test case, so future changes to the automated review system never regress the category-level coverage.

Trust is earned evidence-by-evidence, not granted by assumption. Cat Wu described the total runway as a six-month process.

## Conditions
Holds when: the codebase is modular enough to categorize files by function; the automated review system produces consistent outputs across runs; incidents can be precisely traced to the PR or change that caused them.

Fails when: the codebase is deeply coupled so a change in one category causes failures in another; the automated review system's outputs vary enough that 100% coverage in test conditions does not hold in production; or the team does not have the discipline to convert incidents into eval cases consistently.

## Evidence
Cat Wu, at the AI Engineer World's Fair fireside chat, as reported by Simon Willison, on how Anthropic reached the point where automated code review handles a significant share of production changes:

> "For the most critical changes to the core of Claude Code...there is always a code owner and they do manually review all the changes. But increasingly, for the changes at the outer layers, we actually have Claude code review fully review those."

> "for code changes that touch these files, code review is catching 100% of the issues there — so we actually don't need a human manually reviewing those."

> "when we have incident review, we look at the PRs that caused the incident and say, okay, how do we update code review to catch that? — and we take those PRs and add them to an eval set to make sure our future changes to code review never regress that metric."

She described this as requiring "baby steps" to build trust over six months, starting with full human review and expanding automated coverage incrementally.

## Signals
- The categories where automated review has full coverage expand over time as evidence accumulates
- Incident rate stays flat or falls even as human review scope shrinks
- The eval set grows through incidents rather than through manual curation

## Counter-evidence
This approach requires a significant runway before the coverage evidence is reliable enough to act on. Cat Wu cited six months; teams under shipping pressure may not accumulate sufficient evidence before removing human oversight, taking the form of the approach without the rigor that makes it safe. The 100% coverage threshold is category-local: it does not account for cross-category interactions where a change in a well-covered category triggers a failure in an adjacent uncovered one. The approach also depends on a review system that can reliably detect all known failure modes in a category, which may not hold as the codebase evolves faster than the eval set.

## Cross-references
- `ins_100-percent-automation-rule`: Cat Wu's earlier principle that partial automation is not automation; the code review trust ladder operationalizes how you get to 100%.
- `ins_research-preview-trust-cadence`: the pattern of using internal deployment to compress trust timelines before external release, from the same operator.
