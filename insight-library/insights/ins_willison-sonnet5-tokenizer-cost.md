---
id: ins_willison-sonnet5-tokenizer-cost
operator: Simon Willison
operator_role: Creator of Datasette; co-creator of Django
co_operators: []
source_url: https://simonwillison.net/2026/Jun/30/claude-sonnet-5/
source_type: essay
source_title: "Claude Sonnet 5"
source_date: 2026-06-30
captured_date: 2026-07-02
domain: [engineering, ai-native]
lifecycle: [ai-workflow, strategy]
maturity: frontier
artifact_class: metric-model
score: { originality: 4, specificity: 5, evidence: 5, transferability: 4, source: 5 }
tier: B
related: [ins_willison-silent-degradation-trust-gap]
raw_ref: ""
---

# A new tokenizer that inflates token counts for the same input creates an effective price increase even when nominal per-token rates stay flat

## Claim
Tokenizer changes are a hidden cost vector. When a new model version produces more tokens for identical input text, the real cost per task rises even if the advertised price per token stays the same.

## Mechanism
Token count is the actual billing unit, not word count or character count. A tokenizer that splits words differently can produce 1.42x more tokens for English text with no change in the input. At $3/$15 per million input/output tokens, an English workload that cost $100 now costs $142 without any change in model pricing. The effect is language-dependent: Spanish inflates 1.33x, Python code 1.27x, Mandarin approximately 1.0x. Teams that benchmark cost on one language may miss the full impact on multilingual products. The inflation is structural, not per-call variance, so it compounds across all requests.

## Conditions
Holds when: switching model versions that ship a new tokenizer. Applies to any organization running high-volume inference where token count is the primary cost input.

Fails when: the task is naturally token-heavy (very long documents) and the tokenizer change adds a small percentage relative to the base count. Also less relevant for interactive single-request use where cost per conversation is low in absolute terms.

## Evidence
Willison benchmarked the Claude Sonnet 5 tokenizer against Sonnet 4.6 across multiple languages and code types:

> "The same input text produces approximately 30% more tokens than on Claude Sonnet 4.6"

His specific measurements:
- English text: 1.42x token inflation
- Spanish text: 1.33x
- Python code: 1.27x
- Mandarin Chinese: approximately 1.0x (no inflation)

The nominal pricing for Sonnet 5 is the same as Sonnet 4.6 ($3/$15 per million tokens), so the tokenizer change is the sole driver of cost increase for equivalent workloads.

## Signals
- Cost per API call increases after switching model versions even though nominal rates are unchanged.
- Benchmark runs show higher token counts for the same prompt corpus.
- Multilingual products show uneven cost increases across language pairs.
- Cost estimates built on older model token counts are systematically low.

## Counter-evidence
Token inflation may be offset by capability gains: if Sonnet 5 completes tasks in fewer back-and-forth turns, the per-task cost may stay flat or fall despite per-call inflation. Willison does not claim the capability increase is insufficient to justify the tokenizer cost; he flags the cost mechanism so teams can account for it in their own economics. Organizations with primarily Mandarin or CJK workloads see negligible inflation.

## Cross-references
- `ins_willison-silent-degradation-trust-gap` (Willison on hidden quality changes in model updates)
