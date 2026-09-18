---
id: ins_ptacek-llm-phrase-prohibition
operator: Thomas Ptacek
operator_role: Security Researcher; creator of Cryptopals
co_operators: []
source_url: https://sockpuppet.org/blog/2026/09/17/how-to-write-with-an-llm/
source_type: essay
source_title: "How To Write With An LLM"
source_date: 2026-09-17
captured_date: 2026-09-18
domain: [ai-native, writing]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_ptacek-llm-praise-trap, ins_ronacher-ai-detector-structure-bias]
raw_ref: ""
---

# Using any LLM-suggested phrase imports AI's stylistic fingerprint into otherwise-human writing

## Claim
A single LLM-suggested word or phrase is enough to import that model's recognizable stylistic fingerprint into otherwise-human writing. Frontier models trained on high-quality text converge on a magazine-polished register, and readers and detectors identify that register even when it appears in an otherwise human-written piece.

## Mechanism
Frontier models are trained on overlapping corpora of high-quality published writing. That shared training produces consistent stylistic patterns: certain phrases, hedges, and sentence cadences appear across outputs from different models because they reflect the same statistical distribution. A writer who adopts any LLM-suggested phrase carries that pattern into their text, regardless of how much surrounding prose was written independently. The fingerprint is not about meaning. It is about origin in a shared distributional signal that readers have calibrated to recognize.

Ptacek's prescribed workflow avoids the adoption problem by using the model only as a mechanical detector: find passive voice overuse, buried verbs, filler words ("very," "actually"). Rewrite all solutions without taking any suggested phrase from the model.

> "You may not use a single word an LLM suggests to you."

A three-step cycle follows: use the model to identify problems, rewrite independently without referencing model suggestions, then compare using a different model in a fresh context.

## Conditions
Holds when: the writer's goal is a recognizable human voice, particularly in professional or journalistic contexts where AI-polished writing is distinguishable; when the frontier model used produces output in a register clearly divergent from the writer's own.

Fails when: the writer's register already closely matches model output (formal, editorial, academic); when the audience has no prior exposure to the writer's personal style; when AI-assisted polish is acceptable or expected by the reader.

## Evidence
Ptacek's observation is practitioner-derived from his own writing workflow, published September 17, 2026. No aggregate study accompanies the claim. The mechanism is consistent with observed model behavior: frontier models from different providers produce recognizably similar phrase choices because they share training data sources and optimization targets.

## Signals
- A reader or editor comments that a piece "sounds AI" despite human authorship
- AI detection tools score human-written content high after editing sessions using a frontier model
- A writer's voice sounds noticeably different across pieces where model suggestions were accepted versus rejected

## Counter-evidence
The "not a single word" formulation is absolute. In practice, some LLM-suggested words are common vocabulary with no distinctive AI fingerprint: articles, prepositions, concrete nouns. The contamination risk is highest for adjective-noun combinations, hedging constructions, and certain sentence openers that frontier models favor. A more targeted version of the rule would prohibit phrases and stylistic suggestions while permitting individual common words. Ptacek does not address how writers would apply this distinction in practice.

## Cross-references
- `ins_ptacek-llm-praise-trap`: The companion failure mode. LLM praise for weak drafts prevents the recognition of problems that would otherwise drive genuine revision, leaving writers dependent on model suggestions to fix writing they should have cut.
- `ins_ronacher-ai-detector-structure-bias`: Armin Ronacher's finding that AI detectors score structural artifacts that persist through editing, which aligns with Ptacek's claim that LLM-imported patterns persist in text even when surrounding prose is human-written.
