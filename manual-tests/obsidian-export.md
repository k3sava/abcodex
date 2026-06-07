# Manual test: Obsidian export
1. Run `npm run dev` and open the dashboard.
2. Import extension JSON from Settings.
3. Process queue, then click **Export Obsidian ZIP**.
4. Extract the ZIP into an Obsidian vault.
5. Expected: `/Social Brain/Captures`, `/Topics`, and `/Operators` contain markdown with wikilinks, tags, source URLs, summaries, claims, contradictions, and follow-up reading.
