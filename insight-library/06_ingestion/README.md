# High-Volume Ingestion Layer

This folder is designed for scale: hundreds of sources and insights.

## Files
- `source-master-index.md`: master list grouped by domain and source type.
- `insight-backlog.md`: atomic insight candidates to process into thought-leader files.
- `ingestion-sprint-plan.md`: batching approach to process 100s of assets.

## Pipeline
1. Add source entry with metadata.
2. Parse into candidate insight units.
3. Score each unit with the scoring model.
4. Promote qualified units into leader/domain/playbook files.
