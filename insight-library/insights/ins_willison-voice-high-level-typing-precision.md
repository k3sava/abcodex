---
id: ins_willison-voice-high-level-typing-precision
operator: Simon Willison
operator_role: Independent developer; creator of Datasette and Django co-creator
co_operators: []
source_url: https://simonwillison.net/2026/Oct/9/built-using-my-voice/
source_type: essay
source_title: "A new feature for my blog, built using my voice"
source_date: 2026-10-09
captured_date: 2026-10-10
domain: [engineering, ai-native]
lifecycle: [ai-workflow]
maturity: frontier
artifact_class: workflow
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 5 }
tier: B
related: [ins_willison-haiku55-context-cliff, ins_willison-hard-budget-caps-default]
raw_ref: ""
---

# Voice input works for high-level AI-assisted development direction; typing stays necessary for precision work and passing concrete examples

## Claim
Simon Willison built a new blog feature by describing requirements verbally to an AI coding assistant while cooking, then switching back to the keyboard for detail work, code review, and passing concrete examples. The workflow splits input modality by abstraction level: voice for intent, keyboard for precision.

## Mechanism
Voice removes the friction of sitting at a desk to describe requirements. Combined with a live dev server preview, the verbal description loop becomes usable: Willison could say what he wanted visually, see the result immediately on screen, and course-correct without typing.

But voice breaks down at two points. First, precision specifications: file paths, function signatures, variable names, and error messages require exact spelling. Second, passing context to the model: pasting a code block or a stack trace is faster and more accurate than dictating it. At those points, the keyboard is the better tool.

> "I still switch back to typing once I get down to the details of things though."

The enabling condition is the live preview. Without it, the voice input loop lacks a fast feedback cycle. The visual result confirms or refutes the description without requiring Willison to return to the keyboard to check.

## Conditions
Holds when: a live preview surface is available; the work is interface or layout direction rather than algorithmic logic; the developer is doing something else that makes sitting at a keyboard inconvenient.

Fails when: the task requires specifying exact identifiers, passing code snippets or error messages, reviewing the AI's code for correctness, or debugging specific failures. Also fails when the environment does not offer a live preview.

## Evidence
Willison published the account on October 9, 2026, describing building a specific blog feature with voice input. The post names the live dev server preview as the key enabling condition.

> "the addition of the visual preview"

is identified as what made the voice workflow viable at all, not just the availability of voice input alone.

## Signals
- Voice session produces a working visual result with zero keyboard interaction on the direction-setting phase
- Switching to keyboard happens at identifiable moments: code review, error diagnosis, precise naming
- Total session duration shorter than expected given the absence of keyboard for the high-level phase
- Works in multi-tasking contexts (another activity running in parallel)

## Counter-evidence
This is one developer's experience on one task. The specific feature Willison built is not disclosed in enough detail to compare it against tasks that might not suit the same workflow. The voice modality also depends on the AI model's ability to interpret natural language descriptions accurately. Voice-first development at team scale introduces different problems (shared understanding, documentation) that Willison does not address.

## Cross-references
- `ins_willison-haiku55-context-cliff`: understanding context accumulation matters for voice-driven loops that produce many turns before a keyboard intervention.
