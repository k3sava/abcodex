# Social Brain MVP for abcodex

> A local-first, privacy-first AI curiosity engine that turns explicit social interest signals into an inspectable second brain.

This repository now contains the existing abcodex operator-insight corpus **and** an end-to-end MVP for capturing social engagement from Instagram, LinkedIn, and YouTube, processing it into ideas/topics/operators, discovering related and contradictory research trails, and exporting Obsidian-ready markdown.

## Product loop proven by the MVP

`like/save/react → browser extension capture → local queue → AI/heuristic insight extraction → topic/operator linking → related + contradictory research seeds → Obsidian ZIP export`

The implementation deliberately favors local control and graceful degradation over fragile scraping or platform APIs.

## MVP features

- Chrome Manifest V3 extension with TypeScript-oriented shared models, content scripts, background worker, popup, and local browser storage. The dependency-free runnable build uses `chrome.storage.local`; Dexie-compatible IndexedDB modules are scaffolded for the next package-enabled iteration.
- Manual **Capture current page** for Instagram, LinkedIn, and YouTube.
- Visible-page historical capture for likely YouTube videos, Instagram posts/reels, and LinkedIn feed updates.
- Automatic capture attempt when like/save/reaction controls are clicked.
- Local-first dependency-free dashboard built with browser JavaScript, TypeScript data models, and localStorage for the runnable MVP; the storage boundary is isolated for IndexedDB/Dexie upgrade work.
- Structured records for raw captures, processed insights, operators, topics, research results, and exported notes.
- AI processing with:
  - Local heuristic mode by default, with no network calls.
  - Optional OpenAI chat-completions provider.
  - Optional Claude Messages API provider.
  - Privacy switches for text, transcripts, and raw HTML.
- Basic explainable topic clustering and operator derivation.
- Related, background, adjacent, and contradictory research-seed generation.
- Obsidian sync as a ZIP of markdown files plus JSON backup.
- Settings for provider/API key, privacy controls, data deletion, JSON import, and ZIP export.
- Manual test scripts for each platform and export/research flows.

## Repository structure

```text
abcodex/
├── extension/              # Chrome extension source and MV3 manifest
│   ├── manifest.json
│   ├── popup.html
│   └── src/
├── src/                    # Social Brain web app and shared MVP modules
│   ├── lib/                # data model, extractors, AI, clustering, queue, markdown
│   ├── app.js              # dependency-free dashboard UI
│   └── styles.css
├── manual-tests/           # browser/manual QA scripts
├── scripts/build-extension.mjs
├── insight-library/        # existing abcodex corpus
└── docs/                   # existing static abcodex site build
```

## Local setup

### Prerequisites

- Node.js 24+ recommended.
- Chrome or Chromium for the extension.
- An Obsidian vault if you want to test markdown import.

### Install

```bash
npm install
```

The current MVP has no required npm dependencies, so install is fast and reproducible even in restricted package-registry environments.

### Run the dashboard locally

```bash
npm run dev
```

Open <http://localhost:5173>.

### Build the hosted web app

```bash
npm run build
```

The deployable static app is emitted to `dist/app`. It can be hosted behind private login on Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static host. For a private first deploy, put the static app behind your provider's password protection, access policy, or SSO gate.

## Chrome extension install

Build the extension:

```bash
npm run build:extension
```

Then:

1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select `dist/extension`.
5. Visit Instagram, LinkedIn, or YouTube while already logged in.
6. Open the extension popup and click **Capture current page**.
7. Use **Export JSON for app import**.
8. Open the dashboard Settings view and import that JSON.

The extension never asks for platform passwords and does not bypass login. It only reads pages you can already view in your browser.

## Environment variables and AI configuration

No environment variables are required for the default local heuristic mode.

Optional provider configuration is entered in the dashboard Settings screen and stored in browser `localStorage` for personal MVP use:

| Provider | Dashboard provider value | Suggested model | Key |
| --- | --- | --- | --- |
| Local heuristic | `local_mock` | n/a | none |
| OpenAI | `openai` | `gpt-4.1-mini` default | OpenAI API key |
| Claude | `anthropic` | `claude-3-5-haiku-latest` default | Anthropic API key |

Privacy switches let you choose whether post text, transcripts, or raw HTML may be sent to the AI provider. Raw HTML is off by default.

## Obsidian sync setup

1. Import extension captures into the dashboard.
2. Click **Process queue**.
3. Click **Export Obsidian ZIP**.
4. Extract the ZIP into an Obsidian vault.
5. Open the `Social Brain` folder in Obsidian.

Exported folder layout:

```text
Social Brain/
├── Captures/
│   ├── Instagram/
│   ├── LinkedIn/
│   └── YouTube/
├── Topics/
├── Operators/
├── Research Trails/
├── Contradictions/
├── Daily Digests/
└── Raw Exports/knowledge-base.json
```

Capture notes include title, platform, source URL, creator, signal type, capture date, summaries, key ideas, claims, topics, related operators, contradictory views, suggested follow-up reading, tags, and Obsidian wikilinks.

## Google Drive sync setup

Google Drive is intentionally optional in this MVP and is not the primary knowledge interface. To use Drive today:

1. Export the Obsidian ZIP.
2. Upload the ZIP to Google Drive manually as a markdown/JSON backup.

Roadmap work should add Google OAuth, Drive folder selection, and background backup of ZIP/JSON exports without replacing Obsidian as the primary interface.

## Manual test scripts

- `manual-tests/instagram-capture.md`
- `manual-tests/linkedin-capture.md`
- `manual-tests/youtube-capture.md`
- `manual-tests/obsidian-export.md`
- `manual-tests/research-enrichment.md`
- `manual-tests/contradictory-views.md`

## Automated testing

```bash
npm test
npm run typecheck
npm run build
npm run build:extension
```

Coverage includes extraction functions, URL normalization, deduplication, AI response parsing, markdown generation, topic clustering, Obsidian export note construction, queue processing, and failed extraction/processing handling.

## Known limitations

- Instagram and LinkedIn selectors can change. The extension captures visible metadata and records warnings rather than failing hard.
- Historical capture is best-effort from visible pages/lists; it does not use private APIs or credential collection.
- YouTube transcripts are captured only when transcript text is visible in the DOM.
- The web app and extension use separate local browser stores, so the MVP transfers captures by JSON export/import.
- Research discovery currently creates high-signal search seeds instead of browsing and ranking sources automatically.
- Google Drive sync is manual ZIP upload in this MVP.
- Hosted private login depends on the selected static hosting provider's auth/access controls.

## Next-step roadmap

1. Add direct extension-to-dashboard native messaging or local HTTP handoff to remove JSON import.
2. Add reviewed-source research ingestion and ranking with citations.
3. Add YouTube transcript panel automation that remains user-visible and non-fragile.
4. Add editable insight/topic/operator corrections and feedback loops.
5. Add Drive OAuth backup and scheduled export.
6. Add graph visualization with capture-to-topic-to-operator edges.
7. Add private hosted deployment template with SSO/password gate.
8. Add import from existing abcodex operator corpus as seed operators and topics.

## Existing abcodex corpus

The original abcodex corpus remains in `insight-library/` with the generated static site in `docs/`. Use `npm run validate:corpus` to run the existing corpus validator.
