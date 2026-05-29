---
operator: "Anthropic News"
lane: "aeo-llm-search-experts"
date: 2026-05-29
source_url: "https://www.anthropic.com/news/claude-opus-4-8"
source_type: "blog"
title: "Introducing Claude Opus 4.8"
published_at: "2026-05-28"
---

Opus 4.8 launched May 28 with three changes that matter for builders. Effort controls let users dial down how hard Claude thinks per task, cutting cost on routine work. Dynamic workflows in Claude Code let the agent restructure its own plan mid-run when the problem changes -- no human checkpoint required. Fast mode is now 2.5x quicker and 3x cheaper than the previous version. Benchmarks: 84% on Online-Mind2Web (agentic web tasks), 69.2% on agentic coding (up from 64.3%), and 4x less likely to silently pass a code bug. Pricing holds at $5/$25 per million tokens, same as Opus 4.7. Simon Willison called it "a modest but tangible improvement." Available on claude.ai Pro/Max/Team/Enterprise and across AWS, Google Cloud, and Microsoft Foundry.

For substrate: dynamic workflows change the design contract. An agent that re-plans mid-task without a human gate is qualitatively different from one that runs a fixed sequence. The harness layer needs to account for this. For Innie: the cheaper fast mode makes per-interaction Claude calls more viable in a consumer iOS context where cost per session matters. For ab-codex: this release is the kind of primary source the library should be surfacing to PMM and product operators within 24 hours -- Anthropic's own framing, benchmarked.
