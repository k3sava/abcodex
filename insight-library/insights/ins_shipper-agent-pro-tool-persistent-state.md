---
id: ins_shipper-agent-pro-tool-persistent-state
operator: Dan Shipper
operator_role: CEO and co-founder, Every
co_operators: []
source_url: https://every.to/vibe-check/vibe-check-duet-anthropic-s-always-on-agent
source_type: essay
source_title: "Vibe Check: Duet — Anthropic's Always-on Agent"
source_date: 2026-10-21
captured_date: 2026-10-27
domain: [ai-native, future-of-work]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 5, source: 4 }
tier: B
related: [ins_shipper-front-brief-autonomous-run, ins_mollick-conjurer-oversight-gap, ins_mollick-delegation-over-prompting]
raw_ref: ""
---

# A personal agent earns pro-tool status when it tracks its own open items and edits artifacts directly

## Claim
A personal agent crosses from a toy to a pro tool when it maintains persistent task state across sessions, organizes recurring work into channels, and edits documents in-app rather than just delivering answers.

## Mechanism
Chat-based agents operate per session and reset. The user must track what was delegated, paste outputs into documents, and re-brief the agent each time. A pro tool holds the context of what it is working on independently of any session. It knows what tasks it started, what is unfinished, and what it needs from the user next. It organizes recurring topics into separate threads so the user can monitor progress without scrolling a single chat. It edits the actual documents the user works in rather than producing text to copy. These design properties shift the agent from an on-demand question-answerer to an async collaborator with its own work queue, which is what makes delegation durable rather than one-off.

## Conditions
Holds when: the user has recurring, structured work that spans multiple days; the agent has direct access to the user's working documents and can edit them.

Fails when: the work is exploratory or one-off; a chat agent is faster for tasks that don't require persistence or document editing.

## Evidence
Shipper reviewed Anthropic's Duet in October 2026 after two weeks of daily use. He calls it "the first personal agent I'd call a pro tool." The specific features he credits: Duet sorts recurring topics into their own channels, keeps a running list of what it is working on and what it needs from him, and can edit docs, slides, designs, and dashboards and keep them current. He had previously been mostly using ChatGPT's Dot, and moved to roughly 50/50 after using Duet. The review notes real limitations: Duet cannot direct other Claude sessions it sees on his computer, and scheduled runs cannot reach custom connectors.

## Signals
- An agent that completes delegated work without the user prompting it in between.
- A user who stops maintaining their own to-do list because the agent's open-item queue is the authoritative source.
- Document edits appearing in the user's working files without a copy-paste step.

## Counter-evidence
Shipper notes Duet's limitations explicitly: it can view Claude sessions but cannot direct them, and its scheduled runs cannot use custom tool connections. The pro-tool threshold he describes is currently met by only one product in his review, which means the category is early and the bar may shift as more agents reach this design state. His view is based on two weeks of testing, not a controlled trial.

## Cross-references
- ins_shipper-front-brief-autonomous-run (proactive briefing as the entry point to async delegation; connects to how pro-tool state-tracking begins)
- ins_mollick-conjurer-oversight-gap (the conjurer mode Mollick describes requires agents with persistent state; this card names the product design that enables it)
- ins_mollick-delegation-over-prompting (delegation rather than prompting as the productive AI work mode; persistent state makes this tractable)
