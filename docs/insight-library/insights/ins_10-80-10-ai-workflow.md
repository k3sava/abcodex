---
id: ins_10-80-10-ai-workflow
operator: Arvid Kahl
operator_role: Bootstrapped founder; builder of Podscan
source_url: https://thebootstrappedfounder.com/
source_type: essay
source_title: "Indie Hacking the Singularity — 10-80-10 AI workflow"
source_date: 2026-03-03
captured_date: 2026-05-02
domain: [ai-native, founder-operator, engineering]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: workflow
score: { originality: 3, specificity: 4, evidence: 3, transferability: 5, source: 3 }
tier: B
related: [ins_embedded-entrepreneur]
raw_ref: raw/expert-content/experts/arvid-kahl.md
---

# 10-80-10: human direction, AI execution, human polish

## Claim
For AI-augmented bootstrapped builds, divide work into three phases: the founder owns the first 10% (strategic direction, problem definition, architectural decisions), AI handles the middle 80% (code generation, data migration, testing, documentation), the founder owns the final 10% (quality review, edge cases, customer-facing polish). The split is what lets a solo operator produce team-scale output without losing the human contribution.

## Mechanism
The 80% middle is well-understood, repetitive work where AI is fast and cheap. The bookend 10%s are where taste, context, and customer judgment compound. Kahl applies this at Podscan, where agentic coding tools handled infrastructure migration while he held direction and final review. The split also clarifies *what to outsource* mentally, anything that smells like the middle 80% goes to AI by default.

## Conditions
Holds when:
- The work is technical and tool-tractable, code, data, testing, docs.
- The founder has enough domain depth to write the first 10% credibly.

Fails when:
- Tasks where the "middle 80%" itself requires sustained taste (high-end design, voice-led content).
- Compliance-heavy work where AI output cannot be quickly verified.

## Evidence
> "You provide the first 10% (strategic direction, problem definition, architectural decisions), AI handles the middle 80% (code generation, data migration, testing, documentation), and you apply the final 10% (quality review, edge case handling, customer-facing polish)."

· Arvid Kahl (synthesized from operator's published work)

## Signals
- Founder's calendar weighted toward briefing and review, not building.
- Tools log AI-generated artifacts that pass through a human review gate before shipping.
- Build velocity scales without team size.

## Counter-evidence
Cat Wu's 100% automation rule cuts against the bookend model: if the human polish step is needed every run, the workflow isn't really an automation, just a co-pilot. For repeatable production tasks, the right move is to push the final 10% itself into automation.

## Cross-references
- ins_embedded-entrepreneur, same operator
