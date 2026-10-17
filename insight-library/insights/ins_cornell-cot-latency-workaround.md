---
id: ins_cornell-cot-latency-workaround
operator: Alex Cornell
operator_role: Design Director, Meta AI; leads design for Muse
co_operators: []
source_url: https://www.lennysnewsletter.com/p/how-i-ai-how-meta-designed-muse-with
source_type: essay
source_title: "How I AI: How Meta designed Muse with Alex Cornell"
source_date: 2026-10-12
captured_date: 2026-10-17
domain: [design, ai-native]
lifecycle: [ai-workflow]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_cornell-fixed-structure-dynamic-content]
raw_ref: ""
---

# Showing chain-of-thought steps in AI UX is a workaround for slow models, not a feature worth building into fast products

## Claim
Displaying reasoning steps while an AI processes a request fills time for slow models. When a model is fast enough to deliver results directly, chain-of-thought visibility becomes noise rather than signal, and the better design is to skip it.

## Mechanism
Chain-of-thought display was designed to manage user perception of latency. When a model takes several seconds to respond, showing intermediate reasoning steps prevents the interface from appearing frozen and creates the impression of active progress. The user experience benefit is real but instrumental. It solves latency anxiety, not user understanding.

When models get fast enough that the wait disappears, the reasoning steps lose their purpose. Displaying them then clutters the interface with information the user does not need to act on. The design question shifts from "what do we show during the wait?" to "what do we show in the result?" Fast models can simply deliver results.

## Conditions
Holds when: the model's end-to-end response time is short enough that users do not experience a waiting state; the output is self-explanatory without reasoning context; the user's primary goal is the result, not understanding how it was reached.

Fails when: the AI task is complex enough that users need to understand the reasoning to trust the output; the response takes long enough that showing nothing feels broken; the product is aimed at developers or technically curious users who want the reasoning trace.

## Evidence
Alex Cornell, Design Director at Meta AI, describing the Muse product in an interview with Lenny Rachitsky on October 12, 2026:

> "Displaying chain-of-thought steps is often a workaround for slow models rather than a valuable feature. Because Muse is fast, it can work quietly and simply deliver results."

Cornell applied this principle by removing chain-of-thought displays from Muse's default interface. The product delivers results without showing intermediate reasoning, positioning speed itself as the UX feature.

## Signals
- Users do not ask "why did the AI give this answer?" after receiving results
- Completion rates improve when the waiting state is eliminated
- User feedback focuses on output quality rather than process visibility

## Counter-evidence
Chain-of-thought visibility remains valuable in high-stakes contexts where users need to audit AI reasoning, such as medical, legal, or financial applications. Products that need to build trust with skeptical or cautious users may find that removing reasoning display reduces adoption even when models are fast. The approach depends on models being genuinely fast; any latency regression breaks the premise. Muse's consumer context (personal shopping, inspiration) may not generalize to enterprise or professional tools where explainability is a requirement.

## Cross-references
- `ins_cornell-fixed-structure-dynamic-content`: Companion card from the same source. Both claims describe what to simplify in AI product design once model quality and speed reach a threshold.
