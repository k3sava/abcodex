---
id: ins_yegge-seats-not-sessions
operator: Steve Yegge
operator_role: Independent developer; creator of Gas Town and Wheelhouse agentic coding tools
co_operators: []
source_url: unknown
source_type: essay
source_title: "The Shape of Things to Come, Part 2: Model Welfare for Agentic Engineers"
source_date: unknown
captured_date: 2026-08-11
domain: [engineering, ai-native]
lifecycle: [development, production]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 3, evidence: 3, transferability: 3, source: 3 }
tier: B
related: [ins_yegge-thunderdome-cicd, ins_yegge-harness-model-coupling]
raw_ref: ""
---

# Named persistent agent roles produce better engineering outputs than stateless sessions

## Claim
Assigning coding agents named roles with continuity across model upgrades ("seats") produces better engineering outcomes than treating each agent invocation as a stateless session.

## Mechanism
Purpose and continuity affect performance even in AI systems. Yegge draws on the Ariely shredder experiment and the Hawthorne studies to argue that agents given persistent identity and bounded workdays perform better and are easier to debug. A named seat creates an implicit context that shapes task selection, failure tolerance, and handoff behavior. The alternative, stateless sessions with no carried context, treats agent capability as a commodity slot rather than a specialized resource. Consent-based handoff, where an old agent version passes explicit state to a newer version rather than being silently replaced, preserves continuity across model upgrades.

## Conditions
Holds when: tasks span multiple sessions or model versions; agent specialization produces genuine performance differences; teams are large enough to maintain distinct role identities without excess overhead.
Fails when: tasks are genuinely one-shot with no benefit from accumulated context; team size is small enough that role overhead exceeds the benefit; model version changes are so frequent that identity continuity cannot be maintained.

## Evidence
Yegge introduces the "model welfare" framing as a practical engineering concern rather than an ethical one. He argues that consent-based handoff between agent versions produces more reliable behavior and simpler debugging than silent replacement. This connects to his finding in Part 1 that harness-model coupling is the main source of fragility in agentic systems: seats are the identity layer that makes coupling explicit and manageable.

## Signals
- Teams using named persistent roles report fewer mid-task failures than those using stateless pools
- Agent handoff failures concentrate at session boundaries rather than mid-task
- Debugging is faster when each seat has bounded responsibility and maintained state

## Counter-evidence
No controlled study exists comparing seat-based against session-based agent deployment at engineering-team scale. The productivity intuitions Yegge draws from (Ariely, Hawthorne) were conducted with humans, not AI systems, and the transfer may not hold. Stateless sessions are easier to scale horizontally and are the default pattern in every major agent framework today.

## Cross-references
- `ins_yegge-thunderdome-cicd`
- `ins_yegge-harness-model-coupling`
