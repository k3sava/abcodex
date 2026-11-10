---
id: ins_mollick-jagged-agi-self-eval-gap
operator: Ethan Mollick
operator_role: Professor, Wharton School; author of Co-Intelligence and Co-Existence
co_operators: []
source_url: https://www.oneusefulthing.org/p/fable-52-and-jagged-agi
source_type: essay
source_title: "Fable 5.2 and Jagged AGI"
source_date: 2026-11-09
captured_date: 2026-11-10
domain: [ai-native, future-of-work]
lifecycle: [ai-workflow, strategy-bets]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_mollick-co-existence-phase-shift, ins_mollick-four-human-edge-skills, ins_mollick-selection-scarce-resource]
raw_ref: ""
---

# Advanced AI models now fail on self-evaluation, not facts: they cannot judge whether their own output is too long, repetitive, or mediocre

## Claim
The key unresolved gap in frontier AI models has shifted from factual errors to self-evaluation: models produce accurate but over-long, repetitive, or mediocre work because they lack the judgment to assess the quality of their own output.

## Mechanism
Earlier "jaggedness" in AI models was about hallucinations and simple math errors that humans could catch with a brief scan. The new jaggedness is about taste and self-assessment. A capable model builds its own critics and fact-checkers but those agents do not ask whether the work as a whole is good enough. A model that cannot evaluate its own output will keep going: a business plan grows to 182 pages; a game rulebook expands to 87,500 words and 204 sections. Mollick's framing: "Knowing when your own work is not good enough is a large part of what makes someone an expert." Without that capacity, the model is a competent generalist that cannot edit itself.

## Conditions
Holds when: the model is working on a long-form task with no tight length or quality constraint in the prompt; the human is not actively providing feedback on quality throughout.
Fails when: the prompt includes explicit quality criteria and length limits; the human reviews and rejects intermediate drafts; or the task is short enough that length and repetition cannot accumulate.

## Evidence
Mollick tested Fable 5.2 by giving it substantial, open-ended tasks: a business plan, a literature course, a game with a self-generated rulebook, and 450 procedurally drawn 3D worlds. Across these tests, the model produced accurate work. It did not produce proportionate work. The business plan Mollick called impressive for an MBA team ran 182 pages. The game rulebook grew to 87,500 words without the model asking whether that was too long. Mollick writes:

> "Knowing when your own work is not good enough is a large part of what makes someone an expert."

He also noted that "polish" as an instruction was ambiguous enough to let the model interpret scope without bound, and that some failures may trace back to under-specified prompts rather than model incapacity.

## Signals
- An agent produces an output that is accurate but far longer than a competent human would submit for the same task.
- The model uses critics and checkers within a session but does not cut, shorten, or reconsider the overall shape of its output.
- Directing the model to "polish" or "finalize" with no length bound produces an expansion rather than a reduction.

## Counter-evidence
Mollick acknowledges that some failures came from his own vague instructions. Under-specified prompts invite scope creep in human writers too. It is also possible the model had different taste preferences rather than no taste preferences, and that explicit quality criteria would close much of the gap. The claim about self-evaluation as the key gap is Mollick's inference from a small set of tasks, not a systematic study.

## Cross-references
- `ins_mollick-co-existence-phase-shift`: the broader frame that AI capability is now asymmetric and variable; self-evaluation failure is one axis of that variability.
- `ins_mollick-four-human-edge-skills`: four skills that remain human advantages, of which taste and judgment are most directly related to the self-evaluation gap.
- `ins_mollick-selection-scarce-resource`: selection, in Mollick's earlier framing, is the analog of self-evaluation at the workflow level.
