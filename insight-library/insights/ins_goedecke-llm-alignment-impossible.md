---
id: ins_goedecke-llm-alignment-impossible
operator: Sean Goedecke
operator_role: Software engineer and technical blogger
co_operators: []
source_url: https://seangoedecke.com/alignment-is-impossible/
source_type: essay
source_title: "Reliably aligning LLMs is impossible in principle"
source_date: 2026-11-02
captured_date: 2026-11-07
domain: [engineering, ai-native-company-building]
lifecycle: [ai-workflow, strategy-and-bets]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 2, transferability: 3, source: 4 }
tier: B
related: [ins_goedecke-engagement-metrics-wrong-audience, ins_goedecke-ai-agency-noticing]
raw_ref: ""
---

# Knowing whether an LLM is reliably aligned is impossible in principle, not merely difficult

## Claim
We cannot know whether an LLM is reliably aligned because LLMs lack fixed goals, and motive does not exist at the detail level required for verification.

## Mechanism
Three compounding problems prevent alignment verification. First, LLMs imitate varied human writing rather than pursuing a fixed objective, so there is no stable goal to align. Second, mechanistic interpretability faces three irresolvable gaps: dangerous behaviors are rarely observed before they trigger, so they go unlabeled; feature labels are semantically ambiguous in the way Kripke's quaddition problem shows (a "kindness" feature might really be "kindness unless condition X"); and the billions of interacting features per token exceed human interpretive capacity. Third, delegation to other models as checkers merely pushes the problem up one level without resolving it. The practical implication: standard mitigations (chain-of-thought monitoring, sandboxing, human oversight) help at current capability levels but cannot constrain a system that is sufficiently more capable than its overseers.

## Conditions
Holds when: AI systems approach or exceed human-level strategic reasoning, making behavioral monitoring unreliable as a sole safety measure.
Fails when: a future interpretability breakthrough makes it possible to verify specific goal-directed properties directly in weights.

## Evidence
Goedecke argues by analogy to hiring a nanny: trust is built through observed behavior over time, not through a complete map of a mind. He adapts Kripke's quaddition problem from philosophy of language to show that feature labels are underdetermined by behavior. Mechanistic tracing can explain computations without explaining meaning, so full motive attribution "bottoms out early." He does not cite empirical studies; the argument is structural.

## Signals
- AI safety organizations publishing negative interpretability results, where known harmful features are systematically mislabeled
- Deployment decisions that rely exclusively on behavioral testing rather than weight-level verification

## Counter-evidence
Goedecke himself says interpretability is valuable for everyday improvements such as reducing reward hacking. Wolf et al. (ICML 2024) show formal limits on alignment under specific frameworks, but their scope is narrower than Goedecke's claim. Others argue that behavioral testing at scale provides sufficient practical safety guarantees even without complete interpretability. The nanny analogy cuts both ways: humans trust other humans without full mental access, and that trust is reliable enough for most purposes.

## Cross-references
- ins_goedecke-engagement-metrics-wrong-audience
- ins_goedecke-ai-agency-noticing
