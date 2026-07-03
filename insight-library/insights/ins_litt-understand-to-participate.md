---
id: ins_litt-understand-to-participate
operator: Geoffrey Litt
operator_role: Design engineer, Notion
co_operators: []
source_url: https://simonwillison.net/2026/Jul/2/understand-to-participate/
source_type: talk
source_title: "Understand to Participate (AIE 2026)"
source_date: 2026-07-02
captured_date: 2026-07-03
domain: [agentic-coding, engineering, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 3, evidence: 3, transferability: 4, source: 3 }
tier: B
related: []
raw_ref: ""
---

# Developers need conceptual fluency with what an agent builds to remain active creative collaborators, not passive reviewers

## Claim
When developers lose conceptual fluency with agent-generated code, they lose the capacity to initiate new creative directions. They can approve or reject what the agent produces but cannot propose where the project goes next. Comprehension is the prerequisite for creative collaboration, not just output quality.

## Mechanism
Creative development requires holding a rich conceptual map of the codebase: what structures exist, what constraints apply, what alternatives are open. AI agents generate code faster than most developers can absorb it. When that map degrades, developers face a binary choice at each agent turn: accept or reject the output. They cannot propose novel directions because doing so requires the conceptual vocabulary that fluency provides.

Litt distinguishes this from output verification (does the code work?) and behavioral testing (do the tests pass?). Those checks tell you whether the agent succeeded at a specified goal. They do not restore the developer's capacity to specify new goals or guide the creative arc of a project across multiple sessions.

Mitigation techniques: have the agent quiz you on code changes it just made. Build "micro-worlds," small isolated environments where you can explore what a changed codebase can do. Both rebuild the conceptual map after an agent session rather than leaving the developer reliant on passive exposure.

## Conditions
Holds when: development tasks require sustained creative direction across multiple agent sessions, and next-session goals emerge from understanding what the current session built. Fails when: the task is bounded (fix bug Y, generate widget X) and human judgment is only needed at the output layer. Also fails when existing codebase familiarity is deep enough that short agent sessions do not degrade the developer's conceptual map.

## Evidence
Geoffrey Litt gave this talk at AIE 2026. Simon Willison reported it on July 2, 2026, quoting Litt directly.

> "You need a rich set of concepts in your mind to think creatively and fluently about how to move something forward."

Litt's reported techniques: having the agent quiz him on code changes; building micro-worlds to understand what the changed codebase can do.

## Signals
- The developer can describe an agent's code changes in plain language without re-reading the diff.
- New development directions come from the developer, not from accepting the agent's next suggested step.
- The developer can name tradeoffs in a proposed approach without asking the agent to list them first.

## Counter-evidence
Many developers use coding agents for sustained, multi-session projects without formal comprehension checkpoints and report satisfactory outcomes. Some argue that thorough test coverage and behavioral verification are sufficient guards against design drift, making conceptual fluency an enhancement rather than a prerequisite. The evidence for this claim is primarily argumentative from a single AIE talk; no controlled study measures creative-direction degradation under different comprehension regimes.

## Cross-references
- (none in current corpus)
