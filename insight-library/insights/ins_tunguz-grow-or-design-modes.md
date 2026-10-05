---
id: ins_tunguz-grow-or-design-modes
operator: Tom Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/grow-or-design-software/
source_type: essay
source_title: "Do We Grow Software or Do We Design It?"
source_date: 2026-10-02
captured_date: 2026-10-05
domain: [ai-native, engineering, founder-operator]
lifecycle: [ai-workflow, strategy-bets]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 3, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_tunguz-decision-model-bifurcation]
raw_ref: ""
---

# Vibe coding selects for correctness by experiment; state machine design proves correctness by enumerating every path

## Claim
AI-era software development uses two complementary modes: vibe coding, which discovers what works by running many organic experiments in parallel and keeping what survives, and state machine design, which proves correctness by enumerating every possible state and formally verifying all transitions.

## Mechanism
Vibe coding follows the logic of bacterial culture selection. Run multiple approaches simultaneously. The variant that grows, works, or passes tests survives. The rest are discarded. No prior specification of the correct answer is required. This mode suits exploratory problems where correctness criteria are fuzzy or emergent.

State machine design follows the logic of formal engineering. An AI collaborator generates a flowchart of all decision branches before any code is written. Each state is named, each transition is explicit, each gap becomes visible. Formal verification tools (Lean, TLA+) then check all paths for completeness and consistency. This mode suits mission-critical problems where every case must be provably handled.

The choice between them is not about preference but about what the task demands. An email triage system routing to archive, CRM, or escalation needs every case verified. An experimental UI feature being tested against user behavior does not.

## Conditions
Holds when: the builder can identify whether the problem requires discovered correctness (emergent, exploratory) or proven correctness (bounded, verifiable).
Fails when: a system that must be formally correct is built with vibe-coding methods and left untested against all edge states. Also fails when formal verification is applied to exploratory work where the state space is undefined, generating overhead without benefit.

## Evidence
Tomasz Tunguz points to Boris Cherny's formal verification of the Claude Agent SDK using Lean and TLA+ as a concrete example of state machine design applied to production agent infrastructure. The email triage example in the essay demonstrates the flowchart-first workflow: enumerate options (archive, CRM, escalate), identify gaps, then code against the verified structure.

The essay positions both modes within a longer engineering tradition that includes TDD, pair programming, and "move fast and break things" as era-specific defaults. Each era's default development mode reflected the dominant correctness criterion of the time.

## Signals
- Teams using state machine design generate explicit flowcharts before writing agent logic, then run a formal checker against them.
- Teams using vibe coding run A/B variants or prototype experiments in parallel and measure survival by output quality.
- The codebase contains a distinct layer of formally verified agent harness code alongside exploratory feature code.

## Counter-evidence
Most real AI systems will blend both approaches rather than commit to one. The framework does not specify when to switch modes mid-project or how to handle systems where some components are exploratory and others are mission-critical. A practitioner following only the framework still needs judgment to apply it to a specific problem.

## Cross-references
- `ins_tunguz-decision-model-bifurcation`: Tunguz on frontier models doing discovery, specialized decision models doing production enforcement. Same bifurcation logic applied to model selection.
