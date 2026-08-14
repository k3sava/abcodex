---
id: ins_willison-confirmation-fatigue-agent-approval
operator: Simon Willison
operator_role: Co-creator of Django; creator of Datasette; prolific open-source developer
co_operators: []
source_url: https://simonwillison.net/2026/Aug/8/auto-mode/
source_type: essay
source_title: "Auto mode is now the default in Claude Code"
source_date: 2026-08-08
captured_date: 2026-08-14
domain: [agentic-coding, security]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: case-study
score: { originality: 3, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_willison-reliability-erodes-review-discipline, ins_auto-mode-context-classifier]
raw_ref: ""
---

# Repetitive per-action approval causes humans to approve harmful agent commands at far higher rates than automated classifiers block them

## Claim
Asking developers to click through per-action approvals during agentic coding sessions does not produce safe behavior; confirmation fatigue causes them to approve harmful actions at roughly six times the rate that an automated safety classifier blocks the same actions.

## Mechanism
Each approval prompt asks the developer to evaluate a proposed agent action. Early in a session the evaluation is genuine. As the session continues and the vast majority of actions prove benign, the cognitive cost of evaluating each prompt exceeds the perceived risk. Developers shift to automatic approval. The safety mechanism that was designed to catch dangerous exceptions is disabled by the repetition required to make it function. Automated classifiers do not fatigue; they evaluate each action against the conversation context at the same level of scrutiny regardless of prior session length.

## Conditions
Holds when: developers are working in long agentic sessions with many low-stakes actions before a harmful action is embedded. Applies to any human-in-the-loop approval gate that requires repeated decisions in the same session.

Fails when: the harmful action is the very first or second prompt, before fatigue sets in. Also fails when developers are primed to look for a specific harmful action and are actively monitoring.

## Evidence
Anthropic ran a controlled study with 1,053 paid developers. A harmful action was embedded mid-session. Only 13.6% of human testers refused it. Claude Code's automated safety classifier blocked 89% of the same harmful actions.

Willison's commentary on the finding:

> "Confirmation fatigue is real, and asking humans to click 'OK' every few steps is clearly not going to result in safe behavior."

> "I absolutely buy that auto mode is a better solution than asking humans to constantly approve actions."

He also expresses ongoing skepticism about prompt injection resilience, noting that he would "dearly like to be proved wrong by the end of this year" on security failures in agentic systems.

## Signals
- Session logs show human approval rates above 95% for mid-session action prompts even when a known-harmful action is included.
- Developers report not reading individual prompts after the first few minutes of a session.
- Error rates in agentic workflows are concentrated later in sessions, not at session start.

## Counter-evidence
Willison notes Anthropic's claim that none of 720 prompt injection attack attempts succeeded in a third-party evaluation. He requests more independent confirmation, questioning whether the evaluation covered sophisticated attacks (such as malicious package instructions that appear legitimate). The 11% failure rate of auto mode is not negligible; edge cases where the classifier is fooled remain a real concern.

## Cross-references
- `ins_willison-reliability-erodes-review-discipline`: the complementary dynamic over longer time horizons where reliability confidence reduces review vigilance.
- `ins_auto-mode-context-classifier`: the technical architecture that replaces human approval with a conversation-context classifier.
