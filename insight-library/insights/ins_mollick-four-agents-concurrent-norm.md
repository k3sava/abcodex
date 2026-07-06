---
id: ins_mollick-four-agents-concurrent-norm
operator: Ethan Mollick
operator_role: Professor, Wharton School; author of Co-Intelligence and Co-Existence
co_operators: []
source_url: https://www.oneusefulthing.org/p/the-twilight-of-the-chatbots
source_type: essay
source_title: "The Twilight of the Chatbots"
source_date: 2026-06-30
captured_date: 2026-07-06
domain: [ai-native, future-of-work]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: case-study
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_mollick-agent-era-favors-experts, ins_mollick-14h-agent-run-cost, ins_mollick-institutional-lag-ai-curve]
raw_ref: ""
---

# A quarter of OpenAI's workforce runs four or more AI agents simultaneously every week, marking concurrent multi-agent delegation as a normalized work pattern at leading AI companies

## Claim
At OpenAI, 25% of workers run four or more AI agents in parallel at the same time, every week. Concurrent multi-agent operation is not a specialist or experimental workflow. It is a routine practice at the frontier AI organization.

## Mechanism
Agent tools (Claude Code, Codex) are built for asynchronous operation. Unlike chatbots, which require interactive turn-by-turn engagement, agents accept an initial brief and work autonomously until the task is complete or they need input. A knowledge worker can launch four separate agents on four separate tasks simultaneously, attend to other work while the agents run in parallel, and return to review the outputs as a batch. The cognitive cost of supervision is front-loaded (task specification) and back-loaded (output review), not spread across the run. This makes parallel supervision of four or more agents feasible in ways that four simultaneous chatbot conversations would not be.

## Conditions
Holds when: tasks can be specified clearly enough upfront for autonomous execution; outputs are reviewable in batches after the run; workers have enough domain expertise to evaluate parallel outputs without reviewing each step.
Fails when: tasks require interactive mid-run guidance; workers lack the expertise to evaluate concurrent agent outputs; or when agent tools are not integrated into the work environment.

## Evidence
Mollick cites internal OpenAI data in his June 30, 2026 essay:

> "A quarter of OpenAI workers have at least four agents running at one time every week."

He frames this as evidence of the shift he calls "work is increasingly about assigning work to agents, rather than working together with chatbots."

## Signals
- Knowledge workers report managing output review queues rather than directing individual chatbot turns
- Time-tracking data shows increased concentration of AI interaction at task-setup and review phases
- Tooling at AI-native companies adds concurrent agent monitoring dashboards

## Counter-evidence
OpenAI is not a representative organization. Workers who build AI tools are early adopters by definition, and their practices lag into the broader workforce by 18 months or more historically. The 25% figure describes a floor, not a mean. Mollick does not report the median number of concurrent agents, which would better characterize typical practice at even this company.

## Cross-references
- ins_mollick-agent-era-favors-experts: why concurrent agent operation amplifies domain expert output more than novice output
- ins_mollick-14h-agent-run-cost: the time and token economics that make long autonomous agent runs practical
- ins_mollick-institutional-lag-ai-curve: why the broader workforce cannot adapt to these patterns at the pace the frontier demonstrates them
