---
id: ins_eric-buy-to-learn-build-to-keep
operator: Mihail Eric
operator_role: Adjunct Professor, Stanford University (CS146S); Head of AI, Monaco
co_operators: []
source_url: https://latent.space/p/cs146s
source_type: podcast
source_title: "CS146S: The Modern Software Developer with Mihail Eric"
source_date: 2026-11-08
captured_date: 2026-11-19
domain: [agentic-coding, ai-native]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 3, transferability: 5, source: 3 }
tier: B
related: [ins_eric-comprehension-pace-output, ins_eric-spec-choke-human-advantage]
raw_ref: ""
---

# Buy AI tools first to learn the problem space, then build only when gaps are real

## Claim
When a team is evaluating AI tooling, the right sequence is to buy first and build only after gaining domain understanding through real use; the governing rule is "buy to learn and you build to keep."

## Mechanism
Purchasing commercial tools delivers rapid, low-commitment exposure to what agents can and cannot do. Teams that jump to building before understanding the domain often build the wrong thing or duplicate work that existing tooling already handles. By the time a team has used enough tools to identify a genuine gap, they also know whether an in-house solution is worth the maintenance cost. Eric applies this at Monaco: the team bought coding tools first, converged on Devin for code review through sustained use, and built its own agent workspaces only after finding no product on the market covered that specific need.

## Conditions
Holds when: AI tooling markets are maturing rapidly, so a gap today may be covered by a commercial product within months. Fails when: the use case is so domain-specific that no commercial product is a reasonable starting point, or when regulatory or security constraints prevent adoption of third-party tools entirely.

## Evidence
Eric described the Monaco decision-making process at the Latent Space "One Million AI Engineer Special" in November 2026. His stated rule was "buy to learn and you build to keep." The team started with commercial products, converged on Devin for code review ("we still use Devon because we've actually still find a lot of value in how the system's been built"), and built agent workspaces internally when they "felt that there was no like mature offering out there" and when "it just made more sense to kind of build this out internally."

Quotes are from an auto-generated Latent Space podcast transcript and may contain minor transcription errors.

## Signals
- A team builds an internal tool only to find a commercial product launched six months later that covers the same need.
- The team's internal build benefits directly from lessons learned during prior commercial tool evaluations.
- The team can name the specific limitations of commercial tools that justify building in-house.

## Counter-evidence
In fast-moving markets, buying to learn can be slower than building a simple proof of concept. Some engineering teams learn faster by building than by using. Eric's rule assumes a mature commercial market to buy from. At the frontier of AI tooling, that market may not yet exist for a given use case.

## Cross-references
- `ins_eric-comprehension-pace-output`: comprehension as prerequisite for reliable tool evaluation
- `ins_willison-external-sandbox-pattern`: an example of building something that fills a genuine gap in the commercial market for coding agent safety
