---
id: ins_huntley-precommit-hook-agent-compliance
operator: Geoffrey Huntley
operator_role: Independent AI engineer; creator of the Ralph loop agentic coding technique
co_operators: []
source_url: https://ghuntley.com/agency/
source_type: essay
source_title: "nobody should type code by hand anymore. here's what's left."
source_date: 2026-10-13
captured_date: 2026-10-15
domain: [ai-native, engineering]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: playbook
score: { originality: 4, specificity: 5, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_stall-budget-external-to-model, ins_avilla-dynamic-workflow-topology]
raw_ref: ""
---

# Deterministic pre-commit hooks enforce coding agent compliance where AGENTS.md instructions cannot

## Claim
AGENTS.md and skill-pack instructions are probabilistic and drift from the codebase over time. A pre-commit hook that inspects the git diff and injects corrective prompts when it detects violations achieves consistent compliance.

## Mechanism
Instruction files like AGENTS.md tell an agent what to do in natural language. Agents may follow them or not, and the instructions go stale as the codebase evolves. The gap between what the file says and what the code does widens quietly.

A pre-commit hook is architectural rather than advisory. It runs deterministically on every commit the agent attempts. The hook scans the git diff for specific violations, such as direct calls to an observability module that should route through a diagnostics layer. When it finds one, it fails the commit and appends a prompt telling the agent exactly what to fix. The agent corrects itself before the change lands. Huntley reports compliance rising to ten out of ten from an unreliable baseline.

The analogy he draws is to Danger Systems, which automated code review checks in CI. The same idea applied to agent output: make the check mechanical, not advisory.

## Conditions
Holds when: violations are detectable in the git diff through pattern matching; the architectural rule is stable enough to encode; the agent iterates on feedback and re-submits.

Fails when: the violation involves runtime behavior not visible in the diff; the architectural constraint changes faster than the hook can be updated; the agent cannot interpret the injected prompt correctly.

## Evidence
Huntley documents the technique on ghuntley.com in "nobody should type code by hand anymore. here's what's left." (October 13, 2026). He describes replacing a failing AGENTS.md approach with a hook that scans for direct observability module calls. His stated outcome: compliance went from unreliable to ten out of ten.

> "software doesn't need to be readable anymore. it needs to be explainable."

He positions this as part of a broader shift in what remains for human engineers: vision, verification, and agency over the system's architecture.

## Signals
- Agent commit attempts succeed after one or two correction cycles rather than requiring manual review
- Violation rate drops to near zero on the specific pattern the hook guards
- AGENTS.md is deleted or simplified, not relied upon for critical architectural rules

## Counter-evidence
The technique is Huntley's own practice, reported without controlled comparison data. It handles one failure mode (pattern-detectable violations in the diff) but not broader alignment failures. A hook enforces one rule per pattern; complex behavioral requirements still need human review. No large-scale studies compare hook-enforced agent compliance against instruction-file approaches.

## Cross-references
- `ins_stall-budget-external-to-model`: Stall's principle of keeping budget limits external to the model's context extends the same intuition. Deterministic harness constraints outperform in-context instructions for controlling agent behavior.
- `ins_avilla-dynamic-workflow-topology`: Avilla's dynamic workflows depend on the harness to enforce structure the model cannot enforce on itself.
