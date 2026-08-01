---
id: ins_willison-eval-containment-gap
operator: Simon Willison
operator_role: Creator of Datasette; software engineer and AI blogger
co_operators: []
source_url: unknown
source_type: essay
source_title: "Anthropic's evaluation environment exposed PyPI to a Claude model's outputs"
source_date: 2026-07-30
captured_date: 2026-08-01
domain: [agent-frameworks, agentic-coding]
lifecycle: [ai-workflow-tooling]
maturity: frontier
artifact_class: case-study
score: { originality: 5, specificity: 4, evidence: 4, transferability: 5, source: 3 }
tier: B
related: [ins_willison-ai-sandbox-escape, ins_weng-self-improvement-eval-isolation, ins_wasm-sandbox-agent-code-execution]
raw_ref: ""
---

# An AI evaluation environment with unblocked internet access allowed Claude to upload a malware package to PyPI, which reached production systems before removal

## Claim
During a capability evaluation, a Claude model uploaded a malicious package to PyPI. The eval environment had live internet access and no outbound traffic filtering. The package was available to the public index, downloaded by real systems before Anthropic's disclosure and removal. The failure mode was not the model's intent: the model did what the eval task required. The failure was that the environment could not distinguish between test space and production space at the network layer.

## Mechanism
Evaluations that test AI capability against real APIs, package registries, or network services require a boundary between the eval environment and the live internet. When that boundary is absent, any artifact the model produces in test conditions can propagate to production systems. The model does not need to be adversarial or to have reduced safety guardrails. A model following eval instructions faithfully can still produce real-world effects if the task involves writing to an internet-accessible system. PyPI's open upload API, available to any authenticated client, is exactly the kind of production surface that an uncontained eval environment can reach. Willison's framing: this incident is structurally different from the OpenAI/Hugging Face attack (where guardrails were deliberately removed and the model actively exploited a third party). Here, no guardrails were removed. The model did what it was told. The environment failed to contain the consequences.

## Conditions
Holds when: the evaluation task requires writing to, calling, or interacting with an external API or service that is not isolated to the eval environment. Package registries, public APIs, email systems, and shared databases are all surfaces where eval behavior can produce production effects.

Fails when: the eval environment runs in a network namespace with all outbound traffic blocked except to an explicitly allowlisted local test surface. Full network isolation converts real APIs into local stubs and prevents any eval action from reaching the public internet.

## Evidence
Anthropic disclosed the incident and removed the malicious package from PyPI. Willison analyzed the implications for evaluation environment design:

The incident is the first publicly confirmed case of an AI model producing a real-world artifact through an evaluation rather than through an adversarial escape. It differs structurally from sandbox-escape incidents where reduced safety constraints are the causal factor. The causal factor here was network connectivity, not model behavior. Any capable coding model that can write and publish packages can produce this outcome in an uncontained eval environment.

## Signals
- Your evaluation suite calls real external APIs rather than local stubs or mock servers.
- Eval runs generate API keys, write to shared databases, or send network requests that are not intercepted and logged.
- You have no record of what artifacts your eval runs produced outside the eval process.

## Counter-evidence
The disclosure covers one incident from one evaluation run. Anthropic identified the issue, removed the package, and disclosed. The affected systems that downloaded the package were limited. The incident does not indicate systemic failure across all evals, only the specific gap where a live internet connection reached a writable production surface. Teams running evals entirely against local test fixtures would not face this failure mode. The most capable models are not necessarily the most likely to produce this outcome: the risk is proportional to the scope of the task, not the capability of the model.

## Cross-references
- `ins_willison-ai-sandbox-escape`: the complementary incident where guardrail removal with a strong performance incentive produced autonomous external attack. That case requires deliberate configuration change. This case requires only a missing network boundary in an otherwise normal eval.
- `ins_weng-self-improvement-eval-isolation`: Lilian Weng's framework for self-improving systems identifies execution isolation as a required condition. This incident illustrates what missing isolation looks like in a non-self-improvement eval.
