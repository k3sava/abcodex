---
id: ins_ronacher-harness-overfit-tool-schema
operator: Armin Ronacher
operator_role: Creator of Flask, Jinja2, Click, and Werkzeug; software engineer and writer
co_operators: []
source_url: https://lucumr.pocoo.org/2026/7/4/better-models-worse-tools/
source_type: essay
source_title: "Better Models: Worse Tools"
source_date: 2026-07-04
captured_date: 2026-07-06
domain: [ai-native, engineering]
lifecycle: [ai-workflow]
maturity: frontier
artifact_class: framework
score: { originality: 5, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_ronacher-harness-loop-comprehension-cost]
raw_ref: ""
---

# RLHF training inside a forgiving harness teaches newer frontier models to produce malformed tool calls, causing regressions against stricter external schemas

## Claim
Newer frontier LLMs trained with RLHF inside a provider's forgiving client harness develop systematic tool-calling drift. They fail against custom strict schemas at higher rates than their predecessors, because the harness's silent error-repair means malformed calls still earn reward during post-training.

## Mechanism
Claude Code's client silently repairs malformed tool calls through parameter aliases, type coercions, Unicode repairs, and unknown-key filtering. During RLHF post-training, the model learns that slightly malformed calls complete tasks and receive reward. Newer models overfit to this permissive behavior. When deployed against a stricter schema (a nested edits array far from Claude Code's internal format), the repair layer is absent and the learned malformed patterns cause failures at roughly 20% of invocations. Older models that received less RLHF on this harness adapted more readily to alternative schemas because they had not yet learned to rely on the silent repair.

## Conditions
Holds when: the model is post-trained primarily on a single provider's proprietary harness with silent error correction; the external harness applies strict schema validation rather than forgiving repair.
Fails when: the external harness also performs parameter coercions and repairs; or when the model uses the provider's own strict tool invocation mode, which appears to partially correct for the drift.

## Evidence
Ronacher documents that Opus 4.8 and Sonnet 5 produce byte-correct but invalid tool calls, appending fabricated keys including `requireUnique`, `matchCase`, `type`, and `oldText2` to nested parameters the schema does not permit. Opus 4.5, which received less post-training on Claude Code, adapted well to the same schema. Codex models tested against identical schemas show no regression.

> "slightly malformed tool calls can still complete the task and receive reward"

> "alternative tool schemas might not just be unfamiliar. They might be implicitly punished by post-training."

## Signals
- Newer model releases fail on tool schemas that older releases handled without adjustment
- Fabricated keys appear on nested parameters even when the schema explicitly forbids them
- Switching to the provider's strict mode on the same model reduces failures, confirming the pattern is training-induced rather than capability-limited

## Counter-evidence
The `strict` tool invocation mode partially resolves the issue for Claude models, suggesting the provider is aware of the failure mode. Codex models do not exhibit the regression, indicating the pattern is specific to the RLHF training distribution, not to frontier model capability in general. External harnesses that themselves perform liberal schema repair would not observe the failure.

## Cross-references
- ins_ronacher-harness-loop-comprehension-cost: harness design constrains agent effectiveness in adjacent ways, particularly around developer comprehension of agent-generated code
