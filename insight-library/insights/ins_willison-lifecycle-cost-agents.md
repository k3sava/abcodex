---
id: ins_willison-lifecycle-cost-agents
operator: Simon Willison
operator_role: Creator of Datasette; co-creator of Django; prolific LLM and agentic-engineering blogger
co_operators: []
source_url: https://simonwillison.net/2026/Jul/20/cheap-reverse-engineering/
source_type: essay
source_title: "Reverse-engineering is cheap now"
source_date: 2026-07-20
captured_date: 2026-07-22
domain: [engineering, ai-native, founder-operator]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 3, evidence: 4, transferability: 4, source: 5 }
tier: B
related: [ins_willison-reliability-erodes-review-discipline]
raw_ref: ""
---

# Coding agents collapse all three lifecycle costs of fragile automations, not just the upfront build cost

## Claim
AI coding agents change the build-or-skip calculus for reverse-engineering unstable APIs by collapsing not just creation cost but the psychological cost of maintenance and abandonment, making previously irrational projects now rational.

## Mechanism
Before agents, the ROI question for automating an undocumented or unstable API had three cost components: upfront effort to build, risk that the API would break, and ongoing maintenance burden if it did break. Even if the first two were manageable, the third deterred the decision. Experienced programmers knew that undocumented APIs change, and committing to maintain a fragile automation indefinitely was a hidden ongoing liability.

Agents remove the third component. When regenerating the code from scratch costs almost nothing, the fear of a future maintenance cycle no longer blocks the initial build. The code can simply be thrown away and regenerated if the API breaks. Willison names this directly as removing the "psychological baggage" that the low regeneration cost eliminates. When all three lifecycle costs drop, previously irrational bets become rational.

## Conditions
Holds when: the automation target is an unstable or undocumented interface where future breakage is likely; the codebase is small and self-contained enough that regeneration from scratch is a realistic option; the primary historical deterrent was expected maintenance burden rather than initial complexity.

Fails when: the automation integrates deeply into a large, stateful system where regeneration from scratch is not realistic; breakage causes downstream damage that regeneration cannot undo (financial transactions, security-critical operations); or the organizational context requires documented, audited code rather than disposable regenerated code.

## Evidence
Willison observes this pattern across multiple anecdotes from people who used coding agents to reverse-engineer home devices, and draws the causal explanation explicitly:

> "Prior to agents, it was entirely possible to reverse-engineer home devices. The problem was the ROI — was it really worth all of that effort? More importantly, any experienced programmer knows that undocumented, unstable APIs like that may well change or break in the future. Is that initial work worth the effort if you're committing yourself to a frustrating cycle of maintenance in the future?"

> "Coding agents change that equation entirely. The effort to get a simple automation working has dropped, as has the cost of trying and failing to get it to work. Since the code is so cheap, the idea of having to maintain it in the future — or throw it away and start again — carries way less psychological baggage."

## Signals
- Teams attempting integrations they would have previously dismissed as "not worth maintaining"
- Regenerate-on-break becoming a first-class strategy rather than a failure mode
- The build-or-buy decision shifting toward custom builds for narrowly scoped but unstable targets

## Counter-evidence
The lifecycle cost collapse holds for short-lived, self-contained automations targeting a single integration point. It does not hold for systems where the automation is deeply embedded and where breakage causes business impact during the gap between failure and regeneration. Several engineers argue that cheap code generation increases total system entropy, because it encourages building against unstable interfaces that should instead be stabilized or wrapped in stable abstractions. The pattern Willison describes may also create a false sense of confidence: cheap regeneration does not mean zero maintenance; it means lower maintenance, which is not the same as zero risk.

## Cross-references
- `ins_willison-reliability-erodes-review-discipline`: a related pattern in which agent reliability changes human behavior in unexpected ways, raising a parallel concern about what happens when costs drop and vigilance drops with them.
