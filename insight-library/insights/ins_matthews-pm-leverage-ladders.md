---
id: ins_matthews-pm-leverage-ladders
operator: Colin Matthews
operator_role: AI training specialist; founder, PM AI Academy
co_operators: []
source_url: https://www.lennysnewsletter.com/p/how-top-pms-increase-their-leverage
source_type: essay
source_title: "How Top PMs Increase Their Leverage with AI"
source_date: 2026-06-30
captured_date: 2026-07-07
domain: [pmm, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 4, source: 3 }
tier: B
related: []
raw_ref: ""
---

# PM output compounds through three AI adoption ladders, each rung delivering an order of magnitude more than the one below

## Claim
Product managers who structure AI adoption as three distinct ladders (personal output, product shipping, repeatable systems) capture compounding output gains because each rung shifts work from manual execution to autonomous delegation at a higher output ratio.

## Mechanism
Each ladder rung shifts who or what does the work. Personal ladder: text generation (PM writes with AI) gives way to artifact creation (AI builds the artifact from a brief) gives way to full workflow automation via MCP connectors (AI completes tasks end-to-end by reading from and writing to live systems such as analytics, tickets, and design tools). Product ladder: web prototypes give way to code prototypes against the real codebase give way to AI agents submitting pull requests directly. Systems ladder: winning workflows get locked as reusable skills so the next similar task costs near zero. The compounding effect comes from collapsing the coordination overhead that previously consumed most PM time.

## Conditions
Holds when: the PM's workflows involve structured data sources connectable via MCP. The engineering team has created a lightweight prototype repo with real UI components and mock data. The PM is willing to invest in prompt craft and agent task specification.
Fails when: the team's data and tools are not accessible to AI via structured connectors. When verification time for agent output exceeds the time saved by automation, higher rungs create net overhead rather than net gain.

## Evidence
Colin Matthews, writing in Lenny's Newsletter and reporting training over 30,000 PMs at companies including OpenAI, Google, Stripe, Figma, and Microsoft:

> "Today, the best PMs at the best companies are prototyping with real code, querying data conversationally with MCP, confidently running coding AI agents, and finding countless ways to increase their leverage with AI."

> "As you ascend each ladder rung, you get an order of magnitude more leverage."

On the top rung of the personal ladder (MCP connector integration):

> "It's really easy to do, and once you create this connection, you'll never have to touch it again."

On locking a workflow as a reusable skill:

> "Lock in the workflow by creating a skill — just ask your LLM to create one in the same chat."

On the current state of leading PMs:

> "As a PM, it does not make sense to spend time being a worse engineer than the rest of your team."

## Signals
- A PM completes a full user-research synthesis task without opening a BI dashboard or writing SQL, by querying analytics via an MCP connector.
- A prototype built by a PM against the real codebase is ready for engineering review within hours rather than days.
- A workflow that previously took 3 hours weekly runs in 15 minutes via a saved MCP skill.

## Counter-evidence
The "order of magnitude per rung" claim is a practitioner assertion, not an empirically measured result. The systems ladder section was partly behind a paywall and the full argument was not verified. MCP connector setup requires engineering cooperation to expose the right data surfaces, which is non-trivial in many orgs. Not all PM workflows decompose neatly into the three-ladder structure.

## Cross-references
- (none in current corpus with direct overlap)
