---
id: pb_help-documentation
title: Build help docs from taxonomy to published article
maintained_by: codex maintainers
captured_date: 2026-05-01
depth: full
domain: [help-docs, design, post-sale]
uses_cards: [ins_eureka-onboarding, ins_customer-led-growth-experience-map, ins_mark-kosoglow-adoption-vs-value, ins_start-with-support-fastest-ai-roi, ins_zappos-rotation-through-support, ins_marginal-user-methodology, ins_miller-caveman-test, ins_miller-three-level-problem, ins_shleyner-clarity-beats-cleverness, ins_shleyner-conciseness-as-respect, ins_handley-white-space-as-oxygen, ins_ogilvy-consumer-is-your-wife, ins_ogilvy-discipline-of-knowledge, ins_product-is-the-marketing, ins_agentic-engine-optimization-6-layer]
uses_patterns: [pat_diagnose-before-execute, pat_frontline-as-pmm-substrate, pat_buyer-mindset-not-product-features, pat_quality-as-growth-lever, pat_subtraction-first-operating-discipline, pat_verification-as-human-job]
originating_operators: [ramli-john, georgiana-laudi, adriel-frederick, donald-miller, eddie-shleyner, ann-handley, david-ogilvy, addy-osmani, yamini-rangan, tony-hsieh]
---

# Build help docs from taxonomy to published article

Help docs are the post-sale experience layer. Positioning convinces prospects to buy. Help docs decide whether they succeed after buying. The quality bar is simple: a customer with a real problem finds the right article fast, follows it without filing a ticket, and the team's ticket volume on that topic falls within a month. If the doc does not move that number, it is decoration.

A help center is not a content dump. It is the second half of onboarding, and onboarding is what determines whether a buyer ever reaches the value the product promised. `ins_eureka-onboarding`

## When to use

- A small set of topics drives most of your support ticket volume, and the answers exist nowhere a customer can find them
- You are launching a feature and need docs live before, not after, the first confused customer arrives
- Search inside the help center returns nothing, or returns the wrong thing, for queries people actually type
- A help-center audit shows feature-named categories, dead-end articles, or claims that no longer match the UI
- Customers (or their AI agents) cannot get a straight answer from your docs and open a ticket instead

## How to use

### 1. Anchor on the tickets, not on the feature list.

Before you write a taxonomy, define what this work has to change. The deliverable is not "a complete help center." It is a measurable drop in tickets and a measurable rise in self-serve resolution on the topics that cost the most. Pull three months of support tickets. Cluster them by theme. The top five to ten themes are your P0 articles. Everything else waits. `pat_diagnose-before-execute`

Support is also the place to start because the path to value there is the shortest and the feedback loop is the tightest. The corpus is already structured as problem and resolution, and even partial deflection is material when volume is high.

> "For businesses thinking about where to start with AI, we recommend support. The results are predictable and the path to value is the fastest."
>
> Internal Customer Agent at HubSpot resolves ~60% of internal support inquiries without human intervention.
> · Yamini Rangan, HubSpot blog, 2026-04-28
> `ins_start-with-support-fastest-ai-roi`

State the target at the top of the project: which ticket themes this set of docs must deflect, and by how much. Check the finished work against that target, not against page count.

### 2. Build a product-knowledge file every claim traces back to.

Crawl the existing docs. Read the two- and three-star reviews. Sign up and use the product yourself. The output is one verified product-knowledge file: every feature, every UI label exactly as it appears on screen, every plan tier, every capability described in plain terms.

This file is the single source of truth. Every claim in every article traces back to it. A wrong claim does not just confuse a customer. It creates the exact ticket the doc was supposed to prevent. Ogilvy's frame separates the two ways teams write: from what the buyer actually does, or from the team's own taste and assumptions.

> "I prefer the discipline of knowledge to the anarchy of ignorance."
> · David Ogilvy, Ogilvy on Advertising, 1983
> `ins_ogilvy-discipline-of-knowledge`

A help doc grounded in verified product knowledge is the discipline. A help doc written from memory is the anarchy. Keep a human checking each claim against the source file before it ships, the same way you would verify any AI-generated draft against the underlying truth. `pat_verification-as-human-job`

### 3. Define the reader as the marginal user in the worst conditions.

The wrong reader to design for is the power user who already knows the product. The right reader is the person on the cusp: high intent, low success, reading your doc on a phone, mid-task, slightly frustrated, with no patience for jargon. Fix that person's path and you fix everyone's, because the friction that blocks them also taxes everyone else, more lightly. `ins_marginal-user-methodology`

> "When you fix marginal user problems, you fix everyone downstream. Focus on making that person's experience stupid easy."
> · Adriel Frederick, Lenny's Podcast, 2026-04-28
> `ins_marginal-user-methodology`

Run the comprehension test on every category and section name. Could someone with no product vocabulary read the label and know what is behind it? This is Miller's caveman test applied to navigation, not to a homepage.

> "Could a caveman look at your website and immediately know what you offer, how it will make their life better, and what they need to do to buy it?"
> · Donald Miller, Building a StoryBrand, 2017
> `ins_miller-caveman-test`

If a section name fails the test, rename it before you write a word of the article.

### 4. Audit what exists. Score it. Prioritize by ticket volume and views.

Inventory every existing article by type: how-to, conceptual, troubleshooting, reference. Score each on four axes: product accuracy, customer-centricity, structure, completeness. Then rank rewrites by ticket volume plus page views, not by which article is easiest to fix.

Cut before you add. Subtraction is more reliable than improvement in a tangled help center. An out-of-date article that confidently states the wrong thing is worse than no article. Delete it. `pat_subtraction-first-operating-discipline`

The output is a P0 / P1 / P2 list with a reason attached to each entry. "Reset Password gets 4,000 views a month and is wrong about the email step" is a P0 with a reason. "Reset Password needs work" is not.

### 5. Map the customer experience to content, sequenced by the first week.

Order the content the way a real customer hits the product, not the way the org chart is drawn. The arc is setup, then core concept, then core action, then power feature, then edge case. This is the post-sale half of the experience map: the path defined by the customer's success milestones, not your release schedule. `ins_customer-led-growth-experience-map`

For every feature, answer five questions in this order:

| Question | What the article must cover |
|----------|------------------------------|
| What is it? | One-line plain-English definition |
| How do I do it? | Numbered steps with exact UI labels |
| How do I undo it? | The reversal path, named explicitly |
| Who can do it? | Role and plan-tier requirements |
| What happens after? | The next step, linked |

The "undo" and "after" questions are the two teams skip. They are also where the next ticket comes from.

### 6. Design a task-first taxonomy. Three levels, five to seven top-level categories.

Use a hybrid model: task-oriented top-level categories with feature-named articles inside them. "Set up your phone system" is a category. "Call forwarding settings" is an article within it. Three levels maximum: Category, then Section, then Article. Cap the top level at five to seven items, because each extra navigation level cuts findability.

| Element | Naming rule | Example |
|---------|-------------|---------|
| Action category | Verb-first | "Set up your phone system" |
| Reference category | Plain noun | "Account and billing" |
| Article | Feature-named | "Call forwarding settings" |

No acronyms, no product jargon at the category level. The category names are the first thing the marginal user reads, and a confused reader leaves before the article ever loads.

### 7. Design the getting-started experience as its own category, listed first.

Onboarding is the bridge between buying and getting value. If the customer does not reach first value fast, no amount of reference documentation rescues the relationship. `ins_eureka-onboarding`

Give getting-started its own top-level category, listed first. Inside it: role-based quick-starts (admin setup, end-user onboarding), a short conceptual overview, and five-minute quick wins that deliver one undeniable result. Sequence the narrative as Motivate, Setup, First Value, Power Use. The job of the getting-started path is to get the customer to the first moment where the product visibly works.

Watch out for the trap of measuring the wrong thing here. A customer logging in is not a customer getting value. Adoption metrics flatter you. Value delivery is the real signal, and the two are not the same: a tool can deliver value even when nobody logs in, as long as it lands where the work already happens. `ins_mark-kosoglow-adoption-vs-value`

### 8. Write each article from a template. Outcome first, product never first.

Every article opens with the customer outcome, not a feature description. No sentence starts with the product name. The buyer is the agent of every instruction: "you" do the thing, the product is the tool. Instructions beat descriptions every time.

The headline carries the article. A title a reader has to interpret is a title that fails, because a person mid-task in a help center allocates zero interpretive effort. Plain wins. `pat_buyer-mindset-not-product-features`

> "Clarity beats cleverness, always. A headline that requires interpretation is a headline that fails."
> · Eddie Shleyner, VeryGoodCopy, 2024
> `ins_shleyner-clarity-beats-cleverness`

Write to one specific person, the way Ogilvy framed every piece of copy: as if you were talking to someone whose intelligence you respect, not to an abstract user segment.

> "The consumer isn't a moron; she is your wife. You insult her intelligence if you assume that a mere slogan and a few vapid adjectives will persuade her to buy anything."
> · David Ogilvy, Confessions of an Advertising Man, 1963
> `ins_ogilvy-consumer-is-your-wife`

When the doc has emotional weight (billing, data loss, a failed setup), name the problem at more than the surface layer. The external problem is "the call dropped." The internal problem is the customer feels the product is unreliable. A doc that acknowledges both reads as written by someone who understands the situation. `ins_miller-three-level-problem`

Each template carries: a title, a one-line outcome, a prerequisite block in the first two lines, the body, and a related-articles block.

### 9. Apply progressive disclosure. Answer first, complexity behind a deliberate click.

Lead with the one-line answer or TL;DR. Step-by-step instructions come second. Edge cases, admin-only options, and exceptions go into expandable sections the reader opens only if they need them. The marginal user gets unblocked in the first screen. The power user expands for depth. Neither pays for the other's needs.

Conciseness is not a style choice here. It is respect for a reader who is stuck and counting seconds.

> "Conciseness is respect. Every unnecessary word signals that you value your message more than the reader's time."
> · Eddie Shleyner, VeryGoodCopy, 2024
> `ins_shleyner-conciseness-as-respect`

Format for the eye before the mind. Short paragraphs, generous breaks between steps, no walls of text. Dense unbroken text reads as effort and gets abandoned before the substance lands.

> "treating white space as oxygen in her formatting"
> · Ann Handley, Total Annarchy, 2024
> `ins_handley-white-space-as-oxygen`

### 10. Handle multiple platforms with parity, not duplication.

When the desktop and mobile workflows diverge substantially, write separate parallel articles with identical structure. When only one or two steps differ, use inline tabs or callouts inside a single article. Keep the verbs honest: "click" on desktop, "tap" on mobile. A customer who follows a desktop instruction on a phone and hits a wall files a ticket. Parity prevents it.

### 11. Plan cross-links before you write, so no article dead-ends.

Map inbound and outbound links per article before writing the body. Every article carries breadcrumbs, at least one inline link inside the body, a curated related-articles block of three to five hand-picked links, and a next-steps prompt for any sequenced setup. Concept-and-action pairs always link to each other: the "what is an IVR" concept links to the "set up your phone menu" task, and back.

Do not auto-generate the related block. An algorithm picks adjacent, not relevant. Curate it. Every article needs at least three exit paths so the reader is never stranded.

### 12. Make the docs legible to agents, not just humans.

A growing share of your help-center traffic is not a human reading. It is an AI agent fetching the page on a customer's behalf, in one or two requests, deciding whether your doc answers the question. A page written only for human eyes fails the agent on several axes at once. Addy Osmani's six-layer model names the concrete moves: access control, discovery via `llms.txt`, explicit capability statements, answer-first formatting inside a short TL;DR, token discipline so a long page does not blow the agent's context window, and a copy-as-markdown handoff for humans working with agents. `ins_agentic-engine-optimization-6-layer`

Treat this as a docs and help-center concern specifically, the place the source names as in-scope, not a brand-page concern. The answer-first TL;DR you already wrote in step 9 is the single most useful layer: it serves the stuck human and the fetching agent with the same first 200 tokens.

### 13. Add search tags and synonyms so technical and plain-language searchers both land.

A customer types what they call the thing, which is rarely what you named the article. Tag "Set up your phone menu" with "IVR" so a technical user searching the acronym finds the plain-language article. Build a tag and synonym inventory per article. Track zero-result searches: every query that returns nothing is a missing article or a missing synonym, and it is the cheapest signal you have of a gap.

### 14. Run the quality gate before publishing.

Review every article against the bar: product accuracy traced to the knowledge file, customer-centric intro, clean structure, tight copy. The strongest single check is the frontline one. Reps and support agents hear the real language of confusion before any dashboard reflects it, so route drafts past the people who answer the tickets. `pat_frontline-as-pmm-substrate`

The deepest version of this discipline is cultural. At Zappos, every new hire spent four weeks on the support phones before starting their actual role, which made the customer's voice the first language they learned.

> Every new hire — including the CFO and engineers — completes four weeks on the customer-loyalty phones before starting their actual role.
> · Tony Hsieh, Delivering Happiness, 2010
> `ins_zappos-rotation-through-support`

You do not need a four-week rotation to borrow the principle: the people closest to the tickets should review the docs that are meant to deflect them.

### 15. Measure, then iterate on a loop, not a one-time launch.

Track article views, zero-result searches, ticket-deflection rate per topic, and time on page. A help center is never finished. New tickets create the need for new knowledge; existing articles drift as the product changes. Run two loops: a solve loop that captures new answers from incoming tickets, and an evolve loop that refines articles that are getting views but not deflecting tickets.

Quality here is a growth lever, not a cost. Docs that actually work reduce support load, lift activation, and turn the post-sale experience into something customers talk about. The product, including its docs, is the marketing. `pat_quality-as-growth-lever`

> "Godin argues that in a world of infinite choice and zero attention, the product IS the marketing."
> · Seth Godin, Purple Cow, 2003
> `ins_product-is-the-marketing`

## Check your work

- The project is anchored to specific ticket themes with a deflection target, not to page count.
- Every product claim traces to the verified product-knowledge file. No "may be available" hedges.
- Every category and section name passes the caveman test: a reader with no product vocabulary knows what is behind it.
- Article intros lead with the customer outcome. No sentence starts with the product name.
- The buyer is the agent of every instruction. Instructions, not descriptions.
- Taxonomy is three levels maximum with five to seven top-level categories.
- Progressive disclosure applied: answer first, steps second, edge cases behind a deliberate click.
- Every article has at least three exit paths. No dead ends. Related blocks are curated, not auto-generated.
- High-intent pages start with an answer-first TL;DR that serves both stuck humans and fetching agents.
- Multi-platform parity holds, with honest verbs (click vs. tap).
- Zero-result searches are tracked and feed the backlog.
- The docs were reviewed by people who answer the actual tickets before publishing.

## What goes wrong

- **Feature-first organization.** "IVR Configuration" instead of "Set up your phone menu." It persists because it is easier to write, not because it serves the reader. Name categories by the task, in plain language. `ins_miller-caveman-test`
- **Engineering vocabulary.** Describing how the feature works internally instead of what the customer does with it. Buyers decide and act on their own situation, not on your architecture. `pat_buyer-mindset-not-product-features`
- **Unverified claims.** A wrong claim creates the exact ticket the doc was meant to prevent. "May be available" is worse than nothing. Verify against the knowledge file or delete. `pat_verification-as-human-job`
- **Too many navigation levels.** More than three levels of nav buries articles. Each extra level cuts findability. Collapse it. `pat_subtraction-first-operating-discipline`
- **Dead-end articles.** No breadcrumbs, no inline links, no related block. The reader finishes and is stranded, so they file a ticket. Plan exit paths before writing.
- **Walls of text.** Dense unbroken paragraphs read as effort and get abandoned before the substance lands. White space is structural, not decorative. `ins_handley-white-space-as-oxygen`
- **Clever titles.** A title the reader has to interpret loses a reader who has zero patience to spare. Plain beats clever in a help center, always. `ins_shleyner-clarity-beats-cleverness`
- **One article doing many jobs.** If it needs a second verb, split it. A single task per article is what keeps progressive disclosure clean.
- **Optimizing adoption instead of value.** Counting logins or page views and calling it success. The customer reaching the outcome is the only signal that matters. `ins_mark-kosoglow-adoption-vs-value`
- **Treating taxonomy as one-time.** A help center that ships and freezes is stale within a quarter. Run the solve and evolve loops; track zero-result searches and ticket themes. `pat_quality-as-growth-lever`
- **Human-only formatting.** Pages that ignore agent readers lose the fetch-and-cite traffic entirely. Add the answer-first TL;DR and the legibility layers. `ins_agentic-engine-optimization-6-layer`

## What you get

1. Ticket-theme analysis: the top five to ten themes that drive support volume, with a deflection target each.
2. Verified product-knowledge file: features, exact UI labels, plan tiers, capability descriptions. The single source of truth.
3. Content audit with P0 / P1 / P2 ranking, each entry carrying a reason.
4. Customer-experience-to-content map, sequenced by the first week, with the five-question coverage per feature.
5. Taxonomy map: three levels, five to seven task-first top-level categories.
6. Article architecture templates per type: how-to, onboarding narrative, conceptual, integration, troubleshooting, reference.
7. Getting-started experience: dedicated category, role-based quick-starts, five-minute quick wins.
8. Produced articles built from the templates, outcome-first, buyer-as-agent.
9. Cross-linking map: inbound and outbound links planned per article, with curated related blocks.
10. Agent-legibility layer: answer-first TL;DRs and the discovery and format moves on high-intent pages.
11. Search tag and synonym inventory, plus a zero-result-search backlog.
12. Measurement and iteration plan: views, deflection rate, time on page, with the solve and evolve loops named and owned.
