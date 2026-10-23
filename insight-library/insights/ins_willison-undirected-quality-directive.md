---
id: ins_willison-undirected-quality-directive
operator: Simon Willison
operator_role: Independent developer; co-creator of Django; creator of Datasette; blogger at simonwillison.net
co_operators: []
source_url: https://simonwillison.net/2026/Oct/20/battledrones/
source_type: essay
source_title: "Battle Drones: a vibe coded RTS with audio-based multiplayer"
source_date: 2026-10-20
captured_date: 2026-10-23
domain: [agentic-coding, engineering-ai-eng]
lifecycle: [ai-workflow]
maturity: frontier
artifact_class: case-study
score: { originality: 4, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_willison-game-loop-agent-limit]
raw_ref: ""
---

# Asking a coding agent to "Make it a LOT more fun" produced better game-feel results than specific feature requests because it gave the AI latitude to discover root causes through autonomous simulation

## Claim
A single undirected quality directive produced more impactful improvements to a vibe-coded game than any specific feature request, because it allowed the agent to run internal simulations to discover root causes rather than executing prescribed solutions.

## Mechanism
Specific feature prompts constrain the solution space to the diagnosis the developer has already made. The agent adds or fixes the named feature while the underlying quality deficit persists. Undirected quality directives leave the solution space open. The agent must identify what makes the experience poor before it can improve it, and does so by generating feedback through simulation: in this case, 1,000 AI-vs-AI playtests that measured completion rates, comeback wins, and game balance across unit types. The quality gain is larger because the agent works on causes, not symptoms.

## Conditions
Holds when: the agent has a feedback mechanism (simulated tests, benchmarks, AI-vs-AI runs) to evaluate whether changes improved quality.
Fails when: there is no feedback mechanism; without a way to measure quality, a vague directive produces arbitrary changes with no signal on whether they helped.

## Evidence
Willison used the single prompt "Make it a LOT more fun" to initiate version 4 of Battle Drones. Claude then ran over 1,000 AI-vs-AI simulated playtests and redesigned multiple game systems. Claude's release notes for v4 showed: games undecided after 25 minutes fell from 14% to 0.9%; comeback wins rose from 24% to 46%. The prompt produced openers, call-down powers, objectives, survival modes, a campaign, mutators, and progression in one pass. Willison writes he still cannot get over how well the prompt worked, calling it embarrassing to admit was that simple.

## Signals
- An undirected quality prompt produces multi-dimensional feature additions rather than single-feature patches
- Measurable quality metrics (completion rates, win distribution) improve without the developer specifying what to fix
- Agent release notes reference simulation or benchmark results rather than a feature checklist

## Counter-evidence
The technique worked here because the game engine already had a simulation harness (AI-vs-AI matches). Projects without a built-in feedback mechanism cannot replicate this outcome with a vague directive alone. The prompt is necessary but not sufficient.

## Cross-references
- ins_willison-game-loop-agent-limit: earlier finding that agents cannot produce fun games because fun requires a subjective human feedback loop. This case updates that: AI-vs-AI simulated playtesting can substitute for some of that human feedback when the quality metric is measurable (completion rates, balance statistics).
