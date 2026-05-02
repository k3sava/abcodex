---
title: Aishwarya Naresh Reganti + Kiriti Badam on AI product design, non-determinism, and CCCD
type: raw
source: Lenny's Podcast (Dropbox archive)
guests: Aishwarya Naresh Reganti, Kiriti Badam
host: Lenny Rachitsky
captured: 2026-04-28
captured_via: claude-code (haiku-4-5 batch)
domain: gtm
attribution: verified
relevance_tier: HIGH
transcript_file: lenny-dropbox/Aishwarya Naresh Reganti + Kiriti Badam.txt
---

# Aishwarya Naresh Reganti + Kiriti Badam on AI Product Design, Non-Determinism, and CCCD

## Why this is in the wiki

This episode tackles the core hardness of building AI products: non-determinism breaks classical product thinking. Traditional product managers measure adoption, retention, NPS. AI products have an extra variable—the model output itself—that changes behavior downstream. Aishwarya and Kiriti introduce Continuous Calibration Continuous Development (CCCD): a framework for managing that uncertainty while building flywheels. Directly applicable to flywheel's "human in the loop" substrate and behavioral-improvement loops.

## 6 load-bearing insights for flywheel

1. **Non-determinism is AI's irreducible tax on product certainty**
   - A deterministic product (Stripe dashboard, Slack chat) has fixed behavior: input A always produces output A.
   - An LLM-backed product has probabilistic behavior: input A might produce output A or output B depending on model, temperature, sampling strategy.
   - This breaks the classical product feedback loop: you ship a feature, measure impact, decide to keep or kill it.
   - With AI, you also need to ask: which version of the model was shipped? Did the behavior change because of the feature or because the model changed?
   - Example: Perplexity's search results are inconsistent. Some searches prioritize depth (long-form), others breadth (quick facts). Users see variance, not a stable experience.

2. **Agency vs. control: every AI product chooses a frontier on the trade-off curve**
   - High agency + low control: the model decides everything (user gets variety but unpredictability). Example: creative writing assistants, open-ended search.
   - High control + low agency: humans constrain every decision (user gets consistency but rigidity). Example: templated outputs, rule-based systems.
   - High agency + high control: CCCD — humans and algorithms learn together over time. Humans decide intent, algorithms learn the boundaries. Example: Figma's design suggestions or recruitment filtering that improves as you correct it.
   - Most teams default to "low agency + high control" because it's easy to build. But it leaves compounding value on the table.

3. **CCCD (Continuous Calibration Continuous Development): the operating system for AI flywheels**
   - Definition: humans provide examples or feedback on model outputs; the model (or a separate calibration layer) adjusts behavior; humans evaluate the next round. Loop tightens over time.
   - Not fine-tuning the base model every week (that's expensive and risky). Instead, smaller adjustments: prompt engineering, retrieval augmentation, behavior guardrails, output filtering.
   - The "calibration" is the human understanding what the model does and drawing boundaries. The "development" is the model or system adapting to those boundaries.
   - Flywheel insight: this is exactly the human-in-the-loop layer Kesava's team needs. Algorithms handle breadth; humans calibrate intent.

4. **Evals in dev are not evals in production; you need both**
   - Development evals (benchmarks, synthetic data): tell you if the model works on *average* across a test set. Good for fast iteration.
   - Production evals (real user feedback, behavior downstream): tell you if the model works for *your specific users* on *your specific task*. Slow to gather but high signal.
   - Teams over-invest in dev evals and under-invest in prod evals, then ship inconsistent experiences. "But it passed the benchmark!"
   - Production signal is noisier (one user's complaint, one low conversion session) but irreplaceable. You need both, running in parallel.
   - Guardrail: if you're not collecting production evals weekly, you're flying blind.

5. **Behavioral flywheels: user feedback improves model output improves user behavior improves data quality improves model**
   - Linear causality breaks in AI: the model affects what users do, which affects what data you collect, which affects what the model learns.
   - Example: a recommendation system that gets better at ranking → users spend more time → you see more engagement → you train on richer behavior data → the system gets smarter → repeat.
   - Or the inverse: a recommendation system that's bad → users don't engage → you have sparse data → the system can't learn → it gets worse → repeat.
   - Design for positive feedback. Start with seeding (humans curate good outputs initially). Once the loop is positive, the system compounds.
   - Aishwarya: "You need to be intentional about closing the loop. Don't accidentally build a negative flywheel."

6. **Transparency in uncertainty is a feature, not a bug**
   - Most teams hide model uncertainty from users ("We know the answer, we're just waiting"). This is a miss.
   - Showing uncertainty (confidence scores, multiple hypotheses, "I'm not sure") builds trust and surfaces where the model is weak.
   - Example: an AI recruiter that says "73% confidence this is a match, but I've flagged edge cases" is more useful than one that just predicts pass/fail.
   - Users learn to distrust opaque confidence (they can't see why it's confident). They learn to trust transparent uncertainty (they can see the gaps and adjust).

## Other notable threads

- Cold-start problem in behavioral flywheels: how long does it take to get positive signal? Seed aggressively.
- Model versioning as a product decision: different user cohorts can see different model versions to test CCCD assumptions.
- Red-teaming as continuous calibration: every adversarial example teaches the system a boundary.

## Why this matters for flywheel

**Non-determinism acceptance** = the flywheel can't pretend AI systems are deterministic. Every sales cadence generated by the algorithm must be human-verified. The framework isn't "replace humans with AI"; it's "AI handles breadth, humans handle intent and calibration."

**CCCD as substrate** = instead of "we ship AI once, measure impact, done," the flywheel is "we ship AI, humans calibrate it weekly, it improves, humans calibrate it again." This is the rhythm Kesava's team needs. Production evals feed back to algorithm tuning. No black-box hand-off.

**Behavioral flywheels as growth thesis** = demand gen improves → more reps use it → better usage data → algorithm learns → demand gen improves. The compounding loop is real but fragile. Positive-feedback seeds are mandatory (curated campaigns, verified leads, trusted sources). Accidentally trigger a negative loop and you're stuck.

## Related

- `concepts/ai-native.md` — workflow collapse, revenue-per-employee, forward deployment
- `projects/flywheel_team_six.md` — human-in-the-loop roles
- `decisions/justcall-exit.md` — exit context
