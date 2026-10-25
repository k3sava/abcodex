---
id: ins_breunig-deterministic-probabilistic-split
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
related: [ins_breunig-context-inertia-agent-fixation, ins_breunig-harness-lock-in-model-layer]
raw_ref: ""
---

# The core decision in context engineering is what to make deterministic and what to leave probabilistic

## Claim
Context engineering is not about prompts; it is about deciding which parts of an AI system should be fixed in deterministic code and which should be left to the model's probabilistic judgment.

## Mechanism
LLM output is the product of weights and context. When the context assembly process is itself probabilistic (built from model calls), variance compounds. Moving context assembly into deterministic code removes one layer of unpredictability, making behavior auditable and reproducible. The practical pattern is to encode known facts, rules, and tool loadouts in code, and leave open-ended judgment to the model. As that line moves more work into code, the system becomes what Breunig calls a harness rather than a prompt chain.

## Conditions
Holds when: the failure mode is inconsistent or unpredictable output, not incapable output.
Fails when: the information needed to assemble context is itself unknown or dynamic, so a model call is genuinely the only way to retrieve or synthesize it.

## Evidence
Breunig traces a field evolution from prompt engineering (2023) to context engineering (2025) to harness engineering (2026). He says the direction of travel is clear:

> "We're moving more and more of the work of assembling context from probabilistic model calls to deterministic code."

His six-tactic toolbox, context augmentation, tool loadout, context quarantine, context pruning, context offloading, and context summarization, has remained stable across these phases even as new challenges appeared.

## Signals
- Teams are writing more code to prepare context and fewer chained model calls.
- Debugging sessions start in code paths, not in prompts.
- Context assembly failures become reproducible and unit-testable.

## Counter-evidence
Some retrieval and synthesis steps are genuinely better handled probabilistically. Rigid deterministic pipelines break when real-world inputs vary more than the code anticipated. The field itself is still evolving: Breunig acknowledges the next problem is memory management for persistent agents, which will likely require new probabilistic patterns.

## Cross-references
- `ins_breunig-context-inertia-agent-fixation`: the failure mode when the model is given too much latitude without a deterministic reset mechanism.
- `ins_breunig-harness-lock-in-model-layer`: frontier labs encoding harness preferences into weights, which raises the stakes for where the deterministic/probabilistic line sits.
