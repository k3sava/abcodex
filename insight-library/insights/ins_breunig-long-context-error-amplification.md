---
id: ins_breunig-long-context-error-amplification
operator: Drew Breunig
operator_role: Principal Data Scientist, DPLA; independent AI systems writer
co_operators: []
source_url: https://dbreunig.com/2026/10/24/the-state-of-context-engineering.html
source_type: essay
source_title: "The State of Context Engineering"
source_date: 2026-10-24
captured_date: 2026-10-25
domain: [ai-native-operating, engineering-ai-eng]
lifecycle: [AI Workflow & Tooling, Process & Operating Cadence]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_breunig-context-inertia-agent-fixation, ins_breunig-deterministic-probabilistic-split]
raw_ref: ""
---

# Larger context windows amplify errors alongside information and require deliberate pruning

## Claim
Expanding a context window increases the model's error surface as much as its information surface; without active pruning, larger contexts make systems less reliable, not more.

## Mechanism
Everything in the context window receives equal treatment by the model. A correct instruction and a mistaken earlier assumption both contribute to the output. As context grows, the cumulative weight of wrong turns, stale information, and irrelevant noise grows with it. Breunig observes that Gemini 2.5 showed degraded planning once context exceeded 100,000 tokens. Context inertia (an agent fixating on an early wrong hypothesis) is one manifestation; context poisoning (a wrong early assumption being referenced as ground truth) is another. The fixes require removing information from the context, not adding better information to override the bad.

## Conditions
Holds when: context includes agent history, prior attempts, or accumulated working notes from a long session.
Fails when: the context is carefully curated upfront with only verified, relevant information and no running history.

## Evidence
Breunig states the asymmetry plainly:

> "Long contexts let you fit in more information, but they also let you fit in more errors."

His data points include Gemini 2.5 planning degradation beyond 100K tokens, and a study showing thinking tokens per turn fell 75% as sessions grew. His personal rule is to reset around 200,000 tokens. A forgetting-enabled team of four agents in the AHC014 study scored 1,144,695 versus 961,136 for a single unforgetting agent.

## Signals
- Agent outputs become less consistent as sessions run longer.
- Summaries of long sessions preserve the wrong direction rather than correcting it.
- Quality improves after resetting context, even though information is discarded.

## Counter-evidence
Frontier models have improved context utilization significantly. Longer-context retrieval for factual lookups works well. The error amplification pattern is most acute for reasoning and multi-step planning, not for factual recall within a window.

## Cross-references
- `ins_breunig-context-inertia-agent-fixation`: context inertia is one downstream consequence of this amplification pattern.
- `ins_breunig-deterministic-probabilistic-split`: moving context assembly to deterministic code reduces the surface area where bad information enters the window.
