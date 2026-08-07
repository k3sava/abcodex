---
id: ins_kao-pre-delegation-context-transfer
operator: Wes Kao
operator_role: Executive communication educator; founder, Maven course on Executive Communication and Influence
co_operators: []
source_url: https://newsletter.weskao.com/p/before-you-delegate-ask-yourself
source_type: essay
source_title: "Before you delegate, ask yourself these 6 questions"
source_date: 2026-08-05
captured_date: 2026-08-07
domain: [leadership-org, pmm]
lifecycle: [process, ai-workflow]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 5, evidence: 3, transferability: 5, source: 4 }
tier: B
related: [ins_mollick-delegation-over-prompting, ins_gruhn-meat-proxy-accountability]
raw_ref: ""
---

# Delegation fails when delegators skip upfront context transfer, not when delegatees lack skill

## Claim
Most delegation failures trace to the delegator, not the recipient. Skipping explicit context transfer forces the delegatee to infer judgment criteria the delegator never shared, producing outcomes the delegator then blames on capability.

## Mechanism
The root problem is that delegators exit their own heads too fast. They know the context, history, constraints, and definition of "good enough" for a task because they built up that knowledge over time. The recipient knows none of it. When the delegator omits this context, the recipient either works from incorrect assumptions or must interrupt with questions throughout. Both paths cost more than the pre-delegation briefing would have.

Kao's six questions force the delegator to make this context explicit before the work begins:

1. What does this person know, and what is new for them?
2. Why are we doing this?
3. What do they need in order to do this task (access, assets, people)?
4. What does great look like (examples, analogies, prototypes)?
5. What is the timeline and priority level?
6. What is most likely to go wrong, and how can I prevent it?

The mechanism for question 2 is specific:

> "If the task requires judgment, which almost all beyond the very basic tasks do, you want to help them make the right call when you're not looking over their shoulder."

Question 6 is the derisking layer. Low-stakes tasks need minimal attention here. High-stakes tasks need a risk list with likelihood and impact assessments.

## Conditions
Holds when: the delegated task requires any judgment beyond mechanical execution. This covers the large majority of professional work.

Fails when: the task is purely mechanical with a single correct output (e.g., "copy this list into this spreadsheet"). Pre-briefing adds overhead without corresponding benefit for tasks with no judgment involved.

Also applies to AI delegation. Kao notes the framework works when "you want to use AI as a thought partner and you want it to give you advice that's more relevant to your situation."

## Evidence
Kao developed this checklist over "hundreds of requests" where she used it to establish shared context before delegating. The speed/scope reframe from the same piece:

> "What seems like a speed issue is often actually a scope issue, so it's not something that can be solved by simply trying to work faster."

Delegatees who appear slow are frequently working to a scope the delegator never defined. Pre-defining scope through these questions eliminates this failure mode before the work starts.

## Signals
- Recurring need to redo delegated work: usually a question-2 failure (the delegatee did not know the "why" and so could not make the right call when unexpected choices arose).
- Repeated interruptions from the delegatee during a task: usually a question-3 or question-4 failure (missing assets or missing standard for "good enough").
- Delegatee work coming back slower than expected: probably a scope failure, not a speed failure.

## Counter-evidence
The framework assumes the delegator knows the answers to these questions. On genuinely novel tasks where the delegator is also discovering what "great" looks like, the pre-briefing cannot front-load judgment that does not yet exist. In those cases, iterative check-ins replace upfront briefing.

## Cross-references
- `ins_mollick-delegation-over-prompting` names delegation clarity as the core AI agentic competency; this card provides the six-question implementation layer.
- `ins_gruhn-meat-proxy-accountability` covers the accountability floor: what the human must verify before passing AI output to others.
