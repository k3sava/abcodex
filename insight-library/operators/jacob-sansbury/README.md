---
name: Jacob Sansbury
slug: jacob-sansbury
roles:
  - CEO and co-founder, Spawn
domains_active: [ai-native, game-building]
captured_first: 2026-10-30
external:
  twitter: https://twitter.com/jsnnsa
  newsletter: https://spawn.co
---

Jacob Sansbury co-founded and runs Spawn, a massively multiplayer game environment where players use prompts to an in-game agent to modify the world. Spawn is built and maintained by a swarm of autonomous Fable-class agents that deploy to production continuously, triage bugs without human escalation, and treat any hour without a deploy as a severity-zero incident. Sansbury documents how this fully agentic operating model differs from traditional software development in deployment cadence, incident ownership, and recovery discipline.

## Operating themes
- **Continuous deployment as the default.** At Spawn, the risk model is inverted: deploying frequently is safe; batching changes is dangerous. An hour without a ship triggers the same response as a production outage.
- **Agents own their incidents.** In-game bugs are filed by the agent that encountered them, triaged by another agent, and fixed in the next deploy cycle, with no human escalation required for routine errors.
- **Deliberate breakage as resilience testing.** The team intentionally breaks production systems to verify that recovery paths work before a real incident exposes a gap.
