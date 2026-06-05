---
id: ins_ai-amplifies-existing-org-dynamics
operator: Charity Majors
operator_role: Co-founder and CTO, Honeycomb
co_operators: []
source_url: https://charitydotwtf.substack.com/p/ai-enthusiasts-are-in-a-race-against
source_type: essay
source_title: AI enthusiasts are in a race against time, AI skeptics are in a race against entropy
source_date: 2026-06-02
captured_date: 2026-06-05
domain: [ai-native, leadership, future-of-work]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 5, source: 4 }
tier: B
related: [ins_coexistence-era-three-questions, ins_cognitive-surrender-agentic-defaults]
raw_ref: ""
---

# AI magnifies existing organizational strengths and dysfunctions rather than creating new ones

## Claim
AI is an amplifier. It makes high-performing teams faster and makes struggling teams more chaotic; the difference lies in whether the organization already has tight feedback loops, shared standards, and a culture of learning from failure.

## Mechanism
High-performing teams have fast, precise feedback loops that keep individuals calibrated on what is working. AI speeds up those loops further. Struggling teams lack those loops, so AI-generated output compounds without correction, producing "shipping unreliable code faster than anyone can read it" as Majors describes it. The asymmetric information problem makes it worse: AI wins are celebrated in public (talks, blog posts, metrics), while costs emerge privately (on-call rotations, technical debt, cleanup work). The enthusiasts who create the wins rarely experience the downstream cleanup; the skeptics who absorb the cleanup rarely get visibility into the wins. Both groups are right, but they're talking past each other because the signal never crosses.

## Conditions
Holds when: teams have observable before/after states on reliability, on-call load, and review quality following AI adoption.
Fails when: the org is so early in AI adoption that no signal has had time to emerge.

## Evidence
Majors observed a structural chasm forming in engineering orgs as agentic AI tooling became mainstream in late 2025 and early 2026. Her framing draws on years of Honeycomb research on observability and feedback loops.

> "AI is an amplifier. It magnifies the strengths of high-performing organizations and the dysfunctions of struggling ones."

> "Feedback loops that are timely, precise, and relevant enable self-awareness in humans and self-governance in teams."

> "What would it take for you to feel comfortable shipping code without reading it?"

The last quote is her diagnostic. The answer reveals whether the organization's quality foundation can support AI autonomy or not.

## Signals
- After adopting agentic coding, on-call incidents increase rather than decrease.
- The team that generates AI-written code is not the team debugging the production failures from it.
- Senior engineers describe the new workflow as "fast but fragile."

## Counter-evidence
Some teams with poor feedback loops still see net positive outcomes from AI adoption because the raw productivity gain temporarily exceeds the quality degradation cost. The amplification effect may be delayed by 6 to 18 months, making it invisible in early measurements.

## Cross-references
- ins_coexistence-era-three-questions (Mollick, June 4, 2026): the co-existence era makes the amplification dynamic more consequential, not less.
- ins_cognitive-surrender-agentic-defaults (Mollick, May 26, 2026): cognitive surrender is one mechanism through which AI amplifies existing review gaps.
