---
id: ins_willison-game-loop-agent-limit
operator: Simon Willison
operator_role: Independent developer, co-creator of Django, creator of Datasette; technology journalist and blogger at simonwillison.net
co_operators: []
source_url: https://simonwillison.net/2026/Sep/27/2026-in-llms-so-far/
source_type: essay
source_title: "2026 in LLMs (so far)"
source_date: 2026-09-27
captured_date: 2026-09-30
domain: [engineering-ai-eng, agentic-coding]
lifecycle: [ai-workflow, strategy]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 3, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_willison-engineering-core-is-direction, ins_willison-agents-complexity-shift]
raw_ref: ""
---

# Agents can build functional game interfaces but cannot independently engineer engaging gameplay loops, because fun is a subjective judgment that no specification can substitute for.

## Claim
Coding agents produce game-like interfaces from prompts. They cannot produce games that feel engaging to play. The gap is not a code-generation failure; it is a feedback loop failure. Fun is not verifiable against a specification.

## Mechanism
A coding agent evaluates its output against stated criteria: does the code run, does the UI render, does the button respond. These are verifiable. Gameplay quality is not verifiable by the same means. A game loop that is "correct" by specification can feel tedious, punishing, or empty in play. Discovering that requires a human player cycling through the loop, noticing the feeling, and translating it back into design changes. That feedback cycle is human. The agent can execute changes once the human has named them. It cannot initiate the discovery that something needs changing because it lacks access to the player's subjective experience. Willison observes this after surveying the game-like interfaces agents produce in 2026: the structural outputs are present; the play experience is absent.

## Conditions
Holds when: the quality criterion for the work is a subjective human experience (fun, tension, pacing, narrative cohesion, aesthetic feel) rather than a verifiable state.

Fails when: the task is a well-defined game mechanic that can be fully specified (e.g., "implement the ruleset for chess" or "build a match-three grid"), where correctness is objective and verification is achievable without human play.

## Evidence
Willison notes in his September 27, 2026 year-in-review that agents have proved able to build game-like interfaces but cannot create engaging gameplay loops or sustained fun. The observation surfaces as a consistent finding across his 2026 building experiments with frontier models.

## Signals
- Agent-built game prototypes pass functional tests but receive flat engagement from playtesters in early sessions.
- Human design iteration on an agent-built game produces the first "aha moment," not the agent's own iteration.
- Time spent on game design direction by a human is roughly constant regardless of how fast the agent implements changes.

## Counter-evidence
The boundary between "functional game interface" and "engaging game" is not fixed. As agents improve at interpreting informal feedback ("this feels too slow") and as human-agent play-test loops become faster, the effective distance between agent capability and game quality may shrink. Some procedurally generated games have created emergent fun without explicit human design of each loop element. The claim is strongest at the current capability level and may erode as feedback channel quality improves.

## Cross-references
- `ins_willison-engineering-core-is-direction`: Willison's general claim that directing agents requires judgment about goal clarity; game design is an acute instance where goal clarity is structurally difficult to achieve.
- `ins_willison-agents-complexity-shift`: the difficulty floor rises when agents handle the mechanical work; game loop design is the hardest residual category.
