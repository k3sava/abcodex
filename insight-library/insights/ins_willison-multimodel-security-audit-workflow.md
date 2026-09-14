---
id: ins_willison-multimodel-security-audit-workflow
operator: Simon Willison
operator_role: Creator of Datasette; programmer and writer on AI and open-source software
co_operators: []
source_url: https://simonwillison.net/2026/Sep/11/datasette-security/
source_type: essay
source_title: "Datasette 1.0a39 and 0.65.4 security releases"
source_date: 2026-09-11
captured_date: 2026-09-14
domain: [ai-native, engineering]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: workflow
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_willison-cross-model-review, ins_cherny-production-code-higher-bar]
raw_ref: ""
---

# Running multiple frontier models as security auditors on open-source codebases surfaces subtle bugs that single-model or human-only review misses

## Claim
Pairing multiple frontier AI models as parallel security auditors with a two-person human workflow (one engineer writes a reproducing test, a separate engineer implements the fix) finds subtle vulnerabilities in open-source codebases that routine human review and single-model analysis would miss.

## Mechanism
Frontier AI models can reason about code paths exhaustively without the cognitive fatigue that narrows human review windows to recent changes. Running two or three distinct models increases coverage because different training corpora surface different vulnerability patterns. The two-person human workflow creates structural redundancy on each found issue: the engineer writing the repro test must confirm the vulnerability is real and testable before any fix is written; the engineer implementing the fix must pass that test. This splits the cognitive tasks of verification and remediation, preventing the common failure mode where a developer fixes a reported issue without confirming the fix is complete and not regressions-inducing.

## Conditions
Holds when: the codebase is actively maintained and the models can access full source in context; and two engineers can split roles on each finding.
Fails when: the codebase exceeds model context limits and chunking is required (coverage gaps appear); or a single engineer handles both test-writing and fix-writing (structural redundancy collapses).

## Evidence
Simon Willison and Alex Garcia ran an extensive security audit of Datasette using Claude Fable 5.1, GPT-5.6, and GPT-6 Astra. The models surfaced "very subtle bugs" warranting immediate security patches, released as Datasette 1.0a39 and 0.65.4. Willison adopted the two-person human workflow for each finding, and committed to incorporating frontier model security audits as standard practice going forward.

> "we ran an extensive audit of Datasette using Claude Fable 5.1, GPT-5.6, and GPT-6 Astra"

> "one of us would create the automated tests highlighting the issue, then the other would implement the fix"

## Signals
- AI audit produces security findings that differ from items raised in public bug reports or manual security reviews done in the same period.
- The repro-test-then-fix split catches at least one case where the initial proposed fix failed the test, requiring a second implementation pass.
- Security issues are found and patched before any public disclosure or exploit report.

## Counter-evidence
The three models Willison used are among the most capable available in September 2026. Teams using older or smaller models may find the "subtle bug" detection rate significantly lower. The workflow works best for open-source codebases where the models can read all code; proprietary codebases with restricted context access lose coverage. The two-person split doubles human engineering time on each finding and may be cost-prohibitive on large vulnerability lists.

## Cross-references
- `ins_willison-cross-model-review`: Willison's earlier July 2026 experience using multiple models for code review on sqlite-utils; this card extends to security-specific auditing.
- `ins_cherny-production-code-higher-bar`: Cherny's call for denser automated quality gates for AI-generated code; this card applies the same logic to AI-assisted security review.
