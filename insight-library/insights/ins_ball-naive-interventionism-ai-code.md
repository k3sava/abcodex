---
id: ins_ball-naive-interventionism-ai-code
operator: Thorsten Ball
operator_role: Staff Engineer, Sourcegraph Amp; author of Register Spill newsletter
co_operators: []
source_url: https://registerspill.thorstenball.com/p/joy-and-curiosity-98
source_type: post
source_title: "Joy & Curiosity #98"
source_date: 2026-09-06
captured_date: 2026-09-09
domain: [engineering, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 3, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_willison-reliability-erodes-review-discipline, ins_mollick-commission-not-steer]
raw_ref: ""
---

# Engineers who dismiss AI-generated code as low-quality apply the same professional bias that causes domain experts to over-intervene within their specialty

## Claim
Engineers criticizing AI-generated code for style and comment quality are often exhibiting naive interventionism: a professional reflex to find problems within one's domain of expertise even when the output has delivered substantial value that the expert's own process could not produce as cheaply.

## Mechanism
Taleb's naive interventionism describes how professionals biased toward doing X tend to overweight the importance of doing X correctly, even when not doing X, or automating X, would produce better aggregate outcomes. The classic illustration is surgeon cohorts recommending tonsillectomies at different rates for the same patients. The intervention rate tracks the examiner's specialty identity, not the clinical evidence.

Ball applies this pattern to code review of AI output. An engineer reviewing a PR that an agent opened will apply the same evaluative frame they use for human code: style, comment quality, naming conventions, architectural elegance. That frame was trained on the cost of human attention. Agents shift the cost structure. A feature delivered end-to-end in 20 minutes with frontend changes, backend changes, documentation, and tests is valuable on different terms than a feature built incrementally by a senior engineer over a week. Evaluating it by the same quality rubric obscures the cost-per-capability gain.

## Conditions
Holds when: the engineer reviewing AI output was trained on human-authored code quality standards and applies those standards without adjusting for the different production cost of the output. Most common in teams where AI is new, where senior engineers are the primary reviewers, and where review rubrics have not been updated.

Fails when: the quality concern is not stylistic but functional. AI-generated code that introduces bugs, fails tests, or creates security vulnerabilities requires intervention regardless of the cost savings. The naive interventionism claim does not apply to correctness failures.

## Evidence
Ball identifies the pattern by asking whether an engineer who dismisses AI output as writing "dumb comments" is applying a useful filter or a professional reflex. The question he poses: "did it just knock out a feature, end to end, in the 20 minutes you weren't looking, including frontend and backend changes, and internal and external documentation, and tests... and didn't it test it fully... But the comments are dumb?"

The mechanism draws on Taleb, Antifragile, Chapter 7. The tonsillectomy study: three cohorts of doctors examined the same 389 children and recommended the procedure at rates of 174, 99, and 52 respectively, with each successive cohort reviewing children the previous one had cleared. The intervention rate tracks domain identity, not clinical evidence.

Ball's own conclusion on current review practice: "making Astra and Fable open PRs and then have two people review them line by line in September 2026? Nah."

## Signals
- Reviewers flag stylistic issues in AI-generated code at higher rates than functional issues
- Review time per AI-generated PR exceeds review time per human-generated PR of equivalent complexity
- Teams block AI-generated features for quality reasons while the features pass all tests

## Counter-evidence
The naive interventionism frame can itself become an excuse to skip necessary review. Code that ships to production without human understanding creates systemic risk: when something breaks, no one knows the mechanism. Rachel Laycock's counterpoint (via Martin Fowler's blog) identifies what code review actually does that automation cannot fully replace: knowledge transfer, collective ownership, and mentorship of junior engineers. Ball cites her view without dismissing it. The question is not whether to review but what to review for.

## Cross-references
- ins_willison-reliability-erodes-review-discipline: Willison on how agent reliability gains reduce but do not eliminate the need for disciplined review.
- ins_mollick-commission-not-steer: Mollick on the different cognitive mode required when directing agents versus doing the work.
