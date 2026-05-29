---
id: pb_claim-verify-gate
title: Gate every public claim against the source that backs it
maintained_by: codex maintainers
captured_date: 2026-05-01
domain: [ai-native-gtm, substrate, anti-fabrication]
uses_cards: [ins_evals-are-data-analysis-on-llm-apps, ins_llm-as-judge-binary-not-likert]
originating_operators: [hamel-husain]
secondary_sources:
  - flywheel/skills/claim-verify/SKILL.md
  - flywheel/skills/substrate-cite-check/SKILL.md
---

# Gate every public claim against the source that backs it

A two-gate substrate-fidelity defense for any system that grounds external assets in citable knowledge. Gate 6 (cite-check) catches claims with no cite. Gate 7 (claim-verify) catches claims cited to a path that does not actually contain the claimed value. Together they close the substrate-fidelity concern that pure citation existence misses.

Source synthesis: anti-fabrication ladder; evidence ladder (verified / self-reported / contextual / indirect / direct); Wikipedia AI Cleanup field guide; Hamel Husain + Shreya Shankar on per-claim factuality eval (`ins_evals-are-data-analysis-on-llm-apps`, `ins_llm-as-judge-binary-not-likert`).

## When to use

- Any external-facing asset that quotes specific numbers, dates, named entities, or source-system IDs.
- Any positioning, battle card, or canonical-statement file before promotion.
- High-stakes briefs (executive Q&A, board, customer-facing comparison).

## How the two gates compose

- **Gate 6, substrate-cite-check.** "Is there a substrate citation near this claim?" Catches uncited claims.
- **Gate 7, claim-verify.** "Does the cited substrate actually support the claim?" Catches plausible-but-wrong citations.

Together: "the claim is cited AND the cite is plausibly true."

## Process

1. Parse the asset for (claim, nearest-substrate-path) pairs.
2. For each pair, open the substrate file at the cited path.
3. Check if the claim's specific value appears in the substrate.
4. If yes → verified. If no → flag as **CITE-VALUE-MISMATCH**.

## What counts as "value appears in substrate"

- Exact value match (`$1,047` matches `$1047` or `1,047`).
- Within 5% tolerance for percentages and quantity units (minor rounding).
- Source-system ID verbatim (e.g., `HubSpot dashboard 138849319` must appear).
- Exact match required for dates and named entities.

## What does NOT count

- A claim cited to a substrate file that does not contain the specific value, even if plausible.
- A claim whose value contradicts substrate (asset says 70%; substrate says 65.1%, outside the 5% tolerance, flagged).
- A claim citing a path that does not exist (Gate 6 catches earlier).

## Output

Per-mismatch report: line, claim, cited path, what substrate actually says. PASS / FAIL summary. Exit code 0 if all cited claims verify; 1 if mismatches detected; 2 on file/config error.

## Exit policy

Zero tolerance default. Substrate-fidelity failures cannot be averaged away.

## Composes with

- Cite-check (run first to catch uncited claims).
- Voice enforce + humanizer (orthogonal: voice and truth are independent gates).
- Preflight composite gate (currently advisory because the proximity heuristic that maps claim → cite picks the nearest path, which may not be the semantic match; false-positive rate is non-trivial).

## Worked example

A canonical positioning statement claims competitor X has "no voice agent" and cites a battle-card file. Claim-verify opens the cited card, searches for "no voice agent", not found. Searches "voice agent" within 30 chars of "no", finds "AI for post-call" instead. Flags CITE-VALUE-MISMATCH: substrate says competitor has post-call AI, not "no voice agent." The error would otherwise have shipped externally.

## Common failure modes

- "PASS at cite-check" interpreted as "VERIFIED-TRUE." Cited ≠ true.
- Round-number claims with no source-system ID anywhere in substrate.
- Substrate-evolution drift: cite was true 90 days ago, substrate has been refreshed, asset still claims the old value.
- Operator pressure to "just approve it", the gate's whole purpose is to be uncomfortable when the claim is unsupported.
- Treating Gate 7 as a fact-checker. It is a narrow substrate-fidelity check, does the claim match the cite, not a full fact pipeline.

## Calibration signal

Track under taste-type "substrate-fidelity-truth." Brier signal: post-publish corrections needed where substrate did not support the claim.
