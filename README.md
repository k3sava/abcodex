# abcodex

> **[Open the interactive site → abcodex.iamkesava.com](https://abcodex.iamkesava.com/)**

<!-- LATEST:START -->
### Latest · 2026-07-24 · 5 insights · 1 operator

**Agents get a computer, open models catch up, and nobody corrects the CEO.** Five new cards from three operators. Ethan Mollick's July 23 guide surfaces three distinct insights about agentic systems: what makes agents different from chatbots, why approval gates matter until you know the failure modes, and which output modality fits which oversight need. Tom Tunguz frames the open versus closed model competition as a repeating cycle that speeds up the whole market. Nikhil Suresh names the structural prisoner's dilemma that keeps AI vendors silent about inflated productivity claims.

[Read what landed →](insight-library/daily/2026-07-24.md) · [See on the site →](https://abcodex.iamkesava.com/#/today)
<!-- LATEST:END -->

A primary-source library of operator insights. Atomic claims, each one attributed to a named operator with a verifiable source URL and date. Built so you can read one claim, verify the source, and cite it.

## What's in here today

<!-- COUNTS:START -->
- **969** insight cards
- **502** operator profiles
- **45** synthesis patterns (cross-operator convergences)
- **11** documented contradictions
- **28** methodology playbooks
- **209** archived raw sources (podcasts, essays, threads, research)
<!-- COUNTS:END -->

Every card carries: operator, role, source URL, source date, claim, mechanism, conditions when it applies, evidence, signals to track, counter-evidence, and links to related cards.

## Browse

The site at [abcodex.iamkesava.com](https://abcodex.iamkesava.com/) gives you several ways to read the same corpus:

| View | What it's for |
|------|---------------|
| [Home](https://abcodex.iamkesava.com/) | Tier A claims and a domain index |
| [Map](https://abcodex.iamkesava.com/#/map) | Visual graph: operators outside, domains in the middle, insights orbiting between |
| [Operators](https://abcodex.iamkesava.com/#/operators) | All 502 profiles, sorted by card count |
| [Patterns](https://abcodex.iamkesava.com/#/patterns) | Where 3+ operators converge on the same claim |
| [Browse](https://abcodex.iamkesava.com/#/browse) | Filter by tier or domain, sort by date / operator / tier |
| [Timeline](https://abcodex.iamkesava.com/#/timeline) | Newest captures first |
| [Flash](https://abcodex.iamkesava.com/#/flash) | One card at a time, prev/next/shuffle |

Press `⌘K` (or `Ctrl-K`) anywhere to search across operators, claims, and patterns.

### Map

[![map](docs/screenshots/map.png)](https://abcodex.iamkesava.com/#/map)

### Patterns

[![patterns](docs/screenshots/patterns.png)](https://abcodex.iamkesava.com/#/patterns)

### A single insight

[![insight](docs/screenshots/insight.png)](https://abcodex.iamkesava.com/#/ins/ins_agents-as-team-not-tools)

## What you'll find

Cross-domain operator wisdom across Product, PMM, GTM, Growth, Design, Engineering, AI-native operating, Leadership, Sales/CS, Research, and Founder craft. A structured, primary-source record of what operators have published, with the source URL attached to every claim.

A few of the operators currently in the corpus: April Dunford, Andrej Karpathy, Claire Vo, Cat Wu, Boris Cherny, Yamini Rangan, Kieran Flanagan, Elena Verna, Andy Raskin, Bob Moesta, Annie Duke, Aleyda Solis, Mike King, Kevin Indig, Brian Balfour, Brian Halligan, Bret Taylor, Jessica Fain, Ethan Mollick, Lily Ray, Simon Willison, Sherwin Wu, Asha Sharma, Anton Osika, Patrick Campbell, Charlie Munger, Daniel Kahneman, Naval Ravikant, and many more.

## Repository structure

```
abcodex/
├── insight-library/
│   ├── 00_meta/        · schema, taxonomy, scoring model, ingest protocol
│   ├── insights/       · atomic insight cards (one claim each)
│   ├── operators/      · operator profiles
│   ├── synthesis/      · patterns + contradictions + coverage matrix
│   ├── playbooks/      · methodology documents
│   ├── raw/            · archived primary sources
│   ├── INDEX.md        · human-readable index
│   └── INDEX.json      · machine-readable index (the site reads this)
├── docs/               · the interactive site
└── scripts/
    └── build-index.mjs · regenerates INDEX.md/INDEX.json from frontmatter
```

## Using the corpus from another project

The `INDEX.json` at `insight-library/INDEX.json` is the canonical index. Every record carries `id`, `path`, `operator`, `source_url`, `source_date`, `domain`, `lifecycle`, `tier`. Read it directly, link to cards by id, or fetch their markdown bodies at the listed paths.

If you only want a subset, filter `INDEX.json` by `tier`, `domain`, or `operator`. Don't copy the cards into your own repo. Link to them so updates propagate.

## Contributing

The ingest protocol is in [`insight-library/00_meta/INGEST-PROTOCOL.md`](insight-library/00_meta/INGEST-PROTOCOL.md). Every card needs a named operator, a verifiable source URL, a date, and the standard schema fields. No paraphrase-grade attribution; no invented metrics; no fabricated sources.

When you add or change cards, regenerate the index:

```
node scripts/build-index.mjs
```

The site reads from `insight-library/INDEX.json` and rebuilds itself on every push to `main` via the GitHub Pages workflow.

## License

Insight cards and synthesis pages are released under MIT. Raw sources retain their original copyright; abcodex archives short excerpts under fair use, always with attribution and a link back to the canonical source.
