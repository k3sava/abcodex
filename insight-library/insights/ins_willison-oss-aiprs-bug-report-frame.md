---
id: ins_willison-oss-aiprs-bug-report-frame
operator: Simon Willison
operator_role: Software developer; creator of Datasette; co-creator of Django
co_operators: []
source_url: https://simonwillison.net/2026/Nov/2/llm/
source_type: essay
source_title: "llm 0.37"
source_date: 2026-11-02
captured_date: 2026-11-05
domain: [engineering, agentic-coding, ai-native-company-building]
lifecycle: [growth-loops, product-development]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_willison-agentic-coding-tripled-github, ins_ball-maintenance-automation-arrives-first]
raw_ref: ""
---

# Open-source maintainers can absorb AI-assisted PR floods by treating each submission as a bug report with an attached example

## Claim
AI-assisted pull request volume does not overwhelm a maintainer when the frame shifts from code review to outcome verification. Each submission is a bug report that arrives with a working fix attached. The maintainer decides whether to land that fix or write their own.

## Mechanism
Traditional PR review requires understanding a contributor's approach, reasoning, and context. That takes time proportional to code complexity. When the submission is AI-assisted, the author often cannot explain the approach in depth. Reframing the submission as a "bug report with an attached example" removes that burden. Review becomes: does this fix the described issue? If yes, land it or implement your own version. The maintainer's judgment governs the outcome, not the contributor's explanation. Automated triage with a capable model (Willison uses Opus 5.5 or GPT-6 Astra) surfaces the most useful submissions from the flood before the maintainer looks at any of them.

## Conditions
Holds when: the project has clear contribution guidelines, PRs arrive with passing tests or reproducible examples, and the maintainer uses automated triage to filter the inbound queue.
Fails when: PRs arrive without tests or repro steps, requiring the maintainer to understand the contributor's intent before assessing correctness. Fails when the submission volume exceeds the maintainer's capacity even after triage.

## Evidence
Willison published llm 0.37 on November 2, 2026. The release includes contributions from 12 authors, nearly all AI-assisted. He writes:

> "LLM is my project that has been most affected by this and, to be honest, I'm not finding it to be a problem."

> "This release includes fixes from 12 authors - almost all AI-assisted - and the burden of reviewing them wasn't nearly as great as I expected."

> "I really see them as bug reports with attached examples - sometimes I land them, sometimes I implement my own fix."

He attributes the light review burden to AI-assisted triage:

> "That's mainly because I have Opus 5.5 or GPT-6 Astra help me with triage to spot the most useful fixes!"

## Signals
- Maintainer PR queue grows faster than before but review time per PR stays flat or falls.
- Contributions arrive with working tests or reproducible examples rather than architectural proposals.
- A capable model triage step sits between the inbox and the maintainer's attention.

## Counter-evidence
This frame works for maintainers comfortable making judgment calls without contributor context. Projects where architectural intent matters (not just correctness) may still need deeper review. Projects with complex test suites that AI agents struggle to run locally may receive more non-working PRs, raising the rejection rate. Some open-source projects report that AI-assisted PRs increase the volume of near-duplicate fixes for the same issue, creating merge-conflict churn even when each individual fix is correct.

## Cross-references
- See `ins_willison-agentic-coding-tripled-github` for Willison's data on how agentic coding tripled GitHub contribution rates, the upstream cause of AI-assisted PR volume.
- See `ins_ball-maintenance-automation-arrives-first` for Thorsten Ball's parallel observation that maintenance work is the first class of software work where automation arrives fully.
