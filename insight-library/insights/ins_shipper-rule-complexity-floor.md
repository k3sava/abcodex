---
id: ins_shipper-rule-complexity-floor
operator: Dan Shipper
operator_role: CEO and co-founder, Every
co_operators: []
source_url: https://www.platformer.news/every-dan-shipper-interview-ai-writing/
source_type: post
source_title: "The website that created an AI clone of its editor in chief"
source_date: 2026-08-20
captured_date: 2026-08-28
domain: [ai-native, founder-operator]
lifecycle: [ai-workflow]
maturity: frontier
artifact_class: framework
score: { originality: 3, specificity: 3, evidence: 2, transferability: 4, source: 3 }
tier: C
related: [ins_shipper-taste-agent-hill-climb, ins_shipper-tend-your-loop]
raw_ref: ""
---

# Even rule-based tasks like copy editing carry enough context-sensitivity to resist full automation by current AI

## Claim
Tasks that appear rule-based carry sufficient exception density, context-sensitivity, and judgment about author voice that they cannot be fully automated even when rules are explicitly defined and the model is capable of applying them mechanically.

## Mechanism
Rules in language operate in document space, not in abstract grammar space. Every application of a rule requires a judgment call: does this exception apply here? Does author voice override house style in this instance? What is the intended register and audience? Exception handling accumulates faster than rule databases can encode it. A model that applies stated rules reliably can still fail at the judgment layer, which means a human reviewer remains in the loop even after the mechanical rules are handled. The complexity is not in knowing the rules but in knowing when to apply them, override them, or break them for effect.

## Conditions
Holds when: The rule-based task is applied across varied author voices and contexts. House style, audience register, and author intent vary document-to-document. The cost of errors in exception handling is high.
Fails when: The context is narrow and uniform: same format, same author, same audience, rigid style guide with few exceptions. The volume of edge cases is low enough to enumerate and encode directly.

## Evidence
Dan Shipper's assessment comes from hands-on experience building and testing a copy-editing agent at Every:

> "Even copy editing, which is rules-based, is super, super complicated and not fully automatable even now."

## Signals
- Copy-editing agents surface rule violations reliably but miss contextual exceptions at higher rates.
- Human review time after AI copy editing concentrates on judgment calls rather than mechanical errors.
- Rule-application accuracy improves with model updates while style-judgment accuracy plateaus.

## Counter-evidence
The claim reflects the state of AI in mid-2026, not a permanent ceiling. Models with finer-grained training on house styles and stronger contextual reasoning may narrow the judgment gap over time. Shipper himself ships a working copy-editing agent at Every: the task is highly automatable even if not yet fully automatable. The distinction between "highly automatable" and "fully automatable" may matter less as the residual error rate falls below human error rates.

## Cross-references
- `ins_shipper-taste-agent-hill-climb`: The hill-climbing method Shipper used to build the copy-editing agent is a direct practical response to this complexity. Encoding past decisions rather than encoding rules sidesteps the exception-density problem.
- `ins_shipper-tend-your-loop`: Shipper's principle of actively tending the agentic loop rather than setting it and forgetting. The judgment complexity in rule-based tasks is one reason tending is necessary: the model will hit judgment limits that require human correction.
