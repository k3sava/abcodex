---
id: ins_swyx-system-one-call-embeds
operator: Swyx
operator_role: Co-founder, Latent Space; creator of AI Engineer Summit
co_operators: []
source_url: https://www.latent.space/p/jev-revolution
source_type: essay
source_title: "The Jev Revolution: What Engineers Are Already Building with System One Models"
source_date: 2026-11-11
captured_date: 2026-11-18
domain: [agent-frameworks, agentic-coding]
lifecycle: [ai-workflow-tooling, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_swyx-software-factory-replaces-prs, ins_swyx-meta-harness-convergence]
raw_ref: ""
---

# Non-generative decision models called like functions inside application code solve the reliability problems that LLM chains cannot

## Claim
Embedding "System One" decision models (non-generative models that return structured choices, scores, or probabilities) as ordinary function calls throughout application code produces more reliable results than stitching prompts together and hoping for consistency.

## Mechanism
Generative LLMs turn text into more text, making each step of a chain unpredictable. System One decision models return structured outputs that can be evaluated deterministically: a rank, a probability, a category. Because they are fast and cheap, engineers can embed many of them inside a single request flow, run tournaments among candidates, or build multi-step ranking strategies. This separates the "which one is better?" judgment step from the "generate it" step. Each call is composable; multiple fast calls form a strategy without requiring larger prompts. Diogo Almeida of TypeSafe AI, whose Jev model kicked off this pattern, summarizes the principle: "code is the language of automation."

## Conditions
Holds when: the problem can be decomposed into discrete ranking, scoring, or classification steps; there are enough candidates to compare; and the domain allows structured output to substitute for text generation.
Fails when: the task requires generative output with no deterministic evaluation rubric; or when the taxonomy of decisions changes so often that the upfront training cost exceeds the reliability gain.

## Evidence
Three production examples from the article:
- UiPath built a document ranking tournament using Jev: the model picked the most relevant chunk from small groups, winners advanced in rounds, and one chunk remained. Thousands of calls completed in under a second.
- Glean uses System One models alongside LLMs and classifiers. It values zero-shot flexibility so that changing decision taxonomies does not require repeated fine-tuning.
- Workday prototyped a time-off card that fills in while the user is still typing. Scott Roberts described this as moving from predicting what users want to say to predicting what they want to do.

## Signals
- A step in your LLM pipeline that consistently fails on edge cases can be replaced with a structured ranking call without retraining.
- Swapping a prompt-based classification with a System One call reduces false positives.
- A workflow that previously required a reasoning model completes on a decision model for a fraction of the cost and latency.

## Counter-evidence
System One models are non-generative, so they cannot handle tasks that require creating new content. The pattern depends on the existence of candidates to rank or items to classify; purely open-ended creative or research tasks do not fit. Reliability gains also depend on the model having been trained on a domain-relevant taxonomy, which requires upfront investment before zero-shot flexibility kicks in.

## Cross-references
- ins_swyx-software-factory-replaces-prs (the broader agentic factory view; System One models are a component of that factory)
- ins_swyx-meta-harness-convergence (how harnesses compose models; this is a parallel composability pattern)
