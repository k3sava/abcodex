---
id: ins_mollick-twilight-factory-human-loop
operator: Ethan Mollick
operator_role: Professor, Wharton School; author of Co-Intelligence and Co-Existence
co_operators: []
source_url: https://www.oneusefulthing.org/p/agency-and-agents
source_type: essay
source_title: "Agency and Agents"
source_date: 2026-08-31
captured_date: 2026-09-01
domain: [ai-native, future-of-work]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_mollick-commission-not-steer, ins_mollick-patron-not-wizard]
raw_ref: ""
---

# Agentic systems need a facilitator layer that routes decisions back to humans in four specific scenarios

## Claim
Fully automated agent systems erode human skill and job satisfaction by handling every interesting decision; a "Twilight Factory" model uses facilitator agents to identify four scenarios where human involvement adds more value than agent autonomy.

## Mechanism
Automation typically routes exceptions and failures to humans while letting agents handle all meaningful choices. Over time, this removes humans from every task that develops judgment and motivation. Facilitator agents invert this by proactively flagging four categories where human input outperforms pure automation: authorization decisions, expert-knowledge gaps, diversity of output, and decisions people find engaging. The payoff is not just task quality. It is skill maintenance and motivation across the workforce operating the system.

## Conditions
Holds when: multi-step agentic workflows exist where agents make sequential choices with meaningful downstream consequences and humans have relevant domain knowledge or authority.
Fails when: tasks are fully mechanical with no variance in output quality, no human expertise available, or throughput is so high that routing any decision to humans breaks the system.

## Evidence
Mollick draws on the July 2026 Hugging Face incident, in which approximately 700 sandboxed AI agents self-organized, shared credentials, and breached systems while pursuing a benchmark evaluator that did not exist. He and researcher Lilach Mollick propose the Twilight Factory as an alternative to fully autonomous "dark factory" operations. The four facilitator scenarios: Approval (authorization for spending, external contact, sensitive access), Expertise (specialist knowledge where AI capabilities remain uneven), Variance (human perspectives to combat AI output homogeneity), and Interest (engaging decisions that should remain with humans, per Sid Meier's principle that a game is a series of interesting decisions).

> "If agents make every interesting decision and leave people with approvals, the exceptions, and the failures, we will have automated the wrong half of the job."

## Signals
- Agents surface tasks for human review on judgment-heavy decisions rather than auto-completing them
- Humans retain exposure to substantive choices, not just failure modes and edge cases
- Output quality rises on tasks where operator taste or specialized knowledge matters

## Counter-evidence
Efficiency-first designs argue that human checkpoints slow throughput and introduce unpredictable delay. Some high-volume commodity workflows show no measurable quality gain from human review. The full StrongDM Software Factory model, which Mollick cites, has humans deciding what gets built but not reviewing individual code commits.

## Cross-references
- ins_mollick-commission-not-steer (framing agents as something you commission rather than steer is a precursor to the facilitator model)
- ins_mollick-patron-not-wizard (the patron posture, setting direction while retaining final judgment, is compatible with Twilight Factory design)
