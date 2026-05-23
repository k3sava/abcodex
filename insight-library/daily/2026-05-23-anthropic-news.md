---
operator: "Anthropic News"
lane: "aeo-llm-search-experts"
date: 2026-05-23
source_url: "https://claude.com/blog/claude-managed-agents-updates"
source_type: "blog"
title: "New in Claude Managed Agents: self-hosted sandboxes and MCP tunnels"
published_at: "2026-05-19"
---

Anthropic shipped two enterprise security features for Claude Managed Agents on May 19, at their Code with Claude London event. Self-hosted sandboxes are now in public beta: tool execution runs on your own infrastructure (or via Cloudflare, Daytona, Modal, Vercel), while Anthropic keeps the agent orchestration layer. Sensitive files and packages never leave your environment. MCP tunnels are in research preview: agents can reach MCP servers inside a private network via a single outbound connection. No inbound firewall rules, no public endpoints. These two features remove the two blockers that kill enterprise AI agent deals: "our data can't leave our network" and "it can't reach our internal systems."

Also on May 16: Anthropic acquired Stainless, the developer tools startup, for $300 million. Stainless builds SDK generation tooling. The acquisition suggests Anthropic is building out its developer platform layer, not just model capabilities.

For substrate: Self-hosted sandboxes are a direct architectural unlock. The orchestration stays managed while tool execution moves to controlled infrastructure. For consulting: The enterprise objection to AI agents is now addressable with a spec sheet, not a waiver. For ab-codex: both announcements together (compute via SpaceX, security via self-hosted sandboxes) show Anthropic methodically removing the reasons enterprises delay.
