---
name: Craig McLuckie
slug: craig-mcluckie
roles:
  - Co-founder and CEO, Stacklok
  - Kubernetes co-creator (Google, VMware)
domains_active: [engineering, ai-native]
captured_first: 2026-10-14
external:
  blog: https://cncf.io/blog/2026/09/28/the-case-for-a-cloud-native-agent-harness
---

Craig McLuckie. Co-founder and CEO of Stacklok, an open-source agent harness company, and co-creator of Kubernetes. McLuckie applies distributed systems principles from the Kubernetes era to AI agent infrastructure. His central argument: containerizing a desktop harness moves the monolith without separating concerns. Enterprise-grade agent infrastructure requires purpose-built design with durable state, separated components, and turn-level session recovery. Kubernetes, he argues, already taught this lesson to the container world.

## Operating themes
- **Cloud-native agent infrastructure** Separating the agent loop, client, tools, and state as independently deployable components. Durable external state as the precondition for session recovery.
- **Enterprise governance for agents** Auditability and policy enforcement require the harness to own the session state, not the developer's laptop.
- **Lessons from distributed systems** Applying Kubernetes-era design thinking to agent harnesses: the same forces that made container monoliths a problem create the same problem for agentic systems at scale.
