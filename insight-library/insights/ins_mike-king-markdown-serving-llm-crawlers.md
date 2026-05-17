---
id: ins_mike-king-markdown-serving-llm-crawlers
operator: Mike King
operator_role: Founder, iPullRank
co_operators: []
source_url: "https://ipullrank.com/cloaking-for-llms"
source_type: essay
source_title: Cloaking for LLMs
source_date: 2026-05-14
captured_date: 2026-05-17
domain: [aeo, seo]
lifecycle: [content-ops, technical-seo]
maturity: applied
artifact_class: playbook
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_mike-king-llm-cloaking-ip-protection, ins_mike-king-499-ai-bot-silence]
raw_ref: 
---

# Serve Markdown to AI crawlers you want indexing your content; Cloudflare measured an 80% token size reduction versus full HTML

## Claim
When the goal is AI citation and index inclusion rather than IP protection, serve a lightweight Markdown version to LLM crawlers instead of full HTML. Cloudflare measured an 80% reduction in token size.

## Mechanism
HTML carries structural markup, scripts, and navigation elements that LLMs must process before reaching the content. Markdown strips all of that. Smaller token payloads mean lower extraction cost for the crawler and, in models with context limits, higher likelihood that the substantive content survives into the context window intact. More signal per token means the content is more likely to be retained and cited.

## Conditions
Holds when: the goal is AI citation or summary inclusion for the content in question and the content is not IP-sensitive.
Fails when: the content should be protected from extraction (see complementary cloaking insight). Requires conditional serving logic that detects crawler user agents and routes to the Markdown endpoint.

## Evidence
Cloudflare measured an 80% reduction in token size when Markdown is served to AI crawlers versus full HTML, per King's May 2026 analysis.

## Signals
- Reduced crawler bandwidth for LLM-designated routes in server logs
- Higher AI Overview or AI search citation rate for content served via Markdown endpoint

## Counter-evidence
Some AI crawlers strip markup client-side already; the token reduction may be incremental for those. Conditional serving logic adds engineering maintenance cost.

## Cross-references
- `ins_mike-king-llm-cloaking-ip-protection`
- `ins_mike-king-499-ai-bot-silence`
