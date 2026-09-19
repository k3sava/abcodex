---
id: ins_mollick-selection-scarce-resource
operator: Ethan Mollick
operator_role: Professor, Wharton School; author of Co-Intelligence and Co-Existence
co_operators: []
source_url: https://www.oneusefulthing.org/p/the-overhang
source_type: essay
source_title: "The Overhang"
source_date: 2026-09-18
captured_date: 2026-09-19
domain: [ai-native, future-of-work]
lifecycle: [ai-workflow, strategy-bets]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 3, evidence: 3, transferability: 5, source: 4 }
tier: B
related: [ins_mollick-agent-era-favors-experts, ins_mollick-patron-not-wizard]
raw_ref: ""
---

# When AI makes production cheap, selection and taste become the scarce resource

## Claim
AI has collapsed the cost of making things. The bottleneck has shifted from production to selection: who can quickly distinguish good outputs from bad ones now determines output quality.

## Mechanism
When generation is cheap and fast, the limiting factor is no longer "can we make it?" but "can we pick the right one?" Evaluating whether a generated output is correct, excellent, or appropriate requires domain depth or strong aesthetic judgment. A non-expert who accepts AI output on faith produces median work. An expert who evaluates many generated candidates against a clear quality bar produces above-median work because they can see what mediocre outputs miss.

## Conditions
Holds when: generation cost is low enough that producing many candidate outputs is economically trivial relative to the value of selecting the best one. The task has a quality dimension that a domain expert can assess.

Fails when: the task has a single deterministic correct answer and generation is reliable. Or when the evaluator lacks the domain depth to distinguish good from bad, making selection no better than random.

## Evidence
Mollick describes using current AI to convert the 1977 text adventure game Zork into a playable 3D action game, and to reconstruct Italian author Umberto Eco's 27,000-book library in 3D from videos and photographs. Both, he argues, illustrate that AI can now do weeks of human work when properly guided. The constraint shifts to the human directing and evaluating.

> "Making is fast and cheap. The scarce resource is your ability to select among stuff"

He identifies four human advantages that drive selection quality: deep domain knowledge (quick accurate judgments within a field), wide knowledge (cross-domain pattern recognition), taste (evaluating and refining outputs on aesthetic or strategic grounds), and agency (willingness to explore what AI can actually do).

## Signals
- Your best AI-assisted outputs now come from reviewing multiple generated drafts rather than editing one.
- Time spent evaluating outputs exceeds time spent generating them.
- Domain experts on the team produce better AI-assisted outputs than non-experts working from identical prompts.

## Counter-evidence
The shift to selection as bottleneck assumes generation quality is high enough to be worth selecting among. For genuinely novel domains where no training data exists, generation may be too unreliable for expert selection to add value. The four human advantages Mollick names require years of accumulation; framing them as widely accessible under-weights the expertise barrier. The existing card `ins_mollick-agent-era-favors-experts` makes a complementary point with harder data: novice verified success rates are 15%, expert rates 28-33%.

## Cross-references
- `ins_mollick-agent-era-favors-experts`: the specific mechanism by which domain experts extract more from AI agents, with session-level data from 400,000 Claude Code sessions.
- `ins_mollick-patron-not-wizard`: the practical commissioning pattern that follows when selection is the primary human contribution.
