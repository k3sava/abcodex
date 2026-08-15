---
id: ins_turnbull-hypothetical-classification
operator: Doug Turnbull
operator_role: Independent search relevance engineer; softwaredoug.com
co_operators: []
source_url: https://softwaredoug.com/blog/2026/08/10/hypothetical-classifications
source_type: essay
source_title: "Don't classify. Hallucinate!"
source_date: 2026-08-10
captured_date: 2026-08-15
domain: [engineering, ai-native]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: workflow
score: { originality: 4, specificity: 5, evidence: 3, transferability: 5, source: 4 }
tier: B
related: []
raw_ref: ""
---

# Generating unconstrained hypothetical categories then resolving via embeddings outperforms forcing LLM selection from a large taxonomy

## Claim
Rather than feeding an LLM a constrained list of hundreds of valid categories, prompt it to invent a plausible category freely, then use embeddings to map that hallucinated output to the closest real entry. The two-stage pipeline outperforms single-step constrained selection and costs less at scale.

## Mechanism
Constrained classification requires sending the entire taxonomy vocabulary to the LLM with every request. At hundreds or thousands of entries, this exhausts context budgets, hits structured-output size limits, and forces the model to compare options rather than reason about the input. The two-stage approach separates the reasoning step from the resolution step. In step one, a cheap small model generates a semantically plausible category it would invent for the input, with no schema attached. In step two, embeddings are computed for the hallucinated output and for every real taxonomy entry once, stored in memory. A dot-product search finds the closest real entry. The model never sees the full vocabulary; the embeddings layer handles matching deterministically. Cost falls because the schema is not shipped per request. Quality rises because the model reasons freely about the input before any constraint is applied.

## Conditions
Holds when: the taxonomy has more than a few dozen entries, where sending the full vocabulary per request becomes expensive or hits size limits. Most effective when entries are semantically distinct enough that embedding similarity reliably separates them.

Fails when: the taxonomy is small enough to fit trivially in a single prompt, making the two-stage overhead unjustified. Also fails when entries cluster tightly in embedding space and dot-product similarity cannot reliably separate them.

## Evidence
Turnbull demonstrates the technique for product classification. Given "brown coffee table" as input, the model generates a path such as "Furniture / Living Room Furniture / Coffee Tables and End Tables / Coffee Tables" without seeing the real taxonomy. Embeddings then match this invented path to the closest real taxonomy entry. He also provides example implementation using MiniLM embeddings and dot-product scoring.

The technique is described as "giving hallucination tasks to dumb, cheap LLMs" because it requires no reasoning about the schema, only about the input.

## Counter-evidence
The approach assumes embedding-based matching is accurate enough to recover the right real entry from a hallucinated category. When two real entries are semantically near-identical in embedding space, the resolution step may be unreliable. Turnbull does not provide systematic accuracy benchmarks; the evidence is engineering-pattern based rather than empirically validated at production scale.

## Cross-references
- (none in current corpus)
