# Insight Card Schema

Every atomic insight follows this structure. One claim per card.

## Frontmatter

```yaml
id: ins_<short-slug>            # globally unique, kebab-case
operator: <Full Name>            # who said or shipped this
operator_role: <Role at time>    # e.g. "VP Product, Stripe"
source_url: <https://…>          # primary source link
source_type: podcast|essay|talk|book|thread|memo|research
source_title: <Title>
source_date: YYYY-MM-DD
captured_date: YYYY-MM-DD        # when added to codex
domain: [product, gtm, ai-native, …]    # taxonomy domains
lifecycle: [positioning, onboarding, …] # taxonomy lifecycle tags
maturity: foundational|applied|frontier
artifact_class: framework|playbook|template|workflow|metric-model|case-study|excerpt
score: { originality: 1-5, specificity: 1-5, evidence: 1-5, transferability: 1-5, source: 1-5 }
tier: A|B|C
related: [ins_<other>, …]        # other cards in this corpus
raw_ref: raw/<path>.md            # transcript or source file in this repo (if archived)
```

## Body

```markdown
## Claim
<One sentence. The atomic insight.>

## Mechanism
<Why it works. The underlying causal model.>

## Conditions
<When it applies. When it does not.>

## Evidence
<Quote, example, data, or case the operator referenced. Cite timestamps for podcasts.>

## Signals
<How you know it's working in practice. Measurable outcomes.>

## Counter-evidence
<Where this fails or is contested. Other operators who disagree, with cards if available.>

## Cross-references
<Links to related cards and concepts in this corpus.>
```

## Naming
- File path: `0X_<domain>/<operator-slug>/<insight-slug>.md`
- ID: `ins_<insight-slug>` (no operator prefix; cross-operator uniqueness comes from slug)

## Authoring rules
- Verbatim quotes always in fenced blockquotes with attribution.
- Never paraphrase a number — quote it or omit it.
- If unsure about a date, mark `source_date: unknown` rather than guess.
- Counter-evidence is required for Tier A cards.
