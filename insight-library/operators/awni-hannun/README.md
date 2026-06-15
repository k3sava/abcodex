---
name: Awni Hannun
slug: awni-hannun
roles:
  - Apple ML researcher and co-creator of MLX (Apple's open-source machine learning framework)
  - former researcher at Baidu Silicon Valley AI Lab (creator of Deep Speech)
domains_active: [ai-native, engineering]
captured_first: 2026-06-15
external:
  website: https://github.com/ml-explore/mlx
---

# Awni Hannun

## Bio
Awni Hannun co-created MLX, Apple's open-source array framework for machine learning on Apple Silicon. MLX exposes a NumPy-like Python API that runs natively on the Apple GPU via Metal, giving researchers and developers a way to train and run models on Mac hardware without translation layers. His earlier work at Baidu produced Deep Speech, one of the first end-to-end neural speech recognition systems. At Apple, his focus has been on making Apple Silicon's unified memory architecture useful for frontier model research. The JACCL distributed inference work, led by Angelos Katharopoulos, extends the MLX ecosystem he founded.

## Operating themes
- **Open-source ML on Apple Silicon:** MLX gives researchers a path from Python notebook to GPU-accelerated inference on Mac without a CUDA dependency.
- **Unified memory as a model hosting advantage:** Apple Silicon's unified memory means CPU and GPU share the same physical pool, which changes the memory economics of large model inference.
- **Distributed extension of on-device ML:** JACCL, built on top of MLX, is the natural next step when a single chip's memory is not enough.

## Cards
- `ins_mlx-jaccl-cluster-inference`, Linking Apple Silicon Macs over Thunderbolt 5 with JACCL achieves 3x LLM inference speed and enables trillion-parameter local inference [Tier B] (co-operator)
