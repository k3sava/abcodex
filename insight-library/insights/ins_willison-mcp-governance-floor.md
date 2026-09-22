---
id: ins_willison-mcp-governance-floor
operator: Simon Willison
operator_role: Creator of Datasette; co-creator of Django
co_operators: []
source_url: https://simonwillison.net/2026/Sep/20/hn-49779718/
source_type: post
source_title: "Comment on: MCP was always a bad idea?"
source_date: 2026-09-20
captured_date: 2026-09-22
domain: [agent-frameworks, agentic-coding]
lifecycle: [ai-workflow, infrastructure]
maturity: applied
artifact_class: framework
score: { originality: 3, specificity: 4, evidence: 2, transferability: 4, source: 4 }
tier: B
related: [ins_willison-stateless-mcp, ins_willison-ai-product-capability-opacity]
raw_ref: ""
---

# MCP's value is governance for constrained agent deployments, not capability for autonomous ones

## Claim
The Model Context Protocol is not designed to make agents more capable. It is designed to make controlled deployments governable: giving organizations service access control, auth abstraction, user-facing connection UI, and strong audit logging that autonomous terminal agents don't need but enterprise-constrained deployments do.

## Mechanism
A terminal agent with full shell access operates with unrestricted trust. It can call anything, read anything, and authenticate directly against API keys stored in the environment. No protocol is needed because no constraint is imposed. The moment an organization needs to constrain an agent, four governance needs emerge: which external services it can call, how it authenticates without touching the API keys directly, how users connect and authorize further services, and how every action is logged for audit. MCP provides a standard layer that satisfies all four. The protocol is not the capability; it is the governance wrapper around it.

## Conditions
Holds when: the deployment context imposes risk tolerance, security policy, or compliance constraints on the agent. Enterprise environments, regulated industries, and multi-tenant platforms fall in this category.

Fails when: the agent runs in a fully trusted environment with no authorization boundary (developer laptop, personal workflow). In that context, MCP adds protocol overhead with no governance benefit.

## Evidence
Willison draws the contrast between a YOLO terminal agent and a constrained enterprise deployment:

> "If you want to operate something that's less YOLO than that, you'll find yourself wanting [these four capabilities]"

> "Control over exactly which external services it can access"

> "A way to handle authentication that doesn't allow the agent to directly access API keys"

> "A sensible UI to allow users to connect and authenticate further services"

> "Strong audit logging for what's going on"

> "MCP makes all of that so much easier to provide"

The argument is structural: the four governance needs are not optional when operating in a constrained context; they are the preconditions for deploying an agent at all. MCP satisfies them through standardization rather than custom per-deployment implementation.

## Signals
- An organization that cannot tell auditors which external services an agent called, or cannot produce a log of what the agent did, cannot operate that agent in any regulated context.
- MCP adoption is a leading indicator that a deployment is constrained by governance requirements, not that it needs more capability.
- Teams building YOLO terminal agents skip MCP because they have no governance floor to satisfy.

## Counter-evidence
MCP as a protocol has faced criticism for adding complexity without proportional benefit. Short MCP commentary from a single author is not a controlled study. Willison is responding to skepticism about MCP's value, so the argument is inherently framed to defend the protocol. The four governance capabilities he names can also be implemented through custom in-house solutions, and some organizations prefer that to adopting a third-party protocol standard.

## Cross-references
- `ins_willison-stateless-mcp`: Willison's earlier documentation of MCP 2.0's stateless HTTP transport design, covering the transport-layer redesign rather than the governance use case.
