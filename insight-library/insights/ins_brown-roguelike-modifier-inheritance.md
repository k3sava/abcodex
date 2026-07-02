---
id: ins_brown-roguelike-modifier-inheritance
operator: Mark Brown
operator_role: Game designer and video essayist; creator of Game Maker's Toolkit
co_operators: []
source_url: https://gmtk.substack.com/p/how-i-coded-the-perks-in-my-roguelike
source_type: essay
source_title: "How I coded the perks in my roguelike"
source_date: 2026-06-25
captured_date: 2026-07-02
domain: [engineering, game-design]
lifecycle: [process-cadence]
maturity: applied
artifact_class: case-study
score: { originality: 3, specificity: 4, evidence: 4, transferability: 4, source: 3 }
tier: B
related: []
raw_ref: ""
---

# Replacing if-statement chains with a base class and override functions lets one loop handle any number of game modifiers without touching core logic

## Claim
A game modifier system built on a base class with virtual trigger functions scales to 120+ modifiers without growing the core game loop. Adding a modifier means writing one new file; removing it means deleting that file. The if-statement chain alternative makes both operations risky and expensive.

## Mechanism
The naive approach puts all modifier logic in the core game loop: on each game event (word scored, upgrade used, level completed), the loop checks which modifiers are active and branches accordingly. Each new modifier adds at least one if-statement to the central script. At scale, this creates a long conditional chain where modifiers are tightly coupled to the game loop's implementation. Any change to an existing modifier requires editing the core loop. A ModifierClass base class with virtual trigger functions (OnWordScored, OnUpgradeUsed, etc.) inverts this. Each modifier lives in its own script and overrides only the triggers it cares about. The core loop calls each trigger function once per event; it never needs to know how many modifiers exist or what they do. Brown implemented this in his roguelike and scaled to 120+ modifiers without any changes to the core loop after the initial architecture was set.

## Conditions
Holds when: the game has many modifiers that share a common set of trigger events and that need to be added, removed, or iterated on independently. Works in any language with class inheritance or interface-based polymorphism.

Fails when: modifiers have complex interdependencies that require knowing about each other at runtime. In that case, a simple override-per-trigger model may be insufficient and a more explicit dependency or event graph is needed. Also less valuable for small modifier counts (under 10-15) where a simple if-chain is readable and the refactor cost exceeds the maintenance gain.

## Evidence
Brown describes the scaling problem from direct experience building his roguelike:

> "every time we add a modifier, this script gets longer and longer. A massive spaghetti mess of if statements."

After switching to inheritance:

> "we've gone from the script having 100 if statements in a big unwieldy chunk, to having the script just do one elegant loop."

He reached 120+ modifiers (perks) in his game using this architecture without returning to the core game loop to accommodate new ones.

## Signals
- Adding a new modifier requires touching the core game loop script.
- Removing a modifier requires finding and deleting its if-branches across multiple functions.
- QA for one modifier unintentionally catches bugs in an unrelated modifier in the same script.
- Code review for modifier changes requires understanding the full central script context.

## Counter-evidence
Inheritance-based systems carry their own costs. Deep hierarchies can make call flow harder to trace than a flat if-chain. In some engines or languages, virtual function dispatch adds overhead that matters at high modifier counts per frame. Some designers prefer composition (components on a modifier object) over inheritance because it avoids is-a relationships that can become misleading as requirements evolve. Brown's approach works well for his specific case but is not the only valid architecture.

## Cross-references
- (none in current corpus)
