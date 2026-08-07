---
id: ins_grennan-ai-roi-target-setting
operator: Conor Grennan
operator_role: Dean of Students, NYU Stern School of Business; AI adoption practitioner and educator
co_operators: []
source_url: https://www.ai-mindset.ai/ai-mindset-newsletter/how-to-actually-measure-ai-roi
source_type: essay
source_title: "How to Actually Measure AI ROI (Start With the Target)"
source_date: 2026-07-31
captured_date: 2026-08-07
domain: [ai-native, leadership-org]
lifecycle: [ai-workflow, strategy, attribution]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 5, source: 3 }
tier: B
related: [ins_start-with-support-fastest-ai-roi]
raw_ref: ""
---

# AI ROI measurement fails because organizations deploy AI without first defining what better work looks like

## Claim
Organizations cannot measure AI ROI because they never set targets before deployment. Unlike traditional software, AI does not produce fixed outputs. The gain appears in how people work, not in a metric the tool generates automatically.

## Mechanism
Traditional software ROI is relatively straightforward: the tool has built-in outputs (tickets closed, emails sent, rows processed), and "better" means more of those outputs at lower cost. The improvement is built into the box. Measurement is retrospective comparison.

AI changes this. The gain shows up in qualitative improvement to a person's work: a better first draft, a more thorough analysis, a faster decision. The tool does not automatically generate a "quality of draft" metric. The organization has to define what "better work" looks like for each role, per-person, before deployment. Then they track whether it happened.

Grennan's framing: "With AI, the tool fits to the person. The gain isn't built into the box this time."

This means ROI measurement has to be designed before the deployment, not reverse-engineered from the data afterward. Teams that try to measure AI impact after deployment find no consistent baseline to compare against, because they never defined the target.

> "The problem is that we've never defined what our people's work looks like when it gets better."

> "If you never set a target, you can't know if you hit it."

## Conditions
Holds when: deploying AI for knowledge work roles where output quality is the primary gain vector (writing, analysis, research, synthesis). The pre-definition requirement is strongest here because quality doesn't auto-log.

Partially applies to: process automation use cases where task volume and time are measurable. Even here, the risk is measuring velocity without checking whether quality changed.

Fails when: the AI deployment is purely operational (data extraction, classification, transcription) and produces measurable output counts. Traditional ROI frameworks work for these cases.

## Evidence
Grennan's argument is observational: he documents the pattern of organizations struggling to demonstrate AI ROI after the fact. No controlled study is cited. The framing aligns with a broader practitioner consensus on the gap between AI investment and measurable return.

The scan roster identifies Grennan as an AI adoption practitioner at NYU Stern, with a focus on the behavioral (rather than technical) dimensions of AI adoption. His newsletter at ai-mindset.ai tracks enterprise AI adoption patterns.

## Signals
- Leadership requesting ROI proof after deployment but no targets were set before: classic version of this failure.
- Productivity metrics (e.g., tasks per hour) improving while output quality is unmeasured: the deployment may be creating speed without value.
- Teams comparing AI-era output volume to pre-AI volume without defining what output quality looks like: measuring the wrong variable.

## Counter-evidence
Pre-defining "better work" per role is harder than Grennan's framing implies. Knowledge work quality is often subjective and context-dependent. Some organizations will set targets that are easily gamed (word count, response time) rather than targets that reflect actual improvement. The measurement design problem does not disappear just because the target-setting step is added upfront.

## Cross-references
- `ins_start-with-support-fastest-ai-roi` identifies customer support as the function with the most measurable near-term AI ROI. This card names the prerequisite: even for support, the target definition has to precede the deployment.
