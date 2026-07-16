---
id: ins_tunguz-ai-worldview-alignment-divergence
operator: Tomasz Tunguz
operator_role: General Partner at Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/godless-hippies-ai-models-values/
source_type: essay
source_title: "Godless Hippies: AI Models & Values"
source_date: 2026-07-06
captured_date: 2026-07-09
domain: [ai-native, future-of-work]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: case-study
score: { originality: 4, specificity: 3, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_mollick-agent-era-favors-experts]
raw_ref: ""
---

# AI model worldview reflects post-training alignment choices more than lab geography, making GPT-4o and DeepSeek near-twins despite originating on opposite sides of the world

## Claim
A benchmark mapping AI models by worldview found that alignment choices during post-training predict model values more reliably than the country or culture where the lab is based. GPT-4o and DeepSeek R1 cluster as near-twins, one trained in San Francisco and one in Hangzhou, while models from the same geography diverge sharply.

## Mechanism
Post-training alignment, not pretraining data geography, is where worldview gets baked in. A model trained primarily on the global English-language web arrives at pretraining with a roughly similar prior to any other model trained the same way. The divergence happens during RLHF and fine-tuning, where human raters and policy choices encode the lab's values into the model's preferences. Labs that make similar fine-tuning choices produce similar worldviews regardless of national origin. Labs that make different choices produce models that land far apart even when they share a country of origin.

The benchmark Tunguz cites visualizes this as a value map, placing models by their responses to contested ethical and social questions. The proximity of GPT-4o and DeepSeek R1 on this map is the key finding: it falsifies the assumption that AI models inherit the politics of their origin country as a primary driver.

## Conditions
Holds when: models are evaluated on questions where alignment choices visibly shape output (ethics, social values, contested empirical claims). Fails when: the evaluation domain is factual and objective, where alignment has less influence on output.

## Evidence
> "GPT-4o & DeepSeek R1 are near-twins, one trained in San Francisco, one in Hangzhou"

> "Gemini 3.1 Flash Lite & Qwen 3.6 Flash sit as neighbors"

Tunguz maps multiple frontier models across a value space and finds the clustering does not follow national origin. The benchmark identifies which labs made similar alignment choices by observing the output similarities on contested questions.

## Signals
- Enterprise AI teams selecting models based on perceived geopolitical alignment may be optimizing for the wrong variable.
- Compliance and values audits of AI outputs should target the post-training alignment process, not the lab's country of incorporation.
- Two models from different countries that score similarly on a value benchmark are likely fine-tuned against similar rater pools or guidelines.

## Counter-evidence
The benchmark methodology is not detailed in the essay, making independent replication difficult. Worldview scores can shift substantially with prompt framing, so a single benchmark may not capture stable model values. Labs that share worldview on one set of questions may diverge on others not included in the evaluation.

## Cross-references
- `ins_mollick-agent-era-favors-experts`: Mollick's finding that agentic AI amplifies existing expertise; the worldview alignment claim adds a parallel point that model selection amplifies alignment choices rather than cultural geography.
