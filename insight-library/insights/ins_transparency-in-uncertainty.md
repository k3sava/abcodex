---
id: ins_transparency-in-uncertainty
operator: Aishwarya Naresh Reganti
operator_role: AI engineer / researcher
source_url: https://www.lennysnewsletter.com/podcast
source_type: podcast
source_title: Aishwarya Naresh Reganti and Kiriti Badam on AI product design — Lenny's Podcast
source_date: 2026-04-28
captured_date: 2026-05-01
domain: [ai-native, design-ux, product]
lifecycle: [ai-workflow, onboarding-activation]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 3, transferability: 5, source: 4 }
tier: B
related: [ins_cccd-continuous-calibration]
raw_ref: raw/podcasts/aishwarya-naresh-reganti-kiriti-badam--ai-product-design-non-determinism--2026-04-28.md
---

# Show model uncertainty in the UI; opaque confidence destroys trust

## Claim
Most AI products hide model uncertainty from users to look more authoritative. This is a miss. Showing confidence scores, multiple hypotheses, or honest "I'm not sure" responses builds trust and surfaces where the model is weak. Users learn to distrust opaque confidence; they learn to trust transparent uncertainty.

## Mechanism
Hidden uncertainty puts the user in a position where they discover failure cases unpredictably and lose trust catastrophically. Transparent uncertainty primes the user to expect calibrated reliability — sometimes high, sometimes low, but legible — and gives them tools to adjust their workflow accordingly. A user with confidence scores learns to verify low-confidence outputs and trust high-confidence ones; a user with hidden confidence learns to verify everything or nothing.

## Conditions
Holds when:
- The model can produce calibrated confidence (not all do).
- The UI surface can present uncertainty without overwhelming the user.

Fails when:
- The "confidence" is uncalibrated. Surfacing a meaningless number is worse than surfacing nothing.
- The user audience can't act on uncertainty (high-volume consumer surfaces with novice users). There, hiding is sometimes correct.

## Evidence
> "Most teams hide model uncertainty from users. This is a miss. Showing uncertainty (confidence scores, multiple hypotheses, 'I'm not sure') builds trust and surfaces where the model is weak."

Example given: an AI recruiter that says "73% confidence this is a match, but I've flagged edge cases" is more useful than one that just predicts pass/fail.

— Aishwarya Naresh Reganti and Kiriti Badam on Lenny's Podcast, 2026-04-28

## Signals
- Users self-report higher trust in the product despite seeing more "I'm not sure" responses.
- Workflows include explicit verify-or-trust decision points based on confidence.
- Competitors with hidden confidence lose market share when their failure modes get publicized.

## Counter-evidence
Some categories actively reward authoritative-feeling AI (consumer chat, casual content). Adding uncertainty there costs engagement without producing trust gains. The pattern is most powerful in high-stakes professional tools (medical, legal, hiring), least powerful in casual consumer.

## Cross-references
- `ins_cccd-continuous-calibration` — the operating loop that produces calibrated confidence
