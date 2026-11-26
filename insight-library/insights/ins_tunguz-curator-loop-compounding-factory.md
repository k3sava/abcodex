---
id: ins_tunguz-curator-loop-compounding-factory
operator: Tom Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/what-kind-of-factory-will-you-build/
source_type: essay
source_title: "What Kind of Factory Will You Build?"
source_date: 2026-11-22
captured_date: 2026-11-26
domain: [ai-native, engineering]
lifecycle: [process-cadence, ai-workflow]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: []
raw_ref: ""
---

# AI software factories only compound over time when a curator loop reads execution traces and rewrites the context and specs for the next run

## Claim
An AI software factory is a static workflow unless it includes a curator loop: the step that reads execution traces and rewrites the shared context and specs for the next run. Without the curator, the factory automates once and plateaus.

## Mechanism
The factory has four parts: shared context (the specs and docs agents read before starting), agent (runs the work), execution trace (records what shipped, what broke, what it cost), and curator (reads the trace and updates the context and specs). The first three parts automate a task. The fourth makes the system improve. The trace turns work into data; the curator turns that data into better inputs for the next cycle. This is the step that creates compounding rather than flat automation. Teams that invest in context, agent, and trace but skip the curator get the same quality every run.

## Conditions
Holds when: a team runs the same class of work repeatedly and has a person or process that reviews what went wrong and updates the specs. The more cycles the system runs, the more the curator step compounds.
Fails when: each task is a one-off with no reuse. The curator step has no data to work with if the work is non-recurring. Also fails when the person who could own the curator role lacks access to the execution traces.

## Evidence
Tunguz published this framework after Notion and LangChain both described a similar loop for company knowledge, noting convergence from independent vendors. Notion's framing: shared context "defines the limit of what is possible for agents to do within that company." Tunguz synthesizes: the curator is the step that expands that limit each cycle.

> "Factories remain rare because they are an operations project, not just a model purchase. Someone must own the context, write the specs, read the traces, and run the curator on a regular cadence."

## Signals
- An AI-assisted workflow produces measurably better output each month without additional prompt engineering by the user.
- Errors that appeared in early runs no longer appear because the curator updated the specs.
- Teams running the same workflow show diverging quality over time: those with a curator role improve, those without stay flat.

## Counter-evidence
The curator loop requires discipline and ownership to work. If no one is accountable for reading traces and updating specs, the loop breaks. Neither Notion nor LangChain provided benchmarks or customer results for this claim as of capture date, so the compounding claim is a structural argument, not a measured outcome. Tunguz acknowledges this.

## Cross-references
None captured at time of writing. See `ins_yan-eval-attention-bottleneck` for a parallel argument about human attention as the bottleneck in another iterative quality loop (evals).
