---
name: Jarred Sumner
slug: jarred-sumner
roles:
  - Creator of Bun JavaScript runtime; software engineer at Anthropic
domains_active: [engineering, ai-native]
captured_first: 2026-07-09
external:
  twitter: https://twitter.com/jarredsumner
---

Jarred Sumner. Creator of the Bun JavaScript runtime and software engineer at Anthropic. Sumner built Bun as a fast, all-in-one JavaScript toolkit designed to replace Node.js in development and production environments, writing large portions of it in Zig before a 2026 migration to Rust conducted almost entirely with Claude Code agents. His work sits at the intersection of systems programming and AI-augmented software development, where the constraints are real: a million-line codebase, a 1.386-million-assertion conformance test suite, and a correctness bar set by what a production runtime requires.

## Operating themes
- **Test-suite-as-ground-truth** Sumner's agent workflows treat the conformance test suite as the deterministic arbiter of correctness, allowing neither implementer nor reviewer agents to hallucinate a passing result.
- **Adversarial reviewer pairing** Runs separate reviewer agent instances against implementer outputs to break shared-blind-spot failure modes, a practice that caught three categories of bugs the implementers missed.
- **Scale by decomposition** Distributes work across 64 simultaneous agent instances in four worktrees, one per file or error type, to prevent context drift across large codebases.
