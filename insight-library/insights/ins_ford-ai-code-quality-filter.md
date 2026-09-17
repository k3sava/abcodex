---
id: ins_ford-ai-code-quality-filter
operator: Paul Ford
operator_role: Software developer and technology writer, NYT opinion contributor
co_operators: []
source_url: https://www.nytimes.com/2026/09/12/opinion/ai-software-coding-apps.html
source_type: essay
source_title: "A.I. Was Supposed to Give Us New Killer Apps. What Happened?"
source_date: 2026-09-12
captured_date: 2026-09-17
domain: [ai-native, engineering]
lifecycle: [strategy]
maturity: frontier
artifact_class: framework
score: { originality: 3, specificity: 3, evidence: 2, transferability: 3, source: 3 }
tier: C
related: [ins_voss-code-collapse-product-discovery-shift, ins_cherny-production-code-higher-bar]
raw_ref: ""
---

# AI democratizing code production reveals the quality gap more clearly, not less

## Claim
When anyone can generate working code with AI, the failures that result from bad judgment become visible at scale. AI does not eliminate the quality difference between engineers who think well about software and those who do not. It removes code writing as the gating function, leaving judgment as the visible differentiator.

## Mechanism
Code writing previously filtered who could ship software. Most people who had poor product judgment also lacked the technical skills to manifest that judgment in a shipped product. AI removes the technical barrier. Now anyone can produce a codebase. The failures that follow — wrong problem, wrong architecture, doing another discipline's job without that discipline's knowledge — become attributable to judgment rather than to execution. The quality gap was always there; the code-writing gate hid it.

Ford's phrase: "it also makes it easy to do someone else's job badly." The new failure mode is not "I can't write code" but "I wrote code for a problem that wasn't mine to solve."

> "Now that everyone can code, it's become clearer why many shouldn't."

> "A.I. can write very good software, but it also makes it easy to do someone else's job badly, which is part of why all those projects fail."

## Conditions
Holds when: AI code generation is accessible broadly, not just to engineers; projects are being built by people without relevant domain expertise; failures are attributed to poor judgment rather than execution limitations.

Fails when: the product problem is well-specified and the domain is fully understood by the builder; code generation quality itself is the limiting factor; or the team builds in a space where judgment can be learned quickly from failure without catastrophic cost.

## Evidence
Ford's evidence is observational. He writes as a working software developer who watched the pre-AI market and contrasts it with the post-AI state. He does not cite data on project failure rates. The argument is a first-person pattern observation from a practitioner with thirty years of exposure to software cycles.

## Signals
- Non-engineers at your company are shipping features independently and attributing failures to AI hallucinations rather than requirements errors
- Project postmortems increasingly identify wrong problem definition rather than poor implementation
- AI-generated code passes review but creates downstream maintenance costs no one anticipated
- Teams find that AI writes the code they asked for, but not the code they needed

## Counter-evidence
The argument that more builders means more failures confuses rate with count. The absolute number of failures may rise while the failure rate falls — a net positive. More people shipping software means more total output and more learning. Ford's concern about "doing someone else's job badly" could equally be described as interdisciplinary work, which has its own value. Domain expertise barriers may slow innovation in cases where a motivated non-expert would actually build a better solution.

## Cross-references
- `ins_voss-code-collapse-product-discovery-shift`: Laurie Voss's quantified version of the same structural shift: product discovery is now the scarce, non-automatable skill.
- `ins_cherny-production-code-higher-bar`: Boris Cherny on the automated quality gates needed when AI code volume outpaces review bandwidth.
