---
id: ins_ronacher-ai-detector-structure-bias
operator: Armin Ronacher
operator_role: Creator of Flask, Jinja2, Click, and Werkzeug; software engineer and writer
co_operators: []
source_url: https://lucumr.pocoo.org/2026/9/14/interpreting-pangram/
source_type: essay
source_title: "Interpreting Pangram"
source_date: 2026-09-14
captured_date: 2026-09-15
domain: [ai-native, engineering]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: case-study
score: { originality: 4, specificity: 4, evidence: 3, transferability: 3, source: 4 }
tier: B
related: [ins_ronacher-reasoning-traces-as-text]
raw_ref: ""
---

# AI detectors score LLM structural artifacts that persist through human editing, not the human-authored words themselves

## Claim
AI detection tools score the structural patterns LLMs leave in scaffolding and outlines; a writer who uses an LLM for structure and then edits the content will still receive a high AI score on those tools.

## Mechanism
AI detectors like Pangram analyze statistical properties of text: word entropy, sentence complexity variance, hedge density, clause parallelism. LLMs produce characteristic patterns in these dimensions regardless of what the content says. When a human uses an LLM to generate the structural scaffold (headings, bullet outlines, paragraph templates) and then writes their own words into those slots, the structural pattern persists in the final text. The detector fires on the inherited scaffold signature, not on the human-authored content. The tool is effectively measuring "was an LLM involved in any stage of production?" not "is this text human-written?"

## Conditions
Holds when: a writer used an LLM to generate structure (outline, bullet templates, section headers) before writing their own content into it. The LLM's contribution is structural rather than lexical.

Fails when: the writer rewrites structure entirely from scratch after using the LLM for content suggestions. When LLM use was limited to fact-checking, synonym lookup, or grammar review with no structural output.

## Evidence
Ronacher wrote:

> "if you have ever used an LLM as a writing assistant, you will have probably noticed that it claims your posts 100% AI, even though you don't feel like they are."

He named the mechanism:

> "if you rely on an LLM to give your text structure, it will score badly on Pangram even if you do plenty of edits over it."

## Signals
- Writers who use LLMs for outline generation score high AI even on heavily edited final drafts.
- Writers who use LLMs only for word-level suggestions with no structural output score lower.
- Rewriting the document's structural organization (reordering sections, splitting or merging paragraphs) reduces the AI score more than rewriting individual sentences.

## Counter-evidence
Detectors like Pangram may be designed to measure exactly this: LLM involvement at any stage of production, including structural generation. From a policy standpoint, flagging LLM-scaffolded work as AI-generated may be the intended behavior, not a false positive. The claim that the detector is "wrong" depends on a contested definition of AI-generated content.

## Cross-references
- Related to `ins_ronacher-reasoning-traces-as-text`: LLM text carries statistical signatures that persist across reformatting; this card extends that observation to structural scaffolding specifically.
