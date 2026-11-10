---
id: ins_willison-pr-human-opener-ai-collapsed
operator: Simon Willison
operator_role: Creator of Datasette; co-creator of Django
co_operators: []
source_url: https://simonwillison.net/2026/Nov/9/details-summary/
source_type: essay
source_title: "Hide your slop PR descriptions behind <details><summary>"
source_date: 2026-11-09
captured_date: 2026-11-10
domain: [agentic-coding, engineering]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: workflow
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_willison-specialized-parser-stdlib-bottleneck, ins_ball-production-gate-replaces-pr]
raw_ref: ""
---

# A short human-written opener before a collapsed AI PR description keeps human editorial judgment visible without discarding detail

## Claim
Wrapping AI-generated PR descriptions in an HTML collapsible block, preceded by a brief human-written opener, ensures reviewers get a human-curated signal first while preserving the full AI output for anyone who wants it.

## Mechanism
Agent-written PR descriptions are accurate and dense. Reviewers see a wall of text, decide it reads like slop, and skip it. The human opener changes the first impression: it is the author's promise that they thought long enough about the PR to write a summary. The collapsed block removes the visual weight; the AI detail remains one click away. Human editorial judgment is the scarce resource; the AI description is free to generate and costs nothing to collapse. Labeling the summary block with the model name and effort level, such as "Claude Opus 5.5 Medium," also signals to reviewers that the collapsed text is AI-generated rather than a human section they missed.

## Conditions
Holds when: the team reads PRs on a platform that renders HTML, such as GitHub; the author writes a genuine opener rather than pasting an AI summary there too.
Fails when: the review platform strips HTML; the human opener is itself AI-generated, defeating the purpose; or the PR description is short enough that collapsing it adds no benefit.

## Evidence
Willison applied this pattern to his own Datasette PRs and published the technique as a blog post on November 9, 2026. His example opener for PR #3052 was a single sentence: "The row page showed its single row as a one-row table." The full AI description follows in the collapsible block. He writes:

> "I want human editorial judgement. My promise to the reader is that the short opener will represent my human judgement."

He describes agent-written PR text as "not necessarily slop, but it reads like slop!" because the density triggers the same skip response as AI content the reader has learned to distrust.

## Signals
- Reviewers report reading and acting on PR descriptions more often after the change.
- The human opener forces the author to articulate the core change before submitting, surfacing gaps before review.
- Code review comments address the substance of the change rather than asking clarifying questions about what the PR does.

## Counter-evidence
The pattern depends on the author writing a genuine, human-considered opener. If the opener is itself AI-generated, the entire benefit disappears. Willison does not address how to enforce this in a team context; it relies on individual discipline. Some reviewers may also collapse the block reflexively once they learn what it contains, reverting to the original problem.

## Cross-references
- `ins_willison-specialized-parser-stdlib-bottleneck`: adjacent thinking on narrowing a general-purpose tool to a specific input shape.
- `ins_ball-production-gate-replaces-pr`: the complementary view that agents owning most code makes post-deploy monitoring the primary quality gate, reducing reliance on PR review entirely.
