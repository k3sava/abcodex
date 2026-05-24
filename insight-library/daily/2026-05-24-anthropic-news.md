---
operator: "Anthropic News"
lane: "aeo-llm-search-experts"
date: 2026-05-24
source_url: "https://www.anthropic.com/news/anthropic-acquires-stainless"
source_type: "news"
title: "Anthropic acquires Stainless"
published_at: "2026-05-18"
---

Anthropic bought Stainless on May 18 for a reported $300M+. Stainless built every official Claude SDK since day one and also generates SDKs for Cloudflare, Google, and OpenAI. With the acquisition, Anthropic now controls the full agent tooling chain: models, the Model Context Protocol, and the SDK generators that wire everything together. Stainless shuts its platform to external customers on September 1, leaving OpenAI and others to figure out SDK maintenance alone. That's a moat. The same week, at Code with Claude in London, Anthropic announced Claude Managed Agents (multi-agent orchestration, webhooks, outcome tracking), doubled Claude Code rate limits for Pro/Max/Team, and signed a compute deal with SpaceX for all of Colossus 1 (300 MW, 220k+ GPUs). For substrate builds on Claude Code and the Anthropic API, the rate limit increase is immediately practical. The Managed Agents launch means production agentic workflows are now officially supported infrastructure, not workarounds. Worth reading the What's New changelog at code.claude.com/docs/en/whats-new before planning the next substrate sprint.
