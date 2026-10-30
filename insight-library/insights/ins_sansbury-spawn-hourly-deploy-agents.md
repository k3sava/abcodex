---
id: ins_sansbury-spawn-hourly-deploy-agents
operator: Jacob Sansbury
operator_role: CEO and co-founder, Spawn
co_operators: []
source_url: https://twitter.com/jsnnsa/status/2115623382721126826
source_type: thread
source_title: "How I Built the Most AI-Pilled Company in the World"
source_date: 2026-10-29
captured_date: 2026-10-30
domain: [ai-native, engineering]
lifecycle: [process-cadence, ai-workflow]
maturity: frontier
artifact_class: playbook
score: { originality: 5, specificity: 5, evidence: 4, transferability: 3, source: 3 }
tier: B
related: [ins_tunguz-production-agents-code-over-prompts, ins_willison-agentic-coding-tripled-github]
raw_ref: ""
---

# At an agentic game studio, going one hour without a production deploy is a SEV-0 incident because unshipped changes accumulate blast radius

## Claim
At Spawn, failing to deploy for one hour triggers a severity-zero incident because agents continuously make small, independently valid changes, and any gap in deployment piles up unvalidated state that multiplies the consequence of the next failure.

## Mechanism
Traditional software treats deployment as a risky event to batch, test, and plan. Continuous agent-driven development inverts this. When agents make many small changes in parallel, each change is individually low-risk; the risk grows from accumulation, not from any single change. Shipping continuously keeps the blast radius of any rollback small because each deploy contains only a narrow change. Not shipping means the next rollback must undo many changes at once, and since 30-second rollbacks are available, the cost of deploying frequently is near zero while the cost of NOT deploying is compounding.

## Conditions
Holds when: agents make many small, independently valid changes continuously, and rollback is fast and reliable.
Fails when: changes are large, interdependent, or require staged testing before reaching production. Also fails when rollback is slow or risky, which removes the safety net that makes continuous deploy low-cost.

## Evidence
Sansbury reports that Spawn ships to production roughly every hour and treats any gap longer than that as a SEV-0. About 60% of work starts from a production error, an in-game agent bug report, an odd log entry, or a feature request. The in-game agent Savi files bugs herself when she or a user hits one. An agent triages each bug within about an hour. Broken changes roll back in 30 seconds. The team deliberately breaks things to verify recovery paths work.

## Signals
- Mean time between production deploys drops below one hour as agent autonomy increases.
- Bug triage begins within minutes of a production error because an agent initiates the process without human escalation.
- Rollback frequency increases while mean incident duration falls: more rollbacks, each one smaller.

## Counter-evidence
Spawn is a game environment, which has a higher tolerance for live failures than financial, health, or infrastructure software. The hourly deploy cadence may not transfer to regulated or safety-critical systems where each change requires human sign-off. The model depends on 30-second rollback being reliable, which requires significant investment in deployment infrastructure before the continuous loop is safe.

## Cross-references
- See `ins_tunguz-production-agents-code-over-prompts` for Tunguz on agents working in code rather than prompts in production.
- See `ins_willison-agentic-coding-tripled-github` for Willison on GitHub volume as a measure of agentic deployment scale.
