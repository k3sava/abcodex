---
id: ins_willison-agents-complexity-shift
operator: Simon Willison
operator_role: Independent developer, co-creator of Django, creator of Datasette; technology journalist and blogger at simonwillison.net
co_operators: []
source_url: https://simonwillison.net/2026/Sep/24/harder/
source_type: post
source_title: "Note on 24th September 2026"
source_date: 2026-09-24
captured_date: 2026-09-28
domain: [engineering-ai-eng, agentic-coding]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 3, specificity: 3, evidence: 3, transferability: 4, source: 5 }
tier: B
related: [ins_willison-engineering-core-is-direction, ins_ball-specification-bug-era]
raw_ref: ""
---

# Coding agents shift the difficulty floor upward, leaving only the hard problems for human engineers

## Claim
Coding agents make software engineering harder in practice, not easier, because they absorb routine work and leave the remaining subset of genuinely difficult problems for the human to solve.

## Mechanism
When an agent handles boilerplate, simple debugging, and familiar patterns, the human engineer only encounters tasks the agent could not finish. The distribution of work that reaches the engineer has been filtered for difficulty. Every remaining task carries a higher cognitive load than it would without the agent. Getting full output from the agent also requires significant discipline: writing clear prompts, verifying outputs, catching subtle errors, and knowing when to intervene. The overhead of directing the agent adds to, rather than subtracts from, the engineering effort on hard problems.

## Conditions
Holds when: the engineer is using a capable coding agent regularly across a variety of tasks. The effect is most pronounced on engineers who adopt agents broadly and stop handling easy work manually.

Fails when: the engineer uses agents only for narrow, isolated tasks (e.g., documentation generation) while writing all application logic by hand. In that case, agent use does not shift the difficulty distribution of the main work.

## Evidence
Willison posted the following observation directly on September 24, 2026:

> "The more time I spend working with coding agents, the more convinced I am that they make software engineering even harder. We can do amazing things with them, but unlocking their full potential requires extraordinary discipline and knowledge."

## Signals
- Engineers report that tasks they now work on manually feel harder than tasks they handled before adopting agents.
- Code review load concentrates on harder, more ambiguous changes rather than distributing across a full range.
- Engineers who stop using agents temporarily find the easy tasks they resume feel like a relief.

## Counter-evidence
Some engineers report the opposite: agents free mental bandwidth by eliminating tedious work, making the remaining hard problems feel more tractable. The net effect may depend on the engineer's skill level. A less experienced engineer facing only hard problems could stall; a senior engineer with strong judgment may find the focused difficulty invigorating.

## Cross-references
- `ins_willison-engineering-core-is-direction`: Willison's September 27 claim that the core engineering skill of goal-definition and instruction-clarity has not changed; this card shows why that skill now carries more weight.
- `ins_ball-specification-bug-era`: Ball's observation that bugs shift to specification errors when AI handles implementation; both describe upward pressure on higher-order skills.
