---
id: pb_measurement-framework
title: PMM measurement framework
maintained_by: codex maintainers
captured_date: 2026-05-01
depth: full
domain: [measurement, pmm, gtm]
uses_cards: [ins_absolute-counts-over-conversion-rates, ins_long-term-holdouts-30-40-evaporate, ins_no-such-thing-as-long-feedback-loop, ins_experimentation-paralysis, ins_competency-analytics-over-activity-dashboards, ins_pete-caputa-referral-attribution-gap, ins_fishkin-natividad-measurement-reframe-not-clicks, ins_aeo-citation-rotation-makes-snapshots-worthless, ins_roi-evidence-most-trusted-by-b2b-buyers, ins_anonymous-benchmark-rescues-roi-evidence, ins_customer-revenue-not-yours, ins_mark-kosoglow-adoption-vs-value, ins_andrew-jones-data-trustworthiness-over-output-metrics, ins_start-with-support-fastest-ai-roi, ins_skok-sales-rep-failure-rate]
uses_patterns: [pat_measurement-correlated-short-signals, pat_diagnose-before-execute, pat_frontline-as-pmm-substrate, pat_market-and-offer-beat-funnel-optimisation, pat_verification-as-human-job]
uses_contradictions: [con_short-feedback-vs-long-term-holdouts]
originating_operators: [archie-abrams, elena-verna, annie-duke, chris-orlob, pete-caputa, rand-fishkin, aleyda-solis, jason-oakley, shruti-kapoor, mark-kosoglow]
---

# PMM measurement framework

A measurement system is good when it changes what the team does next quarter. The test is not how many dashboards you ship. The test is whether a number on one of them moved a decision: where to spend, what to cut, which bet to double. Most PMM measurement fails this test because it tracks motion, optimizes the wrong ratio, and waits a year to learn what a week could have told it.

This playbook builds a measurement blueprint sized to the team's data maturity. It is a 10-step pipeline from a current-state audit to a living review loop. The slow, load-bearing part is choosing which few metrics to trust. The cheap part is the dashboard. Get the choice wrong and the dashboard just makes the wrong call faster.

## When to use

- Pre-OKR season, before goals get locked for the quarter or the year
- After a reorg, when ownership of numbers is unclear and reporting is fragmented
- When PMM and sales pipeline numbers do not reconcile in the same forum
- When the team runs many dashboards and has no shared source of truth
- When a leadership review keeps asking "what did marketing actually move" and nobody has a clean answer

## How to use

### 1. Audit the current state. Inventory sources before you design anything.

List every data source, tracking tool, and report the team already produces. For each one, write down who owns it, who reads it, and what decision it has changed in the last quarter. Most reports fail that last column. Cut anything that has not changed a decision in two quarters unless it is a compliance or contractual requirement.

The audit also has to grade the input data, not just the outputs. A measurement system built on dirty data produces confident wrong answers. `ins_andrew-jones-data-trustworthiness-over-output-metrics` makes the point for AI products, and it generalizes: if the data going in is not trustworthy or observable, the output metrics mean nothing. Check dedup rate, source-field completion, and sync lag on the CRM before you trust a single funnel number that sits on top of it. `pat_diagnose-before-execute`

### 2. Translate company goals into measurable PMM goals. Name the decision each one informs.

Start from the company OKRs and ask: which of these can PMM credibly move, and through which workstream. A company goal of "grow net revenue retention" becomes a PMM goal only when you can name the lever, the expansion-messaging program, the in-product upsell copy, the win-back play, and the metric that tells you it worked.

Do not write a goal you cannot connect to revenue, pipeline, or customer value. The reframe that keeps goals honest is to measure against the customer's outcome, not your own target. `ins_customer-revenue-not-yours`

> "Start thinking about how you actually impact revenue for your customers, and talk in that language. The more you can think in terms of not, ‘how do I get more revenue for myself?’ but, ‘how do I get more revenue for my customers?’, the more your message is likely to land."
> · Shruti Kapoor, Clari blog, 2022
> `ins_customer-revenue-not-yours`

The same exercise that produces good external messaging produces honest internal goals: it forces you to do the segment math and exposes the accounts and motions where PMM does not credibly move the number.

### 3. Choose the metric model. Optimize absolute counts, not stage conversion rates.

The default instinct is to track conversion rate at every funnel stage. That instinct is wrong, and it is wrong in a specific, dangerous way. A stage conversion rate is a ratio with two levers. You can grow the numerator (good) or shrink the denominator (perverse). The easy lever is almost always the perverse one: make the previous stage harder, filter out lower-intent users, and the rate climbs while the business shrinks. `ins_absolute-counts-over-conversion-rates`

> "Because that will always hurt your conversion rate, but it may actually give you more people on the outside."
> · Archie Abrams, Lenny's Podcast, 2026-04-28
> `ins_absolute-counts-over-conversion-rates`

Optimize the absolute number of users reaching each stage instead. Lower signup friction looks like a regression on rate. It often increases activated users and drops CAC. This holds when the downstream value of an added activated user beats the cost of serving low-intent traffic. It fails for sales-assisted, high-touch products where every low-intent signup costs the team. Pick the model on the cost-to-serve, not on which dashboard looks greener. `pat_measurement-correlated-short-signals`

**Metric model per workstream:**

| Layer | What it is | Example for a launch |
|-------|-----------|----------------------|
| Output | The result you are accountable for | Activated accounts from the launched feature |
| Input | The few things the team can directly move | Demos booked, trial starts, in-product activations |
| Tradeoff | The thing that quietly breaks when you push the output | Support ticket rate, time-to-first-value |

Every workstream gets one output metric, two or three input metrics, and at least one tradeoff metric watched alongside. The tradeoff column is the one teams skip, and it is the one that catches a win that is secretly a loss.

### 4. Find a correlated short signal for every long outcome. Then validate it against a holdout.

Most outcomes PMM cares about are slow: retention, expansion, brand recall, pipeline that closes two quarters out. The trap is to either wait a year to learn, or to declare victory on a short-term lift that evaporates. Both are failures of measurement design.

Annie Duke's frame: there is no such thing as a long feedback loop. For any slow outcome, find an earlier signal that correlates with it and measure that weekly. `ins_no-such-thing-as-long-feedback-loop`

> "Did this positioning resonate?" is a long loop. "Did we get 3+ qualified demos from this week's outreach?" is a short loop.
> · Annie Duke, Lenny's Podcast, 2026-04-28
> `ins_no-such-thing-as-long-feedback-loop`

Here is the part most teams skip, and it is the part that decides whether the whole system tells the truth. Archie Abrams ran permanent holdouts at Shopify and found that roughly 30 to 40% of experiments that produced a clear short-term lift showed no incremental value at one year. `ins_long-term-holdouts-30-40-evaporate` The short signal you trust is wrong a third of the time unless you have validated it. The two positions look like a contradiction: Duke says find the short signal, Abrams says short signals over-attribute. They resolve into one rule. `con_short-feedback-vs-long-term-holdouts`

1. Find a candidate short signal (Duke's move).
2. Validate the correlation against a one-year holdout before you let it drive ship decisions (Abrams's evidence).
3. Re-validate quarterly, because correlation drifts.

Without step 2, Duke's advice produces Abrams's evaporation. Run a permanent 5% holdout where the data volume allows it, with automated readouts at 3, 6, 9, and 12 months. Audit one past quarter of declared "wins" against the long signal and expect a third to come back empty.

### 5. Match the experiment method to the sample size, not to the prestige of A/B testing.

A/B testing has a cost most teams ignore: sample size. An underpowered test returns "no significant difference," which leadership reads as "the change failed," and the team reverts good work or freezes. The rule is blunt. `ins_experimentation-paralysis`

> "If we cannot collect the sample size in a month, we shouldn't test it. Period."
> · Elena Verna, Lenny's Podcast, 2026-04-28
> `ins_experimentation-paralysis`

If the change will not accrue enough sample in 30 days, ship it and run a pre/post readout at 24h, 7d, 28d, and 1yr. Reserve scientific A/B for high-traffic surfaces and high-stakes pivots: pricing, the core flow, the homepage hero. Treating every change as an experiment is a velocity-killer dressed as rigor. The exception is real: where stakes are high and the change confounds with other variables, skip the shortcut and run the controlled test.

### 6. Choose the attribution model on sales-cycle length and the channels you cannot see.

There is no single right attribution model. Blend three and match the blend to your cycle: marketing-mix for the big-picture view, multi-touch for the tactical view, incrementality tests where you need confidence on one lever. The longer the sales cycle and the lower the data maturity, the more you weight the blunt-but-honest models over fine-grained touch attribution.

Then account for what the stack cannot see. Standard attribution captures last-click, UTM tags, and CRM source fields. Word-of-mouth and partner referrals arrive with no trackable token and register as direct or dark traffic. Pete Caputa found that 25% of Databox sales calls came from referrals only after he added one survey question to the demo booking form, a quarter of all sales that read as zero in every prior report. `ins_pete-caputa-referral-attribution-gap` Meanwhile the visible channel ate budget it did not earn.

> "Our ad manager just told me we have to spend $600/day on our own branded search terms to outbid our competitors."
> · Pete Caputa, LinkedIn, May 2026
> `ins_pete-caputa-referral-attribution-gap`

One self-reported survey question at booking intent surfaces the invisible channel. Validate it against closed-won CRM patterns before reallocating budget, because self-reported source carries recall bias.

### 7. Reframe content and AEO measurement around audience, not clicks.

If any workstream you measure is content or organic search, the proxy you inherited is breaking. Rand Fishkin and Amanda Natividad document open-web traffic down 46% in three years, AI Overviews cutting top-ranking click-through by 58%, and ChatGPT sending 1.3% of traffic to external sites versus Google's 29.2%. `ins_fishkin-natividad-measurement-reframe-not-clicks` Clicks were always a proxy for attention, never the thing itself. The fix is a measurement reframe, not a content overhaul: score audience-building outcomes, list growth, return visits, direct search volume, share-of-voice in AI answers.

For AEO specifically, a single citation snapshot is noise. Aleyda Solis measured 74% of cited sources rotating week to week, fast enough that a monthly report samples a different distribution every time. `ins_aeo-citation-rotation-makes-snapshots-worthless`

> Track platforms, prompt types, citations, recommendations, readiness and business impact separately. The goal is not another vanity score.
> · Aleyda Solis, SEOFOMO, 2026-05-03
> `ins_aeo-citation-rotation-makes-snapshots-worthless`

A weekly, multi-dimension layer is the minimum structure that separates signal from variance. Track presence, readiness, and business impact as separate columns, and prefer first-party signal where it exists.

### 8. Measure value delivery, not activity or logins.

Two adjacent traps live here. The first is measuring effort instead of outcome. Chris Orlob's competency-analytics argument applies to any PMM enablement metric: dashboards that count calls per day, emails sent, or assets shipped measure motion, not skill or impact. `ins_competency-analytics-over-activity-dashboards`

> "Revenue rarely improves from generic sales training, it improves when training targets the exact decision friction blocking deals."
> · Rohit Shah, quoted in Chris Orlob, Sales Competency Analytics, 2026-04-17
> `ins_competency-analytics-over-activity-dashboards`

The second trap is conflating adoption with value. A GTM tool can deliver value even if zero reps log in, as long as its data flows into the systems where reps already work. `ins_mark-kosoglow-adoption-vs-value` Login frequency is a vanity proxy for an embedded, invisible tool. Choose the outcome metric carefully and resist the cost-cut narrative that optimizes the wrong one. The cautionary tale is the support team optimized for response speed while satisfaction collapsed. `ins_start-with-support-fastest-ai-roi`

> "For businesses thinking about where to start with AI, we recommend support. The results are predictable and the path to value is the fastest."
> · Yamini Rangan, HubSpot blog, 2026-04-28
> `ins_start-with-support-fastest-ai-roi`

### 9. Establish baselines and proof targets from history, not aspiration.

Every metric needs a baseline drawn from historical data and a target the team can defend. No aspirational guesses dressed as targets. Where the team has no internal history, an anonymized benchmark is the honest substitute.

The proof side of measurement matters as much as the operations side, because the metrics PMM produces become the evidence buyers trust. In a UserEvidence survey, customer ROI stats rated the most trustworthy form of evidence for B2B buyers. `ins_roi-evidence-most-trusted-by-b2b-buyers`

> "UserEvidence surveyed 619 B2B buyers and 51% said it's the most trustworthy form of evidence."
> · Jason Oakley, LinkedIn, 2026-04-10
> `ins_roi-evidence-most-trusted-by-b2b-buyers`

When named-customer attribution is blocked by legal, secrecy, or internal politics, aggregated anonymous benchmark data substitutes. It loses named-source weight and gains breadth and bypass-ability. `ins_anonymous-benchmark-rescues-roi-evidence`

> "You don't necessarily need specific customer metrics in order to prove that your product works — this is where anonymous proof points and benchmark stats can save you."
> · Jason Oakley, LinkedIn, 2026-04-10
> `ins_anonymous-benchmark-rescues-roi-evidence`

When you set a capacity-dependent target, plan against the failure rate, not the headcount. Roughly 30 to 40% of sales hires never reach quota, so a pipeline target that assumes linear productivity from the org chart is systematically optimistic. `ins_skok-sales-rep-failure-rate`

### 10. Set the cadence, integrate the sources, and build the review loop.

Reports arrive before the meetings where decisions get made, never after. Weekly reads feed the short-signal checks. Monthly reads feed workstream reviews. Quarterly reads feed goal-setting and the holdout audit. Wire CRM, product analytics, ad platforms, and PMM tools into one reporting layer so the numbers in the room reconcile.

| Activity | Frequency |
|----------|-----------|
| Short-signal check (input metrics, AEO sweep) | Weekly |
| Workstream review (output vs. input vs. tradeoff) | Monthly |
| Attribution and channel-mix reconciliation | Monthly |
| Goal review, baseline reset, metric retire/replace | Quarterly |
| Long-term holdout readout (3 / 6 / 9 / 12 months) | On the holdout calendar |

The loop is the point. Review, refine, and retire metrics as priorities shift, and keep a human verifying that each number traces to a real source before it drives a decision. AI will draft the dashboard and summarize the reads, but it will confidently report a metric built on broken data. The verification is the irreplaceable human job. `pat_verification-as-human-job` `ins_andrew-jones-data-trustworthiness-over-output-metrics`

## Pick the few that matter

Most measurement systems fail by addition: more metrics, more dashboards, more reports, until nobody can name the three numbers that decide the quarter. The discipline is subtraction. The moves that pay off most sit upstream of the funnel, in the market you target and the offer you make, not in shaving conversion rates. `pat_market-and-offer-beat-funnel-optimisation`

| Question | Keep the metric if | Cut it if |
|----------|-------------------|-----------|
| Does it trace to revenue, pipeline, or customer value? | Yes, with a named lever | It is a count of activity or motion |
| Can the team directly move it? | It is an input metric they control | It is a lagging output with no input under it |
| Has it changed a decision in two quarters? | Yes, name the decision | No, and it is not a compliance requirement |
| Is the short signal validated against a long signal? | A holdout confirmed the correlation | The correlation is assumed |
| Does it have a tradeoff metric watching it? | Yes, the quiet failure is monitored | The metric can be gamed unwatched |

Three to seven metrics per workstream is the ceiling. More than that and the system measures everything and decides nothing.

## Sprint-readiness: picking your 2-3 metrics

A quarterly framework gives you ten dimensions to watch. A sprint gives you two weeks and a specific bet. The mismatch kills both. When a sprint starts, collapse the full framework to three questions: what can the team move in 14 days, what signal will tell you by day 10, and what breaks quietly if you push too hard.

**Pick by moveability first.** An input metric the team controls beats any output metric they cannot. If the metric cannot accrue enough signal in 30 days, it will not tell you anything in two weeks either. `ins_experimentation-paralysis` Start with the inputs the sprint directly acts on, not the outcomes two quarters out.

**Find the short signal.** For any outcome the sprint is meant to move, there is an earlier, faster signal that correlates with it. Use that as your sprint read, not the final output. `ins_no-such-thing-as-long-feedback-loop` A weekly absolute count of qualified demos, activated trials, or shipped units tells you by day 7 whether the sprint is on track. Track the absolute count, not the conversion rate: a rate has two levers, and the easy one is the perverse one. `ins_absolute-counts-over-conversion-rates`

**Add one tradeoff metric and stop.** Most teams stop after the output. The tradeoff metric is what breaks quietly when you push the sprint bet: support ticket rate, time-to-first-value, or value delivered even when logins do not show it. `ins_mark-kosoglow-adoption-vs-value` One tradeoff metric is the insurance. Two is overhead.

**Grade the data before you pick.** A sprint metric built on untracked events, a stale CRM field, or a broken UTM is a confident wrong answer delivered fast. Before locking your three metrics, confirm each one has a trustworthy data source you can read daily. `ins_andrew-jones-data-trustworthiness-over-output-metrics` If the source is not observable now, do not pick that metric for this sprint.

**Sprint vs. quarterly: the split**

| Horizon | Metric count | Optimize for | Leave on the quarterly cadence |
|---------|-------------|--------------|-------------------------------|
| Sprint (2 weeks) | 2-3 | Input metrics the team controls, validated short signal, one tradeoff watch | Output lagging indicators, attribution model tuning, holdout validation |
| Quarterly | 5-7 per workstream | Full output / input / tradeoff stack, holdout readout, baseline reset | Sprint-level daily reads |

The sprint does not replace the quarterly framework. It borrows from it. Pick the two or three metrics actionable at this timescale, leave the rest on the quarterly cadence, and move.

## Check your work

- Every KPI traces to revenue, pipeline, or customer value. No orphan vanity metrics.
- The input data was graded for trustworthiness before any output metric was trusted.
- Each workstream has one output, two or three actionable inputs, and at least one tradeoff metric.
- Stage goals optimize absolute counts where cost-to-serve is low, not conversion rates.
- Every long outcome has a short signal, and every short signal is validated against a holdout before it drives ship calls.
- The attribution model matches actual sales-cycle length, and a survey question covers the referral channel the stack cannot see.
- Content and AEO are scored on audience and weekly rotation, not single-snapshot clicks or citation counts.
- Baselines come from historical data or anonymized benchmarks, not aspirational guesses.
- Cadence matches decision forums. Reports arrive before the meetings, not after.
- A human verifies each number traces to source before it drives a decision.

## What goes wrong

- **Single north-star fixation.** One metric hides problems in every other dimension. Run output, input, and tradeoff together. `pat_measurement-correlated-short-signals`
- **Optimizing rate while counts shrink.** The easy lever on a conversion rate is to shrink the denominator. The dashboard turns green while the business shrinks. `ins_absolute-counts-over-conversion-rates`
- **Declaring victory on a short-term lift.** Roughly 30 to 40% of short-term wins show no value at one year. Validate against a holdout before you take credit. `con_short-feedback-vs-long-term-holdouts`
- **A/B testing what cannot reach significance.** Underpowered tests read as failures and good work gets reverted. Use pre/post when sample size will not cooperate in 30 days. `ins_experimentation-paralysis`
- **Attribution that misses the invisible channel.** Referrals register as direct traffic and budget flows to the visible channel that did not earn it. One survey question surfaces it. `ins_pete-caputa-referral-attribution-gap`
- **Counting clicks in a zero-click web.** Open-web traffic fell 46% in three years. Reframe content measurement to audience-building, not click capture. `ins_fishkin-natividad-measurement-reframe-not-clicks`
- **Trusting a single AEO snapshot.** 74% of cited sources rotate weekly. A monthly snapshot samples noise. Measure weekly across segments. `ins_aeo-citation-rotation-makes-snapshots-worthless`
- **Measuring activity instead of value.** Calls logged and assets shipped measure motion, not impact. Score the friction that blocks deals. `ins_competency-analytics-over-activity-dashboards`
- **Conflating adoption with value.** Login frequency misses an embedded tool that delivers value invisibly. `ins_mark-kosoglow-adoption-vs-value`
- **No attribution plan before launch.** Tracking bolted on after go-live cannot prove impact. Decide what proves the result before you ship.
- **Output metrics on dirty data.** A trustworthy-looking number on top of bad data is a confident wrong answer. Grade the input first. `ins_andrew-jones-data-trustworthiness-over-output-metrics`
- **A static framework nobody revisits.** Priorities shift and the metrics do not. Schedule the quarterly retire-and-replace and own it. `pat_frontline-as-pmm-substrate`

## What you get

1. Current-state audit: data sources, tools, reporting gaps, and a data-trustworthiness grade.
2. PMM goals mapped to company OKRs, each with a named lever and a metric.
3. Metric model per workstream: one output, two or three inputs, one tradeoff metric.
4. Short-signal map: a validated leading indicator for each slow outcome, with a holdout plan.
5. Experiment-method rule: A/B where sample size allows, pre/post everywhere else.
6. Attribution model selection with rationale, plus the referral-survey question on the booking form.
7. Content and AEO measurement layer: weekly, multi-dimension, audience-scored.
8. Baselines and targets from history or anonymized benchmark, planned against realistic failure rates.
9. KPI dashboard spec with exec, PMM-team, and cross-functional views.
10. Reporting cadence tied to decision forums, with a named owner and a quarterly retire-and-replace loop.
