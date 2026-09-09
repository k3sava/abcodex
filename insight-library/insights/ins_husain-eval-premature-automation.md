---
id: ins_husain-eval-premature-automation
operator: Hamel Husain
operator_role: Independent AI engineer; co-creator, AI Evals for Engineers and PMs course
co_operators: []
source_url: https://hamel.dev/blog/posts/evals-skills/
source_type: essay
source_title: "Evals Skills for Coding Agents"
source_date: 2026-08-31
captured_date: 2026-09-09
domain: [engineering, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: playbook
score: { originality: 3, specificity: 4, evidence: 3, transferability: 5, source: 4 }
tier: B
related: []
raw_ref: ""
---

# Eval tooling anchors teams on generic automated metrics before they have examined enough outputs to know what actually fails

## Claim
Standard evaluation frameworks steer teams toward configuring automated metrics before they understand their own system's failure modes. The result is evals that measure what the tool makes easy to measure, not what is actually going wrong.

## Mechanism
Eval tools present a configuration interface: pick metrics, set thresholds, connect a dataset. This interface creates anchoring bias. Teams fill in the form without first building a grounded picture of what their system actually produces across a representative sample. They end up automating a judgment about quality that no one in the organization has yet formed empirically. Generic off-the-shelf metrics (coherence, groundedness, relevance) measure general-purpose properties that may not correspond to the specific failure modes their product actually exhibits. By the time the automated eval runs, it has baked in assumptions from a tool designer, not from anyone who has read 50 actual system outputs.

Husain's approach reverses the order: look at real outputs first, annotate them, let failure modes emerge from the data, then build evaluation logic that measures the things you have actually seen fail. The eval tool becomes an amplifier for human judgment formed on real data, not a substitute for that judgment.

## Conditions
Holds when: the team is building a domain-specific AI application where general quality rubrics do not map cleanly onto product-specific success criteria. Most productized LLM applications fall into this category: customer support, code generation, document extraction, content moderation, and similar tasks all have failure modes specific to the product context.

Fails when: the task is generic enough that off-the-shelf metrics accurately capture what matters (for example, translation quality benchmarks on established language pairs, or factuality checks against a fixed knowledge base with verified ground truth).

## Evidence
Husain and Shreya Shankar built the AI Evals for Engineers and PMs course from feedback across 50+ companies and over 4,500 students. The evals-skills blog post, updated August 31, 2026, documents the most common mistakes found across those engagements.

> "Eval tools often get in the way. They nudge you toward generic off-the-shelf metrics and fully automated evals before you've looked at your data."

The error-discovery skill introduced in the August 2026 update operationalizes the alternative: the coding agent builds a custom annotation interface, samples outputs intelligently from traces, and groups annotator notes into failure modes that emerge from observed data rather than prescribed categories.

## Signals
- Teams can name 3 or more specific failure modes with concrete examples before configuring any automated eval
- Annotation labels are derived from observed outputs, not from the eval tool's default metric library
- Eval precision/recall on human judgment exceeds 80 percent before automation is added

## Counter-evidence
Fully manual error analysis does not scale. For high-volume systems producing thousands of outputs daily, some automated metric is necessary as a first filter, even if imperfect. The argument is not against automation per se but against automation before the failure-mode model is grounded in actual data. At sufficient scale, the cost of the grounded approach (building custom annotation tooling, sampling strategies, annotator training) can itself become a bottleneck, making good-enough generic metrics a practical compromise.

## Cross-references
- (none in current corpus)
