# ab-codex Playbook Visuals — Design Spec

**Date:** 2026-05-09
**Status:** Approved — ready for implementation planning

---

## The foundational principle

We channel practitioners, not copy them. For each name on the team, we inherit:

- Their *thinking* — the mental model they bring to visual problems
- Their *style direction* — the sensibility that makes their work recognizable, not their specific works
- Their *way of seeing* — how they frame complexity, what they choose to show, what they leave out

Then we adapt those inherited sensibilities to ab-codex content, the constraints of operator insight communication, and Kesava's own additions. The result is a synthesized new form — paying homage without reproduction.

---

## The team (16 practitioners)

Selected through collaborative review. Each name represents a lens, not a copy machine.

| Domain | Practitioners |
|--------|--------------|
| Information Design | Edward Tufte · Giorgia Lupi · Nigel Holmes · David McCandless |
| Storytelling | Mike Rohde · Dan Roam · Scott McCloud |
| L&D | Cathy Moore · Richard Mayer · Will Thalheimer · Charles & Ray Eames |
| Artists | Christoph Niemann · Noma Bar · Saul Bass · Malika Favre · Milton Glaser |

---

## Aesthetic north star

Classical information design + handmade quality. Think Du Bois data portraits, old Scientific American cutaways, Nigel Holmes at his most precise, Eames educational films. Not AI-minimalist, not loud. Patient, earned, crafted.

Anti-pattern: gradient blobs, SaaS landing page explainers, Canva infographic templates, anything that looks like it was generated rather than drawn.

Context is everything. Each element of a playbook gets the visual that best serves it — not a uniform style applied across everything.

---

## What we channel from each practitioner

**Tufte:** Maximize data-ink ratio. Every mark earns its place. Annotation IS the content, not decoration for it. Density over decoration.

**Lupi:** Data can be warm. The imperfect line signals human presence. Numbers as stories. The hand-drawn feel is not roughness — it is honesty.

**Holmes:** Wit + information. The infographic as a small story with characters. Explanation can have a point of view.

**McCandless:** Dense data made inviting. Hierarchy through colour and scale, not shouting.

**Rohde:** Visual thinking is real thinking. Hand-lettering, clear hierarchy, warmth. The sketch is not a draft — it IS the final form.

**Roam:** Anyone can draw their ideas. Six problems, six picture types. Clarity before beauty.

**McCloud:** Each visual is a sequence. Panel-to-panel logic. What the reader's eye moves through IS the argument. Time can be compressed — each exchange is a beat.

**Moore:** Design for doing, not knowing. Every visual asks: what will they do differently?

**Mayer:** Cognitive load is the enemy. Segment, signal, use spatial contiguity. Science of what visuals actually teach.

**Thalheimer:** No myths. Spaced retrieval beats decoration.

**Eames:** Learning through delight. Honest materials, honest communication. Complexity without condescension.

**Niemann:** One idea, perfectly expressed. Playful abstraction from everyday objects. Wit as intelligence.

**Noma Bar:** One shape, two meanings. Negative space as argument. Economy: if you can remove it without losing the idea, remove it.

**Bass:** Reduce to essence. The symbol that carries everything. If the visual takes 30 seconds to decode, it failed.

**Favre:** Flat geometry, optical confidence, bold colour. Clean, not cold.

**Glaser:** Warmth and wit in equal measure. The poster as love letter.

---

## Palette

| Token | Hex | Use |
|-------|-----|-----|
| `--paper` | `#F5F0E8` | Background — always |
| `--ink` | `#1C1917` | Primary lines, text |
| `--ink-light` | `#57534E` | Annotations, labels |
| `--sienna` | `#92400E` | Critical path, key nodes, active |
| `--sienna-light` | `#D97706` | Secondary emphasis |
| `--sage` | `#4A5E4A` | Success, validation states |
| `--slate` | `#475569` | Neutral data, supporting structure |
| `--sand` | `#D4A574` | Tertiary accent |
| `--danger` | `#991B1B` | Failure modes, warnings — non-negotiable |
| `--white` | `#FFFFFF` | Card fills, label backgrounds |

Maximum 3 colours per visual. Always use `--ink`. Add `--sienna` for the critical path. Add one more only if structurally necessary.

---

## Typography

| Role | Typeface | Weight | Use |
|------|----------|--------|-----|
| Titles | Newsreader | 700 italic | Playbook name, section title |
| Labels | Inter | 500 | Node labels, axis labels |
| Annotations | Inter | 400 | Explanatory text, callouts |
| Codes | JetBrains Mono | 400 | Step numbers, card IDs |
| Pull quotes | Newsreader | 400 italic | Verbatim operator quotes |

---

## Treatment types

### Primary (confirmed)

**1. Annotated pipeline**
Step-by-step with inline annotations — the reasoning alongside the step, not separated. Hand-lettered feel, margin notes, connecting rules. Each step has a number, a label, a short annotation. The annotation IS the insight.
- Channels: Rohde (warmth, hand-lettered hierarchy) + Tufte (data-ink, earn every pixel) + old Scientific American (cutaway precision)
- Applies to: positioning 16-step pipeline · launch plan · campaign strategy · any process with 5+ sequential steps

**2. Annotated script**
Screenplay format with technique annotations in the margin. Shows the move, then the reasoning. McCloud's panel-to-panel time compression — each exchange is a beat. Two-column: dialogue on left, technique label on right.
- Channels: McCloud (sequence logic, panel compression) + Rohde (hand-lettered, warm) + Holmes (wit, a small story with characters)
- Applies to: tactical empathy · accusation audit · discovery plays · any conversation-based playbook

**3. Phased Gantt**
Old-school project management aesthetic — ink-ruled bars on a ruled grid. No gradient fills. Color denotes owner or phase, not decoration. Works at a glance and on print. Bars are labeled inside when wide enough; labeled adjacent when narrow.
- Channels: Eames (honest materials, educational clarity) + Tufte (data-ink, no chartjunk) + Moore (design for doing)
- Applies to: campaign strategy · launch plan · PMM measurement cadence · any phased execution plan

**4. Data portrait**
Du Bois sensibility: horizontal bars with rich annotation, evidence-grade labeling. Each bar makes a claim — the chart IS the argument, not decoration for the argument. The numbers are secondary; the insight is primary.
- Channels: Du Bois spirit (charts as arguments) + Tufte (data-ink) + McCandless (inviting density)
- Applies to: pricing leverage · PMM measurement · LTV:CAC ratios · before/after comparisons

**5. Concept diagram**
A single relationship rendered precisely. No decorative elements — just the formula and the minimum geometry needed to make it legible. Annotation explains the variables, not the formula. If the relationship can be drawn in one shape, use one shape.
- Channels: Bass (reduce to essence) + Noma Bar (economy, one shape two meanings) + Tufte (every mark earns its place)
- Applies to: Hormozi value equation · System 1/2 · WTP 3-question protocol · any 2-3 variable relationship

**6. Annotated curve**
Classical economics illustration style — hand-plotted curve, annotated cliff points, minimal axes. No gridlines. The annotation IS the insight; the curve is the vehicle. Drawn, not generated. The imperfect line signals human thought.
- Channels: Tufte (data-ink, annotation as content) + McCandless (density made inviting) + old Economist (authoritative illustration)
- Applies to: pricing WTP cliffs · T2D3 growth trajectory · LTV:CAC trough · any inflection-point analysis

---

### Secondary toolkit (use when content demands it)

**7. Architectural diagram**
Column structure for 3-5 mutually exclusive components. Draws on Greek architectural vocabulary — entablature at top, base at bottom. Operator attributions on shafts.
- When: pricing 4 pillars · Voss 5-tool stack · any framework where the components don't interact (they coexist)

**8. Classical quadrant**
Hand-ruled 2×2 with plotted points and annotated zones. Axis labels as argumentative claims, not neutral descriptors. Failure modes in danger red.
- When: Feature Shock/Minivation/Hidden Gems · competitive positioning · any 2-axis taxonomy

**9. Failure taxonomy**
Red/amber bullet system. Each failure mode gets one precise label and one explanatory clause. No verbose descriptions — the constraint forces clarity. Danger red is non-negotiable.
- When: every playbook has at least one failure mode section — use this for anti-patterns

---

## Style rules (non-negotiable)

1. **Line weight hierarchy.** Structural: 2px. Secondary: 1px. Annotations: 0.5px dashed.
2. **Hand-drawn feel.** Slight imperfection in curves and boxes. Not mechanical.
3. **Generous white space.** Minimum 24px around every label.
4. **Directional arrows.** Always show flow. Arrowheads: small, clean, not decorative.
5. **Node labeling.** Every node has a label inside or anchored adjacent. No floating labels.
6. **No drop shadows.** Depth via color contrast and line weight only.
7. **No icon libraries.** If an icon is needed, describe it as a simple geometric shape.
8. **Failure modes in red.** Always `--danger` (#991B1B). No exceptions.
9. **Operator quotes.** Newsreader italic. Attributed "— Firstname Lastname". Immutable — never paraphrase.
10. **The review gate.** Ask: does this feel drawn by a thoughtful person, or generated by software? Reject if the latter.

---

## Output dimensions

| Context | Size | Format |
|---------|------|--------|
| Playbook hero visual | 1200×630 | SVG (then PNG export) |
| In-body diagram | 900×500 | SVG |
| Sidebar infographic | 480×720 | SVG |
| Share card | 1200×628 | PNG |

---

## Claude Design prompt template

```
Create a [treatment type] for the ab-codex [playbook name] playbook.

CONTENT:
[specific steps / labels / relationships / data / dialogue exchanges]

STYLE:
- Paper background (#F5F0E8), ink lines (#1C1917), sienna emphasis (#92400E)
- Hand-drawn editorial feel — slight imperfection in lines, not mechanical
- Newsreader serif for titles and operator quotes, Inter for labels
- White space: generous. No cluttered grids.
- Channels: [practitioner blend for this treatment type]
- [any additional style notes specific to this visual]

OUTPUT: SVG, [dimensions]

DO NOT:
- Add clip art or icon library icons
- Use drop shadows or gradients
- Use more than 3 colours
- Make it look like a SaaS landing page infographic
- Make it look AI-generated
```

---

## Per-playbook visual strategy

Each of the 27 playbooks gets:
- **1 hero visual** (1200×630) — the poster. The most memorable image. Encodes the core insight in a single visual.
- **1–3 in-body diagrams** (900×500) — functional. Each explains a specific framework or move.
- **Optional sidebar** (480×720) — when a cheat-sheet format serves the reader.

The hero visual prioritizes memorability (Bass + Niemann lens). The in-body diagrams prioritize clarity (Tufte + Moore lens).

Visual selection per playbook follows the same logic as the 9 treatment types: identify what the content IS (process / relationship / data / dialogue / economics), then apply the treatment that serves it — not a template.

---

## File structure

```
ab-codex/
  assets/
    visuals/
      [playbook-slug]/
        hero.svg
        hero.png
        diagram-01.svg
        diagram-02.svg
        sidebar.svg (if applicable)
```

---

## What success looks like

A stranger picks up a playbook, sees the hero visual, and understands the core move before reading a word. An operator recognizes the insight from their own experience. A designer looks at the visual and can't immediately tell if it was hand-drawn or digitally produced — and that ambiguity is intentional.
