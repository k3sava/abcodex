---
name: Georgi Gerganov
slug: georgi-gerganov
roles:
  - Creator of llama.cpp, ggml, and the GGUF format
domains_active: [on-device-ai, agent-frameworks]
captured_first: 2026-10-13
external:
  twitter: https://twitter.com/ggerganov
---

Georgi Gerganov. Creator of llama.cpp, the C++ inference runtime that made large language models runnable on consumer hardware without cloud dependency. His ggml tensor library provides the numerical foundation; the GGUF format he defined is the standard container for quantized models shared across the open-source ecosystem. Gerganov works through the ggml-org organization on GitHub and Hugging Face, publishing new capabilities as releases and blog posts rather than paper-first research.

## Operating themes
- **On-device inference without cloud dependency** Builds runtimes that run large models on consumer CPUs, GPUs, and Apple Silicon with no API call required.
- **Structured output without text generation** Explores classification approaches that return probabilities directly rather than generating and parsing text, applied to routing and agent step selection.
- **Open formats and portable runtimes** Defines shared formats (GGUF) that allow models quantized by any tool to run in any compatible runtime, reducing format fragmentation across the local AI ecosystem.
