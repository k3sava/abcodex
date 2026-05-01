---
id: ins_aeo-three-layer-presence-readiness-impact
operator: Aleyda Solis
operator_role: International SEO Consultant; Founder of Orainti
source_url: https://www.aleydasolis.com/en/ai-search/a-3-layer-framework-to-measure-ai-presence-readiness-and-business-impact-redefining-metrics-for-the-ai-search-era/
source_type: essay
source_title: A 3-Layer Framework to Measure AI Presence, Readiness, and Business Impact
source_date: 2026-04-23
captured_date: 2026-05-01
domain: [growth, pmm, ai-native]
lifecycle: [measurement-experimentation, positioning]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 5, evidence: 4, transferability: 5, source: 5 }
tier: A
related: [ins_ghost-citation-gap, ins_relevance-engineering-passage-level, ins_aeo-is-gtm-capability]
raw_ref: raw/essays/aleyda-solis--3-layer-aeo-framework--2026-04-23.md
---

# Measure AI search on three layers: Presence, Readiness, Business Impact

## Claim
Replace rank-tracking metrics with a three-layer AI search measurement stack — Presence (where the brand appears in answers), Readiness (why it looks that way), and Business Impact (what it produces) — with each layer kept in separate observed/proxy/modeled confidence buckets.

## Mechanism
Ranks measured a single observable: the SERP. AI answers are generated from many invisible inputs (chunked passages, embeddings, model memory, citation gates), so a single metric collapses signal. Splitting the stack lets each layer get its own instrument: Presence is observed via prompt sweeps across surfaces; Readiness is diagnosed by inspecting page traits (schema, llms.txt, entity density, paragraph shape); Impact is split into observed referral traffic, proxy signals (branded search lift, direct visits), and modeled estimates (assisted conversions). Keeping confidence buckets separate stops modeled numbers from contaminating observed reporting.

## Conditions
Holds when:
- The team accepts that AI search needs a different measurement contract than SERP SEO.
- Operators can run prompt sweeps across at least two AI surfaces (ChatGPT, Claude, Perplexity, Google AI Mode).
- Page-level audit tooling exists (or can be built — the Readiness layer runs offline against saved HTML).

Fails when:
- Stakeholders demand a single AEO number; the framework's value is in the separation.
- The org has no first-party referral analytics — Impact collapses to vanity metrics.
- Modeled estimates leak into observed reporting and the framework loses its anti-overclaim function.

## Evidence
> "Presence tells you where the brand appears, Readiness tells you why it looks that way, and Business Impact tells you whether that visibility creates measurable value."

> "Measured AI referral traffic is the floor, not the ceiling, of AI's contribution."

Companion piece on global AI search:
> "Your global competitor set is not your AI search competitor set in each market."

— Aleyda Solis, https://www.aleydasolis.com/en/ai-search/, 2026-04-23

## Signals
- Readiness scores rise on owned pages (llms.txt present, JSON-LD blocks valid, paragraphs in chunker-friendly 200–1200 char range).
- Presence sweeps show comparative-win-rate and recommendation-rate trends, not just citation counts.
- Impact reporting has visible confidence labels (observed vs proxy vs modeled) and stakeholders learn to read them.

## Counter-evidence
The framework is young and the Presence layer requires either browser automation against AI surfaces (hard to maintain) or paid AI-search analytics tooling (expensive, varying quality). Indig's ghost-citation finding (`ins_ghost-citation-gap`) shows even Presence has a hidden split: cited-but-not-mentioned. Operators who measure citations as a single metric get a misleading floor.

## Cross-references
- `ins_ghost-citation-gap` — Indig's data on the cited-vs-mentioned gap; informs the Presence layer's sub-metrics.
- `ins_relevance-engineering-passage-level` — Mike King's framework supplies the Readiness diagnostic vocabulary.
- `ins_aeo-is-gtm-capability` — Maja Voje's argument for who should own this stack.
