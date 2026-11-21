---
id: ins_stenberg-agent-clone-maintenance-gap
operator: Daniel Stenberg
operator_role: Creator and lead developer of curl and libcurl
co_operators: []
source_url: https://daniel.haxx.se/blog/2026/11/17/actual-curl-rewrites-in-rust/
source_type: essay
source_title: "Actual curl rewrites in Rust"
source_date: 2026-11-17
captured_date: 2026-11-21
domain: [agentic-coding, engineering-ai]
lifecycle: [ai-workflow-tooling, process-cadence]
maturity: applied
artifact_class: case-study
score: { originality: 3, specificity: 5, evidence: 5, transferability: 4, source: 5 }
tier: B
related: [ins_thariq-rewrites-now-rational]
raw_ref: ""
---

# AI agents clone code volume in days; a living project adds hundreds of maintenance commits the clone will never have

## Claim
An AI agent can translate a mature codebase to another language in a matter of weeks, but that translation is a snapshot. Over the same period, the original project accretes bugfixes, security patches, and behavioral corrections that the agent-generated clone does not and cannot have.

## Mechanism
Writing code and maintaining code are different activities. An agent converts existing C to Rust by iterating until tests pass against a frozen reference. The original curl project, running in parallel, received bug reports from users, security disclosures from researchers, and behavioral corrections from integrators. Those require reading and responding to context that the agent never saw. The clone captures the structure of curl at one moment; the living project captures everything the team learned after that moment. The gap widens with every passing week.

Stenberg's broader argument: a software project's durability is not a property of its language. It is a property of its people, its history, and its community. A rewrite erases that history.

## Conditions
Holds when: the target codebase is actively maintained with regular commits, security disclosures, and behavioral patches. The gap grows faster in security-sensitive projects where vulnerability fixes land continuously.

Fails when: the original project is functionally frozen (no active maintenance), making the snapshot accurate for the foreseeable future.

## Evidence
Stenberg published exact counts from the curl project in November 2026, contrasting the AI-generated rewrites with the actual project over the same roughly three-week window:

> "During the time these agents converted 185,000 lines of C code into 340,000 lines of Rust code (I counted), we merged over 300 commits in the actual curl project."

The 300+ commits included:

> "200 bugfixes that none of those rust rewrites have."

The agent-generated rewrites also lack the several vulnerability fixes curl landed in that period.

Stenberg's response to the rewrite projects was amusement rather than alarm: he is skeptical of rewrites in general and does not believe the clones will be maintained. He also estimated that of 81 confirmed 2026 curl vulnerabilities, only 14 (17.3%) would have been prevented by using Rust. A Rust rewrite would still have had 67 vulnerabilities.

## Signals
- An AI-generated fork of your project falls behind on a CVE your team patched.
- Downstream users of an agent-rewritten library encounter bugs already fixed upstream.
- The agent rewrite's issue tracker fills with reports of behavior already corrected in the original.

## Counter-evidence
Stenberg opposes rewrites on principle; his skepticism is not neutral. A well-resourced team could continue maintaining the agent-generated Rust port and backport upstream patches. Automated tools already track upstream changes in translated codebases. The maintenance gap is real but not necessarily permanent. Stenberg also acknowledges he won't know whether the clones are viable for a few decades.

## Cross-references
- `ins_thariq-rewrites-now-rational`: Thariq Shihipar's claim that AI makes large-scale rewrites rational for the first time. Stenberg's finding is the evidence for the opposite condition: a rewrite is rational only if the team plans to maintain it.
