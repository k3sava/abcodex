---
name: Thariq Shihipar
slug: thariq-shihipar
roles:
  - Engineering lead, Claude Code, Anthropic
domains_active: [engineering, ai-native]
captured_first: 2026-07-22
external: {}
---

Thariq Shihipar leads engineering for Claude Code at Anthropic, the company's AI-native coding agent. He architects the systems that govern how Claude Code behaves in production: the permission model, the security architecture, the system prompt design, and the trust framework for automated code review. His public output appears through conference talks and fireside chats at events like AI Engineer World's Fair, where he speaks alongside Cat Wu on how the Claude Code team's operating practices have evolved as frontier models changed what good instruction design looks like.

## Operating themes
- **Model-specific system prompt design** Frontier models require different prompting strategies than earlier models. Thariq found that removing concrete examples from system prompts improved Claude Fable's output quality because examples constrain where frontier models can generalize.
- **Security through context-aware classification, not static rules** Static allowlists fail for agentic systems because context changes what an action means. His approach evaluates each tool call against the full conversation context using a classifier, allowing the same action to be permitted or denied based on what the user instructed.
- **Trust earned by evidence, not granted by assumption** Autonomous systems earn scope incrementally by demonstrating full coverage in narrow domains before expanding. This runs through the Claude Code permission and code review architecture.
