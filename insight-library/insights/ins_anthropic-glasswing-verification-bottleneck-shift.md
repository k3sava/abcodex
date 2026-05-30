---
id: ins_anthropic-glasswing-verification-bottleneck-shift
operator: Anthropic
operator_role: AI safety and research company
co_operators: []
source_url: "https://www.anthropic.com/research/glasswing-initial-update"
source_type: research
source_title: "Project Glasswing: Initial Update"
source_date: 2026-05-22
captured_date: 2026-05-25
domain: [ai-engineering]
lifecycle: []
maturity: frontier
artifact_class: case-study
score: { originality: 3, specificity: 4, evidence: 4, transferability: 4, source: 5 }
tier: C
related: [ins_anthropic-claude-security-data-flow-scanning, ins_judgment-doesnt-compress]
raw_ref: 
---

# AI has removed the vulnerability discovery bottleneck in security; the rate limiter is now verification, disclosure, and patching speed

## Claim
AI has removed the constraint that previously limited progress on software security: finding vulnerabilities. The new constraint is human throughput on verification, disclosure, and remediation.

## Mechanism
AI systems scan codebases at scale using data flow analysis and cross-codebase pattern recognition, finding vulnerabilities that escape manual review. The bottleneck moves from discovery (which AI handles) to verification (does this finding represent a real risk?), disclosure (coordinating with affected parties), and patching (human engineers implementing fixes). Each downstream step still requires human judgment.

## Conditions
Holds when: AI scanning tools are deployed and generating findings faster than teams can process them. Applies to any domain where AI generates outputs faster than humans can verify them. Fails when: verification and disclosure infrastructure scales to match AI discovery throughput, or when AI-generated findings have poor signal-to-noise ratios.

## Evidence
Anthropicâ€™s May 22 Glasswing update reports 10,000+ high or critical vulnerabilities found in the first month across approximately 50 partner organizations using Claude Mythos Preview.

> "Progress on software security used to be limited by how quickly we could find new vulnerabilities. Now it's limited by how quickly we can verify, disclose, and patch."

## Signals
- Security teams are backlogged on triage while AI continues generating new findings
- Time-to-patch is becoming the key security metric, replacing findings count
- The same pattern appears in content production and outbound research: generation is cheap, verification is the constraint

## Counter-evidence
In well-resourced organizations with automated patch pipelines, the verification bottleneck may already be partially addressed. The shift assumes AI-generated findings have acceptable signal-to-noise ratios, which depends on the specific AI system and scan context. Glasswing is an early program; the finding rate may not sustain as the easiest vulnerabilities are patched.

## Cross-references
- [[pat_verification-as-human-job]]: Glasswing provides the most concrete domain evidence for the verification bottleneck pattern
- [[ins_anthropic-claude-security-data-flow-scanning]]: data flow scanning is the specific technique Glasswing uses to surface business logic flaws
