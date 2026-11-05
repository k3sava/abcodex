---
id: ins_ball-weak-model-false-economy
operator: Thorsten Ball
operator_role: Engineer; Sourcegraph Amp (agentic coding)
co_operators: []
source_url: https://x.com/thorstenball/article/2114386050638336082
source_type: essay
source_title: "How I work with Agents"
source_date: 2026-10-25
captured_date: 2026-11-05
domain: [agentic-coding, ai-native-company-building, engineering]
lifecycle: [product-development]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 5, source: 4 }
tier: B
related: [ins_ball-agent-bug-threshold, ins_ball-irrefutable-proof-protocol, ins_mollick-conjurer-verification-trap]
raw_ref: ""
---

# Using a cheaper model to reduce per-task cost is false economy when error rate requires verifying every output

## Claim
A cheaper model that fails on an unpredictable 10% of tasks does not reduce total cost compared to a stronger model, once verification overhead is counted. If every output must be checked because errors are random, the savings from the cheaper model are offset by the cost of universal inspection.

## Mechanism
Cost calculation for a model deployment has two components: generation cost and verification cost. Generation cost falls with cheaper models. Verification cost depends on error rate and error detectability. When errors are obvious and cheap to catch (a compile error, a test failure), verification is fast regardless of error rate. When errors are subtle or probabilistic, verification requires the same cognitive effort as the original task, applied to every output. A model with an unpredictable 10% failure rate makes every output suspect: the reviewer cannot know which outputs are in the 10% and must therefore inspect all of them. At that point, verification overhead approaches the cost of the original task. If the stronger model's higher generation cost is less than this overhead, the stronger model is the cheaper overall option. Cheaper models are genuinely cheaper only for bulk mechanical edits where errors are obvious and verification is fast.

## Conditions
Holds when: the task output is hard to verify quickly (prose reasoning, multi-step logic, complex refactors), error rate is non-trivial and errors are not self-announcing, and the reviewer is a human whose time carries a real cost.
Fails when: tasks have clear success criteria that are cheap to test automatically (unit tests, integration tests, compiling), or the stronger model's cost premium exceeds the verification overhead in the specific deployment context.

## Evidence
Thorsten Ball published "How I work with Agents" on October 25, 2026, drawing on his daily use of AI agents at Sourcegraph Amp. His central point on model selection: a model that is wrong in unpredictable cases forces verification of everything, because the reviewer cannot distinguish correct from incorrect output at a glance. He calculates that if a model is wrong 10% of the time and errors are not reliably detectable without review, every output must be treated as potentially faulty. The apparent cost saving from the cheaper model is absorbed by that universal verification requirement.

## Signals
- Engineers using a cheaper model report that they re-check agent outputs more often than they expected to.
- Error rate from cheaper model is similar to stronger model but errors feel "more random" or harder to predict from task type.
- Time-to-accept ratio (time spent reviewing vs. time saved by generation) rises when switching from stronger to cheaper models.

## Counter-evidence
In well-structured agentic pipelines with good test coverage, automated verification catches most errors at low cost, and the cheaper model is genuinely cheaper. Ball's argument applies most strongly to open-ended or judgment-intensive tasks. For constrained tasks with mechanical outputs, the error rate may still be non-zero but verification may be cheap enough that the cheaper model wins on total cost. Teams that invest in automated output validation may shift the threshold and make cheaper models viable for a broader range of tasks.

## Cross-references
- See `ins_ball-agent-bug-threshold` for Ball's related framework on when to let an agent continue vs. when to intervene, which rests on the same principle of making errors detectable and cheap.
- See `ins_ball-irrefutable-proof-protocol` for Ball's approach to structuring agent tasks so correctness can be verified independently of the agent's explanation.
- See `ins_mollick-conjurer-verification-trap` for Ethan Mollick's parallel finding that AI delegation saves time only when verification costs less than doing the task directly.
