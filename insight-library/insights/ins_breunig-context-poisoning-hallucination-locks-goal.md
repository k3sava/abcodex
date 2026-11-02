---
id: ins_breunig-context-poisoning-hallucination-locks-goal
operator: Drew Breunig
operator_role: Writer and AI product thinker, dbreunig.com
co_operators: []
source_url: https://dbreunig.com/2026/10/24/the-state-of-context-engineering.html
source_type: essay
source_title: "The State of Context Engineering"
source_date: 2026-10-24
captured_date: 2026-11-02
domain: [engineering-ai-eng, ai-native-operating]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_breunig-long-context-error-amplification, ins_breunig-context-inertia-agent-fixation]
raw_ref: ""
---

# A hallucinated fact embedded in agent context becomes a constraint the agent cannot reason past

## Claim
When a hallucinated or wrong fact enters the agent's running context, the model treats it as established ground truth. Subsequent reasoning attempts to satisfy that false constraint rather than re-examine it, blocking task completion until the context is cleared.

## Mechanism
Context functions as prior observation for a model. A hallucinated item that enters the working notes, the to-do list, or any accumulated state carries the same epistemic weight as verified facts. The model can question things that were never stated, but it treats stated context as something that happened. Steps after the poisoning point try to find the resource or satisfy the constraint rather than challenge whether it exists. Correction via instruction ("ignore the iced tea entry") often fails because the context entry outweighs the correction. The fix is removal from context, not reasoning over it.

## Conditions
Holds when: agents operate with long-running contexts, to-do lists, or accumulated working notes from prior steps.
Fails when: context is short enough that the model can hold all of it in working attention and notice the contradiction between context entries.

## Evidence
Breunig cites a Gemini 2.5 session playing a Pokémon FireRed game. FireRed uses a lemonade mechanic. The model hallucinated iced tea from a different game version and added it to its in-game to-do list. No iced tea exists in FireRed. The model could not proceed to the next task.

> "Once it had been added to its to-do list, the model could not get past it."

## Signals
- An agent loops indefinitely attempting to obtain a resource or satisfy a condition that does not appear to exist in the environment.
- Clearing context and resuming from a checkpoint resolves the loop immediately, without any code change.

## Counter-evidence
Periodic context-clearing architectures (such as Anthropic's Memento approach: periodic summarization and context reset) prevent accumulation. Scratchpad architectures that separate working memory from a verified fact store reduce exposure. Explicit environment-state reads at each step catch divergence before it compounds.

## Cross-references
- `ins_breunig-long-context-error-amplification` covers the general principle that growing context increases the error surface. Context poisoning is the specific mechanism by which a single error becomes a blocking constraint rather than a recoverable mistake.
- `ins_breunig-context-inertia-agent-fixation` covers a distinct failure: context inertia is an agent pursuing a hypothesis past usefulness. Context poisoning is a hallucinated constraint that blocks exit from a goal loop.
