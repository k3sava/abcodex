---
title: Hamel Husain & Shreya Shankar — evals as error analysis, the benevolent dictator, LLM judges
type: raw
source: Lenny's Podcast (Dropbox archive)
guest: Hamel Husain (consultant, ex-Github/Airbnb ML) + Shreya Shankar (Berkeley PhD; "Who Validates the Validated?" research)
host: Lenny Rachitsky
captured: 2026-04-28
captured_via: claude-code (sonnet batch)
attribution: verified
relevance_tier: HIGH
transcript_file: lenny-dropbox/Hamel Husain & Shreya Shankar.txt
---

# Hamel Husain & Shreya Shankar — evals as the new core skill

## Summary
Evals are the skill that the chief product officers of Anthropic and OpenAI both flagged as the most important new capability for product builders. Hamel + Shreya teach the highest-grossing course on Maven (~2,000 PMs/eng across 500 companies, including OpenAI and Anthropic).

## Full text source
Transcript at `lenny-dropbox/Hamel Husain & Shreya Shankar.txt`.

## 12 load-bearing insights

1. **Evals = systematic data analysis on your LLM application.** "It really doesn't have to be scary or unapproachable. It really is, at its core, data analytics on your LLM application." Strip the mystique. The reframe matters: what looks like a new AI discipline is just data science on stochastic systems, a technique Andrew Ng was teaching 8 years ago.

2. **Start with error analysis, not with tests.** "There's a common trap that a lot of people fall into because they jump straight to the test like, 'Let me write some tests,' and usually that's not what you want to do. You should start with some kind of data analysis to ground what you should even test." Before specifying success metrics, look at 100 traces and write notes.

3. **The benevolent dictator: one trusted-taste expert, not a committee.** "When you're doing this open coding, a lot of teams get bogged down in having a committee... You can appoint one person whose taste that you trust." Domain expert preferred; "oftentimes, it is the product manager."

4. **Open coding: just write the first thing wrong, move on.** Sample 100+ traces, write a free-form note on each. "Don't worry about all the errors, just capture the first thing that you see that's wrong, and stop, and move on." Stop only at theoretical saturation (no new categories appearing).

5. **An LLM cannot do open coding for you.** "I would bet money... if I put that into ChatGPT and asked, 'Is there an error?' it would say, 'No, did a great job.'" The LLM lacks the product context (e.g., "we don't actually offer virtual tours" — hallucination invisible without domain knowledge). Humans must do the structural-error pass; LLMs can do the categorization pass. Two-stage rule, not one.

6. **Axial coding: LLM categorizes the human notes into clusters.** Open codes (free-form notes) → LLM groups them into axial codes (failure-mode buckets) → human iterates on the categories. Pivot table the counts. "We have gone from chaos to some kind of thinking around, 'Oh, you know what? These are my biggest problems.'"

7. **LLM-as-judge: one binary judge per pesky failure mode.** Output must be true/false, not 1-7 Likert. "1-2-3-4-5 is a weasel way of not making a decision." Most products end with 4-7 LLM judges total, not dozens — most failures get fixed by prompt edits, not eval scaffolding. Cost-benefit rule: write evals only for the failures that survive prompt fixes.

8. **Always align your judge against human labels before trusting it.** "When people lose trust in your evals, they lose trust in you." Build a confusion matrix vs. the human-labeled axial codes. "Agreement %" is misleading on long-tail errors — 90% agreement can hide a judge that always says "pass". Look at the off-diagonal cells. Never report a single agreement number; always report the confusion matrix.

9. **Criteria drift is real — you can't write the rubric upfront.** Shreya's "Who Validates the Validated?" research finding: people's opinions of good and bad change as they review more outputs. "You can't ever dream up everything in the first place." The rubric is co-developed during error analysis, not specified upfront.

10. **Evals as the new PRD.** Lenny's framing, Hamel + Shreya endorsed: the LLM-as-judge prompt is the most precise product specification you can write. "It's derived from our own data, so of course it's a product manager's expectations." But Shreya's correction matters: the PRD changes as you see data. "You don't really know what you want until you see it with these LLMs." Ship spec → review traces → revise spec, not the other way.

11. **Use evals online, not just in CI.** Sample 1000 production traces daily, run the LLM judge, watch the failure rate in real time. "This is not a unit test, but still now we get an extremely specific measure of application quality."

12. **Make the data-looking tool frictionless. Vibe-code your own.** Nurture Boss vibe-coded a custom annotation app in hours. "Make it as easy as possible because... it's the highest ROI activity you can engage in." The annotation surface IS the substrate.

## Other notable threads

- **Theoretical saturation is the right stopping rule for trace review, not 100.** 100 is a mental unblock; the real number is "until you stop seeing new categories", which usually lands between 15 and 60 once you have intuition.
- **A/B tests are evals.** The "evals vs A/B tests" debate is a category error. Both are systematic measurement of quality. The mistake: A/B testing without prior error analysis tests the wrong hypotheses. "I would encourage people to go and rethink that and ground your hypotheses."
- **Coding agents are not generalizable.** Claude Code's "we just vibe" is partly because the developer IS the domain expert AND the daily user, so the dogfood loop closes inside one head. "It's a mistake to try to generalize that at large." Marketing artifacts don't have this property — the buyer is not the marketer.
- **Dogfooding is dangerous when it's claimed but not actual.** "A lot of people will say they're dogfooding... but are they, really?" Quick test: are you using your own product to do real work daily?
- **Generic eval tools (cosine similarity, hallucination score) don't work.** "They have a suite of generic tools, cosine similarity, hallucination score, whatever, and that doesn't work." Application-specific evals always beat generic.
- **Lab-side benchmarks (MMLU, HumanEval) don't correlate with product evals.** Foundation-model benchmarks are decoupled from product-specific failures (handoff confusion, brand voice drift). Anchor success on application-specific eval lift, not model-version uplift.
