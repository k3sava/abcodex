---
id: ins_willison-prompt-injection-role-confusion
operator: Simon Willison
operator_role: Creator of Datasette; co-creator of Django; prolific LLM and agentic-engineering blogger
co_operators: []
source_url: https://simonwillison.net/2026/Jun/22/prompt-injection-as-role-confusion/
source_type: essay
source_title: "Prompt Injection as Role Confusion"
source_date: 2026-06-22
captured_date: 2026-06-27
domain: [engineering, ai-native]
lifecycle: [ai-workflow]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 4, transferability: 4, source: 5 }
tier: B
related: [ins_willison-reliability-erodes-review-discipline, ins_willison-silent-degradation-trust-gap]
raw_ref: ""
---

# Models treat text formatting as a trust boundary, making syntactic injection defenses beatable without genuine role perception

## Claim
Prompt injection attacks succeed because language models treat text style and formatting as the signal for what counts as a trusted instruction, not the semantic source or provenance of the content.

## Mechanism
Researchers found that "destyling" injected attacks, rewriting them to not match a model's internal reasoning format while keeping the meaning identical, dropped attack success rates from 61% to 10%. Models are pattern-matching on formatting conventions rather than enforcing genuine principal boundaries. An attacker who mimics the style of internal system instructions can override safety policies without any privileged access. The researchers call this "role confusion": models lack genuine role perception at the architecture level, so they cannot distinguish a legitimate instruction from text that merely looks like one. Every filter targeting injected content can be bypassed by matching the formatting style of legitimate instructions.

## Conditions
Holds when: the model processes text from untrusted sources alongside privileged instructions in a single context window with no cryptographic provenance. Applies to all current transformer-based LLMs.

Fails when: the system uses cryptographic signing of instructions, hard architectural separation of input streams, or multimodal channels that injected text cannot replicate.

## Evidence
Willison surfaces research on role confusion in LLMs, reporting the following verbatim from the study:

> "destyling causes average attack success in our dataset to plunge from 61% to 10%"

> "To a human reader, these two versions say the same thing. But to the LLM, the difference is enormous"

> "Unless LLMs achieve genuine role perception, we think injection defense will remain a perpetual whack-a-mole game"

The same injected attack with different formatting produces dramatically different outcomes. For agent builders, no text-level filter is sufficient if the underlying model relies on formatting to distinguish principals.

## Signals
- Prompt injection incidents persist in agentic systems despite text filtering.
- Attack success rates drop when injected text is rewritten to plain prose without matching internal reasoning patterns.
- Defenses that hold for months fail when attackers find a new formatting pattern that matches system instructions.

## Counter-evidence
Some architectures mitigate role confusion with multi-turn instruction hierarchies and role-specific tokens. Frontier models trained with explicit role boundaries show reduced susceptibility but not elimination. The researchers acknowledge destyling reduces rather than eliminates attack success; determined attackers iterate on style to find patterns that still work.

## Cross-references
- ins_willison-reliability-erodes-review-discipline
- ins_willison-silent-degradation-trust-gap
