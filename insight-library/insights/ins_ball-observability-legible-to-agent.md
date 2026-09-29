---
id: ins_ball-observability-legible-to-agent
operator: Thorsten Ball
operator_role: Engineering Lead, Amp at Sourcegraph; author of Register Spill newsletter
co_operators: []
source_url: https://registerspill.thorstenball.com/p/joy-and-curiosity-101
source_type: post
source_title: "Joy & Curiosity #101"
source_date: 2026-09-26
captured_date: 2026-09-29
domain: [engineering-ai-eng, agentic-coding]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 5, evidence: 3, transferability: 5, source: 4 }
tier: B
related: [ins_ball-agent-picks-the-language, ins_ball-specification-bug-era, ins_tunguz-systems-over-code]
raw_ref: ""
---

# When agents write code, the decisive technology selection criterion is whether failure modes are legible to the agent

## Claim
With agents as primary code authors, the decisive criterion for selecting languages and frameworks shifts from developer ergonomics to agent-legibility: how clearly the system exposes performance characteristics, resource usage, failure modes, and deployment state to external tools.

## Mechanism
Human engineers can ask questions. They can read code, search context, and request clarification. Agents cannot. Agents diagnose systems through external observation: logs, test output, error messages, and monitoring signals. A framework that produces opaque failure messages, hides internal state, or relies on implicit conventions forces the agent to guess. A framework that surfaces structured, descriptive errors, exposes runtime state to external tools, and behaves consistently under failure gives the agent the signals it needs to fix problems correctly the first time. Observability was a quality-of-life improvement when humans were the primary authors. When agents become primary authors, observability becomes load-bearing infrastructure.

## Conditions
Holds when: agents write and debug most of the code with limited human intervention between cycles. Fails when: agents are used only for initial generation and humans handle all debugging and modification, in which case developer ergonomics remain primary.

## Evidence
Ball names the dimensions explicitly:

> "performance characteristics, resource usage, failure modes, observability, debuggability, deployments, rollbacks"

He frames these as the properties that must be "legible to the agent." Systems built for human readability often fail this test: they use implicit error handling, rely on developer familiarity with internal state, and produce messages optimized for humans who can scroll context. Agent-legible systems produce structured, machine-readable failure signals at every boundary.

## Signals
- Agents consistently produce better fixes in systems with structured error output than in systems with generic exception traces.
- Teams adopting agents report rewriting logging and error handling before seeing substantial agent productivity gains.
- Frameworks that produce terse or human-context-dependent error messages require more agent retries per fix than frameworks with verbose, structured output.

## Counter-evidence
Many highly observable systems are also pleasant for human engineers to work with, so this criterion does not necessarily conflict with developer ergonomics. For greenfield work where agents are generating the observability infrastructure itself, the ordering problem is circular: a well-prompted agent can build observable systems from scratch rather than requiring the team to pre-select an observable framework.

## Cross-references
- `ins_ball-agent-picks-the-language`: the broader selection-criteria shift of which this observability criterion is the most specific and actionable dimension.
- `ins_ball-specification-bug-era`: in a world where specification bugs dominate, the verification infrastructure Ball describes here is what surfaces them early.
- `ins_tunguz-systems-over-code`: the adjacent claim that engineering bottleneck moved from generating code to designing feedback systems; agent-legibility is the property that determines whether those feedback systems actually work.
