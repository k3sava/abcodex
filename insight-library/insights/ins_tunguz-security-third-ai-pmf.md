---
id: ins_tunguz-security-third-ai-pmf
operator: Tom Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/the-third-product-market-fit-in-ai/
source_type: essay
source_title: The Third Product-Market Fit in AI
source_date: 2026-10-26
captured_date: 2026-10-28
domain: [ai-native, engineering]
lifecycle: [market-entry, strategy]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 5, evidence: 5, transferability: 3, source: 5 }
tier: A
related: [ins_tunguz-security-tooling-gap, ins_tunguz-security-tops-ai-barrier-2026]
raw_ref: ""
---

# Security is AI's third product-market fit, after coding and customer support

## Claim
Security is the third vertical where AI has achieved product-market fit. AI-augmented attackers can now parallelize campaigns at machine speed; human security teams cannot match that throughput. The only viable defensive response is AI-native security tooling operating at the same scale.

## Mechanism
Attackers deploy AI to run campaigns across thousands of targets simultaneously. One tracked 5-day campaign extracted 78,330 secrets from 2,186 organizations. A human analyst team cannot keep pace with that volume. Deploying AI on defense is not optional. The same token-heavy demand pattern that coding tools and customer support bots established now applies to security.

## Conditions
Holds when: attackers use AI to parallelize campaigns at scale; security headcount cannot grow proportionally to match attack volume.
Fails when: attacks remain manual and targeted; platform controls or regulation neutralize the attacker's AI advantage; AI security tooling remains too noisy for production SOC use.

## Evidence
Finance-sector ransomware rose from 156 incidents in 2024 to 202 in 2025 to 65 in Q1 2026 alone, a 76% year-over-year increase (Black Kite data). StepSecurity tracked 56 supply chain attacks over 12 months, including one 5-day campaign that stole 78,330 secrets from 2,186 organizations. Cisco Talos found 8 compromised eMudhra intermediate certificates. The security market totals $175B growing at 13% annually (Forrester). A Tunguz survey of 75 enterprise practitioners identified five AI-heavy security categories: SOC, SIEM, pentesting, threat intelligence, and vulnerability management.

> "AI can defend as well as it attacks, provided someone pays for the tokens."

> "Coding & customer support were the first two product-market fits in AI."

Greg Brockman (OpenAI) on the market scale:

> "Security spend should actually vastly outstrip software spend."

## Signals
- Enterprise security vendors adding AI-specific pricing tiers
- SOC teams adopting AI-driven triage at scale, not just AI-assisted search
- Security budget shifting from headcount toward tooling

## Counter-evidence
Security incidents are more contextually unique than coding autocomplete or customer support scripts. The gap between AI pattern matching and human judgment may be larger in security than the coding and support analogies imply. No AI security product has yet demonstrated throughput reliability comparable to GitHub Copilot in production.

## Cross-references
- ins_tunguz-security-tooling-gap
- ins_tunguz-security-tops-ai-barrier-2026
