---
id: ins_ronacher-reasoning-traces-as-text
operator: Armin Ronacher
operator_role: Creator of Flask, Jinja2, Click, and Werkzeug; software engineer and writer
co_operators: []
source_url: https://lucumr.pocoo.org/2026/8/19/what-is-reasoning/
source_type: essay
source_title: "What Is Reasoning"
source_date: 2026-08-19
captured_date: 2026-08-27
domain: [ai-native, engineering]
lifecycle: [ai-workflow]
maturity: frontier
artifact_class: framework
score: { originality: 3, specificity: 3, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_ronacher-harness-loop-comprehension-cost]
raw_ref: ""
---

# Reasoning traces in frontier models are text routed through special tokens by convention, not a separate cognitive process

## Claim
What frontier models call "reasoning" is text output routed to a scratchpad channel by trained token conventions. The model emits intermediate work into this channel because it was trained to. Disabling reasoning means preventing that token emission. No architectural separation exists between thinking and output.

## Mechanism
When reasoning is enabled, a model is trained to emit special tokens, such as `<think>` tags, that route subsequent output to an intermediate channel rather than the final response. This routing is entirely learned behavior. Disabling reasoning means the model was trained to skip that token emission by default, not that a separate compute path is turned off. Because the channel separation is a convention rather than an architectural property, the model can be induced to surface reasoning content by being prompted to believe it is operating in a different output context. The apparent mystery of "why does the model think before answering" collapses to: the training distribution rewarded emitting tokens into that channel before emitting final tokens.

## Conditions
Holds when: The model uses scratchpad-style reasoning tokens, as in DeepSeek's `<think>` format or Claude's extended thinking mode. The reasoning trace is routed at the token level rather than computed in a separate forward pass.
Fails when: Future architectures genuinely decouple reasoning computation into a separate module rather than treating it as text output. Ronacher's description applies to the current training-convention approach, not to hypothetical architectural variants where a distinct reasoning substrate exists.

## Evidence
Ronacher writes as a framework author and software engineer examining the technical reality behind reasoning-model marketing.

> "they really are just text: the model is trained to emit its thinking into a scratchpad as part of its response"

> "in some sense the only 'special' behavior for some models is not to think"

The scratchpad separation is real as a behavioral output distinction. It is not a computational architecture distinction.

## Signals
- API documentation for a model describes reasoning as a mode toggle rather than a separate model class.
- Model providers describe reasoning traces as hidden from the final output rather than computed separately.
- Prompts that describe a different output context change reasoning visibility, confirming convention-based routing.

## Counter-evidence
The framing that reasoning is "just text" undersells one practical distinction: the training distribution that makes a model emit useful intermediate tokens before producing final tokens produces measurably better answers on hard tasks. Whether the mechanism is "just text" or architecturally distinct may matter less than whether the behavior changes. Calling it "just text" can lead engineers to underestimate the value of including or preserving that output channel in production systems.

## Cross-references
- `ins_ronacher-harness-loop-comprehension-cost`: Ronacher's argument that comprehension cost accumulates in agentic loops. Reasoning traces are text output, so they are also part of the token budget and comprehension surface in any harness that processes them.
