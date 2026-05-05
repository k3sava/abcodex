---
id: ins_ramanujam-leaders-fillers-killers
operator: Madhavan Ramanujam
operator_role: Senior partner Simon-Kucher; author Monetizing Innovation
source_url: https://www.simon-kucher.com/en/insights/monetizing-innovation
source_type: book
source_title: "Monetizing Innovation — Leaders / Fillers / Killers"
source_date: 2016-05-02
captured_date: 2026-05-05
domain: [product, pmm, gtm]
lifecycle: [pricing-packaging, productisation, segmentation]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 5 }
tier: B
related: [ins_ramanujam-three-wtp-questions, ins_simon-single-price-always-suboptimal, ins_dfy-dwy-diy-delivery-stack]
raw_ref: raw/expert-content/experts/madhavan-ramanujam.md
---

# Leaders, Fillers, Killers — segment customers by WTP, then bundle features by their role per segment

## Claim
After segmenting customers by needs, values, and willingness to pay, configure product bundles for each segment using the Leaders / Fillers / Killers framework. **Leaders** are the high-value features that drive purchase. **Fillers** are low-cost features that round out the bundle and signal completeness. **Killers** are expensive features the segment will not pay for. The categorisation enables efficient bundle design — different bundles for different segments, with each segment's bundle led by its Leaders and protected from its Killers.

## Mechanism
Within any product, features fall into three roles per segment (and the role is segment-specific — what is a Leader for one segment may be a Killer for another). High-WTP enterprise segments treat advanced security and admin features as Leaders; SMB segments treat the same features as Killers. Conversely, consumer-grade UX features may be Killers for enterprise (they look unprofessional) and Leaders for SMB. The framework forces explicit feature-by-segment classification, which produces tier structures that are economically efficient (no segment pays for what they don't value) and competitively defensible (each tier's Leaders match what its target segment actually buys on).

## Conditions
Holds when:
- The product has sufficient feature surface to support meaningful bundling.
- Customer segments are distinguishable by WTP and feature preferences.
- The team has WTP data per feature per segment (e.g., from the three-question conversation in the related card).

Fails when:
- Highly interdependent features that cannot be decoupled (some platforms, some integrated workflows).
- Homogeneous customer base where feature classification doesn't vary across segments.
- Marketing complexity costs from many tiers exceed the revenue gains.

## Evidence
> "segment customers by needs, values, and willingness to pay, then configure product bundles for each segment using the Leaders-Fillers-Killers framework."

— see `raw/expert-content/experts/madhavan-ramanujam.md` line 20.

## Signals
- Per-segment bundle composition is documented; each tier's Leaders are explicitly named and tested.
- Roadmap reviews include Killer-removal decisions for specific tiers (we will *not* ship feature X in tier Y because the segment treats it as a negative).
- Pricing analytics surface tier-conversion patterns that match the framework's predictions.

## Counter-evidence
The framework can over-engineer products with too many segments and too many bundles. Aggressive simplification (Stripe, Notion, early Slack) sometimes wins by collapsing tiers despite WTP heterogeneity. Use the framework when segment-WTP variation is genuinely large; skip it when simplicity is the differentiator.

## Cross-references
- `ins_ramanujam-three-wtp-questions` — the research method that produces the per-feature WTP data the framework requires.
- `ins_simon-single-price-always-suboptimal` — Simon's WTP-heterogeneity principle that the framework operationalises.
- `ins_dfy-dwy-diy-delivery-stack` — Hormozi's adjacent tier-design framework.
