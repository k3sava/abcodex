---
operator: "LangChain Blog"
lane: "agent-frameworks"
date: 2026-05-26
source_url: "https://www.langchain.com/blog/deep-agents-0-6"
source_type: "blog"
title: "New in Deep Agents v0.6"
published_at: "2026-05-19"
---

LangChain released Deep Agents v0.6 around May 19, centered on production performance. Five additions: Harness Profiles (use Kimi/Qwen/DeepSeek at 20x lower cost than frontier APIs), Delta Channels (reduce checkpoint storage by up to 100x for long-running agents), typed streaming events from runtime to frontend, a lightweight code interpreter for in-agent tool composition, and ContextHubBackend (versioned context files backed by LangSmith). The Delta Channels change is the most operationally significant for anyone running agents on large codebases.

For substrate: Delta Channels directly addresses the cost problem that trips up production agents. If substrate's agentic layer runs any long multi-step jobs, checkpointing cost becomes a real number fast. Harness Profiles means you can run cheaper models for sub-tasks without rewriting orchestration logic, which is exactly the cheap-tier delegation pattern Kesava already uses in Claude Code work.
