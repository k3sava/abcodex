---
id: ins_ai-adoption-feedback-loop-gap
operator: Charity Majors
operator_role: CTO and Co-founder, Honeycomb.io
co_operators: []
source_url: https://charitydotwtf.substack.com/p/ai-enthusiasts-are-in-a-race-against
source_type: essay
source_title: AI enthusiasts are in a race against time, AI skeptics are in a race against entropy
source_date: 2026-06-02
captured_date: 2026-06-07
domain: [ai-native, future-of-work]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 3, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_cognitive-surrender-agentic-defaults]
raw_ref: ""
---

# AI adoption fractures engineering teams because wins are public and costs stay invisible

## Claim
AI adoption splits engineering organizations when the people shipping code faster with AI and the people absorbing the reliability debt are different groups with no shared information channel.

## Mechanism
Wins from AI-assisted development are visible by default: they surface in all-hands meetings, blog posts, and conference talks. Costs accumulate in private channels: on-call rotations, SRE post-mortems, and one-on-one complaints. The two groups operate in separate realities.

> "The wins and costs are happening to two different groups of people. There is no natural feedback loop."
· Charity Majors, https://charitydotwtf.substack.com/p/ai-enthusiasts-are-in-a-race-against, 2026-06-02

Without a shared feedback loop, enthusiasts read the silence of unshared costs as validation and accelerate. Skeptics accumulate evidence of degradation they cannot communicate in a way that lands upward. The distance widens until a significant incident forces a conversation that should have happened continuously.

Majors proposes two interventions. First, tell complete stories: acknowledge wins and downstream costs together in the same room. Second, reframe philosophical disagreements as engineering problems: "What would it take for you to feel comfortable shipping code you haven't read?" is a tractable question; "AI is dangerous" is not.

## Conditions
Holds when: AI adoption is uneven across teams; the people shipping and the people supporting are different roles; and organizational recognition flows primarily to shipping velocity.

Fails when: the same engineers ship and maintain the code; or when SRE teams have direct access to product roadmaps and can surface costs as blockers before they accumulate.

## Evidence
Majors draws on her position as CTO of Honeycomb.io, where she sees both sides: customers shipping faster with AI and the same customers opening incidents they cannot diagnose because no one read the code that shipped.

> "AI is an amplifier. It amplifies your strengths and amplifies your dysfunctions."
· Charity Majors, https://charitydotwtf.substack.com/p/ai-enthusiasts-are-in-a-race-against, 2026-06-02

## Signals
- SRE team morale falls while engineering velocity metrics rise.
- Incident volume increases without a corresponding rise in headcount.
- Post-mortems identify "unknown code path" or "no one had context on this module" as a contributing factor more than once per quarter.

## Counter-evidence
The feedback loop gap is a management and organizational design problem, not an inherent property of AI-assisted development. Teams that co-locate shipping and on-call responsibility do not suffer the same split. Some high-velocity shops run AI-assisted development with flat or improving reliability by embedding quality gates and mandatory review steps in the CI pipeline. The gap Majors describes is avoidable; it is not inevitable.

## Cross-references
- `ins_cognitive-surrender-agentic-defaults`: Mollick's finding that frictionless agentic systems reduce critical evaluation of AI outputs; Majors describes the organizational consequence when that pattern propagates at team scale.
