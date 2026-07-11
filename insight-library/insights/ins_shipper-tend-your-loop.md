---
id: ins_shipper-tend-your-loop
operator: Dan Shipper
operator_role: CEO and co-founder, Every
co_operators: []
source_url: https://every.to/chain-of-thought/how-gpt-5-6-changes-knowledge-work
source_type: essay
source_title: "How GPT-5.6 Changes Knowledge Work"
source_date: 2026-07-10
captured_date: 2026-07-11
domain: [ai-native, future-of-work, founder-operator]
lifecycle: [ai-workflow, process-cadence, strategy]
maturity: frontier
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 3 }
tier: B
related: [ins_shipper-org-capability-ai-bottleneck, ins_mollick-commission-not-steer]
raw_ref: ""
---

# When AI can execute multi-step tasks reliably, the knowledge worker's job shifts from doing the work to designing and tending the loops that do the work

## Claim
Once AI execution is reliable enough to run recurring workflows end-to-end, the highest-value knowledge worker activity is no longer performing tasks but building the systems, refining the criteria, and maintaining the feedback loops that run those tasks. The work shifts from doing to tending.

## Mechanism
Reliable AI execution removes execution as the binding constraint on knowledge work output. The bottleneck shifts to system design: what should the loop do, how should quality be defined, what should trigger a human review, and what evidence signals the loop has drifted from the intent? These are judgment questions that require domain expertise and cannot be delegated to the AI doing the execution. Shipper describes this as moving from "doing the work" to "tending the loop" because the worker's function is now continuous calibration and oversight of a running system rather than performing individual tasks.

## Conditions
Holds when: the AI can execute the task reliably enough that spot-checking the output costs less than performing the task directly.
Fails when: the task requires too much in-context judgment to specify upfront, or when the output quality variance is high enough that oversight time approaches the task execution time itself.

## Evidence
Shipper observed that with AI systems capable of handling multi-step workflows across hiring, content planning, customer research, and consulting, his own work shifted from direct execution to designing loops and evaluating whether they were running correctly.

> "Don't do your work. Tend your loop."

He frames six knowledge work domains as candidates for this shift: the worker's job in each is to specify what good looks like, build the system that produces it, and check whether the system is producing it rather than doing the underlying work manually.

## Signals
- Time spent producing outputs decreases while time spent reviewing and refining systems increases.
- Quality bottlenecks shift from execution capacity to specification clarity.
- The highest-value individual contribution shifts from throughput to system design and criteria definition.

## Counter-evidence
Shipper's July 2026 essay centers on GPT-5.6 Sol and ChatGPT Work, which limits the evidence base to one specific model ecosystem. The loop-tending frame assumes the task is sufficiently repeatable and definable to encode as a loop. One-off judgment-intensive tasks do not readily convert. The shift also assumes a team can maintain oversight rigor as loop count grows; fragmentation of attention across many running loops is a known failure mode.

## Cross-references
- `ins_shipper-org-capability-ai-bottleneck`: Shipper's prior finding that organizational capability is the AI adoption bottleneck. The loop-tending frame identifies the individual-level skill that determines whether capability converts to output.
- `ins_mollick-commission-not-steer`: Mollick's observation that frontier model capability shifts the human role from steering each step to commissioning the deliverable. Loop-tending extends this to recurring workflows where commissioning becomes system design.
