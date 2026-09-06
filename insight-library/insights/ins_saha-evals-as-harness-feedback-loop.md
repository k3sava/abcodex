---
id: ins_saha-evals-as-harness-feedback-loop
operator: Antaripa Saha
operator_role: Engineer, Quotient AI
co_operators: ["Hamel Husain", "Shreya Shankar"]
source_url: https://hugobowne.substack.com/p/how-evals-are-central-to-harness
source_type: essay
source_title: "How Evals Are Central To Harness Engineering"
source_date: 2026-09-01
captured_date: 2026-09-06
domain: [engineering, ai-native]
lifecycle: [ai-workflow, product-development]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 3 }
tier: B
related: [ins_chase-context-engineering-vs-code-inspection]
raw_ref: ""
---

# Evals close the harness improvement loop; treating them as a post-deployment quality check removes the signal that guides agent system improvement

## Claim
Evals are the feedback mechanism of the harness engineering cycle: they translate production failures into labeled failure modes, direct specific harness changes, and prevent regression when changes break previously working behavior. Positioned only as a quality gate after deployment, they cannot serve this function.

## Mechanism
A harness is the infrastructure layer around an agent: tools, memory, permissions, system prompt, retrieval configuration. When an agent fails, the failure typically originates in harness decisions rather than in model capability. Evals convert observed failures into structured knowledge: which failure types exist, how frequently each occurs, and whether a harness change reduced or increased them.

The feedback loop runs in one direction: agent behavior generates traces, traces yield error analysis through manual review (open coding, then categorical labels), error categories become eval cases, eval results direct harness changes, and regression checks prevent capability loss from changes that fix one thing and break another. Each stage depends on the prior. Skipping evals means harness changes are untested against failure categories and regressions go undetected.

A specific implication from Shreya Shankar's criteria drift paper: eval criteria are not fixed. The act of grading agent behavior changes graders' sense of what good output looks like. Saha's practical consequence: build revision into the eval workflow from the start. Expect quality definitions to evolve.

## Conditions
Holds when: the agent is multi-step with a harness that can be modified (tools, retrieval, system prompt). Most directly applicable to agents where failures are diagnosable through trace inspection.

Fails when: agent failures originate from model capability limits rather than harness decisions. Evals can locate the gap but cannot close it without model improvement. Also fails when the team lacks bandwidth to build and maintain custom evaluators; generic off-the-shelf metrics do not substitute for domain-specific eval criteria.

## Evidence
Saha draws on experience building agent systems at Quotient AI and on the Hamel Husain and Shreya Shankar AI Evals course. The criteria drift insight comes from Shankar's research:

> "people don't know what they want until they see the agent's behaviour"

The practical reading: until teams watch agents fail in production, they cannot write accurate eval criteria. Evals must therefore be built iteratively after trace review, not specified upfront from a product requirements document.

## Signals
- Teams that add evals before harness changes can measure whether each change improves performance, rather than relying on feel
- Regression test suites catch capability loss when harness changes break previously passing cases
- Failure localization shifts from "the agent feels off" to "the agent fails on type X inputs in context Y"

## Counter-evidence
Eval infrastructure has high setup cost relative to benefit on simple or short-horizon agents. Many effective single-step LLM applications run without formal evals because human review at production scale is cheaper than building custom evaluators. The feedback loop framework assumes a team with enough production volume and bandwidth to build, validate, and maintain custom eval criteria. At low volume, manual review may be strictly more efficient.

## Cross-references
- `ins_chase-context-engineering-vs-code-inspection`: traces are the prerequisite to evals; Chase's framing of traces as the primary debugging artifact is the input stage of this feedback loop
