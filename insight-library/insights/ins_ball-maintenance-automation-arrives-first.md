---
id: ins_ball-maintenance-automation-arrives-first
operator: Thorsten Ball
operator_role: Staff Engineer, Sourcegraph Amp; author, Register Spill
co_operators: []
source_url: https://registerspill.thorstenball.com/p/joy-and-curiosity-103
source_type: post
source_title: "Joy & Curiosity #103"
source_date: 2026-10-25
captured_date: 2026-10-27
domain: [engineering, ai-native, future-of-work]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 3, specificity: 3, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_ball-production-gate-replaces-pr, ins_ball-software-is-learning]
raw_ref: ""
---

# Self-improving software arrives first in pure maintenance contexts because growing systems still need human goal signals

## Claim
Full software automation reaches pure maintenance contexts first. Growing systems require ongoing human direction because the goal itself keeps changing, while a maintenance-mode system can evaluate its own success without new human input.

## Mechanism
Self-improvement requires measuring progress toward a goal. In a maintenance context, the goal is static: keep the system running, prevent regression, apply patches. The agent can evaluate its own work against a fixed standard. In a growing context, the product evolves, requirements shift, and the right direction is a judgment call. That judgment call still requires a human, at least for now, because the agent has no way to derive a new goal from first principles. Ball sees early signs of self-improvement in his own Amp work and expects it to arrive soon, but he qualifies: only systems in pure maintenance mode will be candidates for full automation in the near term. Growing systems will need more human signals than expected.

## Conditions
Holds when: the software system has a clearly defined and static success criterion; changes are regressions to be prevented rather than features to be added.

Fails when: the product is in active development; even a "small" change often requires a judgment about whether the new behavior is what the user actually wants.

## Evidence
Ball states the prediction directly in Joy & Curiosity #103 (October 25, 2026). He notes that growing systems may need more human signals than expected, "so only systems in pure maintenance mode could be fully automated." He frames this as his own prediction based on early observations from working with Amp.

## Signals
- A company that successfully runs an automated maintenance agent with no human intervention on a stable codebase.
- A growing product where attempts to automate development fully stall because the agent produces technically correct but product-wrong changes.

## Counter-evidence
The boundary between maintenance and growth is blurry. Many systems marketed as "maintenance" still evolve continuously through dependency updates, security patches, and compliance changes, each of which may require judgment. The automation threshold may move earlier than Ball predicts if models improve at deriving goals from context and prior behavior.

## Cross-references
- ins_ball-production-gate-replaces-pr (production behavior as the ground truth for agent work; connects to the evaluation mechanism here)
- ins_ball-software-is-learning (agents accumulate codified knowledge over time; the maintenance context is where that accumulation is most tractable)
