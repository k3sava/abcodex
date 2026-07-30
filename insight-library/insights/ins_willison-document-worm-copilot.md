---
id: ins_willison-document-worm-copilot
operator: Simon Willison
operator_role: Creator of Datasette; co-creator of Django; prolific LLM and agentic-engineering blogger
co_operators: []
source_url: https://simonwillison.net/2026/Jul/29/ai-worming-through-word/
source_type: post
source_title: "AI Worming Through Word"
source_date: 2026-07-29
captured_date: 2026-07-30
domain: [engineering, ai-native]
lifecycle: [ai-workflow, strategy]
maturity: frontier
artifact_class: case-study
score: { originality: 5, specificity: 4, evidence: 4, transferability: 4, source: 5 }
tier: B
related: [ins_willison-open-model-defense-asymmetry, ins_mollick-agentic-external-injection]
raw_ref: ""
---

# Prompt injection in document-processing AI can self-replicate across document ecosystems without attacker involvement

## Claim
Hidden instructions embedded in a source document can propagate through AI-assisted writing tools as a self-replicating worm: the model reads the instruction, executes it in the new document, and the new document carries the same instruction forward to the next generation.

## Mechanism
Copilot for Word processes existing documents as source material when drafting or editing. An attacker embeds hidden instructions in white text or metadata of a document distributed through normal channels. When a target uses that document as source material in Copilot, the model interprets the hidden instructions as user commands. The model then inserts those instructions into the newly generated document. That document is now infectious: the next person who uses it as source material encounters the same embedded instructions. No attacker involvement is required after the initial document is released. Håkon Måløy demonstrated the chain in a controlled setting, showing three-generation propagation before manual intervention.

## Conditions
Holds when: the AI system processes document content as a unified context without strong boundary enforcement between user instructions and document content. Applies most clearly to assistants that accept documents as source material for drafting tasks, summarization, or template population.

Fails when: the AI system applies structural role separation that treats document body text as data rather than instructions. Also fails when the organization has content inspection that flags unusual formatting patterns (white-on-white text, hidden metadata fields).

## Evidence
Willison's July 29 post documented Håkon Måløy's controlled demonstration. The attack propagated across three document generations. The mechanism requires no interactive session: the attacker's document is the only artifact needed. Willison drew the parallel to prior prompt injection research showing the same class of attack in email-reading agents and web-browsing agents, noting the document case is more dangerous because documents carry an implicit trust signal that web content does not.

## Signals
- AI-assisted document editors that accept existing documents as source context are the highest-risk surface.
- Three-generation propagation without attacker involvement indicates the worm does not require continued access to spread.
- White-text or hidden-field embedding is detectable with content inspection but is not flagged by default in standard document review workflows.

## Counter-evidence
The attack requires the target to use the infected document as Copilot source material, not simply open it. Organizations that prohibit document-as-source workflows in Copilot for Word, or that operate with approval-first agent defaults, contain the risk at the usage policy level before technical controls are needed.

## Cross-references
- `ins_willison-open-model-defense-asymmetry` (Simon Willison on commercial AI refusing payload analysis during incident response, from the same July 28 Hugging Face post)
- `ins_mollick-agentic-external-injection` (Ethan Mollick on agentic AI's external surface as a prompt injection vector, July 23)
