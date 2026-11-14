---
id: ins_shipper-ranking-scarce-generation-cheap
operator: Dan Shipper
operator_role: CEO and co-founder, Every
co_operators: []
source_url: https://every.to/podcast/transcript-a-new-vision-for-human-work-after-automation
source_type: talk
source_title: A New Vision for Human Work After Automation
source_date: 2026-11-11
captured_date: 2026-11-14
domain: [ai-native, future-of-work]
lifecycle: [ai-workflow, strategy]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 4, transferability: 5, source: 4 }
tier: B
related: []
raw_ref: ""
---

# When generation is cheap, ranking and perspective become the scarce skills

## Claim
Generating a range of AI outputs is now trivially cheap; the scarce skill is knowing which outputs are good for your specific situation, and that judgment comes from personal perspective.

## Mechanism
AI models can produce thousands of candidate answers. Finding the right one requires a standard — a point of view about what good looks like for this person's work, context, and responsibility. That standard is personal and non-fungible. Without it, the model's outputs are indistinguishable consensus: technically correct, competitively worthless. Shipper describes the economy that follows as one where people are judged not on what they know but on how well they allocate intelligence using their own perspective.

## Conditions
Holds when: AI can generate plausible outputs across a wide range of tasks, reducing the value of raw production capacity.
Fails when: The task has a single correct answer (e.g., calculating a checksum) where ranking is trivial, or when the evaluator has no meaningful point of view to apply.

## Evidence
Shipper ran the test at Every's Thesis: 2027 conference. His head of evals fed his Slack messages to Claude and asked it to predict his replies. Claude generated the reply Shipper would give in 93% of cases across 400 candidates, but could not reliably rank them.

> "Generation is really cheap, but ranking is hard."

> "Your perspective determines what you pick out of that world and call important."

> "What's actually expensive and rare is how you use them, through your perspective."

Shipper used a single Claude subscription in one week to analyze a customer survey, build a live video game, create a custom CRM, and send outreach emails — work he estimated would have required five different specialists in 2020.

## Signals
- Two colleagues analyzing the same AI-summarized data reach different conclusions; each is finding the signal their perspective allows them to see.
- A team member's AI output is immediately useful to others; a default model prompt ("what do you see in the data?") produces only generic observations.
- You can describe what a good answer looks like for a task in one sentence, without referring to the model at all.

## Counter-evidence
The ranking problem may itself be solvable by AI: if a future model can learn your preferences from enough corrected examples, automated ranking approaches human judgment. Shipper's test found 93% recall on generation and near-coin-flip on ranking in 2026; that gap may narrow. The claim also rests on the assumption that personal perspective is non-replicable, which is contested by researchers building personalized model fine-tuning.

## Cross-references
- (none in current corpus)
