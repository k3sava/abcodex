---
id: ins_decide-execute-deliver
operator: Arvind Narayanan
operator_role: Professor of Computer Science, Princeton University; co-author of AI Snake Oil
co_operators: [Sayash Kapoor]
source_url: https://www.normaltech.ai/p/why-ai-hasnt-replaced-software-engineers
source_type: essay
source_title: "Why AI hasn't replaced software engineers, and won't"
source_date: 2026-06-11
captured_date: 2026-06-16
domain: [future-of-work, ai-native, engineering]
lifecycle: [ai-workflow, process-cadence, strategy]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 5, transferability: 4, source: 4 }
tier: B
related: [ins_judgment-vs-understanding, ins_kevin-indig-verification-cost-rising, ins_anthropic-glasswing-verification-bottleneck-shift]
raw_ref: ""
---

# AI compresses execution in knowledge work but leaves specification and delivery as human-owned layers

## Claim
Knowledge work follows a decide-execute-deliver structure: AI has automated much of the execution layer, but the decision layer (problem framing, specification, accountability) and the delivery layer (testing, verification, maintenance) remain resistant to automation because they require human judgment and human accountability.

## Mechanism
Execution is the middle layer of knowledge work: writing the code, drafting the document, producing the analysis. AI has become highly capable here. But execution is bounded on both sides. Before execution, someone must decide what to build and specify it clearly enough for AI to act on. After execution, someone must verify the output, integrate it into the broader system, and own the consequences. Both ends demand the kind of contextual judgment and stakeholder accountability that AI cannot take on. The result is a shape that compresses the middle without eliminating the work on either side. More AI capability in execution may even increase the total work at the specification and verification ends, because the volume of executable output rises faster than the ability to review it.

## Conditions
Holds when: knowledge work requires specification that reflects business context, regulatory requirements, or stakeholder trust that cannot be fully captured in a prompt; and when output must be verified by a human who owns accountability for the result.
Fails when: the task is highly constrained and the specification is nearly complete before AI involvement begins, leaving the execution layer dominant and the decide-deliver layers thin.

## Evidence
Narayanan and Kapoor examined software engineering, where AI capabilities are furthest along and adoption has been rapid. Federal Reserve research found software engineer employment still growing, but at 3 percentage points slower annual rate since ChatGPT. A GitHub study found AI agents produced 8x more lines of code but only 30% more releases. The gap between code volume and shipping rate reflects the delivery layer absorbing the increase.

Their WARN Act finding is the sharpest evidence on the specification side: out of 160+ filings in New York in the first year since AI tools matured, only one company (Nespresso) checked the AI box as a reason for layoffs. An HBR survey found 21% of companies made large staff reductions "in anticipation of" AI productivity gains, but only 2% cited actual AI implementation. The authors call this "AI-washing layoffs":

> "59% of hiring managers admit emphasizing AI when explaining cuts 'because it plays better with stakeholders.'"

The gap between 21% anticipating AI savings and 2% realizing them is itself evidence that the decide and deliver layers are slower to compress than the execute layer.

## Signals
- Shipping velocity (releases, deployments) grows slower than code-generation volume after AI adoption.
- Requirements documentation and specification time holds flat or increases even as implementation time falls.
- Review queues, QA backlogs, and verification cycles lengthen as AI output volume rises.

## Counter-evidence
The three-layer sandwich is a simplification. Some work categories have thin specification and delivery requirements. Simple, well-defined coding tasks (bug fixes in isolated modules, boilerplate generation) are already substantially automated end to end. Narayanan and Kapoor's own evidence shows a 3pp slowdown in employment growth, not zero change, suggesting real but partial substitution. Claude's June 2026 capability leap means the decide-execute-deliver model may narrow further as AI becomes capable of generating its own specifications for routine task types.

## Cross-references
- `ins_judgment-vs-understanding`: Andrej Karpathy's related claim that you can outsource thinking but not understanding; the verification layer is the new human job.
- `ins_kevin-indig-verification-cost-rising`: Kevin Indig's finding that production cost falls while verification cost rises; applies directly to the delivery layer described here.
- `ins_anthropic-glasswing-verification-bottleneck-shift`: Anthropic's internal finding that verification is the binding constraint as generation becomes faster.
