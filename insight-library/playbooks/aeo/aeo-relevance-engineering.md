---
id: pb_aeo-relevance-engineering
title: Engineer pages so AI assistants cite you, not just rank you
maintained_by: codex maintainers
captured_date: 2026-05-01
depth: full
domain: [aeo, seo, gtm]
uses_cards: [ins_aeo-is-gtm-capability, ins_relevance-engineering-passage-level, ins_aeo-three-layer-presence-readiness-impact, ins_ghost-citation-gap, ins_aeo-decided-off-your-domain, ins_aleyda-solis-aeo-offsite-corroboration-floor, ins_casey-hill-structural-prominence-llm-citations, ins_mike-king-ai-crawler-499-speed-gate, ins_mike-king-agentic-rag-5-gatekeeper, ins_kevin-indig-reasoning-lift-two-universes, ins_death-of-the-ultimate-guide, ins_kyle-poyar-ai-recommendation-share, ins_aeo-citation-rotation-makes-snapshots-worthless, ins_aleyda-solis-ai-links-not-automatically-traffic, ins_lily-ray-geo-penalty-multi-surface-cascade, ins_ai-slop-loop, ins_eli-schwartz-personalized-search-dissolves-position]
uses_patterns: [pat_aeo-triangle, pat_aeo-experience-gate, pat_measurement-correlated-short-signals]
originating_operators: [maja-voje, mike-king, aleyda-solis, kevin-indig, casey-hill, lily-ray, rand-fishkin, kyle-poyar, eli-schwartz, brendan-hufford, amanda-natividad]
---

# Engineer pages so AI assistants cite you, not just rank you

Answer-engine optimization is an information-retrieval engineering job, not content production. The unit of citation is the passage, not the page, so the work is engineering passages that survive a chunker and earn a brand mention inside the generated answer. Quality bar: a buyer asking ChatGPT, Perplexity, or Google AI Mode "best tool for X" hears your product named, not just your URL drawn on silently. Get cited without getting named and you did the work and got none of the recall.

This is a 9-step pass on a single source artifact: a vertical playbook, a battle card, a pricing page, an integration page, a help doc. Run it before you publish the page. Rerun it whenever the schema.org vocabulary shifts, a competitor's citation profile changes, or an AI surface ships a new feature. The judgment that does not compress is which entities are canonical enough to expose to crawlers and which business-impact number rolls into the growth narrative. The production around that compresses fine.

## When to use

- AI-mediated discovery is a real or trending share of acquisition and you need a measurable surface for it.
- You are publishing or refreshing a vertical playbook, battle card, pricing page, integration page, or help doc.
- The schema.org vocabulary shifts, or a competitor's AI citation profile changes.
- An AI surface ships a feature that changes citation behavior (preferred-source labels, reasoning mode, new crawler).
- Mention rate is flat while citation rate climbs, and you need to find out why the brand keeps getting dropped.

## How to use

### 1. Put AEO under GTM, not under SEO, before you touch a page.

This is an ownership decision, and getting it wrong upstream poisons everything downstream. SEO competes for a ranked slot on a known query. AEO competes for inclusion and a brand mention inside a generated answer, which depends on how your claims, comparisons, and category framing show up across the public corpus the model trained on or retrieves from. Those inputs are positioning, comparative framing, named alternatives, and customer-language vocabulary. They are PMM artifacts. `ins_aeo-is-gtm-capability`

> "In SEO, you compete for rankings. In AEO, you compete for mentions."
> · Maja Voje, AEO: How to Make AI Recommend Your Product, 2026-04-17
> `ins_aeo-is-gtm-capability`

> "AEO isn't a content thing or an SEO experiment. It's a GTM capability."
> · Maja Voje, AEO: How to Make AI Recommend Your Product, 2026-04-17
> `ins_aeo-is-gtm-capability`

If SEO or growth eats AEO first, the work optimizes for chunker-friendly text and misses the positioning and narrative levers that drive mention rate. Split it cleanly. PMM owns positioning, mention-rate strategy, and the comparison roadmap. Technical SEO owns passage engineering and structured data. The risk is letting one function eat the other. `pat_aeo-triangle`

### 2. Read the substrate and extract canonical entities first.

Before you write a passage, read the positioning, the ICP-anchor, the brand-voice rules, and the product knowledge for any product entities in the target artifact. Then extract the canonical entities: product names, integrations, competitors, ICP role titles, pricing tiers, capability claims. Output an `entities.json` with type tags compatible with schema.org Product, Service, and Organization.

Treat the entity list as a gate, not a step. Every entity and capability claim must trace to a substrate path. An entity that is not present in product knowledge or the competitive data bank does not go in. This is where AEO fabrication starts: a model latches onto a thin claim and the surface confirms it. Mike King's relevance-engineering frame is the reason entities come first: LLM retrieval scores chunks against entities and relations, not keyword density, so the entity graph is the substrate the rest of the pass engineers around. `ins_relevance-engineering-passage-level`

### 3. Clear the experience and structure gate before any content work.

Content investment is downstream of passing the performance, structural, and experiential gates. Run the infrastructure audit first, or you optimize copy on a page no crawler ever finished reading.

Check server logs for 499 responses filtered to AI bot user-agents (GPTBot, PerplexityBot, ClaudeBot). A 499 is a client-initiated close: the bot gave up. Once a page is skipped it never enters the candidate pool the model considers when generating a citation. `ins_mike-king-ai-crawler-499-speed-gate`

> "A 499 doesn't mean your server failed. It means the system requesting your content decided it wasn't worth waiting for."
> · Mike King, Page Speed Impacts, 2026-05-08
> `ins_mike-king-ai-crawler-499-speed-gate`

Set TTFB and payload budgets per template, not site-wide. The crawl is only the first gate. Every major AI search platform now routes queries through five sequential gatekeepers: Planner, Retriever, Reader, Critic, Synthesizer. The Critic drops most content with no signal to the publisher, so content can appear in a Retriever-stage source panel and still vanish from the final answer. Single-shot retrieval optimization is obsolete against this. `ins_mike-king-agentic-rag-5-gatekeeper`

> "You cannot optimize what you cannot observe. Distilling your own version of it is the only path to durable GEO performance."
> · Mike King, Agentic RAG and the Future of GEO, 2026-05-20
> `ins_mike-king-agentic-rag-5-gatekeeper`

Then audit the structural chrome. What you place in headers, subheaders, top nav, and footers is read as a relevance signal independent of body content. Nav and footer appear on every page, so their contents act as persistent topic declarations. Adding a use-case anchor to the footer is a site-wide statement of competence in that area. `ins_casey-hill-structural-prominence-llm-citations`

> "structural prominence or what you put in your headers, subheaders, top nav, and footer, matters for LLM citations"
> · Casey Hill, What's Working Right Now in AI Search, 2026-05-03
> `ins_casey-hill-structural-prominence-llm-citations`

The content work is the last step, not the first. `pat_aeo-experience-gate`

### 4. Produce 8 to 12 stand-alone passages, 40 to 90 words each.

Each passage answers exactly one buyer question and stands alone, because LLMs cite passages, not pages. AI search runs a retrieval pipeline: chunk the doc into passages, embed each, score embeddings against a query fan-out where the model expands one query into many sub-queries, then assemble matching passages into a synthesized answer. A page that ranks first for a head term can still be invisible if its passages are too short, too long, or thin on entity density. `ins_relevance-engineering-passage-level`

> "Answers are generated, not linked."
> · Mike King, How AI Mode Works, 2026-04-22
> `ins_relevance-engineering-passage-level`

Shape the passages as argument, not coverage. The ultimate-guide play loses its mechanic when an LLM is the summarizer: the model paraphrases facts brand-free, but it cannot compress a credible perspective without naming the perspective-holder. POV survives summarization where coverage gets dropped. `ins_death-of-the-ultimate-guide`

> "The ultimate-guide play loses its mechanic when an LLM summarizes for the user, so sharper POV beats exhaustive coverage."
> · Amanda Natividad, The Death of the Ultimate Guide, 2026-04-25
> `ins_death-of-the-ultimate-guide`

Lead the comparison passages, not the how-to passages. Across 454 prompt-domain pairs and four AI engines, 62% of citations never name the brand. Comparative content (X vs Y, alternatives-to teardowns, ranked listings) forces the model to keep brand tokens together with claims, so the brand survives summarization where informational content gets summarized brand-free. `ins_ghost-citation-gap`

> "Being cited means an AI is drawing on your content. Being mentioned means it is naming you."
> · Kevin Indig, The Ghost Citation Problem, 2026-04-26
> `ins_ghost-citation-gap`

Add at least one primary-research or expert-perspective passage. High-reasoning AI mode fires far more queries per answer and cites a largely different set of domains, surfacing primary sources and structured evidence that keyword-optimized content does not earn. The overlap between minimal and high-reasoning citation sets is 25.6%, so a passage library built for one mode misses most of what the other cites. `ins_kevin-indig-reasoning-lift-two-universes`

> "The brand that wins under minimal reasoning is not the brand that wins under high reasoning."
> · Kevin Indig, Reasoning Lift, 2026-05-18
> `ins_kevin-indig-reasoning-lift-two-universes`

### 5. Generate validated FAQPage and HowTo schema for the passages where the shape fits.

For passages with a clean question-and-answer shape, emit FAQPage and HowTo schema blocks. Validate every block against the current schema.org spec. Schema generated without validation is a failure mode, not a deliverable. The schema is the structured-data layer technical SEO owns, and it is what lets the entity graph from step 2 surface as machine-readable claims rather than prose a chunker has to infer.

### 6. Map each passage to a third-party mirror, because AEO is decided off your domain.

On-page work is necessary and not sufficient. Assistants pull citations from YouTube, Reddit, LinkedIn, and podcasts more than from a brand's own site, so the missing surface is third-party mention density across those venues. A brand mentioned across YouTube, Reddit, and LinkedIn long-form gains citation authority an on-domain push cannot replicate. `ins_aeo-decided-off-your-domain`

The off-site weight is structural, not incidental. AI search visibility is an off-site corroboration problem with an on-site quality floor, not the inverse, so the diagnostic job before any on-site sprint is mapping which third-party surfaces already earn citations in your category. `ins_aleyda-solis-aeo-offsite-corroboration-floor` Output a mirror plan: per passage, name the venue, the title, the opening hook, and the source passage. Pull the demand language from sales, success, and support transcripts, not from keyword tools, which lag reality. `ins_aeo-decided-off-your-domain`

### 7. Keep self-promotion out of the corroboration layer, or one penalty cascades everywhere.

The off-site move backfires if you run it as self-referential listicle farms or artificial timestamp refreshes. AI surfaces retrieve content via RAG from Google's index, so a Google enforcement action does not stop at Google search. It removes the page from the shared source pool that ChatGPT, Perplexity, and Copilot all draw from. One enforcement decision becomes a multi-surface traffic loss. `ins_lily-ray-geo-penalty-multi-surface-cascade`

> That's getting recommended by everybody else without recommending yourself. And to me, that's where you want to go.
> · Lily Ray, What the SEO Industry Is Getting Dangerously Wrong About AI Search, 2026-05-13
> `ins_lily-ray-geo-penalty-multi-surface-cascade`

Run a brand-integrity watch in parallel. AI synthesis surfaces have a thin verification layer for sparsely-covered claims, so a single seeded fake claim can self-confirm by citing the source that introduced it. Brand protection now means weekly sweeps for hallucinated claims about your brand, measured separately from search-results monitoring. `ins_ai-slop-loop` `pat_aeo-triangle`

### 8. Score on Aleyda's three layers and keep the confidence buckets separate.

Replace rank-tracking with a three-layer measurement stack, and never collapse it into a single AEO number. The value is in the separation. `ins_aeo-three-layer-presence-readiness-impact`

> "Presence tells you where the brand appears, Readiness tells you why it looks that way, and Business Impact tells you whether that visibility creates measurable value."
> · Aleyda Solis, A 3-Layer Framework to Measure AI Presence, Readiness, and Business Impact, 2026-04-23
> `ins_aeo-three-layer-presence-readiness-impact`

| Layer | What it answers | How to instrument it |
|-------|-----------------|----------------------|
| Presence | Where the brand appears in answers | 10 to 15 buyer-prompt coverage list. Prompt sweeps across at least two surfaces. Track citation rate and mention rate as separate series, plus recommendation rate. |
| Readiness | Why it looks that way | 10-trait checklist: crawlable, schema-valid, entity-dense, chunk-friendly paragraph shape, first-hand experience, and so on, with current state per trait. |
| Business Impact | What the visibility produces | Three confidence buckets kept separate: observed referrals, proxy signals (branded search lift, direct visits), modeled estimates (assisted conversions). Never combine. |

Track recommendation rate, not just citation count, on the Presence layer. AI responses recommend specific products rather than listing links, so the competitive frame is owning the recommendation in a category query, not mining citations. `ins_kyle-poyar-ai-recommendation-share`

> "AI responses recommend products rather than simply provide a list of links"
> · Kyle Poyar, What's Working Right Now in AI Search, 2026-05-03
> `ins_kyle-poyar-ai-recommendation-share`

On the Business Impact layer, hold the line between citations and traffic. More AI answer links do not automatically mean more traffic: a citation can appear without a linked URL, a link without a click, a click without a conversion, and each break needs a different fix. `ins_aleyda-solis-ai-links-not-automatically-traffic`

> "More AI answer links don't automatically mean more traffic."
> · Aleyda Solis, SEOFOMO, May 10, 2026
> `ins_aleyda-solis-ai-links-not-automatically-traffic`

### 9. Measure weekly with correlated short signals, not point-in-time snapshots.

A single-snapshot citation count is noise. Roughly 74% of cited sources in AI search rotate week to week, so a monthly reporting cycle samples a different distribution each time and every decision rests on data already stale. `ins_aeo-citation-rotation-makes-snapshots-worthless` A weekly, segmented measurement layer is the minimum structure that separates signal from variance: track by platform, prompt type, citation count, recommendation rate, readiness, and business impact, separately. `pat_measurement-correlated-short-signals`

The underlying construct is dissolving too. Keyword position reporting measures an aggregate that loses its referent as Google personalizes results per user. There is no longer a single stable position to rank for, which is the structural reason the three-layer stack and weekly sweeps beat a position dashboard. `ins_eli-schwartz-personalized-search-dissolves-position` Pin the goal to correlated short signals you can read weekly, not a long-loop number you read once a quarter. `pat_measurement-correlated-short-signals`

## Check your work

- AEO sits under GTM, with PMM owning mention-rate strategy and technical SEO owning passage engineering.
- Every entity and capability claim traces to a substrate path. No entity appears that is not in product knowledge or the competitive data bank.
- Server logs checked for 499s against AI-bot user-agents before any content work began.
- Use-case anchors are present in nav and footer, not only in body copy.
- Passages are 40 to 90 words, self-contained, one buyer question each, and obey the brand-voice rules.
- Comparison passages lead the how-to passages, and at least one primary-research or expert passage exists.
- Every FAQPage and HowTo block validates against the current schema.org spec.
- A third-party mirror plan names concrete venues per passage, with demand language pulled from sales, success, and support transcripts.
- No self-referential listicle farms or artificial timestamp refreshes in the corroboration plan.
- A weekly brand-integrity sweep for hallucinated claims is scheduled.
- The three layers stay separate. Modeled lift never bleeds into observed referrals. No single blended AEO number.
- Measurement runs weekly and is segmented by platform and prompt type, not a monthly snapshot.

## What goes wrong

- **SEO eats AEO first.** The work optimizes for chunker-friendly text and misses the positioning and mention-rate levers PMM owns. Place AEO under GTM before the first page. `pat_aeo-triangle`
- **Optimizing pages instead of passages.** The passage is the unit of citation. A page that ranks can still be invisible if its passages do not survive the chunker. `ins_relevance-engineering-passage-level`
- **Content before the gate.** Commissioning copy on pages AI bots abandon with 499s, or pages with no use-case anchors in the chrome. Audit performance and structure first. `pat_aeo-experience-gate`
- **Coverage over POV.** Exhaustive ultimate guides become brand-free feedstock the model summarizes. Sharper POV gets named. `ins_death-of-the-ultimate-guide`
- **Measuring citation rate alone.** 62% of citations never name the brand, so citation rate hides whether the brand earns recall. Track mention rate and recommendation rate too. `ins_ghost-citation-gap`
- **Optimizing on-site while the citations are off-site.** AI visibility is an off-site corroboration problem with an on-site floor. Map the third-party surfaces before the on-site sprint. `ins_aleyda-solis-aeo-offsite-corroboration-floor`
- **Self-promotional tactics that cascade.** A Google penalty removes the page from the pool every AI surface draws from, so one enforcement action is a multi-surface loss. Earn recommendations off other sites, do not recommend yourself. `ins_lily-ray-geo-penalty-multi-surface-cascade`
- **Ignoring brand integrity.** A seeded fake claim self-confirms in thin-corpus queries. Run weekly hallucination sweeps. `ins_ai-slop-loop`
- **A single blended AEO score.** Mixing Presence, Readiness, and Business Impact, or letting modeled lift leak into observed referrals, destroys the framework's anti-overclaim function. Keep the three layers and the confidence buckets separate. `ins_aeo-three-layer-presence-readiness-impact`
- **Point-in-time snapshots.** 74% of cited sources rotate weekly, so a monthly snapshot is noise. Measure weekly and segmented. `pat_measurement-correlated-short-signals`
- **One mode of optimization.** Reasoning mode and standard mode share only a quarter of their cited domains. Content built for one misses most of what the other cites. `ins_kevin-indig-reasoning-lift-two-universes`

## What you get

1. `entities.json`: a typed, substrate-cited entity list compatible with schema.org Product, Service, and Organization.
2. Experience-and-structure gate report: 499 audit by template against AI-bot user-agents, plus a nav and footer use-case-anchor check.
3. `passages.md`: 8 to 12 cite-ready passages, 40 to 90 words each, comparison-led, with at least one primary-research passage.
4. `schema.json`: validated FAQPage and HowTo blocks for the passages where the shape fits.
5. `mirror-plan.md`: a third-party mirror plan per passage, with venue, title, hook, and source passage.
6. Brand-integrity watch: a scheduled weekly sweep for hallucinated claims about the brand.
7. `aeo-scorecard.md`: a three-layer scorecard (Presence, Readiness, Business Impact) with confidence buckets kept separate.
8. Weekly measurement cadence: segmented by platform, prompt type, citation rate, mention rate, recommendation rate, readiness, and business impact, with a named owner.
