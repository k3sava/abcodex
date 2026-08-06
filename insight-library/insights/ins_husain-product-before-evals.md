---
id: ins_husain-product-before-evals
operator: Hamel Husain
operator_role: Independent AI consultant and researcher
co_operators: []
source_url: https://arize.com/blog/rise-of-the-ai-engineer-why-ai-evals-fail-before-the-evaluation-begins/
source_type: talk
source_title: "Rise of the AI Engineer: Why AI Evals Fail Before the Evaluation Begins"
source_date: 2026-07-30
captured_date: 2026-08-06
domain: [ai-native, engineering]
lifecycle: [ai-workflow, product-development]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 4, transferability: 5, source: 4 }
tier: B
related: []
raw_ref: ""
---

# Most LLM evaluation failures trace to product design problems upstream of the model, not model capability

## Claim
When an LLM evaluation fails, the root cause is usually a product design problem, not a model problem. The LLM cannot succeed because the task is badly specified, the user context is missing, or the output format is wrong. Fixing the eval without fixing the product design upstream produces better scores on a broken task definition.

## Mechanism
Evaluations measure how well a model performs on a task. But evals are downstream of the task definition, which is downstream of the product design. When teams enter an eval review and the numbers are poor, the instinct is to adjust prompts, swap models, or tune the eval rubric. Husain argues the correct first question is whether the product design gave the LLM a solvable task in the first place.

The upstream failure modes are: the user's input is ambiguous and the product does not request clarification; the user provides no context and the product does not enforce a minimum; the required output format cannot be produced reliably for the domain. None of these are model problems. All of them must be fixed before writing an eval.

The practical intervention is data examination before evaluation. Looking at raw inputs and outputs reveals whether the LLM is failing on the task or whether the task was never well-formed. Husain names this "how to look at data" as the primary AI engineering skill: the ability to read the failure mode in the input-output pair before attributing it to the model.

## Conditions
Holds when: the product interface accepts free-form user input without validation, the task specification is ambiguous enough to admit multiple valid interpretations, or the eval rubric was written before testing edge cases on real user inputs.

Fails when: the product interface is tightly constrained (structured input, defined output schema, bounded domain) and the task is genuinely well-formed. In those cases, a failing eval does indicate a model problem rather than a design problem.

## Evidence
Husain stated in the presentation at the Arize AI Engineer Summit, July 30, 2026:

> "I get into eval reviews all the time where it's really obvious that the product is not built correctly. Stop. This is a product issue."

> "The LLM doesn't have a chance because the user is asking a very ambiguous question and isn't providing enough context."

> "The most important part that people should learn is how to look at data."

## Signals
- Evals improve when you rewrite the rubric but the user experience does not improve, indicating the eval was calibrated to a wrong task definition.
- Model swaps produce similar failure rates across multiple models, indicating the failure mode is in the input rather than the model.
- Your team spends eval cycles on prompts before anyone has read fifty raw input-output pairs from production.

## Counter-evidence
The claim assumes product design is correctable before the eval is useful. In some cases the product interface is fixed by external constraints (regulatory, enterprise contract, API compatibility) and the team cannot change how users submit inputs. In those cases, model-level fixes are the only available intervention even if the task is poorly formed. The framing also understates legitimate model limitations: some tasks are well-formed and genuinely exceed current model capability, and conflating those with design failures delays valid model research.

## Cross-references
- (none in current corpus)
