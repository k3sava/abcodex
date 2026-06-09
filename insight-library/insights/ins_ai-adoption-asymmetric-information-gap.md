---
id: ins_ai-adoption-asymmetric-information-gap
operator: Charity Majors
operator_role: Co-founder and CTO, Honeycomb.io
co_operators: []
source_url: https://charitydotwtf.substack.com/p/ai-enthusiasts-are-in-a-race-against
source_type: essay
source_title: "AI enthusiasts are in a race against time, AI skeptics are in a race against entropy"
source_date: 2026-06-02
captured_date: 2026-06-09
domain: [ai-native, leadership, engineering]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 3, evidence: 4, transferability: 4, source: 4 }
tier: B
related: []
raw_ref: ""
---

# AI adoption creates an asymmetric information problem where wins are public and costs are private, requiring deliberate feedback loop design

## Claim
AI adoption in engineering teams creates an asymmetric information problem: wins get celebrated publicly in demos and all-hands meetings, while costs accumulate privately in incident reviews, on-call rotations, and code quality retrospectives that AI enthusiasts rarely attend. Without deliberate feedback loop design, the gap between enthusiasts and skeptics compounds into an organizational reliability risk.

## Mechanism
The information asymmetry runs in one direction. Productivity gains are legible, repeatable, and promotable. Reliability degradation, institutional knowledge loss, and increased on-call burden accumulate in forums the AI-forward engineers do not see. Skeptics experience the downstream costs but lack real-time channels to surface them. Enthusiasts observe the gains but not the full cost stack. The result is not a disagreement about values but about facts that land in different rooms. Bridging the gap requires engineering feedback systems deliberately, using the same discipline applied to code reliability: timely, precise, and relevant signals that reach the people who need them.

## Conditions
Holds when: organizations have adopted AI tools fast enough that some teams are shipping AI-assisted code while others absorb the downstream reliability, quality, or knowledge effects.
Fails when: the team is small enough for full contextual overlap, or AI adoption is slow enough that costs and benefits land in the same forums and the same people.

## Evidence
Fin (formerly Intercom) 3x'd engineering output in 9 months measured as merged PRs per R&D headcount. Product defect backlog shrank by more than half. Time from idea to shipped fell 39%. Downtime fell 35%. Majors attributes these results not to AI alone but to Fin's pre-existing engineering discipline, fast feedback loops, and measurement culture.

The 2025 DORA State of AI-Assisted Software Development report, attributed to Nathen Harvey:

> "AI magnifies the strengths of high-performing organizations and the dysfunctions of struggling ones."

Majors:

> "Feedback loops that are timely, precise, and relevant enable self-awareness."

> "Both sides are grappling with a real, alarming, escalating threat to the company's existence."

## Signals
- AI-assisted engineers report high productivity satisfaction while on-call engineers report increasing incident frequency.
- Code quality metrics diverge from shipping-speed metrics over the same period.
- AI skeptics are excluded from or underrepresented in forums where AI adoption decisions are made.
- Post-incident reviews name AI-generated code as a contributing factor but the finding does not reach product planning.

## Counter-evidence
Majors does not claim skeptics are always right or that enthusiasts are reckless. Organizations with strong pre-existing engineering culture can adopt AI fast without the gap widening. The asymmetry problem is most acute where cross-team visibility and feedback loops are already weak. High-discipline teams like Fin achieved large productivity gains precisely because the discipline was already in place.

## Cross-references
- (none in current corpus)
