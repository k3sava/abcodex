---
id: ins_willison-sensory-channel-coding-agent
operator: Simon Willison
operator_role: Creator of Datasette; co-creator of Django
co_operators: []
source_url: https://simonwillison.net/2026/Nov/9/mysterious-beeps/
source_type: essay
source_title: "Locating the source of a mysterious beep with Claude"
source_date: 2026-11-09
captured_date: 2026-11-10
domain: [agentic-coding, engineering]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: case-study
score: { originality: 4, specificity: 4, evidence: 4, transferability: 3, source: 4 }
tier: B
related: [ins_willison-fable-relentlessly-proactive, ins_willison-blender-headless-agent-loop]
raw_ref: ""
---

# Coding agents can be extended with novel sensory channels through browser APIs and local servers, enabling physical-world debugging without direct hardware access

## Claim
A coding agent that cannot natively perceive audio can still triangulate a physical sound source by building and iterating on browser-based microphone listeners, coordinated through a local server it also writes.

## Mechanism
Claude has no native audio input, but it can run JavaScript and Python that capture and analyze microphone data from any browser-capable device. The pattern has three layers: browser listeners (phones, tablets, laptops) that use the WebAudio API to record and detect events; a Python coordination server that the agent writes and can update without restarting; and a hot-swap mechanism that lets Claude push new JavaScript to each listener over WebSocket, so it can iterate on its sensing logic without manual interaction with each device. The agent reasons about the physical world through the data stream it built. Capability scales with what the agent can instrument, not with what hardware the model natively supports. Willison calls this pattern "giving Claude Code ears."

## Conditions
Holds when: devices with browsers and microphone access are available on the same network; the agent has permission to open ports and run servers; the target signal is detectable by the available devices.
Fails when: network isolation prevents the coordination server from reaching the listeners; the target signal requires a hardware sensor that cannot be approximated by a browser API; or the ambient noise floor makes beep detection unreliable.

## Evidence
Willison gave Claude Code the task of finding an intermittent mystery beep in his home. The agent built a triangulation system using BeepBeep-style acoustic ranging, coordinating multiple devices as microphones. The system located the beep source to within about 40 cm, which led Willison to an old carbon monoxide detector needing new batteries.

> "I think the most interesting part of this project is that I demonstrated it's possible to give Claude Code ears."

> "It gave me the position of the beep to within about 40cm."

The hot-swap mechanism meant the agent could deploy updated JavaScript to all listeners without manual intervention: "we could deploy new code without having to manually interact with each of the listening devices."

## Signals
- The agent produces a working browser-based sensing prototype in a single session without handholding.
- Iteration on the detection algorithm happens within the same session via WebSocket updates.
- The final system works on consumer hardware with no custom drivers or native code.

## Counter-evidence
This is a one-off case study on a single task with favorable conditions (stationary beep, known network, cooperative devices). Willison does not test the limits of the approach. The technique requires the agent to be comfortable with multi-process coordination; a weaker model or a less capable agent loop may fail to produce working coordination code. The 40 cm accuracy relied on acoustic conditions Willison could control; a noisier environment might degrade precision significantly.

## Cross-references
- `ins_willison-fable-relentlessly-proactive`: the same breadth-first technique deployment that solves hard problems also applies when the problem is perceptual, not just computational.
- `ins_willison-blender-headless-agent-loop`: the same pattern of building a novel agent loop for a non-text domain.
