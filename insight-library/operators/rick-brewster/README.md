---
name: Rick Brewster
slug: rick-brewster
roles:
  - Creator and lead developer, Paint.NET
domains_active: [engineering, ai-native, founder-operator]
captured_first: 2026-09-04
external:
  newsletter: https://blog.paint.net
---

Rick Brewster is the creator and lead developer of Paint.NET, the free image editing application used by millions of Windows users. He has shipped the product as an independent developer for over two decades, maintaining a level of code quality and performance that competes with commercial tools. His September 2026 Direct2D WINE port, written primarily with AI assistance, put him at the center of a public conversation about large-scale AI code generation in production software. His forum posts on the process offer one of the most specific first-person accounts of shipping 180,000 lines of AI-generated code to a real user base.

## Operating themes
- **AI at production scale.** Brewster shipped a three-week, 180,000-line AI-generated codebase into production and documented the specific failure modes: resource management errors, COM reference counting, and architectural decisions the AI could not self-correct.
- **Human as auditor, not author.** His account of the WINE port frames the developer's evolving role as active gating of AI output rather than generation, with intervention concentrated at design decision points rather than syntax.
- **Reverse engineering via inference.** He used AI to reconstruct undocumented rendering algorithms from observed behavior, treating the model's pattern-matching capability as a research tool for navigating opaque system interfaces.
