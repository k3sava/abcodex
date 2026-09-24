---
id: ins_husain-shankar-criteria-drift
operator: Hamel Husain
operator_role: Independent AI consultant and researcher
co_operators: [Shreya Shankar]
source_url: https://www.lennysnewsletter.com/p/advanced-evals-how-to-find-and-fix
source_type: essay
source_title: "Advanced evals: How to find (and fix) hidden AI failures in your product"
source_date: 2026-09-22
captured_date: 2026-09-24
domain: [ai-native, engineering]
lifecycle: [ai-workflow]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_husain-triage-before-eval-tooling, ins_husain-eval-premature-automation, ins_husain-product-before-evals, ins_error-analysis-highest-leverage-eval-step]
raw_ref: ""
---

# Automated eval agents cannot detect failures that require your product's definition of good user experience

## Claim
AI eval agents reliably catch trace-level contradictions but systematically miss failures that require implicit product judgment. Husain and Shankar call this failure mode "criteria drift": human review of real traces changes your definition of what constitutes a failure, and agents cannot apply a definition that hasn't been grounded by that human process yet.

## Mechanism
Agents pattern-match against rubrics. They flag contradictions visible in the trace. What they cannot do is apply implicit domain knowledge about what constitutes good product experience for your specific context. That knowledge doesn't fully exist before a team has reviewed real examples and let failures surface. Reviewing traces shifts the criteria for success. Agents trained or prompted before that review will optimize for the prior definition. The gap between the two is criteria drift. It is not an agent capability problem. It is a sequencing problem. Human annotation must precede automation to ground the criteria agents are asked to apply.

## Conditions
Holds when: the product involves a qualitative user interaction where the definition of "successful handling" is context-dependent (e.g., sales conversations, support triage, objection handling). Applies to any AI product where good UX involves judgment calls that vary by user intent or conversational context.

Fails when: the failure mode is unambiguously mechanical, such as a hallucinated fact, a broken citation, or a malformed output format. On those failure types, agents outperform humans because the criterion is fully explicit.

## Evidence
Husain and Shankar studied 100 production traces from an AI leasing assistant. The assistant was responding pleasantly to prospects who stated their budget was too low, but failing to offer alternative properties or cheaper units. Automated systems logged these interactions as successful. Human reviewers flagged them as failures, because the product goal was facilitating sales through objection handling. Agents had not been given that criterion. They had no way to derive it from the trace alone.

Across the 100 traces, three patterns emerged: agents missed issues requiring product judgment (formatting, handoffs, objection handling), agents succeeded at catching contradictions visible within traces, and agents introduced noise by flagging correct responses as failures when those responses didn't match the pattern the agent expected.

> "Agents are often faster than humans at spotting obvious issues and find patterns we might miss. But they are far less reliable when a failure depends on your definition of a good product experience."

## Signals
- Your eval pipeline is catching hallucinations and format errors but your product team keeps surfacing judgment failures it considers obvious.
- User satisfaction scores diverge from your automated eval pass rates.
- Reviewers annotating traces keep revising their criteria mid-session, a sign that reviewing is actively grounding the definition of failure.

## Counter-evidence
Agents can be given explicit criteria derived from prior human annotation rounds. Once criteria have been grounded, agents can apply them consistently and at scale. The criteria-drift failure mode is specific to the phase before human annotation has stabilized the definition of success. After that grounding, automated evaluation with explicit rubrics can match or exceed human consistency on those now-defined failure types.

## Cross-references
- `ins_husain-triage-before-eval-tooling`: the prior card on sequencing; triage and annotation must precede eval tooling. Criteria-drift is the failure mode that explains why.
- `ins_husain-eval-premature-automation`: automating before the failure-mode inventory is stable produces metrics that optimize for the wrong signals. Criteria-drift is the mechanism.
- `ins_husain-product-before-evals`: upstream product design failures that evals cannot catch. The leasing assistant example straddles both; it is a product-design failure that criteria-drift also explains.
- `ins_error-analysis-highest-leverage-eval-step`: error analysis as the primary eval step aligns with the annotation-first model; that is the human grounding step that precedes automation.
