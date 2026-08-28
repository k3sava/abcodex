---
id: ins_shipper-taste-agent-hill-climb
operator: Dan Shipper
operator_role: CEO and co-founder, Every
co_operators: []
source_url: https://www.platformer.news/every-dan-shipper-interview-ai-writing/
source_type: post
source_title: "The website that created an AI clone of its editor in chief"
source_date: 2026-08-20
captured_date: 2026-08-28
domain: [ai-native, founder-operator]
lifecycle: [ai-workflow, process-cadence]
maturity: applied
artifact_class: workflow
score: { originality: 4, specificity: 4, evidence: 3, transferability: 4, source: 3 }
tier: B
related: [ins_shipper-org-capability-ai-bottleneck]
raw_ref: ""
---

# Building a copy-editing agent from 30,000 historical edits and hill-climbing the prompt against all past decisions encodes durable expert taste

## Claim
Encoding an expert's taste into an AI agent requires three steps: collect historical decisions at scale, build an initial prompt from those decisions, then back-test the prompt exhaustively against all past cases to hill-climb it toward accuracy. The resulting agent improves continuously as the expert corrects its output.

## Mechanism
A large dataset of historical decisions (edits, corrections, choices) captures the expert's actual taste: what they caught, what they changed, and how they changed it. The prompt built from this data tries to replicate those decisions. Hill-climbing, which back-tests the prompt against every previous document and scores it against what the expert actually did, iterates the prompt toward closer approximation of their judgment. Each new correction the expert makes after deployment becomes fresh training signal, tightening the loop further. The agent does not generalize from abstract principles; it interpolates from demonstrated choices across a large history. This makes it domain-specific but also domain-accurate.

## Conditions
Holds when: The domain generates a high volume of repeated, similar decisions by the same expert over time. The expert's decisions are consistent enough to generalize. There is a clear signal for scoring prompt quality, such as matching past decisions on held-out documents.
Fails when: The expert's taste changes faster than the hill-climbing loop can adapt. The decision volume is too low to build a meaningful dataset. Decisions are highly contextual and idiosyncratic, making generalization from past choices unreliable.

## Evidence
Dan Shipper describes building this system for Every's editor in chief, Kate Lee, using three years of her copy edits.

> "I collected a dataset of 30,000 of her historical edits, used that to make a prompt, and then back-tested the prompt on all of the previous documents to hill-climb and make it better and better."

The continuous improvement mechanism is self-updating:

> "It gets better automatically over time: as it makes edits, and then she goes in and makes more edits, it automatically learns 'here are the things I missed.'"

The goal was to scale her judgment across the organization:

> "allow her to get some of that taste and viewpoint and set of skills into a little tool that lets her spread it throughout more of the org"

## Signals
- The agent's suggestions match what the expert would have caught on unseen documents.
- The correction rate per document falls as the hill-climbing loop runs more iterations.
- The expert reviews fewer total corrections over time without loss of output quality.

## Counter-evidence
The method conflates consistency with correctness. If the expert applied judgment inconsistently across the 30,000-edit period, or if their taste evolved over that time, the prompt averages across those inconsistencies rather than capturing current taste. The approach also requires the expert to remain the quality oracle after deployment, which limits how far it can scale beyond a single person's bandwidth.

## Cross-references
- `ins_shipper-org-capability-ai-bottleneck`: Shipper's earlier argument that the bottleneck for AI value is organizational structure, not model capability. This card shows one concrete tactic for building the organizational layer: encoding individual expert judgment into a scalable agent.
