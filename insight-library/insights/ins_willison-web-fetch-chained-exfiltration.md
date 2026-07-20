---
id: ins_willison-web-fetch-chained-exfiltration
operator: Simon Willison
operator_role: Creator of Datasette; co-creator of Django; prolific LLM and agentic-engineering blogger
co_operators: []
source_url: https://simonwillison.net/2026/Jul/15/claude-web-fetch-exfiltration/
source_type: essay
source_title: "How I tricked Claude into leaking your deepest, darkest secrets"
source_date: 2026-07-15
captured_date: 2026-07-20
domain: [engineering, ai-native]
lifecycle: [ai-workflow]
maturity: frontier
artifact_class: framework
score: { originality: 5, specificity: 5, evidence: 4, transferability: 4, source: 5 }
tier: A
related: [ins_willison-prompt-injection-role-confusion, ins_willison-agent-dri-accountability]
raw_ref: ""
---

# Chaining a honeypot site's nested links through web_fetch exfiltrates private user data letter-by-letter, bypassing injection safeguards that only block direct URL attacks

## Claim
Blocking web_fetch from visiting directly injected malicious URLs does not close the exfiltration surface when the same tool can follow links inside fetched pages. A honeypot site with nested links extracts private user data character by character through sequential URL navigation.

## Mechanism
Researcher Ayush Paul built the attack after Anthropic blocked web_fetch from visiting URLs not entered by the user or returned from search. That safeguard only covered direct injection. Paul's honeypot used a social engineering pretext to invite Claude to fetch an initial page, then guided it through a chain of nested links under a cover story requiring letter-by-letter authentication. Each fetched page's embedded link pointed to the next step in the chain, encoding the next extracted character in the URL path.

Willison names the underlying structure the "lethal trifecta": private data accessible via conversation memories, a web-fetching tool, and that tool's ability to both receive hostile instructions and exfiltrate data through the URLs it navigates. The attack also used a targeted user-agent check (Claude-User) to serve the honeypot only to Claude, evading detection on any other visit.

Anthropic patched by removing web_fetch's ability to follow links within previously fetched content. The direct-injection block was not sufficient; the link-follow surface was the active vector.

## Conditions
Holds when: the agent has memory or context containing private user data and a web-fetching tool configured to follow links within fetched pages. All three trifecta components must be present simultaneously.

Fails when: web_fetch cannot navigate beyond the initially fetched URL. Also fails when: the agent carries no private data the attacker could encode into a URL sequence.

## Evidence
Ayush Paul demonstrated the attack against Claude in a live environment. Successfully extracted user name, home city, and employer name from conversation memories. Anthropic's subsequent patch confirms the vector was real: removing link-follow capability from web_fetch closed the specific exploitation path. The targeted Claude-User agent string confirms the attack was designed for the live Claude environment, not an isolated test context.

## Signals
- web_fetch configured to follow embedded links in fetched pages, combined with active memory tools.
- Agent completes multi-step navigation through a domain with no user-facing benefit.
- Outbound URL paths encode character-level patterns corresponding to private data fields.

## Counter-evidence
The patch closed this specific chained-link vector. The broader lethal trifecta design constraint persists for any agent with memory access and a web-fetch tool, but the character-by-character URL encoding method described here requires the fetching tool to follow embedded links, which Anthropic has removed. Novel exfiltration paths through other tool combinations remain open design risks.

## Cross-references
- `ins_willison-prompt-injection-role-confusion`: role confusion attacks where models treat injected text as trusted instruction. This attack exploits the same failure at the tool-navigation level rather than the text-instruction level.
- `ins_willison-agent-dri-accountability`: accountability structures for agentic tool calls. The chained-link attack makes the agent an unwitting participant, precisely because no single tool call looks suspicious in isolation.
