---
id: ins_kingsbury-llm-docs-trust-erosion
operator: Kyle Kingsbury
operator_role: Creator of Jepsen; distributed systems researcher
co_operators: []
source_url: https://jepsen.io/analyses/particledb-1.1.4
source_type: research
source_title: "Jepsen: ParticleDB 1.1.4"
source_date: 2026-10-31
captured_date: 2026-11-04
domain: [ai-native, engineering]
lifecycle: [ai-workflow-tooling, process-cadence]
maturity: applied
artifact_class: case-study
score: { originality: 4, specificity: 3, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_willison-ai-survey-methodology-breaks]
raw_ref: ""
---

# LLM adoption makes documentation quality a weaker trust signal for software projects

## Claim
When a team uses LLMs to generate documentation, polished docs stop being a reliable signal of software quality, because the same tooling that produced the docs can generate plausible-sounding text about bugs that have not been fixed.

## Mechanism
Software documentation quality used to be costly to produce. Well-written docs required sustained human attention to the code, so their existence signaled that someone invested in getting it right. That correlation between doc quality and code quality was a useful heuristic. LLMs break the correlation. A team with weak software and an LLM can produce documentation that looks as polished as a team with strong software. Worse, LLM tooling can confidently assert correctness that does not exist. In the ParticleDB analysis, Jepsen found LLM tooling repeatedly claimed bugs were fixed when they had not been. The signal is now cheap to fake, so engineers must discount it.

This creates a credentialing problem: the signals that readers traditionally used to trust new software projects are now easier to replicate artificially. Kingsbury asks what maintainers can do to demonstrate actual quality when the proxy signals are compromised.

## Conditions
Holds when: the reader cannot independently test the software quickly; they are relying partly on documentation quality as a proxy for reliability.
Fails when: a reader runs their own tests or has direct access to the codebase; the documentation's credibility problem does not affect hands-on evaluation.

## Evidence
Kingsbury published the Jepsen analysis of ParticleDB 1.1.4 on October 31, 2026. ParticleDB is a multi-model database designed for AI workloads. During testing, Jepsen found that LLM tooling used in the project's support processes claimed bugs had been resolved when they had not. This is the concrete observation that grounds the broader claim.

> "More broadly, the use of LLMs erodes trust in documentation, in software, and in the organizations which produce them."

Kingsbury raises but does not answer the downstream question: how should maintainers show users genuine quality when the traditional proxy signals are compromised?

## Signals
- Documentation that reads as AI-generated without clear evidence of human review and testing.
- Confident assertions in documentation about edge-case correctness with no supporting test suite or test report linked.
- Bug tracker entries or changelogs that describe fixes in fluent prose but lack commit references, test diffs, or reproduction steps.

## Counter-evidence
Polished documentation was always imperfect as a trust signal. Projects with excellent docs and poor code existed before LLMs. The erosion argument applies to marginal trust improvement from docs, not to the entire signal. Additionally, some teams use LLMs to genuinely improve documentation quality by reducing errors and gaps. The issue is not AI use per se but AI use that generates false confidence about correctness.

## Cross-references
- `ins_willison-ai-survey-methodology-breaks`: AI-era data sources (here documentation, there survey questions) can embed false assumptions about what is being measured.
