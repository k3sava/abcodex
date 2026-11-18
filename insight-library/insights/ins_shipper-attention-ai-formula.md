---
id: ins_shipper-attention-ai-formula
operator: Dan Shipper
operator_role: CEO and co-founder, Every
co_operators: []
source_url: https://every.to/context-window/your-attention-is-ai-s-new-bottleneck
source_type: essay
source_title: "Your Attention Is AI's New Bottleneck"
source_date: 2026-11-13
captured_date: 2026-11-18
domain: [ai-native, future-of-work]
lifecycle: [ai-workflow, strategy]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_shipper-ranking-scarce-generation-cheap, ins_shipper-org-capability-ai-bottleneck]
raw_ref: ""
---

# Human attention is now the scarce input in AI feedback loops, not model intelligence

## Claim
Teaching an AI your preferences fails not because models learn poorly, but because humans stop answering. The bottleneck is designing exchanges where answering feels worthwhile.

## Mechanism
AI quality compounds through feedback: each answered question helps the model understand your preferences better. The loop only closes when you actually answer. Quick thumbs-ups give too little signal; detailed review demands more effort than most people will give consistently. The fix is an exchange that makes answering feel worth your time: the AI asks questions that spark curiosity, your answers give it sharper signal, and it returns insights that are more useful than what you put in. Shipper frames this as the core formula in AI-native work, measuring how much a model learns per unit of your attention.

## Conditions
Holds when: the model can ask questions, your answers genuinely differentiate good outputs from generic ones, and the exchange is designed to reward engagement rather than demand evaluation.
Fails when: the feedback loop is a grading interface (did this help? yes/no), which removes the curiosity reward; or when the task has a correct answer the model can find without preference input.

## Evidence
Shipper ran a Frontier experiment where his head of evals fed his Slack messages to Claude and asked it to predict his replies across 400 candidates. Claude generated the right answer 93% of the time but could not reliably rank which one he would actually send. The ranking gap is what personal attention fills.

> "a question from an AI is only worth asking if you'll actually answer it"

The article also compares a well-designed AI collaborator to a strong interviewer who reads your work first: they ask questions that lead you to understand your own work better rather than asking you to grade them.

## Signals
- An AI questions session ends with you knowing something about your own preferences that you did not before.
- Your time per question drops as the exchange repeats: earlier questions were harder to answer than later ones.
- A colleague who interacts with the same model gets generic outputs; yours are increasingly calibrated to your style.

## Counter-evidence
The ranking problem Shipper identifies may itself be solvable by AI: if a future model learns preferences from enough corrected examples, automated ranking approaches human judgment. The 93% generation/near-coin-flip ranking gap he observed in 2026 may narrow. The claim also assumes personal preferences are worth teaching; for many routine tasks a consensus answer is good enough and feedback loops add cost without benefit.

## Cross-references
- ins_shipper-ranking-scarce-generation-cheap (ranking perspective as the scarce skill; complementary mechanism)
- ins_shipper-org-capability-ai-bottleneck (organizational bottleneck, not individual attention; a higher-altitude version of the same constraint)
