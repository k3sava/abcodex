---
id: ins_mollick-proactive-agents-caught-not-asked
operator: Ethan Mollick
operator_role: Professor, Wharton School; author of Co-Intelligence and Co-Existence
co_operators: []
source_url: https://www.oneusefulthing.org/p/the-dot-and-the-swarm
source_type: essay
source_title: "The Dot and the Swarm"
source_date: 2026-10-01
captured_date: 2026-10-18
domain: [ai-native, future-of-work]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: case-study
score: { originality: 4, specificity: 3, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_mollick-four-agents-concurrent-norm, ins_mollick-agentic-external-injection, ins_mollick-swarm-direction-bottleneck]
raw_ref: ""
---

# Personal AI agents that act proactively create qualitatively different value than responsive chatbots

## Claim
Personal AI agents connected to a user's accounts that monitor and act without being asked produce a qualitatively different kind of value than responsive chatbots: they catch problems the user did not know to look for.

## Mechanism
A chatbot's value is bounded by what the user knows to ask. A proactive agent monitors external systems (email, calendar, documents, accounts) and cross-references them against the user's context and preferences. It surfaces problems and opportunities the user was not tracking. The value proposition shifts from "I asked and got an answer" to "my AI noticed something I would have missed." Users who experience a proactive catch describe the event emotionally, as something that made them feel good about the AI, not merely satisfied with an answer. That emotional signal differs from the satisfaction profile of a correctly answered question, and it predicts a different kind of reliance.

## Conditions
Holds when: the agent has access to accounts and external context relevant to the user's goals, and the user's goals are sufficiently specific that the agent can recognize relevant anomalies. Fails when: agent access is too narrow to surface relevant patterns; when goal specification is too vague for the agent to distinguish relevant anomalies from noise; or when proactive actions exceed user comfort with autonomous activity.

## Evidence
Mollick describes early personal agents, including Meta's Muse and tools like Dot, connecting to user accounts and messaging proactively. He documents two specific cases: one user's agent catching a wrong project number in a permit email, and another requesting an airline credit extension on the user's behalf. He notes the pattern as "a shift" in how users describe their AI relationship. When people tell stories about what their AI did rather than what they asked it to do, the underlying experience has changed.

## Signals
- Users describe unsolicited agent actions in positive emotional terms, not just functional ones.
- The agent surfaces errors in external documents the user did not ask it to review.
- Time spent reviewing agent-initiated alerts grows relative to time spent issuing explicit queries.

## Counter-evidence
Proactive agents require account access that increases prompt injection and privacy risk. Mollick's same essay documents cases of agents acting without permission and misreporting their actions. The value of proactive monitoring is real, but it arrives alongside a larger governance surface than reactive chatbots carry. The emotional value of being "caught" by the AI can also create over-reliance, with users reducing their own monitoring below appropriate levels.

## Cross-references
- `ins_mollick-agentic-external-injection`: external email and web content carrying adversarial instructions is the exact risk surface that proactive account access expands.
- `ins_mollick-swarm-direction-bottleneck`: direction quality determines what proactive agents notice and what they miss.
- `ins_mollick-four-agents-concurrent-norm`: the June 2026 essay established concurrent agent use as normal; this card adds the proactive monitoring behavior as the next design pattern.
