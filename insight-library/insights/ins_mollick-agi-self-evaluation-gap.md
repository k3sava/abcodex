---
id: ins_mollick-agi-self-evaluation-gap
operator: Ethan Mollick
operator_role: Professor at Wharton; author of Co-Intelligence and Co-Existence
co_operators: []
source_url: https://www.oneusefulthing.org/p/fable-52-and-jagged-agi
source_type: essay
source_title: "Fable 5.2 and Jagged AGI"
source_date: 2026-11-09
captured_date: 2026-11-25
domain: [ai-native, leadership-and-org]
lifecycle: [ai-workflow, strategy]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 4, transferability: 4, source: 5 }
tier: B
related: [ins_mollick-four-human-edge-skills, ins_mollick-automation-satisficing-trap]
raw_ref: ""
---

# Frontier AI fails at self-evaluation, not at task breadth. It catches errors but does not notice when output misses the point.

## Claim
Current frontier models approach AGI in breadth but have a consistent self-evaluation gap: they verify factual accuracy through critics and judges but do not ask whether the work is too long, repetitive, or misses what was actually wanted.

## Mechanism
The models use internal verification loops (critics, judges, fact-checkers) that are optimized to catch factual errors and logical inconsistencies. These loops operate on correctness, not on fit-to-intent. A 182-page research paper can be factually accurate and still fail because no one asked whether a paper of that length was appropriate. A set of 450 generative worlds can be internally consistent and still fail because no process asked whether they were becoming repetitive. The models do not notice their own bloat because their self-monitoring asks the wrong question. Human steering that asks "is this what I wanted?" supplies the missing loop.

## Conditions
Holds when: the model is operating over extended or complex tasks where the gap between factual correctness and practical usefulness is large. The human delegator's instructions leave room for interpretation about scope, length, or quality bar.
Fails when: tasks are short and highly specified, leaving little room for scope drift. Output length or quality bar is explicitly constrained in the prompt, giving the model a checkable target rather than an inferential one.

## Evidence
Mollick ran a series of experiments with Claude Fable 5.2 over several weeks, using a limited definition of AGI: an AI as good as most human experts at most intellectual tasks done on a computer. Across hardware reverse-engineering, business idea screening, humanities course construction, economics research, and 3D creative building, the model performed at or near expert level in breadth.

The self-evaluation failure appeared consistently. For the poetry course, the first version was accurate but joyless; it did not notice its own lack of vitality. For the research paper, it ran 182 pages with internal critics and judges that caught errors, but no process asked whether the paper was too long. For the 3D portal world project, coordination failures led to repetition and the model created a rulebook that grew to 204 sections without noticing that the bureaucracy was defeating its own purpose.

Mollick names his steering as the correction mechanism: "My steering supplied that judgment."

## Signals
- Outputs are accurate but overlong, with more coverage than the task required.
- The model repeats themes or structures across a multi-step task without self-correcting.
- Critics and judges catch errors but the final product still fails the "is this what I wanted?" test.

## Counter-evidence
Mollick notes that some failures may trace to his own vague instructions rather than to the model's self-evaluation limit. An operator who specifies length, quality bar, and intended reader explicitly removes part of the gap the model cannot fill on its own. The jaggedness may also be moving: Fable 5.2 may be better at self-evaluation than its predecessor even if the gap remains measurable. The business idea that reached a 20 to 40% success probability estimate, which an entrepreneurship professor found impressive, suggests some real-world judgment is operating.

## Cross-references
- `ins_mollick-four-human-edge-skills`: Mollick's October 2026 framework naming taste, agency, deep knowledge, and wide knowledge as the four distinctly human-valuable attributes. The self-evaluation gap is the structural reason taste remains scarce: models cannot yet supply the question "is this actually good?"
- `ins_mollick-automation-satisficing-trap`: Mollick's earlier argument that automation encourages satisficing. The self-evaluation gap is a related pattern: the model satisfices on the correctness axis without checking the usefulness axis.
