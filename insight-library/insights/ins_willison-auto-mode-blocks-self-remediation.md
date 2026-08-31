---
id: ins_willison-auto-mode-blocks-self-remediation
operator: Simon Willison
operator_role: Creator of Datasette; co-creator of Django; prolific LLM and agentic-engineering blogger
co_operators: []
source_url: https://simonwillison.net/2026/Aug/27/breaking-claude-code-opus-5-auto-mode/
source_type: essay
source_title: "Breaking Claude Code Opus 5 Auto Mode"
source_date: 2026-08-27
captured_date: 2026-08-31
domain: [ai-native, engineering]
lifecycle: [ai-workflow-tooling, process-cadence]
maturity: frontier
artifact_class: case-study
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 5 }
tier: A
related: [ins_willison-confirmation-fatigue-agent-approval, ins_auto-mode-context-classifier, ins_willison-web-fetch-chained-exfiltration]
raw_ref: ""
---

# Auto mode can block an agent's own cleanup after it detects a compromise

## Claim
A context-based permission classifier that evaluates each tool call against the user's conversation instruction cannot distinguish between a malicious action the agent was tricked into and a remedial action the agent chose to take. It blocks both. Security researcher Johann Rehberger demonstrated this against Claude Code Opus 5 auto mode at an 80% success rate.

## Mechanism
Auto mode grants or blocks tool calls by matching each proposed action against the user's stated intent in the current conversation. The mechanism works well when the threat comes from an attacker trying to hijack the agent's tool calls: the user said "do X," the attacker tries to get the agent to "do Y," the classifier blocks Y.

The mechanism breaks when the agent itself detects a compromise mid-session and tries to respond. The user never instructed the agent to "terminate a malicious process if you find one." The classifier sees an unrecognized high-risk operation and denies it, even when that operation is the correct security response. In Rehberger's exploit, a zip archive extracted a malicious `struct.py` file that executed on any `import base64` call. Claude detected the compromise. Auto mode then blocked Claude's attempt to terminate the malicious process.

This is a "confused environment attack": the exploit does not depend on injecting malicious instructions. It depends on shaping the environment such that ordinary, authorized operations have harmful side effects.

> "this is more of a confused environment attack where the nature of the environment that the agent is exposed to results in an exploit"

The safety layer and the safety response are in direct conflict, because the safety layer models threat as external instruction, not as environmental state.

## Conditions
Holds when: auto mode is active, the agent has real code execution capability, and an attacker can arrange for extracted or fetched content to shadow standard library modules. The attack path requires convincing the agent to download and extract an archive.

Fails when: the agent operates in a fully sandboxed environment with no filesystem write access and no ability to fetch untrusted archives. Sandboxing the agent runtime makes the initial extraction step impossible.

## Evidence
Rehberger demonstrated the attack against Claude Code Opus 5 in a live environment, reporting an 80% success rate. The attack extracts a zip, which places a `struct.py` file in the working directory. Claude Code then runs code that calls `import base64`. Python's module resolution finds the local `struct.py` before the standard library version, executing the attacker's code. In several runs, Claude identified the compromise and attempted to terminate the process. Auto mode blocked the termination command.

Anthropic acknowledged the report and the attack's validity.

## Signals
- Agent session terminates unexpectedly or slows after extracting a zip archive.
- Agent attempts to call `kill` or `pkill` and gets a permission denial from auto mode.
- Agent logs a security concern but takes no corrective action because corrective action was blocked.

## Counter-evidence
Auto mode's design goal is to prevent agents from taking unintended actions, which is a real and well-documented problem. Weakening the classifier to allow self-remediation opens a different attack: an attacker could craft a scenario where the agent "detects a threat" and the remediation itself is the malicious action. The core tension is unresolvable with a purely conversation-context classifier. Sandboxing, not classifier adjustment, is the more defensible direction.

## Cross-references
- `ins_willison-confirmation-fatigue-agent-approval`: why auto mode became the default and what it was designed to prevent.
- `ins_auto-mode-context-classifier`: the architecture of the conversation-context classifier that grants or blocks each tool call.
- `ins_willison-web-fetch-chained-exfiltration`: another environment-shaped attack on Claude where the vector is link-following rather than module shadowing.
