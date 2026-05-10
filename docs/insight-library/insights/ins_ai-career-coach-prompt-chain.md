---
id: ins_ai-career-coach-prompt-chain
operator: Nishchal Dua
operator_role: VP Marketing, inFeedo AI
source_url: https://www.linkedin.com/feed/update/urn:li:activity:7297177378215055362
source_date: 2026-04-10
captured_date: 2026-05-02
source_type: thread
source_title: 7 prompts to use AI as your personal career coach
domain: [ai-native, hiring]
lifecycle: [ai-workflow]
maturity: applied
artifact_class: workflow
score: { originality: 2, specificity: 4, evidence: 2, transferability: 5, source: 3 }
tier: C
related: []
raw_ref: raw/linkedin/pmm-mining/linkedin-saved-posts-2026-04-10.md
---

# A 7-step AI prompt chain beats one-shot resume rewrites for job search

## Claim
Sequenced prompts (load profile → analyze JD/company → score alignment → build attack plan with strengths/weaknesses table → generate tailored resume + cover letter → write recruiter outreach → interview prep) compound across applications because earlier steps feed later steps with retained context. A "master resume" with modular sections lets the candidate swap modules per role without redoing the chain.

## Mechanism
Each step narrows the model's context to the candidate-role pair before generation. By the time the resume is rewritten, the model has both the candidate's full background and the JD's actual requirements in working context, so the output is targeted instead of generic. The modular master resume turns the chain into a reusable substrate.

## Conditions
Holds when:
- The candidate can run the full chain per role (10-15 minutes).
- The chosen LLM holds enough context across the chain.

Fails when:
- Volume applying ("spray-and-pray") is the strategy, chain ROI dies under quantity.
- The candidate hasn't done step 1 (loading profile + resume into the model with intent).

## Evidence
> "Applying to multiple roles? Ask ChatGPT to create a 'master resume' with modular sections. Swap them in/out basis need."

· Nishchal Dua, LinkedIn, 2026-04-10 (scrape date)

## Signals
- Application-to-callback rate rises when chain is used vs. cold sends.
- Candidate maintains a master resume doc with explicit module tags.

## Counter-evidence
No opposing view in current corpus.

## Cross-references
- (none in current corpus)
