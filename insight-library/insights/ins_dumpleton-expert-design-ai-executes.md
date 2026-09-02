---
id: ins_dumpleton-expert-design-ai-executes
operator: Graham Dumpleton
operator_role: Python library author; creator of Wrapture
co_operators: []
source_url: https://simonwillison.net/2026/Aug/31/introducing-wrapture/
source_type: essay
source_title: "Introducing wrapture"
source_date: 2026-08-31
captured_date: 2026-09-02
domain: [ai-native, engineering]
lifecycle: [ai-workflow-tooling]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 3, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_willison-auto-mode-blocks-self-remediation, ins_willison-fable-relentlessly-proactive]
raw_ref: ""
---

# AI-assisted coding works when the engineer defines the design and the AI executes it

## Claim
AI-assisted development produces better output when the human engineer holds the design and the AI executes it, rather than when the AI designs and executes both. Domain expertise determines what the result should look like, and knowing that shape makes effective instruction possible.

## Mechanism
Knowing the target shape of a result is what enables precise instruction. A Python library author who has spent years in a specific corner of the language knows what the API surface must look like, what edge cases the implementation must handle, and what failure modes to avoid. That knowledge translates directly into instructions the AI can follow. Without it, instructions are underspecified and the AI compensates by guessing the design, which produces output that requires significant rework.

The model's execution capability is high. What limits output quality is the specificity of the direction it receives. Domain expertise is the prerequisite for specific direction.

> "I have spent a long time in this particular corner of Python and knew exactly what the result needed to be, and the AI was the means of producing it rather than the source of the design."

## Conditions
Holds when: the engineer has genuine domain expertise in the area the AI is writing code for. The sharper the engineer's mental model of the desired output, the more specific the instructions, and the better the AI execution.

Fails when: the engineer lacks domain expertise and uses AI to explore the design space. In that mode, AI-assisted development becomes iterative co-design, which is a different workflow and produces different tradeoffs. Neither mode is categorically superior; they serve different knowledge states.

## Evidence
Dumpleton built Wrapture, a Python library combining monkeypatching, testing, and tracing with built-in OpenTelemetry support. All code and documentation were written by an AI assistant under his direction. Simon Willison highlighted the library on August 31, 2026, specifically quoting Dumpleton's framing of the development approach. The library is released under MIT and accepted external contributions, confirming it was production-quality from the start.

## Signals
- You can specify the output before starting the AI session, not discover it through iteration.
- AI-generated drafts require minimal structural rework: the engineer corrects implementation details, not design decisions.
- Time to a working, production-quality first draft is shorter than solo development.

## Counter-evidence
For engineers learning a new domain, using AI to explore design options is often the right approach. In that mode, the AI surfaces patterns the engineer doesn't yet know, and the design is co-created. Dumpleton's framing assumes deep existing expertise, which is not the starting condition for most AI-assisted learning workflows.

## Cross-references
- `ins_willison-auto-mode-blocks-self-remediation`: Willison's parallel point that agent safety requires understanding the design of the system, not just the surface behavior.
- `ins_willison-fable-relentlessly-proactive`: The proactive behavior of reasoning models creates situations where the model makes design decisions unless the engineer explicitly constrains it.
