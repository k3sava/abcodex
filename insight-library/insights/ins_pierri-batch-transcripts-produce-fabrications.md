---
id: ins_pierri-batch-transcripts-produce-fabrications
operator: Anthony Pierri
operator_role: Co-founder, FletchPMM
co_operators: []
source_url: unknown
source_type: post
source_title: 
source_date: 2026-05-12
captured_date: 2026-05-17
domain: [pmm, ai-ops]
lifecycle: [research, content-ops]
maturity: applied
artifact_class: playbook
score: { originality: 4, specificity: 5, evidence: 3, transferability: 4, source: 2 }
tier: B
related: [ins_pierri-ai-positioning-needs-human-checkpoints, ins_evals-are-data-analysis-on-llm-apps]
raw_ref: 
---

# Batch-processing interview transcripts with Claude produces fabrications; reliable output requires a dedicated per-transcript skill at three minutes per file

## Claim
When Claude processes multiple interview transcripts in a single batch prompt, fabrication rates increase significantly. Reliable extraction requires a dedicated skill run per transcript at roughly three minutes per file, not a bulk-processing approach.

## Mechanism
Batch prompts averaging across multiple transcripts lose the specific context and constraints that keep outputs grounded. The model fills inter-transcript gaps with plausible-sounding inference. Running a dedicated skill per transcript provides tighter constraints and a smaller context window, reducing the inferential surface where fabrication occurs. The per-transcript model also makes spot-checking tractable: verify one file and you know the method holds across the batch.

## Conditions
Holds when: transcripts contain heterogeneous content from different customers, contexts, or time periods.
Fails when: transcripts are highly structured and templated (e.g., support tickets with a fixed schema), reducing inferential ambiguity. Three minutes per transcript at scale may not be operationally feasible for programs with 100+ interviews.

## Evidence
Pierri found that batch-processing customer transcripts with Claude produced fabrications during a live research workflow. Reliable output required a dedicated per-transcript skill at roughly three minutes per file.

> "AI needs A LOT of help to do a good job (way more than the average person realizes)." — Anthony Pierri, LinkedIn, May 2026

## Signals
- Quotes attributed to specific customers in batch output cannot be verified in source transcripts
- Per-transcript skill runs produce extractions that survive spot-check verification

## Counter-evidence
Batch processing with structured output formats and explicit grounding instructions can reduce fabrication rates. Three minutes per transcript may not scale for large research programs. Smaller context windows in cheaper models may narrow the gap.

## Cross-references
- `ins_pierri-ai-positioning-needs-human-checkpoints`
- `ins_evals-are-data-analysis-on-llm-apps`
