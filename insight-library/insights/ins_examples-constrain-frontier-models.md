---
id: ins_examples-constrain-frontier-models
operator: Thariq Shihipar
operator_role: Engineering lead, Claude Code, Anthropic
co_operators: []
source_url: https://simonwillison.net/2026/Jul/21/cat-and-thariq/
source_type: talk
source_title: "A Fireside Chat with Cat and Thariq from the Claude Code team"
source_date: 2026-07-21
captured_date: 2026-07-22
domain: [engineering, ai-native]
lifecycle: [ai-workflow]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_remove-features-as-models-improve]
raw_ref: ""
---

# Frontier models are more creative when system prompt examples are removed, because examples constrain rather than calibrate at this capability tier

## Claim
Removing concrete examples from system prompts improves frontier model output quality. Examples that calibrate earlier models constrain frontier models to the specific patterns you anticipated rather than the underlying intent.

## Mechanism
Earlier models needed examples to infer the desired behavior from abstract instructions; they could not generalize reliably without demonstrations of the expected output. Frontier models generalize well enough that examples become a ceiling rather than a floor. They constrain the model's outputs to the patterns the example set contains, instead of letting the model apply the underlying intent to novel cases the author did not anticipate.

Thariq Shihipar found this directly while reducing the Claude Code system prompt by approximately 80% after Claude Fable shipped. The model produced better outputs without the example set than with it, because the examples reflected a narrower distribution than the actual use cases Claude Code encounters. The shift is from demonstration-based calibration to context-based guidance: give the model understanding of the goal and problem space, not a gallery of expected outputs.

## Conditions
Holds when: the model is a frontier-tier model capable of strong generalization; the task space is broad enough that the example set cannot cover the full range of desired behaviors; the examples were drawn from a narrower distribution than the actual use cases.

Fails when: the task requires precise formatting or structure that cannot be inferred from abstract description alone; the model is a smaller or older model that requires demonstrations to behave reliably; the desired behavior is genuinely narrow and the example set comprehensively covers it.

## Evidence
Thariq Shihipar, at the AI Engineer World's Fair fireside chat with Cat Wu, as reported by Simon Willison:

> "We have different system prompts for different models now. One of the patterns we saw is that we were over-constraining Claude. The initial, maybe Opus 4-ish models wanted a lot of examples, and removing examples was extremely helpful, because it was just more creative than the examples we gave it."

He noted a parallel shift away from explicit prohibition instructions: "The other thing we did is try to give it more context and fewer 'do not do this' instructions, because that's a very strong impulse for Claude."

## Signals
- Removing an example set produces outputs that better match edge cases the examples did not cover
- The model generalizes the intent in directions that were not anticipated, and the generalizations are correct
- Explicit "do not do X" constraints produce more refusals on legitimate cases than they prevent actual failures

## Counter-evidence
Cat Wu noted an important nuance from the same fireside chat: "we found a few cases where yes, this statement is 90% true, but there's a real 10% of cases where it's not true. We didn't want to constrain the model, or confuse it into thinking it should always do this." The principle is not absolute. Some behaviors still require explicit guardrails because the 10% failure mode causes unacceptable outcomes. Removing examples is not equivalent to removing all structure; the shift is from output-demonstration to intent-and-context, which still requires careful calibration.

## Cross-references
- `ins_remove-features-as-models-improve`: Cat Wu's related pattern of removing model crutches from system prompts as models improve, from the April 2026 Lenny's Podcast.
