---
id: ins_bottleneck-is-context-not-capability
operator: Sherwin Wu
operator_role: Head of Engineering, OpenAI API and Developer Platform
source_url: https://www.lennysnewsletter.com/p/engineers-are-becoming-sorcerers
source_type: podcast
source_title: Sherwin Wu — Codex inside OpenAI, engineers as managers — Lenny's Podcast
source_date: 2026-04-28
captured_date: 2026-05-01
domain: [ai-native, engineering, product]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 5, evidence: 5, transferability: 5, source: 5 }
tier: A
related: [ins_personal-pattern-hoarding, ins_llm-wiki-pattern]
raw_ref: raw/podcasts/sherwin-wu--openai-codex-engineers-as-managers--2026-04-28.md
---

# When the agent isn't doing what you want, fix the context, not the model

## Claim
The dominant failure mode for AI agents in production isn't model capability. It's missing context. The fix is to encode tribal knowledge into greppable artifacts, markdown files, code comments, .md skills, a wiki, so the agent can find and apply the knowledge it needs. The team's quality is gated by contextDB completeness, not model strength.

## Mechanism
Frontier models are competent at general reasoning. Their failure modes appear when they lack specifics: how this codebase is organized, what conventions the team follows, what previous decisions ruled out. Each missing piece of context produces a wrong answer. Encoding the context once compounds: every future task starts with the right priors. The investment shifts from prompt engineering (volatile) to context engineering (durable).

## Conditions
Holds when:
- The team can identify and document tribal knowledge before each agent task fails on it.
- The context corpus is greppable / retrievable, not buried in a wiki nobody updates.

Fails when:
- The model genuinely lacks capability for the task. No amount of context fixes a missing capability.
- The corpus is wrong. Encoded misinformation is worse than no encoding.

## Evidence
> "When the agent isn't doing what you want, it's usually a problem with context — you've underspecified or there's just not enough information available."

OpenAI's discipline: encode tribal knowledge via comments, structure, .md files, Skills. The repository itself becomes the contextDB. 95% of OpenAI engineers use Codex daily; the heavy users open 70% more PRs; the gap widens with experience.

· Sherwin Wu on Lenny's Podcast, 2026-04-28

## Signals
- Agent failures get diagnosed against the context corpus first, not the prompt.
- The corpus grows in step with team size; documentation is daily work, not a quarterly clean-up.
- New team members onboard via the corpus, the same way an agent does.

## Counter-evidence
Andrej Karpathy's LLM-wiki pattern is the disciplined version of this approach. Without the discipline (append-only raw, synthesized pages, lint cycles), the corpus rots and degrades agent quality. "Encode tribal knowledge" is correct; "encode it well enough that it stays current" is the actual hard work.

## Cross-references
- `ins_llm-wiki-pattern`, Karpathy's substrate pattern that operationalizes this insight
- `ins_personal-pattern-hoarding`, Simon Willison's personal-corpus version
