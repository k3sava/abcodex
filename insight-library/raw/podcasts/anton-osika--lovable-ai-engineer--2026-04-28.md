---
title: Anton Osika on Lovable — the last piece of software
type: raw
source: Lenny's Podcast (Dropbox archive)
guest: Anton Osika
host: Lenny Rachitsky
captured: 2026-04-28
captured_via: claude-code (haiku-4-5 batch)
domain: gtm|personal
attribution: verified
relevance_tier: HIGH
transcript_file: lenny-dropbox/Anton Osika.txt
---

# Anton Osika on Lovable — the last piece of software

## Why this is in the wiki

Lovable went from 0 to 10M ARR in two months with 15 people. Anton's frame on product team structure, hiring obsession vs. generalism, and the tectonic shift from "engineer productivity" to "enable anyone to build" is a master class in how AI collapses workflow stages. The demo live showed GUI-edit-without-code, GitHub sync, and backend integration in <5 min. Most relevant to flywheel: how to structure teams when the bottleneck shifts from "can we code this" to "do we know what to build."

## Load-bearing insights for flywheel

1. **The 99% unlocks exponential entrepreneurship.** Anton: "It's not to make engineers more productive... it is to enable those who have such a hard time finding people who are good at creating software." This is inverting the PMM/GTM engineer model. The question isn't "how do we help engineers iterate faster," but "how do we dissolve the engineering bottleneck entirely." That dissolves a buyer segment (founders, PMs, designers building solo) and creates a new customer base of non-technical idea people.

2. **Generalists beat specialists in AI-native product teams.** "If I'm putting together a product team today, I would really obsess about getting as many skill sets as possible for each person I hire." Not "hire a great designer and a great engineer," but "hire people who know architecture, design, product taste, how to talk to users, but be super good in one dimension." Lovable's 12 of 18 write code part-time; the other 6 do product, design, ops. Everyone shipping.

3. **Office lunch is a load-bearing work practice.** "Being in office has this focus, but you also have this high bandwidth where everyone has structured communication. Eating lunch together is a pretty productive hour where you're cross-pollinating." This is not nostalgia; Anton sees it as a scaling lever under asymmetric ambition. Zoom can't replicate subconscious problem-solving during an unstructured meal.

4. **Identify the biggest bottleneck, then don't overthink it.** "There's a very, very simple algorithm: understanding what is the biggest problem... we spend time talking to users, reading what people are writing... then when we pick one of the problems, we are quite engineering-led." They went from no roadmap to a 3-month plan, but the cadence is weekly re-ranking. No "long roadmap, then ship for six months." Identify, build, demo, repeat.

5. **Product taste beats scope in hiring.** "Raw cognitive capability is the strongest correlate of being at Lovable. But there is this startup mindset... much more interested in moving very fast and iterating fast, then having a lot of structure, a lot of process." Hiring signal: ask about something they cared deeply about before. Their hiring includes a 1-week work trial; you can't fake taste over five days.

6. **Scaling law on agentic behavior: identify where the system gets stuck, then obsess on those places.** "We painstakingly identify places where it got stuck... there is different approaches but address different ways how we do it but address the places where it gets stuck, tune the entire system quantitatively and have a very fast feedback loop." Most teams ship and hope. Lovable tunes. Critical areas: login, data persistence, Stripe payments. Frontier moves back as AI gets better.

7. **Ambition filtering in job ads is an acquisition channel.** The Shackleton-inspired job posting ("difficult mission ahead, those seeking comfortable work need not apply, honor and recognition in case of success") attracts obsessed people and repels time-clocks. In Sweden (lower ambient ambition), this is an unfair advantage. The 18 people are self-selecting for "help build the last piece of software ever."

8. **Task-switching is real cognitive friction in small teams.** "We do a lot of things in Linear... talent application tracking in Linear... FigJam for jam board." Single source of truth for what's the bottleneck this week. No "I didn't know we shipped that" confusion.

## Other notable threads

- Demo showed 30-second first product build, but 30s → integrated backend + payments + custom domain is the frontier. The visual editor (Wix-like drag-to-change text, instant code update) is unique vs. Replit/Bolt.
- Lovable had to rewrite backend from scripting language to high-performance infra mid-scale. They shipped no features for weeks. That's a forcing function for discipline (only ship things that matter).
- GitHub integration is a team moat — Cursor users can iterate, non-technical founders can use Lovable, teams can merge branches. Other tools don't have that sync.
- "Top 1% in AI tools" metric: spend a full week on one problem, end-to-end, from idea to something someone's actually using. That's the bar. Not "use ChatGPT 100 times a day."

## Why this matters for flywheel

1. **Taste becomes the recruiting filter and the product moat.** Engineering skill is commodified (AI writes code). The people Lovable hires have taste. Flywheel teams (PMM + design + content + video) need to hire for taste too—obsession over process, demo-driven over doc-driven, generalists who level into GTM engineers.

2. **Ambition filtering works.** Lovable's job ad is a self-selection funnel. The same funnel attracts builders who want an AI-native operating environment.

3. **Weekly bottleneck re-ranking beats long roadmaps.** Demo Monday (what shipped), plan Monday (what's the bottleneck this week), ship Friday. That cadence scales to 12+ people without meetings overhead.

4. **Lunch together is underrated in distributed teams.** Async is often unavoidable. But synchronous, unstructured time beats async docs for cross-pollination.

5. **The PMM ≠ PM false dichotomy collapses.** Anton: "We are quite engineering-led... the right solution to the problem might be entangled in things that are technical details." Modern PMMs need to be product-literate. Not "write copy, then hand off."
