---
id: ins_tunguz-harness-benchmark-delta
operator: Tomasz Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/aftermarket-harnesses
source_type: essay
source_title: "Aftermarket Harnesses"
source_date: 2026-07-28
captured_date: 2026-07-30
domain: [ai-native, engineering]
lifecycle: [ai-workflow, strategy]
maturity: applied
artifact_class: case-study
score: { originality: 4, specificity: 5, evidence: 5, transferability: 4, source: 4 }
tier: B
related: [ins_tunguz-harness-three-disciplines, ins_breunig-harness-lock-in-model-layer, ins_swyx-meta-harness-convergence]
raw_ref: ""
---

# The AI harness now moves coding benchmarks more than the model does

## Claim
Identical AI models produce 25 or more percentage points of performance difference depending on which harness runs them, making the harness the faster-moving variable in AI coding capability.

## Mechanism
The harness controls three functions: which context gets selected for each prompt, which information gets retrieved, and how aggressively prompt caching is applied. Input tokens represent 86 to 98 percent of total LLM costs across OpenRouter, so a harness with strong cache discipline reduces per-task cost by 40 to 80 percent while simultaneously improving output quality by shaping what the model sees. These two effects compound: better context selection improves model output; cache efficiency lowers the cost of running more agents in parallel. The model itself is held constant.

## Conditions
Holds when: multiple mature harnesses run the same underlying model and benchmark data covers real production tasks at scale. Applies most directly to coding tasks with long-horizon agent runs.

Fails when: models differ substantially in capability at a task (e.g. reasoning vs. instruction following). Also fails in short, single-turn queries where context management provides little advantage over the raw model.

## Evidence
Endor Labs' Agent Security League benchmark ran the same models across multiple harnesses. GPT-5.5 scored 61.5% functional correctness in Codex but 87.2% in Cursor, a 25.7-point improvement from the harness alone. Claude Opus 4.7 scored 87.2% in Claude Code and 91.1% in Cursor. Claude Code reports approximately 96% cache hit rates in production. First-party co-design enables 90% savings through byte-identical sub-agent forking.

> "The harness has shed its critique as a model wrapper; it's a jockey pushing AI performance further than the breeder imagined."

## Signals
- Your team can observe benchmark score variance across the same model in different clients.
- Cache hit rates above 90% in production runs indicate harness optimization is compounding.
- Cost per output token falls quarter-over-quarter despite using the same model tier.

## Counter-evidence
Drew Breunig's June 2026 research notes that frontier labs are beginning to bake harness preferences into model weights, meaning model providers may recapture the harness layer as a competitive advantage. If that succeeds, harness-level optimization becomes a temporary moat. See `ins_breunig-harness-lock-in-model-layer`.

## Cross-references
- `ins_tunguz-harness-three-disciplines` (Tomasz Tunguz on the three harness disciplines as the new competitive advantage, June 2026)
- `ins_swyx-meta-harness-convergence` (swyx on convergence across harness architectures)
- `ins_breunig-harness-lock-in-model-layer` (Drew Breunig on labs embedding harness preferences in weights)
