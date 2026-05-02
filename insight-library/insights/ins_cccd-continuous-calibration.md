---
id: ins_cccd-continuous-calibration
operator: Aishwarya Naresh Reganti
operator_role: AI engineer / researcher; co-host with Kiriti Badam on AI product design
source_url: https://www.lennysnewsletter.com/p/why-your-ai-product-needs-a-different
source_type: podcast
source_title: Aishwarya Naresh Reganti and Kiriti Badam on AI product design and CCCD — Lenny's Podcast
source_date: 2026-04-28
captured_date: 2026-05-01
domain: [ai-native, product, engineering]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: framework
score: { originality: 5, specificity: 5, evidence: 4, transferability: 5, source: 4 }
tier: A
related: [ins_transparency-in-uncertainty]
raw_ref: raw/podcasts/aishwarya-naresh-reganti-kiriti-badam--ai-product-design-non-determinism--2026-04-28.md
---

# Continuous Calibration, Continuous Development (CCCD) is the operating loop for AI products

## Claim
AI products break the classical ship-measure-iterate loop because outputs are non-deterministic. The replacement is CCCD: humans give examples or feedback, the model (or a separate calibration layer) adjusts behavior, humans re-evaluate. Adjustments happen via prompt engineering, retrieval augmentation, behavior guardrails, and output filtering — not weekly base-model fine-tuning. The loop tightens over time.

## Mechanism
A non-deterministic system makes every shipped change a moving target. Without continuous calibration, the team can't tell whether an outcome change came from the feature or from model drift. CCCD treats calibration as the primary work and development as the secondary follow-on. The two run in parallel rather than sequentially. Algorithms handle breadth; humans calibrate intent. The loop produces a behavioral model that improves continuously and is hard for competitors to copy because the calibration is proprietary.

## Conditions
Holds when:
- The team has the operating discipline to run weekly calibration cycles.
- Production evals are wired and trusted — see related card.

Fails when:
- The team treats calibration as a special-project mode instead of default operating mode.
- Calibration accidentally trains a *negative* feedback loop (poor outputs → low engagement → sparse signal → worse outputs). Aishwarya warns about this explicitly.

## Evidence
> "You need to be intentional about closing the loop. Don't accidentally build a negative flywheel."

The framework: humans provide examples or feedback on model outputs; the model (or a separate calibration layer) adjusts behavior; humans evaluate the next round. Loop tightens over time. Not fine-tuning the base model every week — smaller, safer adjustments.

— Aishwarya Naresh Reganti and Kiriti Badam on Lenny's Podcast, 2026-04-28

## Signals
- The team produces measurable behavior change week-over-week from calibration alone.
- Production evals run weekly, not just on launch.
- Failure modes get traced to specific calibration gaps, not generic "model issues."

## Counter-evidence
Cat Wu's "100% automation rule" pushes the opposite direction: an automation that isn't 100% reliable isn't an automation. CCCD assumes living with non-determinism is correct; Cat's rule assumes perfecting it is correct. Both are right in different domains; CCCD fits open-ended generative tasks, 100% rules fit deterministic automation.

## Cross-references
- `ins_transparency-in-uncertainty` — the user-facing design pattern that pairs with CCCD
