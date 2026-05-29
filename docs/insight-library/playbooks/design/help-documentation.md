---
id: pb_help-documentation
title: Build help docs from taxonomy to published article
maintained_by: codex maintainers
captured_date: 2026-05-01
domain: [help-docs, design, post-sale]
uses_cards: []
originating_operators: []
secondary_sources: []
---

# Build help docs from taxonomy to published article

Help docs are the post-sale experience layer. Positioning convinces prospects to buy; help docs determine whether they succeed after buying. Treats documentation as a strategic deliverable.

Source synthesis: Tyner Blain (task-based docs), KCS / Consortium for Service Innovation (Knowledge-Centered Service double-loop), Jakob Nielsen (progressive disclosure), help-center teardowns of Intercom, Notion, Stripe, Aircall, HubSpot, Zendesk.

## Steps

1. **Build product knowledge.** Crawl existing docs, read reviews, explore the UI. Output: a verified Product-Knowledge file with features, UI labels, plan tiers, capability descriptions. Every claim in every article must trace back to it.
2. **Define audience.** Primary personas, technical sophistication, situations driving them to docs (onboarding, troubleshooting, feature discovery, configuration). Litmus test: "Would a sales rep at a 10-person plumbing company understand this?"
3. **Audit existing docs.** Inventory by type (how-to, conceptual, troubleshooting, reference). Score on accuracy, customer-centricity, structure, completeness. Prioritize rewrites by ticket volume + page views. Output: P0/P1/P2 audit.
4. **Map customer journey to content needs.** Sequence by first-week progression: setup → core concept → core action → power feature → edge case. Five questions per feature: What is it? How do I do it? How do I undo it? Who can do it? What happens after?
5. **Design taxonomy.** Hybrid task-first model. Task-oriented top-level categories ("Make and receive calls") with feature-named articles inside ("Call forwarding settings"). 3 levels max (Category > Section > Article). Cap top-level at 5–7. Miller's number for items per level.
6. **Apply category naming.** Verb-first labels for action categories ("Set up your phone system"). Plain nouns for reference categories ("Account and billing"). No acronyms or product jargon at the category level.
7. **Design getting-started experience.** Dedicated top-level category, listed first. Role-based quick-starts (admin setup, end-user onboarding). Conceptual overview. 5-minute quick wins. Optionally a narrative onboarding sequence: Motivate → Setup → First Value → Power Use.
8. **Article architecture templates.** Per type: how-to, onboarding narrative, conceptual explainer, integration doc, troubleshooting, reference. Every template has title, one-line outcome, prerequisite block, body, related articles.
9. **Apply transformation rules.** Product-to-outcome rewriting ("The filter dropdown lets you select Unread only" → "See which customers haven't replied yet"). Instructions over descriptions. Buyer-as-agent framing.
10. **Progressive disclosure.** One-line answer / TL;DR first. Step-by-step second. Edge cases and admin-only options in expandable sections.
11. **Multi-platform handling.** Separate parallel articles when workflows diverge substantially. Inline tabs/callouts when 1–2 steps differ. Identical structure across parallels. "Click" desktop, "Tap" mobile.
12. **Cross-linking map.** Plan inbound + outbound links per article BEFORE writing. Every article has breadcrumbs, ≥1 inline body link, Related Articles block (3–5 curated), Next Steps prompt for sequenced setups. Concept-action pairs always cross-link.
13. **Quality review.** Product accuracy, customer centricity, structure, copy craft.
14. **Search optimization.** Tags + synonyms per article. "Set up your phone menu" tagged "IVR" so technical users find it.
15. **Measurement and iteration.** Article views, zero-result searches, ticket deflection rate, time-on-page. KCS Solve Loop captures new knowledge from tickets; Evolve Loop refines existing content.

## Frameworks

- **Hybrid taxonomy:** task-oriented top + feature-named articles inside. 3 levels max.
- **Progressive disclosure (NNGroup):** essentials upfront, complexity behind deliberate user actions.
- **KCS double-loop:** Solve Loop creates, Evolve Loop refines.
- **Narrative + reference layer:** guided story for the happy path; modular reference for individual tasks.
- **One article, one task:** if it needs a second verb, split it.
- **Question-as-title:** "How do I...?" / "What is...?" / "Why am I...?"
- **Five question types per feature:** What / How / Undo / Who / After.

## Quality gates

- Every noun matches its UI label exactly.
- No unverified claims. Every product claim traces to Product-Knowledge.
- Article intros lead with customer outcome, not feature description. No sentence starts with the product name.
- Buyer is the agent.
- Instructions beat descriptions.
- 3 levels max with 5–7 top-level categories.
- Every article has 3 exit paths (breadcrumbs, inline link, related). No dead ends.
- Progressive disclosure applied.
- Numbered steps with bold UI labels.
- Prerequisites in the first two lines.
- Multi-platform parity. Consistent verbs.
- Plumbing-rep test passes on every category and section name.

## Common failure modes

- Feature-first organization ("IVR Configuration") instead of customer-problem categories ("Set up your phone menu"). Persists because easier to write, not because better for users.
- Engineering vocabulary describing how features work internally.
- More than 3 levels of nav. Each extra level cuts findability by ~20%.
- Missing cross-links. Dead-end articles.
- Claiming features not verified. A wrong claim creates a ticket; "may be available" is worse, delete.
- Descriptions instead of instructions.
- Product jargon at the category level.
- One article doing many tasks.
- Buried prerequisites.
- Auto-generated related-articles blocks. Curate.
- Treating taxonomy as one-time. Track zero-result searches and ticket themes.
- One-sentence answers that leave users stuck.

## Outputs

1. Taxonomy map (3 levels max).
2. Article architecture templates.
3. Content audit with P0/P1/P2.
4. Cross-linking map.
5. Produced articles per templates.
6. Search tag inventory.
7. Measurement plan.
