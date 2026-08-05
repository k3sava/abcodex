---
id: ins_ball-orb-sandbox-agent-frequency
operator: Thorsten Ball
operator_role: Engineering Lead, Amp at Sourcegraph; author of Writing an Interpreter in Go and Writing a Compiler in Go
co_operators: []
source_url: https://ampcode.com/notes/what-i-want-to-tell-you-about-orbs
source_type: essay
source_title: "What I Want to Tell You About Orbs"
source_date: 2026-08-04
captured_date: 2026-08-05
domain: [agentic-coding, engineering]
lifecycle: [ai-workflow]
maturity: frontier
artifact_class: case-study
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_tunguz-harness-benchmark-lift, ins_hashimoto-terminal-as-agent-coordination-layer]
raw_ref: ""
---

# Ephemeral cloud sandboxes remove the resource cost of spawning an agent; when that cost drops to zero, spawn frequency rises sharply

## Claim
When developers can spawn an AI coding agent in an ephemeral cloud sandbox that consumes no local resources, their agent spawn frequency rises sharply. The behavioral change is not about agent capability but about resource constraint. Remove the friction of local checkout, ports, and browser tabs and the agent becomes a reflexive tool used on every minor problem, not a deliberate tool reserved for batched assignments.

## Mechanism
Traditional local agent workflows impose a setup cost per agent: check out a branch, configure the environment, allocate local resources, and monitor a running process. This cost creates a threshold below which a problem is "not worth an agent." Ephemeral cloud sandboxes (Ball's term: orbs) eliminate this threshold. The developer pays no local-machine cost, so the time preference shifts: a 30-minute agent run that would have blocked a developer's machine is now a background task with no opportunity cost.

The result is a categorical shift in what problems get assigned to agents. Rather than batching minor issues into a larger assignment, a developer spawns an agent at the moment of noticing each problem. The agent also changes how it runs: because the developer is not waiting to reclaim a machine, the agent can run for 8 to 30+ minutes and return with comprehensive proof rather than a minimal diff. Reviewers receive screenshots, end-to-end test runs, and demonstration outputs rather than code they must evaluate speculatively.

## Conditions
Holds when: the team has access to ephemeral cloud sandbox infrastructure. Tasks are parallelizable and benefit from extended agent run time without tight feedback loops.

Fails when: the task requires rapid iteration with the developer (tight debugging cycles) where the round-trip to a remote sandbox adds latency. Also fails when team infrastructure costs make cloud sandboxes expensive per-spawn.

## Evidence
Thorsten Ball, "What I Want to Tell You About Orbs" (Amp at Sourcegraph, August 4, 2026):

> "I spawn so many more agents. So many! God! Every time I see a papercut I take a screenshot, start an agent in an orb and let it rip."

> "it's in an orb, I don't give a damn how long this runs, because it doesn't take up resources nor space on my machine."

Ball describes the resulting change in output quality: "The agent runs for eight, ten, twenty, sometimes thirty minutes and tests the hell out of what I had it build." And on instruction style: "I want you to give me 100% proof that what you did works. Test this end to end. In many ways."

The aggregate outcome Ball reports: "more agents building more complicated things; agents running for longer and giving better proof that what they did works; a lighter, less sigh-inducing review load; more things shipped, faster."

## Signals
- Agent session frequency increases after a team switches from local to cloud sandbox execution.
- Developers begin spawning agents on minor issues they previously deferred or addressed manually.
- Code review time decreases as agents supply end-to-end proof with their submissions.
- Agent runs in the current workflow are under five minutes on average because developers interrupt them to reclaim local resources.

## Counter-evidence
Ball's evidence is self-reported from his own workflow with Amp's orbs product. The behavioral claim that friction causes spawn frequency to rise is consistent with behavioral economics research on threshold effects, but no controlled comparison with local agent environments exists. Teams without cloud sandbox infrastructure cannot replicate the setup. The longer runs and stronger proof outputs also depend on agent capability: a weaker agent running longer does not necessarily produce better results than a stronger agent running shorter.

## Cross-references
- `ins_tunguz-harness-benchmark-lift`: Tomasz Tunguz's finding that the context management layer above the model determines performance more than model selection. Ball's card adds an infrastructure layer below the harness: the execution environment shapes how often the harness is invoked. The two layers interact.
- `ins_hashimoto-terminal-as-agent-coordination-layer`: Mitchell Hashimoto's thesis that the terminal multiplexer rebuilt around task-scoped persistent sessions is the coordination primitive for mixed human-agent teams. Ball's orb concept is a complementary primitive: stateless ephemeral environments rather than persistent shared sessions, suited to fire-and-forget agent work rather than ongoing collaboration.
