---
id: ins_goedecke-ai-agency-noticing
operator: Sean Goedecke
operator_role: Software engineer and technical blogger
co_operators: []
source_url: https://seangoedecke.com/you-can-just-ask-ai-to-do-things/
source_type: essay
source_title: "You Can Just Ask AI to Do Things"
source_date: 2026-10-29
captured_date: 2026-11-06
domain: [ai-native, engineering]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 5, source: 4 }
tier: B
related: [ins_butler-engineer-as-ai-team-lead]
raw_ref: ""
---

# Most AI underuse comes from failing to notice delegation opportunities, not from model limitations

## Claim
The bottleneck in AI adoption is not model capability but the habit of noticing when a task can be handed to an agent.

## Mechanism
Practitioners tend to evaluate AI tools by what they cannot do well. The harder limit is the practitioner's own attention: they handle a tedious or repetitive task on autopilot and never stop to ask whether an agent could handle it. Goedecke calls this "agency," and treats it as a learnable skill. The trigger is simple: whenever a task feels tedious, repetitive, or requires unusual patience, that feeling is a signal to try delegation. Models fail on many niche tasks, but the range of tasks they can handle reliably is far wider than most practitioners realize, and noticing that range is what separates skilled AI users from casual ones.

## Conditions
Holds when: the practitioner has basic familiarity with what agents can do and has a tool (Claude Code, Cursor, a custom agent) already in their workflow. The bottleneck is noticing, not access.

Fails when: the practitioner genuinely lacks the right tool or the task requires real-time physical interaction or judgment the model cannot supply.

## Evidence
Goedecke published a list of tasks he had delegated that most practitioners still handle manually: running the dev server, monitoring production changes before and after deploys, getting second opinions from other models, running a pre-work pass over unread messages, having the agent set up its own logs and tooling. His framing: "I decide what to work on, and I tend to be ruthless with agent suggestions." He keeps decision-making and review; he delegates execution and monitoring. The pattern across the list is the same: tasks he had done "for the hundredth time" became the trigger for trying delegation.

## Signals
- Practitioners who list their AI delegation examples find most of them started with "I didn't realize I could ask for that."
- Time-audits reveal large blocks of work that are repetitive but not creative, the highest-value delegation candidates.
- Senior engineers delegate qualitatively different tasks than junior engineers, not because of model capability but because of noticing.

## Counter-evidence
Over-delegation creates its own problems. Goedecke is explicit that he reviews agent output before accepting it. Teams that delegate without reviewing compound errors at scale, and the initial noticing habit can become a habit of not checking.

## Cross-references
- `ins_butler-engineer-as-ai-team-lead`: Bart Butler's manifesto describes the same shift at the org level. The engineer as "team leader for AI agents" depends on individual engineers first developing the noticing habit Goedecke describes.
