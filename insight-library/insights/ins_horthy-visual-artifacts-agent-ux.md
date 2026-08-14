---
id: ins_horthy-visual-artifacts-agent-ux
operator: Dex Horthy
operator_role: CEO of HumanLayer; author of 12-Factor Agents
co_operators: []
source_url: https://www.humanlayer.dev/blog/show-me-skill
source_type: essay
source_title: "show-me: a coding agent skill for compact visual representations"
source_date: 2026-08-12
captured_date: 2026-08-14
domain: [agentic-coding, ai-native]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: playbook
score: { originality: 3, specificity: 4, evidence: 2, transferability: 4, source: 3 }
tier: C
related: [ins_horthy-context-dumb-zone, ins_horthy-trajectory-poisoning-reset]
raw_ref: ""
---

# Coding agents explaining code through visual artifacts outperform text-wall responses because visual cortex processing is effortless and prose analysis is not

## Claim
When a coding agent needs to explain software structure, component relationships, or file layout, outputting visual artifacts (diagrams, component trees, call stacks, diffs) is a better UX choice than prose, because human visual processing is fast and nearly effortless while parsing dense technical text is cognitively expensive.

## Mechanism
The visual cortex handles rich spatial and relational information using neural pathways optimized over millions of years. Reading and parsing dense technical prose activates analytical cognition, which fatigues and competes with the work the developer is trying to do. A component tree or call graph conveys the same structural information as a paragraph but hands the parsing load to the visual system rather than the analytical one. The resulting experience is faster orientation and lower cognitive load per unit of information received.

Horthy grounds this in a design principle he attributes to Coda Hale:

> "Just as an axe must fit the human hand to be useful, software must fit the human mind to be useful."

Applied to agent outputs, this means structuring the response to exploit how humans actually process information rather than defaulting to text because text is easy to generate.

## Conditions
Holds when: the agent is explaining structure (component relationships, file hierarchy, call stacks, data flow) rather than procedural logic. Visual artifacts are most effective during program design and architecture review phases.

Fails when: the content is sequential logic or algorithmic steps, which maps naturally to text. Also fails when the viewer's environment cannot render diagrams (plain terminals without rich rendering).

## Evidence
Horthy released the `/show-me` skill for Claude Code, which redirects agent outputs toward component trees, call stacks, diagrams, file layouts, pseudocode, and type signatures rather than prose explanations. His evidence is primarily social proof: developer community frustration with verbose agent output and community adoption of the skill.

> "your visual cortex was trained over millions of years to process rich visual information effortlessly"

> "analyzing information is hard and exhausting"

## Signals
- Developers spend less time re-reading agent output before taking the next action.
- Questions like "which component owns this logic?" are answered by a tree in 2 seconds vs a paragraph in 20.
- Junior developers orient to unfamiliar codebases faster when diagrams are available.

## Counter-evidence
The post relies on social proof rather than controlled studies measuring comprehension speed or accuracy. Some environments (bare terminals, CI logs, screen readers) cannot render rich visual formats, making prose the safer default. Horthy does not address how to degrade gracefully.

## Cross-references
- `ins_horthy-context-dumb-zone`: Horthy's prior finding on context window limits and where model performance degrades.
- `ins_horthy-trajectory-poisoning-reset`: the importance of fresh context when sessions are poisoned by earlier errors.
