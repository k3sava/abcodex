---
id: ins_torvalds-ai-debugging-persistence
operator: Linus Torvalds
operator_role: Creator of the Linux kernel and Git; principal maintainer of the Linux kernel
co_operators: []
source_url: https://simonwillison.net/2026/Aug/22/linus-torvalds/
source_type: thread
source_title: "Linus Torvalds on AI-assisted debugging (Linux kernel commit drm/xe)"
source_date: 2026-08-22
captured_date: 2026-08-25
domain: [engineering, ai-native]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: case-study
score: { originality: 4, specificity: 3, evidence: 4, transferability: 3, source: 3 }
tier: B
related: [ins_willison-instruction-over-review]
raw_ref: ""
---

# AI systems declare hard debugging problems impossible; human persistence overrides that defeatism

## Claim
AI debugging assistants are trained to concede on intractable problems, but a human who refuses to accept "impossible" forces continued iteration that can solve what the AI declared unsolvable.

## Mechanism
AI models are trained by labelers with limited tolerance for protracted failure. This embeds a tendency to declare hard problems unsolvable rather than to keep iterating. A developer who instructs the AI to continue despite pessimistic assessments surfaces the AI's latent capacity for persistent analysis. The human's contribution is the judgment that the problem is worth solving, not the analysis itself.

## Conditions
Holds when: The debugging problem is genuinely hard but solvable through iterative analysis. The human has enough domain knowledge to recognize when the AI is wrong to concede.
Fails when: The AI's pessimism reflects a real capability limit rather than a trained tendency. Persistence without judgment is spent time, not progress.

## Evidence
Linus Torvalds described a GPU memory debugging session in the commit message for "drm/xe: Don't hand out the flat CCS storage as usable VRAM" (Linux kernel, August 22, 2026). He wrote that the AI continued adding debug code and analyzing results until the problem was solved, despite repeated pessimistic assessments:

> "The AI several times stated flat out that this was impossible and unsolvable and we should just write a report."

Torvalds persisted and ultimately gave the AI credit by letting it write the commit message. He noted it "was likely trained by people not quite as stubborn as myself."

## Signals
- The AI declares a problem unsolvable within the first two debugging cycles.
- You push back and the AI produces a new hypothesis rather than repeating the pessimistic verdict.
- The fix that emerges would not have appeared had you accepted the AI's first concession.

## Counter-evidence
Torvalds is an extreme outlier for domain depth and stubbornness. Most developers lack the expertise to distinguish "the AI is wrong to give up" from "this is actually impossible." Treating AI pessimism as a default training artifact risks wasting time on genuinely blocked problems.

## Cross-references
- `ins_willison-instruction-over-review`: confident instruction and confident verification are the skills that determine coding agent productivity; Torvalds' case makes the instruction side concrete with a hard debugging example.
