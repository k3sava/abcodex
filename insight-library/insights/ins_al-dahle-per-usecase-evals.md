---
id: ins_al-dahle-per-usecase-evals
operator: Ahmad Al-Dahle
operator_role: Chief Technology Officer, Airbnb
co_operators: []
source_url: https://www.latent.space/p/airbnb
source_type: podcast
source_title: "Inside-Out AI: Rebuilding Airbnb Behind the Scenes and Across the Guest Experience"
source_date: 2026-10-02
captured_date: 2026-10-07
domain: [ai-native, engineering]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: workflow
score: { originality: 3, specificity: 4, evidence: 4, transferability: 5, source: 4 }
tier: B
related: [ins_al-dahle-everest-generalist-specialist]
raw_ref: ""
---

# Production AI deployments require a separate eval suite per use case, sampled from real production queries, not shared benchmarks

## Claim
Each distinct AI use case in production needs its own eval suite, built from production query samples including deliberately surfaced edge cases. Generic or cross-use-case benchmarks do not substitute for this.

## Mechanism
A search model and a support model solve different problems with different failure modes. The distribution of inputs matters: a support query and a search query share almost no vocabulary or intent structure. An eval that mixes them produces an average that accurately describes neither.

Production query sampling matters because synthetic benchmarks and manually crafted test sets miss the actual long-tail inputs that arrive in production. Real queries surface failure modes that adversarial construction does not anticipate. Sampling also ties the eval to the current state of the product; as usage patterns shift, the eval reflects the shift automatically.

The edge-case emphasis in support evals follows from business economics: a failure on a high-stakes support query (a billing dispute, a safety concern, an escalation) is disproportionately costly relative to a slightly irrelevant search result. Deliberate overweighting of edge cases aligns measurement with the actual risk profile.

## Conditions
Holds when: the system has enough production traffic to sample meaningful queries per use case; the team can maintain separate eval pipelines for each deployment; edge cases can be identified and labeled from production data.
Fails when: the system is pre-launch with no production queries to sample; a single model is deployed across so many tasks that per-use-case evals become operationally unwieldy.

## Evidence
Airbnb resolves roughly 50% of support tickets with AI agents (Al-Dahle: "So while we solve 50% of the tickets, we're actually deliberate about the tickets we don't choose to solve yet [with agents]."). Al-Dahle describes the eval methodology directly:

> "We run evals specifically for each use case. So if we're using a model for search, we have a set of search queries that are sampled from production that we measure against. If we're doing customer support, we also sample all the production queries that we care most about — including edge cases."

## Signals
- AI agents handle 40-50% of a support queue without a rise in escalation rate
- Model upgrades are evaluated against each use case independently before rollout
- Edge-case failure rates drop after each eval cycle
- Teams can identify with confidence which use cases are ready for increased automation

## Counter-evidence
Per-use-case eval suites are operationally expensive to maintain. A team deploying AI across ten product surfaces needs ten separate eval pipelines, each requiring labeled production data and ongoing upkeep as usage patterns shift. Organizations earlier in AI deployment may lack the tooling maturity to run this at scale. Cross-use-case evals catch regressions that span use cases, and abandoning them entirely in favor of isolated suites risks missing systemic model failures.

## Cross-references
- `ins_al-dahle-everest-generalist-specialist`: the Everest knowledge graph gives agents the context they need; per-use-case evals verify that the context is being applied correctly.
