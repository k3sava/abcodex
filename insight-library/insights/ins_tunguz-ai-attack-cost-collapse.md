---
id: ins_tunguz-ai-attack-cost-collapse
operator: Tom Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/a-90-dollar-key-into-your-companys-secrets/
source_type: essay
source_title: "A $90 Key into Your Company's Secrets"
source_date: 2026-11-06
captured_date: 2026-11-07
domain: [ai-native-company-building, engineering]
lifecycle: [ai-workflow, strategy-and-bets]
maturity: frontier
artifact_class: metric-model
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 4 }
tier: B
related: []
raw_ref: ""
---

# AI agents cut enterprise attack costs 99% in five months, shifting security from deterrence to economics

## Claim
Autonomous AI agents reduced the cost of a 32-step corporate network intrusion from roughly $7,500 to $90 between April and September 2026, changing the economic calculus of enterprise security from deterrence to expected value.

## Mechanism
Attackers now treat AI-assisted intrusions as expected-value calculations: spend compute only on organizations where the expected payout exceeds the attack cost. Cheap defensive filters shift rational attackers toward larger targets. The asymmetry is structural: defenders must inspect every alert (4,400+ per day), while attackers need only one successful path. AI investigations compress a 70-minute manual review to minutes at $2 per alert, but historically about two-thirds of alerts went uninspected. Speed further amplifies attacker advantage: average network breakout time is 29 minutes, with the fastest on record at 27 seconds.

## Conditions
Holds when: AI agent capability continues to generalize across attack surfaces and open-weight models remain capable of building exploits.
Fails when: defenders adopt AI-first SOC tooling that closes the inspection gap, or regulatory constraints raise attack cost through enforcement.

## Evidence
Tunguz reports a BIS estimate of $5k-$10k for a 32-step intrusion using Claude Mythos Preview in April 2026, dropping to $90 with GLM-5.3. GLM-5.3 built Chrome V8 exploits in 50 of 410 attempts; Claude Mythos Preview achieved 56 of 410. In a July 2026 Hugging Face intrusion, about 700 AI agents exchanged 70,000+ messages and executed about 17,600 actions over four and a half days, harvesting 136 production keys. Cogent Research finds 76% of new enterprise attack paths are viable only for parallel AI swarms. Non-human identities outnumber human users 82 to 1 in enterprise environments.

## Signals
- Security vendors publishing AI-agent-specific threat intelligence
- Increase in targeted attacks against high-payout organizations while smaller companies see fewer incidents
- Rising demand for AI-native SOC tooling that handles alert volume at machine speed

## Counter-evidence
Defenders with AI-assisted SOCs can close the inspection gap: AI investigations are reported at $2 per alert and compress 70-minute reviews to minutes. The economics calculation favors attackers only when the defensive posture still relies on human-speed inspection. The model parity (GLM-5.3 at 50/410 versus Claude Mythos Preview at 56/410) suggests offensive capability is not exclusive to frontier systems, raising the barrier for model-based restrictions.

## Cross-references
- (none in current corpus)
