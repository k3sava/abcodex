---
id: ins_shipper-attention-per-learning-unit
operator: Dan Shipper
operator_role: CEO and co-founder, Every
co_operators: []
source_url: https://every.to/context-window/your-attention-is-ai-s-new-bottleneck
source_type: essay
source_title: "Your Attention Is AI's New Bottleneck"
source_date: 2026-11-13
captured_date: 2026-11-27
domain: [ai-native, future-of-work]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 2, evidence: 2, transferability: 4, source: 3 }
tier: C
related: [ins_shipper-judgment-scarce-generation-cheap, ins_shipper-tend-your-loop]
raw_ref: ""
---

# Teaching an AI your taste fails unless it creates value for you in the same exchange. The measure is how much the model learns per unit of your attention.

## Claim
Human attention is the bottleneck in AI personalization. Teaching a model your taste fails in one of two ways: a quick thumbs-up gives too little signal, and detailed feedback demands more effort than most people will give. The feedback loop closes when the AI reads your work first, asks a pointed question, and the exchange leaves you with something genuinely useful.

## Mechanism
Most AI personalization asks humans to rate outputs or provide corrections. Rating gives sparse signal; correcting takes significant effort. Neither survives sustained use because the attention cost exceeds the return.

Shipper frames the right measure as how much the model learns per unit of human attention, not how many training examples exist. A productive feedback loop requires the AI to read your prior work and surface a question that changes how you think about it. This is attention that returns value in both directions: the human gets a sharper question, the model gets a richer training signal. At that exchange rate, the feedback loop continues.

The analogy is a good interviewer who reads your work before the conversation and asks a question that reframes what you thought you knew about your own thinking. The interview improves you even as it trains the model on you.

## Conditions
Holds when: the model has access to the person's prior work and can synthesize it into a pointed question. The human values their own attention and disengages from feedback that feels like unpaid work.
Fails when: the domain has no historical corpus to read. The model's questions are generic rather than synthesized from the person's specific work.

## Evidence
Grant Harvey in Every's Context Window newsletter (November 13, 2026), attributing the formula to Dan Shipper:

"the most important formula in AI"

"it measures how much a model learns per unit of your attention — and shows how to maximize it."

Every's Frontier team published the full derivation separately at frontier.every.to. That document was not retrieved for this card.

No quantitative data appears in the accessible preview. The support is the interviewer analogy and reasoning about why thumb-based rating and manual correction both fail to sustain feedback loops.

## Signals
- Users disengage from AI feedback sessions quickly when asked to rate outputs rather than read and respond
- An AI session that asks you a question you hadn't thought to ask yourself retains your engagement longer than one that asks for confirmation
- Teams encoding founder taste into AI agents see the encoding succeed when the agent questions the founder, not when the founder corrects the agent

## Counter-evidence
The formula is described conceptually rather than quantitatively in this article. The evidence is a newsletter column, not an empirical study or case report. The two failure modes described (too little / too much feedback) may be addressable with better UX design rather than a fundamental formula change. No comparison against alternative personalization approaches is provided. The full formula derivation, which may contain stronger evidence, was not retrieved.

## Cross-references
- `ins_shipper-judgment-scarce-generation-cheap`: Shipper's earlier claim that generation is cheap and ranking is scarce. This card explains why encoding that judgment into a model is harder than it appears.
- `ins_shipper-tend-your-loop`: Shipper's shift from doing work to tending the loop. This card adds: the loop only runs when it pays the person tending it back in kind.
