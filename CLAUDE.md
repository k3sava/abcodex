# ab-codex working agreement

You're collaborating with Kesava on ab-codex, a public operator insight
library at codex.iamkesava.com. Open-source, machine-discoverable,
mobile-first, held to a higher bar than the average dev project.

## What this is

A library of atomic operator-attributed insights. Every claim traces to
a named human who shipped something. Every page is reachable by an AI
agent and a screen reader. Every surface tells the truth.

## Voice

Operator voice. Someone who actually ran the play would describe it
this way. Not consultant voice. Not AI voice.

* Zero em dashes outside `> verbatim` operator quotes. Use periods,
  commas, or middots (·).
* Kill-list words banned: orchestration, seamless, strategic, leverage,
  transform, holistic, synergy, bespoke, unlock, robust, comprehensive,
  cutting-edge, innovative, paradigm, dive, delve, embark, journey.
  If a word does no work the sentence won't miss it.
* No throat-clearing openers. No "It's worth noting." No "Furthermore."
* Plain English over jargon. "Goals" not "bets." "Principles" not
  "doctrine." "Insights" not "cards."
* Gary Provost cadence: vary sentence length. Short. Then medium.
  Then a longer one that lets the reader breathe.
* Headlines do work. Specific beats categorical. "Why Maja's onboarding
  cut time-to-value by 40%" beats "Onboarding best practices."
* Operator verbatim quotes are immutable. Never strip em dashes from
  them. Never paraphrase. Never compose composite quotes.

## Anti-fabrication (overrides other rules)

Every fact traces to a raw source, the codebase, or an operator's own
words. If it doesn't trace, write "unverified" and stop.

* Don't invent URLs, LinkedIn slugs, handles, dates, metrics, IDs.
* Don't paraphrase as if quoted.
* Re-count from `git log` or source files. Never round, approximate,
  or paraphrase numbers.
* "Looks like X based on context" isn't evidence. Verify or omit.

## UX & design

* Max content width `min(1600px, 80vw)`. Every page obeys, About page
  included.
* Typography: Newsreader serif body, Inter UI, JetBrains Mono labels.
  Body lines 65ch max.
* Tier badge: pill with leading color dot (A green, B slate, C sand).
  Same component on every page.
* Animations under 280ms. Honor `prefers-reduced-motion: reduce` by
  skipping, not shortening.
* Paper-first palette. Warm sienna accent. No saturated primary blues.
* Drop caps, pull quotes, in-card TOC for long bodies. Print stylesheet
  has to work.
* Industrial-design thinking: nothing decorative. Every visual makes
  a point.

## Information architecture

Cross-linking masterpiece. Every primitive is a node with explicit
edges:

* Forward: insight → operator, insight → domain, insight → patterns,
  insight → playbooks
* Reverse: operator → insights, patterns, playbooks; domain →
  insights, operators, patterns, playbooks
* Sibling: same operator, same domain, same source
* Ancestor: domain page. Descendant: derived patterns.

Edges render the same way on every page. A user entering through any
door must always see at least 4 next doors.

## Accessibility (floor, not ceiling)

* WCAG AA contrast verified. `--muted: #5a6757` (5.44:1 on paper).
  Don't lighten.
* Skip-link is first focusable element. `main[tabindex=-1]`. Focus
  shifts on route change.
* Keyboard shortcuts: g+h home, g+t today, g+o operators, g+p patterns,
  g+b browse, g+m map, j/k next/prev sibling, l listen, [/] read rate,
  s share, c copy citation, / search, ? help, esc close.
* ARIA: `role=status`, `aria-live=polite`. `aria-pressed` flips on the
  actual event (e.g. `utterance.onstart`), never optimistically.
* Speech API: 60ms gap between `cancel()` and `speak()` in Chrome.
  Body-loaded guard before reading.
* Real device test on iOS Safari and Android Chrome before "done."

## Sharing & AEO

* Per-page share menu: native, copy, LinkedIn, X, email. Native falls
  back gracefully.
* Per-page OG image, distinct per insight/operator/pattern/playbook/
  domain.
* `Schema.org @graph` on every static page: Article + BreadcrumbList +
  FAQPage + Speakable per insight; Person + sameAs per operator;
  HowTo per playbook; CollectionPage per index; DefinedTerm per domain.
* `llms.txt`, `sitemap.xml`, `rss.xml`, `robots.txt` (all AI bots
  allowed), `.well-known/agent-permissions.json`, `search-index.json`.
* The site has to answer correctly when an AI agent fetches it.

## Quality control: failure modes Kesava catches

These have all gone wrong. Don't repeat.

1. Untested "done." Claiming a button works without clicking it. Open
   the browser, click the thing, hear the audio, see the screenshot.
2. Surface vs substance. Shipping CSS for a feature whose data isn't
   ready (drop-cap CSS without auditing whether bios start with the
   operator's name). Fix substance first.
3. Pattern vs instance. Don't keep adding ad-hoc reverse-link sections.
   Define the IA, render every page from the same edge model.
4. Wrong counts. "All N profiles" with stale N. Re-count, then write.
5. YAML escape leaks. `'can''t'` rendering as `can"t` is a known
   parser failure. Use the shared `unyaml()` helper everywhere a YAML
   scalar is read (build-index, validate, build-static).
6. Mobile keyboard dismissal. Programmatic `scrollIntoView` during
   input events dismisses the iOS keyboard. Only scroll on intentional
   navigation (arrow keys), never on every keystroke.
7. Filter drawers covering the result. Mobile drawer must auto-collapse
   on selection or expose an explicit close. Active filters render as
   a pill row above the list so state is never hidden.
8. Layout drift. Any page narrower than the others is a bug. Width is
   set once, not per-page.
9. Compound operators. `"Lily Ray + Britney Muller"` in operator field
   is wrong. Split into `operator` + `co_operators[]`.
10. Emoji insertion. Never, unless explicitly asked.

## Eye for errors (the pattern Kesava notices)

* Fabricated URLs or identifiers (anti-fabrication is his own rule)
* AI patterns in body text outside operator verbatim
* Parser errors leaking through (curly where straight, escapes visible)
* Buttons that look right but don't work
* Layout drift (one page slightly narrower than the rest)
* Compound nouns shipping as single fields
* Counts that drift from reality
* Things shipped without verification ("what kind of Steve Jobs-level
  QC is this?")

## Working agreement

* Plan before code on anything bigger than a one-line fix. Get explicit
  OK before executing.
* Auto mode is on. Act on low-risk reversible work. Pause and ask
  before destructive operations (push --force, branch delete, force
  reset, anything user-facing that affects strangers).
* Commit after each meaningful unit. Commit body lists what shipped,
  what each lens (Ogilvy / Feynman / DaVinci / Jobs) flagged, what's
  deferred and why.
* Cheap-tier delegation rule: bulk reads and boilerplate go to
  `ask-flash`. Judgment stays on Claude.
* Click every primary button in Chrome desktop + Safari iOS minimum
  before declaring done. Real device, not just emulator.
* "Done" means a stranger could click it cold and have it work. If you
  haven't tested that, it's not done.

## Loop discipline

Re-apply Ogilvy / Feynman / DaVinci / Jobs lenses at the end of every
iteration. Not what they did when they lived. What they would do
today, working with us, if they were on the team.

Loop continues until the site is twice as good as
Wikipedia + Substack + LinkedIn + Medium + Podcasts combined.
Concretely:

* Wikipedia: every page has ≥6 outbound links, reverse-links visible
* Substack: every insight has operator verbatim + plain English
  distillation
* LinkedIn: tier + claim + operator readable in 3 seconds
* Medium: 65ch lines, drop caps, pull quotes, in-card TOC, reading
  progress
* Podcasts: listen + rate control + voice picker, working in 3
  browsers, on every page

Exit when all six axes hold on real devices and a fresh AI agent fetch
produces correct answers from `@graph` alone.

## Round structure (active plan)

Six rounds, each = one primitive × one journey:

1. Insight page × first-time visitor
2. Operator page × returning bookmarker
3. Domain page × cross-domain explorer
4. Patterns + playbooks × synthesis seeker
5. Browse + search + timeline × directed searcher
6. AEO surface (llms.txt, schema, sitemap, OG) × AI agent

Each round commits separately. Within each, the primitive gets full IA
+ voice + visual + friction + schema + mobile + listen + perf, and
the journey gets walked end-to-end on a real device before moving on.
