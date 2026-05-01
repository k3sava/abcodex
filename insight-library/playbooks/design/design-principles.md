---
id: pb_design-principles
title: Design principles for marketing assets
maintained_by: codex maintainers
captured_date: 2026-05-01
domain: [design, conversion]
uses_cards: [ins_design-as-bottleneck, ins_design-pie-chart-shifted]
originating_operators: [jenny-wen]
secondary_sources:
  - team-brain/workflows/frontend-qa-checklist.md
---

# Design principles playbook

Actionable rules for non-designers producing landing pages, emails, ads, decks, social, and collateral. Every rule has a specific value. Source synthesis: Refactoring UI, WCAG, classic Gestalt principles.

## When to use

Any visual asset before publish. Pair with the messaging matrix output — copy first, then design.

## 1. Visual hierarchy — three levers

Size, weight, color. Design in grayscale first. Add color only after hierarchy works without it.

| Lever | Primary | Secondary | Tertiary |
|-------|---------|-----------|----------|
| Size | 24–36px | 16–20px | 12–14px |
| Weight | 600–700 | 500 | 400 |
| Color | Dark high-contrast (#1a1a1a) | Medium grey (#6b7280) | Light grey (#9ca3af) |

- De-emphasize labels, emphasize values. In "Revenue: $4.2M" the number wins.
- Fewer borders, more spacing. Borders add noise.
- Never use font weights below 400.
- Hierarchy levels must be perceptibly different. If H2 is 24px, H3 is 20px, not 22px.
- Von Restorff: CTA must use a distinct color used nowhere else.
- Serial position: value prop above the fold (primacy); strongest CTA + proof at the bottom (recency).

## 2. Typography

Constrained scale. Recommended: 12, 14, 16, 20, 24, 30, 36, 48px.

| Role | Size | Weight | Line-height |
|------|------|--------|-------------|
| Display/H1 | 36–48 | 700 | 1.0–1.1 |
| H2 | 30 | 600–700 | 1.1–1.2 |
| H3 | 24 | 600 | 1.2–1.25 |
| Body | 16 | 400 | 1.5–1.6 |
| Small | 14 | 400 | 1.4–1.5 |

Line length 50–75 characters; 66 is the sweet spot. Mobile 35–50 acceptable. Two font families max. Sans-serif default for B2B SaaS.

## 3. Color

- 60/30/10 rule: 60% dominant (usually neutral), 30% secondary, 10% accent (CTAs, highlights).
- Accent color appears nowhere except action elements.
- WCAG AA: 4.5:1 contrast for normal text, 3:1 for large text.
- Limit palette to 4–6 colors total including neutrals.

## 4. Spacing

- 8-point grid. Every spacing value is a multiple of 8 (or 4 for fine detail).
- Whitespace is the structure, not the gap. Generous outer margins, tight relationships.
- Group related items with proximity (Gestalt).

## 5. Tap targets and accessibility

- Minimum 44×44px tap targets.
- Body text minimum 16px.
- Focus states visible.
- Alt text on every meaningful image.
- Don't use color alone to convey meaning (colorblind safety).

## 6. CTA discipline

- One primary CTA per section, visually distinct.
- Secondary CTAs lower-contrast, never compete with primary.
- Repeat CTA throughout long pages, not just at the bottom.

## 7. Components and consistency

- Reuse the same button styles, card styles, section padding across the site.
- Variants for state (default, hover, active, disabled) are consistent.
- Define and stick to a section rhythm — the same visual cadence throughout.

## Quality gates

- Hierarchy works in grayscale before color is added.
- All spacing on the 8-point grid.
- WCAG AA contrast everywhere.
- Body 16px+, tap targets 44×44+.
- One primary CTA per section.
- Line length 50–75 characters.
- Two fonts max.
- Accent color reserved for action elements.

## Common failure modes

- Every element competing for attention.
- Borders everywhere instead of spacing.
- Light font weights (<400).
- Random spacing values (13px, 19px).
- Multiple CTAs of equal weight.
- Too many fonts or too many colors.
- Insufficient contrast on grey-on-grey text.
- CTA color also used as a decorative accent elsewhere.
