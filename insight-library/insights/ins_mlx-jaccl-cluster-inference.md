---
id: ins_mlx-jaccl-cluster-inference
operator: Angelos Katharopoulos
operator_role: Apple ML researcher; core MLX maintainer and creator of JACCL
co_operators: [Awni Hannun]
source_url: https://developer.apple.com/videos/play/wwdc2026/233/
source_type: talk
source_title: "Explore distributed inference and training with MLX"
source_date: 2026-06-09
captured_date: 2026-06-15
domain: [ai-native, engineering]
lifecycle: [ai-workflow]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 5, evidence: 5, transferability: 3, source: 4 }
tier: B
related: [ins_xcode27-agent-skills-portability]
raw_ref: ""
---

# Linking Apple Silicon Macs over Thunderbolt 5 with JACCL achieves 3x LLM inference speed and enables trillion-parameter local inference

## Claim
Connecting four M3 Ultra Macs via Thunderbolt 5 with MLX and the new JACCL collective communication library achieves approximately 3x the inference throughput of a single machine for 27-billion-parameter models, and makes trillion-parameter model inference possible without cloud infrastructure.

## Mechanism
RDMA over Thunderbolt 5 lets Apple Silicon GPUs communicate across machines with near-local-memory latency. JACCL (Joint Apple Collective Communication Library) provides the collective operations (allreduce, allgather, broadcast) that distributed tensor-parallel inference requires. MLX coordinates how each machine processes a shard of the model so the full forward pass is completed in parallel. Memory capacity scales with the number of machines, not with a single chip's limit. A four-Mac cluster can hold a model in its combined unified memory that no single Mac could fit, and the RDMA path means the inter-node communication overhead is low enough that wall-clock throughput gains are real, not theoretical.

The same JACCL primitives apply to distributed training: the WWDC session reported 3x training throughput on fine-tuning workloads across a four-machine cluster.

## Conditions
Holds when: Macs are connected via Thunderbolt 5 (the bandwidth requirement is tight); all machines share the same MLX and macOS version; the model has been sharded correctly for tensor-parallel execution.
Fails when: fewer than two Macs are available, the interconnect is USB-C or an earlier Thunderbolt generation (insufficient bandwidth), or the model architecture does not support efficient tensor parallelism.

## Evidence
Demonstrated live at WWDC 2026 (Apple Developer session 233, June 9). Benchmark figures from the session:
- Qwen 3 27B on 4 Macs vs. 1 Mac: approximately 3x tokens per second.
- Kimi K2 (~1T parameters) running distributed across 4 M3 Ultras.
- Fine-tuning throughput on a 4-Mac cluster: approximately 3x compared to single-machine training.

JACCL was built by Angelos Katharopoulos; Awni Hannun (co-creator of MLX) leads the broader framework.

## Signals
- A cluster of Apple Silicon Macs connected via Thunderbolt 5 shows near-linear throughput scaling from machine 1 to machine 4.
- Models previously too large for any single Mac run without quantization on a multi-Mac cluster.
- Fine-tuning wall-clock time drops proportionally to the number of cluster nodes.

## Counter-evidence
The WWDC benchmarks are first-party Apple figures from controlled conditions. Independent reproduction may show smaller gains depending on workload. Thunderbolt 5 bandwidth (120 GB/s) is high but not infinite: extremely communication-intensive architectures may not see 3x linear scaling. The setup also assumes all Macs are M3 Ultra or later; older Apple Silicon chips have lower memory bandwidth and the gains may not hold. The trillion-parameter inference demo used 4 M3 Ultras, which is a roughly $25,000+ hardware investment.

## Cross-references
- `ins_xcode27-agent-skills-portability`: on-device agent capabilities at WWDC 2026 extend toward local model execution; JACCL cluster inference is the higher-end counterpart enabling larger models without cloud.
