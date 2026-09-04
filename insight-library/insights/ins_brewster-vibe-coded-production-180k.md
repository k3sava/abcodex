---
id: ins_brewster-vibe-coded-production-180k
operator: Rick Brewster
operator_role: Creator of Paint.NET; independent software developer
co_operators: []
source_url: https://simonwillison.net/2026/Sep/2/rick-brewster/
source_type: post
source_title: "A quote from Rick Brewster"
source_date: 2026-09-02
captured_date: 2026-09-04
domain: [engineering, ai-native, founder-operator]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: case-study
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 3 }
tier: B
related: []
raw_ref: ""
---

# AI can generate 180,000 lines of production code in three weeks, but resource management and architecture still require active human babysitting

## Claim
At scale, AI code generation requires continuous human supervision for resource ownership and architecture, not just initial generation. The developer's role shifts from writing code to auditing it.

## Mechanism
AI excels at pattern repetition, reverse-engineering undocumented algorithms, and local code completion. It lacks reliable awareness of system-wide resource ownership: COM reference counting, memory lifecycle across modules, and cross-cutting design decisions that require holding the whole system in mind. These failures are invisible at generation time and catastrophic at runtime. The human's job becomes catching bad architectural decisions before they ship, not directing what to generate.

Brewster's Direct2D port for WINE compatibility required reverse-engineering undocumented rendering formulas from observed behavior. AI handled that inference task effectively. It handled resource cleanup poorly. Brewster reports having to intervene repeatedly on resource management and architectural choices, even while praising the overall output volume.

## Conditions
Holds when: the codebase spans multiple modules with cross-cutting resource ownership. AI-generated code at this scale introduces COM reference errors and memory lifecycle bugs that pass local tests but fail at integration.

Fails when: the task is self-contained, local, and does not touch shared system state. For narrow, well-defined functions, AI output quality is high and supervision overhead is low.

## Evidence
Simon Willison documented Brewster's Paint.NET forum post from September 1-2, 2026. Brewster shipped approximately 180,000 lines of AI-generated code for a Direct2D WINE port over three weeks. He described the process in his own words:

> "Most of this code is, as they say, 'vibe coded.' By that I mean that it has not been thoroughly reviewed"

> "This was written by our good friend Claude, without whom this would NOT have been possible"

> "At times, Claude was working with the fury of 10 freshly unshackled Einstein genius-level 10x coders"

On the human supervision requirement: Brewster said he had to babysit Claude extensively to ensure correct resource management and intervened on bad design choices. The scale (180,000 lines in three weeks) would have been infeasible without AI, but would have shipped broken without human review.

## Signals
- Resource management bugs appear in AI-generated code at a higher rate than in human-written code for the same system.
- Architectural decisions that look locally correct fail at integration because of cross-module state assumptions.
- Code review time per line does not decrease proportionally to generation speed; it concentrates on design-level decisions rather than syntax.
- High generation velocity paired with low defect rate requires active human gating, not fire-and-forget generation.

## Counter-evidence
Brewster's case is a single data point from a specific domain (native graphics programming with COM-based memory management). Software domains with simpler resource ownership models, managed runtimes, or self-contained modules may not require the same supervision overhead. The "vibe coded" label covers a wide range of review depths; Brewster's is self-reported. Some of the architectural interventions may reflect AI limitation at the time of the project, not an inherent ceiling.

## Cross-references
- (none in current corpus)
