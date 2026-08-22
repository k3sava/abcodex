---
id: ins_tunguz-intelligence-per-watt
operator: Tomasz Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://www.tomtunguz.com/intelligence-per-watt/
source_type: essay
source_title: "Mainframes became personal. So will your data center."
source_date: 2026-08-21
captured_date: 2026-08-22
domain: [ai-native, engineering, on-device-ai]
lifecycle: [ai-workflow, strategy]
maturity: applied
artifact_class: research
score: { originality: 3, specificity: 5, evidence: 5, transferability: 4, source: 4 }
tier: B
related: [ins_tunguz-minimill-local-routing, ins_tunguz-local-model-reasoning-path]
raw_ref: ""
---

# Routing everyday queries to local models cuts energy 80%, compute 77%, and cost 74% while matching frontier quality on 89% of tasks

## Claim
Stanford and Together AI research shows that local models now match frontier cloud models on 89% of everyday queries, and routing those queries locally cuts energy 80%, compute 77%, and cost 74% versus an all-cloud baseline.

## Mechanism
Intelligence-per-watt, the quality of AI output per unit of energy consumed, rose 5.3x from 2023 to 2026: algorithm improvements delivered 3.1x of that gain and hardware improvements delivered 1.7x. The local model win-or-tie rate against frontier cloud models rose from 23.2% in 2023 to 71.3% in 2025. A routing layer sits in front of both model types and directs everyday queries to the most efficient model that can handle them. Local models absorb 89% of everyday chat and reasoning queries at a fraction of the energy and cost. Frontier cloud models handle the remaining 11% that require deeper knowledge or higher stakes reasoning. The pattern mirrors the minimill dynamic in steel: decentralized, cost-efficient local production eventually outcompetes centralized production on the high-volume, lower-complexity majority of workloads.

## Conditions
Holds when: the workload is "everyday chat and reasoning" as defined by the Stanford research. Holds when the engineering team can maintain a routing layer and calibrate it as models evolve.

Fails when: queries require up-to-date factual knowledge the local model was not trained on. Fails when the task is in the 11% that require frontier-level breadth or multi-step expert reasoning. The routing layer adds engineering complexity; teams without infrastructure capacity may not recoup the efficiency gains.

## Evidence
Stanford University and Together AI published "Intelligence per Watt" in November 2025. The research covers everyday chat and reasoning query categories. Key figures:

- Best local model win-or-tie rate vs. frontier: 23.2% (2023) to 71.3% (2025)
- Intelligence-per-watt improvement: 5.3x over that period (algorithm: 3.1x, hardware: 1.7x)
- Local routing vs. all-cloud baseline: energy cut 80%, compute cut 77%, cost cut 74%
- 89% of everyday queries answered as well by local models as by frontier cloud models

## Signals
- Teams running local models for routine AI tasks report materially lower per-task cost without quality degradation on analytical workloads.
- Win-or-tie rate of local models against frontier models on internal evals approaches or exceeds 70%.
- Energy per AI task falls more than 5x when comparing 2023 baselines to current local model deployments.

## Counter-evidence
The 89% figure covers "everyday chat and reasoning queries," a specific category. Complex, knowledge-intensive, or multi-turn tasks requiring current information may still show a meaningful quality gap. Algorithm and hardware gains may plateau, slowing the intelligence-per-watt improvement curve. The routing layer itself adds engineering complexity and requires ongoing calibration as both local and frontier models evolve; teams without dedicated infrastructure capacity may not capture the full efficiency gain.

## Cross-references
- `ins_tunguz-minimill-local-routing`: Tunguz's June 2026 personal routing system showed 78% of his own queries handled locally with a 60% latency reduction. The Stanford research extends that empirical finding to a production-scale benchmark with energy and cost metrics.
- `ins_tunguz-local-model-reasoning-path`: Tunguz's August 18 benchmark showed local models match cloud quality via extended reasoning chains on VC analysis tasks. The intelligence-per-watt research adds the energy and cost efficiency dimension to that quality convergence finding.
