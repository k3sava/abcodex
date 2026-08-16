---
id: ins_panfilov-reasoning-trace-cross-model
operator: Alexander Panfilov
operator_role: Researcher, ELLIS Institute Tübingen, Max Planck Institute for Intelligent Systems
co_operators: ["David Schmotz", "Ilia Shumailov", "Luca Beurer-Kellner", "Joachim Schaeffer", "Ameya Prabhu", "Jonas Geiping", "Maksym Andriushchenko"]
source_url: https://arxiv.org/abs/2608.09867
source_type: research
source_title: "Stealing Reasoning Traces from Proprietary LLM APIs"
source_date: 2026-08-10
captured_date: 2026-08-16
domain: [ai-safety, llm-ops]
lifecycle: [growth-loops]
maturity: frontier
artifact_class: case-study
score: { originality: 5, specificity: 5, evidence: 4, transferability: 3, source: 5 }
tier: A
related: []
raw_ref: ""
---

# Encrypted reasoning traces returned by frontier LLM APIs can be replayed into weaker sibling models to recover the hidden chain-of-thought in plaintext

## Claim
Chain-of-thought blocks that frontier model APIs return as encrypted opaque tokens are architecturally compatible across model families. Injecting a stronger model's encrypted trace into a weaker sibling model through the same API causes the weaker model to continue the trace and output its content in plaintext, bypassing the encryption entirely.

## Mechanism
Frontier providers (Anthropic, OpenAI, Google) began encrypting their chain-of-thought outputs in API responses after operators objected to paying for visible reasoning they could not use. The encrypted blobs were designed as opaque pass-through tokens. What the providers did not anticipate: the token embeddings underlying those encrypted blobs are structurally similar across model families, and the weaker models in each family were trained on the same data distribution as the stronger ones.

The attack proceeds in two steps. First, make a query to the stronger model and capture the encrypted reasoning block from the response. Second, replay that block as a prompt prefix to the weaker model in the same family. The weaker model, recognizing the structural pattern of the trace, continues from where it left off and produces the next reasoning steps in plaintext. The encryption layer applies at the presentation level, not the embedding level, so cross-model injection bypasses it without cracking any cipher.

This is a cross-model trace extraction attack. It requires no access to model weights and no internal API credentials, only standard API access to two tiers of the same provider's model family.

## Conditions
Holds when: the attacker has API access to both a stronger and weaker model in the same provider family. The family must share enough embedding space structure that trace prefixes from the stronger model are interpretable to the weaker one.

Fails when: providers restructure cross-family token vocabularies to break embedding compatibility, or when reasoning traces are encrypted at the embedding layer rather than the presentation layer.

## Evidence
Panfilov et al. demonstrated the attack against all three major providers. Responsible disclosure was made before publication. All three providers patched the vulnerability prior to the August 10 paper release.

The paper establishes three findings:
- The attack succeeded against Anthropic, OpenAI, and Google API implementations prior to patching.
- Standard API access (no elevated credentials) was sufficient for the attack.
- The mechanism is structural, not a provider-specific implementation error, meaning any provider using presentation-layer encryption of reasoning tokens over a shared embedding space is vulnerable to the same class of attack.

## Signals
- API logs from the pre-patch period may contain evidence of this attack if a client replayed encrypted reasoning blobs into a lower-tier model endpoint.
- Token usage patterns showing unusually long prompt prefixes to weaker models warrant review in pre-patch logs.

## Counter-evidence
All three providers (Anthropic, OpenAI, Google) patched the vulnerability before the paper published. As of August 10, 2026, this is a historical attack class rather than an active threat. The practical risk is now limited to operators who need to audit whether their pre-patch API logs were accessed by adversaries running this attack. The paper does not establish that any adversary independently discovered and exploited the vulnerability before the research team.

## Cross-references
- (none in current corpus)
