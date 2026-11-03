---
id: ins_willison-ai-survey-methodology-breaks
operator: Simon Willison
operator_role: Software developer; creator of Datasette; co-creator of Django
co_operators: []
source_url: https://simonwillison.net/2026/Nov/2/census-bureau-super-intelligence/
source_type: essay
source_title: "The U.S. Census Bureau and 'Super Intelligence'"
source_date: 2026-11-02
captured_date: 2026-11-03
domain: [ai-native-company-building, pmm]
lifecycle: [market-intelligence, measurement]
maturity: applied
artifact_class: case-study
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_willison-vibe-game-model-taste, ins_willison-agentic-coding-tripled-github]
raw_ref: ""
---

# U.S. AI adoption survey data lost comparability when the Census Bureau changed question wording twice in one year

## Claim
The Census Bureau's Business Trends and Outlook Survey changed its AI adoption question twice in twelve months. The apparent growth from roughly 12% to 40.7% adoption reflects three incompatible definitions, not continuous adoption growth.

## Mechanism
Trend data is valid only when the measuring instrument stays constant. Two changes broke the time series. First, a Nov 2025 change broadened scope from using AI "in producing goods or services" to "any of its business functions." The Bureau itself noted these periods were incomparable. Second, EO 14434 in Oct 2026 renamed "AI" to "Super Intelligence or SI, formerly referred to as Artificial Intelligence or AI," producing another break. Respondents answering three structurally different questions about three structurally different terms cannot form a valid trend. Each apparent jump reflects a definitional change, not a behavioral one.

## Conditions
Holds when: survey consumers cite adoption percentages without noting the wording discontinuities.
Fails when: analysis explicitly separates the three wording periods and draws no cross-period trend comparisons. Willison's own method treats each period as a separate line with its own 6-survey trailing average.

## Evidence
Willison traces the wording changes to primary Census Bureau documentation and the Executive Order itself. Large-firm (250+ employee) adoption figures across the three periods: approximately 12% under original wording, approximately 30% under the broadened Nov 2025 wording, and 40.7% under the Oct 2026 "Super Intelligence" wording.

> "Beginning with the October 19, 2026 collection, instrument wording was updated due to Executive Order 14434."

The Bureau acknowledged the Nov 2025 change made the two preceding periods incomparable. The Oct 2026 change compounds the break.

## Signals
- A report cites a steep upward trend in "AI adoption" without noting mid-series wording changes.
- Adoption percentages doubled between consecutive survey periods with no other evidence of a step-change event in the underlying technology.
- The survey instrument's question text changed in the same period as the reported growth.

## Counter-evidence
The broadened question scope may capture a more accurate picture of economic reality: businesses use AI across more functions than production, and the original narrow wording may have understated true exposure from the start. Some analysts argue the directional trend (rising, regardless of baseline) still holds for decision-making even if precise cross-period comparisons do not. Multiple private surveys using consistent methodology over this period did show consistent growth independent of Census Bureau framing changes.

## Cross-references
- See `ins_willison-agentic-coding-tripled-github` for Willison's analysis of GitHub Octoverse data, another case of working carefully with aggregate statistics.
