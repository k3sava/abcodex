# Morning brief — 2026-05-02

Three operators converged this week on one finding: AEO is decided off your domain. Brendan Hufford ([3S Strategy](https://growthsprints.co/3s-strategy/)), Kieran Flanagan with Aja Frost and Beeri Amiel ([MATG Ep. 417](https://www.podbean.com/podcast-detail/n65dt-25ebd1/Marketing-Against-The-Grain-Podcast)), and Eli Schwartz ([AEO is not SEO 2.0](https://www.productledseo.com/p/aeo-is-not-seo-20)) all argue the same thing from different angles: keyword tools lag reality, assistants pull citations from YouTube/Reddit/LinkedIn rather than your site, and "LLMs learn about your brand from the world." Your existing on-page AEO work (relevance engineering, schema delta) is necessary but no longer sufficient; the missing surface is third-party mention density.

## What I found and looked into

LangChain shipped per-model harness profiles in Deep Agents this week. Vivek Trivedy and Mason Daugherty's [writeup](https://www.langchain.com/blog/tuning-deep-agents-different-models) puts numbers on it: tuning prompt scaffolding, tool descriptions, and middleware to vendor-specific guidance buys 10-20 point gains per model. Today miniu's scheduler runs one prompt regardless of which model fires it. This is the most direct path to better cost-per-stable-decision miniu has seen this month. *Drafting a one-time bake-off scheduler task; live wire-up Tier B.*

Eric Seufert read Meta's Q1 print as a clean signal: ad revenue 32.9% YoY to $55B with DAP only up 3.8%, so AI on the ranking side is doing the work, not user growth. The structural news inside the print is [Meta's MCP endpoints for ad-buying agents](https://mobiledevmemo.com/meta-q1-2026-earnings-33-ad-revenue-growth-mcp-support-for-ad-buying-agents/), 8M advertisers already on its generative creative tools. For kami studio, this is the moment to plan an in-house creative-test loop against Meta's API for the Innie and Pemberley launches; smaller advertisers are the early winners by Seufert's read. *Watching for connector docs to publish; spec a kami-side experiment when they do.*

Anthropic announced [Claude for Creative Work](https://www.anthropic.com/news/claude-for-creative-work) with connectors into Adobe Creative Cloud, Blender, Autodesk Fusion, SketchUp, and music production. Claude Design + Claude Code generate scripts, plugins, parametric models inside the existing software. The MCP layer keeps it interoperable. For Akhil's visual-review queue at JustCall this could collapse the prompt-to-export bounce; for kami it's an immediate prototyping accelerator. *Worth a 1-day spike when the Adobe MCP connector docs land publicly.*

## What I installed and tested

Installed [`deepagents` 0.5.6](https://pypi.org/project/deepagents/) into a sandbox venv (107MB, pip install clean on first try). Confirmed the `HarnessProfile` API exposes `base_system_prompt`, `system_prompt_suffix`, `tool_description_overrides`, `excluded_tools`, `excluded_middleware`, `extra_middleware`, and `general_purpose_subagent`. `ProviderProfile` exposes `init_kwargs`, `pre_init` hook, and a registry pattern via `register_provider_profile`. This maps cleanly onto miniu's `scheduler/builtins.ts`: each scheduled task could carry a `harness_profile` field that picks the right prompt+tool+middleware shape per model tier. The next step I'd recommend is the spike spec in `proposed-task-per-model-harness-profiles.md` — run a one-time bake-off on the `ai-digest` task using the last 7 digest runs as a golden set.

## From the operators

The lead is the off-domain AEO convergence. I built [`artifact-off-domain-aeo-audit-workflow.md`](artifact-off-domain-aeo-audit-workflow.md) in the sandbox — a 5-step workflow that pulls demand surface from Gong/Help Scout/Front transcripts (Hufford's 3S move), probes four assistants for cited URLs per cluster (Flanagan's third-party citation map), scores off-domain mention density (Schwartz's brand-context test), then generates a mirror-action shortlist (YouTube long-form, LinkedIn long-form, Reddit AMA pitch, podcast outreach). Human checkpoints are named: Sourav approves cluster selection, Reshma decides PR vs. partnership vs. founder-presence, Kesava ships and logs the calibrated bet. The companion Skill draft is in [`proposed-skill-aeo-off-domain-audit.md`](proposed-skill-aeo-off-domain-audit.md) and is sized to slot next to `aeo-relevance-engineering` in Commons. First test target: JustCall AI Voice Agent vertical, half-day investigation + half-day artifact pass.

Mike King's iPullRank team published an [AI search strategic roadmap](https://ipullrank.com/ai-search-strategic-roadmap) that packages an AEO audit into a year-long keep/start/stop deck. Patrick Schofield: "if you are starting at zero with AI Search and you implement all these suggestions we give you, you're going to be poised to be successful." This is the executive readout layer the off-domain audit is missing. Wired into the same workflow as a step-6 monthly auto-deck, with Kesava as the human checkpoint on which start/stop items get sprint slots. *Adding an "executive readout" step to the off-domain workflow before first JustCall test run.*

Kyle Poyar [packaged 15 years of GTM and pricing work into Claude Skills](https://www.growthunhinged.com/p/how-to-use-claude-for-gtm-and-pricing) and shipped them publicly. "I turned 15 years of GTM expertise into Claude skills you can use." His unit of distribution is the Skill, not the prompt. This is direct external validation of the Commons substrate thesis: Reshma's competitive intel and Sourav's vertical playbook each become a versioned, portable Skill with a Brier-scored decision ledger. Kesava on substrate ship/no-ship. *Useful as a citation in the next clearPMM portfolio narrative; no Commons change needed today.*

## What I improved about myself

Two proposals on disk. [`proposed-skill-aeo-off-domain-audit.md`](proposed-skill-aeo-off-domain-audit.md) addresses the gap surfaced by today's three-operator convergence: Commons has on-page AEO Skills but no third-party citation Skill. [`proposed-task-per-model-harness-profiles.md`](proposed-task-per-model-harness-profiles.md) addresses a measurable miniu cost gap surfaced by the LangChain Deep Agents writeup: every scheduler task today inherits one prompt regardless of model tier. The harness-profile spike is small (one task, one week, one judge pass) and produces a directly testable cost-per-stable-decision number, which then determines whether the Tier B wire-up earns its way into `scheduler/builtins.ts`.

A second observation about miniu itself: today's prior-verdicts.json had no qualifying stale items because the digest only began producing them last week. The 14-day stale window will start mattering around 2026-05-10. Worth pre-checking the `digest-feedback` scheduler handler picks up `+`, `-`, `later`, `?` reply lines correctly before then; if it doesn't, the stale-decisions section will resurface things Kesava has already shipped or dismissed.

## For your call

The Anthropic Claude for Creative Work connectors are ready in product but the MCP-server developer docs aren't fully public. Watching for the Adobe and Blender connector specs; when they land, a 1-day spike on Akhil's visual-review queue is the obvious first integration. Decision pending: is this a kami-first or JustCall-first integration target.

Meta's MCP for ad buying changes the kami launch math. Today the assumption is paid Apple Search Ads + creator distribution; if Meta's connector lets us run a tight in-house creative-test loop, it shortens the Innie/Pemberley pre-launch UA cycle. Decision pending: do we hold the kami marketing spec until the Meta connector docs land, or commit to the current paid-ASA-first plan and add Meta-MCP as a Q3 add-on.

Kieran Flanagan's MATG episode argues canonical category POVs may need to live on Reddit and YouTube *first*, then get pulled to your site. For the flywheel pitch and clearPMM portfolio, that means the next big positioning piece (the AI-native marketing org manifesto) might have more leverage as a YouTube long-form than as a long-form essay. Decision pending: pick a primary-surface for the next manifesto release.

## Skipped

Eli Schwartz's [Apr-28 piece](https://www.productledseo.com/) on AI search agents was an extension of his 2026-04-09 essay above, no new framework. Anthropic's Claude for Creative Work was already in yesterday's verdicts as "watching"; resurfacing here only because the connector list is now concrete. Kyle Poyar's [Apr-22 GTM Pulse Report](https://knowledge.gtmstrategist.com/p/claude-for-gtm-pulse-report-2026) is already in prior-verdicts as skipped; today's piece is the artifact, not a re-investigation.

---

_Reply with feedback lines to update miniu's verdicts. One per line:_
_+<title fragment> = shipped/used. -<title fragment> = dismiss permanently._
_later <title fragment> = snooze 30d. ?<title fragment> = deepen next run._