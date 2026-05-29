---
id: pb_launch-plan
title: Run a tiered launch that matches effort to impact
maintained_by: codex maintainers
captured_date: 2026-05-01
depth: full
domain: [launch, gtm, pmm]
uses_cards: [ins_ashley-bass-intake-interview-guide-for-pmm-gtm-alignment, ins_rory-woodbridge-launch-tier-not-debate, ins_ai-native-launch-triage-not-fewer-gates, ins_james-doman-pmm-curate-not-process-launches, ins_james-doman-feature-launch-attention-scarcity, ins_maddy-hirshan-fewer-larger-launches-always-on-gtm, ins_amanda-groves-kill-a-product-launch, ins_lead-major-repositioning-pivots-over, ins_company-story-is-the-strategy, ins_supriya-vs-say-it-out-loud-test, ins_test-positioning-in-live-sales-pitch, ins_ux-change-target-emotion-is-relief, ins_nat-lia-kimli-kov-product-launches-fail-due-to-tooling-not-strategy, ins_pmm-activates-five-teams-not-two, ins_translate-pmm-activities-to-exec-speak, ins_sales-team-detects-positioning-failure-first, ins_maja-voje-strip-what-doesnt-compound, ins_homepage-five-second-trinity]
uses_patterns: [pat_diagnose-before-execute, pat_strip-what-doesnt-compound, pat_subtraction-first-operating-discipline, pat_frontline-as-pmm-substrate, pat_narrative-as-strategy, pat_buyer-mindset-not-product-features, pat_execution-cheap-judgement-scarce, pat_verification-as-human-job]
originating_operators: [rory-woodbridge, aatir-abdul-rauf, james-doman, james-doman-pipe, maddy-hirshan, emily-pick, nat-lia-kimli-kov, ashley-bass, supriya-vs, maja-voje, yi-lin-pei, amanda-groves, april-dunford]
---

# Run a tiered launch that matches effort to impact

A launch is not an announcement. It is a bet on where finite buyer attention should go this quarter. The plan is good when the tier decision is made before any asset is built, when internal teams can sell the thing before customers hear about it, and when you can tell 30 days later whether the launch moved the number it was supposed to move. Most launches fail the first test: they treat every release as a flagship.

The job has shifted. When engineering shipped every six weeks, you could plan each launch by hand. Now engineering ships faster than a PMM can review, so the high-value move is deciding what deserves a story versus what belongs in a changelog. `ins_james-doman-pmm-curate-not-process-launches` The scarce resource is judgment, not production. AI drafts the blog post and the email in minutes. It cannot tell you which of this week's six releases earns Tier 1 treatment. `pat_execution-cheap-judgement-scarce`

This is a 10-step process from tier classification to post-launch retro. Tier first. Everything downstream sizes to the tier.

## When to use

- Any product, feature, integration, or repositioning going to market
- Engineering cadence has compressed and every release is becoming a launch debate
- A pivot or repositioning where the product direction and the story have to ship together
- A workflow change that will disturb how existing users already work
- Before you spread a small team across ten channels for a feature nobody asked about

## How to use

### 1. Run the intake interview before you plan anything.

The launch plan starts with an extraction, not a calendar. Before messaging, before assets, before the kick-off deck, sit with the PM and pull the inputs only they have: the real customer problem, what is actually launch-ready versus still in flight, who will care first, and what success looks like. `ins_ashley-bass-intake-interview-guide-for-pmm-gtm-alignment`

Use a structured intake guide and share it in advance. The structure forces the unknowns into the open early, when they are cheap to handle. A launch date set before this conversation is a guess wearing a deadline. Treat the ask "write me a launch plan" the way a doctor treats "give me antibiotics." Diagnose first. Return with what you think the launch actually needs to accomplish, the evidence, and the gaps, before you produce the plan. `pat_diagnose-before-execute`

The intake is also where you set the question the whole launch answers. Write it down. Check the finished launch against it.

### 2. Classify the tier before you allocate a single resource.

Not every release deserves a launch. The tier decision is the one real judgment call, and it has to happen before anyone builds an asset. A tier system does not reduce discipline. It concentrates discipline on the releases that move outcomes.

> "Not every release deserves a launch. Tiers are how you enforce that discipline without it turning into a debate every time something ships."
> · Rory Woodbridge, How to tier your product launches, 2026-05-05
> `ins_rory-woodbridge-launch-tier-not-debate`

Score each release against fixed criteria: new audience reach, pricing impact, competitive differentiation, demand signal, sales-cycle impact. The score sets the tier. The tier sets the effort. `ins_rory-woodbridge-launch-tier-not-debate`

**Tier model:**

| Tier | What it is | Effort |
|------|-----------|--------|
| T0 | New category, repositioning, flagship product. | Full multi-channel, full enablement, executive comms. |
| T1 | Major feature. | Full asset suite, sales enablement, multi-channel external promo. |
| T2 | Notable feature. | Lighter assets: in-app, email, release notes. |
| T3 | Maintenance or minor improvement. | Release notes only. |

The most common failure mode is treating every launch as T0. When you do that, the team spreads thin, every launch competes with every other launch for the same attention, and nothing lands. Default to subtraction: which of this quarter's releases do not need a launch at all? `pat_subtraction-first-operating-discipline`

### 3. Run the tier triage faster, do not remove the gates.

When AI compressed shipping, two kinds of teams emerged. The teams that removed launch gates became noise. The teams that kept their tier logic and used AI to run the triage faster kept signal. `ins_ai-native-launch-triage-not-fewer-gates`

> the speed of shipping went bonkers, but customers still have the same attention span and bandwidth.
> · Aatir Abdul Rauf, Have AI companies broken the rules of feature launches?, 2026-05-05
> `ins_ai-native-launch-triage-not-fewer-gates`

The speed advantage is in the scoring step, not in the launch step. One scoring pass per release before PMM touches it. Resource allocation follows the score, not the loudest stakeholder. `ins_ai-native-launch-triage-not-fewer-gates` This is the same principle Maja Voje names for AI-first GTM broadly: the win is not doing more launches faster. It is stripping the launches that do not compound.

> "The 2026 GTM AI playbook isn't about doing more things faster with AI. It's about using AI to strip everything that doesn't compound."
> · Maja Voje, 3 big ideas for the AI-first GTM, 2026-05-08
> `ins_maja-voje-strip-what-doesnt-compound`

Rank your launch motions by compounding effect. Tier 1 should hold steady in count even as ship rate climbs. If the number of Tier 1 launches per quarter rises with every productivity gain, your triage is broken. `pat_strip-what-doesnt-compound`

### 4. Consider bundling small releases into one larger launch.

The reactive treadmill, one launch per release, is the trap. Smart teams move to fewer, larger launches: quarterly or twice-yearly packaging of multiple releases into a single narrative, paired with always-on lifecycle communication in between. `ins_maddy-hirshan-fewer-larger-launches-always-on-gtm`

Bundling creates stronger signal, better efficiency, and more momentum than a string of thin announcements. It also gives buyers one story to hold instead of ten they will ignore. Buyers have no attention left for an isolated "enhanced CSV export" email. `ins_james-doman-feature-launch-attention-scarcity` Between the big launches, run always-on GTM: lifecycle comms, value-based education, routine enablement. That drives continuous adoption instead of episodic spikes that fade. `ins_maddy-hirshan-fewer-larger-launches-always-on-gtm`

### 5. Derive the messaging from positioning, and from the company story.

Launch messaging is not invented for the launch. It derives from the positioning document and ladders up to the one canonical story. The company story is the strategy, and the launch is one place that story shows up.

> "The company story is the company strategy."
> · Andy Raskin, April 2026
> `ins_company-story-is-the-strategy`

The launch is also a narrative-drift checkpoint. Compare the launch message against the homepage hero and the most recent release notes. If they have drifted apart, fix that before the launch, not after. `pat_narrative-as-strategy`

For a pivot or repositioning, the sequencing is the whole game. The common failure is to set a launch date first and treat positioning as something to iterate later. That sequence guarantees rework: sellers cannot pitch the new product, customers do not get it, and support straddles the old world and the new one at once. Commit positioning at the same time as the product direction, because each one defines the other.

> "i've lead major repositioning and pivots over the last 12 years and these are the most common patterns i see."
> · James Doman-Pipe, LinkedIn, 2026-04-10
> `ins_lead-major-repositioning-pivots-over`

Lead with the capability, what someone actually does, not the aspiration. The hero needs the use case, the alternative the buyer uses today, and the result, readable in roughly five seconds. `ins_homepage-five-second-trinity` `pat_buyer-mindset-not-product-features`

### 6. For a workflow change, target relief, not excitement.

When a launch changes how existing users already work, the default emotional response is friction: relearning effort, lost shortcuts, uncertain outcomes. Framing that change as an exciting new feature fights the user's baseline. Framing it as removal of friction meets them where they are. The target emotion for a workflow-change launch is relief, not excitement. `ins_ux-change-target-emotion-is-relief`

Emily Pick's Docebo launch paired two features and positioned both as anxiety resolution, not feature value: Companion, a free ambient browser extension that removed friction for end users, and Launch Pad, admin-controlled timing that removed IT friction. `ins_ux-change-target-emotion-is-relief`

Separate the two anxieties. The end user fears relearning. The IT admin fears disruption. Dissolve each surface independently with its own copy and its own message. Launch copy that reads "so you don't have to" or "without leaving" outperforms "now you can" for a workflow change. Always pair a UX change with a "where did X go?" FAQ. `ins_ux-change-target-emotion-is-relief`

The exception: a net-new capability with no prior workflow to disturb. There, excitement is the right target. The relief frame assumes the user already has a relationship with the thing you changed.

### 7. Enable internal teams before customers hear anything.

Enablement is a hard gate, not a follow-up. Sales and CS get trained before external go-live, every time. A launch shipped to customers before reps can sell it produces inbound questions nobody can answer.

A launch's job is to make the next 100 sales conversations easier. That is why a two-bucket general-availability split is a worst practice: it forces reps to track two product states, two messaging frames, and two enablement assets at once. Messaging fragments at the worst possible moment and conversion drops. `ins_amanda-groves-kill-a-product-launch`

Activate the full set of teams, not just sales. Positioning compounds when it ships as tooling to five surfaces: sales, product, customer success, marketing, and leadership. The leadership-narrative surface is the most under-served and is how PMM builds the cross-functional visibility a launch needs.

> "Most PMMs stop at CREATING the strategy. The real impact comes when you TRANSLATE that strategy into tools that ACTIVATE every team to execute with clarity and confidence. […] tailor your output to each team's needs and seek feedback based on their frontline experiences, and better yet, make them feel like they are PART of the process."
> · Yi Lin Pei, LinkedIn, 2026-04-10
> `ins_pmm-activates-five-teams-not-two`

For T1 and above with three or more ICP segments, build persona-specific demo paths, not one generic demo. Run a recorded webinar dry-run 48 hours before go-live. Keep a rollback notification on standby.

### 8. Test the launch story out loud before it ships.

Messaging is theory until a person says it and another person reacts. Before go-live, run a two-minute real-world test: read the launch message aloud, do a mock pitch, hand it to someone with zero context and ask them to explain it back. `ins_supriya-vs-say-it-out-loud-test` Saying it out loud surfaces clarity gaps and flow problems that silent review misses. A two-minute check saves weeks of rewrites.

The strongest test is a live sales pitch. Sit in three to five first-meeting calls and watch where the buyer interrupts, where their energy drops, and where reps deviate from the script. Those are the points where the story broke.

> "A live sales pitch is the best way for B2B companies to test their positioning… sales is a back-and-forth with a prospect; sales can and should be asking questions, looking for feedback, and handling objections. Marketing doesn't fully understand the sales team's needs when it comes to a narrative, and marketing stories don't fully serve what a salesperson needs to do in a first-call pitch."
> · April Dunford, Sales-First Storytelling, 2024
> `ins_test-positioning-in-live-sales-pitch`

Sales is also your early-warning system after launch. Reps hear a positioning failure in language months before any dashboard shows it.

> "Your sales team knows months before anyone else when a position is failing."
> · April Dunford, LinkedIn, April 2026
> `ins_sales-team-detects-positioning-failure-first`

Build the rep-input loop into the launch from day one. `pat_frontline-as-pmm-substrate`

### 9. Wire the tooling so you can measure, then coordinate go-live.

Launches fail on tooling more often than on strategy. When PMMs rely on email blasts, spreadsheet segments, dev-dependent in-app announcements, and delayed reviews, they lose the ability to iterate while the launch is live. `ins_nat-lia-kimli-kov-product-launches-fail-due-to-tooling-not-strategy`

Before go-live, wire the instrumentation: real-time segments, self-serve in-app flows, triggered emails, and direct metric tracking. The point is to move from "we shipped it" to "did it actually move the metric we cared about?" `ins_nat-lia-kimli-kov-product-launches-fail-due-to-tooling-not-strategy` Read the dashboards product already runs before building new ones. If a metric is missing, file a one-line ask. Do not duplicate instrumentation.

Capture the pre-launch baseline 48 hours prior. Confirm attribution is live 24 hours prior. Manually verify in-app flows within two hours of each phase launch, because an in-app tour toggled off ships an asset nobody sees. Then coordinate go-live across the channels the tier calls for. One to three effective channels beats ten thin ones.

**Customer comms mechanics:**

| Decision | Rule |
|----------|------|
| Sender vs reply-to | Two separate choices. Never route replies to CEO@. |
| Reply-to routing | Bucket-keyed: named CSM, scaled CSM, or a scaled alias. |
| Audience split on state | Distinct emails to distinct lists. Do not A/B test across state. |
| In-app banners | One banner per state: registered, in-progress, rejected, pre-flight. |

### 10. Run the post-launch loop, measure on three tiers, then update the substrate.

Go-live is a phase, not the finish line. Define the post-launch plan before you ship: soft-launch phase gates, customer interviews in the first weeks, support-load monitoring, and an asset-refresh trigger.

Measure on three tiers, not one: conversion (did the asset convert), adoption (did users actually use the thing), and revenue (did it move the number). A landing page with views and zero conversions usually means a missing CTA or form, not a messaging problem. Set realistic targets by referencing outcomes from similar past launches.

Report the result as a business outcome, not an activity. "Led the launch" is an activity. The launch lifted trial-to-paid by X points in segment Y is an outcome. Translating activities into outcomes is how PMM keeps the budget and the seat at the planning table.

> "These all sound solid, but to a sales leader or a C suite person, these just describe activities, not outcomes. So, to communicate with more impact, get more influence and buy-in, you need to translate each of your activities to 'exec speak' by tying it to business outcomes, supporting it with real data, and describing why it's important."
> · Yi Lin Pei, LinkedIn, 2026-04-10
> `ins_translate-pmm-activities-to-exec-speak`

Name the substrate update list at kick-off and close it at retro. What does this launch promote back into the kill-list, the voice rules, the battlecards, the templates? A launch that does not feed the substrate guarantees the same mistakes next quarter.

## Check your work

- Intake interview with the PM completed before any plan or asset.
- Tier classification justified against fixed criteria, not stakeholder volume.
- Number of T0/T1 launches holds steady as ship rate rises.
- Messaging derives from the positioning doc, not invented for this launch.
- For a pivot, positioning committed on the same timeline as product direction.
- Workflow-change launches target relief; UX change paired with a "where did X go?" FAQ.
- Internal enablement complete before external go-live. Hard gate.
- No two-bucket GA split.
- Launch story said out loud and tested in 3 to 5 live pitches before go-live.
- Pre-launch baseline captured 48h prior; attribution live 24h prior; in-app flows verified within 2h of each phase.
- KPIs measured on three tiers: conversion, adoption, revenue. No vanity metrics.
- Outcome reported in exec speak. Substrate update list named and closed.

## What goes wrong

- **Treating every launch as T0.** Resources spread thin, launches compete with each other, nothing lands. Tier first, then size effort. `pat_subtraction-first-operating-discipline`
- **Removing the gates instead of speeding the triage.** AI-fast shipping with no tier logic turns launches into noise. Keep the gates, run the scoring faster. `pat_strip-what-doesnt-compound`
- **Skipping positioning on a pivot.** Date set first, positioning "iterated later." Sellers can't pitch it, customers don't get it. `ins_lead-major-repositioning-pivots-over`
- **Inventing messaging for the launch.** Message that doesn't ladder to the canonical story. Derive from positioning; run the drift check. `pat_narrative-as-strategy`
- **Excitement framing on a workflow change.** Users feel relearning friction, not delight. Target relief, separate user anxiety from admin anxiety. `ins_ux-change-target-emotion-is-relief`
- **Enablement after external launch.** Reps field questions they can't answer. Internal enablement is a hard gate before go-live. `ins_amanda-groves-kill-a-product-launch`
- **Two-bucket GA split.** Reps track two product states and two messages at once. Messaging fragments, conversion drops. `ins_amanda-groves-kill-a-product-launch`
- **Tooling that locks you into static execution.** Email blasts and delayed reviews mean no real-time iteration. Wire instrumentation before go-live. `ins_nat-lia-kimli-kov-product-launches-fail-due-to-tooling-not-strategy`
- **Assets shipped but never activated.** In-app tours toggled off. Verify every flow within 2h of phase launch. `pat_verification-as-human-job`
- **No pre-launch baseline.** Post-launch metrics become uninterpretable. Capture 48h prior.
- **Overloading channels.** Ten thin channels instead of one to three effective ones. Buyers have no attention left. `ins_james-doman-feature-launch-attention-scarcity`
- **Go-live treated as the finish line.** No post-launch plan, no customer interviews, no asset refresh.
- **Reporting activities, not outcomes.** "Led the launch" buys no influence. Translate to a business number. `ins_translate-pmm-activities-to-exec-speak`
- **Substrate not updated post-launch.** The same mistakes recur next quarter.

## What you get

1. Intake interview record: the PM's inputs on problem, readiness, first audience, and success.
2. Tier classification with rationale against fixed criteria.
3. Deliverables checklist sized by tier, each with an owner and a date. No orphans.
4. External channel plan: one to three effective channels for the tier.
5. Internal enablement plan with persona-specific demo paths and a recorded dry-run.
6. Customer comms plan: sender, reply-to routing, per-state emails and banners.
7. Instrumentation wired: real-time segments, in-app flows, triggered emails, attribution.
8. Three-tier KPI plan: conversion, adoption, revenue, with targets from past launches.
9. Post-launch plan: soft-launch phase gates, customer interviews, support monitoring, asset refresh.
10. Outcome readout in exec speak, plus a named substrate update list closed at retro.
