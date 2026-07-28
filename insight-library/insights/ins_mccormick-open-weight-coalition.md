---
id: ins_mccormick-open-weight-coalition
operator: Packy McCormick
operator_role: Writer and investor, Not Boring
co_operators: []
source_url: https://www.notboring.co/p/ai-is-oil-not-god
source_type: essay
source_title: "AI is Oil, Not God"
source_date: 2026-07-25
captured_date: 2026-07-28
domain: [strategy, ai-native, competitive]
lifecycle: [positioning, competitive-intelligence]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 3, evidence: 2, transferability: 4, source: 4 }
tier: B
related: [ins_mccormick-ai-compiler-not-runtime, ins_run-up-the-stack, ins_commoditize-the-complement-ai]
raw_ref: ""
---

# Tech giants support open-weight AI models because the model layer is a complement to their real revenues

## Claim
Major technology companies with combined market cap near $8 trillion publicly backed open-weight AI models in 2026. The backing is economically rational: each signatory profits from complementary services (chips, cloud compute, distribution platforms) rather than from foundation models themselves. Supporting open-weight models commoditizes the foundation-model layer and reduces the pricing power of model-first competitors.

## Mechanism
Joel Spolsky's "Strategy Letter V" named the pattern in 2002: smart companies commoditize their products' complements. When the product you need to sell (cloud compute, GPU chips, enterprise software) depends on adjacent infrastructure, making that infrastructure cheap or free expands your market while undermining competitors whose revenue comes from that infrastructure.

Every signatory to the open-weight letter is positioned this way: Nvidia sells chips that run any model; Microsoft sells Azure compute that hosts any model; Google benefits from open-weight proliferation because its distribution scale exceeds Anthropic's. The model itself is someone else's moat. For the signatories, it is a complement.

## Conditions
Holds when: the company's revenue comes primarily from a complementary layer (hardware, cloud, distribution) rather than from the model itself.

Fails when: the company's own model IS the product. The pattern reverses as soon as a signatory builds its own closed-weight frontier model at a competitive level. Companies playing both sides (infrastructure and foundation model) have mixed incentives.

## Evidence
McCormick draws on Spolsky's "Strategy Letter V," applying it to the July 2026 coalition letter signed by Satya Nadella, Jensen Huang, and others.

> "Signing this letter is a selfish act that also happens to align with the interests of consumers and millions of businesses."

The essay notes that every signatory either makes open-weight models or derives revenue from the complementary layer around them.

## Signals
- Infrastructure companies (cloud, chip, distribution) signing open-weight advocacy letters or funding open-weight labs
- Foundation model pricing remaining compressed despite demand, driven by open-weight alternatives
- Proprietary model labs losing enterprise distribution to companies that also offer the infrastructure layer

## Counter-evidence
The commoditize-the-complement dynamic assumes signatories benefit more from open markets than from proprietary control. Google and Microsoft are also building their own closed-weight frontier models. If their internal models reach the frontier, the calculus flips. McCormick's framing also leaves open whether the self-interest argument holds for non-infrastructure signatories such as a16z and YC, whose complements to the model layer are less direct.

## Cross-references
- `ins_mccormick-ai-compiler-not-runtime`: McCormick's prior framing of AI as a compiler rather than a runtime.
- `ins_run-up-the-stack`: McCormick on value migrating up the stack as lower layers commoditize.
- `ins_commoditize-the-complement-ai`: Tunguz applying the same Spolsky principle from the other direction, AI labs commoditizing application-layer software.
