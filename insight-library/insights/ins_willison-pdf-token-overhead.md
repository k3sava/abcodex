---
id: ins_willison-pdf-token-overhead
operator: Simon Willison
operator_role: Creator of Datasette; co-creator of Django; prolific LLM and agentic-engineering blogger
co_operators: []
source_url: https://simonwillison.net/2026/Aug/7/pdfs-are-terrible/
source_type: post
source_title: "The Tokenpocalypse Is Here: Companies Are Scrambling To Stop Spending So Much on AI"
source_date: 2026-08-07
captured_date: 2026-08-09
domain: [engineering, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: case-study
score: { originality: 3, specificity: 4, evidence: 4, transferability: 5, source: 3 }
tier: B
related: [ins_willison-sonnet5-tokenizer-cost]
raw_ref: ""
---

# PDF-to-markdown conversion is one of the largest unplanned cost drivers in enterprise AI deployments because format artifacts inflate token counts with no reasoning value

## Claim
Converting PDFs to markdown is one of the primary unplanned cost drivers in enterprise AI systems: the conversion process produces tokens for layout artifacts, redundant whitespace, and formatting metadata that carry no informational value for the model but count against every API call.

## Mechanism
PDF format preserves print fidelity, not semantic structure. When an enterprise AI pipeline ingests PDFs, conversion must translate layout-encoded documents into text. OCR-based or markdown-based extraction produces tokens for every layout artifact: header formatting, table cell boundaries, footnote markers, page numbers, column separators, and whitespace. The extracted text routinely runs 2-4x longer than the underlying content warrants. Every API call against this inflated representation pays for tokens that carry no reasoning value. Across an enterprise knowledge base ingesting thousands of documents, the waste compounds with every query.

## Conditions
Holds when: enterprise AI pipelines ingest documents that originated as PDFs or scanned images; document volume is high (contracts, reports, policies, forms).
Fails when: PDFs contain primarily simple text with minimal formatting, reducing conversion overhead; or when conversion tooling performs semantic extraction rather than layout-preserving OCR; or when document input volume is small relative to total token spend.

## Evidence
Stuart Henderson, Accenture's client group lead, identified PDF-to-markdown conversion as "one of the big token chewers" in enterprise AI deployments, in reporting by Wired on enterprise AI cost overruns. Willison linked this finding and framed it structurally: PDFs are the wrong format for information storage and transfer, and organizations continuing to use them as the primary document format pay an avoidable AI cost multiplier on every document ingestion run.

## Signals
- API token costs grow faster than usage growth when document ingestion volumes scale up
- AI pipelines show disproportionately high token consumption for document-heavy workflows relative to query-heavy ones
- Switching from PDF ingestion to structured-data formats reduces API costs measurably without changing model quality or task throughput

## Counter-evidence
Not all PDF conversion creates significant waste. PDFs containing primarily text with simple formatting can be converted with minimal overhead relative to the underlying content. The largest waste concentrates in visually dense PDFs: financial reports, contracts with complex tables, and scanned documents where OCR must infer text from pixel data. Some organizations also require PDF fidelity for compliance, audit trail, or regulatory reasons, making structured-data alternatives impractical regardless of cost.

## Cross-references
- `ins_willison-sonnet5-tokenizer-cost`: tokenizer changes create hidden cost inflation on model version updates; this card identifies document format as a separate, additive source of the same class of token waste, present on every ingestion run regardless of model version.
