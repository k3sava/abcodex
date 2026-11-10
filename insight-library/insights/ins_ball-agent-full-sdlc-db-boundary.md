---
id: ins_ball-agent-full-sdlc-db-boundary
operator: Thorsten Ball
operator_role: Co-founder at Amp; author, Register Spill newsletter
co_operators: []
source_url: https://registerspill.thorstenball.com/p/joy-and-curiosity-105
source_type: essay
source_title: "Joy & Curiosity #105"
source_date: 2026-11-08
captured_date: 2026-11-10
domain: [agentic-coding, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: workflow
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 3 }
tier: B
related: [ins_ball-production-gate-replaces-pr, ins_ball-specification-bug-era, ins_ball-irrefutable-proof-protocol]
raw_ref: ""
---

# The natural trust boundary for agents in production is database writes, not code changes

## Claim
At Amp, agents own every SDLC step except writing to the database: they ship to production, monitor rollouts, read logs, toggle feature flags, send emails, grant credits, and investigate database issues.

## Mechanism
"The models have become too good to keep them boxed in as smart typewriters." Code changes are reversible through feature flags and fast rollbacks. Operational tasks such as log reading, flag toggling, and email sending are either reversible or low-blast-radius. Database writes are the exception: they change persistent state that is hard to undo and that other systems depend on. The natural boundary is not visibility (code is highly visible) but irreversibility. Extending agent autonomy up to that boundary captures significant operational value without crossing the threshold where mistakes become expensive to fix.

## Conditions
Holds when: the codebase has feature flags and fast rollback; production observability is good enough for the agent to read and act on signals; the team has explicit and enforced trust boundaries rather than ad-hoc limits.
Fails when: the team has not defined the irreversibility boundary explicitly; feature flags do not cover all production paths; or the agent has implicit access to DB write paths through operational actions such as triggering a workflow that writes to the DB.

## Evidence
Ball describes Amp's current agent scope in Joy & Curiosity #105 (Nov 8, 2026). Agents ship to production, monitor the rollout, read logs, toggle feature flags, send emails, grant credits, and investigate database issues. The one exclusion is writing to the database. His explanation:

> "The models have become too good to keep them boxed in as smart typewriters."

He frames this as a deliberate choice, not a limitation he expects to stay permanent.

## Signals
- The agent autonomously resolves a production incident that would previously have required an on-call engineer.
- The agent toggles a feature flag and monitors the resulting log change without human prompting.
- The only tasks that require human approval are those involving a database schema change or data migration.

## Counter-evidence
One reader in the comments noted that feature flags can send production writes down untested paths, so the "no database writes" boundary does not fully hold when flag changes have downstream write effects. Ball does not address how Amp handles that edge case. The claim is also specific to Amp's context: a small, high-trust team with strong observability. Teams with regulatory constraints, legacy codebases, or weaker rollback tooling would need a tighter boundary.

## Cross-references
- `ins_ball-production-gate-replaces-pr`: the complementary claim that production observability replaces pre-merge review as the quality gate when agents own most code.
- `ins_ball-irrefutable-proof-protocol`: the irrefutable proof request is the agent's mechanism for proving its work before the boundary is crossed.
- `ins_ball-specification-bug-era`: as agents own more of the SDLC, the remaining bugs shift to specification errors, not implementation errors.
