---
id: ins_cherny-code-review-next-bottleneck
operator: Boris Cherny
operator_role: Head of Claude Code, Anthropic
co_operators: []
source_url: https://fortune.com/2026/06/11/anthropic-claude-boris-cherny-doesnt-write-code-by-hand-anymore/
source_type: essay
source_title: "The head of Claude Code hasn't written a line of code by hand in 8 months"
source_date: 2026-06-11
captured_date: 2026-06-12
domain: [ai-native, engineering]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: workflow
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_cherny-agents-prompt-agents, ins_underfund-deliberately]
raw_ref: ""
---

# When AI handles code writing, code review becomes the throughput constraint and a team of AI instances with distinct personas addresses it

## Claim
Offloading code generation to AI exposes code review as the new throughput bottleneck. Deploying multiple AI instances with distinct review personas, each applying a narrow lens consistently across every pull request, catches near-universal errors while keeping human attention on judgment rather than mechanics.

## Mechanism
Removing one bottleneck always exposes the next. When code generation moved to AI, per-PR review burden fell entirely on human engineers while code volume rose faster than review capacity. A single human reviewer applying multiple quality dimensions across dozens of daily PRs degrades in consistency and coverage. Deploying a team of Claude instances with distinct review roles, for example security, correctness, style, and edge cases, distributes the load across parallel agents. Each applies one consistent lens rather than holding all dimensions simultaneously. The collective catches errors any single reviewer, human or AI, would miss. The human role shifts to evaluating aggregate signal and making go or no-go calls, not line-by-line inspection.

## Conditions
Holds when: code generation velocity has already been offloaded to AI and review is the constraining step; and the review personas are distinct enough to surface different failure modes.
Fails when: code quality is the bottleneck rather than throughput, when the review personas are not sufficiently distinct, or when the codebase requires domain context that no review agent holds.

## Evidence
Boris Cherny states he has not written a line of code by hand in eight months. He describes a "team of Claudes" reviewing each pull request, collectively catching "pretty much every bug."

> "I haven't written a line of code by hand in, I think, eight months now."

> "Many mornings I wake up, and Claude already has pull requests..."

## Signals
- Code output per engineer-day rises while human review hours stay flat or fall.
- Review-related bugs in production decrease after adding parallel AI review personas.
- Human engineers spend more time on architecture decisions and less time on line-level review.

## Counter-evidence
Cherny works inside Anthropic, where the model used for review is the same model being developed and where trust in AI output is unusually high. Teams without that familiarity may find multi-agent review introduces new failure modes: agents that agree because they share reasoning patterns, rather than catching genuine issues. Distinct personas require deliberate engineering to be genuinely independent, not just stylistically different.

## Cross-references
- `ins_cherny-agents-prompt-agents`: the review team is itself a multi-agent cascade applied to a specific subtask.
- `ins_underfund-deliberately`: deliberately constraining headcount forces this kind of AI substitution to function.
