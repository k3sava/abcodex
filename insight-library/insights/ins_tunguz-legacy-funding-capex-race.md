---
id: ins_tunguz-legacy-funding-capex-race
operator: Tom Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/crossing-the-trillion-dollar-chasm/
source_type: essay
source_title: "Crossing the Trillion Dollar Chasm"
source_date: 2026-10-29
captured_date: 2026-11-02
domain: [ai-native-operating, founder-operator-craft]
lifecycle: [scaling, strategy]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 4, transferability: 3, source: 4 }
tier: B
related: [ins_tunguz-commitment-leverage, ins_tunguz-gpu-inference-payback-ladder]
raw_ref: ""
---

# A platform bet succeeds only if the legacy business funding it stays profitable long enough to reach self-sustaining scale

## Claim
Hyperscalers building AI infrastructure face a race between two clocks: the clock for their new AI compute business to reach a trillion-dollar scale, and the clock for AI to erode the legacy cash flows that fund the capex. The company that builds its new engine before its legacy yield collapses wins.

## Mechanism
Legacy businesses fund AI capex. Those same businesses face AI-driven yield compression as AI changes how users and advertisers interact with them. Google Search earned 19% growth in Q1 2026 and 12% in Q3, while AI Mode queries monetize below classic search. Amazon Advertising grew 26% in Q2 and 12% in Q3 as external shopping agents route around its product search pages. The capex requirement keeps rising as compute needs grow. Free cash flow tracks the gap between what the legacy business generates and what the AI buildout costs. Alphabet's free cash flow turned negative at -$9.1B in Q3 on $51.4B capex. The companies that avoid this race have a structural advantage: Microsoft's enterprise ARPU rose through AI faster than seat growth slowed, leaving its cash engine intact through the transition.

## Conditions
Holds when: a company funds AI infrastructure capex from legacy business cash flows, and the AI transformation simultaneously threatens those cash flows.
Fails when: a company's AI revenues grow faster than the yield compression in its legacy business, or its legacy business is not in the direct path of AI disruption.

## Evidence
Q3 2026 earnings across hyperscalers: Google Cloud revenue doubled YoY to $30.7B but parent search growth slowed to 12%. AWS grew 39.3% to $46B annualized at $184B. Azure grew 48% to $33.2B. Against those revenues: Alphabet capex was $51.4B with -$9.1B free cash flow; Amazon capex ran $77.3B trailing twelve months with -$42.4B free cash flow; Microsoft posted $18.6B positive free cash flow on $45.2B capex. ServiceNow fell 29.6% across two days in late October on fears that AI would erode seat-based software pricing.

Tunguz models the crossing with a 15% annual decay rate applied to current growth, then projects when each cloud segment reaches a $1T annualized run rate. Under those assumptions, Google Cloud and SpaceX's compute segment cross $1T in 2030, and AWS in 2032, with no additional acceleration.

## Signals
- Legacy business revenue growth rate is decelerating quarter-over-quarter.
- Free cash flow margin is compressing despite revenue growth.
- The gap between capex commitment and operating cash flow is widening.
- Investors reprice the company on earnings day despite cloud segment growth.

## Counter-evidence
SpaceX is the exception that tests the model: its Super Intelligence segment grew 830% to $7.6B in Q3 with no legacy business at risk from AI. The race dynamic applies primarily to companies where the same AI adoption that creates cloud demand simultaneously threatens another revenue line. Pure-play AI infrastructure companies do not face it.

## Cross-references
- `ins_tunguz-commitment-leverage` covers the related finding from Anthropic's S-1: AI foundation model companies carry financial risk in non-cancelable compute commitments rather than debt. The capex-race dynamic described here applies to infrastructure builders competing for that same commitment capacity.
- `ins_tunguz-gpu-inference-payback-ladder` maps when inference capacity covers its own cost. This card maps the broader business-model race that determines whether the capex is funded long enough to reach that payback point.
