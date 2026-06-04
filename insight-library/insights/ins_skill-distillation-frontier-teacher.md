---
id: ins_skill-distillation-frontier-teacher
operator: Tomasz Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/the-pi-agent-skill-distillation/
source_type: essay
source_title: Skill Distillation
source_date: 2026-05-29
captured_date: 2026-06-04
domain: [ai-native, engineering]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_intelligence-per-dollar-model-metric, ins_10-80-10-ai-workflow]
raw_ref: ""
---

# Frontier models can write procedural SKILL.md files that cheaper local models execute, decoupling reasoning cost from inference cost

## Claim
Frontier AI models can author and refine atomic procedural SKILL.md files that smaller, cheaper local models then execute verbatim, creating a cost architecture where expensive frontier reasoning happens once and cheap local inference runs repeatedly.

## Mechanism
The skill distillation pattern has three layers: a local markdown knowledge base of workflow files; atomic SKILL.md files authored and refined by an advanced model (the "teacher" step); and an agent loop running Plan, Tool Call, Observe, Refine cycles with API integrations. The small model does not need to reason from first principles. It only needs to follow the procedural steps already worked out by the frontier model. This decouples the cost of generating institutional knowledge from the cost of applying it. As models change, the skill files stay stable; the team swaps the execution model without rewriting the procedures.

## Conditions
Holds when: the task is procedural enough to document as repeatable steps; the frontier model's procedure files have been tested against real-world cases; and the execution environment has the required API integrations.

Fails when: tasks require genuine situational judgment that cannot be reduced to documented steps; the frontier model writes procedures at too high a level of abstraction for the smaller model to execute; or the environment changes faster than the skill files are updated.

## Evidence
> "The frontier model becomes a teacher. The library becomes the company's institutional knowledge. The student becomes whichever model happens to be cheapest this quarter."
· Tomasz Tunguz, https://tomtunguz.com/the-pi-agent-skill-distillation/, 2026-05-29

> "Skill distillation retrieves procedures. The smaller model doesn't have to know how to evaluate a company. It just has to know how to follow the steps."
· Tomasz Tunguz, ibid.

The example setup uses approximately 80 workflow files, 17 Rust API integrations, and runs execution on Qwen 35B or Gemma 26B.

## Signals
- Teams maintain a versioned SKILL.md library that grows with each frontier-authored procedure.
- Model costs drop as routine tasks migrate from frontier to local models without capability regression.
- Skill files are tested against reference outputs before promotion to the production library.

## Counter-evidence
The approach assumes tasks can be fully specified as documented steps. Tasks that benefit from genuine multi-step reasoning, creative problem-solving, or nuanced judgment degrade when executed by smaller models following documented procedures alone. The pattern fails quietly: the small model follows the steps and produces a plausible-looking output that is subtly wrong in ways the steps cannot catch.

## Cross-references
- `ins_intelligence-per-dollar-model-metric`: cost pressure that makes the frontier-teacher pattern economically necessary.
- `ins_10-80-10-ai-workflow`: Arvid Kahl's human-at-both-ends frame is structurally similar; skill distillation automates the 80 percent and uses the frontier model to write the recipe.
