---
id: ins_willison-max-thinking-token-burn
operator: Simon Willison
operator_role: Creator of Datasette; co-creator of Django
co_operators: []
source_url: https://simonwillison.net/2026/Sep/22/opus-and-sol-and-luna/
source_type: essay
source_title: "Claude Opus 5.5, GPT-6 Sol, GPT-6 Luna, and a new price war"
source_date: 2026-09-22
captured_date: 2026-09-23
domain: [engineering, ai-native]
lifecycle: [ai-workflow]
maturity: frontier
artifact_class: case-study
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 5 }
tier: A
related: [ins_willison-decision-model-opacity, ins_willison-stateless-mcp]
raw_ref: ""
---

# Max extended thinking exhausts the full 128K output token budget on routine prompts and returns nothing

## Claim
Claude Opus 5.5 at "max" extended thinking consumed all 128,000 output tokens on a simple SVG prompt, returned no usable response, and cost $2.56 per attempt. Developers using extended thinking must set an explicit thinking budget cap; the model will not self-limit.

## Mechanism
Extended thinking allocates thinking tokens from the same pool as output tokens. With "max" thinking enabled and no explicit budget cap, the model treats the entire 128K output token limit as available thinking space. On prompts where the reasoning chain is open-ended or exploratory, the model can exhaust the full budget in pure thinking before producing a single character of output. The failure is silent from the outside: the API call hangs for 15-20 minutes and returns nothing, billed at full token cost. The fix is setting a concrete `thinking_budget` in the API request rather than using "max."

## Conditions
Holds when: extended thinking mode is set to "max" or a high thinking budget is used without an explicit cap; the prompt does not have a tightly structured, convergent answer format.

Fails when: a thinking budget cap is explicitly set in the API call; the task has a constrained answer format (short structured output, yes/no, a numbered list with a fixed count) that forces early convergence.

## Evidence
Willison tested Opus 5.5 at "max" thinking level with a prompt to draw an SVG pelican. Both test runs consumed the full 128K token limit in reasoning and returned no output.

> "Opus 5.5 has a 128,000 maximum output token limit (as do the other Claude models), and it hit that while it was still reasoning about the SVG!"

> "Those two failures each cost me $2.56 and took nearly 20 minutes."

His conclusion on the "max" setting:

> "This makes me suspect that 'max' is effectively useless — if it over-thinks to breaking point on a stupid SVG prompt I don't trust it not to do the same for more interesting work."

## Signals
- API calls with "max" thinking enabled return an empty or truncated response after 15-20 minutes.
- Billing shows the full token budget consumed with zero usable output content in the response body.
- The same prompt succeeds with a constrained thinking budget and fails consistently at "max."

## Counter-evidence
Anthropic documents "max" thinking for genuinely complex, multi-step reasoning tasks where long chains improve accuracy. For problems with high solution space (novel mathematical proofs, adversarial planning, multi-constraint optimization), a larger thinking budget can improve answer quality. The failure Willison describes appears specific to open-ended creative tasks without a convergence structure. Setting an appropriate thinking budget, not necessarily eliminating extended thinking, resolves the issue without losing the accuracy benefits the mode provides on harder tasks.

## Cross-references
- `ins_willison-decision-model-opacity`: active benchmarking of new models is required because capabilities and failure modes shift with each release cycle.
