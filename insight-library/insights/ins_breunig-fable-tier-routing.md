---
id: ins_breunig-fable-tier-routing
operator: Drew Breunig
operator_role: Writer and AI product thinker, dbreunig.com
co_operators: []
source_url: https://www.dbreunig.com/2026/08/23/fable-the-end-of-moore-s-law.html
source_type: essay
source_title: "Fable & The End of the Free Lunch"
source_date: 2026-08-23
captured_date: 2026-08-24
domain: [ai-native, engineering]
lifecycle: [ai-workflow, strategy]
maturity: frontier
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_breunig-harness-lock-in-model-layer, ins_tunguz-intelligence-per-watt, ins_tunguz-local-model-reasoning-path]
raw_ref: ""
---

# When frontier model pricing rises rather than falls, harness quality becomes the primary investment

## Claim
A frontier model priced higher than its predecessors ends the passive benefit developers get from model releases; teams must actively route tasks across model tiers, and harness quality determines how much cheaper models can absorb.

## Mechanism
Previous frontier model releases followed a predictable pattern: new models arrived cheaper and more capable, so developers who had not optimized their workflows still improved automatically. Fable broke this. It is more capable and more expensive. The free optimization that arrived with each release cycle stopped. Teams now face an explicit allocation problem: which tasks justify Fable's cost, and which can run on a cheaper model given adequate context?

The routing split Breunig describes has two stages. Fable handles design and architecture work, where reasoning quality is the constraint and the cost is justified by the decision value. GLM handles execution work, where the constraint is context quality rather than model capability. GLM 5.2 costs approximately one-ninth of Fable's price and roughly one-fifth of Opus 5's cost. At that spread, the incentive to invest in harness and context tooling turns positive. A team that provides GLM with a well-structured brief can route most rote coding there.

> "Prior to Fable, it felt silly to waste _too_ much time improving your coding harness or context strategies."

> "I frequently chat with Fable to interrogate and shape a design, before handing off a brief to GLM"

> "as we continue to develop better harnesses it will be easier to provide weaker (but still great) models with sufficient context"

The mechanism inverts the prior incentive. Before Fable, harness investment competed with "wait for the next cheaper-and-better release." After Fable, harness investment is the only reliable path to lower per-task cost, because the next release may not be cheaper.

## Conditions
Holds when: a frontier model is priced at a meaningful premium over capable alternatives. Holds when the developer's workflow is decomposable into design/architecture tasks and rote execution tasks. Holds when harness and context quality can be improved independently of model selection.

Fails when: the task requires frontier-level reasoning at every stage and cannot be decomposed. Fails when the price spread between frontier and alternative models narrows again.

## Evidence
Breunig published this on August 23, 2026, drawing on his own production workflow. He named specific models and approximate cost ratios: GLM 5.2 at roughly one-ninth of Fable's price, one-fifth of Opus 5's price. He documents a two-stage workflow: Fable for interrogating and shaping design, GLM for executing the resulting brief. A secondary forcing function: Fable's data retention requirements and organizational controls pushed some teams toward model diversification for compliance reasons, reinforcing the tier-routing decision independently.

## Signals
- Developer teams explicitly maintaining a "cheap model for rote tasks, expensive model for design" split in their AI coding workflows.
- Measurable investment in context management, harness tooling, and brief-writing discipline that did not exist in the prior release cycle.
- Per-task cost falling on coding workflows without reduction in output quality, as cheap models absorb execution work.

## Counter-evidence
The two-stage decomposition assumes tasks are separable into design and execution phases. Many real coding problems interleave reasoning and execution in ways that resist clean handoffs. If Fable's pricing drops, the investment logic reverses: harness work becomes less valuable again relative to simply waiting for the next release. Breunig is describing his own workflow, not a controlled study.

## Cross-references
- `ins_breunig-harness-lock-in-model-layer`: Breunig's May 2026 finding that harness investment locks teams into the model layer before the model layer is stable. This card extends that by showing what finally makes harness investment financially rational: a frontier model priced higher rather than lower.
- `ins_tunguz-intelligence-per-watt`: Stanford/Together AI research showing local models handle 89% of everyday queries at 80% lower energy and 74% lower cost. The routing economic rationale is the same, applied to cloud versus local rather than expensive cloud versus cheap cloud.
- `ins_tunguz-local-model-reasoning-path`: Tunguz's benchmark showing local models match cloud quality via extended reasoning. Together, all three cards point to the same operational conclusion: the default should be the cheapest model that meets quality requirements, not the best available model.
