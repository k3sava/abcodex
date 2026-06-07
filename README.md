# abcodex

> **[Open the interactive site → abcodex.iamkesava.com](https://abcodex.iamkesava.com/)**

<!-- LATEST:START -->
### Latest · 2026-06-04 · 5 insights · 1 operator

**What landed today, 2026-06-04.** Five new insight cards, one new operator. Two themes from the AI engineering lane and one from future-of-work converged this week on the economics and safety of running agents in production.

[Read what landed →](insight-library/daily/2026-06-04.md) · [See on the site →](https://abcodex.iamkesava.com/#/today)
<!-- LATEST:END -->

A primary-source library of operator insights. Atomic claims, each one attributed to a named operator with a verifiable source URL and date. Built so you can read one claim, verify the source, and cite it.

## What's in here today

<!-- COUNTS:START -->
- **850** insight cards
- **473** operator profiles
- **42** synthesis patterns (cross-operator convergences)
- **11** documented contradictions
- **27** methodology playbooks
- **209** archived raw sources (podcasts, essays, threads, research)
<!-- COUNTS:END -->

Every card carries: operator, role, source URL, source date, claim, mechanism, conditions when it applies, evidence, signals to track, counter-evidence, and links to related cards.

## Browse

The site at [abcodex.iamkesava.com](https://abcodex.iamkesava.com/) gives you several ways to read the same corpus:

| View | What it's for |
|------|---------------|
| [Home](https://abcodex.iamkesava.com/) | Tier A claims and a domain index |
| [Map](https://abcodex.iamkesava.com/#/map) | Visual graph: operators outside, domains in the middle, insights orbiting between |
| [Operators](https://abcodex.iamkesava.com/#/operators) | All 473 profiles, sorted by card count |
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

---

# DemandOS — Demand Intelligence System

DemandOS is included in this repository as a ready-to-run, evidence-first web app for discovering unmet demand and producing PMM-grade market intelligence. It mines public or user-provided signals, normalizes records, classifies pain, clusters recurring workflows, scores opportunities, and generates founder/consulting reports with evidence citations.

## What DemandOS does

- Create research projects for a market, category, ICP, competitors, keywords, and source plan.
- Ingest compliant sources: CSV/manual import now, Hacker News adapter, demo collector, and clean extension points for Reddit, YouTube, Product Hunt, app stores, URLs, and restricted platforms via export workflows.
- Normalize records into `source`, `sourceUrl`, `author`, `date`, `title`, `body`, `product`, `engagement`, `rawPayload`, and `ingestedAt`.
- Clean, dedupe, extract workflow verbs, and classify records with a strict JSON LLM abstraction that falls back to deterministic demo mode.
- Detect complaints, workarounds, alternatives, switching triggers, pricing pain, UX/performance/integration/support issues, security concerns, adoption friction, workflow pain, and stack fragmentation.
- Cluster records into evidence-backed themes with source mix, personas, products, representative quotes, product wedges, PMM angles, evidence strength, and transparent scores.
- Generate product opportunities and PMM/builder reports with evidence appendices.
- Run locally without API keys using seeded synthetic projects: AI note-taking apps, CRM reporting complaints, and PMM tools unmet demand.

## DemandOS stack

- Next.js App Router + TypeScript
- Tailwind CSS operator cockpit UI
- Prisma data model targeting PostgreSQL + pgvector
- Redis/BullMQ-ready background job dependency
- OpenAI-compatible LLM provider abstraction
- CSV upload/import route
- Markdown/JSON report export route
- Vitest unit and flow tests
- Docker + docker-compose for Postgres, Redis, and web

## DemandOS quick start

```bash
npm install
cp .env.example .env
npm run db:generate
npm run dev
```

Open <http://localhost:3000>. Demo mode works without external API keys.

## Database setup

Start infrastructure:

```bash
docker compose up -d postgres redis
npm run db:push
npm run seed
```

The Prisma schema includes users, projects, sources, raw records, processed records, classifications, embeddings, clusters, opportunities, reports, saved insights, tags, runs/jobs, and exports.

## Commands

```bash
npm run dev       # local web app
npm run build     # production build
npm run test      # Vitest suite
npm run seed      # seed demo projects
npm run db:push   # sync Prisma schema
```

## LLM configuration

Set these in `.env` for production AI calls:

```bash
OPENAI_API_KEY="sk-..."
OPENAI_BASE_URL=""          # optional OpenAI-compatible endpoint
OPENAI_MODEL="gpt-4o-mini"
DEMO_MODE="false"
```

All classifications validate with Zod and retry invalid JSON. The prompt texts are in `lib/ai/prompts.ts`, and the provider/cache/fallback layer is in `lib/ai/provider.ts`.

## Compliance principles

- Store source URLs and public/user-provided text only.
- Use official APIs where possible.
- Restricted platforms should use CSV/manual import or browser-export workflows.
- Do not use brittle illegal scraping.
- Every AI-generated conclusion should link back to source evidence.
- Users can delete projects and records through the data model/API extension points.

## Key DemandOS routes

- `/` dashboard
- `/projects/new` new project
- `/projects/[id]` overview
- `/projects/[id]/sources` source manager
- `/projects/[id]/signals` raw signals and evidence
- `/projects/[id]/clusters` pain clusters
- `/projects/[id]/opportunities` product/PMM opportunities
- `/projects/[id]/reports` PMM and builder reports
- `/projects/[id]/saved` saved insight library
- `/settings` provider/compliance settings

## API routes

- `GET /api/projects` demo project list
- `POST /api/projects` create-project contract
- `POST /api/ingest/csv` multipart CSV import
- `GET /api/reports/[projectId]/export` Markdown + JSON export payload

## Deployment notes

For a cloud host, provision PostgreSQL with pgvector and Redis, set the environment variables from `.env.example`, run `npm run db:push && npm run seed` once, then deploy with `npm run build && npm start`.
