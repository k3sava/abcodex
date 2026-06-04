# routine/ : the daily operator-insight scan

This folder configures a [Claude Code Routine](https://code.claude.com/docs/en/routines)
that scans a curated list of operators for new insights and adds them to this
library on a schedule, from Anthropic's cloud, with no machine of mine needing to
be awake.

- `scan-roster.yaml` is the candidate pool: who and what to scan, by lane.
- `PROMPT.md` is the self-contained instruction set the routine runs each time.

## Create the routine

At [claude.ai/code/routines](https://claude.ai/code/routines), click **New
routine** (or Desktop app: **Routines → New routine → Remote**). Fill it in:

| Field | Value |
| --- | --- |
| **Name** | Daily operator insight scan |
| **Instructions** | `Follow routine/PROMPT.md in this repository. Read it first, then do exactly what it says.` |
| **Model** | Opus 4.8 (best for synthesis quality at one run per day; Sonnet to conserve usage) |
| **Repository** | `k3sava/abcodex` |
| **Environment** | See the network note below. Do not use plain Default. |
| **Trigger** | Schedule → Daily, set a morning local time |
| **Connectors** | Remove all (Google Drive included by default). This routine needs only the repo + web. |
| **Permissions** | Leave "Allow unrestricted branch pushes" OFF for the first runs (writes land on a `claude/` branch and open a PR you review). Turn ON later to commit straight to `main`. |

## The one setting that decides whether it works: network

The **Default ("Trusted")** environment blocks arbitrary domains. This routine's
whole job is fetching operator content from X, Substack, LinkedIn, YouTube, and
personal blogs, all off the default allowlist. On Default it runs "green" and
finds nothing.

Fix: open the environment selector (the cloud icon under Instructions), edit the
environment, set **Network access** to **Custom** with the operator domains in
**Allowed domains** (keep the default package-manager list checked too), or set
it to **Full**. Save before the first run.

## How it writes back

Each run clones `main`, builds a `claude/`-prefixed branch, and opens a PR. Run
`bash scripts/build-all.sh` happens inside the routine so the PR carries the
regenerated index and README. Review the first week of PRs, then flip "Allow
unrestricted branch pushes" ON if you want it to publish to `main` directly (CI
rebuilds the site on push to main either way).

A green run status only means the session did not crash. Open the run to confirm
it actually added cards. Every run is listed with a full transcript, so this can
never rot silently the way a background daemon can.

## Editing the roster

`scan-roster.yaml` is the source of truth for who gets scanned. Add an operator
under the right lane, add a lane, or add topic search-terms. It is read fresh on
every run, so edits take effect the next morning with no routine changes.

## Scope note

The roster spans GTM and marketing, iOS and Apple-platform craft, generative art,
music and audio, AI-native company building, the future of work, and AI builder
tech. That is broader than this library's original GTM focus. If you want to keep
the public library tight to one domain instead, prune `scan-roster.yaml` to those
lanes; the routine follows whatever the file contains.
