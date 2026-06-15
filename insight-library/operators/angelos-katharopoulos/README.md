---
name: Angelos Katharopoulos
slug: angelos-katharopoulos
roles:
  - Apple ML researcher
  - core MLX maintainer and creator of JACCL (Joint Apple Collective Communication Library)
domains_active: [ai-native, engineering]
captured_first: 2026-06-15
external:
  website: https://developer.apple.com/videos/play/wwdc2026/233/
---

# Angelos Katharopoulos

## Bio
Angelos Katharopoulos is an Apple ML researcher whose primary contribution to MLX is the distributed infrastructure layer. He built JACCL, the collective communication library that enables Apple Silicon Macs to run LLM inference and training across a cluster connected by Thunderbolt 5. His WWDC 2026 session demonstrated that four M3 Ultra Macs running JACCL achieve approximately 3x the inference throughput of a single machine for 27-billion-parameter models and can run trillion-parameter models that no individual Mac can hold in memory.

## Operating themes
- **Distributed inference on consumer hardware:** Connecting Apple Silicon Macs via Thunderbolt 5 with JACCL makes memory capacity scale with the cluster, not the chip.
- **Collective communication primitives:** JACCL provides allreduce, allgather, and broadcast operations that are the backbone of any tensor-parallel workload.
- **MLX ecosystem infrastructure:** Katharopoulos's work sits at the intersection of the MLX Python API and the low-level metal kernel layer that makes the cluster communication fast.

## Cards
- `ins_mlx-jaccl-cluster-inference`, Linking Apple Silicon Macs over Thunderbolt 5 with JACCL achieves 3x LLM inference speed and enables trillion-parameter local inference [Tier B]
