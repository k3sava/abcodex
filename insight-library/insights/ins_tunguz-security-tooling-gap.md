---
id: ins_tunguz-security-tooling-gap
operator: Tom Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/ai-in-practice-survey-2026/
source_type: research
source_title: "The Theory 2026 AI Survey Results"
source_date: 2026-10-13
captured_date: 2026-10-16
domain: [ai-native, engineering]
lifecycle: [strategy, ai-workflow]
maturity: applied
artifact_class: metric-model
score: { originality: 3, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_tunguz-decision-model-bifurcation, ins_tunguz-ai-category-winner-premium]
raw_ref: ""
---

# Security tops AI adoption pain points while security tooling delivers the least value of any category

## Claim
Security and governance ranked first in AI adoption pain points at 43% of respondents in Theory's 2026 survey, but only 10% of builders say security tooling currently delivers the most value, creating the largest gap between felt pain and available tooling across the AI stack.

## Mechanism
Pain concentrates where deployment risk is highest. For enterprise teams, security and governance determine whether AI can be deployed at all, not just how well it performs. Tooling development lags because capital and engineering talent concentrated on model performance, evaluation frameworks, and deployment infrastructure first. The gap is self-reinforcing: inadequate security tooling keeps adoption risk high, which sustains security as the top pain point. The 18% who expect security tooling to lead in the future, the largest expected gain of any category, reflects where investment is likely to flow next.

## Conditions
Holds when: enterprise buyers face regulatory or compliance constraints on AI deployment; tooling investment tracks pain-point timing with a lag.

Fails when: a well-resourced platform player ships a broadly adopted security toolkit quickly; compliance requirements become lighter as regulators settle on lower-burden frameworks; the sample skews toward security-exposed industries.

## Evidence
Theory's second annual AI in Practice Survey, fielded September 22, 2026, with 455 senior technical builders.

- Security and governance rose from sixth to first among pain points in twelve months.
- 43% named security and governance as the top pain point; evals ranked second at 22%.
- Only 10% say security tooling delivers the most value today.
- 18% expect security tooling to lead in the future, the largest expected gain of any category surveyed.

Additional findings from the same survey:
- Model routing: 45% of teams route queries across models (23.7% trained their own router, 21.5% use a proprietary one).
- Sandbox hosting for code execution: 62% of teams use Cloudflare; Vercel 17%, Modal 16%, E2B 12%.
- Agent performance review: 56% use business intelligence tools to analyze agent performance.

## Signals
- Growth in security-focused AI vendors receiving early enterprise contracts
- Compliance certification requirements appearing in RFPs for AI tools
- Security becoming a line item in AI procurement evaluations rather than an afterthought

## Counter-evidence
The year-over-year comparison is methodologically imperfect: 2025 used a ranking format while 2026 used a 1 to 7 rating scale, so the movement from sixth to first cannot be taken as a precise measure. The 455-respondent sample may over-represent startups and under-represent large regulated enterprises with mature security functions already in place. Evals tooling is developing quickly (ranked second at 22%), suggesting the overall tooling ecosystem is maturing, not stalled.

## Cross-references
- `ins_tunguz-decision-model-bifurcation`: Hardened AI decision models that run at scale already face the security and governance requirements this survey identifies as under-served.
- `ins_tunguz-ai-category-winner-premium`: The AI infrastructure category winner trades at a 3 to 8x premium; security tooling is the open category most likely to generate a similar outcome.
