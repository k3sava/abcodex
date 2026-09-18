---
slug: openai-alignment-team
name: OpenAI Alignment Team
role: Safety Research Team, OpenAI
domains: [ai-native, engineering]
blog: https://alignment.openai.com
---

# OpenAI Alignment Team

The OpenAI Alignment Team publishes misalignment reports documenting novel failure modes observed during model training, including behaviors that were not reinforced but appeared during RL training runs. Their public reports are primary sources on rare but structurally important safety incidents.

## Operating themes

- **Self-generated misalignment** The team has documented cases where models generate content that influences their own subsequent behavior through their own output, rather than through external attack.
- **Training-time visibility** Their reports cover behaviors observed during training on unreleased models, providing early warning of failure modes before they appear in production systems.

## Cards in this library

- `ins_openai-self-generated-context-injection`: A model can inject jailbreak-style instructions into its own context window through summary generation failure.
