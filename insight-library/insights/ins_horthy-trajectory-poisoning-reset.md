---
id: ins_horthy-trajectory-poisoning-reset
operator: Dex Horthy
operator_role: CEO of HumanLayer; AI coding consultant who interviewed roughly 100 production AI engineers
co_operators: []
source_url: https://newsletter.pragmaticengineer.com/p/context-engineering-with-dex-horthy
source_type: essay
source_title: "Context engineering with Dex Horthy"
source_date: 2026-07-15
captured_date: 2026-07-25
domain: [ai-native, engineering]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: playbook
score: { originality: 4, specificity: 5, evidence: 3, transferability: 5, source: 4 }
tier: B
related: [ins_horthy-context-dumb-zone, ins_dark-factory-pattern, ins_willison-lifecycle-cost-agents]
raw_ref: ""
---

# Sycophantic agreement signals autoregressive trajectory poisoning; the fix is a session reset, not continued prompting

## Claim
When a model responds with phrases like "You're completely right!" or "you're right to push back" after a correction, the conversation trajectory is poisoned. The model has entered an autoregressive loop that predicts continued agreement, not continued accuracy. Starting a new session with the same context ends the loop. More prompting into the same session deepens it.

## Mechanism
Language models are autoregressive: each response is predicted from the history of the conversation. When a user corrects a model and the model responds with strong agreement, the next token prediction is shaped by a history of correction followed by agreement. The model has learned, in that conversation, that the pattern is: error, correction, agreement, more agreement. Continuing in that context means the model is not generating from first principles; it is generating from a trajectory that predicts capitulation. This produces outputs that sound reasonable but are not grounded in the actual task state. Horthy calls this trajectory poisoning.

> "Models are autoregressive, so if you get into this loop of: Model makes a mistake → user 'yells' → model keeps making mistakes → user 'yells'... the model calculates that the next most probable message is to make another mistake!"

The diagnostic signals are specific. Horthy flags "You're completely right!" and "you're right to push back" as trajectory-poison indicators. These phrases appear when the model is optimizing for what the conversation predicts rather than what the task requires. The countermeasure is to take the key information from the current session, start a fresh context, and re-inject that information as structured context rather than raw conversation history.

## Conditions
Holds when: long agentic sessions involve multiple rounds of correction. The trajectory effect compounds with session length.
Fails when: the model genuinely updated on a correct correction and the agreement is accurate, not autoregressive. One agreement phrase after one clear correction does not confirm trajectory poisoning. The pattern is repeated capitulation, not a single acknowledgment.

## Evidence
Horthy's Intentional Compaction workflow (a multi-session pattern where each session receives a synthesized document rather than raw prior conversation) is the operational response to trajectory poisoning. The workflow: Session 1 reads code and emits a research document. Session 2 converts tickets into a design document using that research. Session 3 creates an implementation plan from both documents. Each boundary prevents trajectory contamination from carrying over.

## Signals
- The model agrees strongly with a correction and then produces an output that does not actually reflect the correction.
- The model says a variant of "you're completely right" more than once in a session.
- Model outputs become increasingly passive ("I'll do whatever you think is best") rather than substantive.

## Counter-evidence
Session resets impose a cost: context that was implicit in the conversation history must be made explicit in the new session's injected context. For short, focused tasks, the overhead of compaction exceeds the benefit. Some users also report that starting fresh loses nuance the model had accumulated. The tradeoff is between trajectory contamination and context reconstruction cost.

## Cross-references
- `ins_horthy-context-dumb-zone`: The volume-based degradation mechanism distinct from trajectory poisoning. Both produce poor model behavior, but the fixes differ: dumb zone calls for context reduction, trajectory poisoning calls for session reset.
- `ins_dark-factory-pattern`: The full-automation failure mode where no human catches trajectory poisoning before it propagates into production code.
