---
operator: "Simon Willison"
lane: "prompt-engineering-craft"
date: 2026-05-23
source_url: "https://simonwillison.net/2026/May/19/5-minute-llms/"
source_type: "blog"
title: "The last six months in LLMs in five minutes"
published_at: "2026-05-19"
---

At PyCon US 2026, Willison compressed six months of LLM developments into a five-minute lightning talk. The fact that this is now a legitimate conference slot tells you something: the pace is fast enough that practitioners can't track it without external curation. Themes from his slides include agents in production at scale, model proliferation (large enterprises now run multiple models), and the convergence of vibe coding and production engineering. That last one he's written about separately: he used to distinguish careful agentic engineering from vibe coding, but admits the line is eroding in his own daily work.

He also shipped Datasette Agent on May 21, an extensible AI assistant for Datasette with improved truncation handling. Small release. Big pattern: he builds tools that expose how agents actually behave in real systems, then writes about what he finds.

For ab-codex: The curation gap Willison is filling with a five-minute PyCon talk is the same gap ab-codex fills at the operator level. His approach is worth studying directly. He reads primary sources, builds small tools to test behavior, and publishes observations without inflating them. That's the editorial model ab-codex should copy. For substrate: the agents-in-production data (57% of orgs per LangChain's survey) means the question is no longer whether to build agents but how to deploy them reliably.
