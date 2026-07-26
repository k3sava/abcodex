---
id: ins_willison-linting-as-agent-repair-input
operator: Simon Willison
operator_role: Creator of Datasette; co-creator of Django; prolific LLM and agentic-engineering blogger
co_operators: []
source_url: https://simonwillison.net/2026/Jul/25/ruff/
source_type: essay
source_title: "Ruff v0.16.0"
source_date: 2026-07-25
captured_date: 2026-07-26
domain: [engineering, agentic-coding, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: case-study
score: { originality: 3, specificity: 5, evidence: 5, transferability: 4, source: 5 }
tier: B
related: [ins_willison-lifecycle-cost-agents, ins_willison-agent-dri-accountability]
raw_ref: ""
---

# Static analysis tools that explain each violation by rule give coding agents everything they need to fix an entire codebase automatically

## Claim
When a linting tool produces per-violation output that includes the exact location, the rule violated, and a contextual explanation, coding agents can autonomously fix the vast majority of violations across a large codebase without human intervention.

## Mechanism
A coding agent fixing a linting violation needs three inputs: where the problem is, what rule it violates, and enough explanation to generate the correct fix. Most older linting tools produced line references and terse error codes, requiring the developer to look up the rule. Ruff's v0.16.0 diagnostic format provides all three for each of its 413 default-enabled rules: the violation location, the rule identifier, and a plain-English explanation of what the rule requires and why. That explanation is the missing ingredient. When Willison ran Codex and Claude Code against the sqlite-utils codebase after Ruff flagged 1,618 violations, the agents fixed 1,538 without human input. The 80 remaining violations required disambiguation that the rule explanation alone could not supply, typically architectural choices or legitimate code that matched the rule pattern for structural reasons.

The generalizable principle: tool output that was designed for human readability (plain-English explanations, concrete examples of the fix) becomes ideal agent input. The effort invested in making linting messages understandable to junior developers translates directly into automated fixability.

## Conditions
Holds when: the linting tool provides per-violation rule context, not just file-line references; the violations are mechanical rather than architectural (formatting, style, deprecated API usage, import ordering); the codebase has enough test coverage that the agent can verify fixes without manual review.

Fails when: violations require understanding of the broader codebase design to resolve correctly; the rule fires on code that is technically violating the rule but intentionally so (suppressions, legacy contracts); the codebase lacks tests, making automated fixes unverifiable.

## Evidence
Simon Willison, testing Ruff v0.16.0 with Codex and Claude Code on his sqlite-utils repository:

> "Unsurprisingly, given Astral's new home at OpenAI, this output provides everything a coding agent would need to fix the problems."

Result: 1,538 of 1,618 violations fixed automatically. The 80 remaining required human review, a 94.6% automated resolution rate on a 3,000+ line codebase with no special agent configuration.

## Signals
- The ratio of auto-fixed to human-reviewed violations in a linting pass approaches 90%+.
- Time from lint run to clean CI drops from hours to minutes with no change to team headcount.
- Ruff lint runs become a standard step before any PR merge, with agents handling the cleanup.

## Counter-evidence
5.4% of violations (80 of 1,618) required human judgment. These fall into two categories: structural decisions the rule cannot distinguish from bugs, and suppressions the team intentionally maintains. Neither category shrinks with better agents; they shrink with better rule configuration or more targeted suppression comments. The floor on human judgment in linting is not zero.

## Cross-references
- `ins_willison-lifecycle-cost-agents`: agents collapse the lifecycle costs of maintenance tasks; linting automation is one instance of this broader pattern.
