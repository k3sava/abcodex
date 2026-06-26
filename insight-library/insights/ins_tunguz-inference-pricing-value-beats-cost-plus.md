---
id: ins_tunguz-inference-pricing-value-beats-cost-plus
operator: Tomasz Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/so-you-want-to-sell-inference/
source_type: essay
source_title: "So You Want to Sell Inference"
source_date: 2026-06-22
captured_date: 2026-06-26
domain: [ai-native, founder-operator]
lifecycle: [strategy]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_tunguz-model-substitution-reinvestment]
raw_ref: ""
---

# Reselling inference at cost-plus yields zero margin as model prices compress

## Claim
Reselling AI inference at a cost-plus markup is a zero-margin business; the only sustainable pricing model is outcome-based, tied to value delivered rather than tokens consumed.

## Mechanism
As model providers compete, inference costs compress toward commodity. A cost-plus markup shrinks in lock-step with the underlying cost, eventually reaching zero. Customers who bring their own API keys (BYOK) eliminate the markup entirely. Value-based pricing (per resolved ticket, per completed task, per generated report) decouples revenue from infrastructure cost. When inference gets cheaper, the value-based operator's margin expands rather than disappears.

## Conditions
Holds when: the product delivers a measurable outcome the customer values above the inference cost (support resolution, code completion, document generation). Outcome value must be definable and consistently produced.

Fails when: the customer cannot define or measure outcome value, or when the product is primarily an interface layer rather than an outcome-generating system. Also fails when the customer's procurement process requires itemized cost-plus billing.

## Evidence
Tunguz draws the distinction directly:

> "Reselling inference at cost is a zero-margin business: a payment rail, not a software company."

> "Cost-plus is a payment processor with a dashboard. Value-based is software."

He notes that BYOK arrangements destroy cost-plus viability entirely while leaving value-based pricing intact, forcing cost-plus operators to compete on platform value they have not yet built.

## Signals
- Revenue grows as inference costs fall, rather than falling in proportion to token volumes.
- Customers pay per outcome (per ticket, per task, per report) rather than per session or per token.
- BYOK requests do not threaten the business model because the product charges for results, not compute.

## Counter-evidence
Value-based pricing requires clear outcome measurement, which is difficult in creative or advisory use cases where value is subjective. Buyers in budget-constrained organizations may prefer cost-plus billing because it maps to procurement categories they already understand. Some categories (e.g., copilots that augment rather than replace human steps) resist clean outcome metrics, leaving cost-plus as the only practical option until measurement matures.

## Cross-references
- `ins_tunguz-model-substitution-reinvestment` (Tomasz Tunguz on how model cost savings are reinvested in more tokens rather than returned to budget, June 2026)
