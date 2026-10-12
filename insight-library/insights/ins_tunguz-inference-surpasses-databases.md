---
id: ins_tunguz-inference-surpasses-databases
operator: Tom Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/inference-is-the-most-important-market-in-software/
source_type: essay
source_title: "Inference Is the Most Important Market in Software"
source_date: 2026-10-05
captured_date: 2026-10-12
domain: [ai-native, founder-operator]
lifecycle: [strategy, ai-workflow]
maturity: frontier
artifact_class: metric-model
score: { originality: 5, specificity: 5, evidence: 4, transferability: 4, source: 5 }
tier: A
related: [ins_tunguz-model-commodity-distribution-moat, ins_tunguz-ai-infrastructure-credit-event, ins_tunguz-ai-infrastructure-bullwhip]
raw_ref: ""
---

# AI inference spending will overtake database software by 2027, turning every application into an inference reseller

## Claim
AI inference spending rose from $25B in 2025 to $130B in 2026. Gartner forecasts $161B for databases in 2026. Tunguz projects inference reaching $350B by 2027. That makes inference the largest software cost category, ahead of databases, and converts every AI-augmented application into an inference reseller regardless of its intended business model.

## Mechanism
Three economic forces arrive together once inference surpasses infrastructure spending:

First, usage-based billing overturns the seat-license revenue model. Inference consumption scales with customer activity rather than headcount. A company with flat seat count can generate a wildly variable inference bill month to month.

Second, gross margins compress below classic SaaS benchmarks. Tunguz cites a blended SaaS gross margin benchmark of approximately 72%. Infrastructure costs are "suddenly a significant contributor to overall COGS," which pushes application-layer margins below that floor unless vendors build proprietary harnesses that reduce token overhead, or model price competition runs faster than supply constraints.

Third, the bring-your-own-key design creates a margin-versus-revenue tradeoff. When customers supply their own model credentials or GPU capacity, the vendor keeps a higher margin percentage on a much smaller revenue base.

Capability-adjusted token costs fall approximately 47% per quarter (Epoch AI data). Tunguz notes the frontier blended token price rose from $0.96 to $11.25 over 18 months, then reset to $4.00 with GPT-6 Sol. Fast price decline is not guaranteed, which makes the margin calculation highly time-dependent.

## Conditions
Holds when: AI inference is deeply embedded in core product workflows (not a feature bolt-on); model switching costs are low enough that multiple providers compete on price; usage grows faster than price falls.
Fails when: a vendor captures proprietary model access or builds a routing layer that isolates inference costs; usage-based billing is contained to a separate product tier that never exceeds base subscription value; a dominant model holds pricing power that arrests the 47%/quarter decline.

## Evidence
Tunguz cites:
- AI model spending: approximately $25B (2025) rising to approximately $130B (2026).
- Gartner database forecast for 2026: approximately $161B.
- Projected inference market by 2027: approximately $350B.
- Epoch AI data: capability-adjusted token costs fall approximately 47% per quarter.
- Frontier blended token price: $0.96 at one point in the past 18 months, peaked at $11.25, reset to $4.00 with GPT-6 Sol.

> "a structural transformation mutating every application into an inference reseller."

> "The inference consumption bill will exceed the seat license or base subscription."

> "Infrastructure costs are suddenly a significant contributor to overall COGS"

## Signals
- Inference line items appear in customer budget conversations that previously covered only seat licenses
- Your infrastructure spend as a percentage of gross revenue is rising quarter over quarter
- Customers ask about BYOK options within months of going live, not years
- Gross margins are compressing faster than usage is growing

## Counter-evidence
The 47%/quarter price-decline assumption comes from a period of rapid model competition. If the frontier consolidates around two or three dominant labs, price discipline returns and the margin compression accelerates. Tunguz's own October 7 post (`ins_tunguz-model-commodity-distribution-moat`) describes a parallel force: model prices fall 41% while token usage rises 50%, which compresses margins at the application layer in a different way than the inference-reseller frame predicts. The two frames are complementary, not contradictory. A counterpoint: some applications move inference to the edge or on-device, effectively removing third-party inference costs from the COGS calculation entirely.

## Cross-references
- `ins_tunguz-model-commodity-distribution-moat`: the October 7 companion post describing how commodity model dynamics shift competitive advantage toward distribution rather than model quality. Together, the two posts frame the full market inflection: inference cost escalates while the application layer loses pricing power.
- `ins_tunguz-ai-infrastructure-credit-event`: Tunguz's September post on the $4T AI data center debt wave. The supply-side pressure described there directly affects whether inference prices decline fast enough to offset the margin compression described here.
