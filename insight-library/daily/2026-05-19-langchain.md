---
operator: "LangChain Blog"
lane: "agent-frameworks"
date: 2026-05-19
source_url: "https://www.langchain.com/blog/interrupt-2026-overview"
source_type: "blog"
title: "Everything we shipped at Interrupt"
published_at: "2026-05-14"
---

LangChain's Interrupt 2026 conference (May 13-14, SF) produced four significant releases. LangSmith Engine is the headline: it watches production traces in real time, clusters failures, and opens pull requests with fixes — closing the loop between observability and remediation without a human in the middle. SmithDB replaces the old storage layer with a database built specifically for agent observability, delivering up to 15x faster performance on core LangSmith workloads. Managed Deep Agents adds an API-first hosted runtime for agents that plan across timelines, use tools, delegate to subagents, and write files. Context Hub and LLM Gateway round out the release — versioning agent instructions and enforcing spend limits plus PII redaction before requests leave your environment.

For substrate: Engine and Managed Deep Agents together mean LangChain's toolchain is now plausibly production-ready for complex multi-step work without writing custom scaffolding from scratch. For ab-codex: LangSmith Engine auto-opening PRs based on trace failure clusters is the first clear "AI operating on AI" feedback loop reaching GA — that is an insight worth documenting as an operator-level pattern on how autonomous systems self-correct in production.
