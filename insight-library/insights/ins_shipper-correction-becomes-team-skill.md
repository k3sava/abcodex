---
id: ins_shipper-correction-becomes-team-skill
operator: Dan Shipper
operator_role: CEO and co-founder, Every
co_operators: []
source_url: https://every.to/on-every/introducing-the-every-agent
source_type: essay
source_title: "Introducing the Every Agent"
source_date: 2026-10-06
captured_date: 2026-10-08
domain: [ai-native, leadership-org]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: playbook
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_shipper-public-ai-prompting-spreads-adoption, ins_shipper-org-capability-ai-bottleneck]
raw_ref: ""
---

# Saving agent corrections as named team skills converts individual AI workarounds into shared institutional capability

## Claim
When a team corrects an AI agent's output in a shared channel and saves that correction as a named, callable skill, the workaround becomes a piece of organizational infrastructure. The knowledge stops living in one person's head and becomes something any teammate can invoke.

## Mechanism
A correction is ephemeral by default: the person who fixes the AI's output learns something, but the fix disappears into thread history. The key step is canonicalization. When a correction is saved as a named skill (a prompt or workflow with a stable name), anyone on the team can invoke it without needing to understand how it was built or why it was necessary. Shipper's team, for example, saved an editing workflow built through corrections into a skill called "Kate Pass," which the team now uses on drafts without explanation. The naming step does two things: it signals that the correction is reusable (not a one-off fix), and it reduces the expertise required to benefit from the workaround. The overall effect is that AI capability diffuses through the team faster than training or documentation alone.

## Conditions
Holds when: a correction produces an output pattern that recurs across different content or contexts; the team has a shared agent that supports saving named skills; someone takes responsibility for canonicalizing the correction rather than leaving it in thread history.
Fails when: the correction is highly context-specific and does not generalize; the team lacks a shared channel or shared agent and corrections stay private; no one reviews thread history to identify reusable corrections.

## Evidence
Shipper describes the skill-building loop from his own team's use of the Every Agent:

> "This is what AI-pilling a company looks like: The knowledge stops living in one person's setup and starts moving around."

The "Kate Pass" editing skill is his concrete example: an editing workflow developed through iterative agent corrections that is now a shared, named skill invokable by any Every team member.

## Signals
- Teammates invoke a saved skill without asking what it does or how it was built
- The number of named team skills grows week over week without a dedicated training program
- New hires reach productive AI output faster than in the previous quarter

## Counter-evidence
The mechanism assumes corrections can be generalized. Much AI correction is domain-specific or person-specific: the "fix" that works for one editor's voice may not transfer to another. Shipper's evidence is from a small editorial team with shared voice and shared output standards. Teams with more heterogeneous workflows may find corrections fail to generalize and skill libraries fragment rather than compound.

## Cross-references
- `ins_shipper-public-ai-prompting-spreads-adoption`: the visibility mechanism is the prerequisite. If corrections happen privately, they cannot be observed, saved, or turned into shared skills.
- `ins_shipper-org-capability-ai-bottleneck`: the claim that org capability is the AI bottleneck. This card describes one concrete mechanism for building org capability through captured corrections.
