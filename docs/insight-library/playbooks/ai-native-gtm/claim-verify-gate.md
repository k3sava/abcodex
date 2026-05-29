---
id: pb_claim-verify-gate
title: Gate every public claim against the source that backs it
maintained_by: codex maintainers
captured_date: 2026-05-01
depth: full
domain: [ai-native-gtm, substrate, anti-fabrication]
uses_cards: [ins_kesava-mandiga-anti-fabrication-as-rule, ins_evals-are-data-analysis-on-llm-apps, ins_llm-as-judge-binary-not-likert, ins_error-analysis-highest-leverage-eval-step, ins_make-verification-easy-ai-production, ins_outcomes-grader-agent-evaluation, ins_judgment-vs-understanding, ins_kevin-indig-verification-cost-rising, ins_willison-reliability-erodes-review-discipline, ins_pierri-ai-positioning-needs-human-checkpoints, ins_pierri-batch-transcripts-produce-fabrications, ins_maja-voje-substrate-first-content-engineering, ins_ai-slop-loop, ins_transparency-in-uncertainty, ins_benevolent-dictator-not-committee]
uses_patterns: [pat_verification-as-human-job, pat_eval-as-data-analysis, pat_substrate-runs-loop-humans-run-alignment, pat_execution-cheap-judgement-scarce]
originating_operators: [kesava-mandiga, hamel-husain, andrej-karpathy, kevin-indig, simon-willison, anthony-pierri, eugene-yan, anthropic, maja-voje, lily-ray, aishwarya-naresh-reganti]
---

# Gate every public claim against the source that backs it

A two-gate defense for any system that grounds external assets in citable knowledge. Quality bar: every number, date, named entity, and source-system ID in a published asset traces to a substrate file that actually contains that value, and a person signed off on the trace. The gate succeeds when a hostile reader who pulls one claim and chases it to source finds the source says exactly what the asset says. It fails the moment a claim is cited to a path that does not hold the value, because a citation that looks right and is wrong is more dangerous than no citation at all.

The economics are why this matters now. Production cost is falling. The cost to verify what got produced is rising, and judgment is the binding constraint. `pat_execution-cheap-judgement-scarce` `ins_kevin-indig-verification-cost-rising`

> "Judgment is the only thing that doesn't compress."
> · Kevin Indig, AI changed my work and yours too, 2026-05-04
> `ins_kevin-indig-verification-cost-rising`

This is not a copywriting check. It is a substrate-fidelity check that runs as two composed gates. Gate 6 (cite-check) catches claims with no citation. Gate 7 (claim-verify) catches claims cited to a path that does not actually contain the claimed value. Together they close the gap that pure citation-existence misses.

## When to use

- Any external-facing asset that quotes specific numbers, dates, named entities, or source-system IDs.
- Any positioning, battle card, or canonical-statement file before promotion.
- High-stakes briefs: executive Q&A, board decks, customer-facing comparison pages.
- Any AI-generated artifact built by running a model across multiple thin or contradictory inputs, where the model fills gaps with plausible-sounding invention. `ins_pierri-ai-positioning-needs-human-checkpoints`
- Brand-protection sweeps, where a single seeded fake claim can self-confirm in AI Overviews and you need to catch it before it propagates. `ins_ai-slop-loop`

## How to use

### 1. Adopt the trace-or-stop rule before you write the gate.

The gate enforces a rule. State the rule first, in one line a person can hold in their head: if you cannot trace a claim to a source, write "unverified" and stop. This is the strictest discipline in the whole pipeline. Every metric, every "we drove" number, every round figure has to trace to a customer quote, a snapshot, a release, or a repo commit. If it does not, the claim is "unverified" and you either find the source or drop it. Composite quotes do not exist. Invented metrics do not exist. Round numbers that feel true do not exist. `ins_kesava-mandiga-anti-fabrication-as-rule`

The reason is asymmetric cost. Credibility compounds and decays the same way. Every fabricated claim that gets caught burns the trust the verified ones earned. The cost of writing "unverified" is small. The cost of getting caught making one up is the whole portfolio. `ins_kesava-mandiga-anti-fabrication-as-rule`

### 2. Make verification the easy path, not the afterthought.

Build the verification mechanism before you scale generation, not after. Systems that cannot quickly check their own output accumulate invisible drift. AI generates fluently and fails silently, so without a cheap, fast check path, there is no signal that separates a good output from a plausible-sounding bad one. `ins_make-verification-easy-ai-production`

Easy means three things. The check runs automatically after every generation. It produces a binary or scalar signal. It costs less to run than regenerating the output would. When verification is easy, every failed output becomes a learning signal. When it is hard, every failed output is invisible. `ins_make-verification-easy-ai-production`

This is the same conclusion operators reached from four separate lanes inside two weeks: research, agent frameworks, evals, and PM craft all landed on verification, not production, as the irreplaceable human job. `pat_verification-as-human-job`

> "You can outsource your thinking, but you can't outsource your understanding."
> · Andrej Karpathy, Sequoia AI Ascent 2026 fireside, 2026-04-30
> `ins_judgment-vs-understanding`

### 3. Compose the two gates so cited means cited-and-supported.

Run the gates in order. The order is load-bearing.

| Gate | Question it asks | What it catches |
|------|------------------|-----------------|
| Gate 6, cite-check | Is there a substrate citation near this claim? | Uncited claims. |
| Gate 7, claim-verify | Does the cited substrate actually support the claim? | Plausible-but-wrong citations. |

Cite-check runs first because there is no point checking whether a citation supports a claim until you know a citation exists. The two gates together assert one thing: the claim is cited AND the cite is plausibly true. A "PASS" at cite-check is not a "VERIFIED-TRUE." Cited is not the same as true, and treating it as the same is the most common way this whole discipline gets defeated.

### 4. Parse the asset into claim-and-path pairs, then open each path.

For each claim in the asset, find the nearest substrate path it cites. That gives you a set of (claim, cited-path) pairs. For each pair, open the substrate file at the cited path and check whether the claim's specific value appears there.

The proximity heuristic that maps a claim to its nearest cited path is the weak link. The nearest path is not always the semantic match, so the false-positive rate is non-trivial and the composite gate stays advisory until the mapping tightens. Treat a clean automated pass as a prompt to look harder at the pairs the heuristic was least sure about, not as a license to ship.

### 5. Define what counts as the value appearing in substrate.

Write the match rules down before you run them, so the gate is falsifiable and not a taste fight.

| Claim type | Counts as a match |
|------------|-------------------|
| Currency or quantity | Exact value, ignoring formatting. `$1,047` matches `$1047` or `1,047`. |
| Percentage or unit | Within a 5% tolerance for minor rounding. |
| Source-system ID | Verbatim. A dashboard ID like `138849319` must appear character for character. |
| Date or named entity | Exact match. No paraphrase, no near-miss. |

What does not count: a claim cited to a file that does not contain the value, even if the value is plausible. A claim whose value contradicts substrate (the asset says 70%, substrate says 65.1%, outside the 5% tolerance, flagged). A claim citing a path that does not exist, which cite-check catches earlier.

### 6. Build the judge as binary, one judge per failure mode.

The claim-verify check is an LLM-as-judge. Build it the way eval practitioners build judges that earn trust: binary pass/fail per failure mode, not a 1-to-5 score. A graded scale is a way of avoiding the decision. A binary judge forces a callable answer and a falsifiable accuracy number you can validate against human labels. `ins_llm-as-judge-binary-not-likert`

> "1-2-3-4-5 is a weasel way of not making a decision."
> · Hamel Husain, Lenny's Podcast, 2026-04-28
> `ins_llm-as-judge-binary-not-likert`

Keep the judge set small. Mature eval shops end with a handful of narrow judges, not dozens, because most failures get fixed at the source and never need a permanent check. `ins_llm-as-judge-binary-not-likert` Validate the judge against human-labelled traces with a confusion matrix, not a single agreement number. The off-diagonal cells are where a judge that says "pass" most of the time hides near-total failure on the long tail. And the trust math is the whole point of the gate. `pat_eval-as-data-analysis`

> "When people lose trust in your evals, they lose trust in you."
> · Hamel Husain, Lenny's Podcast, 2026-04-28
> `ins_llm-as-judge-binary-not-likert`

### 7. Do the error analysis before you trust any judge score.

Before you wire the judge into the pipeline, sit with a sample of real failures and code by hand what went wrong. This is the most-skipped step in AI evals and the one that returns the most per hour invested. Skip it and the judge measures the wrong things: it categorizes mismatches that do not happen at scale and misses the ones that do. `ins_error-analysis-highest-leverage-eval-step`

For a claim-verify gate, the named failure modes are concrete. A round number with no source-system ID anywhere in substrate. A cite that was true 90 days ago but the substrate has since been refreshed and the asset still claims the old value. A quote attributed to a specific person that cannot be found in any source transcript. Code a sample, count the categories, then build the binary judge against the categories you actually found, not against generic quality axes. `ins_evals-are-data-analysis-on-llm-apps`

> "There's a common trap that a lot of people fall into because they jump straight to the test like, 'Let me write some tests,' and usually that's not what you want to do. You should start with some kind of data analysis to ground what you should even test."
> · Hamel Husain, Lenny's Podcast, 2026-04-28
> `ins_evals-are-data-analysis-on-llm-apps`

### 8. Run the grader in its own context, separate from the generator.

The gate has to be independent of whatever produced the asset. Deploy the claim-verify check as a separate grader in its own context window, with access only to the output and the cited substrate, never to the generator's reasoning chain. A grader that shares context with the generator inherits the generator's blind spots and rubber-stamps the same invention twice. `ins_outcomes-grader-agent-evaluation`

> "Agents do their best work when they know what 'good' looks like."
> · Anthropic, Code with Claude, 2026-05-06
> `ins_outcomes-grader-agent-evaluation`

This is the clean role split that holds across PMM, growth, evals, and product: the substrate and the agents run the inner loop of production and retrieval, and humans run the outer loop of alignment and taste. The grader gate is where that boundary gets enforced on output. `pat_substrate-runs-loop-humans-run-alignment`

### 9. Keep a human verifying, because reliability quietly erodes the habit.

Verification is the irreplaceable human job, and the failure mode is that the human stops doing it. As the generator gets more reliable, review sessions shorten. Each skipped review feels harmless because the model is usually right. The aggregate effect is that you degrade the oversight mechanism at the exact point it still matters, and when failure does come, there is no review habit left to catch it. `ins_willison-reliability-erodes-review-discipline` `pat_verification-as-human-job`

> "Those things have started to blur for me already, which is quite upsetting."
> · Simon Willison, Vibe coding and agentic engineering, 2026-05-06
> `ins_willison-reliability-erodes-review-discipline`

Name one owner for the gate. Eval work is judgment work, and a committee debating what counts as a failure never ships. One trusted-taste arbiter ships, and the rubric tightens through use. `ins_benevolent-dictator-not-committee`

> "When you're doing this open coding, a lot of teams get bogged down in having a committee... You can appoint one person whose taste that you trust."
> · Hamel Husain, Lenny's Podcast, 2026-04-28
> `ins_benevolent-dictator-not-committee`

### 10. Fix fabrication at the input, not just at the output.

The gate catches fabrication after it happens. Cut the rate of fabrication going in by changing how the model runs. Running AI across three or more inputs at once, with thin or contradictory context, produces fabricated output, not analysis errors, because the model fills the gaps. `ins_pierri-ai-positioning-needs-human-checkpoints`

> "AI needs A LOT of help to do a good job (way more than the average person realizes)."
> · Anthony Pierri, AI needs A LOT of help to do a good job, 2026-05-10
> `ins_pierri-ai-positioning-needs-human-checkpoints`

Two input-side fixes. First, add an explicit validate-against-sources checkpoint at each stage of a multi-input workflow, so the gap-filling loop gets interrupted before it compounds downstream. `ins_pierri-ai-positioning-needs-human-checkpoints` Second, do not batch heterogeneous inputs through one prompt. Batch-processing transcripts produces quotes that cannot be traced to any source file. Run a dedicated skill per input instead, at roughly three minutes per file, which tightens the context and makes spot-checking tractable: verify one file and you know the method held. `ins_pierri-batch-transcripts-produce-fabrications`

The deeper lever is the substrate itself. Most of the output quality comes from the knowledge fed in, not from the sophistication of the agents. A weak knowledge base produces weak, generic, untraceable content at high volume, so a clean canonical artifact per entity is itself a fabrication control. `ins_maja-voje-substrate-first-content-engineering`

> "90% of output quality comes from what you feed the system, not from the sophistication of the agents"
> · Maja Voje, Content Engineering, 2026-05-01
> `ins_maja-voje-substrate-first-content-engineering`

### 11. Surface uncertainty instead of hiding it.

Where a claim cannot be cleanly verified, do not let the asset state it with false confidence. Show the uncertainty. Hidden confidence trains the reader to either verify everything or trust nothing, and both destroy the asset's value. Transparent uncertainty trains the reader to verify the low-confidence claims and trust the high-confidence ones. `ins_transparency-in-uncertainty`

> "Most teams hide model uncertainty from users. This is a miss. Showing uncertainty (confidence scores, multiple hypotheses, 'I'm not sure') builds trust and surfaces where the model is weak."
> · Aishwarya Naresh Reganti, Lenny's Podcast, 2026-04-28
> `ins_transparency-in-uncertainty`

The gate's own output should do the same. A per-mismatch report names the line, the claim, the cited path, and what the substrate actually says, rather than collapsing to a single green check that hides the long tail.

### 12. Sweep for hallucinated claims about you, not just claims by you.

The gate so far defends outbound assets. There is an inbound version. Synthesis surfaces have a thin verification layer for sparsely-covered claims, so a single seeded fake claim can self-confirm by citing the source that introduced it. A competitor or a random actor can plant a false claim about your pricing, deliverability, or compliance, and the surface will repeat it back as fact. `ins_ai-slop-loop`

Add a periodic brand-protection sweep to the cadence: query the AI surfaces for claims about your brand, check each surfaced claim against your own substrate, and treat a hallucinated claim as a comms escalation with its own response-time clock, separate from search-results monitoring. `ins_ai-slop-loop`

## Check your work

- The trace-or-stop rule is stated and a person owns it, not just the tool. `ins_kesava-mandiga-anti-fabrication-as-rule`
- Cite-check runs before claim-verify, and a cite-check PASS is never read as VERIFIED-TRUE.
- Match rules are written down: exact for IDs, dates, and entities; 5% tolerance for percentages.
- The judge is binary per failure mode and validated against human labels with a confusion matrix, not a single agreement number. `ins_llm-as-judge-binary-not-likert`
- Error analysis on a real failure sample came before judge construction. `ins_error-analysis-highest-leverage-eval-step`
- The grader runs in its own context, with access only to the output and the cited substrate. `ins_outcomes-grader-agent-evaluation`
- Multi-input AI work has a per-stage validate-against-sources checkpoint, and transcripts are run one per skill, not batched. `ins_pierri-ai-positioning-needs-human-checkpoints` `ins_pierri-batch-transcripts-produce-fabrications`
- A named owner reviews, and the gate is uncomfortable on purpose when a claim is unsupported. `ins_benevolent-dictator-not-committee`
- A brand-protection sweep for hallucinated inbound claims is on the cadence. `ins_ai-slop-loop`

## What goes wrong

- **Cited read as true.** "PASS at cite-check" interpreted as "VERIFIED-TRUE." Cited is not the same as true. Run claim-verify too.
- **Round numbers with no ID.** A clean-looking figure with no source-system ID anywhere in substrate. Treat the missing ID as a fail, not a rounding nicety. `ins_kesava-mandiga-anti-fabrication-as-rule`
- **Substrate-evolution drift.** The cite was true 90 days ago, the substrate has been refreshed, the asset still claims the old value. The gate has to re-verify on substrate change, not just at first publish.
- **Treating Gate 7 as a fact-checker.** It is a narrow substrate-fidelity check (does the claim match the cite), not a full fact pipeline. Scope it honestly.
- **Shared-context grader.** A grader that sees the generator's reasoning chain inherits its blind spots and confirms the same invention twice. `ins_outcomes-grader-agent-evaluation`
- **Eroded review discipline.** As the generator gets reliable, the human stops looking, and the habit is gone when it is finally needed. `ins_willison-reliability-erodes-review-discipline` `pat_verification-as-human-job`
- **Batch fabrication.** Running many heterogeneous inputs through one prompt invents quotes that trace to nothing. Run one skill per input. `ins_pierri-batch-transcripts-produce-fabrications`
- **Operator pressure to just approve.** The gate's whole purpose is to be uncomfortable when the claim is unsupported. Approving under pressure is the failure, not the friction.
- **Hidden uncertainty.** Stating an unverifiable claim with false confidence. Surface the uncertainty instead. `ins_transparency-in-uncertainty`
- **Defending only outbound.** Watching your own assets while a seeded fake claim about you self-confirms on the AI surfaces. Sweep inbound too. `ins_ai-slop-loop`

## What you get

1. A trace-or-stop rule, stated in one line, with a named owner.
2. Two composed gates: cite-check for uncited claims, claim-verify for cited-but-wrong claims.
3. Written match rules: exact for IDs, dates, and entities; 5% tolerance for percentages.
4. A binary LLM judge per failure mode, validated against human labels with a confusion matrix.
5. An error-analysis pass on a real failure sample, with the top failure modes named.
6. A grader running in its own context window, output and cited substrate only.
7. A per-mismatch report: line, claim, cited path, what substrate actually says, with a PASS/FAIL summary.
8. Input-side controls: per-stage validation checkpoints and one-skill-per-transcript runs.
9. A canonical substrate per entity, maintained as the source of truth the gate checks against.
10. A brand-protection sweep for hallucinated inbound claims, with its own response-time clock.
