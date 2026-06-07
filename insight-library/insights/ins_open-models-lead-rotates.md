---
id: ins_open-models-lead-rotates
operator: Tomasz Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/the-thriving-ecosystem-of-open-models/
source_type: essay
source_title: The Thriving Ecosystem of Open Models
source_date: 2026-06-02
captured_date: 2026-06-07
domain: [ai-native, engineering]
lifecycle: [ai-workflow, strategy-bets]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_intelligence-per-dollar-model-metric, ins_commoditize-the-complement-ai, ins_build-for-next-model-not-current]
raw_ref: ""
---

# Open-weight model leadership rotates fast enough that committing to one provider consistently misses the next capability jump

## Claim
Open-weight models now generate 69.1% of named token volume on OpenRouter, and their leadership changes hands rapidly enough that any architecture locked to a single open provider systematically arrives late to each capability advance.

## Mechanism
Competition among open-weight models runs on a short feedback loop. Developers route each request to whichever model currently offers the best price-performance, making aggregate token share sensitive to new arrivals. When a better model appears, traffic migrates within weeks. DeepSeek held an early open-model lead; MiniMax and Kimi displaced it by late 2025 and early 2026. Any architecture that commits to a single open model bets implicitly that the current leader will hold its position. The OpenRouter data says that bet loses on a recurring basis.

Tunguz frames the dynamic with Hayek: "Competition is a discovery procedure." Developers routing freely are discovering the best current option continuously. An architecture that lets you reroute in hours captures each discovery. One that requires re-integration weeks captures none of them.

## Conditions
Holds when: open-model capability advances faster than the operational cost of switching providers; and the task set does not require proprietary API features unavailable outside the specific provider.

Fails when: a single model's specialized capabilities (long context, fine-tuned domain, multimodal) are genuinely irreplaceable for the target task; or when switching costs (eval retraining, integration work, compliance review) exceed the value of each capability increment.

## Evidence
OpenRouter token volume snapshot, June 2026: open-weight models at 69.1% of named model token volume, up sharply since 2025. Leadership sequence documented: DeepSeek early lead, displaced by MiniMax and Kimi models in late 2025 and early 2026.

> "Competition is a discovery procedure."
· Friedrich Hayek, cited by Tomasz Tunguz, https://tomtunguz.com/the-thriving-ecosystem-of-open-models/, 2026-06-02

## Signals
- Your AI cost benchmark needs a full update more than once per quarter.
- A model you evaluated six months ago is no longer in the top three for your task class.
- Competitors running model-agnostic routing are posting latency or cost advantages you cannot match on a fixed provider.

## Counter-evidence
Open-model dominance on OpenRouter reflects developer and hobbyist workloads more than enterprise production. Enterprises handling sensitive data often stay on closed models for compliance, contractual SLA, and indemnification reasons regardless of open-model performance gains. The 69.1% figure also covers a wide mix of task types; task-specific leadership may be more stable than aggregate token volume suggests.

## Cross-references
- `ins_intelligence-per-dollar-model-metric`: Tunguz's cost-per-outcome framing; model-agnostic routing is the operational implementation of that optimization target.
- `ins_commoditize-the-complement-ai`: Tunguz's earlier framing on AI labs commoditizing the application layer; open-model proliferation deepens that dynamic.
- `ins_build-for-next-model-not-current`: Sherwin Wu's related argument that heavy investment in current-model scaffolding depreciates within one release cycle; open-model churn is one reason the cycle is so short.
