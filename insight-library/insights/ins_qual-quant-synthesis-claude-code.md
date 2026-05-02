---
id: ins_qual-quant-synthesis-claude-code
operator: Else van der Berg
operator_role: Product coach; Substack author at elsevanderberg.substack.com
source_url: https://elsevanderberg.substack.com/
source_type: essay
source_title: "Synthesizing qual/quant and strategy with Claude Code + PostHog MCP"
source_date: 2026-03-03
captured_date: 2026-05-02
domain: [product, ai-native, research-discovery]
lifecycle: [ai-workflow, voc-research, measurement-experimentation]
maturity: applied
artifact_class: workflow
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 3 }
tier: B
related: []
raw_ref: raw/artemis/experts/else-van-der-berg.md
---

# Data shows what; the why lives in qualitative context. Merge them in one AI conversation.

## Claim
The gap between PMs who stare at dashboards and PMs who act comes down to (1) interpreting what the data shows and (2) connecting quantitative signal to qualitative context. AI tools that merge both — Claude Code with an analytics MCP server like PostHog — collapse the workflow: the same conversation can pull a funnel chart and synthesize 20 user-research transcripts against it.

## Mechanism
Quantitative data shows *what* is happening (drop-off at step 3, 12% retention). Qualitative research shows *why* (users don't realize step 3 needs an integration). Historically, PMs bridge the two manually across separate tools and synthesis sessions, which is slow and where most teams fail. Connecting LLM-driven synthesis with live data via MCP servers turns the bridge into one conversation: "show me the drop-off, then summarize the interview themes from users who dropped off." Pattern-extraction from interview transcripts becomes a systematic exercise rather than craft instinct.

## Conditions
Holds when:
- The team uses an analytics platform with an MCP-compatible interface (PostHog, Amplitude).
- User-research transcripts are available in a form Claude Code can read.

Fails when:
- The org's data is locked behind tools without programmatic access.
- The "qual" pool is too thin (5 interviews) to produce reliable patterns regardless of synthesis tool.

## Evidence
> "Data shows what is happening, never why — the why lives in qualitative context, and AI tools that merge both are transformative."

— Else van der Berg, *Synthesizing qual/quant and strategy with Claude Code + PostHog MCP*

## Signals
- PM uses a single AI session to pull metrics AND synthesize interview themes.
- Research synthesis is repeatable (re-run on new transcripts) rather than artisanal.
- Decision artifacts cite both quant and qual signal in one paragraph, not separate slides.

## Counter-evidence
For very large enterprise products, the data infrastructure work (cleanly modeled events, tagged transcripts) needed before AI synthesis adds value is itself a multi-quarter project. Some research traditions (ethnographic, qualitative-only) hold that AI synthesis strips the contextual nuance that's actually load-bearing.

## Cross-references
- (none in current corpus)
