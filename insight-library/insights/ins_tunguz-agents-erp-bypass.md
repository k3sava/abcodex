---
id: ins_tunguz-agents-erp-bypass
operator: Tomasz Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://tomtunguz.com/three-years-in/
source_type: essay
source_title: "Three Years In"
source_date: 2026-07-10
captured_date: 2026-07-14
domain: [ai-native, growth-demand]
lifecycle: [strategy, ai-workflow]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 3, evidence: 3, transferability: 4, source: 5 }
tier: B
related: [ins_tunguz-fde-deployment-moat, ins_tunguz-harness-three-disciplines, ins_tunguz-inference-stack-fragmentation]
raw_ref: ""
---

# AI agents bypass ERP switching costs by automating operational workflows from within rather than displacing the system at once

## Claim
AI agents displace ERP systems by entering through individual operational workflows rather than requiring a rip-and-replace migration, gradually draining operational value from systems whose switching costs had protected them for decades.

## Mechanism
Traditional ERP displacement required migrating the entire data model at once: a multi-year, eight-figure project that justified the incumbent's switching-cost moat. AI agents do not migrate data. They automate individual workflows, one subprocess at a time, while the ERP remains nominally in place. Order processing, approval routing, inventory reconciliation each get an agent layer. Over time, the operational value accumulates in the agent layer while the ERP becomes an expensive shell. By the time the organization recognizes it is paying for a shell, the migration is already 70% complete. The switching cost evaporates through incremental displacement rather than a big-bang decision.

## Conditions
Holds when: workflows are discrete enough to be individually automated; the AI agent can read from ERP data without requiring a full migration; the organization operates by workflow habit rather than by system mandate.
Fails when: the ERP owns the authoritative data model and no read-access is available; compliance or audit requirements mandate a single system of record; the organization lacks the engineering capacity to build and maintain agent integrations.

## Evidence
Tunguz observes in "Three Years In" that agents "bypass traditional ERP rip-and-replace economics by attacking operational workflows from within, making legacy systems vulnerable to displacement despite decades of switching-cost protection." The underlying model: Theory Ventures invested in Doss and Backops as operating system plays on this thesis, and in Dropzone and Maze as security layer plays on the same attack surface created when agents access ERP data streams.

## Signals
- Sales teams using agents for pipeline management while the CRM remains the official system of record
- Finance teams routing approval workflows through AI agents while the ERP books the final entry
- Procurement teams doing vendor research and comparison via agents while purchase orders still close in the ERP

## Counter-evidence
Enterprise IT governance often prevents agents from accessing core ERP data without a formal integration project, recreating the migration barrier in a different form. Security and audit requirements may force the ERP to remain the single authoritative record, limiting agent scope to read-only analytics rather than operational control. At the highest-stakes workflows (financial close, regulatory reporting), the ERP's audit trail requirements may resist displacement indefinitely.

## Cross-references
- `ins_tunguz-fde-deployment-moat`: FDE teams are often the ones who build these incremental agent integrations, making the deployment moat a prerequisite for the ERP bypass play.
- `ins_tunguz-harness-three-disciplines`: the harness design patterns that enable reliable agent operation are what make individual workflow agents stable enough to trust with operational processes.
- `ins_tunguz-inference-stack-fragmentation`: ERP bypass accelerates as specialized inference layers provide the right cost and latency profile for each operational workflow type.
