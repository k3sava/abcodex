---
name: Mitchell Hashimoto
slug: mitchell-hashimoto
roles:
  - Founder and CEO of Superlogical
  - Creator of Ghostty terminal emulator
  - Co-founder of HashiCorp (Vagrant, Terraform, Vault, Consul)
domains_active: [engineering, ai-native]
captured_first: 2026-08-03
external:
  website: https://mitchellh.com/
---

Mitchell Hashimoto is a practitioner-turned-infrastructure-builder whose work has shaped how developers interact with cloud infrastructure and local tooling across two distinct eras. He co-founded HashiCorp in 2012, where he authored Vagrant, Terraform, Vault, and Consul before the company was acquired by IBM. His second act is Ghostty, an open-source terminal emulator that became one of the most anticipated developer tool releases in years. His third act is Superlogical, a new terminal multiplexer company he announced in July 2026, built on the premise that the terminal is the natural coordination layer for mixed human-agent teams. The founding thesis: the right primitive for the agent era is not another agent framework but a persistent stateful session per task that both humans and agents can access asynchronously.

## Operating themes
- **Terminal as infrastructure primitive** The terminal multiplexer is not a convenience tool but the shared execution context that ties together developers, agents, and CI systems. Hashimoto argues that existing multiplexers fail at this job because they duplicate state from client to server rather than maintaining a single persistent session.
- **Open source as distribution** Each of Hashimoto's projects has launched as open source with clear scoping. Ghostty was invited-only during development and released publicly as a complete, opinionated product. The pattern: build something genuinely finished, then open it rather than releasing early and patching.
- **Narrow footprint, wide impact** Hashimoto consistently picks a small, foundational surface area (provisioning, secrets, service mesh, the terminal) rather than broad platforms. The thesis is that owning a primitive produces more durable impact than owning a workflow built on someone else's primitive.
