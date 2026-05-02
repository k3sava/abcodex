---
title: Sherwin Wu — Codex inside OpenAI, engineers as managers, build for where the model is going
type: raw
source: Lenny's Podcast (Dropbox archive)
guest: Sherwin Wu (Head of Engineering, OpenAI API and Developer Platform)
host: Lenny Rachitsky
captured: 2026-04-28
captured_via: claude-code (sonnet batch)
attribution: verified
relevance_tier: HIGH
transcript_file: lenny-dropbox/Sherwin Wu_V2.txt
---

# Sherwin Wu — Codex inside OpenAI

## Summary
Sherwin runs engineering for the OpenAI API platform. Three data points: (a) 95% of OpenAI engineers use Codex daily, 100% of PRs reviewed by Codex; (b) heavy Codex users open 70% more PRs; (c) the bottleneck is no longer code — it's context.

## Full text source
Transcript at `lenny-dropbox/Sherwin Wu_V2.txt`.

## 11 load-bearing insights

1. **95% of OpenAI engineers use Codex daily; ~100% of code is AI-authored first.** "All of my code is written by Codex at this point. The vast majority of engineers use Codex on a daily basis."

2. **70% more PRs from heavy Codex users.** "Engineers who use Codex more open way more PRs. They're opening 70% more, and the gap is widening."

3. **ICs become tech leads of agent fleets.** "IC engineers are becoming tech leads. They're managing fleets and fleets of agents... 10 to 20 threads being pulled at the same time."

4. **The Sorcerer's Apprentice metaphor.** "Programming is sorcery. We're issuing incantations and the spells are going out and doing things." The current state is Sorcerer's Apprentice level — extremely powerful, but you have to know what you're doing or the brooms flood the lab.

5. **The bottleneck is context, not capability.** "When the agent isn't doing what you want, it's usually a problem with context — you've underspecified or there's just not enough information available." The fix: encode tribal knowledge as `.md` files, code comments, structure.

6. **The hardest team experiment: 100% Codex code base, no escape hatch.** "Their challenge is, I want to get this feature built but I can't get the agent to do it... usually you'd roll up your sleeves; this team doesn't have that escape hatch." Forcing function for figuring out paradigms.

7. **"This is the worst the models will ever be."** Kevin Weil quote, repeated by Sherwin. Build for the model six months out, not today (echoes Boris Cherny verbatim).

8. **Listening to customers isn't always right in AI.** "The field and the models themselves change so quickly. They tend to disrupt themselves. The models will eat your scaffolding for breakfast." Customer asks for V1 scaffolding that the V2 model will obsolete.

9. **Top performers benefit disproportionately.** "Codex really empowers top performers to be a lot more productive... you see a broader spread in team productivity." Spend more time with top performers, not bottom performers. Counter to the "raise the floor" management orthodoxy.

10. **The one-person billion-dollar startup creates a B2B SaaS golden age.** "To enable a one-person billion-dollar startup, there might be a hundred other small startups building bespoke software." Counter-intuitive prediction.

11. **Code review collapsed from 15 min to 2-3 min.** Codex pre-reviews; the human pass becomes a quick steer. "For small PRs you don't even need people to review. The original author looks at Codex's review."

## Other notable threads

- **Codex stress is real.** "When agents aren't working, you fire off all these threads and have to stay on top of them." A new failure mode that any agent system must address.
- **Multiple-models-as-second-opinion is feasible.** OpenAI tests internal model variants for review.
- **Documentation as the gating asset.** "Encoding tribal knowledge into the code base via comments, structure, .md files, Skills, any type of resources within the repository."
- **Managerial work hasn't been Codexed yet, but trends are visible.** Research, organizational context, peer-room learning — all becoming AI-augmented for managers. Sherwin sees the trend; nothing replaces the manager fully yet.
- **"Tab complete in Cursor" as the escape hatch.** Even at OpenAI, the escape hatch is still a less-agentic AI tool, not unaided coding.
