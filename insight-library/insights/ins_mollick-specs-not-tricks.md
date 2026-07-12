---
id: ins_mollick-specs-not-tricks
operator: Ethan Mollick
operator_role: Professor, Wharton School; author of Co-Intelligence and Co-Existence
co_operators: []
source_url: https://x.com/emollick/status/2074307813392732279
source_type: thread
source_title: ""
source_date: 2026-07-07
captured_date: 2026-07-12
domain: [ai-native, future-of-work]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 4, transferability: 5, source: 4 }
tier: B
related: [ins_mollick-commission-not-steer, ins_mollick-patron-not-wizard, ins_shipper-tend-your-loop]
raw_ref: ""
---

# Prompting tricks produce no reliable advantage on frontier models; specification discipline is the effective skill

## Claim
Prompting tricks, including politeness formulas, threats, expert personas, and chain-of-thought instructions on reasoning-optimized models, offer no reliable improvement on frontier AI. Four Wharton research reports found no significant gains on hard benchmarks from any of these widely promoted techniques. What correlates with better outputs is specification discipline: clear goal statements, defined output formats, explicit quality criteria, and verification tests. Mollick describes this as identical to what makes any strong contractor productive.

## Mechanism
Frontier models are trained to be helpful under a wide range of input formats. Trick-based prompting attempts to exploit training-time patterns that newer models have increasingly smoothed over. Specification discipline works because it solves the actual information deficit: models fail not because they lack a politeness formula but because they lack a clear picture of what good looks like. A legible goal, an explicit output format, and a test for success give the model the constraints it needs to generate a useful result.

The parallel to contractor management is direct. A brief that specifies deliverables, quality bars, and acceptance criteria produces better work than one that phrases the request politely or threatens consequences. The model, like a skilled contractor, can self-organize around well-specified requirements. It cannot compensate for requirements that were never stated.

## Conditions
Holds when: using frontier models on tasks where the desired output can be specified before work begins.
Fails when: the task is genuinely exploratory and the desired output cannot be defined in advance; or when using smaller, earlier-generation models for which training-time patterns may still respond to surface-level prompting.

## Evidence
Four Wharton Prompting Science reports documented the decay of popular tricks. Universal prompt formulas showed contingent, not reliable, improvement. Chain-of-thought instructions showed declining returns on reasoning-optimized models, increasing tokens and latency without corresponding quality gains. Tipping and threatening produced no significant improvement on GPQA and MMLU-Pro benchmarks. Expert personas left factual accuracy unchanged and did not substitute for task-specific detail.

Mollick's July 7, 2026 thread framed the correct alternative as the same practice that makes a strong hire productive: specify goals, specify the output, specify what good and bad look like, and specify how to test the results. He noted that this is, in practice, management.

## Signals
- Prompt quality improves when measured against an explicit rubric rather than by gut feel about the request's tone.
- Identical tasks with different output specifications consistently outperform identical tasks with different politeness levels.
- Teams that write evaluation criteria before prompting report fewer revision cycles than teams that iterate on phrasing.

## Counter-evidence
The Wharton research used academic benchmarks (GPQA, MMLU-Pro) that may not capture performance on creative or open-ended tasks where conversational framing could still matter. Chain-of-thought approaches may remain effective in specialized reasoning contexts or with smaller models not covered by the four reports. The tips-and-threats finding may not generalize to non-English-language interactions where cultural politeness norms are more deeply embedded in training data.

## Cross-references
- `ins_mollick-commission-not-steer`: commissioning establishes the relationship frame; this card specifies what goes into the brief that a commission model requires.
- `ins_mollick-patron-not-wizard`: the patron role is the macro stance; specification discipline is the craft skill inside it.
- `ins_shipper-tend-your-loop`: Shipper's loop-tending frame requires quality criteria; this card supplies the research evidence that explicit criteria outperform informal prompting approaches.
