---
id: ins_design-pie-chart-shifted
operator: Jenny Wen
operator_role: Head of Design, Claude Co-work, Anthropic; ex-Figma Director
source_url: https://www.youtube.com/watch?v=eh8bcBIAAFo
source_type: podcast
source_title: The design process is dead. Here's what's replacing it. — Lenny's Podcast
source_date: 2026-04-27
captured_date: 2026-05-01
domain: [design-ux, ai-native, product]
lifecycle: [process-cadence, ai-workflow]
maturity: applied
artifact_class: framework
score: { originality: 5, specificity: 5, evidence: 5, transferability: 5, source: 5 }
tier: A
related: [ins_three-design-hiring-archetypes, ins_illegibility-framework]
raw_ref: raw/podcasts/jenny-wen--design-process-is-dead--2026-04-27.md
---

# The design role's time mix shifted from 60% mocking to 30% mocking, 30% pairing, 20% code

## Claim
Design's traditional pie chart, 60–70% mocking and prototyping, 20% engineer collaboration, 10% coordination, has collapsed. Today: 30–40% mocking, 30–40% jamming with engineers, ~20% implementation directly in code. The middle (long mocks) collapsed; the role expanded into code rather than retreated from it.

## Mechanism
Engineers spinning up multiple AI agents ship faster than designers can produce mocks. Long-form mocks become stale before they're reviewed. The center of gravity moved to: short-cycle direction-setting (3–6 month prototypes, not 5-year visions) plus last-mile polish on code engineers shipped quickly. Design that sits adjacent to engineering ships; design that produces prefab artifacts to throw over the wall doesn't.

## Conditions
Holds when:
- Engineers are genuinely shipping at AI-augmented velocity (not just claiming to).
- Designers are equipped to read and write some code (or are paired with engineers who can).

Fails when:
- The product surface requires high-fidelity visual specification (consumer brands, marketing sites).
- The org has not invested in prototyping infrastructure that uses real models, not mock screens.

## Evidence
> "A few years ago: 60–70% mocking/prototyping, 20% engineer collaboration, 10% coordination. Today: 30–40% mocking, 30–40% jamming/pairing with engineers, ~20% implementation in code. The role expanded into code, not retreated from it."

> "You can't make a clickable prototype with these models — you have to use the actual models underneath and see people try it with their use cases."

· Jenny Wen on Lenny's Podcast, 2026-04-27

## Signals
- Designers ship PRs, not just Figma files.
- Vision artifacts are 3–6 month prototypes against real models, not 2–5 year decks.
- The team's design review meets at the artifact, not the mock.

## Counter-evidence
The pattern is most advanced at frontier AI labs where engineering velocity is highest. At consumer products with stable platforms (Snap, Apple), traditional mocking still drives more value than code-pairing because the visual fidelity is the product. Pattern transfers fastest to AI-native products and most slowly to brand/visual-identity work.

## Cross-references
- `ins_three-design-hiring-archetypes`, the hiring implication of this pie shift
- `ins_illegibility-framework`, how Jenny finds the next discovery work to design for
