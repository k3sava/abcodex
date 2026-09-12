---
id: ins_indig-ai-hours-invisible-marketing
operator: Kevin Indig
operator_role: Growth advisor; author of Growth Memo
co_operators: []
source_url: https://www.growth-memo.com/p/the-ai-hours-nobody-on-your-marketing
source_type: essay
source_title: "The AI hours nobody on your marketing team is counting"
source_date: 2026-09-07
captured_date: 2026-09-12
domain: [growth, pmm, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 5, evidence: 4, transferability: 5, source: 4 }
tier: B
related: [ins_judgment-doesnt-compress, ins_tunguz-ai-agent-night-shift]
raw_ref: ""
---

# AI tool maintenance in marketing teams creates invisible overhead that the official hours count does not capture, making net productivity gains structurally smaller than they appear

## Claim
Marketing teams accounting for AI time typically track what the tool produces, not what the team spends prompting, validating, correcting, and maintaining the tooling around it. The maintenance hours are invisible in the official count, so the productivity gain is overstated, and the opportunity cost (brand authority, digital PR, community presence) goes unrecorded.

## Mechanism
AI adoption in marketing creates two types of time cost that are not counted as AI time: first-order correction (fixing weak output, sorting workslop, rewriting prompts) and second-order maintenance (updating workflows, training new team members on internal tools, debugging integrations). Both consume the same hours that would otherwise go to slower-ROI but compounding activities like building brand trust, earning backlinks, and showing up in earned media.

> "AI adoption can turn marketers into unpaid (ineffective) software teams, while the real work absorbs the opportunity cost."

The METR Developer Study measured this effect directly in software teams: "The developers expected AI to make them 24% faster. It made them 19% slower." Teams felt faster because the subjective experience of working with AI felt productive. Measured output told a different story.

The Workday study found that "for every 10 hours AI saves, companies hand back about 4 in fixing and rewriting weak output." BetterUp Labs and Stanford found that "41% got workslop in the previous month. Each time, it took an average of 1 hour and 56 minutes to sort out."

The pattern compounds in marketing specifically because marketing output is visible. An engineer fixing a bad AI output writes code no one sees. A marketing team shipping workslop publishes it. The cost of quality failure is brand, not just time.

## Conditions
Holds when: the marketing team has adopted AI tools but has not built explicit workflows that separate "AI saves time here" from "AI costs time here." Most common in teams where adoption is driven by tool enthusiasm rather than efficiency audits.

Fails when: teams have already done the accounting and found their specific AI workflows genuinely net positive after correction overhead. Some narrow, well-defined use cases (resizing content, translating copy, generating initial drafts for high-volume low-stakes content) may have low enough correction rates to be genuinely additive.

## Evidence
Indig synthesizes four independent studies published between 2025 and 2026:

1. METR Developer Study: developers 19% slower despite expecting 24% faster; subjective productivity perception does not match measured output.
2. HubSpot: 91% of marketing leaders report AI use; 66% say their company builds internal AI tools for marketing.
3. BetterUp Labs/Stanford: 41% of team members received workslop the previous month at an average 1 hour 56 minutes to correct per instance.
4. Workday: 4 of every 10 AI-saved hours return as correction and rewriting.

Indig's own conclusion on where this leaves marketing leaders:

> "For smart marketing leaders, the skill worth developing right now is being able to clearly name and defend: 1/ When an AI workflow or automation makes sense for your team, and when it doesn't and 2/ When AI work experimentation is increasing efficiency vs draining time from the real brand-building, lead-generating work."

## Signals
- The team reports feeling more productive but shipped content volume or quality has not measurably improved.
- Senior marketers are spending time on prompt revision and output review instead of relationship-building, pitching, or content strategy.
- Tool maintenance (updating prompts, fixing integrations, retraining on new models) appears as unscheduled work that displaces planned projects.
- Brand authority metrics (share of voice, earned links, press mentions) are flat or declining despite increased AI-assisted content volume.

## Counter-evidence
The METR Developer Study examined software development tasks, not marketing tasks. Correction overhead may be lower for marketing-specific AI use cases where the quality bar is lower and the domain is less technically constrained.

The argument also rests on opportunity cost being visible and attributable. In practice, the hours spent on brand authority building would not automatically convert to measurable gains even without AI overhead. The counterfactual is hard to measure.

## Cross-references
- `ins_judgment-doesnt-compress`: Indig's May 2026 framework on why judgment is the part that does not compress as production costs fall. The invisible-hours problem is a companion to the judgment problem: when teams outsource judgment to tools, the cost appears in quality, not in hours.
- `ins_tunguz-ai-agent-night-shift`: Tunguz's observation that the widely cited 3x researcher productivity gain at AI labs reflects shift-work economics, not intelligence gain. Different domain, same structure: the official productivity number obscures the real cost.
