---
id: ins_mollick-conjurer-verification-trap
operator: Ethan Mollick
operator_role: Professor, Wharton School; author of Co-Intelligence and Co-Existence
co_operators: []
source_url: https://executiveeducation.wharton.upenn.edu/thought-leadership/wharton-at-work/2026/11/three-ways-to-work-with-ai/
source_type: essay
source_title: "Three Ways to Work with AI, and How to Choose"
source_date: 2026-11-01
captured_date: 2026-11-04
domain: [ai-native, founder-operator, future-of-work]
lifecycle: [ai-workflow-tooling, delegation, strategy-bets]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 5, source: 4 }
tier: B
related: [ins_mollick-conjurer-oversight-gap, ins_mollick-commission-not-steer, ins_mollick-delegation-over-prompting]
raw_ref: ""
---

# Conjurer delegation only pays off when verification costs less than doing the task yourself

## Claim
Delegating a task to AI in Conjurer mode (agentic delegation) saves time only when the cost of verifying the AI's output is less than the time the task would take to do yourself.

## Mechanism
Delegation has two cost components: the AI's doing time (near zero for the user) and the human's verification time (non-zero). A one-hour task leaves the user with one hour to gain. But if reviewing the output takes 30 minutes, the net saving is 30 minutes, not 60. For high-stakes or complex tasks where errors hide in plausible prose, verification costs approach the original doing cost. When the task is one where mistakes are hard to spot or costly to fix, the Conjurer mode produces the trap: the user is now doing half the work and has also ceded the learning that comes from doing all of it. The article frames this arithmetic directly: "A one-hour task that takes half an hour to verify is a trap."

Three variables govern whether Conjurer mode is worth using: how long the task takes to do yourself, how likely the AI is to succeed without intervention, and how long checking the output takes. Only when verification is fast and cheap relative to the task does Conjurer mode produce a genuine time gain.

## Conditions
Holds when: tasks are long, structured, and verifiable against clear criteria; the user can quickly check outputs for correctness.
Fails when: the task requires judgment the user must exercise anyway to review; when errors are subtle and hard to detect; when the original purpose was to build skill or understanding.

## Evidence
The Wharton@Work Nano Tools piece, attributed to Mollick, frames three human-AI modes: Centaur (deliberate handoffs by task type), Cyborg (intertwined step-level collaboration), and Conjurer (agentic delegation with evaluation at the end). The trap framing is the new addition in this piece.

Supporting experimental evidence:
- Imas, Lee, and Misra ran an experiment where participants wrote instructions for AI negotiating used-car deals. Instruction quality explained 73% of outcome variation, more than the gap between experienced and novice human negotiators. This shows delegation quality depends heavily on how the task is framed, not just whether it is delegated.
- A Berkeley field study published in Harvard Business Review found AI raised productivity but also burnout, suggesting Conjurer gains come with cognitive costs that the simple time arithmetic misses.

## Signals
- You review AI output and find you are rewriting large portions of it, which approaches the original work cost.
- Tasks where you expected a time gain take longer than expected once review is included.
- Conjurer-mode outputs that require extensive correction on the first pass indicate either a task that does not suit delegation or a delegation specification that needs sharpening.

## Counter-evidence
Task type matters substantially. For highly routine, structured tasks (filling templates, translating formats, summarizing defined inputs), verification is fast and Conjurer mode does save time. Critics of the trap framing argue it conflates two different failure modes: inadequate task specification (a skill issue) and genuinely unverifiable tasks (a task-type issue). Better delegation prompts reduce verification cost on most tasks.

## Cross-references
- `ins_mollick-conjurer-oversight-gap`: the Conjurer mode also creates an opacity problem where the user does not see intermediate steps.
- `ins_mollick-commission-not-steer`: commissioning whole tasks versus steering at each step, the broader mode distinction.
- `ins_mollick-delegation-over-prompting`: delegation clarity as the primary skill in the agentic era.
