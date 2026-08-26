---
id: ins_tunguz-english-as-software-grammar
operator: Tomasz Tunguz
operator_role: General Partner, Theory Ventures
co_operators: []
source_url: https://www.tomtunguz.com/previously-unmanufacturable/
source_type: essay
source_title: "Previously Unmanufacturable"
source_date: 2026-08-19
captured_date: 2026-08-26
domain: [ai-native, product]
lifecycle: [ai-workflow-tooling, strategy]
maturity: frontier
artifact_class: case-study
score: { originality: 4, specificity: 3, evidence: 3, transferability: 4, source: 4 }
tier: B
related: [ins_tunguz-agent-24h-sleep-cycle, ins_tunguz-intelligence-per-watt]
raw_ref: ""
---

# AI converts English into a universal interface for grammar-heavy software

## Claim
Every domain software tool has its own grammar. The historical barrier to using that software's full capability was grammar acquisition, not intelligence. AI agents remove that barrier by translating English intent into application-specific syntax, on demand, for any tool with sufficient documentation.

## Mechanism
CAD tools, Figma, Salesforce, and Photoshop are all powerful precisely because they encode a precise grammar. That grammar creates a steep learning curve: frames and constraints in Figma, accounts and opportunity stages in Salesforce, toolpaths and tolerances in CAD. Historically, the skill was in learning and operating the grammar, not in the design itself.

> "English is becoming a universal API"

AI agents close the grammar gap by sitting between the user's English description and the software's native syntax. The user expresses intent. The agent translates it. The software executes it. The expertise required is no longer interface mastery but the ability to describe intent clearly and evaluate the agent's output.

This inverts the product design calculus. Complexity should now be optimized for agents, not users. The dependency becomes documentation: an agent needs a complete, accurate schema to translate correctly. Thin or ambiguous documentation becomes the first failure point, before UI complexity.

Tunguz illustrates this with Yana Welinder, who used Codex to operate CAD software she had no prior training in. She described the design she wanted in natural language. The AI translated it into CAD grammar. A fabricator who reviewed the output called the resulting dress design previously unmanufacturable, meaning the design exceeded what could have been produced by a non-expert using the software directly.

## Conditions
Holds when: the target software has comprehensive documentation and a well-defined grammar the agent can learn from. The more complete the documentation, the more reliably the agent translates intent.

Fails when: the software relies on undocumented conventions, visual judgment, or proprietary tribal knowledge that does not translate cleanly into language.

## Evidence
Tunguz published this on August 19, 2026, using Yana Welinder's CAD dress design as a primary case study. The post does not include quantitative data. The newsletter footer notes "Read by 150k+ founders & operators" as an audience signal, not a data point in the claim. The argument rests on a single case study and Tunguz's reasoning about the mechanism.

## Signals
- A non-expert user produces an output at the level previously requiring specialist training.
- Documentation quality gaps become the first visible failure mode when an agent operates the software, before UI friction does.
- User support tickets shift from "how do I do X in the interface" toward "the agent did the wrong thing because it misread the schema."

## Counter-evidence
Expert judgment does not disappear at the edges. The skill shifts from interface mastery to systems architecture: knowing which problems can be described in English and delegated versus which require depth in the software's specific domain. A single case study does not establish the generalization across all grammar-heavy software. Documentation gaps are also common precisely in the most complex and specialized tools, which limits where this currently works.
