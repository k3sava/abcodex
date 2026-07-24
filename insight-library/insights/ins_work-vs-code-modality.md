---
id: ins_work-vs-code-modality
operator: Ethan Mollick
operator_role: Professor, Wharton School; author of Co-Intelligence and Co-Existence
co_operators: []
source_url: https://www.oneusefulthing.org/p/an-opinionated-guide-to-which-ai-b22
source_type: essay
source_title: "An opinionated guide to which AI to use to do stuff"
source_date: 2026-07-23
captured_date: 2026-07-24
domain: [ai-native]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 2, transferability: 4, source: 4 }
tier: B
related: [ins_agent-computer-to-use]
raw_ref: ""
---

# Work-mode agents return a finished output; Code-mode agents expose the working process

## Claim
Work/Cowork agents return a finished product for you to review; Code/Codex agents show you the files changed, commands run, and tests performed, making the working process itself the reviewable artifact.

## Mechanism
Work and Cowork run on company servers and optimize for a finished end product: a presentation, analysis, or organized file collection. Code and Codex run locally on your machine and expose every intermediate step, producing a commit history, test log, and command transcript alongside the deliverable. Local execution also enables multi-file projects across longer sessions. The choice determines what you are able to audit: you judge the result in Work mode; you audit the process in Code mode.

## Conditions
Holds when:
- You need a reviewable output with no interest in the intermediate steps: Work/Cowork.
- The task involves code, multi-file changes, or test execution where the process itself must pass inspection: Code/Codex.
- Compliance or audit requirements demand a record of what changed, not just the final state: Code/Codex.

Fails when:
- Code/Codex's local execution environment lacks the tools or dependencies the task requires.
- You have Code mode's process transparency but do not review the intermediate steps, making the visibility pointless.

## Evidence
Work/Cowork: "you ask for a presentation, analysis, or organized collection of files, and the agent returns something for you to review."

Code/Codex: "expose the work itself: the files being changed, commands being run, tests being performed, and a detailed record of the changes." They "run on your computer rather than company servers," enabling "more complex multi-file projects over longer periods."

## Signals
- Work mode: you review and accept or reject the finished artifact.
- Code mode: you read the commit diff and test output before merging or deploying.
- You can say in one sentence why you chose the modality for each delegated task type.

## Counter-evidence
The Work/Code modality split is a current-generation product distinction, not a permanent architectural one. Future agentic systems may merge both postures. The meaningful decision may eventually reduce to scope of output and depth of audit, not which product you open.

## Cross-references
- `ins_agent-computer-to-use`: the broader frame for why agents run differently from chatbots and why the process vs. output question arises.
