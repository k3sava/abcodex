---
id: ins_osika-domain-expert-builder
operator: Anton Osika
operator_role: Co-founder and CEO, Lovable
co_operators: []
source_url: https://thenextweb.com/news/lovable-anton-osika-dreamforce-way-past-vibes-security
source_type: essay
source_title: "'We're way past vibes': Lovable's Anton Osika on who should build software"
source_date: 2026-09-16
captured_date: 2026-09-19
domain: [ai-native, founder-operator]
lifecycle: [ai-workflow, strategy-bets]
maturity: frontier
artifact_class: framework
score: { originality: 4, specificity: 4, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_ambition-filtered-job-ads, ins_generalists-over-specialists-ai-native]
raw_ref: ""
---

# People closest to the problem should build their own software, not engineers with certifications

## Claim
AI-assisted development has matured to the point where domain expertise and proximity to the problem matter more than engineering credentials. The people best placed to build software are those who understand the work, not those who understand code.

## Mechanism
Software built by domain experts encodes real workflow knowledge from the start, without the translation loss of handing requirements to engineers. When AI handles the code generation, the remaining bottleneck is knowing what to build and whether it works. Domain experts own both. They can specify what "correct" looks like and detect errors that an engineer, lacking context, would not catch. The result is faster iteration and higher fit between the software and the actual need.

## Conditions
Holds when: the task being automated is well-understood by a non-engineer domain expert, and the AI platform provides enough abstraction to handle code quality and security. The output needs to match a real operational need, not arbitrary technical requirements.

Fails when: the software requires deep systems knowledge, integrates with complex infrastructure, or involves performance constraints the domain expert cannot evaluate. Engineering expertise remains necessary at the systems layer.

## Evidence
Osika notes that 55% of Lovable users have 11 or more years of work experience. These are not beginners experimenting; they are seasoned operators applying AI tools to problems they understand well. He points to 300 Nordic McDonald's locations running Lovable-built incident management systems as a case where operational expertise, not engineering expertise, drove the build. He makes the claim directly:

> "People with expertise and close to the problem, they should be the one building software, not people with certain types of certifications."

On enterprise security, Lovable added automatic vulnerability scanning on every change, data access controls tied to user permissions, and a Lloyd's insurance policy covering AI risk. These address the objection that domain-expert-built software lacks security rigor.

## Signals
- Your internal tools iteration cycles shorten when the tool owner builds the tool rather than specifying it to engineering.
- Domain experts who build their own dashboards or workflow tools report higher fit with their actual work than tools built for them by engineers.
- Teams that adopt no-code or AI-build platforms see the largest output gains from their most experienced, not their most junior, staff.

## Counter-evidence
The claim rests heavily on the platform handling security and code quality well. Earlier generations of no-code tools produced brittle, insecure, unmaintainable systems. Whether AI-generated code at Lovable's current level is production-safe at scale is contested. Fabian Hedin, Lovable's CTO, noted that engineers retain the ability to modify the generated code with traditional tools. The framing that "people with certifications" should not build software understates the value of systems-level engineering for complex integrations.

## Cross-references
- `ins_ambition-filtered-job-ads`: Osika's companion view on how Lovable's hiring filters for operators willing to build at the frontier.
- `ins_generalists-over-specialists-ai-native`: the team design principle that follows when the software-builder role expands beyond engineers.
