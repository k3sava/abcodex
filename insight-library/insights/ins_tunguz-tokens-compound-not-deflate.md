---
id: ins_tunguz-tokens-compound-not-deflate
operator: Tom Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/jevons-works-on-tokens-not-on-dollars/
source_type: essay
source_title: "Will AI Deflate Like Lightbulbs or Compound Like Copper?"
source_date: 2026-11-24
captured_date: 2026-11-28
domain: [ai-native]
lifecycle: [strategy]
maturity: frontier
artifact_class: metric-model
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_tunguz-tier-segmentation-jevons, ins_tunguz-inference-pricing-value-beats-cost-plus, ins_tunguz-model-substitution-reinvestment]
raw_ref: ""
---

# Token prices fell 43% and volume grew 11.1x. AI spend is compounding like copper, not deflating like lightbulbs.

## Claim
Jevons Paradox operates on AI tokens, not on dollars. As token prices fall, volume grows fast enough that total spending rises. Empirical elasticity from two independent panels runs between 4.3x and 6.8x — well above the 1.0x threshold where spending stays flat. Supply-side data (GPU rents up 48%) confirms that demand is not softening. AI is tracking copper, not lightbulbs.

## Mechanism
Jevons Paradox: cheaper unit prices increase total consumption enough that total spending rises. For AI tokens, this runs in two steps. Falling prices enable workloads that were previously cost-excluded: tasks that couldn't justify the cost at $X become viable at $0.57X. Existing workloads also scale in volume: teams that ran 100 tasks per day run 1,100.

The elasticity numbers quantify this. On the Ramp corporate card panel, a 1% drop in token price drove 4.3% more tokens consumed. On OpenRouter, the same 1% price drop drove 6.8% more tokens. Both are well above 1.0x. At 4-7x elasticity, every cost reduction the labs pass on is offset by more than four times that volume.

The supply side confirms from the other direction. Neocloud GPU rents rose 48% year over year. CoreWeave repriced 30-50% at lease renewal. If AI were lightbulb-like, data-center demand would be softening. It is not.

The lightbulb analogy fails here because lightbulb efficiency primarily removed a fixed-cost burden (lighting an already-lit room). AI efficiency unlocks new tasks: things that weren't done before because the economics didn't justify it. That's the copper analogy: rising copper prices historically accompanied expanding use cases, not shrinking ones.

## Conditions
Holds when: elasticity stays above 1.0x, requiring that price reductions continue to unlock new workloads faster than existing workloads saturate.

Fails when: elasticity falls below 1.0x — the pool of price-sensitive workloads has been absorbed and remaining workloads run at full capacity regardless of further price drops. Tunguz flags three signals to watch in 2027: spend-to-volume gap narrows, GPU rents and token prices converge, and frontier gross margins fall below 40%.

## Evidence
Ramp corporate card panel (demand side):
- Token prices fell 43%, token usage grew 11.1x
- Volume-to-spend ratio: 11.1x volume against 4.7x spending
- Elasticity: 4.3% more tokens per 1% price drop

OpenRouter panel (demand side):
- Volume-to-spend ratio: 50x volume against 21x spending
- Elasticity: 6.8% more tokens per 1% price drop

Anthropic S-1 (demand-side confirmation):
- Revenue grew 13.6x to $16.3B in H1 2026
- After Opus 4.5 price cut (November 2025), quarterly sales growth rose from 48% to 132%

Supply side:
- Neocloud GPU rents rose 48% year over year
- CoreWeave repriced 30-50% at lease renewal

Tunguz acknowledges panel biases: corporate cards miss direct enterprise and cloud marketplace deals; blended prices mix list cuts with routing to cheaper models; cached tokens cost up to 90% less, which inflates apparent elasticity.

## Signals
- Your AI token spend is rising even as per-token prices fall — this is Jevons in action, not mismanaged budgets.
- Use cases that were previously rejected on cost grounds are being greenlighted as prices drop.
- GPU capacity remains constrained at your cloud provider, with rents holding flat or rising.

## Counter-evidence
Both demand panels have methodological limits Tunguz names explicitly: corporate cards miss major procurement channels, and blended prices obscure the actual unit economics of specific models. The OpenRouter 6.8x elasticity figure may reflect platform-level growth rather than pure elasticity.

The lightbulb scenario is still possible if elasticity is currently above 1.0x but converging toward it. A 2027 price cut that finds no new workloads to unlock could produce a sudden spend decline even if the 2026 data looks copper-like.

Anthropic's S-1 revenue figure ($16.3B H1 2026) is from a document that has not been independently audited at time of writing.

## Cross-references
- `ins_tunguz-tier-segmentation-jevons`: Tunguz's August 2026 essay on sustaining Jevons' Paradox through model tier segmentation when GPU supply is constrained — the supply-side mechanism that feeds the demand pattern described here.
- `ins_tunguz-inference-pricing-value-beats-cost-plus`: value-based pricing for inference; the elasticity data shows why it is rational — buyers respond more to value unlocked than to raw per-token cost.
- `ins_tunguz-model-substitution-reinvestment`: when model costs fall, buyers reinvest into volume rather than pocketing savings — the token Jevons pattern is the aggregate version of this.
