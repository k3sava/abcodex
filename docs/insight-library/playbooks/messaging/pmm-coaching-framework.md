---
id: pb_pmm-coaching-framework
title: Coach PMM work through iterative review that retains feedback
maintained_by: codex maintainers
captured_date: 2026-05-01
depth: full
domain: [messaging, copywriting, pmm]
uses_cards: [ins_evals-are-data-analysis-on-llm-apps, ins_kevin-indig-verification-cost-rising, ins_judgment-doesnt-compress, ins_pierri-ai-positioning-needs-human-checkpoints, ins_pierri-batch-transcripts-produce-fabrications, ins_schafer-three-pass-writing-process, ins_schafer-uncomfortable-honesty, ins_shleyner-conciseness-as-respect, ins_handley-self-laughter-as-quality-kpi, ins_so-what-as-content-diagnostic, ins_nicolas-cole-voc-mirroring-beats-paraphrase, ins_ashley-herbert-popa-build-skill-frameworks-for-pmm-levels, ins_shruti-vashi-pmm-must-balance-strategy-and-execution, ins_ai-exposes-execution-only-pmms, ins_20-percent-rule-headline, ins_sourav-mohanty-ai-frame-determines-insight-quality]
uses_patterns: [pat_eval-as-data-analysis, pat_verification-as-human-job, pat_copywriting-craft-fundamentals, pat_execution-cheap-judgement-scarce, pat_make-implicit-explicit, pat_decision-quality-through-process-not-willpower]
originating_operators: [hamel-husain, kevin-indig, anthony-pierri, cole-schafer, eddie-shleyner, ann-handley, nicolas-cole, ashley-herbert-popa, shruti-vashi, sachin-jha, sourav-mohanty]
---

# Coach PMM work through iterative review that retains feedback

A coaching system for product marketing work that scores a document, picks the three fixes that change the outcome most, and tracks whether the next version actually applied them. Quality bar: across five-plus reviews, more than 60% of prior feedback shows up in the next draft. If retention sits below that, the coaching is the problem, not the PMM. The framework works for any customer-facing PMM content: messaging docs, positioning, copy, launch briefs, blogs, case studies, emails, landing pages.

Two things make this hard now. AI drafts the artifact in minutes, so the bottleneck moves from producing the work to judging it. `ins_kevin-indig-verification-cost-rising` Execution got cheap. The call about which fix matters most did not. `ins_judgment-doesnt-compress` So the coach's job is not to grade everything. It is to verify the few things that decide whether the artifact lands.

## When to use

- A PMM hands you a draft and asks "is this good?" and you want a repeatable answer, not a vibe.
- You run a team and want each PMM to grow on the dimensions their level actually demands.
- The same feedback keeps recurring across drafts and you suspect it is not being absorbed.
- AI is producing more drafts than your team can reliably review, and quality is slipping.
- You are onboarding a new PMM and need a shared definition of what "good" looks like.

## How to use

### 1. Set the frame before you read a word of the draft.

Open every review by writing down four things: who the PMM is, what document type this is, which campaign and iteration number, and the prior review's Focus 3. A campaign is one project across many drafts. An iteration is one comparison of version N to version N+1. The frame is not bureaucracy. It is the filter that decides what you even notice in the draft.

This matters because the same artifact reads differently depending on the question you bring to it. `ins_sourav-mohanty-ai-frame-determines-insight-quality` A launch brief read as "is the narrative right" surfaces different gaps than the same brief read as "is the copy tight." Name the decision this review has to inform before you start. Otherwise you summarize the draft instead of judging it, and a summary is not a coaching answer. `pat_make-implicit-explicit`

If you use an AI to help score, the frame is doubly load-bearing. Run it on one document with a clear job, not a batch of drafts with a generic "review this" prompt. Batch prompts average across inputs and start filling gaps with plausible-sounding feedback that traces to nothing. `ins_pierri-batch-transcripts-produce-fabrications`

### 2. Decide which dimensions apply to this document type, then score only those.

The rubric has 17 core dimensions scored on every document and 12 contextual dimensions scored only when the document type calls for them. Scoring a contextual dimension that does not apply is as much an error as skipping one that does.

Typical totals by document type:

| Document type | Dimensions scored |
|---------------|-------------------|
| Positioning | 22 |
| Case study | 22 |
| Messaging doc | 23 |
| Launch brief | 23 |
| Blog | 24 |
| Email | 24 |
| Copy | 24 |
| Landing page | 27 |

The split between strategy dimensions and craft dimensions is the one that drives the coaching. A PMM has to do both: turn messy product capability into a clear narrative, and write the launch notes and battlecards that sales actually uses. `ins_shruti-vashi-pmm-must-balance-strategy-and-execution` The score has to read both halves separately so you know which one to coach.

### 3. Score both versions. The improvement delta matters as much as the absolute number.

Score version N and version N+1 on the applicable dimensions. The overall score is the sum of scored final dimension scores, divided by the number of dimensions scored, times 10, on a 0 to 100 scale. The number itself is less useful than the movement between drafts.

Hold the scale honestly. A 5 is average, not bad. Most competent PMM work lands 5 to 7. Reserve 8-plus for strong work and 9 to 10 for exceptional. Grade the document, not the person: the same rubric applies regardless of seniority. The most common scoring failure is inflation, where most work scores 8-plus and the signal disappears. `pat_decision-quality-through-process-not-willpower`

Every score cites specific text from the draft. A score without cited evidence is an opinion, and the PMM cannot act on an opinion. This is the same discipline an eval engineer applies to model output: you read the actual trace and name the actual failure, you do not grade against your assumption of what could go wrong. `ins_evals-are-data-analysis-on-llm-apps` `pat_eval-as-data-analysis`

> "It really doesn't have to be scary or unapproachable. It really is, at its core, data analytics on your LLM application."
> · Hamel Husain & Shreya Shankar, Lenny's Podcast, 2026-04-28
> `ins_evals-are-data-analysis-on-llm-apps`

### 4. Run the feedback-retention check on every iteration past the first.

For each item in the prior review's Focus 3, mark whether the next draft addressed it: Yes, Partial, or No. Calculate the retention rate. The target is above 60% across five-plus iteration-2-and-later reviews. This is the primary metric of the whole framework, because feedback that is not applied is feedback that was not useful.

When retention drops below 60%, investigate before you adjust the feedback itself. Ask three questions: Is the feedback unclear? Is the framing wrong? Is the PMM overloaded? The fix is usually to the coaching approach, not the content of the note. Coaching that gets ignored is coaching that failed to land, and changing the words without changing the delivery repeats the failure.

This is the verification loop that makes the system learn instead of just logging reviews. A trace of what you said tells you what happened, not whether it worked. Retention is the feedback signal bound to the trace. `pat_verification-as-human-job`

### 5. Select Focus 3 using effort against impact, and bias the choice to the PMM's level.

Three actions per review. Not ten. Pick them on an effort-by-impact basis: prioritize high-impact, low-effort fixes first, and include at most one high-effort item per review. Ten recommendations is overload, and overload is the fastest way to kill retention. Three is the limit because three is what a person can hold and apply in one revision.

Selection rules that override raw scores:

- Do not prioritize craft over strategy if strategy scores below 5. A perfectly worded sentence built on the wrong frame is still wrong.
- Align at least one action with the PMM's active improvement tracks, if any exist.
- Check whether the prior Focus 3 was addressed before repeating an item.
- Consider pattern history across campaigns, not just this one document.
- Bias toward strategy for new PMMs, craft for experienced ones.

The level bias works because what "good" means changes by seniority. A skill framework that defines the expected skillset at junior, mid, and senior levels lets each PMM self-assess and lets the coach target growth where the level demands it. `ins_ashley-herbert-popa-build-skill-frameworks-for-pmm-levels` Coach the dimension that moves that PMM up, not the dimension that is easiest to score.

### 6. Write each Focus-3 item with cited evidence and a rewrite example.

A Focus-3 item without a rewrite example tells the PMM what is wrong but not what good looks like, and "fix this" is not coaching. Use the three-line format on every item:

| Field | What it contains |
|-------|------------------|
| Their line | The exact text from the draft, quoted. |
| Could become | A concrete rewrite the PMM can use or adapt. |
| Why this works | The principle, tied to the dimension and the buyer. |

Tag each item with an effort level so the PMM can plan the revision: Quick Win (15 to 30 minutes), Medium Lift, or Deeper Work (1 to 2 hours).

When the fix is a craft fix, name the craft principle so the lesson transfers to the next draft. Conciseness is one the rewrite can demonstrate directly: every word that does not earn its place signals that the writer values their own message over the reader's time. `ins_shleyner-conciseness-as-respect`

> "Conciseness is respect. Every unnecessary word signals that you value your message more than the reader's time."
> · Eddie Shleyner, VeryGoodCopy, 2024-02-01
> `ins_shleyner-conciseness-as-respect`

For copy and content dimensions, the rewrite examples cluster around a few reinforcing fundamentals: reader-centredness, emotion as the persuasion mechanism, voice, clarity in the headline, and subtraction. `pat_copywriting-craft-fundamentals` Coach against those, not against your personal taste.

### 7. Separate strategy coaching from craft coaching, and never swap them.

The single most common coaching error is fixing the wrong layer: polishing craft when the strategy is broken, or rewriting the strategy when the craft is fine. The rubric split exists to prevent exactly this. Read the strategy score first. If the frame, the audience, or the differentiator is wrong, no amount of word-level editing saves the document.

For copy-level fixes, a few operator tests do reliable diagnostic work and travel well as rewrite rationale:

- The so-what test catches inside-out claims. Most content answers the company's question instead of the reader's, and that is the most-skipped move in content creation. `ins_so-what-as-content-diagnostic`

> "Most marketing content answers the company's question ('What do we want to say?') rather than the reader's question ('Why should I care?'). She treats this as the single most skipped step in content creation across B2B and B2C organizations."
> · Ann Handley, Ann Handley — Writing GPS and the 'So What?' step, 2026-03-03
> `ins_so-what-as-content-diagnostic`

- The face test catches manipulation. If the PMM would not say the line to the buyer in person without flinching, it has crossed from candor into manipulation. `ins_schafer-uncomfortable-honesty`

> "The test: would you say this to the reader's face, in person, without flinching? If not, it is manipulation."
> · Cole Schafer, Sticky Notes — The Honesty Test, 2024-01-15
> `ins_schafer-uncomfortable-honesty`

- The headline is where most of the persuasive weight sits, because most readers never get past it. If the draft buried its strongest line in paragraph three, that is a Focus-3 item on its own. `ins_20-percent-rule-headline`

When you are coaching voice and resonance, the rewrite should mirror the buyer's own words rather than smooth them into a clean theme. The exact phrase is the hook; the paraphrase is just a description, and descriptions do not convert. `ins_nicolas-cole-voc-mirroring-beats-paraphrase`

> "Resonance comes from mirroring, not paraphrase."
> · Nicolas Cole, Build and Launch a VOC Landing Page, 2026-05-07
> `ins_nicolas-cole-voc-mirroring-beats-paraphrase`

### 8. Add a "Parked for Later" section so the unaddressed dimensions are visible, not dropped.

List 2 to 3 dimensions you saw but did not prioritize this round. Parking is not the same as ignoring. The PMM sees the full picture, knows what is coming next, and trusts that you read the whole draft. It also protects retention: if you raised ten issues and only tracked three, the other seven leak away. Parked items become Focus-3 candidates in a later iteration once the top three are landing.

### 9. Maintain pattern history across campaigns and flag persistent gaps.

Track each PMM's recurring issues across campaigns, not just within one document. When the same dimension scores low across three iterations, that is a persistent gap, and a persistent gap is a different conversation than a one-off miss. Flag it explicitly. The pattern history is what lets you tell the difference between a PMM who made a single slip and one who has a structural blind spot the coaching has not reached yet.

### 10. Decide where AI helps and where a human has to verify.

AI can draft the rewrite examples, summarize the draft, and pre-score dimensions. It cannot decide which three fixes matter most for this PMM at this level on this document. That is the judgment layer, and it does not compress. `ins_judgment-doesnt-compress`

> "Judgment is the part that doesn't compress."
> · Kevin Indig, Growth Memo, 2026-05-04
> `ins_judgment-doesnt-compress`

Wherever AI touches the review, add a human checkpoint at each stage. Models fill gaps with plausible-sounding output when the context is thin, so a generated score or a generated rewrite has to be verified against the actual draft text before it reaches the PMM. `ins_pierri-ai-positioning-needs-human-checkpoints`

> "AI needs A LOT of help to do a good job (way more than the average person realizes)."
> · Anthony Pierri, AI needs A LOT of help to do a good job, 2026-05-10
> `ins_pierri-ai-positioning-needs-human-checkpoints`

This is also why the coaching role survives the cheap-execution shift. When AI does the launch emails and the slide tweaks, the PMM who only did execution is exposed, and the durable value is the judgment about which angle and which narrative to commit to. `ins_ai-exposes-execution-only-pmms` The coach is teaching that judgment, one Focus 3 at a time.

> "When execution becomes easy, thinking becomes the differentiator. When content is everywhere, clarity becomes the advantage."
> · Sachin Jha, LinkedIn, 2026-04-10
> `ins_ai-exposes-execution-only-pmms`

## Check your work

- The frame is written down before the draft is read: PMM, document type, campaign, iteration, prior Focus 3.
- Only applicable dimensions are scored. Contextual dimensions that do not apply are skipped, not zeroed.
- Every score cites specific text from the draft.
- The 5-is-average scale is held. Most scores land 5 to 7, not 8-plus.
- Retention is checked on every iteration past the first, with a calculated rate.
- Focus 3 is exactly three items, at most one of them high-effort.
- Strategy is not coached over craft when strategy scores below 5.
- Every Focus-3 item has a rewrite example in the Their line / Could become / Why this works format.
- A Parked-for-Later list of 2 to 3 dimensions exists.
- Pattern history is updated and persistent gaps are flagged.
- Any AI-generated score or rewrite was verified against the source text by a human before delivery.

## What goes wrong

- **Inflated scores.** When most work scores 8-plus, the signal is lost and the PMM cannot tell strong from average. Hold 5 as the average. `pat_decision-quality-through-process-not-willpower`
- **Feedback without rewrite examples.** The PMM learns what is wrong but not what good looks like, so the next draft repeats the miss. Every Focus-3 item gets a Could become line.
- **Ten recommendations per review.** Overload kills retention. Three is the limit because three is what fits in one revision.
- **No retention tracking.** Without the iteration-2 check, the same feedback recurs forever and the coaching never compounds. `pat_verification-as-human-job`
- **Coaching the wrong layer.** Polishing craft when strategy is broken, or rewriting strategy when craft is fine. Read the strategy score first.
- **Reviewing the person, not the document.** Same rubric regardless of seniority. The bias belongs in Focus-3 selection, not in the scores.
- **Skipping or misapplying contextual dimensions.** Scoring a dimension the document type does not call for is as wrong as skipping one it does.
- **Batch-reviewing drafts with a generic prompt.** AI run across many drafts without a per-document frame fills gaps with fabricated feedback that traces to nothing. `ins_pierri-batch-transcripts-produce-fabrications`
- **Trusting AI scores without verification.** Generated scores read plausible and can be wrong. Verify against the draft text before delivery. `pat_execution-cheap-judgement-scarce`

## What you get

1. Per-iteration review with all applicable dimension scores plus cited evidence for each.
2. Improvement delta between version N and version N+1.
3. Focus 3: three prioritized actions, each with a rewrite example and an effort level.
4. Parked-for-Later list of 2 to 3 deferred dimensions.
5. Feedback-retention rate, tracked across iterations against the 60% target.
6. Pattern history per PMM across campaigns, with persistent gaps flagged.
7. A level-aware growth view: which dimensions to coach next for this PMM at this level.
