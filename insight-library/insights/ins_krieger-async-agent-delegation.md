---
id: ins_krieger-async-agent-delegation
operator: Mike Krieger
operator_role: Head of Anthropic Labs; co-founder of Instagram
co_operators: [Dan Shipper]
source_url: https://every.to/podcast/transcript-how-anthropic-uses-claude-fable-5-with-mike-krieger
source_type: podcast
source_title: "How Anthropic Uses Claude Fable 5 with Mike Krieger"
source_date: 2026-06-10
captured_date: 2026-06-14
domain: [ai-native, engineering]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: workflow
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_mollick-commission-not-steer, ins_100-percent-automation-rule]
raw_ref: ""
---

# Running five concurrent AI sessions overnight is only possible when you stop treating the model as a chat partner

## Claim
Treating frontier AI models as async agents rather than real-time chat partners allows running five or more concurrent complex sessions at once, including overnight, with the model handling failure modes without human check-ins.

## Mechanism
Real-time chat constrains delegation to what the human can supervise synchronously. Each session waits for human input before the next step. Async delegation gives the model a complete brief and leaves it to run. When a remote service went down mid-task, the model noted the failure and scaffolded a temporary backend to continue rather than stopping and waiting. The human role becomes scoping the brief well enough upfront and reviewing the output afterward. This is how you run five or six concurrent sessions: you are not supervising any of them, you are reviewing what each one completed.

## Conditions
Holds when: tasks can be fully specified before the session starts, failure modes are recoverable, and the cost of unreviewed autonomy is acceptable.
Fails when: tasks require real-time judgment calls from the human, the context is high-stakes production where unreviewed changes carry risk, or the brief cannot be written completely before the work begins.

## Evidence
Krieger describes his daily practice at Anthropic Labs: setting complex tasks running before sleep and reviewing completed work in the morning.

> "I'll wish Claude a good night, set it off on a complex task, and wake up to find it's done"

When a dependency failed mid-task:

> "I got stuck because this remote service went down. I'll write a scaffolded backend for now"

When Krieger pushed back on an output:

> "it doesn't give an immediate knee-jerk 'yeah, that's right, I'll go fix it'—it's more, 'Let me think about that for a minute'"

He described maintaining "a lot more concurrent sessions than before" with multiple deep work sessions running in parallel. For a personal project, he "almost never" reviewed detailed code because he did not need long-term maintainability.

## Signals
- Your active session count rises because you review outputs rather than direct each step.
- Verification shifts to outcome checks rather than process supervision.
- You start writing more complete briefs because the model cannot ask clarifying questions mid-run.
- You start accepting more autonomous model decisions about intermediate steps.

## Counter-evidence
Krieger is head of Anthropic Labs using the model on personal and internal projects where the risks of unreviewed autonomy are constrained. The same async delegation pattern applied to production systems with external users carries higher risk. His note that he "almost never" reviews detailed code is practical for personal projects but would not hold in a team codebase where maintainability and review norms matter.

## Cross-references
- `ins_mollick-commission-not-steer`: Mollick's academic testing produces the same structural conclusion about commissioning from a different context.
- `ins_100-percent-automation-rule`: Anthropic's own product team standard for what counts as true automation informs the reliability floor Krieger can depend on.
