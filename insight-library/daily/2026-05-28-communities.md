---
date: 2026-05-28
source_type: communities
---

## Hacker News

**[Show HN: Statewright -- Visual state machines that make AI agents reliable](https://news.ycombinator.com/item?id=48108778)** landed this week with strong engagement. The project wraps a Rust state machine engine around Claude Code via MCP: the agent sees only the tools valid for its current phase, and transitions fire when conditions are met. The philosophy is "Agents are suggestions, states are laws." High signal for miniu and any multi-step agentic work on substrate -- this is the architectural pattern for predictable agents without resorting to bigger models.

**[Show HN: I scanned 16 AI agent repos -- 76% of tool calls had no guards](https://news.ycombinator.com/item?id=47947356)** surfaced the same week as the Statewright launch, creating an uncomfortable pairing: most people building agents are not applying guardrails at the tool-call level. Relevant to substrate security posture and to any consulting work touching client AI deployments.

**Anthropic accuses DeepSeek, Moonshot, and MiniMax of industrial-scale distillation** (multiple HN threads this week). Thousands of fraudulent accounts allegedly used to extract Claude's knowledge at scale. The story matters beyond IP: it shows that AI capability arbitrage through distillation is now an organized, systematic practice. Relevant context for how Kesava's consulting clients think about model provenance and vendor risk.

## Product Hunt (May 2026 Leaderboard)

**[Kanwas](https://www.producthunt.com/leaderboard/monthly/2026/5)** -- open-source persistent memory layer for teams, letting agents and humans share structured context. High signal for how substrate should handle inter-agent context. Worth a closer look before building a custom memory layer.

**Kilo Code OSS** -- open-source, model-agnostic AI coding assistant for planning, building, and fixing code. A self-hosted alternative to Cursor worth tracking for client setups where proprietary tools are restricted.

*Note: Reddit communities (r/LocalLLaMA, r/ClaudeAI, r/SaaS) were inaccessible via API this scan. HN and Product Hunt covered the AI-builder signal adequately.*
