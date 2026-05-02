# Morning brief — 2026-04-26

The advisor tool went public-beta this month. It collapses the
ensemble-of-3 pattern miniu uses for stability into a single executor run
that consults Opus mid-stream. That is the most concrete change to your
agent stack today. Aleyda Solis published Google's March 2026 core update
analysis and confirmed the AI-search shift is now measurable in domain
rankings. Both feed the same conclusion: the moat now is positioning that
holds up when an LLM, not a SERP, mediates discovery.

## What I found and looked into

Anthropic's [advisor tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/advisor-tool)
went beta with header `advisor-tool-2026-03-01`. Sonnet executor calls
Opus mid-generation for a 400-700 token plan, then continues at Sonnet
rates. Valid pairs: Haiku/Sonnet/Opus 4.6 → Opus 4.7 advisor. The shape
matches miniu's evolution-loop workload exactly: long-horizon, mostly
mechanical, occasional planning bottleneck. Your 2026-04-24 ensemble-of-3
decision was the right call given API constraints at the time, but the
advisor pattern is the cleaner replacement now that it exists.
*Drafted a sandboxed scheduler experiment, see proposed-task file below.*

Aleyda Solis published her [Google March 2026 core update analysis](https://www.aleydasolis.com/en/search-engine-optimization/google-march-core-update-2026/)
covering the March 26 to April 11 window. Her finding: aggregator and
quick-answer utility sites dropped, destination brands and specialist
sites gained. She frames it as a one-line rule for the AI-search era:
"crawlability shapes everything." For pickup and the JustCall vertical
pages, the implication is that thin programmatic pages are now
actively penalized; one strong canonical page per use case beats ten
shallow ones. *Watching, but it sharpens the pickup content plan.*

[April Dunford on LinkedIn](https://www.linkedin.com/in/aprildunford)
has been pushing two ideas this month worth holding: stop positioning
against ghost competitors customers don't actually consider, and the
"VC pitch is where you'll be, sales pitch is why you win today" split.
Direct quote from her recent thread: "Your sales team knows months before
anyone else when a position is failing." That is the loop miniu should be
building toward, not toward more dashboards. The pickup messaging review
should ask Krishna which alternative is winning *this quarter's* deals
before any rewrite. *Folding into the FletchPMM artifact below.*

[Mike King at iPullRank](https://ipullrank.com/sel-search-marketer-of-the-year-2025)
is keynoting Zero Click SF on April 8. His "Relevance Engineering" frame
treats GEO as an information-retrieval engineering problem, not a content
problem. The frame matters because it tells you where AI-native PMM
investment compounds: entity graphs, structured chunking, citation worth.
Nothing to ship today, but if you build a single AEO skill in Commons
this quarter, it should be entity-first, not keyword-first. *Watching;
will revisit when his Zero Click SF deck publishes.*

## What I installed and tested

I created a `.venv` in the sandbox and installed the Anthropic Python SDK
(`anthropic==0.97.0`) to verify the advisor-tool surface. `client.beta`
exposes the messages API, `client.messages.count_tokens` is available,
and the `advisor_20260301` tool type accepts the documented payload shape.
The full advisor-tool docs landed clean (5.6 KB markdown). Wire-up point
is `miniu/evolution/consolidate.js` — that is where the ensemble-of-3
runs today and where the executor + advisor swap would slot. Recommended
next step: run the proposed `advisor-experiment` scheduler task for 4
weeks against the consolidate workload, then compare cost-per-stable-decision
to the ensemble baseline before any live swap.

## From the operators

[Anthony Pierri's 7-step homepage framework](https://www.earlynode.com/newsletters/the-7-step-framework-for-writing-killer-homepage-messaging-with-anthony-pierri)
is the cleanest operationalization of FletchPMM's teardowns. His thesis,
paraphrased from the EarlyNode interview: most B2B homepages lead with
vision; the buyer needs use case, alternative, and result in five seconds.
I produced an AI-native version of the full 7 steps, applied to JustCall,
in `artifact-fletch-homepage-justcall.md`. The split is clean: AI drafts
variants from sales-call transcripts and review snippets; humans hold
the four highest-leverage decisions. Reshma owns use-case selection,
Sourav confirms ICP cluster, Krishna names which alternative is actually
winning deals this quarter, you own the differentiated-value pick and
voice approval. The Chalk-ready prompt is in the artifact and would slot
into a new Commons skill draft (see `proposed-skill-fletch-homepage-rewrite.md`).
First test target is pickup-opal.vercel.app; vertical pages second.

April Dunford and Anthony Pierri converge on the same operator move:
sales-call truth is the input that matters, every other input is noise.
The AI-native version of this is not "feed all 500 transcripts to an LLM
and ask for themes." It is: stratify by won/lost, take the most recent
20 of each, extract the 5 strongest signals per call, then let a human
pattern-match. AI does the volume; humans do the pattern. That split is
encoded in the FletchPMM artifact's reviewer checklist.

## What I improved about myself

Two drafts in sandbox. First, `proposed-task-advisor-tool-experiment.md`
specifies a new `advisor-experiment` scheduler handler that runs the
consolidate workload twice (ensemble vs. advisor), captures cost and
stability, and writes results to `data/ai-digest/experiments/`. Why now:
the 2026-04-24 ensemble decision left an open question, and the advisor
beta closed the API gap that forced the workaround. Second,
`proposed-skill-fletch-homepage-rewrite.md` codifies the FletchPMM artifact
as a Commons skill so Reshma's April 22 ask for repeatable homepage
review has a real home. Both are drafts; you decide ship vs. shelve.

The deeper gap I noticed: miniu has no scheduled task that ingests
named-operator content into Commons or wiki. Today's digest pulled from
Dunford, Pierri, Solis, King by hand. A weekly `operator-pulse` handler
that hits each follow_list operator's RSS or LinkedIn and files
1-paragraph extracts to `wiki/raw/operators/<operator>/` would mean next
week's digest starts with primary-source quotes already on disk. Not
drafted today; flag it as the next self-evolution candidate.

## For your call

Memory for Claude Managed Agents and the SDK `exclude_dynamic_sections`
field both shipped in this window and both are still in your inbox from
yesterday's verdicts. Neither one needs a decision today, but the
SDK option is the higher-leverage one. Moving the working-dir, memory,
and git sections out of the cached prefix turns the cold cache problem
into a warm cache problem at zero risk if you sandbox the test first.

The advisor tool is the one Tier B item that does need a call this week.
The proposed scheduler task spec is sandboxed so nothing changes until
you say so. The decision is whether to fund 4 weeks of metered Anthropic
API calls to settle the ensemble-vs-advisor question, or stay on the
ensemble pattern and revisit when GA pricing lands.

The `operator-pulse` scheduler handler I flagged in the self-evolution
section is a small lift, maybe a half day. If you want it, I'll draft
the spec next run.

## Skipped

Skipped Josh Braun's recent posts (republished older 4-T framework,
nothing new this week), Azure DevOps MCP April update (not your stack,
already noted in priors), and a fresh wave of "humanize AI text" vendor
listicles (still SEO chum, `concepts/operator-voice.md` covers the
substance better). Skipped MLX 0.31.2 release notes too: the M5 Neural
Accelerator support is real but you don't have an M5, and the change
doesn't affect oolala's current pipeline.