---
id: ins_willison-reasoning-effort-nonlinear-creative
operator: Simon Willison
operator_role: Creator of Datasette; co-creator of Django; prolific LLM and agentic-engineering blogger
co_operators: []
source_url: https://simonwillison.net/2026/Sep/1/claude-fable-5-1/
source_type: essay
source_title: "Claude Fable 5.1 made me a really nice animated pelican"
source_date: 2026-09-01
captured_date: 2026-09-02
domain: [ai-native, engineering]
lifecycle: [ai-workflow-tooling, process-cadence]
maturity: frontier
artifact_class: case-study
score: { originality: 3, specificity: 5, evidence: 4, transferability: 4, source: 5 }
tier: B
related: [ins_willison-fable-relentlessly-proactive, ins_willison-qwen-reasoning-overthink]
raw_ref: ""
---

# Reasoning effort levels create non-linear quality jumps in creative tasks: low and medium skip thinking entirely

## Claim
In extended-thinking models, the relationship between reasoning effort setting and output quality is non-linear for creative tasks. Low and medium settings skip reasoning entirely, while maximum effort triggers explicit iterative self-correction visible in the reasoning trace. The cost difference is 33x.

## Mechanism
Extended thinking allocates a token budget for the model to deliberate before producing output. The model decides, based on the task and effort setting, whether to spend that budget. For a creative task like SVG generation, the model at low or medium effort treats the task as not warranting reasoning investment and skips it entirely, producing output directly from its training distribution.

At maximum effort, the model enters explicit self-correction: it proposes an approach, evaluates it, and revises before committing. The revision is visible in the reasoning trace. Willison observed the model reconsidering leg positioning and feather structure in its trace before rendering the final SVG. The deliberation added qualitative detail not present at lower settings.

The cost non-linearity reflects this: low/medium produce approximately 2,000 tokens total at around $0.10. Maximum effort produced 65,927 tokens at $3.30. The jump from high to max is roughly 25x in tokens and 18x in cost.

## Conditions
Holds when: the task requires deliberate aesthetic judgment or iterative refinement (visual design, creative writing, complex argument construction). The task must have enough open-ended decision surface that additional reasoning produces genuine revision, not just confirmation of an initial answer.

Fails when: the task is retrieval or structured-output oriented. For factual lookups, classification, or constrained-format tasks, reasoning effort may not change the output meaningfully at any setting. The model allocates reasoning to tasks where it perceives deliberation as worth the cost.

## Evidence
Willison tested Claude Fable 5.1 with a single prompt asking for an animated SVG pelican at all five effort levels (low, medium, high, xhigh, max). Results:
- Low: no reasoning, approximately 2,000 tokens, approximately $0.10
- Medium: no reasoning, similar to low
- High: minimal reasoning, 2,612 tokens, $0.13
- Xhigh: substantial reasoning, 36,767 tokens, $1.83
- Max: 65,927 tokens, $3.30

The max-effort pelican included a hat, a fish basket, and refined feather detail not present at lower settings. Willison's read of the reasoning trace showed explicit mid-generation course corrections.

> "I'm adding a darker tip region to represent the primary feathers, then reconsidering the trailing edge to include scalloped feather curves instead of one smooth line for a more natural look."

## Signals
- Reasoning traces at max effort show self-correction verbs: "reconsidering," "instead of," "let me revise."
- Output at max effort contains qualitative detail absent at lower settings, beyond simple length difference.
- Cost at max effort is an order of magnitude above low/medium for the same prompt.

## Counter-evidence
The 33x cost premium makes max reasoning effort impractical for production use cases with high query volume. The quality gain is task-dependent and may not justify the cost for most real applications. Additionally, there is a risk of overthinking on simpler tasks, where extensive reasoning produces overengineered output. Willison's test used a single creative prompt; generalizability to other creative tasks is plausible but unverified.

## Cross-references
- `ins_willison-fable-relentlessly-proactive`: The same Fable model family's proactive behavior at medium/high settings.
- `ins_willison-qwen-reasoning-overthink`: Contrast case where high reasoning effort degraded output quality through overthinking.
