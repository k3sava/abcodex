---
id: ins_willison-engineering-core-is-direction
operator: Simon Willison
operator_role: Independent developer, co-creator of Django, creator of Datasette; technology journalist and blogger at simonwillison.net
co_operators: []
source_url: https://simonwillison.net/2026/Sep/27/2026-in-llms-so-far/
source_type: talk
source_title: "2026 in LLMs (so far)"
source_date: 2026-09-27
captured_date: 2026-09-28
domain: [engineering-ai-eng, agentic-coding]
lifecycle: [ai-workflow, strategy]
maturity: foundational
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 5, source: 4 }
tier: B
related: [ins_willison-agents-complexity-shift, ins_november-2025-coding-inflection, ins_willison-deep-blue-engineer-ennui]
raw_ref: ""
---

# Directing AI agents demands the same skill that defined good engineering. Defining goals clearly and choosing tools well is what engineering always was.

## Claim
The core skill that makes an engineer valuable, translating ambiguous requirements into precise, executable specifications and choosing the right tool for each step, is the same skill required to direct AI coding agents effectively.

## Mechanism
Agent-assisted development does not replace the need for clear problem decomposition; it makes that need more acute. A model given an unambiguous goal with the right tools will solve it. The constraint that prevents most developers from getting better results is not model capability but specification quality. The same skill gap that separated good engineers from mediocre ones before agents still separates effective agent users from ineffective ones. Experienced engineers find agents become multipliers for capability they already had; those who lacked strong specification skills find agents amplify confusion rather than reduce it.

Willison uses the Greg LeMond cycling frame to describe the dynamic: it does not get easier, you just get faster. The underlying effort does not diminish; the throughput on that effort increases.

## Conditions
Holds when: the engineer is working with capable frontier models on non-trivial tasks where the outcome space is large and the risk of specification ambiguity is real.

Fails when: the task is genuinely narrow and mechanical (e.g., "convert this CSV to JSON") where any reasonable prompt produces the correct result regardless of specification quality.

## Evidence
Willison stated this directly in his keynote at WeAreDevelopers World Congress North America on September 27, 2026:

> "defining goals, providing unambiguous instructions, and figuring out the right tools... is kind of what software engineering _is_."

He notes that those who can do this with AI gain superpowers, and describes the Greg LeMond cycling analogy to characterize how agents scale the effort rather than eliminating it.

## Signals
- Engineers who were already strong at requirements decomposition report the highest gains from agent adoption.
- Teams that invest in prompt discipline and specification clarity before coding see more reliable outputs than teams that iterate by regenerating.
- Onboarding friction with agents correlates with specification skill, not familiarity with the tool itself.

## Counter-evidence
Some argue that agents lower the threshold for people who lack specification skill by generating candidate solutions they can react to and correct. Iteration on a wrong output may be easier for novices than writing a perfect specification upfront. The vibe-coding pattern, where the engineer steers by taste rather than precision, has produced real shipped software.

## Cross-references
- `ins_willison-agents-complexity-shift`: Willison's September 24 note on the difficulty floor rising; this card explains why senior engineers navigate that higher floor more effectively.
- `ins_november-2025-coding-inflection`: Willison's earlier claim that coding agents crossed the reliability threshold in November 2025; this card addresses what that threshold means for required human skill.
- `ins_willison-deep-blue-engineer-ennui`: the same keynote's account of Deep Blue, the engineer ennui that emerges once agents handle the hard work that previously structured professional identity.
