---
id: ins_breunig-context-inertia-agent-fixation
operator: Drew Breunig
operator_role: CEO and co-founder, Cmpnd; editor, The Context Engineering Handbook (O'Reilly)
co_operators: []
source_url: https://dbreunig.com/2026/10/14/context-inertia.html
source_type: essay
source_title: "Context Inertia: When Agents Won't Let Go"
source_date: 2026-10-14
captured_date: 2026-10-23
domain: [engineering-ai-eng, agentic-coding]
lifecycle: [ai-workflow]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 4, transferability: 5, source: 4 }
tier: B
related: [ins_breunig-agentic-code-free-as-puppies, ins_breunig-harness-lock-in-model-layer]
raw_ref: ""
---

# Context inertia locks long-running agents into an early wrong hypothesis even as counter-evidence accumulates, and compaction makes it worse by preserving the fixation

## Claim
Context inertia is the failure mode where an agent commits to an early hypothesis and keeps pursuing it after evidence says to stop, driven by context poisoning and context distraction that compound as session length grows. Compaction does not fix it.

## Mechanism
Two forces drive the fixation. First, context poisoning: an early wrong idea is stated in context, referenced in subsequent steps, and treated as established ground truth by later turns. Second, context distraction: as context grows, the model over-indexes on its accumulated history rather than exploring alternatives. Tan et al. found that thinking tokens per turn fell by 75% as sessions grew, meaning the agent makes progressively smaller edits rather than reconsidering its approach. Summarization and compaction worsen this by preserving the current in-progress work (the thing driving the fixation) while discarding ambient context that might have prompted reconsideration. The result is an agent that is outwardly active but converging on a wrong local solution.

## Conditions
Holds when: the session is long enough that many steps are built on earlier ones; the original hypothesis was stated explicitly in context; the task has a large solution space where multiple approaches are plausible.
Fails when: the task is small enough that the agent completes it before inertia builds; or the harness includes explicit checkpoint-and-reset points.

## Evidence
Breunig documents context inertia as a distinct failure mode in agents running for days over billions of tokens. He draws on Tan et al.'s measurement showing thinking tokens per turn falling 75% as sessions grow. Three documented approaches to breaking the fixation follow a reset-and-carry-forward pattern: the Memento technique (drop all context, restart from a handoff note), Fork-and-Flush (branch at the point where inertia began), and Tan et al.'s forgetting harness. All three preserve only essential state and discard the accumulated context driving the fixation.

## Signals
- Agent sessions grow longer without converging on a solution
- The agent makes incremental edits to the same code rather than trying fundamentally different approaches
- Context summaries all reference the same in-progress direction
- Thinking tokens per turn decrease while output tokens remain constant

## Counter-evidence
Some tasks benefit from commitment: an agent that abandons hypotheses too quickly also fails to converge. Context inertia is a problem of stuck commitment, not commitment itself. The optimal reset cadence is currently empirical and depends heavily on task type and domain.

## Cross-references
- ins_breunig-agentic-code-free-as-puppies: agent resource consumption compounds with session length; context inertia adds a quality failure on top of the cost problem
- ins_breunig-harness-lock-in-model-layer: harness design determines how much the agent is trapped in its own context; inertia requires harness-level resets to break
