---
id: ins_voss-junior-pipeline-broken
operator: Laurie Voss
operator_role: npm co-founder; Head of Developer Relations, Arize
co_operators: []
source_url: https://seldo.com/posts/we-are-all-product-engineers-now/
source_type: essay
source_title: "We are all Product Engineers now"
source_date: 2026-09-14
captured_date: 2026-09-17
domain: [ai-native, engineering, future-of-work]
lifecycle: [hiring, strategy]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 3, evidence: 3, transferability: 3, source: 4 }
tier: B
related: [ins_voss-code-collapse-product-discovery-shift]
raw_ref: ""
---

# AI eliminated the junior developer role that accidentally trained product engineers, and no replacement pipeline exists

## Claim
AI is removing junior developer jobs faster than any alternative training pathway for product-aware engineers is being built. The junior developer role was the traditional path for engineers to develop product judgment gradually, through peer review and customer proximity. That pipeline is now closed, and the market has not yet produced a replacement.

## Mechanism
Junior developers learned product judgment indirectly. Working alongside senior engineers and PMs, reviewing code, fielding customer tickets, and iterating on small features, they absorbed the tacit knowledge of what "good" means in a specific product context. This happened incidentally, not through explicit curriculum. AI removes the economic justification for the junior role by automating the task-level work those engineers performed. The training pathway disappears with the job. Voss describes this as the pipeline being "closed by accident." No one decided to stop training product engineers, but the jobs that did the training are gone.

The forward-deployed engineer role that is replacing the junior developer job requires the product judgment that the junior developer role used to develop. Google trains roughly 50 APMs per year from 12,000 applicants. At that throughput, there is no path to training the volume of product-aware engineers the market now demands.

> "the pipeline for turning junior devs into that role by accident has been closed, also by accident."

## Conditions
Holds when: AI coding tools handle a substantial portion of implementation work that junior developers would previously have owned; companies are reducing entry-level hiring; no alternative deliberate training pathway (bootcamp, apprenticeship, rotational programs) has reached comparable scale.

Fails when: a company deliberately builds an apprenticeship track that substitutes for the lost implicit training; the product in question is narrow enough that product judgment can be taught top-down in months rather than years; or the junior engineering role shifts to AI output review rather than code writing, preserving the learning exposure.

## Evidence
Entry-level hiring at major tech companies is down 65% since 2019 and down 75% at startups. Stanford employment data shows the 22 to 25 age cohort in AI-exposed jobs is 19% below baseline employment relative to peers in less-exposed work, with the gap widening from 15% one year earlier.

> "entry-level hiring at the big tech companies is down 65% since 2019, at early-stage startups it's down 75%"

The alternative, structured product engineering programs, is a small aperture. Google's APM program selects roughly 50 people per year from 12,000 applicants. The math does not close at market scale.

## Signals
- Your company's ratio of senior engineers to junior engineers has grown in the past two years
- Junior hiring froze or fell before any deliberate apprenticeship replacement was built
- Senior engineers report spending more time on requirements definition and less on implementation review
- Recruiting is harder for mid-level roles than for senior roles, rather than the historic reverse

## Counter-evidence
Some argue AI will create new junior pathways, not eliminate them. Managing AI output, running evals, and reviewing agent-generated code may become the new junior function, preserving the exposure that builds product judgment. If that transition happens at scale before the senior cohort retires, the pipeline break may be shorter than Voss implies. The data on employment gaps is real, but the counterfactual training pathway may not need to replicate the old one exactly.

## Cross-references
- `ins_voss-code-collapse-product-discovery-shift`: Voss's primary claim that product discovery is now the non-automatable bottleneck in software development.
