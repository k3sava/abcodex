---
id: ins_willison-incomplete-schema-agent-loop
operator: Simon Willison
operator_role: Creator of Datasette; independent software developer and blogger
co_operators: []
source_url: https://github.com/simonw/research/tree/main/dspy-datasette-agent-prompts
source_type: research
source_title: "Using DSPy to Evaluate and Improve Datasette Agent's SQL System Prompts"
source_date: 2026-07-02
captured_date: 2026-07-03
domain: [agentic-coding, engineering, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: case-study
score: { originality: 3, specificity: 5, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_willison-sonnet5-tokenizer-cost]
raw_ref: ""
---

# An instruction not to re-query information the agent already has causes guessing and retry loops when the held schema is incomplete

## Claim
When an agent prompt instructs the agent not to fetch information it already has, but the available schema is incomplete (table names only, not column names), the agent guesses at missing details rather than requesting the full schema, producing query errors and retry loops instead of clean execution.

## Mechanism
The instruction "don't call describe_table if you already have the information" assumes that having the information means having complete, actionable information. When a schema listing provides only table names, the agent holds partial information. It faces two options: violate the efficiency instruction and call describe_table, or proceed with incomplete data and guess column names. Agents typically guess. Each wrong guess triggers a query error. The retry loop then attempts column-name variations rather than stopping to request the complete schema. The failure is a mismatch between what "already have" means to the instruction author and what it means to the agent during execution.

The fix is straightforward: either include column names in the initial schema listing so that having the information means complete information, or soften the re-fetch prohibition to permit describe_table calls when column-name uncertainty exists.

A secondary finding: at small eval scales (20 training questions, 90% baseline accuracy), analyzing failure transcripts directly reveals actionable improvements faster than running an automated prompt optimizer. Eval quality dominates optimizer quality at this scale.

## Conditions
Holds when: agent instructions prohibit re-fetching context the agent already holds, and the held context is insufficient for the next action. Fails when: the agent is explicitly instructed to request clarification or call a schema tool when facing identifier ambiguity.

## Evidence
Willison ran DSPy optimization on 20 training questions for Datasette Agent's SQL system prompts. Baseline accuracy was 90%. Analyzing the failing 10%, he found the production prompt's instruction combined with a table-names-only schema caused agents to guess column names.

> "Either include column names in the prompt's schema listing or soften that advice."

The schema listing gave only table names. The instruction not to call describe_table if the agent already had information meant the agent guessed column names including examples like `page_count`, `o.order_id`, and `first_name`, triggering error-retry loops.

## Signals
- Agent query logs show repeated column-name variations on the same base query structure.
- Error clustering at tables where column names are not predictable from the table name alone.
- Removing the re-fetch prohibition and retesting reveals whether schema incompleteness drives the failure.

## Counter-evidence
The finding comes from a single project (Datasette Agent) at a small scale (20 questions). Other agent architectures with explicit uncertainty-handling instructions, richer initial schema context, or deterministic schema retrieval may not reproduce this failure mode. At larger eval scales, DSPy's optimizer would have more signal to compensate for schema gaps in ways that transcript review cannot find.

## Cross-references
- `ins_willison-sonnet5-tokenizer-cost`: Willison's June 30 finding that Sonnet 5's tokenizer inflates English token counts 1.42x. A separate hidden cost in the same agentic stack.
