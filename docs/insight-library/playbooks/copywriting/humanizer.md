---
id: pb_humanizer
title: Strip the AI-writing tells out of any draft
maintained_by: codex maintainers
captured_date: 2026-05-01
depth: full
domain: [copywriting, ai-native-gtm, voice]
uses_cards: [ins_handley-voice-as-moat-against-ai, ins_madeleine-work-ai-strips-humanity-from-marketing, ins_shivangi-gautam-word-salad-critique, ins_nicolas-cole-voc-mirroring-beats-paraphrase, ins_nicolas-cole-voc-source-llm-assembly, ins_schafer-three-pass-writing-process, ins_sourav-mohanty-ai-quotes-require-constraints-to-be-trustworthy, ins_pierri-ai-positioning-needs-human-checkpoints, ins_evals-are-data-analysis-on-llm-apps, ins_llm-as-judge-binary-not-likert, ins_aishwarya-hariharan-claude-voice-paradox, ins_linde-hasker-human-insight-over-ai]
uses_patterns: [pat_copywriting-craft-fundamentals, pat_ai-defensibility-comes-from-non-ai, pat_verification-as-human-job, pat_execution-cheap-judgement-scarce, pat_eval-as-data-analysis]
originating_operators: [ann-handley, madeleine-work, nicolas-cole, cole-schafer, anthony-pierri, hamel-husain, sourav-mohanty, shivangi-gautam, aishwarya-hariharan, linde-hasker]
---

# Strip the AI-writing tells out of any draft

A humanizer audits a draft against the full anti-AI-writing canon, then rewrites the failing parts so the output reads like a sharp human typed it. Quality bar: a reader who did not write it cannot tell a model touched it, and the verbatim claims still trace to a source. Detection without rewrite leaves an operator a fail report and a manual fix. A rewrite without a verification pass swaps one set of tells for fabricated facts. The play earns its keep only when both run in one pass.

The reason this matters is structural, not stylistic. As models commoditize competent prose, the scarce thing is prose that sounds like one specific human. Voice is the moat that survives an AI-flooded feed. `pat_ai-defensibility-comes-from-non-ai` `pat_copywriting-craft-fundamentals`

> "the only defensible advantage is a distinctive, authentic voice that sounds like it could only come from one source"
> · Ann Handley, Everybody Writes, 2024
> `ins_handley-voice-as-moat-against-ai`

## When to use

- Any customer-facing draft before publish: landing page, email, blog, ad, video script.
- Especially before LLM-drafted content the team will sign its name to.
- When a piece reads competent but flat, and nobody can say why.
- When a reviewer says "this sounds like AI" and you need a checklist, not a vibe.
- Before sending raw drafts up the chain, where polish without personality reads as effort to hide that nobody thought hard.

## How to use

### 1. Load the brand-voice canon before you touch a word.

The first move is to refuse to start without the voice source. A humanizer that rewrites against no canon does not remove AI voice. It invents a new one. The rewrite layer needs a specific human's word habits, rhythm, and point of view to inherit, or it produces a different flavor of generic. `pat_ai-defensibility-comes-from-non-ai`

Voice is not decoration you add at the end. It is the thing AI cannot clone, because it comes from one person's lived experience and a specific way of seeing. Pull the canon: prior pieces by the named voice, the kill-list, the cadence rules, the words this brand never uses. If that substrate is missing or stale, stop. Refuse to rewrite. You would be guessing.

> I want the ugly first draft.
> · Madeleine Work, LinkedIn, 2026-04-10
> `ins_madeleine-work-ai-strips-humanity-from-marketing`

Madeleine's point is the operating principle for this whole play. AI takes the essence of a message, polishes it, and strips out the humanity. The raw take is the asset. The humanizer's job is to keep the rough human edge while removing the machine residue, not to sand both off. `ins_linde-hasker-human-insight-over-ai`

### 2. Run rule-pack detection. Flag every violation with line, match, and fix hint.

Detection is layer one. Vale-style rule packs scan the draft and flag each violation with its line number, the matched string, a severity, and a fix hint. This is mechanical work a tool does well, and it is where you start, the same way an eval shop starts with data analysis on real output, not with a theory of what could be wrong. `pat_eval-as-data-analysis`

> "It really doesn't have to be scary or unapproachable. It really is, at its core, data analytics on your LLM application."
> · Hamel Husain & Shreya Shankar, Lenny's Podcast, 2026-04-28
> `ins_evals-are-data-analysis-on-llm-apps`

The eleven rule packs, from most to least severe:

| Rule pack | Severity | What it catches |
|---|---|---|
| NegativeParallelism | error (the big one) | "It's not X, it's Y." Every model produces dozens per response. |
| BannedVocabulary | error | Dead AI vocabulary and brand words the team never uses. |
| KillList | error | The brand's banned-word list: the inflated verbs and consultant nouns the team has sworn off. |
| ThroatClearing | error | "It's worth noting," "Furthermore," openers that say nothing. |
| MetaCommentary | error | "In conclusion," "It's worth noting that…" |
| ChatbotArtifacts | error | "Certainly!", "Great question!", "I'd be happy to…" |
| DeadPhrases | error | "tapestry," "navigate the landscape," "in today's fast-paced world." |
| WeakVerbs | warning | "to be" where a real verb does the work. |
| AbstractNouns | warning | Nouns that hide the thing actually happening. |
| Cliches | warning | The AI-fingerprint canon. |
| ParticiplePhrases | warning | Overused construction in machine prose. |

Negative parallelism is the big one because it is the single most reliable AI tell, and it survives a casual read. Detection alone catches the gap. It does not close it.

### 3. Score each failure mode binary. The output either has the tell or it does not.

Do not grade voice on a 1-to-5 scale. A Likert score hides the decision and produces an average that looks reasonable while the worst cases slip through. Each rule pack is a binary judge: the kill-list word is present or absent, the sentence is negative-parallel or it is not. Build narrow checks per failure mode, validate them against human-labeled drafts, and look at the cases where the check and the human disagree. `pat_verification-as-human-job`

> "1-2-3-4-5 is a weasel way of not making a decision."
> · Hamel Husain & Shreya Shankar, Lenny's Podcast, 2026-04-28
> `ins_llm-as-judge-binary-not-likert`

The same card carries the consequence of getting this wrong:

> "When people lose trust in your evals, they lose trust in you."
> · Hamel Husain & Shreya Shankar, Lenny's Podcast, 2026-04-28
> `ins_llm-as-judge-binary-not-likert`

A humanizer that flags false positives gets ignored inside a week. Keep the judges few, narrow, and binary, and retire a pack once the model stops producing that tell.

### 4. Rewrite the failing spans with the voice canon and the surrounding paragraph loaded.

Layer two is the semantic rewrite. For each flagged span, feed the model three things: the surrounding paragraph, the specific violation, and the voice DNA. Ask for one replacement sentence or clause that fixes the violation, preserves the underlying claim, and matches the asset's voice. Write the result to a sibling file. Never overwrite the source.

This is where the three-pass discipline pays off. The structural pass set the argument. The rewrite is the voice pass: same claim, this brand's mouth. `ins_schafer-three-pass-writing-process`

> "Pass 1 identifies the pain/pleasure polarity and crafts the headline. Pass 2 injects the brand's distinctive voice and personality. Pass 3 integrates, ensuring pain clarity and personality are in harmony, cutting anything that entertains but does not persuade."
> · Cole Schafer, Sticky Notes, 2024
> `ins_schafer-three-pass-writing-process`

The rewrite mirrors how the best conversion copy gets made. It is assembled from real human language, not composed from a brief. The model recognizes and arranges. It does not author. `ins_nicolas-cole-voc-source-llm-assembly`

> "The world's best conversion copywriters don't write copy. They steal it."
> · Nicolas Cole, Build and Launch a VOC Landing Page, 2026-05-07
> `ins_nicolas-cole-voc-source-llm-assembly`

When the source draft was built from voice-of-customer data, hold the verbatim phrases. A summarizer smooths the exact words into clean themes, and the clean theme is a description. The phrase is the hook. Descriptions do not convert. `ins_nicolas-cole-voc-mirroring-beats-paraphrase`

> "Resonance comes from mirroring, not paraphrase."
> · Nicolas Cole, Build and Launch a VOC Landing Page, 2026-05-07
> `ins_nicolas-cole-voc-mirroring-beats-paraphrase`

### 5. Protect every verbatim quote and cited claim from the rewrite.

The rewrite layer wants to smooth everything, including the things that must stay exact. Quarantine them first. An operator quote is immutable: never strip its em dashes, never paraphrase it, never stitch two turns into one. The same rule governs any factual claim that traces to a source card.

This is the failure Sourav names. When you ask AI for "verbatim," it fills gaps with its own judgment, trims hedges, and stitches sentences, producing output that looks sourced but is fabricated. `ins_sourav-mohanty-ai-quotes-require-constraints-to-be-trustworthy` Lock the constraints: one uninterrupted turn only, no merging, no cleanup, preserve the hedges and fillers, keep the speaker label and context. A humanizer that rewrites inside a quote has manufactured a fake quote.

### 6. Verify the rewrite against the source. Run voice gates before truth gates.

Sequencing matters. Run the voice rewrite first, then verify facts, not the other way around. If you verify first, the rewrite re-opens claims you already checked. Once the spans are rewritten, every generated sentence gets checked against the source it came from, by a human, before it enters the document. `pat_verification-as-human-job`

The risk scales with how thin and contradictory the inputs are. Run a model across many loose inputs with no checkpoint and it stops analyzing and starts inventing. `pat_execution-cheap-judgement-scarce`

> "AI needs A LOT of help to do a good job (way more than the average person realizes)."
> · Anthony Pierri, AI needs A LOT of help to do a good job, 2026-05-10
> `ins_pierri-ai-positioning-needs-human-checkpoints`

The checkpoint is not optional and it is not automatable. The model compresses the production. It does not compress the judgment about whether the rewritten line is true and whether it sounds like the brand. `ins_linde-hasker-human-insight-over-ai`

### 7. Run the signature pass. Ask the model what still gives it away.

After detection and rewrite, ask one question: what makes this obviously AI generated? Record the answer. If it names a tell the rule packs missed, add that tell to the pack queue. This is the loop that keeps the play current. Every new model variant produces new tells, and a static rule set goes stale the way a static battlecard does.

Watch for the paradox that names the real failure. If you write only through a model, you have no samples of your own voice left to feed it. You have become the thing you were trying to hide. The signature pass is the discipline that keeps a human in the draft. `ins_aishwarya-hariharan-claude-voice-paradox`

### 8. Ship the deliverables and route the asset to the right gate.

Produce three artifacts: a per-violation table (rule, severity, line, match, why, fix hint), a one-line summary (PASS, or FAIL with the error and warning counts), and a sibling file with the rewrites applied span by span when the rewrite flag is on.

Then place the play in the stack. A humanizer is the editor, not the gate. Voice-enforce is the gate that blocks; the humanizer produces the reviewable rewrite. Internal-spec assets, raw notes, and intel files bypass automatically, because they were never meant to read like polished prose. The point is not zero AI involvement. The point is that the published page does not read like a machine wrote it.

## Check your work

- Brand-voice canon was loaded before any rewrite. If it was missing or stale, the play stopped.
- Every rule pack ran. Negative parallelism specifically was checked, not assumed clean.
- Each failure mode scored binary, present or absent, not on a 1-to-5 scale.
- Every verbatim operator quote is byte-for-byte intact: em dashes kept, no paraphrase, no stitching.
- Every rewritten sentence was verified against its source by a human before entering the document.
- Voice gates ran before truth gates, so substrate-cited claims were not over-rewritten.
- The signature pass ran and any new tells went into the rule-pack queue.
- The rewrite kept the human roughness and removed only the machine residue.

## What goes wrong

- **Rewriting with no voice canon loaded.** The rewrite invents a voice instead of inheriting one, and the output drifts into a different generic. `pat_ai-defensibility-comes-from-non-ai`
- **Treating the rule packs as static.** Every model variant produces new tells. Without the signature-pass feedback loop, the packs go stale. `pat_verification-as-human-job`
- **Auto-merging rewrites without human review.** The model compresses production, not judgment. A merge with no checkpoint ships fabrication that reads clean. `pat_execution-cheap-judgement-scarce`
- **Running the humanizer after the truth gate.** Voice gates must run before truth gates, or the rewrite re-opens claims you already verified.
- **Stopping at detection.** A fail report with no rewrite leaves the operator to fix by hand, which is the gate's job, not the editor's.
- **Smoothing the verbatim phrase.** A summarizer turns the exact buyer words into a clean theme, and the copy stops resonating. Mirror the words. `ins_nicolas-cole-voc-mirroring-beats-paraphrase`
- **Fabricating quotes under the banner of "verbatim."** Asking AI for a verbatim quote without locked constraints produces stitched, hedge-trimmed fakes that look sourced. `ins_sourav-mohanty-ai-quotes-require-constraints-to-be-trustworthy`
- **Polishing the humanity out.** The fix removes machine residue, not the rough human edge. The raw take was the asset. `ins_madeleine-work-ai-strips-humanity-from-marketing`
- **Grading voice on a Likert scale.** A 1-to-5 average hides the worst sentences and erodes trust in the whole audit. `ins_llm-as-judge-binary-not-likert`

## What you get

1. Per-violation table: rule, severity, line, match, why, and fix hint, one row per finding.
2. Single-line summary: PASS, or FAIL with N errors and M warnings.
3. Sibling file `<asset>.humanized.md` with the rewrites applied span by span.
4. A protected-spans list: every verbatim quote and cited claim quarantined from the rewrite.
5. A verification log: each rewritten sentence checked against its source by a human.
6. A signature-pass note: what still reads as AI, fed back into the rule-pack queue.
7. An exit code for the stack: 0 clean, 1 error-level violations found, 2 file or tool not available.
