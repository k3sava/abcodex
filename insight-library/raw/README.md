# Raw Sources

Immutable source layer. Append-only. Never edit content after capture — corrections go in a sibling `<file>.correction.md`.

## Structure
- `podcasts/` — transcripts (Lenny's, 20 Product, Acquired, Invest Like the Best, Decoder, Lex, etc.)
- `essays/` — long-form posts, Substacks, blog archives
- `talks/` — conference talks (transcripts or annotated notes)
- `threads/` — LinkedIn / X threads, captured with timestamps
- `books/` — chapter notes and pull-quotes (under fair use, with citations)
- `research/` — analyst reports, academic papers, industry studies

## File format
Each raw file:
- Slugged filename: `<operator-slug>--<title-slug>--YYYY-MM-DD.md`
- Frontmatter:
  ```yaml
  source_type: podcast|essay|talk|thread|book|research
  source_title: <Title>
  source_url: <https://…>
  source_date: YYYY-MM-DD
  operators: [Name1, Name2]
  captured_date: YYYY-MM-DD
  license_note: <fair use | open license | author permission | unknown>
  ```
- Body: full transcript or full text of source. For long sources, link to canonical and store excerpts only.

## Why raw is separate
Atomic insight cards (`0X_<domain>/...`) cite raw files. The split keeps:
- Provenance auditable — you can always go back to the source.
- Cards atomic — one claim per file, no narrative bloat.
- Licensing clean — raw is the licensing boundary; cards are derivative.
