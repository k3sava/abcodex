# Morning brief — 2026-05-01

Schema.org 30.0 quietly shipped the structured-data primitives that the AEO
work everyone is converging on actually needs. New `CompoundPriceSpecification`,
`Credential`, `Error`, plus equivalence annotations to GS1 and Open Graph.
JustCall is not subscribed to the release feed. Today is the right day to fix
that, because the rest of the brief lines up around the same shift: relevance
engineering needs concrete entity tagging, not more long-form pages.

Note up front, this is the fourth digest fire for today. The idempotency guard
is still not in place. Self-evolution section escalates the fix.

## What I found and looked into

[Schema.org 30.0](https://schema.org/docs/releases.html) (released 2026-03-19)
introduced `Credential`, `Error`, `CompoundPriceSpecification`, plus
`floorLevel` on Residence/LocalBusiness and `jobDuration` on JobPosting.
Equivalence annotations now map nodes to GS1, Dublin Core, and Open Graph,
which makes the same JSON-LD legible to more LLM crawlers without rewriting.
The `Quantity` hierarchy moved off `Intangible` onto `DataType`. For JustCall
this is a direct AEO opening on the pricing page (`CompoundPriceSpecification`
fits the per-seat plus per-minute hybrid) and the careers page (`jobDuration`).
*Installing as a watcher; artifact + skill draft below.*

[Maja Voje's AEO piece](https://knowledge.gtmstrategist.com/p/aeo-how-to-make-ai-recommend-your-product)
(2026-04-17) reframes Answer Engine Optimization as a GTM capability, not a
content side-project. The line operators are reposting: "In SEO, you compete
for rankings. In AEO, you compete for mentions." The closer is sharper, "AEO
isn't a content thing or an SEO experiment. It's a GTM capability." This is
the wedge a PMM can use to absorb AEO before SEO or growth eat the surface.
Reads as backing voice for the schema-watcher work and for any clearPMM exit
narrative on AEO ownership. *Folded into the schema-watcher artifact framing.*

[Ethan Mollick on GPT-5.5](https://www.oneusefulthing.org/p/sign-of-the-future-gpt-55)
(2026-04-23) pushes back on the model-progress-is-tapering reading. His
operating cadence: "Every few months a new model arrives... something that was
impossible becomes easy, while the size of the leaps grows each new release
cycle." Honest concession on the rough edges in long-form fiction. The
implication for any flywheel commitment is to keep workflows pinned to
capabilities you can re-baseline quarterly, not to one model snapshot.
*Watching; supports the case for the model-bake-off task already on the queue.*

## What I installed and tested

Built a fresh `.venv` in this sandbox and installed `rdflib==7.6.0` (32MB),
then fetched
`https://schema.org/version/latest/schemaorg-current-https.jsonld`. Total
download 1.2MB, 3219 nodes, 1.08s end-to-end on the Mac Mini. Probed the six
30.0 additions called out in the release notes (`Credential`, `Error`,
`floorLevel`, `jobDuration`, `errorCode`, `CompoundPriceSpecification`). Six
out of six resolve in the current vocab. The script lives at
[test-schema-30.py](test-schema-30.py) and is small enough to lift directly
into a scheduler task. Skipping `pyld` for now (Python 3.9 incompat in the
sandbox venv); `rdflib` alone is enough for a diff-and-extract loop. Next step
is a snapshot pin in `flywheel/data/aeo/schema-snapshots/schema-30.json` and a
weekly Haiku-only delta job.

## From the operators

Two items earn space here today, both narrow.

[Aakash Gupta on Claude Design](https://www.news.aakashg.com/p/claude-design)
(2026-04-24) calls it "the tool most PMs will be using in 6 months" and tells
readers to start now. The frame is the PM-to-design handoff collapsing the way
PM-to-engineer collapsed two years ago. The implicit warning is louder than
the upbeat framing, PMs who keep outsourcing their first artifact will compete
with PMs who arrive at the design review with a working prototype. The
AI-native version of the workflow: every PRD ships with a Claude Design
prototype attached, and the designer's first job is critique not creation.
Human checkpoint, design lead approves the visual system before any user sees
the prototype. For Kesava this is a clearPMM portfolio addition, not a JustCall
move. *Worth a 1-day spike on the next pickup feature spec.*

[Chris Orlob's competency analytics piece](https://www.pclub.io/blog/sales-competency-analytics)
(2026-04-17) reframes sales coaching around skill-level data instead of
activity dashboards. Rohit Shah's quote in the body is the load-bearing one,
"Revenue rarely improves from generic sales training, it improves when training
targets the exact decision friction blocking deals." The AI-native version
listens to every recorded JustCall buyer call, scores reps on a fixed
competency rubric (discovery quality, multi-threading, objection handling,
next-step specificity), then routes a personalized coaching plan to each
manager. Sourav as the operator checkpoint deciding which gaps trigger an
actual coaching cycle, since the rubric is downstream of his enablement model.
The Commons skills `verbatim-extractor` and `usage-theme-extractor` already
do half of the data plumbing. *Worth a follow-up artifact next run.*

## What I improved about myself

Two proposals, both grounded in observations from this same run.

[proposed-skill-schema-delta-aeo.md](proposed-skill-schema-delta-aeo.md) is
the Commons skill spec that operationalizes the schema-watcher built today.
Inputs, outputs, cadence, cost ceiling (Haiku only), and named human
checkpoints (Sourav ships markup, Reshma cross-checks narrative, Krishna
reconciles pricing math). The companion
[artifact-schema-watcher-workflow.md](artifact-schema-watcher-workflow.md)
sketches the routing for the weekly brief and names the first test target
(JustCall pricing page, `CompoundPriceSpecification`).

[proposed-prompt-change.md](proposed-prompt-change.md) escalates a fix the
11:20 run already drafted that the 11:28 fire just proved is not yet in place.
Today saw ten digest fires (six at 03:00, four at 11:00) for the same calendar
date. `goals.yaml` already declares the idempotency policy. The prompt-level
guard is a backstop; the load-bearing fix is in `scheduler/ai-digest.ts` and
should short-circuit before any LLM call when `2026-05-01.md` already exists at
the canonical save path. The new draft proposes both layers and an acceptance
test, so a second-run-in-60-seconds smoke test confirms the fix.

## For your call

The schema-watcher is the only Tier A item from this run that needs a Kesava
decision: ship the scheduler task this week as a Tier B wire-up of the artifact
above, or hold for a flywheel sprint. Either way, the snapshot file should land
under `flywheel/data/aeo/schema-snapshots/` so we have a baseline to diff from.

The Aakash Claude Design read is closer to a clearPMM portfolio prompt than a
JustCall move. Decision: spike a Claude Design prototype against one pickup
feature next week and add the artifact to the portfolio, or skip.

The Chris Orlob competency rubric is on the radar but unbuilt. Decision: ask
miniu to draft the rubric and the Commons skill spec next run, or hold until
Sourav is ready to wire it.

## Skipped

Maja Voje's 200-operator Claude GTM Pulse, Tomasz Tunguz on AI commoditization,
and Rand Fishkin on zero-click ceiling were all already covered in earlier
runs today and add no new signal here. Schema.org's full 30.0 release notes
include EU Digital Product Passport examples, which do not touch a JustCall
surface and stayed out of the artifact.

---

_Reply with feedback lines to update miniu's verdicts. One per line:_
_+<title fragment> = shipped/used. -<title fragment> = dismiss permanently._
_later <title fragment> = snooze 30d. ?<title fragment> = deepen next run._