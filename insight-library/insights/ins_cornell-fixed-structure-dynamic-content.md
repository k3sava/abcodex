---
id: ins_cornell-fixed-structure-dynamic-content
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
score: { originality: 4, specificity: 4, evidence: 3, transferability: 5, source: 4 }
tier: B
related: [ins_cornell-cot-latency-workaround]
raw_ref: ""
---

# Generative UI works reliably when structure is fixed by designers and only content varies dynamically

## Claim
AI-generated interfaces that vary layout and structure produce unpredictable user experiences. The reliable pattern is to fix structural containers (avatar, card types, feed shapes) through intentional design, then let only content (text, suggestions, status, small animations) vary dynamically.

## Mechanism
When AI generates full layouts, every render is a new design decision made without the constraints of a design system. The AI may produce novel arrangements that break spatial expectations, misuse components, or violate the visual hierarchy the brand has established. Users lose orientation because the interface changes shape under them.

Fixed structure keeps the interface legible while still allowing AI to personalize what matters: the words, the suggestions, the reactions to user behavior. The designer controls all structural surface area and surrenders only the content surface area to the model. The model's creative space is narrow and bounded, which concentrates its quality on a constrained task it can do reliably.

This pattern also makes the design system stable. Tokens, spacing, typography, and component hierarchy do not break on each AI response because the AI never touches them.

## Conditions
Holds when: the product's value comes from personalized content rather than personalized layout; the user's primary mental model is "this thing gives me relevant content in a consistent place," not "this thing creates new interfaces for me."

Fails when: the product's core value proposition is generative layout or novel UI exploration; the use case requires the AI to design context-appropriate interfaces that could not be anticipated in advance; structural constraints are too rigid to accommodate the range of content types the AI needs to present.

## Evidence
Alex Cornell, Design Director at Meta AI, on the design principles for Muse, in an interview with Lenny Rachitsky on October 12, 2026:

> "Avatar, feed items, and idea cards are deliberately designed, while the status emoji, personalized suggestions, and small animations change dynamically."

Cornell explicitly separated the design surface into what the team controls and what the AI controls. The framing he applied across the Muse product: generative UI works best when the structure is fixed and the content varies.

## Signals
- The interface looks consistent across sessions even as content changes significantly
- Design system tokens remain intact after AI-generated renders
- User feedback praises relevance rather than surprise or novelty

## Counter-evidence
The pattern assumes a product where layout categories can be enumerated in advance. For AI products with genuinely open-ended content types (a general assistant that might need to show a calendar, a map, a code block, or a diagram), pre-defining all structural containers becomes a design bottleneck. The approach may also limit the creative leverage of generative models: keeping structure fixed prevents emergent interface patterns that might serve users better than the designer anticipated.

## Cross-references
- `ins_cornell-cot-latency-workaround`: Companion card from the same source. Both describe design simplifications Cornell made for Muse as model speed and quality improved.
