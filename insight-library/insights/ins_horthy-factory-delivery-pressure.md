---
id: ins_horthy-factory-delivery-pressure
operator: Dex Horthy
operator_role: Head of Agent Engineering at Factory
co_operators: []
source_url: https://ai.engineer/code/2026
source_type: talk
source_title: "A software factory needs pressure in both directions"
source_date: 2026-11-12
captured_date: 2026-11-17
domain: [agentic-coding, ai-native]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 3, evidence: 2, transferability: 4, source: 3 }
tier: C
related: [ins_swyx-slop-output-review-asymmetry, ins_sivasubramanian-guardrails-define-ai-code-quality, ins_horthy-trajectory-poisoning-reset]
raw_ref: ""
---

# Speeding only the builder side of a software factory stalls delivery. Pressure must run in both directions.

## Claim
A software factory that improves only the generation side (AI agents building faster) moves the bottleneck to the delivery side (review, testing, deployment). Replacing the builder doesn't make the rest of the system optional.

## Mechanism
Classic systems thinking applied to agentic coding. The delivery system has at least two constrained points: the generation node (how fast code is produced) and the verification/deployment node (how fast code is reviewed, tested, and shipped). When AI agents accelerate only generation, the verification node becomes the new bottleneck. Teams see a backlog of agent-produced PRs that humans can't review fast enough. The factory doesn't go faster; it goes backed up. The fix is not fewer agents, but adding pressure on both sides: improve generation capacity, then immediately invest in automated verification, faster review tooling, and deployment automation to match.

The "both directions" framing is Horthy's way of naming what most teams miss when they adopt agentic coding. They measure velocity of agent commits, not velocity of shipped, verified work.

## Conditions
Holds when: a team's review and deployment pipeline is not already automated and fast. The constraint assumption is that manual review is the main verification step.

Fails when: a team has already built dense automated testing and fast deploy cycles before adopting agentic coding. For them, the constraint may already be generation, and agents help directly.

## Evidence
Horthy presented "A software factory needs pressure in both directions" at the AI Engineer Code Summit 2026, Nov 10-12, San Francisco. The talk summary from the event program: "Replacing the builder doesn't make the rest of the delivery system optional." This extends his prior work on trajectory poisoning (ins_horthy-trajectory-poisoning-reset) and long-running agent degradation, which both noted that unchecked agent runs compound errors.

## Signals
- Agent commit rate rising while PR merge rate stays flat
- Review queue depth growing week-over-week after adding coding agents
- More time spent understanding agent-written code than writing it

## Counter-evidence
Teams running pure greenfield repos with high automated test coverage and CD pipelines may not hit this constraint. Horthy's prior work at HumanLayer described the degradation on existing codebases; this talk appears to generalize it.

## Cross-references
- ins_swyx-slop-output-review-asymmetry: The slopmanifesto, introduced at the same summit, frames the same asymmetry from the review cost side.
- ins_sivasubramanian-guardrails-define-ai-code-quality: AWS VP Sivasubramanian describes three-team sequential verification as the production-scale answer to this bottleneck.
- ins_horthy-trajectory-poisoning-reset: Horthy's earlier work on how long-running agent trajectories accumulate errors, the precursor to this factory-level framing.
