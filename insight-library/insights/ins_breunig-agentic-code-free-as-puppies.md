---
id: ins_breunig-agentic-code-free-as-puppies
operator: Drew Breunig
operator_role: Writer and AI product thinker, dbreunig.com
co_operators: []
source_url: "https://www.dbreunig.com/2026/05/04/10-lessons-for-agentic-coding.html"
source_type: essay
source_title: 10 Lessons for Agentic Coding
source_date: 2026-05-04
captured_date: 2026-05-11
domain: [ai-engineering, ai-product]
lifecycle: [build]
maturity: applied
artifact_class: playbook
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_pierri-ai-positioning-needs-human-checkpoints]
raw_ref: 
---

# Agentic code is free as in puppies: generation is cheap, but maintenance, support, and security are the real cost

## Claim
Agentic code generation removes the creation cost but not the ownership cost. Maintenance, support, and security don't scale with the AI. They scale with the human team that owns the output. The spec-first rule distributes ownership before generation scales.

## Mechanism
AI code generation removes the time cost of initial implementation but not the cognitive load of understanding, debugging, or securing what was generated. Without a named owner per module, generated code becomes undocumented infrastructure that fails silently. Spec-first forces human ownership before AI generation begins, not after.

## Conditions
Holds when: agentic tools produce code at high volume without named owners per module; when the codebase is maintained by a small team.
Fails when: the team has strong code-review culture, explicit ownership models, and automated testing covering generated output. Ephemeral scripts (one-off data transforms, single-run migrations) carry genuinely low ownership cost.

## Evidence
From Breunig's "10 Lessons for Agentic Coding":

> "Code is cheap, but maintenance, support, and security aren't. Agentic code is 'free as in puppies'."

His spec-first rule: implement to learn, tests to measure, humans to hold the ship/no-ship call. This distributes ownership before generation scales.

## Signals
- No named owner for an AI-generated module after 30 days
- Support tickets trace back to undocumented agentic output
- Security reviews delayed because no one understands the generated code path

## Counter-evidence
Disposable, single-use scripts carry genuinely low ownership cost. The puppy metaphor breaks for code that was always meant to be ephemeral.

## Cross-references
- `ins_pierri-ai-positioning-needs-human-checkpoints`: convergent PMM-side corrective from the same week
- `pat_verification-as-human-job`: the human ship/no-ship checkpoint is the pattern's core claim
