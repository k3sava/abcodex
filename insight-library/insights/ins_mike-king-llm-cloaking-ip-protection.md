---
id: ins_mike-king-llm-cloaking-ip-protection
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
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_mike-king-markdown-serving-llm-crawlers, ins_aeo-roadmap-as-executive-readout, ins_mike-king-ai-crawler-499-speed-gate]
raw_ref: 
---

# Wrap proprietary research in JavaScript-rendered divs to protect IP from LLM crawlers; 69% cannot execute JavaScript

## Claim
Serve proprietary original research inside JavaScript-rendered elements to prevent LLM crawlers from extracting and repackaging it. iPullRank data shows 69% of LLM crawlers cannot execute JavaScript at all, and GPTBot fetches JS files only 11.5% of the time without running them.

## Mechanism
LLM crawlers request raw HTML and skip JavaScript execution to reduce compute overhead. Content gated behind client-side rendering is invisible to them. This turns a standard web practice into a defensive IP measure: human visitors and Googlebot (which renders JS) see the full page; extraction-focused crawlers do not. The asymmetry holds as long as LLM crawlers prioritize speed over render fidelity.

## Conditions
Holds when: the content is original research that loses competitive value if a competitor instructs an LLM to extract and rewrite it.
Fails when: the content needs to appear in AI Overviews or ChatGPT search results. Cloaking for those surfaces violates Google spam policy and degrades AI visibility. The triage question is whether the content is a citation asset or a competitive liability.

## Evidence
iPullRank data: 69% of LLM crawlers cannot execute JavaScript; GPTBot fetches JS files without running them 88.5% of the time.

> "I can easily run a prompt like this: read this page, extract all the data, and write a new version of it for [competitor site]." — Mike King, iPullRank, May 14, 2026

## Signals
- LLM crawlers show near-zero engagement with JS-gated sections in server logs
- Original research retains differentiation as AI content volume rises

## Counter-evidence
Cloudflare and CDN-level bot blocking offer alternative IP protection without JS rendering complexity. If future LLM crawlers gain full JS execution, the protection disappears without notice.

## Cross-references
- `ins_mike-king-markdown-serving-llm-crawlers`
- `ins_aeo-roadmap-as-executive-readout`
