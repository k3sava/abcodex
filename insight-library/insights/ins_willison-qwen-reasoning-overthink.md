---
id: ins_willison-qwen-reasoning-overthink
operator: Simon Willison
operator_role: Creator of Datasette; independent AI engineering blogger
co_operators: []
source_url: https://simonwillison.net/2026/Aug/16/qwen-38-27b/
source_type: essay
source_title: "Qwen 3.8 27B is excellent, but it defaults to wildly overthinking things"
source_date: 2026-08-16
captured_date: 2026-08-17
domain: [ai-native, engineering]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 5, evidence: 5, transferability: 5, source: 4 }
tier: A
related: [ins_tunguz-sota-buyer-distribution, ins_tunguz-tier-segmentation-jevons, ins_ball-orb-sandbox-agent-frequency]
raw_ref: ""
---

# Reasoning models apply maximum effort to trivial tasks unless explicitly tuned to a lower effort level

## Claim
Reasoning models like Qwen 3.8 27B default to the highest-effort processing setting and apply it uniformly to simple and complex tasks alike, consuming 22,276 reasoning tokens and 21 minutes of wall-clock time for a basic SVG request.

## Mechanism
Reasoning models are trained on high-effort chains of thought that improve benchmark performance. Without a built-in task-complexity classifier, the model has no mechanism to distinguish a "draw a circle" prompt from a multi-step engineering problem. It applies the same depth of deliberation to both. The effort level is a parameter exposed to the user, but the default is the maximum. Teams that accept the default are paying the full reasoning cost on every request, including trivially simple ones. The correct operating posture is to start at the lowest effective effort level and escalate only when task complexity warrants it.

## Conditions
Holds when: the model ships with a configurable reasoning effort parameter and the default is not calibrated to task complexity. Applies across reasoning models that expose effort levels (xhigh, medium, low, none) without guiding the user toward appropriate defaults.

Fails when: the task genuinely requires extended chain-of-thought (complex multi-step reasoning, novel problem solving, ambiguous specification). High-effort defaults are correct choices for those workloads.

## Evidence
Willison tested Qwen 3.8 27B on August 16, 2026. The model exposes three reasoning effort levels: `xhigh` (default), `medium`, and `low`.

At the `xhigh` default:
- "Draw an SVG circle" prompt consumed "several minutes" of reasoning before producing an elaborate animated circle with features never requested.
- A pelican-on-bicycle SVG prompt consumed 22,276 reasoning tokens and 21 minutes of wall-clock time to produce 3,223 tokens of output.
- A bounding-box labeling tool request produced a "massively over-engineered" interface with self-drawn demo imagery the prompt never asked for. The reasoning trace revealed the model "decided to draw its own pelicans purely because I had used the label 'pelicans'" in example JSON.

> "Run Qwen 3.8 27B on low or even no reasoning levels at first."

> "a hilarious default. It's absolutely not a good way to run the model, especially on consumer hardware."

## Signals
- Inference latency for simple tasks is orders of magnitude higher than expected.
- Output contains features or content not requested by the prompt.
- Reasoning token counts dwarf output token counts on basic requests.
- Teams report cost surprises from bulk inference on routine classification, summarization, or generation tasks.

## Counter-evidence
The behavior Willison observed is at the extreme end: 21 minutes for an SVG is a worst-case demonstration, not a median outcome. Many production tasks are neither trivially simple nor genuinely complex, and the performance benefit of medium-effort reasoning on those tasks may be worth the extra cost. Vendors may have set high defaults intentionally because most early adopters benefit from careful reasoning and are less likely to optimize for latency than for quality. The finding is model-specific to Qwen 3.8 27B's Aug 2026 release; other reasoning models calibrate effort differently. Willison is a practitioner running tests on consumer hardware, not a benchmark study across production workloads.

## Cross-references
- `ins_tunguz-sota-buyer-distribution`: Tunguz shows 84% of production tokens run on non-frontier models optimized for price over performance; Willison shows that even within a single capable model, effort configuration changes the cost profile dramatically.
- `ins_ball-orb-sandbox-agent-frequency`: Ball running 50+ agents concurrently in orbs demonstrates the other axis of reasoning economics, parallel scale rather than per-request depth.
