---
id: ins_husain-triage-before-eval-tooling
operator: Hamel Husain
operator_role: Independent AI consultant and researcher
co_operators: []
source_url: https://hamel.dev/blog/posts/evals-skills/
source_type: essay
source_title: "Evals Skills for Coding Agents"
source_date: 2026-08-15
captured_date: 2026-08-20
domain: [ai-native, engineering]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_husain-product-before-evals, ins_hamel-eval-is-product-smell]
raw_ref: ""
---

# Teams must annotate raw LLM traces to discover failure modes before applying automated evaluation

## Claim
Applying automated evaluation before a team has mapped its own failure modes produces metrics that optimize for the wrong signals. The correct sequence is: annotate raw traces first, let annotation clusters reveal named failure modes, then automate.

## Mechanism
Most teams reach for eval automation early. They build a rubric, select a judge model, and produce scores. The scores reveal that something is wrong but not what kind of thing. Each attempt to fix the rubric adds noise without closing the gap.

Husain's error-discovery workflow reverses the order. A practitioner gives an agent a file of raw LLM outputs or traces. The agent builds a lightweight review application with intelligent sampling. As the practitioner annotates examples, the agent groups the annotations into named failure modes and surfaces similar cases automatically. The practitioner ends the session with a typed taxonomy of what is going wrong and why, not just a score.

A start routing skill handles the first decision. The agent reads the practitioner's situation and directs them to either an eval-audit path (if an existing eval pipeline already exists) or the error-discovery path (if only raw, unanalyzed traces exist). This prevents teams from jumping to automation when they have no failure taxonomy yet.

## Conditions
Holds when: a team has raw traces or LLM outputs but no clear taxonomy of failure modes. Holds when eval scores are declining but the team cannot articulate which failure mode is driving the change.

Fails when: the team already has a well-tested, named taxonomy from prior annotation rounds. In that case, jumping to automation is the correct move.

## Evidence
Husain added two new skills to "Evals Skills for Coding Agents" in an August 2026 update. The error-discovery skill embeds annotation-driven failure mode discovery directly into an agent workflow. The start routing skill applies triage logic before any tooling runs: it reads the practitioner's situation and selects the correct entry point. Both skills address the same underlying problem. Practitioners apply automation before they understand what they are measuring, and the downstream metrics reflect that confusion.

## Signals
- Eval scores vary session to session but the team cannot name the failure modes driving the variance.
- Rubric updates follow each eval cycle without corresponding improvement in user experience.
- The team holds a growing corpus of raw traces that no one has read systematically.

## Counter-evidence
The approach requires a practitioner willing to do manual annotation work before seeing automated results. Teams under deadline pressure may skip the annotation phase and proceed to automation even knowing the taxonomy is incomplete. The failure mode taxonomy produced by one annotator may not generalize to the full distribution of production traces.

## Cross-references
- `ins_husain-product-before-evals`: Husain's earlier claim that evaluation failures usually trace to product design problems upstream of the model. The triage-before-tooling principle extends this: even when the product design is sound, the evaluation workflow itself requires sequencing discipline before automation is useful.
- `ins_hamel-eval-is-product-smell`: Evals as a signal about product quality. The error-discovery skill makes that signal interpretable by naming the failure modes first.
