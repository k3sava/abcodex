---
id: ins_van-der-lee-rockettrace-agent-trace
operator: Antoine van der Lee
operator_role: Indie iOS founder; creator of SwiftLee and RocketSim
co_operators: []
source_url: https://www.avanderlee.com/xcode/introducing-rockettrace-using-xcode-instruments-with-ai-agents/
source_type: essay
source_title: "Introducing RocketTrace: Using Xcode Instruments with AI Agents"
source_date: 2026-10-05
captured_date: 2026-10-12
domain: [engineering, ios]
lifecycle: [ai-workflow, process-cadence]
maturity: frontier
artifact_class: case-study
score: { originality: 4, specificity: 5, evidence: 3, transferability: 3, source: 4 }
tier: B
related: [ins_van-der-lee-mvvm-defer-abstraction]
raw_ref: ""
---

# Local preprocessing of Xcode trace files lets AI agents find 58% more performance issues at one-sixth the token cost

## Claim
Agents analyzing raw Xcode Instruments `.trace` files waste tokens reading low-information binary-adjacent output and miss most Swift Concurrency and SwiftUI state issues, which appear in trace lanes that are hard to parse unstructured. A local preprocessing layer that ranks findings before the agent reads them raises issue detection from 60% to 95% of planted problems while cutting token consumption approximately six times.

## Mechanism
Xcode Instruments trace files contain performance data across CPU usage, hangs, Swift Concurrency, SwiftUI rendering, hitches, and launch times. The raw export format is not designed for LLM consumption. An agent reading the raw file spends its context budget on repetitive low-signal rows rather than the ranked anomalies that matter.

Van der Lee's pattern inverts the order: a local process reads the full trace first, applies 42 detection rules across six categories, ranks findings by measured impact, and produces a short JSON envelope with an `ok` field and layered verbosity options (`--brief`, `--compact`, `--finding <id>`). The agent reads only the structured output, spending tokens on anomalies rather than raw trace rows.

The design also avoids the MCP schema overhead problem. An MCP server injects every available tool schema into the agent's context at session start. A CLI combined with an agent skill loads nothing until invoked; the skill header is a few lines, and the full reference text loads only when triggered. For a context-sensitive debugging loop, that difference compounds across many tool calls.

Benchmark results (one trace file, three runs each, medians):
- Claude Opus 5.5 without local processing: 12 of 20 planted issues found, 1,765,732 tokens, 9 minutes 54 seconds.
- Claude Opus 5.5 with local processing: 19 of 20 planted issues found, 312,424 tokens, 4 minutes 45 seconds. That is 5.7x fewer tokens.
- GPT-5.6 Sol without local processing: 6 of 20 planted issues found, 2,071,877 tokens, 11 minutes 45 seconds.
- GPT-5.6 Sol with local processing: 14 of 20 planted issues found, 322,383 tokens, 5 minutes 7 seconds. That is 6.4x fewer tokens.

Van der Lee also observed that without preprocessing, GPT-5.6 Sol read details for only the top 10 to 14 findings and skipped the rest unless prompted to continue.

## Conditions
Holds when: the performance profiling task is well-defined (find regressions in a known trace); the local preprocessing tool covers the relevant detection categories; the agent has a structured interface (CLI + skill) that loads on demand rather than at session start.
Fails when: the performance problem requires creative exploration across traces that no rule-based detector anticipates; the task is novel enough that preprocessing heuristics miss the relevant signal; the application is not iOS or macOS and the trace format is different.

## Evidence
Van der Lee published the benchmark alongside the tool launch on October 5, 2026. The trace used in the benchmark came from a small photo library app with 20 planted issues and 6 decoy findings. Van der Lee built both the tool and the benchmark, and acknowledges this is a single-trace result that does not establish performance across other apps.

Of 77 beta testers who completed at least one analysis, 49 copied an agent prompt and 21 proceeded to a fix workflow. These are adoption figures only, not measured outcomes.

## Signals
- Agent performance profiling sessions consume more than 1.5 million tokens before finding actionable results
- Swift Concurrency and SwiftUI state regressions are missed in routine agent code reviews
- Your team runs Instruments manually because agents cannot interpret its output reliably
- MCP tool schemas are loading into contexts where those tools are rarely used

## Counter-evidence
The benchmark uses a single trace from a single app, constructed by the tool's author. Results for real-world apps with more complex traces and non-planted issues may differ. Van der Lee notes RocketTrace reported 29 findings in a run covering 20 planted issues; the nature of the extra nine findings is not explained. The CLI-over-MCP argument is specific to session-start context loading; if a workflow uses the tool on every run, the amortized cost difference narrows.

## Cross-references
- `ins_van-der-lee-mvvm-defer-abstraction`: van der Lee's earlier card on deferring abstraction in SwiftUI architectures. The RocketTrace design extends the same principle: local analysis offloads structured classification from the agent's context, deferring the agent's role to judgment on pre-ranked findings rather than raw data traversal.
