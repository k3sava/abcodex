---
id: ins_willison-programming-splits-system-vs-puzzle
operator: Simon Willison
operator_role: Independent developer; creator of Datasette and Django co-creator
co_operators: []
source_url: https://simonwillison.net/2026/Oct/19/my-obituary-for-programming/
source_type: post
source_title: "My obituary for programming (link post with commentary)"
source_date: 2026-10-19
captured_date: 2026-10-20
domain: [engineering, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 3, specificity: 3, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_willison-cloud-budget-caps-default, ins_willison-reliability-erodes-review-discipline, ins_ball-production-gate-replaces-pr]
raw_ref: ""
---

# LLMs split programming value between system-builders who gain and puzzle-solvers who lose

## Claim
When coding agents take over the logic-puzzle-solving part of programming, value accrues to people who thrive on building and directing working systems. For those whose satisfaction came from solving the puzzles directly, the displacement is real.

## Mechanism
Programming historically bundled two distinct activities: solving novel logic problems and assembling those solutions into working systems. Clients paid for both because non-programmers could do neither. LLMs can now competently solve many routine logic problems, removing the scarcity premium from puzzle-solving. System-building, which requires directing agents, composing components, owning production, and deciding what to build, remains a human activity. The value of programming has not disappeared; it has redistributed between two activities that used to be inseparable.

## Conditions
Holds when: coding agents can solve the category of logic problem at hand; the programmer's primary value was in writing correct logic rather than in product judgment, system ownership, or directing agents to compose large systems.

Fails when: the problem domain is so novel or specialized that current agents cannot handle it; the programmer's core contribution was already at the architectural or product layer rather than the implementation layer.

## Evidence
In a link post on October 19, 2026, Willison shared Jeremy Scheff's essay "My obituary for programming" and added his own commentary:

> "If you're someone who thrives on building working systems and doesn't care too deeply about the problems solved along the way, LLMs are the gift that keeps on giving."

> "If directly solving those problems was a big part of your enjoyment, the loss is very real."

Scheff's underlying observation, which Willison endorsed, is that programming was well-paid because non-programmers "just couldn't do it" and that the scarcity of the skill was the source of both the compensation and the autonomy.

## Signals
- Engineers who previously felt blocked by implementation complexity report higher throughput after adopting coding agents.
- Engineers who reported high intrinsic satisfaction from solving algorithmic puzzles report lower job satisfaction after widespread agent adoption.
- Teams that adopt agents without also changing how work is scoped and directed see smaller gains than expected.

## Counter-evidence
The argument assumes LLMs substitute cleanly for puzzle-solving. In practice, agents introduce new complexity: reviewing, correcting, and steering agent output requires its own skill. Some programmers who enjoyed puzzle-solving discover they enjoy that new meta-level challenge equally. The net value shift is real but not uniform across problem domains or practitioners.

## Cross-references
- `ins_ball-production-gate-replaces-pr`: Thorsten Ball's live practice at Amp, where agents own implementation and humans own direction, is the production form of this split.
- `ins_willison-cloud-budget-caps-default`: Willison on a downstream consequence of agents lowering the cost of deploying systems.
