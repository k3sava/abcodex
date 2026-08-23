---
id: ins_willison-instruction-over-review
operator: Simon Willison
operator_role: Independent developer; creator of Datasette and LLM CLI, Django co-creator
co_operators: []
source_url: https://simonwillison.net/2026/Aug/22/more-than-just-code-review/
source_type: post
source_title: "More Than Just Code Review"
source_date: 2026-08-22
captured_date: 2026-08-23
domain: [engineering, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 3, evidence: 3, transferability: 4, source: 5 }
tier: B
related: [ins_willison-agentic-cost-removes-discipline, ins_willison-confirmation-fatigue-agent-approval]
raw_ref: ""
---

# Productive use of coding agents requires confident instruction and confident verification, not granular code review

## Claim
The primary skill for working productively with coding agents is the ability to specify what you want clearly and then verify the result at the behavior level. Granular line-by-line code review is neither the bottleneck nor the right validation method.

## Mechanism
Code review was never the most effective software validation method, even before agents. With agents, the shift is explicit: the practitioner's job becomes (1) writing instructions precise enough for the agent to execute and (2) confirming at the output or behavior level that the change is correct. Neither of these is code review in the traditional sense. A developer who cannot confidently instruct will waste iterations. A developer who cannot confidently verify will ship incorrectly without knowing it. Both skills are learnable and distinct from reading generated code line by line.

## Conditions
Holds when: the agent has reliable access to the codebase and the task is scoped enough to be expressible in natural language. Holds for most routine implementation, refactoring, and test writing.
Fails when: the task requires deep knowledge of the existing codebase's invariants that cannot be expressed as instructions. Fails when verification requires running the system in an environment the developer does not control.

## Evidence
Willison published this framing on August 22, 2026 as a direct response to the framing that using coding agents requires "code review" as the primary skill. He argued that framing misses the point.

> "The key skill required to make productive use of coding agents is being able to confidently instruct them on how to make changes and then confidently verify that those changes have been applied in the correct way."

He notes that line-by-line code review has never been the optimal validation method, and that AI coding agents make the mismatch more visible because the volume of generated code far exceeds what any practitioner can usefully read.

## Signals
- Developer iteration cycles shorten: fewer rounds to get the right output from the agent.
- Bugs from agent-generated code are caught at integration or behavior testing rather than at review.
- Developers spend more time writing instructions and test cases than reading generated code.

## Counter-evidence
Some security-sensitive contexts genuinely require line-by-line review. Generated code that touches authentication, payments, or data handling may need human inspection beyond behavioral testing. Willison does not address these cases directly.

## Cross-references
- `ins_willison-agentic-cost-removes-discipline`: the companion problem. When agentic tools drop implementation cost, the time-based filter on bad decisions disappears. This card describes what discipline replaces it.
- `ins_willison-confirmation-fatigue-agent-approval`: the related challenge of approval overhead in multi-step agentic tasks.
