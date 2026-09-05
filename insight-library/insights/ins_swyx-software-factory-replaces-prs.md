---
id: ins_swyx-software-factory-replaces-prs
operator: swyx
operator_role: Co-founder of AI Engineer; writer and podcast host at Latent Space
co_operators: []
source_url: https://www.latent.space/p/pr-not-welcome
source_type: essay
source_title: "PRs NOT Welcome: How Top AI Open Source Projects Are Managing Thousands of Contributors"
source_date: 2026-09-01
captured_date: 2026-09-05
domain: [engineering, ai-native, founder-operator]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: case-study
score: { originality: 4, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: []
raw_ref: ""
---

# AI-native open source projects reject external PRs because agent-driven software factories close 70-80% of issues, making external human code contributions a net cost rather than a net benefit

## Claim
When software factories handle the majority of issue resolution, external human PRs become a coordination overhead rather than a contribution. Leading AI-native open source projects are closing external contributions not to restrict community but because agent pipelines already do the work better.

## Mechanism
Software factories are specialized agent pipelines organized around distinct functions: triage, bug reproduction, implementation, and code review. Each stage uses a trusted, auditable agent configuration rather than arbitrary human code. Because the factory pipeline is repeatable and trust can be established in the configuration over time, maintainers can merge agent-authored code with less review overhead than human-contributed code from strangers.

External human PRs carry a different cost structure: style inconsistency, partial implementations, review cycles, and maintainer time spent explaining context the contributor lacks. When a factory closes 70-80% of issues with code that is already reviewed by the pipeline, external PRs cover only the residual. That residual is not worth the coordination cost unless the issue is genuinely beyond current agent capability.

Community participation shifts but does not disappear. Issues become the primary input. Well-specified issues drive factory output quality. Discussion and triage become the contribution surface. Code contribution by external humans remains possible for problems agents cannot solve, but the bar rises because the comparison is now agent output, not no output.

## Conditions
Holds when: the project has an established software factory with trusted agent configurations and a large enough issue volume to justify the pipeline investment.

Fails when: the problem domain requires domain knowledge that agents lack, or when the project's architecture changes frequently enough that agent configurations go stale. Early-stage projects without a working factory still benefit from human contributions.

## Evidence
Vercel's software factory authors between 25 and 35% of PRs they merge and closes 70-80% of issues. Lars Grammel (Vercel AI SDK):

> "we develop trust in that particular agent configuration"

Fred Schott (Astro) described the inbound problem before the factory:

> "issues came in faster than we could handle them"

Agents resolved this entirely. Steve Ruiz (tldraw) on the new bar for external contributions:

> "if the issue is decently well-specified and the code can be written by agents"

## Signals
- Maintainers can point to a specific agent configuration as the trusted source for a class of PRs.
- Issue quality becomes the primary lever for output quality: better specifications produce better factory output.
- Contributor documentation shifts from "how to submit a PR" to "how to write a good issue."

## Counter-evidence
The projects cited (Vercel AI SDK, Astro, tldraw) are all relatively small, focused tools with active maintainers who can run and trust factory configurations. Large, heterogeneous codebases (Linux kernel, major frameworks with decades of accumulated complexity) may not be amenable to factory-level automation at equivalent coverage. The factory approach concentrates trust in agent configurations that must themselves be maintained.

## Cross-references
- (none in current corpus)
