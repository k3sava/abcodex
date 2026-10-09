---
id: ins_mollick-cheap-coordination-expands-scope
operator: Ethan Mollick
operator_role: Associate Professor, Wharton School, University of Pennsylvania
co_operators: []
source_url: https://www.oneusefulthing.org/p/the-dot-and-the-swarm
source_type: essay
source_title: "The Dot and the Swarm"
source_date: 2026-10-01
captured_date: 2026-10-09
domain: [ai-native, leadership]
lifecycle: [process-cadence, ai-workflow]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 3, evidence: 3, transferability: 5, source: 5 }
tier: B
related: [ins_mollick-agents-self-organize, ins_mollick-commission-not-steer, ins_mollick-patron-not-wizard]
raw_ref: ""
---

# Cheap agent coordination expands the set of tasks organizations attempt rather than simply reducing headcount

## Claim
When multi-agent coordination cost drops near zero, the primary organizational effect is not efficiency on existing tasks. It is expansion of the task set: projects that were never worth starting because they were too expensive to coordinate now become worth attempting.

## Mechanism
Every organization carries a cost threshold for starting new work. That threshold is set mostly by management overhead, not by raw labor cost. Identifying who does what, maintaining communication across contributors, and tracking progress all consume time and attention before a single deliverable is produced. For speculative or exploratory projects, this coordination tax often exceeds the expected value of the work, so the project is never started.

When AI agents handle coordination autonomously, that overhead drops toward zero. The bar for starting a new project drops with it. Organizations do not just do existing work more efficiently; they attempt work they previously would not have started.

The implication is structural: headcount reduction is the wrong frame for measuring AI's organizational impact in the near term. The more accurate frame is: what projects are now worth starting that were not before?

## Conditions
Holds when: agent coordination is reliable enough to reduce management overhead without requiring extensive human oversight; the organization has a backlog of exploratory or speculative work that was deprioritized due to coordination cost; leadership understands the mechanism and deliberately expands ambition rather than defaulting to headcount reduction.
Fails when: agent coordination still requires significant human intervention, keeping overhead high; the organization has no backlog of worthwhile projects that were blocked by coordination cost alone; efficiency pressure is too severe to permit speculative work expansion.

## Evidence
Mollick's essay "The Dot and the Swarm" (October 1, 2026) frames the agent coordination claim within the economics of organizational scope:

> "When it gets cheap, the list of things worth attempting can grow."

The Navier-Stokes fluid dynamics proof by OpenAI agents (2.7 million messages, 88 hours, no human-designed management layer) is the case Mollick uses to illustrate self-organization at scale. That proof was only attempted because coordination at that scale became feasible. The task was not a cheaper version of a task that would have been attempted anyway.

## Signals
- Teams start projects they previously shelved as "too small to staff"
- Exploratory or speculative project volume increases without a corresponding headcount increase
- Product roadmaps expand in breadth without extending timelines
- The primary AI metric shifts from cost savings to new initiatives shipped

## Counter-evidence
Expansion of organizational scope can increase coordination complexity faster than agents can handle it. If organizations attempt more tasks, the aggregate management burden on human reviewers may grow even as per-task overhead falls. Mollick does not provide longitudinal data on organizational scope expansion; the claim is a theoretical inference from agent economics, not a documented pattern across organizations. The same cheap coordination that expands scope can also fragment attention across too many parallel initiatives.

## Cross-references
- `ins_mollick-agents-self-organize`: self-organized coordination is the mechanism that makes the cost drop possible; this card describes its organizational consequence.
- `ins_mollick-commission-not-steer`: when the task set expands, the commissioning skill becomes more critical; more projects means more briefs to write and more results to judge.
- `ins_mollick-selection-scarce-resource`: when production expands, selection is the constraint; cheap coordination amplifies the scarcity of taste.
