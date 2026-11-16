---
id: ins_gerganov-llama-stable-api-ecosystem
operator: Georgi Gerganov
operator_role: Creator of llama.cpp, ggml, and the GGUF format; founder of ggml.ai
co_operators: []
source_url: https://huggingface.co/blog/ggml-org/llama-cpp-v1
source_type: essay
source_title: "llama.cpp v1.0.0: A stronger foundation for the local AI ecosystem"
source_date: 2026-11-13
captured_date: 2026-11-16
domain: [engineering-ai]
lifecycle: [ai-workflow-tooling]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 4, transferability: 3, source: 4 }
tier: B
related: []
raw_ref: ""
---

# Adopting semantic versioning moves llama.cpp from a fast-moving experiment to infrastructure downstream developers can build products on

## Claim
By adopting semantic versioning for llama.cpp and ggml after 3.5 years of rapid iteration, Gerganov gives downstream developers a stable API contract, making local AI inference a viable foundation for shipping products rather than a research prototype.

## Mechanism
Before semantic versioning, any llama.cpp update could silently break a downstream integration. Developers building apps on top of the library had to either follow every commit or absorb unexpected breakage. Semantic versioning makes breaking changes visible through major-version bumps: a MAJOR increment means the public C API in `./include` changed in a way that breaks existing callers; a MINOR increment means new features were added compatibly; a PATCH is a bug fix only. Downstream code can now pin a version and get security fixes without tracking nightly builds. Building on llama.cpp becomes a rational choice for a shipping product, not just a research environment.

## Conditions
Holds when: downstream developers depend on the library's C API and need to ship to end users who cannot absorb breaking updates.

Fails when: a project tracks the main branch directly for the latest model support and can absorb the churn. Research setups often do not need versioning stability because they are not deploying to external users.

## Evidence
The llama.cpp v1.0.0 release on November 13, 2026 by the ggml-org team marks the first major version for both llama.cpp and ggml. The release blog states the versioning policy explicitly:
- MAJOR: breaking changes to the public C API in `./include`
- MINOR: backward-compatible features, backend updates, model support, or API additions
- PATCH: bug fixes with no API change

The project supports over 150 architecture variants and all mainstream speculative decoding methods. Distribution includes Homebrew, conda-forge, Docker, Debian packages, MacPorts, Winget, and an XCFramework for Apple platforms. CI now runs at scale on hardware from Nvidia, AMD, Qualcomm, Arm, IBM, and Intel.

## Signals
- Third-party apps and frameworks specifying a llama.cpp version range in their dependency manifests rather than pinning to a commit hash
- Production deployments of llama.cpp-based apps citing the 1.x line as the stability reason for adopting it

## Counter-evidence
Semantic versioning signals intent but does not guarantee it. Projects have declared semver and then made undocumented behavioral changes in patch releases. The benefit depends on the team's discipline in honoring the policy. llama.cpp has historically moved fast and broken things; whether the 1.0 pledge holds through the first months of the 1.x line is unverified. The ggml-org post is a release announcement, not a commitment audit.

## Cross-references
- (none in current corpus)
