---
id: ins_gerganov-decision-models-llamacpp
operator: Georgi Gerganov
operator_role: Creator of llama.cpp, ggml, and the GGUF format
co_operators: []
source_url: https://huggingface.co/blog/ggml-org/decision-models-in-llamacpp
source_type: post
source_title: "Decision Models in llama.cpp"
source_date: 2026-10-02
captured_date: 2026-10-13
domain: [on-device-ai, agent-frameworks]
lifecycle: [ai-workflow]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 5, evidence: 3, transferability: 4, source: 4 }
tier: B
related: []
raw_ref: ""
---

# Decision models score supplied options in a single forward pass and return probabilities, not generated text

## Claim
A decision model reads the input once and returns a calibrated probability for each option you supply, without generating any text. The answer is always one of your options.

## Mechanism
A chat model generates output one token at a time. Each token extends the sequence, parsing is required to extract a structured answer, and the output can produce values outside the option set you intended. A decision model works differently: it reads the full input in a single forward pass and computes a probability distribution directly over the supplied options. Nothing is generated. The output is the option with the highest probability, plus the confidence for each candidate.

The ggml-org team implemented this as a new `/v1/systemone` endpoint in llama.cpp's server. Three question types are supported. `choice` picks one option from a supplied list. `score` takes 2 to 10 ordered levels and returns an expected value that can fall between two levels. `noul` answers a yes/no question and returns the probability of yes. The absence of text generation removes the parsing step and eliminates output variation across identical queries.

Six decision models were released with the October 2 post: Julia-1 (144M parameters, Apache 2.0 license, 3ms median latency), Laya (421M, Apache, 5ms), Kev-4B (4B, Apache, 12ms), lev (4B, Apache, 36ms), OpenJev (27B, CC BY-NC, 43ms, multilingual and image support), and Clef (27B, Apache, multimodal). Latencies are measured on a single NVIDIA RTX PRO 6000.

Typical use cases named by the ggml-org team: request routing (classify an incoming ticket or API call to the right handler), content moderation (assess whether a message violates a policy), and agent step checking (validate or select the next action in a pipeline).

## Conditions
Holds when: the task can be framed as selecting from a fixed option set you define in advance; calibrated probabilities on each option carry meaning (routing confidence, moderation thresholds, step selection); latency is a constraint and text generation overhead would matter.

Fails when: the task requires open-ended text generation; the option set cannot be defined in advance; the question type does not fit choice, score, or yes/no frames; accuracy requirements exceed what the smaller models (144M, 421M) can deliver on the specific domain.

## Evidence
The ggml-org team's October 2 Hugging Face post documents six models from 144M to 27B parameters. A routing example shows Julia-1 assigning an unambiguous ticket to `shipping` with a 0.99 confidence and a vague ticket at 0.25 confidence. The same vague ticket scores 0.80 with Kev-4B (4B parameters). The post is an official release from Gerganov's organization, not a third-party benchmark.

No systematic comparison against prompt-engineering approaches to the same classification tasks is included. The post presents single-case examples rather than measured accuracy across a test set.

## Signals
- Routing logic uses decision model probabilities to select handlers, with a confidence threshold for fallback
- Agent pipelines replace prompt-and-parse step-selection with a decision model call
- Content moderation gates use calibrated `noul` probabilities rather than parsing a yes/no from generated text
- Latency-sensitive applications select the smallest model (Julia-1 at 3ms) for high-volume simple decisions

## Counter-evidence
The accuracy figures in the post come from single illustrative examples, not controlled benchmarks. No comparison against a well-prompted chat model doing the same classification task is provided. The latency figures are from a single GPU (NVIDIA RTX PRO 6000) with no CPU, Apple Silicon, or multi-device comparisons shown. Models larger than 4B (lev, OpenJev, Clef) have latencies of 36-43ms, which narrows the latency advantage for larger-model use cases. The CC BY-NC license on OpenJev restricts commercial use.

## Cross-references
- `ins_ronacher-codemode-harness-bash-limit`: decision models fit naturally as harness-side classification calls, routing agent work without consuming the context window
- `ins_lynch-agent-layer-bottleneck`: Lynch describes agents running parallelizable decisions serially; decision models address this at the classification layer by removing generation and parsing overhead
