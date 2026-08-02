---
id: ins_mollick-delegation-over-prompting
operator: Ethan Mollick
operator_role: Associate professor, Wharton School; researcher and practitioner on human-AI collaboration
co_operators: []
source_url: https://www.oneusefulthing.org/p/an-opinionated-guide-to-which-ai-b22
source_type: essay
source_title: "An Opinionated Guide to Which AI to Use: Summer 2026 Edition"
source_date: 2026-07-23
captured_date: 2026-08-02
domain: [ai-native, leadership-org]
lifecycle: [ai-workflow, strategy]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 5, source: 4 }
tier: B
related: [ins_mollick-agentic-external-injection, ins_mollick-commission-not-steer, ins_mollick-patron-not-wizard]
raw_ref: ""
---

# Agentic AI shifts the core skill from prompt phrasing to delegation clarity; instructing AI now resembles instructing a capable but unfamiliar colleague

## Claim
The primary competency shift in the agentic AI era is from prompt engineering (crafting the right phrase to get a specific output) to delegation clarity (specifying outcomes, constraints, and quality criteria for work an AI will execute autonomously). Agentic AI that completes multi-step tasks without human intervention requires a different operator skill than conversational AI that responds to one-shot prompts.

## Mechanism
In a conversational AI interaction, the human remains the executor: they review a draft, choose an option, ask a follow-up. The feedback loop is fast and the human is in the loop at every step. The cognitive skill is iteration: rephrase, refine, redirect.

In an agentic interaction, the AI is the executor. Mollick's characterization: working with these systems "is more like managing than it is chatting. You can almost think of the AI agents as a team that you delegate work to." The model is "increasingly just figuring out how to solve problems without you knowing the details." The operator's value is in the initial specification, not in steering each step. A vague brief produces work the AI must guess at; a precise brief with success criteria and edge-case handling produces work that needs minimal revision.

This creates a skill transfer problem. People who became good at conversational AI (prompt tricks, specific phrasings, persona-setting) have built competencies that partially transfer to agentic work but miss the most important part: outcome specification and constraint-setting. The agentic era rewards operators who can write a brief the way a strong manager briefs a capable but new contractor.

## Conditions
Holds when: the task involves multiple steps, tool use, or a time horizon longer than a single exchange. Fails when: the task is a one-shot, well-defined generation task (write a subject line, summarize this document). There, prompt phrasing still matters and delegation framing adds overhead without benefit.

## Evidence
Mollick's July 23 Summer 2026 Edition names Claude Code/Cowork and ChatGPT Work/Codex as the strongest general AI tools "because they have good applications and harnesses powered by very strong AI models." The harness determines what tools the model can reach; the operator's brief determines how well the model uses them. Both are competencies distinct from single-turn prompt craft.

> "working with these systems is more like managing than it is chatting. You can almost think of the AI agents as a team that you delegate work to."

> "the AI is increasingly just figuring out how to solve problems without you knowing the details...instructing AIs has become more like instructing people."

Mollick does not provide quantitative evidence for the delegation-vs-prompting skill gap. The observation is practitioner-level, drawn from his own extensive AI use and reporting on others'.

## Signals
- Prompt tricks that worked in 2024 are producing worse outcomes on agentic tasks in 2026.
- Agent runs that start with a detailed brief finish with fewer revision cycles than those that start with a one-line request.
- Team members who are strong writers or project managers adapt faster to agentic tools than team members who excel at specific prompt formulations.
- You find yourself reviewing completed work rather than steering work-in-progress.

## Counter-evidence
The framing that "instructing AI is now like instructing people" may overstate the reliability of current agents. A capable human contractor asks clarifying questions, notices when the brief is self-contradictory, and flags when they are about to do something wrong. Current agentic systems do not reliably do these things. The delegation metaphor works as a mindset shift but undersells the supervision burden that remains. Teams that adopt the delegation frame without also adopting careful review and approval gates for agent outputs may discover the analogy breaks down precisely where it matters most.

## Cross-references
- `ins_mollick-agentic-external-injection`: Mollick's companion finding in the same article: agentic AI requires approval-first defaults, minimal app access, and external-content monitoring. The delegation skill and the safety infrastructure are complements, not substitutes.
- `ins_mollick-commission-not-steer`: Mollick's June 9 finding from Mythos work that commissioning (setting intent and letting AI execute) is different from steering (guiding step by step). Delegation over prompting is the generalized version of that observation.
- `ins_mollick-patron-not-wizard`: earlier Mollick framing of the human role as patron (setting direction, judging outputs) rather than wizard (casting spells). The July 2026 update grounds the same insight in the specific context of agentic tool use.
