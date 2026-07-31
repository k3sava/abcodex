---
id: ins_tunguz-model-chip-ownership-premium
operator: Tomasz Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/microsoft-resells-the-frontier/
source_type: essay
source_title: "Microsoft Resells the Frontier"
source_date: 2026-07-29
captured_date: 2026-07-31
domain: [ai-native, founder-operator]
lifecycle: [strategy]
maturity: frontier
artifact_class: metric-model
score: { originality: 4, specificity: 5, evidence: 4, transferability: 3, source: 4 }
tier: B
related: [ins_tunguz-moe-sparse-cost-collapse, ins_tunguz-harness-benchmark-delta, ins_tunguz-compute-cost-inversion]
raw_ref: ""
---

# Full-stack AI ownership at the model and chip layers produces nearly 2x the revenue growth of the resell-and-rent approach

## Claim
Cloud providers that own their foundation model and custom chips (Google: Gemini plus TPUs) grow cloud revenue at nearly twice the rate of those that resell third-party models and rent commodity Nvidia silicon (Azure: resells OpenAI, runs on Nvidia). The ownership premium shows up in both growth rate and operating margin, and it funds more aggressive reinvestment than a reseller's economics can sustain.

## Mechanism
A reseller pays margin out at two layers: to the model vendor and to the chip vendor. Every dollar of inference revenue carries both costs. An owner pays neither. Google keeps the spread on TPU utilization that a competitor would pay Nvidia, and keeps the margin on Gemini inference that Azure pays OpenAI. That retained margin funds $44.9 billion in quarterly capex, nearly twice Google Cloud's $24.8 billion revenue for the same period. The reinvestment cycle widens the gap.

The Azure concentration risk runs in the opposite direction. Roughly $220 billion of Microsoft's $678 billion contracted backlog traces to OpenAI's Azure commitment. Azure's standalone growth rate, excluding OpenAI, was approximately 25% — not 43%. Tunguz names the structural vulnerability plainly: "every model is substitutable." When a capable open-weight alternative matches OpenAI's benchmark performance, the anchor tenant has an exit option and the backlog shrinks.

Google Cloud operating margin expanded from 20.7% to 35.6% in the same reporting period. AWS grew 28%. The margin trajectory and the growth gap are consistent with the ownership premium thesis: when you eliminate two layers of external vendor margin, the retained earnings compound into infrastructure advantage.

## Conditions
Holds when: the AI market continues to require both custom silicon and frontier model investment at scale, and when ownership of both confers durable margin advantage over the resell model. Strongest for hyperscalers where capital efficiency at scale determines growth.

Fails when: open-weight models become good enough that proprietary model ownership loses pricing power; or when commodity GPU clusters match TPU efficiency, closing the silicon ownership gap. Also fails if OpenAI's Azure commitment proves non-negotiable for the forecast period and Azure's effective growth rate remains above 40%.

## Evidence
Tunguz synthesized Q2 2026 earnings data across the major cloud providers:

> "Google owns its models & chips & spends aggressively on the margin that ownership captures"

The quantified outcome: Google Cloud at 82% YoY growth, Azure at 43%, AWS at 28%. Azure passed $100 billion in annualized revenue, making the growth gap notable at scale, not just at the margin.

The Nvidia CDS (credit default swap) signal Tunguz cites is a second-order indicator. Nvidia's five-year CDS trades at 82 basis points. Oracle's at approximately 215 basis points. The market prices Oracle's AI infrastructure bet as higher-risk than Nvidia's chip business, consistent with the reseller-vs-owner framing.

## Signals
- Google Cloud operating margin expanding while reseller margins compress is a leading indicator of the ownership premium widening.
- Azure growth rate excluding OpenAI is the clean signal to watch; if it falls further from 25%, the reseller dependency is deepening rather than diversifying.
- Any major customer shifting frontier model vendors tests the "every model is substitutable" thesis directly.

## Counter-evidence
The 82% versus 43% growth gap reflects a single quarter's earnings and may not persist. Google Cloud is growing from a lower base than Azure, making percentage comparisons partly a base-rate artifact. Azure's OpenAI relationship includes co-development and early access that may prove difficult to replicate with open-weight alternatives, limiting the substitutability risk Tunguz identifies. Microsoft's $35.8 billion quarterly capex (plus finance leases reaching approximately $41 billion) is also substantial reinvestment, narrowing the capex-per-revenue gap over time.

## Cross-references
- `ins_tunguz-moe-sparse-cost-collapse`: sparse MoE architecture collapses inference cost. The chip ownership premium thesis extends here: a provider that owns the silicon captures the full efficiency gain from MoE at inference time, while a reseller pays the chip vendor for it.
- `ins_tunguz-harness-benchmark-delta`: harness engineering determines performance output. Ownership of the model gives a provider the ability to co-optimize harness and weights, a capability a pure reseller cannot replicate.
- `ins_tunguz-compute-cost-inversion`: AI-native companies run compute at 2.3x payroll. The ownership premium thesis is the cloud-layer analog: who captures the margin on that compute bill depends on who owns the model and the silicon running it.
