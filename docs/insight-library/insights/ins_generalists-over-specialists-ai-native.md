---
id: ins_generalists-over-specialists-ai-native
operator: Anton Osika
operator_role: Co-founder and CEO, Lovable
source_url: https://www.lennysnewsletter.com/p/building-lovable-anton-osika
source_type: podcast
source_title: Anton Osika on Lovable, the last piece of software — Lenny's Podcast
source_date: 2026-04-28
captured_date: 2026-05-01
domain: [leadership, ai-native, product]
lifecycle: [hiring-team-design]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 5, transferability: 5, source: 5 }
tier: A
related: [ins_taste-as-scarce-skill, ins_engineers-with-product-taste]
raw_ref: raw/podcasts/anton-osika--lovable-ai-engineer--2026-04-28.md
---

# In an AI-native team, hire generalists with one deep dimension, not specialists

## Claim
For a small AI-native product team, optimize hires for the breadth of skills a single person can hold, not for depth in one. Each hire should know architecture, design, product taste, and user research, then go deep on one of them. Lovable shipped to 10M ARR in two months with 15 people on this model, 12 of 18 write code part-time; the other 6 cover product, design, and ops, all shipping.

## Mechanism
AI agents collapse the cost of execution in any single domain. The bottleneck shifts to whoever can decide what to build, design it, instrument it, talk to the user, and ship it without expensive coordination overhead. A team of specialists pays a high "handoff tax" between roles; a team of generalists with deep dimensions absorbs the handoffs internally and ships faster. The generalist has the *cognitive surface area* to use AI agents in any domain, where a specialist would need to bring in a colleague.

## Conditions
Holds when:
- The team is small enough (under ~25) that handoff cost dominates specialization gain.
- The product surface is integrated; one person can sensibly own a feature end-to-end.

Fails when:
- The work has true specialist depth requirements (deep ML research, regulated compliance, hardware design). Generalists hit ceilings.
- Hiring funnel is shallow. Generalists with one deep dimension are rare; settling for "average across many" produces mediocre output everywhere.

## Evidence
> "If I'm putting together a product team today, I would really obsess about getting as many skill sets as possible for each person I hire."

Lovable structure: 12 of 18 write code part-time, the rest do product, design, ops, everyone shipping. 4M ARR in 4 weeks, 10M ARR in 2 months on this team shape.

· Anton Osika on Lenny's Podcast, 2026-04-28

## Signals
- A single person owns "feature ships" not "feature design" or "feature build."
- Specialist roles only appear when a true ceiling is hit, not preemptively.
- Hiring loops include cross-domain trial work, not just domain-specific exercises.

## Counter-evidence
Camille Fournier's platform-engineering work argues for specialist depth on infrastructure teams; the coordination cost is paid back in reliability. Asha Sharma's "polymath builder" frame agrees with Anton on consumer/product teams but warns that mid-size orgs need both: generalists for the loop, specialists for the spine. The pattern transfers cleanly to small AI-native product teams; less cleanly to scaled infrastructure.

## Cross-references
- `ins_engineers-with-product-taste`, same shape from Cat Wu, applied to engineering specifically
- `ins_taste-as-scarce-skill`, the underlying premise both arguments rest on
