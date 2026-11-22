---
id: ins_tunguz-lakehouse-ai
operator: Tom Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/the-lakehouse-for-ai/
source_type: essay
source_title: "The Lakehouse for AI"
source_date: 2026-11-17
captured_date: 2026-11-22
domain: [ai-native, engineering-ai-eng]
lifecycle: [architecture]
maturity: frontier
artifact_class: case-study
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 2 }
tier: C
related: []
raw_ref: ""
---

# AI labs are replacing separate training and inference data stores with a single columnar format

## Claim
Leading AI labs and infrastructure teams are converging on a single multimodal data layer built on the Lance columnar format, replacing separate copies of blob storage, Parquet files, and vector indexes.

## Mechanism
The core efficiency is incremental column backfills: new data appends to existing tables without rewriting prior rows, so only changed data moves. A single format handles unstructured data (images, video, embeddings), column appends, distributed reads across thousands of nodes, and ad-hoc SQL queries. Each copy of data that gets eliminated removes a coordination surface. At AI lab scale, the gap between ingestion and availability for training or serving shrinks because there is no ETL hop from one format to another.

## Conditions
Holds when: Workloads mix unstructured data with structured metadata and require both high-throughput batch reads for training and low-latency serving queries.
Fails when: The database is purely structured (Postgres, MySQL), or the team is early enough that the coordination cost of multiple formats is not yet a bottleneck.

## Evidence
LanceDB raised a $57.5M Series B ($98.5M total). Revenue grew more than 10x year over year; open-source downloads reached 120M (up 6x). Cited deployments: Exa (35PB across 100B pages, crawl-to-search under five minutes), Adobe (40-50PB across 800K tables), Runway, Microsoft AI (billions of rows across training runs), and NVIDIA Cosmos (tens of thousands of GPU training runs).

> "the only option that handled unstructured data, column appends, distributed reads & ad-hoc SQL all at once."
> — Runway CTO

## Signals
- Multiple teams independently retire their vector index and blob storage for a single format.
- Crawl-to-index latency falls after switching away from separated storage layers.
- Training and serving teams pull from the same table without a nightly ETL job between them.

## Counter-evidence
Theory Ventures (Tunguz's firm) led LanceDB's Series A. The post is an investment announcement. All evidence comes from customer testimonials provided to the company, not independently verified. PostgreSQL and MySQL remain the dominant data stores at most software companies; this pattern applies at the extreme scale of frontier AI labs and large model providers, not at general-purpose software teams.

## Cross-references
- (none in current corpus)
