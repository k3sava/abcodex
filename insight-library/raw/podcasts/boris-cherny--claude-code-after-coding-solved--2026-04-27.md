---
title: What happens after coding is solved
type: raw
source_url: https://www.youtube.com/watch?v=We7BZVKbCVw
guest: Boris Cherny (Head of Claude Code, Anthropic)
host: Lenny Rachitsky
publication: Lenny's Podcast
published: 2026-04-27
captured: 2026-04-28
captured_via: yt-dlp auto-subtitles
attribution: verified
transcript_file: We7BZVKbCVw.transcript.txt
---

# Boris Cherny — What happens after coding is solved

## Summary
Boris ran the Claude Code 0→$2B journey. His operating principles (latent demand, build-for-six-months-out, underfund-on-purpose, agents-not-workflows).

## Full text source
Transcript at `We7BZVKbCVw.transcript.txt` (20,042 words). VTT source: `We7BZVKbCVw.en.vtt`.

## 12 load-bearing insights

1. **"100% of my code is written by Claude Code. I have not edited a single line by hand since November."** Boris ships 10-30 PRs/day, runs ~5 agents in parallel at any moment, and is still one of the most prolific committers on his team. The end-state is not "AI-assisted coding," it's coding-as-prompt-orchestration.

2. **"Productivity per engineer increased 200% while we 4x'd the team."** Anthropic compound growth — both more people *and* more output per person. Counter to the "AI replaces headcount" frame. Revenue-per-employee goes up; headcount can also go up if the work expands.

3. **Underfund deliberately.** "There's this interesting thing that happens when you underfund everything a little bit — people are forced to clarify, and the way they ship really quickly is just intrinsic motivation." Putting one engineer on a project with Claude Code beats putting four engineers on it.

4. **Latent demand is the single most important principle in product.** Two flavors: (a) traditional — observe how users hack/abuse the product, build for that (Facebook Marketplace from 40% of group posts being buy/sell; Co-work from non-engineers using Claude Code in a terminal). (b) Modern AI flavor — observe what *the model* is trying to do and clear the path. "In research we call this being on distribution."

5. **Build for the model six months out, not today.** "Your product market fit won't be very good for the first 6 months, but when that model comes out you're going to hit the ground running." Quad Code felt mediocre under Sonnet 3.5; inflected at Opus 4.

6. **Don't box the model in.** "A lot of people's instinct when they build on the model is to make it behave a particular way... almost always you get better results if you give the model tools, give it a goal, and let it figure it out." Strict workflows and orchestrators are scaffolding that gets wiped out by the next model. Bet on the general model.

7. **"The product is the model."** Cloud Code's design choice — minimal scaffolding around the LLM, expose its capability, give it the smallest possible toolset. This is why it scaled: it wasn't a chat-with-AI product, it was an agent product.

8. **Tokens per knowledge worker > salary cost (still).** Some Anthropic engineers spend hundreds of thousands per month in tokens. Boris's advice to other CTOs: "Don't try to optimize. Don't cost-cut at the beginning. Start by giving engineers as many tokens as possible." Optimization comes after the idea works.

9. **Co-work was built in 10 days using Claude Code.** Including a virtual machine sandbox for safety guardrails — "Claude Code wrote all of this code." Time-to-build collapsed; the bottleneck shifted to safety review and product taste.

10. **"Use plan mode" — one-sentence prompt change = product feature.** Plan mode is literally "please don't write any code yet" injected into the system prompt. Boris uses it for ~80% of tasks, then auto-accepts edits. The simplest possible thing works because the model is the engine.

11. **Release earlier than feels safe — to learn safety AND latent demand.** Cloud Code was used internally for 4-5 months, but they still released it externally before they were ready, branded as research preview. The third layer of safety (real-world behavior) cannot be tested in a lab.

12. **The next role to be most impacted is everything adjacent to engineering — PMs, designers, data science.** "Anyone whose work involves a computer." Boris's prediction: by end of year the title "software engineer" starts to disappear, replaced by "builder."

## Other notable threads

- **Underfunding > overfunding for AI-era teams.** One engineer + Claude Code beats a normal four-engineer team. Lever for low headcount + high token budget.
- **Bitter Lesson (Sutton) is the operating philosophy.** General model > specific model; scaffolding gains get wiped by next model release.
- **Common sense as life motto.** "The best results I see are people thinking from first principles and developing their own common sense. If something smells weird, it's probably not a good idea."
- **Generalists win.** "On the Quad Code team, everyone codes — PM, EM, designer, finance guy, data scientist. The strongest engineers are hybrid product+infra, or product+design, or eng+business sense."
- **Twitter as a customer-feedback channel.** Boris ships bug fixes within minutes of a Twitter complaint.
- **No competitor-watching.** "We don't really try the other products. I love talking to users." Permission slip to ignore competitive obsession during build.

## Augmented from Dropbox transcript 2026-04-28

The original synthesis was built from YouTube auto-subtitles (~1.3K words). The Dropbox-archived full transcript (~19K words) surfaces additional load-bearing material below.

### 13. **The Bitter Lesson as operational philosophy**
Boris explicitly names Richard Sutton's blog post "The Bitter Lesson" as the Claude Code operating philosophy. Sutton's claim: the more general model always out-performs the more specific one. Corollary: "almost always try to bet on the more general model if you can, if you have that flexibility."

### 14. **Plan mode: one-sentence prompt injection = product feature**
Boris uses plan mode ("please don't write any code yet" injected into system prompt) on ~80% of tasks. It's not a checkbox or UI toggle. It's literally a sentence in the prompt. The simplicity is the point: "There's actually nothing fancy going on. It's just the simplest thing."

### 15. **Four to five months internal-only testing before external release**
Claude Code was internally dogfooded for 4-5 months, but they still released it externally (as research preview) before "ready." Reason: "The third layer of safety (real-world behavior) cannot be tested in a lab."

### 16. **Engineers spending $100K-$300K/month in tokens and staying productive**
Some Anthropic engineers rack up hundreds of thousands in tokens monthly. Boris's advice to CTOs: "Don't try to optimize. Don't cost-cut at the beginning. Start by giving engineers as many tokens as possible." Optimization comes after proof of concept.

### Concrete operational details missed in original
- Co-work built in 10 days using Claude Code (including a virtual machine sandbox for safety guardrails — Claude wrote all of it). But "10 days" refers to final assembly; months of internal prototypes preceded it (todo-list form factors, multiple-choice UIs, use-case flows). Pattern: long discovery internally, sudden shipping window, ship-everything-at-once.
- Claude Code: 100% of Boris's code written by Claude since November (at time of recording). Runs ~5 agents in parallel, ships 10-30 PRs/day. Still one of the most prolific committers on the team.

### Notable side-quests
- Twitter as real-time bug-report channel. Boris fixes bugs within minutes of Twitter complaints.
- Generalists win on the Claude Code team. Everyone codes — PM, EM, designer, finance person, data scientist. Strongest engineers are hybrids (product+infra, product+design, eng+business sense).
