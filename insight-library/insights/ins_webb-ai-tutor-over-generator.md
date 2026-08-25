---
id: ins_webb-ai-tutor-over-generator
operator: Matt Webb
operator_role: Independent software maker; creator of Galactic Compass and other iOS apps
co_operators: []
source_url: https://interconnected.org/home/2026/08/21/galactic
source_type: essay
source_title: "Galactic Compass 2: now with new augmented reality mode"
source_date: 2026-08-21
captured_date: 2026-08-25
domain: [engineering, ai-native]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: case-study
score: { originality: 3, specificity: 3, evidence: 3, transferability: 4, source: 3 }
tier: C
related: []
raw_ref: ""
---

# Using AI as an interactive tutor rather than a code generator produces durable learning that books and expert friends cannot match

## Claim
AI provides a more effective learning path for bounded technical concepts than books or expert advice because it delivers unlimited, adaptive, patient explanations calibrated to the learner's exact gap.

## Mechanism
Books deliver knowledge sequentially at a fixed depth, calibrated to a general audience. Human experts have limited time and patience, and tend to explain at their own level of fluency rather than the learner's. AI tutors sustain targeted dialogue at the learner's exact point of confusion and recalibrate after each response. The learning happens through conversation shaped by the learner, not by consumption of content shaped by someone else.

## Conditions
Holds when: The learner has a specific, bounded technical gap rather than a broad knowledge deficit. The goal is capability to apply the concept in one context, not deep mastery across many.
Fails when: The concept requires physical practice or expert critique of physical output. The learner needs validated expert judgment, not explanation. A developer who takes the generated code without the tutoring retains no debugging capacity for the approach.

## Evidence
Matt Webb, building Galactic Compass 2 for iOS, needed to implement quaternion mathematics for augmented reality rotation. He had previously failed to learn it through books and conversations with mathematician friends:

> "I didn't get it to write the code, but I got it to educate me."

> "With a patient, interactive tutor, I was able to finally do what I hadn't by reading books and asking mathematician friends — I learnt how to use quaternions just enough to make the app work."

Webb named the outcome: "Learning doesn't stop just because I outsource a bunch of thinking to AI. It pushes me to learn more."

## Signals
- You leave an AI session able to explain the concept to someone else, not just with code that works.
- The AI offers a different explanation when your first question reveals a misconception, rather than repeating the original framing.
- You now understand the failure mode of the concept, not only its happy path.

## Counter-evidence
Asking the AI to write the code instead of teaching it would have reached the same shipped result faster. Developers who skip the tutoring step build faster. The trade-off is ownership: code generated without understanding creates a shallow failure surface the developer cannot debug when the happy path breaks.

## Cross-references
- (none in current corpus matching this specific claim)
