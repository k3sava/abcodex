---
id: ins_kehs-software-no-collapse-floor
operator: Zach Kehs
operator_role: Software engineer and blogger
co_operators: []
source_url: https://zachkehs.com/blog/theres_no_limit_to_how_bad_code_can_get/
source_type: post
source_title: "There's No Limit to How Bad Code Can Get"
source_date: 2026-09-04
captured_date: 2026-09-08
domain: [engineering-ai-eng, founder-operator-craft]
lifecycle: [process-operating-cadence, hiring-team-design]
maturity: foundational
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 3 }
tier: B
related: []
raw_ref: ""
---

# Software code quality can degrade indefinitely without triggering structural collapse, because code lacks the physical feedback loops that force other engineered systems to break

## Claim
Unlike physical structures that fail catastrophically when they exceed load capacity, software degrades continuously with no natural stopping point. Technical debt accumulates through organizational incentives and institutional knowledge erosion without any reset mechanism forcing resolution. The codebase can always get worse.

## Mechanism
Physical engineering systems carry a collapse constraint: add enough load to a bridge or a building and it fails, forcing a rebuild that restores structural integrity to some minimum standard. Software has no equivalent. A function call that is three levels of indirection too deep, a module with seventeen undocumented dependencies, a performance regression that compounds across releases, none of these trigger visible failure in the way a structural overload does. They enter what Kehs calls a "constant, neverending state of collapse" where the system continues to operate while quality degrades.

> "If you continue to add floors and rooms to a building forever, it will collapse. Software faces no such constraint. The code can always get worse."

The organizational dynamics amplify this. Project managers respond to visible failure, not invisible debt. Engineers who accumulate institutional knowledge about why the code is the way it is eventually leave, taking the implicit map of the codebase with them. New engineers build on what they find without understanding its history. Re-architecture cycles attempt to resolve debt but often introduce new complexity without eliminating the old.

> "There is no natural constraint that will wake your project manager up and force them to deal with technical debt."

The absence of a collapse floor means the decision to address technical debt is always elective and always in competition with feature delivery. Debt wins by default because the cost of not addressing it is invisible until it is catastrophic.

## Conditions
Holds when: an organization treats software maintenance as optional relative to feature delivery, and technical debt consequences are not legible to non-engineering leadership. Strongest in fast-growth companies where headcount and feature velocity outpace architectural review.

Fails when: engineering culture treats code quality as a first-class constraint with measurable standards enforced at review, and leadership has visibility into quality metrics. Also fails when the system is safety-critical and regulatory requirements create external collapse-equivalent constraints.

## Evidence
Kehs draws the building analogy explicitly, contrasting physical engineering feedback loops with software's absence of them:

> "The code can always get worse. There can always be a new layer of indirection or a reduction in performance."

The mechanism is not pessimism about developers; it is a structural observation about the system's feedback dynamics. Without external constraints, the rational local decision for any individual engineer (ship the feature, defer the cleanup) is globally irrational for the codebase.

## Signals
- Senior engineers spend an increasing fraction of time explaining the codebase to new hires rather than building.
- Features that previously took one sprint begin requiring two, then three, with no change in scope.
- A re-architecture project begins before the previous one is complete.
- Leadership describes technical debt as something to address "next quarter" for more than four consecutive quarters.

## Counter-evidence
The no-collapse-floor claim is strongest in greenfield software that degrades over time. For software that interfaces with regulated industries, physical infrastructure, or real-time financial systems, external failure modes do create something closer to a collapse threshold, because regulators, markets, or operators impose consequences before the codebase reaches its theoretical floor. The claim also does not account for market pressure: if a product becomes too slow or buggy to sell, competitive dynamics force a rewrite that functions as a collapse-equivalent reset.

## Cross-references
- (none in current corpus)
