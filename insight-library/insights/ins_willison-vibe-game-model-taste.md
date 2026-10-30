---
id: ins_willison-vibe-game-model-taste
operator: Simon Willison
operator_role: Software developer; creator of Datasette; co-creator of Django
co_operators: []
source_url: https://simonwillison.net/2026/Oct/28/vibe-game-development/
source_type: essay
source_title: "The October inflection point for vibe game development"
source_date: 2026-10-28
captured_date: 2026-10-30
domain: [agentic-coding, game-building]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: case-study
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_willison-agentic-coding-tripled-github, ins_willison-publish-before-satisfied]
raw_ref: ""
---

# AI models can now design games that are fun to play, not just games that look like games

## Claim
October 2026 marks the inflection point where AI models shifted from producing games that look like games to producing games that are genuinely fun to play, moving the bottleneck from implementation to idea conception.

## Mechanism
Earlier models could generate working game code but lacked the judgment to make gameplay engaging. Claude Opus 5.5 acquired what Willison calls game design judgment, the ability to respond to explicit prompts for fun ("Make it a LOT more fun") and produce results that change the actual play experience rather than just the visual surface. When implementation is no longer the constraint, the constraint becomes having a novel enough concept to build in the first place.

## Conditions
Holds when: the model has enough game design taste to respond meaningfully to qualitative design direction, not just technical prompts.
Fails when: the game concept is genuinely novel or the genre is not well-represented in training data, in which case the model falls back to generic patterns regardless of taste.

## Evidence
Willison built four games as tests. Emberwick, a three.js top-down RPG, was built over several prompts and had a plot, magic system, and about fifteen minutes of story. Battle Drones, a real-time strategy game, was transformed after a single "make it more fun" prompt and later gained multiplayer, replays, and LLM-vs-LLM matches. Tree Appreciator, a spot-the-difference game, was built in one prompt with no follow-up. No project required more than four hours of direct work. Willison compared results with GPT-6 Pro on the same project and found the gameplay inferior despite similar visual fidelity.

> "Building games that play well is shockingly easy now."

> "I didn't think the models could do it."

## Signals
- A model can improve a game's fun factor when given only the prompt "Make it a LOT more fun" with no other direction.
- Playtesting feedback on an AI-built game focuses on the concept rather than on bugs or broken mechanics.
- Build time for a playable prototype drops below four hours without any specialized game development expertise.

## Counter-evidence
Willison's comparison with GPT-6 Pro was not a controlled study; it was a one-person impression on a single project. The games built were short and mechanically simple. Deep mechanics, procedural systems, and long-form game design remain untested. The comparison baseline is November 2025 for coding agents, but no equivalent controlled before/after test exists for game design specifically.

## Cross-references
- See `ins_willison-agentic-coding-tripled-github` for Willison on the broader GitHub volume signal that reflects the same agentic shift.
