---
id: ins_mike-king-google-guide-contradicts-own-research
operator: Mike King
operator_role: CEO, iPullRank
co_operators: []
source_url: "https://ipullrank.com/google-ai-search-guidance"
source_type: essay
source_title: Google AI Search Guidance
source_date: 2026-05-18
captured_date: 2026-05-25
domain: [aeo, seo]
lifecycle: []
maturity: frontier
artifact_class: case-study
score: { originality: 4, specificity: 4, evidence: 4, transferability: 3, source: 4 }
tier: B
related: [ins_mike-king-agentic-rag-5-gatekeeper, ins_mike-king-markdown-serving-llm-crawlers, ins_mike-king-499-ai-bot-silence]
raw_ref: 
---

# Google's AI optimization guide contradicts its own technical research in four places; calling it 'still SEO' is a rhetorical strategy, not a neutral description

## Claim
Google's public AI optimization guide contradicts its own published technical research in four specific ways. The framing of AEO as "still SEO" is a deliberate strategy to keep this work inside existing SEO budgets, not a neutral description of the discipline.

## Mechanism
Four specific contradictions: the guide dismisses chunking despite MUVERA and passage indexing research; it says llms.txt does not matter while Anthropic and others actively use it; it conflates Google's specific non-use of a format with that format being globally irrelevant; and it reframes all AEO as "still SEO." Each contradiction serves a strategic interest. If AEO is just SEO, brands do not allocate new budgets, new teams, or new practitioners.

## Conditions
Holds when: Google's guide is treated as the authoritative frame for AEO investment decisions. Applies when practitioners use it to prioritize or deprioritize AEO work against other SEO budgets. Fails when: brands evaluate AEO guidance against the technical research directly, or when they operate primarily outside Google's search ecosystem.

## Evidence
King's May 18 iPullRank analysis catalogues four specific contradictions between Google's public AI optimization guide and Google's own technical papers on passage indexing, retrieval, and the MUVERA system.

> "Google reframing this work as the same old discipline isn't a neutral observation. It is the rhetorical move that keeps the work uncompensated."

## Signals
- Internal technical papers describe mechanisms (chunking, passage indexing) the public guide dismisses
- Other AI systems actively use formats Google says do not matter
- AEO investments are being evaluated against existing SEO budgets rather than as a separate capability

## Counter-evidence
Google's public guide is calibrated for a general practitioner audience and may simplify deliberately. Not all technical research reflects current production behavior. The guide may accurately describe what Google uses today even if the research reflects earlier or experimental work.

## Cross-references
- [[pat_aeo-triangle]]: the 5-gatekeeper model is the operative retrieval frame King uses against Google's guide
- [[ins_mike-king-agentic-rag-5-gatekeeper]]: the 5-gatekeeper model (Planner, Retriever, Reader, Critic, Synthesizer) is the alternative frame for AEO retrieval
