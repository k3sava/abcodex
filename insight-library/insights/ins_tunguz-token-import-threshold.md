---
id: ins_tunguz-token-import-threshold
operator: Tom Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/when-does-the-us-become-a-net-importer-of-tokens/
source_type: essay
source_title: "When Does the US Become a Net Importer of Tokens?"
source_date: 2026-11-09
captured_date: 2026-11-11
domain: [engineering, ai-native]
lifecycle: [ai-workflow, strategy]
maturity: frontier
artifact_class: metric-model
score: { originality: 4, specificity: 5, evidence: 4, transferability: 3, source: 4 }
tier: B
related: []
raw_ref: ""
---

# US domestic token production becomes insufficient when demand growth exceeds roughly 2.5x annually, with net imports beginning between 2028 and 2030

## Claim
When AI token demand grows faster than US power and GPU capacity can expand, production moves abroad and the US becomes a net token importer; the crossover arrives between 2028 and 2030 depending on data center cancellation rates.

## Mechanism
Tunguz models token supply as a function of power. Power (GW) equals tokens demanded divided by tokens per watt. Hardware efficiency compounds at roughly 2.9x per year (a blended rate across NVIDIA Vera Rubin at 5.4x, Google Ironwood at 2x, AWS Trainium3 at 4x). US committed power grows from 31 GW in 2025 to 41 GW in 2026 to 66 GW in 2027. At a 45% data center cancellation rate, domestic supply falls short in 2028. At a 20% rate, the gap opens in 2029. At zero cancellations, supply holds through 2030. Beyond that crossover, US demand is served by overseas capacity.

An 88ms latency constraint limits which workloads can tolerate overseas production. Latency-sensitive inference stays domestic; batch and background workloads are candidates for import. The economic logic follows commodity trade: when domestic production costs exceed import costs, the commodity is imported.

## Conditions
Holds when: AI token demand compounds at above roughly 2.5x annually and US power expansion falls short of that rate. The power constraint is structural: permitting, grid interconnection, and construction timelines all move slowly relative to AI demand curves.

Fails when: demand growth slows materially, efficiency gains outpace current projections, or policy changes accelerate domestic power buildout faster than the Goldman Sachs grid projections model.

## Evidence
Key data points from Tunguz's Nov 9, 2026 analysis:

- Burst GPU rental: $12.29/hour (Ornn Compute Index, October 2026)
- Power as share of GPU-hour cost: 5%
- Capital recovery as share of GPU-hour cost: 64%
- Hardware efficiency compound rate: ~2.9x/year (blended across Vera Rubin, Ironwood, Trainium3)
- US committed power: 31 GW (2025), 41 GW (2026), 66 GW (2027) — from Goldman Sachs projections
- Cancellation scenarios: 45% rate → imports 2028; 20% rate → imports 2029; 0% → imports 2030

> "tokens will simply be produced elsewhere & imported"

## Signals
- Data center cancellation rates rising past 30% in public announcements.
- Power interconnection queues extending beyond 36 months in major US grid regions.
- AI cloud providers building capacity in regions with stranded power or favorable energy agreements.
- Latency-insensitive batch workloads migrating to overseas providers before latency-sensitive ones.

## Counter-evidence
The model assumes demand continues compounding above 2.5x annually, which is not guaranteed. If foundation model training plateaus or inference efficiency gains exceed hardware efficiency gains, domestic supply may remain sufficient beyond 2030. The latency constraint also creates a natural floor for domestic production: real-time consumer AI cannot import tokens across intercontinental links. Tunguz's analysis does not disaggregate demand by latency sensitivity, which limits precision on the volume available for import.

## Cross-references
- (none in current corpus)
