---
id: pb_llm-wiki
title: Build a persistent knowledge base your AI agents can actually use
maintained_by: codex maintainers
captured_date: 2026-05-01
depth: full
domain: [ai-native-gtm, knowledge, substrate]
uses_cards: [ins_llm-wiki-pattern, ins_bottleneck-is-context-not-capability, ins_llms-are-new-os-agents-are-apps, ins_context-engineering-beats-prompt-engineering, ins_context-docs-as-battery-packs, ins_poyar-voje-context-engineering-gap, ins_rich-context-beats-sophisticated-agents, ins_second-brain-para, ins_traces-need-feedback-to-learn, ins_mine-transcripts-to-promote-config, ins_judgment-vs-understanding, ins_kesava-mandiga-substrate-driven-intelligence, ins_breunig-harness-lock-in-model-layer, ins_most-people-still-using-like]
uses_patterns: [pat_context-not-capability, pat_verification-as-human-job, pat_substrate-runs-loop-humans-run-alignment, pat_build-for-next-model]
uses_contradictions: [con_agents-as-team-vs-tools]
originating_operators: [andrej-karpathy, sherwin-wu, aatir-abdul-rauf, maja-voje, kyle-poyar, harrison-chase, eugene-yan, tiago-forte, kesava-mandiga]
---

# Build a persistent knowledge base your AI agents can actually use

A wiki the agent reads at session start and writes back to as it learns. The quality bar is one test: does the agent answer the same question the same way across days, without re-deriving the answer from scratch each time? When the answer is yes, the wiki is the brain, the agent is the programmer, and the markdown editor is the IDE. When the answer is no, you have a folder of stale files nobody reads.

Most teams reach for the wrong fix. When an agent gives a bad answer, they swap the model or rewrite the prompt. Four operators from separate lanes converge on a different diagnosis: the bottleneck is context, not capability. `pat_context-not-capability` The agent is not under-powered. It is under-informed. A persistent knowledge base is how you fix that once instead of every session.

## When to use

- Agents lose context between sessions and you keep re-explaining the same facts, conventions, or past decisions.
- Output quality is inconsistent: the same prompt gives on-brand work one day and generic slop the next.
- Tribal knowledge lives in Slack threads, deal notes, and one person's head, and the agent cannot reach any of it.
- You run more than one AI workflow that consumes the same kind of context (ICP, positioning, competitive map, voice rules).
- You are about to scale agent use across a team and need new people, and new agents, to onboard the same way.

## How to use

### 1. Diagnose the failure as a context gap before you touch the model.

When the agent isn't doing what you want, the first investigation is the context, not the prompt and not the model. `pat_context-not-capability` Frontier models reason well in general. They fail on specifics they were never told: how this codebase is organized, what the team's conventions are, which approaches a past decision already ruled out. Each missing piece produces one wrong answer.

> "When the agent isn't doing what you want, it's usually a problem with context — you've underspecified or there's just not enough information available."
> · Sherwin Wu, Lenny's Podcast, 2026-04-28
> `ins_bottleneck-is-context-not-capability`

The shift this forces is from prompt engineering, which is volatile, to context engineering, which is durable. `ins_context-engineering-beats-prompt-engineering` Standing up the tool takes a week. Making it work well takes a quarter and a half, and that work is almost entirely about the context substrate, not the prompts.

> "The initial setup took maybe a week or so. But getting it actually to work well? That took a quarter and a half. Two full-time people reviewed every output, every single day. We kept finding gaps in the training documents."
> · Aatir Abdul Rauf, LinkedIn, 2026-04-10 (scrape date)
> `ins_context-engineering-beats-prompt-engineering`

### 2. Reject the ask-answer-forget loop. The knowledge base is the alternative.

The default way people use AI is a cold start every time: ask, get an answer, forget it, ask again tomorrow. `ins_most-people-still-using-like` That loop rebuilds the same synthesis over and over and resolves the same contradictions over and over, because none of it ever lands anywhere durable.

> "Most people are still using AI like this: ask → answer → forget."
> · Alok Yadav, LinkedIn, 2026-04-10
> `ins_most-people-still-using-like`

The knowledge base inverts the loop. The agent writes a synthesis page once, links it to the raw sources, lints it for contradictions, and on the next session reads the page instead of re-grounding from scratch. `ins_llm-wiki-pattern` This is the Karpathy LLM-wiki pattern: replace stateless retrieve-and-forget with a persistent wiki the agent owns and edits.

> "Traditional RAG rediscovers knowledge repeatedly rather than accumulating it. The LLM builds and maintains a persistent wiki instead of just retrieving documents. Knowledge compiles once and stays current, not re-derived per query."
> · Andrej Karpathy, LLM Wiki gist, 2026-04
> `ins_llm-wiki-pattern`

The deeper reason to build this now: the LLM platform is becoming the surface through which work gets done, and durable, agent-readable context is the thing that survives that shift. `ins_llms-are-new-os-agents-are-apps`

> "The LLM platform is the new OS. Domain-specific agents are the new apps. MCP registries are the new app stores."
> · Mark Petty, Gartner (G00828648), 2026-02-27
> `ins_llms-are-new-os-agents-are-apps`

### 3. Build it in three layers so synthesis and source never collide.

The structure is what keeps the base from rotting. Three layers, each with one job.

| Layer | What lives here | Edit rule |
|-------|----------------|-----------|
| Raw sources (`raw/`) | LinkedIn posts, articles, podcast transcripts, screenshots, recruiter emails. One file per artifact, attribution in frontmatter. | Append-only. Never edited after creation. |
| Synthesis (everything else) | Projects, people, companies, concepts, decisions, tools. One live page per subject. Stubs are fine. "Unknown" is a legal value. | Agent-owned. Re-edited as reality changes. |
| Schema (`CLAUDE.md` constitution) | Page frontmatter, the operations, the domain rules (anti-fabrication, voice, confidentiality). | Small, stable, rarely edited. Every agent reads it first. |

Raw is the source of truth and stays untouched. Synthesis is compression plus cross-reference, not transcription. A synthesis page that mirrors its raw source verbatim is doing no work. The whole point of the layer is that the agent skims the synthesis when it needs the gist and drops to the raw file when it needs the exact words.

### 4. Define four operations the agent runs against the base.

Name the operations explicitly in the constitution so the agent has a fixed verb for each kind of work.

1. **INGEST.** Source becomes `raw/{subdir}/{slug}.md` with frontmatter, then stub a synthesis page if warranted, then append a log entry.
2. **QUERY.** Read the index catalog, read one to three relevant pages, extract and cite paths. If the answer is not in the base, say so. Do not fabricate.
3. **LINT.** Walk every page for orphans, contradictions, stale claims, missing pages, naming drift, schema violations, index mismatches. Fix high-impact in place, leave low-impact documented.
4. **INDEX plus LOG.** The index is the content catalog, one line per page, kept under 200 lines. The log is the chronological append-only timeline.

### 5. Write everything down. Treat the substrate as the work, not a record of it.

The discipline that makes the base trustworthy is refusing to trust working memory for anything that matters. Files first, never vibes. Every interview, every competitive datapoint, every claim you might one day put in a deck goes into a file with a category, a date, and a source, so synthesis becomes a query, not a recollection. The substrate is the work. `ins_kesava-mandiga-substrate-driven-intelligence`

This is the same move Tiago Forte calls a Second Brain: the brain is for having ideas, the system is for storing them, and AI compounds the stored layer on demand. `ins_second-brain-para`

> "Our brains are for having ideas, not storing them — an external, organized knowledge system compounds over time and becomes the foundation for creative output, especially when AI can now search, synthesize, and surface that knowledge on demand."
> · Tiago Forte, Building a Second Brain
> `ins_second-brain-para`

### 6. Make the context rich and specific, not thin and generic.

Depth of context, not sophistication of the agent, is the deciding factor. A simple agent reading dense, domain-specific material beats a complex agent reading boilerplate every time. `ins_rich-context-beats-sophisticated-agents` Generic context gets generic output. Worse, a sophisticated agent over thin context produces confidently wrong results, because the chain amplifies whatever the thin context implied.

> "Simple agents reading rich, specific context will outperform complex agents reading thin context every time."
> · Maja Voje + Benjamin Gibert, GTM Strategist, 2026-05-01
> `ins_rich-context-beats-sophisticated-agents`

The gap is measurable. Among 200 GTM operators surveyed, 93% of advanced users had detailed company context built into their workflow as a foundation, versus 72% of task runners, a 21-point gap that separates teams reporting previously impossible work from teams running one-off prompts. `ins_poyar-voje-context-engineering-gap` The first pull request on a new agent should be a context bundle, not a prompt.

### 7. Give each context document a named owner.

A document with no owner decays. Products change, competitors move, ICP shifts, and an unmaintained doc goes trust-negative within a quarter. Ownership turns the artifact into living substrate, and a well-built document then powers many workflows at near-zero marginal cost. `ins_context-docs-as-battery-packs`

> "Context documents need clear owners. Someone has to maintain, update, and ensure they're accurate. And since they are reusable, those context documents act like battery packs that can power multiple AI and agentic workflows."
> · Aatir Abdul Rauf, LinkedIn, 2026-04-10 (scrape date)
> `ins_context-docs-as-battery-packs`

One ICP doc, one positioning doc, one competitive map can feed outbound email, competitive analysis, and launch scripts. `ins_poyar-voje-context-engineering-gap` The economics only compound when each document has someone accountable to a refresh cadence. Add an owner column to the index.

> "The top GTM AI tool stack in 2026 is Claude + CRM + orchestration. These tools are not competing. They are combining."
> · Kyle Poyar, Claude for GTM Pulse Report 2026
> `ins_poyar-voje-context-engineering-gap`

### 8. Run lint on a cadence. Without it the base rots into a write-only pile.

The wiki pattern works only when the operator commits to lint passes. `ins_llm-wiki-pattern` Without lint the base becomes write-only, and a write-only base degrades agent quality instead of improving it. Encoded misinformation is worse than no encoding. `ins_bottleneck-is-context-not-capability`

A lint pass walks every page and checks for orphans, contradictions, stale claims, missing pages, naming drift, schema violations, and index mismatches. The output is a findings file. Fix the high-impact items in place. Document the low-impact ones and move on. A lint pass that fixes nothing and files no findings is theater. Watch the trend: lint reports should show declining drift over time, not growing.

### 9. Close the feedback loop. A log of what happened is not a system that learns.

Capturing what the agent did is logging. Learning needs a signal of whether what it did was good, bound to the specific record. `ins_traces-need-feedback-to-learn` A trace alone teaches nothing.

> "A trace tells you what happened. It does not, by itself, tell you whether what happened was good. To learn from traces, you need feedback attached to them."
> · Harrison Chase, LangChain blog, 2026-05-05
> `ins_traces-need-feedback-to-learn`

The operational move is to mine session transcripts for patterns worth keeping, then promote those patterns back into the base, into pages, conventions, the constitution, so the next session inherits what the last one figured out. `ins_mine-transcripts-to-promote-config` Promotion is a reviewable, reversible edit, not a one-off tweak that gets forgotten on the next change.

> "Close the feedback loop — mine session transcripts for patterns to promote into config."
> · Eugene Yan, eugeneyan.com, 2026-05-03
> `ins_mine-transcripts-to-promote-config`

### 10. Keep a human on verification. The base produces drafts; you decide what is true.

Across PMM, evals, frameworks, and research, operators converge on one role split: the substrate runs the inner loop of execution and retrieval, and humans run the outer loop of alignment and taste. `pat_substrate-runs-loop-humans-run-alignment` The human is not a reviewer in every step. The human owns the call about whether a synthesized page is right in this specific context.

> "You can outsource your thinking, but you can't outsource your understanding."
> · Andrej Karpathy, Sequoia AI Ascent 2026 fireside, 2026-04-30
> `ins_judgment-vs-understanding`

This maps directly onto the anti-fabrication rule the base must enforce: every claim traces to a raw source, code, memory, or the operator's own words. `ins_kesava-mandiga-substrate-driven-intelligence` If a claim does not trace, the agent writes "unverified" and stops. Verification, not production, is the irreplaceable human job. `pat_verification-as-human-job`

### 11. Wire the base into every session and keep it portable.

The base only helps if the agent reads it before working. Import the schema and the index into your agent's startup context so they expand inline at session start, without burning tokens on the full constitution every time. A compressed agent-facing distillation, roughly 50 to 80 lines, is what gets imported. The full constitution stays on disk for lint passes and rule changes.

Keep the base in plain markdown the agent owns, not locked inside one vendor's harness. Frontier labs are training native interface preferences directly into model weights, so the more your context lives inside a single harness, the more you pay when the model or the tool changes. `ins_breunig-harness-lock-in-model-layer`

> "frontier models will resemble appliances, not general platforms"
> · Drew Breunig, Overfitting the Harness, 2026-05-10
> `ins_breunig-harness-lock-in-model-layer`

A harness-independent markdown base is the hedge. Any agent, Claude Code, codex, cursor, reads the same files. When the next model lands and eats half your scaffolding, the context survives because it was never welded to the tool. `pat_build-for-next-model`

## Check your work

- Agent failures get diagnosed against the context base first, not the prompt or the model.
- Raw sources are append-only. No synthesis edits leak into raw files.
- Synthesis pages compress and cross-reference. None mirror their raw source verbatim.
- The index catalog stays under 200 lines, one line per page.
- Every context document has a named owner and a refresh cadence.
- Lint runs on a cadence, files findings, and shows declining drift over time.
- Every claim in a synthesis page traces to a source. Untraceable claims read "unverified."
- The feedback loop is closed: transcript review is a calendar item and promotions are reviewable edits.
- A human verifies generated claims against source before they enter the base.
- The schema and index import into every relevant session automatically.

## What goes wrong

- **Swapping the model when the answer is bad.** The bottleneck is usually missing context, not capability. Diagnose the context gap first. `pat_context-not-capability`
- **Ask-answer-forget.** Using the agent as a chat box that forgets everything by tomorrow. Build the base so synthesis lands somewhere durable. `ins_most-people-still-using-like`
- **Editing raw sources.** Raw is the source of truth and must stay append-only. Edits there corrupt the trail every synthesis page depends on. `ins_llm-wiki-pattern`
- **Index balloon.** The catalog grows past 200 lines and stops being scannable. Move detail into pages, keep the index to one line each.
- **Write-only base.** Skipping lint until the base is a stale pile nobody reads. Lint on a cadence or the wiki rots. `ins_llm-wiki-pattern`
- **Thin context, sophisticated agent.** Adding chain depth and tool calls over generic context. The chain just amplifies the missing signal into confident error. `ins_rich-context-beats-sophisticated-agents`
- **Unowned context docs.** Collective ownership means nobody updates, and the doc goes trust-negative within a quarter. Name one owner per document. `ins_context-docs-as-battery-packs`
- **Logging mistaken for learning.** Capturing traces with no feedback attached. The system accumulates records and improves nothing. `ins_traces-need-feedback-to-learn`
- **Removing the human from verification.** Letting the base produce claims with no human checking they trace to source. That is how fabrication enters the substrate and compounds. `pat_verification-as-human-job`
- **Welding the base to one harness.** Locking context inside a single vendor's tooling. When the model shifts, the detour gets expensive. Keep it portable markdown. `ins_breunig-harness-lock-in-model-layer`

## What you get

1. Three-layer base: append-only raw sources, agent-owned synthesis pages, a small stable constitution.
2. Four named operations the agent runs: INGEST, QUERY, LINT, INDEX plus LOG.
3. An index catalog under 200 lines, one line per page.
4. A greppable append-only log of every change, tagged by agent and kind.
5. A context-document inventory with a named owner and refresh cadence per entry.
6. A lint cadence that files findings and shows drift declining over time.
7. A closed feedback loop: transcript review plus reviewable promotions back into the base.
8. A session-start import that loads the schema and index into the agent automatically.
9. A portable markdown base any harness can read, hedged against model and tool churn.

## Two shapes, one base

The base feeds two agent patterns, and they read context differently. Name which shape you are building before you scope the context. `con_agents-as-team-vs-tools`

| Shape | When it fits | How it reads the base |
|-------|-------------|----------------------|
| Agents as a team | Heterogeneous, persistent jobs. Each agent has a standing role and tool scope. | Each agent reads the slice of the base its role needs, plus the shared constitution. |
| Agents as a tool | Homogeneous, short-lived, goal-bound tasks. Give the goal, stay out. | The single agent reads the full relevant context at run time, then exits. |

Both shapes converge on the same boundary: the substrate runs the loop, the human runs alignment. `pat_substrate-runs-loop-humans-run-alignment` They diverge only on whether the substrate looks like a team or a tool, and that is decided by how persistent and how varied the agent's job is. The base does not change. Only the read pattern does.
