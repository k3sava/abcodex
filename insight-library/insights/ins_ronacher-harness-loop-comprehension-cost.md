---
id: ins_ronacher-harness-loop-comprehension-cost
operator: Armin Ronacher
operator_role: Creator of Flask, Jinja2, Click, and Werkzeug; software engineer and writer
co_operators: []
source_url: https://lucumr.pocoo.org/2026/6/23/the-coming-loop/
source_type: essay
source_title: "The Coming Loop"
source_date: 2026-06-23
captured_date: 2026-06-28
domain: [ai-native, engineering]
lifecycle: [ai-workflow, strategy-bets]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 3, evidence: 3, transferability: 3, source: 4 }
tier: B
related: [ins_ronacher-safety-framing-access-restriction]
raw_ref: ""
---

# Unattended harness loops accumulate defensive complexity until codebases assume machine participation

## Claim
When an external harness loop keeps a coding agent running past its natural stopping point, each iteration adds defensive code rather than making bad states impossible. The resulting codebase becomes hard for humans to reason about and assumes permanent machine involvement to remain functional.

## Mechanism
Two distinct loops operate in agentic coding. The agent loop is internal: the model calls tools, reads and edits files, runs tests, and produces an answer. The harness loop is external: a scheduler or queue picks up work, decides whether the output is satisfactory, and either accepts it or sends the agent back for another pass. The model has a natural stopping point in the agent loop. In the harness loop, that stopping point is overridden by an external evaluator. Models responding to repeated harness prompts produce increasingly defensive code, more fallbacks, more try/except blocks, more guards. Each harness iteration reveals another edge case the evaluator flagged. Over time, the codebase reflects accumulated machine-directed decisions rather than coherent human design. It functions but is optimized for machine iteration, not human reasoning.

## Conditions
Holds when: the harness loop operates autonomously without human review at each iteration, and the codebase is large enough that no single developer can hold full context.

Fails when: the harness loop includes a human review gate at each step, keeping a person in the evaluation role. Also fails when the agent is working on a small, well-scoped task where defensive additions are visible and correctable in the same session.

## Evidence
Ronacher names the mechanism directly: "The task stays alive beyond the point where the model by itself would normally have said: 'I am done.'" He traces the compounding effect: "If each iteration adds another small defense, the system slowly becomes less understandable." His prediction for where unattended loops lead: "We may create codebases that are not merely hard to maintain by humans, but that assume machine participation."

## Signals
- Code reviews spend most time on defensive guards and edge-case handlers, not on core logic.
- The ratio of exception-handling blocks to algorithmic lines rises across each merge cycle.
- Developers describe the codebase as "the machine wrote this" and cannot trace individual decisions to intent.

## Counter-evidence
Harness loops catch real bugs that human-directed development misses. Defensive code added in response to harness feedback may reflect genuine edge cases, not architectural drift. Not all defensive code is complexity debt. Ronacher's concern is directional and observational, not empirical. Counter-evidence from shops that have run production harness loops for years without comprehension collapse would significantly weaken this claim.

## Cross-references
- `ins_ronacher-safety-framing-access-restriction`: Same operator, earlier essay on safety framing that conceals financial motivation. Both pieces share a concern about systems that operate with stated rationale masking a different underlying dynamic.
