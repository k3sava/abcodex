---
operator: "Simon Willison"
lane: "prompt-engineering-craft"
date: 2026-05-26
source_url: "https://simonwillison.net/2026/May/21/datasette-agent/"
source_type: "blog"
title: "Datasette Agent"
published_at: "2026-05-21"
---

Simon Willison shipped the first alpha of Datasette Agent, an open-source plugin that drops a conversational AI assistant into any Datasette instance. It integrates his LLM library, supports hundreds of tool-calling models (OpenAI, Anthropic, Gemini, local weights), and is extensible via plugins. One plugin adds chart visualizations; others can wire in custom tools. He also published annotated PyCon US lightning talk slides the same week ("The last six months in LLMs in five minutes," May 19), summarizing what he called the November 2025 inflection point where the top coding model changed hands five times in a month.

For substrate and ab-codex: Datasette Agent is a working pattern for building AI agents on top of structured data stores, with plugin architecture that mirrors what ab-codex needs for the operator insight library. The LLM library approach (model-agnostic, tool-calling via plugins) is worth studying before committing to a specific provider SDK for any agentic feature in substrate.
