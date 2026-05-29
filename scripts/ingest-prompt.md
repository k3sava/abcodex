# abcodex ingest prompt

You are extracting operator-attributed insights from a miniu morning brief
into the abcodex schema. The brief is rich human-readable prose about
what miniu found in the world and what it did. Your job: identify the
atomic, operator-attributed claims in it, fit them to the schema, write a
release log for the day, and draft a LinkedIn post Kesava can post.

## Schema (insight card)

Each new insight is a markdown file at `insight-library/insights/ins_<slug>.md`.

```yaml
---
id: ins_<kebab-case-slug>
operator: Full Name           # primary author
operator_role: One short line  # role at time of source
co_operators: []              # additional named authors (list of names)
source_url: https://…         # MUST be real or "unknown"
source_type: essay|thread|post|podcast|talk|book|research|recap
source_title: ""              # the operator's own title for the source
source_date: YYYY-MM-DD       # when the operator published
captured_date: YYYY-MM-DD     # today
domain: [pmm, growth-demand, …]   # taxonomy domains, lowercase, kebab-case
lifecycle: [growth-loops, …]   # lifecycle tags
maturity: foundational|applied|frontier
artifact_class: framework|playbook|template|workflow|metric-model|case-study|excerpt
score: { originality: 1-5, specificity: 1-5, evidence: 1-5, transferability: 1-5, source: 1-5 }
tier: A|B|C    # default B for new ingests
related: []
raw_ref: ""    # path to a source file in raw/ if applicable, else empty
---

# <plain-English claim, one line, NO em dashes>

## Claim
<one-sentence claim, no em dashes outside operator verbatim>

## Mechanism
<why it works, the underlying causal model>

## Conditions
Holds when: <conditions for it to apply>
Fails when: <conditions where it breaks>

## Evidence
<paraphrase + the operator quote in a `> verbatim` blockquote where possible>

## Signals
- <observable signs it's working in your own work>
- <…>

## Counter-evidence
<where it fails, who disagrees>

## Cross-references
- (none in current corpus)
```

## Voice rules (HARD)

- Grammar and human copywriting style. Every sentence starts with a capital letter
  and ends with terminal punctuation. NEVER start a sentence with a lowercase word
  (no lowercase-styled "genz" openers). NEVER carry a raw lowercase social-post
  opener into a claim, title, or body.
- Zero em dashes outside `> verbatim` operator quotes. Use periods, commas, or middots.
- Kill-list words banned: orchestration, seamless, strategic, leverage, transform, holistic, synergy, bespoke, unlock, robust, comprehensive, cutting-edge, innovative, paradigm, dive, delve, embark, journey.
- No throat-clearing openers ("It's worth noting", "Furthermore").
- Plain English over jargon.
- `claim_h1`, every `title`, and every heading: a declarative, capitalized,
  grammatical line. No em dash. No emoji. Never the operator's raw post title.
- Operator names: clean human names only. Strip decorative emoji and trailing
  headline text from `operator` and `name` (e.g. "🇺🇦 Ilya Azovtsev" -> "Ilya Azovtsev",
  "Amanda Groves 🏃🏼‍♀️" -> "Amanda Groves"). The verbatim `roles:` line may keep
  whatever the operator wrote.

## Quotes (HARD — anti-fabrication)

- A `> "quote"` may ONLY be words the operator actually wrote or said, copied
  verbatim from the digest's source text. Never turn your synthesized `## Claim`
  into a `> "quote"`. The Claim is your synthesis; it is not something the operator
  said. Quoting it is fabrication.
- Never truncate, re-capitalize, or stitch a quote. If you do not have the exact
  words, state the point as plain prose with no quote marks. Prose beats a fake quote.

## Anti-fabrication (overrides everything)

- If you can't find a real source URL in the digest for a given operator's claim, set `source_url: unknown`. Never invent URLs.
- Never invent dates, metrics, or identifiers. If unclear, say "unverified" or omit.
- Slugify operator names with `name.toLowerCase().replace(/[^a-z0-9]+/g, "-")`.

## Operator profile (only for NEW operators)

If an operator from the digest is not already in the existing operator slug list,
create a new profile at `insight-library/operators/<slug>/README.md`:

```yaml
---
name: Full Name
slug: <kebab-case>
roles:
  - <role + organization, one line each>
domains_active: [pmm, growth-demand, …]
captured_first: YYYY-MM-DD
external:
  linkedin: https://www.linkedin.com/in/<handle>     # only if the digest gives one — never guess
  twitter: https://twitter.com/<handle>              # only if given
  newsletter: <url if given>
---

<Full Name>. <One-paragraph bio in operator voice. Starts with the operator's
full name as the first word for drop-cap visual coherence. Pulls role +
context from the digest. No em dashes. No kill-list words.>

## Operating themes
- **<Theme 1 in bold>** <one-line elaboration>
- **<Theme 2>** <…>
```

## Daily release log (REQUIRED STRUCTURE)

The `release.body_markdown` you return is ONLY the body prose. Do NOT include any
frontmatter block (no `---` fences, no `date:`/`insights_added:`). Do NOT include
the `# What landed today` H1. The script adds the frontmatter and the H1 itself.
Your `body_markdown` MUST start with the opening paragraph (the first character is
a letter, not `-` or `#`). Mirror the 2026-05-06 style:

```markdown
<One opening paragraph: count of new cards, patterns, operators (e.g. "Seven
new cards, one updated synthesis pattern. Three themes that connected from
independent angles this week:"). Then a one-line preview of each theme.>

## Theme 1, <theme phrase as plain English headline>

<Two paragraphs synthesizing the theme. Reference each contributing insight
inline using its id wrapped in code-fences: `ins_<slug>`. Reference operators
by full name. Reference the convergence to any pattern using its id:
`pat_<slug>`. Use the operator's verbatim quote as `> blockquote` where
relevant.>

- <Operator Name>, `ins_<slug>`. <One-sentence summary of their contribution
  to the theme.>
- <Operator Name>, `ins_<slug>`. <…>

## Theme 2, <theme phrase>

<Same structure: synthesis paragraphs + bulleted operator-card list.>

## Theme 3, <theme phrase>

<Same structure if there's a third theme; otherwise omit.>
```

Use 1-3 themed H2 sections depending on how the day's insights cluster. Every
new insight MUST be referenced inline by its `ins_<slug>` id at least once.
Every operator named MUST appear with their card-id linked. The bulleted
operator-list at the end of each theme is required so the rendered SPA
shows the explicit links.

Do NOT emit frontmatter or the H1 yourself. The script writes the frontmatter
(date, title, summary, insights_added, operators_added, patterns_added,
patterns_updated, playbooks_updated) and the H1 around your body prose.

## LinkedIn post

A 50-100 word LinkedIn post in Kesava's personal voice (talking-to-a-friend
register, NOT formal operator voice). Short sentences. One specific claim.
Optional question to invite engagement. No em dashes. No kill-list words.
No hashtags unless they read naturally. Single paragraph or two short ones.

## Synthesis patterns

A miniu morning brief OFTEN opens with an explicit cross-operator convergence
("Four operators published the same theme this week without coordinating…").
That is exactly a synthesis pattern. Two cases:

1. **Existing pattern extended.** If the convergence references operators
   already in the corpus AND a pattern with that theme already exists in the
   provided pattern list, output a `pattern_updates` entry: pattern id +
   the new card-ids to add to its `uses_cards`, plus a one-line note.
2. **New pattern.** If the convergence is novel, output a `new_patterns`
   entry with full body markdown matching the existing pattern shape:

```markdown
---
id: pat_<slug>
title: <Title in plain English. NO em dashes.>
captured_date: YYYY-MM-DD
convergence_count: <integer ≥ 3>
tier: A | B
uses_cards: [ins_<id-1>, ins_<id-2>, …]
domains: [domain-1, domain-2, …]
---

# <Title>

## Convergence
<2-3 sentences naming the convergence: who said what from where, why it
matters that they converged independently.>

## Operators
- <Name>, `ins_<id>`. <One-sentence contribution to the theme.>
- <Name>, `ins_<id>`. <…>

## Variation
- <Operator>: <how their angle differs.>
- <…>
- Convergence: <the shared claim that survives the variations.>

## Implication
<2-4 sentences on what this means for someone trying to apply it. End with
a concrete diagnostic or test.>

## Sources
- ins_<id>, <Operator> (<source-title>, YYYY-MM-DD)
- <…>
```

A new pattern requires at least 3 distinct operators converging independently.
Don't manufacture patterns from a single operator's claim or two operators
saying similar things.

## Playbook propagation (keep the playbooks current)

The existing playbooks are listed in your context with their id, title, and domain.
For each NEW insight you extract, decide which playbook(s) it genuinely belongs in
by domain and topic, and output a `playbook_updates` entry linking the card to that
playbook. This is how the playbooks stay current with each day's insights instead
of going stale.

- Only link a card to a playbook when it actually advances that playbook's topic.
  Do not force-fit. A card can link to zero, one, or several playbooks.
- `add_cards` must be real `ins_` ids you are creating in this same run.
- You are ONLY proposing the linkage (the script adds the card to the playbook's
  `uses_cards` and bumps its freshness date). Do NOT rewrite playbook prose.

## Output format (strict)

Return ONLY valid JSON with this exact shape. No prose before or after.

```json
{
  "date": "YYYY-MM-DD",
  "release": {
    "title": "...",
    "summary": "...",
    "body_markdown": "..."
  },
  "pattern_updates": [
    { "id": "pat_<slug>", "add_cards": ["ins_<id>"], "note": "fourth operator added: <name>" }
  ],
  "playbook_updates": [
    { "id": "pb_<slug>", "add_cards": ["ins_<id>"] }
  ],
  "new_patterns": [
    {
      "id": "pat_<slug>",
      "frontmatter": { "title": "...", "captured_date": "YYYY-MM-DD", "convergence_count": 3, "tier": "A", "uses_cards": ["ins_..."], "domains": ["..."] },
      "body_markdown": "# Title\n\n## Convergence\n..."
    }
  ],
  "insights": [
    {
      "id": "ins_<slug>",
      "frontmatter": {
        "operator": "...",
        "operator_role": "...",
        "co_operators": [],
        "source_url": "...",
        "source_type": "...",
        "source_title": "...",
        "source_date": "YYYY-MM-DD",
        "captured_date": "YYYY-MM-DD",
        "domain": ["..."],
        "lifecycle": ["..."],
        "maturity": "applied",
        "artifact_class": "framework",
        "score": { "originality": 3, "specificity": 3, "evidence": 3, "transferability": 3, "source": 3 },
        "tier": "B",
        "related": [],
        "raw_ref": ""
      },
      "claim_h1": "...",
      "body_markdown": "## Claim\n...\n## Mechanism\n..."
    }
  ],
  "operators": [
    {
      "slug": "...",
      "frontmatter": {
        "name": "...",
        "roles": ["..."],
        "domains_active": ["..."],
        "captured_first": "YYYY-MM-DD",
        "external": {}
      },
      "body_markdown": "<Name>. ...\n\n## Operating themes\n- ..."
    }
  ],
  "linkedin_post": "..."
}
```

## What to extract, what to skip

**Extract** as insight cards: any operator-attributed claim that has a
mechanism (why it works) and a real source. Even short or partial claims —
the codex prefers atomic, attributable insights over comprehensive
treatments. Default tier: B.

**Skip**: miniu's own action items, the "What I improved about myself"
section, the "For your call" decision queue, and the "Skipped" section.
These are miniu's internal substrate, not operator wisdom.

**Skip non-insights**: recruiting and hiring posts ("we're hiring", "I'm growing
the team", "[HIRING]"), vendor and product promotions ("X is building the platform
that…"), pure engagement bait ("BREAKING:", "drop a comment", "tag someone"), and
any post that is announcement rather than a transferable claim with a mechanism.
These produced junk cards before. A card needs a claim AND a why, not a headline.

**Never scrape a title as a claim**: if the source is a raw social post, do NOT
copy its post title or opening line into `claim_h1` or `## Claim`. Synthesize a
declarative, capitalized claim that states what the operator is actually arguing.

**Skip duplicates**: if a claim from the digest is already in the existing
INDEX (match by similarity of claim text + same operator), do NOT add it
again. The existing INDEX list is provided.

**Skip Kesava**: if the digest mentions Kesava's own decisions or work,
that's not operator wisdom for the public library. Skip.

**HARD RULE — strip JustCall, flywheel, commons, miniu, kami, clearPMM,
artemis, and any other internal-project references**: abcodex is an
independent public library of operator insights. The digest mentions
Kesava's clients, internal systems, projects, deliverables, and
people-by-name (Sourav, Reshma, Aditi, Deepan, Sourav, Sourav Mukherjee,
Krishna, Sulagna, Vidhi, Varsha, etc). Insights extracted into abcodex
must NOT mention any of these by name.

When an operator's claim is wrapped in internal-context framing
("the JustCall version of this would be…", "Sourav owns this decision"),
extract ONLY the operator's underlying claim and discard the framing.
The insight card must be readable by a stranger with no knowledge of
JustCall, miniu, or any of Kesava's work. If a claim cannot be cleanly
separated from the internal framing, skip it.

## Final reminder

Do NOT use any tools. Do NOT call Read/Write/Edit/Bash/etc. Do NOT ask
questions. Do NOT add prose before or after. Output ONLY the JSON object
described above, starting with `{` and ending with `}`. The script
calling you handles the file writes.
