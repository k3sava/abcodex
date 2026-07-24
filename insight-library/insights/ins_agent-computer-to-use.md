---
id: ins_agent-computer-to-use
operator: Ethan Mollick
operator_role: Professor, Wharton School; author of Co-Intelligence and Co-Existence
co_operators: []
source_url: https://www.oneusefulthing.org/p/an-opinionated-guide-to-which-ai-b22
source_type: essay
source_title: "An opinionated guide to which AI to use to do stuff"
source_date: 2026-07-23
captured_date: 2026-07-24
domain: [ai-native, future-of-work]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 5, source: 4 }
tier: B
related: [ins_mollick-patron-not-wizard, ins_mollick-co-existence-phase-shift, ins_agent-approval-gate]
raw_ref: ""
---

# Agents differ from chatbots because they give the AI a computer to use

## Claim
A chatbot exchanges turns with a human; an agent gives the AI a computer to use, combining model intelligence with tools that let it plan and act for many hours of real work from a single prompt.

## Mechanism
Harnesses connect model inference to tools: file access, code execution, browser control, terminal commands. These tools let the AI loop through planning and action autonomously rather than stopping after each output to wait for a human reply. The practical result is that tasks requiring hours of human effort can be delegated to a single prompt and returned as a finished artifact, not a draft to iterate on.

## Conditions
Holds when:
- The task decomposes into plannable sub-steps the AI can execute with available tools.
- The operator defines acceptable success criteria and reviews the output before use.
- The harness enforces permission scopes so the agent cannot take unauthorized actions.

Fails when:
- Tasks require human judgment at ambiguous decision points the agent cannot detect.
- The harness provides tool access broader than the task requires, expanding the blast radius of errors.
- Prompt injection via untrusted content is not mitigated (see `ins_agent-approval-gate`).

## Evidence
> "an agentic system gives an AI a computer to use"

Mollick contrasts this with prior usage: "Until recently, using AI meant talking to a model through a chatbot in a constant back-and-forth conversation. Now, it means using an agentic system, where the AI is capable of doing the equivalent of many hours of real human work in one go."

## Signals
- You stop iterating on drafts and start reviewing finished artifacts.
- You describe the outcome you want once and the agent returns it without follow-up prompts.
- The agent produces terminal output, file diffs, or test results alongside the deliverable.

## Counter-evidence
Agents still fail on tasks requiring lateral judgment, novel tool use outside their harness, or handling unexpected states. Mollick notes that labs have not fully solved prompt injection, so the computer the AI uses can still be redirected by adversarial content in untrusted sources.

## Cross-references
- `ins_mollick-patron-not-wizard`: the shift from chatbot-prompter to agent-patron is the same transition framed at the human-role level.
- `ins_agent-approval-gate`: the companion recommendation on how to supervise agents until you trust their failure modes.
