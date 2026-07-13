---
id: ins_tunguz-inference-stack-fragmentation
operator: Tomasz Tunguz
operator_role: Founder and General Partner, Theory Ventures
co_operators: []
source_url: https://www.tomtunguz.com/three-years-in/
source_type: essay
source_title: "Three Years In"
source_date: 2026-07-10
captured_date: 2026-07-13
domain: [ai-native, engineering]
lifecycle: [strategy-bets]
maturity: frontier
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 3 }
tier: B
related: [ins_tunguz-async-inference-latency-tradeoff, ins_tunguz-fde-deployment-moat]
raw_ref: ""
---

# AI inference infrastructure is fragmenting into specialized layers the way databases fragmented into OLTP, OLAP, vector, and streaming systems

## Claim
The AI inference layer is not a commodity that consolidates into one winner. It is fragmenting by use case: video, batch, local, agentic, and real-time workloads each require different optimization trade-offs, following the same structural pattern that fragmented the database market over the previous two decades.

## Mechanism
When a technology layer matures, a single general-purpose tool gets displaced by specialized variants that optimize for distinct workload characteristics. Relational databases gave way to OLTP, OLAP, vector databases, and streaming systems because each use case had irreconcilable trade-offs in cost, latency, and throughput. Inference infrastructure is at the same inflection point. A model serving real-time voice agents needs sub-50ms latency. A model running batch document processing needs cost-per-token efficiency. A model running on a mobile device needs memory footprint minimization. Tunguz identifies the emerging specialization: "video, batch, local, agentic, and real-time workloads" as the fracture lines. Companies like Sail Research are already building specialized inference routing systems for this multi-tier landscape.

## Conditions
Holds when: applications span multiple workload types with different latency, cost, and privacy requirements. The further AI embeds into diverse products, the more this fragmentation accelerates.
Fails when: a use case is narrow and monolithic enough that one general-purpose serving approach satisfies all constraints. Early-stage teams often run everything on one provider and never hit the fragmentation wall.

## Evidence
Tunguz draws the parallel directly: "Databases fragmented into OLTP, OLAP, vector databases, and streaming systems. Inference infrastructure is now specializing the same way." He cites Sail Research as an early example, describing it as serving inference "cheaply, routing it intelligently, and specializing it around use cases like video, batch, local, agentic, and real-time workloads."

## Signals
- A company's infrastructure budget splits across multiple inference providers optimized for different task types.
- Vendor selection conversations move from "which model" to "which model for which workload."
- Dedicated inference routers appear in production architectures.

## Counter-evidence
Database fragmentation took 20 years to play out. Some argue that dramatically improving general-purpose inference (e.g., via hardware advances) could consolidate the market rather than fragment it. If a single hardware/software platform can serve all workload types cost-effectively, specialization becomes unnecessary overhead.

## Cross-references
- Related to `ins_tunguz-async-inference-latency-tradeoff`: async queuing is one response to the latency-cost trade-off at the real-time/batch split.
- Related to `ins_tunguz-fde-deployment-moat`: deployment complexity increases as the inference stack fragments, strengthening the FDE moat argument.
