---
operator: "Simon Willison"
lane: "prompt-engineering-craft"
date: 2026-05-22
source_url: "https://simonwillison.net/2026/May/19/5-minute-llms/"
source_type: "blog"
title: "The last six months in LLMs in five minutes"
published_at: "2026-05-19"
---

Simon Willison gave a lightning talk at PyCon US 2026 on May 19, summarizing the previous six months of LLM development in five minutes of annotated slides. The central claim: November 2025 was an inflection point where coding agents (Claude Code and OpenAI Codex) crossed a quality threshold into daily-driver territory. Model leadership changed hands five times across Claude, GPT-5.1, and Gemini 3 in that window. Open-weight models caught up faster than expected. Qwen3.6-35B is now a credible local option. Willison tracks quality improvement over time using a single repeatable test, generating an SVG of a pelican riding a bicycle, which makes the pace of change visible and concrete rather than impressionistic. The headline from the talk: what felt like a slow ramp is now a rapid rotation, and the "best model" label is meaningless without specifying a date. For substrate and ab-codex, this matters because model choice decisions made even six weeks ago may already be stale. The insight library's ingestion pipeline and any agent scaffolding in substrate should treat model selection as a configuration variable, not a constant.
