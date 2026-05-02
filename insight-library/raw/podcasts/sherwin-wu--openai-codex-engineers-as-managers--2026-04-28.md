---
title: Sherwin Wu — Codex inside OpenAI, engineers as managers, build for where the model is going
type: raw
source: Lenny's Podcast (Dropbox archive)
guest: Sherwin Wu (Head of Engineering, OpenAI API and Developer Platform)
host: Lenny Rachitsky
captured: 2026-04-28
captured_via: claude-code (sonnet batch)
domain: gtm|personal
attribution: verified
relevance_tier: HIGH
transcript_file: lenny-dropbox/Sherwin Wu_V2.txt
---

# Sherwin Wu — Codex inside OpenAI

## Why this is in the wiki
Sherwin runs engineering for the OpenAI API platform. Three flywheel-relevant data points: (a) 95% of OpenAI engineers use Codex daily, 100% of PRs reviewed by Codex; (b) heavy Codex users open 70% more PRs; (c) the bottleneck is no longer code — it's context. Direct engineering precedent for the marketing-team substrate thesis.

## Full text source
Transcript at `lenny-dropbox/Sherwin Wu_V2.txt`.

## 11 load-bearing insights for flywheel

1. **95% of OpenAI engineers use Codex daily; ~100% of code is AI-authored first.** "All of my code is written by Codex at this point. The vast majority of engineers use Codex on a daily basis." Marketing analog target state: 95% of marketing artifacts pass through the substrate before human edit. Concrete adoption metric for the flywheel.

2. **70% more PRs from heavy Codex users.** "Engineers who use Codex more open way more PRs. They're opening 70% more, and the gap is widening." Substrate effect on marketing throughput will look the same — heavy users compound, light users plateau. Track and publish the spread internally to drive adoption.

3. **ICs become tech leads of agent fleets.** "IC engineers are becoming tech leads. They're managing fleets and fleets of agents... 10 to 20 threads being pulled at the same time." Direct parallel to flywheel multi-agent thesis (Claire Vo's 9 agents, Jeetu's "teammate not tool"). Same shape across engineering and marketing.

4. **The Sorcerer's Apprentice metaphor.** "Programming is sorcery. We're issuing incantations and the spells are going out and doing things." The current state is Sorcerer's Apprentice level — extremely powerful, but you have to know what you're doing or the brooms flood the lab. Useful frame for teammate anxiety: substrate is powerful AND requires training, not magic.

5. **The bottleneck is context, not capability.** "When the agent isn't doing what you want, it's usually a problem with context — you've underspecified or there's just not enough information available." The fix: encode tribal knowledge as `.md` files, code comments, structure. Direct read for flywheel: the substrate's quality is gated by contextDB completeness, not model strength. Invest in the docs.

6. **The hardest team experiment: 100% Codex code base, no escape hatch.** "Their challenge is, I want to get this feature built but I can't get the agent to do it... usually you'd roll up your sleeves; this team doesn't have that escape hatch." Forcing function for figuring out paradigms. Flywheel parallel: pick one workstream and run it 100%-substrate (no human-only rescue) to surface the actual gaps.

7. **"This is the worst the models will ever be."** Kevin Weil quote, repeated by Sherwin. Build for the model six months out, not today (echoes Boris Cherny verbatim). Operating principle, not aspiration.

8. **Listening to customers isn't always right in AI.** "The field and the models themselves change so quickly. They tend to disrupt themselves. The models will eat your scaffolding for breakfast." Customer asks for V1 scaffolding that the V2 model will obsolete. Flywheel implication: don't build heavy substrate plumbing around current model limits; assume the limits dissolve.

9. **Top performers benefit disproportionately.** "Codex really empowers top performers to be a lot more productive... you see a broader spread in team productivity." Spend more time with top performers, not bottom performers. Counter to the "raise the floor" management orthodoxy. For Kesava: invest in the substrate-fluent teammates first; let the spread widen as a feature.

10. **The one-person billion-dollar startup creates a B2B SaaS golden age.** "To enable a one-person billion-dollar startup, there might be a hundred other small startups building bespoke software." Counter-intuitive prediction. Flywheel-adjacent: as marketing teams shrink-and-scale-out, the ecosystem of niche substrate tooling balloons. Implies clearPMM consulting market is not contracting.

11. **Code review collapsed from 15 min to 2-3 min.** Codex pre-reviews; the human pass becomes a quick steer. "For small PRs you don't even need people to review. The original author looks at Codex's review." Marketing analog: copy-review and design-review collapse from sit-down to skim-pass when substrate pre-reviews. Big throughput unlock for flywheel's iter cycles.

## Other notable threads

- **Codex stress is real.** "When agents aren't working, you fire off all these threads and have to stay on top of them." A new failure mode the substrate must address. Implications for flywheel: build "agent health" dashboards before scaling out the agent count.
- **Multiple-models-as-second-opinion is feasible.** OpenAI tests internal model variants for review. Marketing analog: substrate could have one model write copy, another (different system prompt) review for brand voice and kill-list violations.
- **Documentation as the gating asset.** "Encoding tribal knowledge into the code base via comments, structure, .md files, Skills, any type of resources within the repository." Direct mandate for the contextDB and the operator docs corpus — they are the actual product, not the agents.
- **Managerial work hasn't been Codexed yet, but trends are visible.** Research, organizational context, peer-room learning — all becoming AI-augmented for managers. Sherwin sees the trend; nothing replaces the manager fully yet.
- **"Tab complete in Cursor" as the escape hatch.** Even at OpenAI, the escape hatch is still a less-agentic AI tool, not unaided coding. Marketing analog: even when substrate fails, the fallback is "human + Claude in chat", not "human alone with Google Doc."

## Why this matters for flywheel

Three direct loads. First, the engineering data points (95% daily adoption, 70% throughput spread, code-review collapse) are the cleanest external benchmarks for flywheel target metrics. When pitching the CFO, anchor the marketing-team trajectory to these. "Engineering went here in 24 months; marketing is on the same curve, 12-18 months behind."

Second, "the bottleneck is context, not capability" is the key reframe for the contextDB pitch. Stop selling "more agents"; sell "more context." This aligns the flywheel narrative with what every operator is converging on (Boris, Cat, Sherwin, Jeetu).

Third, the "build for where the model is going, not where it is today" principle plus "models eat your scaffolding for breakfast" is a hard discipline for every flywheel bet. If a bet only works because of a current model limitation, kill it. The bets that compound are the ones that get better as models get better — taste leaderboards, contextDB, brand-voice corpus, decision logs.

## Related

- [projects/flywheel.md] — substrate
- [raw/podcasts/lenny/2026-04-28-boris-cherny-claude-code-after-coding-solved.md] — same "build for six months out" principle
- [raw/podcasts/lenny/2026-04-28-claire-vo-openclaw-agents-as-team.md] — agent-fleet management at the IC level
- [raw/podcasts/lenny/2026-04-28-jeetu-patel-cisco-ai-first-transformation.md] — teammate-not-tool reframe at enterprise scale
- [project_contextdb_shim.md] — contextDB as the actual product
- [feedback_revenue_per_employee_objective_measurement.md] — top-performer-benefits-disproportionately math
