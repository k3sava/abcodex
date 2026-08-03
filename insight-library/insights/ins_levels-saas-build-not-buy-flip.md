---
id: ins_levels-saas-build-not-buy-flip
operator: Pieter Levels
operator_role: Solo founder of Photo AI, Nomad List, Remote OK, and 70+ products
co_operators: []
source_url: https://levels.io/cancelled-saas-subscriptions-vibecoded-ai
source_type: essay
source_title: "I cancelled and then vibecoded 100% of my SaaS subscriptions"
source_date: 2026-07-26
captured_date: 2026-08-03
domain: [founder-operator, ai-native]
lifecycle: [process-and-operating-cadence, ai-workflow-and-tooling]
maturity: frontier
artifact_class: case-study
score: { originality: 4, specificity: 4, evidence: 3, transferability: 3, source: 3 }
tier: B
related: [ins_ship-fast-charge-day-one]
raw_ref: ""
---

# Vibe-coding collapses custom tool build cost enough that recurring SaaS subscription costs now exceed one-time build cost for solo operators

## Claim
For solo and micro-team operators, the economics of build versus buy have flipped. AI-assisted coding reduces custom tool build time from weeks to hours, pushing the one-time build cost below the accumulated cost of a recurring SaaS subscription. Pieter Levels cancelled all his SaaS tool subscriptions and rebuilt every one of them himself, keeping only spend on domains, hosting, storage, and AI APIs.

## Mechanism
SaaS pricing assumes that build cost is high enough that even a mid-priced subscription is cheaper than building the equivalent. A $49/month tool pays for itself if it saves one day of engineering per month. That assumption held when building required hiring a developer or spending days on setup. Vibe-coding with an AI model collapses the build side of that equation: a functional custom tool can be built in hours rather than days, shifting the threshold. For a solo operator, hours of attention cost less than a year of $49/month subscriptions. The SaaS premium was always partly a tax on build-effort; when that effort approaches zero, the premium disappears.

Levels describes the outcome directly:

> "I cancelled and then vibecoded 100% of my SaaS subscriptions"

He now pays only for "domains, server hosting and storage and AI APIs."

## Conditions
Holds when: the operator is a solo or micro-team with developer-level access to AI coding tools; the SaaS tools in question are single-function utilities (not complex platforms); the operator's time is more constrained than their engineering capacity. Fails when: the SaaS tool is complex enough that even AI-assisted building takes weeks; the tool requires a large data network or integration surface that a custom build cannot replicate; the operator's time cost exceeds the SaaS cost.

## Evidence
Levels published his account on July 26, 2026, describing the full substitution of his SaaS stack with custom-built replacements. He is a solo operator running Photo AI, Nomad List, Remote OK, and 70+ other products with no employees, which positions him at the extreme of the build-capacity-to-subscription-cost ratio. His case is the ceiling of the effect; teams with lower AI coding proficiency will see a smaller inversion.

Levels adds a self-aware coda:

> "the irony of being replaced myself after I replaced everything I pay for is not lost on me"

## Signals
- Monthly SaaS subscriptions for single-function tools exceed your hourly AI coding spend.
- Tools you use weekly could be custom-built in a day or less with current AI assistance.
- Your SaaS renewal cadence produces more friction than using the tool.
- You regularly pay for features you do not use because the tool is not configurable enough.

## Counter-evidence
Levels is an outlier. He has exceptional programming ability, decades of solo-ship experience, and no team coordination overhead. Most operators who try to vibe-code their SaaS stack will underestimate maintenance, debugging, and update costs. Custom tools also lack the vendor investment in security, reliability, and new features. A custom tool that breaks on a weekend costs real money in downtime; a SaaS tool has an ops team on call. The flip calculation also ignores total cost of ownership: the initial build is cheap but the lifetime support is not. Levels acknowledges the irony but does not publish maintenance time data.

## Cross-references
- `ins_ship-fast-charge-day-one`: Levels's broader operating thesis is cheap experiments, fast shipping, and never hiring. The SaaS cancellation is an extension of that thesis applied to his own tooling stack.
