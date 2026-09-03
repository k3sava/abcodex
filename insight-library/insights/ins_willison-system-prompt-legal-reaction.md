---
id: ins_willison-system-prompt-legal-reaction
operator: Simon Willison
operator_role: Creator of Datasette; independent developer and blogger on LLM engineering
co_operators: []
source_url: https://simonwillison.net/2026/Sep/2/claudes-new-system-prompt/
source_type: post
source_title: "Claude's new system prompt"
source_date: 2026-09-02
captured_date: 2026-09-03
domain: [engineering, ai-native]
lifecycle: [ai-workflow, strategy-bets]
maturity: applied
artifact_class: case-study
score: { originality: 3, specificity: 4, evidence: 3, transferability: 3, source: 4 }
tier: B
related: [ins_willison-system-prompt-knowledge-injection, ins_willison-ai-product-capability-opacity]
raw_ref: ""
---

# Published AI system prompts are reactive legal compliance tools, not complete transparency signals, because unpublished feature-specific behavioral blocks remain hidden

## Claim
AI vendors can implement behavioral restrictions in system prompts within days of legal events, without model retraining. But published prompts represent only the "core" system message. Feature-specific behavioral rules in separate unpublished blocks mean the published prompt understates the model's actual behavioral constraints.

## Mechanism
System prompt edits take effect immediately, without the time, cost, or disruption of model retraining. When legal events create pressure for behavioral compliance, the path of least resistance is a prompt update. Willison documents one case: a restriction on generating song lyrics appeared in Claude's system prompt within days of Sony Music and Warner Chappell filing copyright-related lawsuits. This is the fast layer of AI governance. The slow layer is model retraining. The governance gap sits between the fast layer and what users can audit. Willison finds that Claude's published system prompt is the "core" message, but feature-specific behavioral blocks, including guidance on the `end_conversation` function, exist as separate unpublished layers. The published prompt is an incomplete representation of the model's actual behavioral specification.

## Conditions
Holds when: the vendor publishes its core system prompt but not all feature-specific behavioral overlays. Applies to audit contexts where practitioners or regulators try to understand model behavior from published documentation.

Fails when: a vendor publishes the complete behavioral specification including all feature-specific blocks, or when behavior is encoded in model weights where prompt publication does not cover it.

## Evidence
Willison observed the song lyrics restriction appear in Claude's published system prompt shortly after Sony Music and Warner Chappell filed copyright lawsuits against AI companies. His investigation found the prompt to be a "core" layer with separate unpublished feature-specific blocks, including an `end_conversation` behavioral rule not visible in the main document. He also notes that specific training examples embedded in the prompt, including a reference to a "skateboarding axolotl" prompt-injection defense example, suggest the published prompt encodes behavioral influence beyond its stated rules.

## Signals
- Model behavior differs from what the published system prompt alone would predict.
- Legal events in AI-adjacent domains are followed within days by prompt updates.
- Practitioners auditing model behavior from published prompts consistently find undocumented constraints.

## Counter-evidence
Willison's analysis is based on a single model's published documentation at a single point in time. Other vendors publish more or less than Anthropic. The relationship between prompt publication timing and legal events is correlational in the case he documents, not confirmed as causal. Feature-specific blocks may exist for product reasons unrelated to legal compliance.

## Cross-references
- `ins_willison-system-prompt-knowledge-injection`: Willison on how vendors use system prompts to inject factual knowledge about post-training events into model context, illustrating the same fast-layer governance mechanism.
- `ins_willison-ai-product-capability-opacity`: Willison on ChatGPT Work's opacity about its capability scope, a distinct transparency failure mode in AI product disclosure.
