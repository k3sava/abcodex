---
id: ins_willison-specialized-parser-stdlib-bottleneck
operator: Simon Willison
operator_role: Co-creator of Django; creator of Datasette
co_operators: []
source_url: https://simonwillison.net/2026/Nov/8/sqlite-parse-number-c-vs-rust/
source_type: essay
source_title: "parse_number() as a SQLite extension: C vs Rust"
source_date: 2026-11-08
captured_date: 2026-11-09
domain: [engineering, ai-native]
lifecycle: [ai-workflow, process]
maturity: applied
artifact_class: case-study
score: { originality: 3, specificity: 5, evidence: 4, transferability: 3, source: 5 }
tier: B
related: [ins_willison-local-weight-interpretation]
raw_ref: ""
---

# When input constraints are known, a narrow parser beats the standard library regardless of language

## Claim
A hand-tuned parser written for specific, stable input constraints will outperform a general-purpose standard library function, independent of the programming language used.

## Mechanism
Standard library parsing functions are written to handle every possible input correctly. That coverage costs time per parse. When input constraints are known and stable, a custom fast path skips all the branching for impossible cases. Willison's first C implementation used strtod() for decimal parsing. The Rust version was faster. After asking Claude to write a narrow decimal parser matched to the actual input format, the C implementation beat both Rust versions by roughly 2x. The bottleneck was not C vs. Rust. It was whether the parsing code matched the actual input shape.

## Conditions
Holds when: input constraints are fully known, stable, and can be formally described. A fuzz test against a reference implementation confirms correctness.

Fails when: inputs are genuinely unbounded, requirements change frequently, or the custom parser must be maintained across team rotations. A narrow parser for the wrong spec will produce incorrect results, and the standard library is harder to get wrong.

## Evidence
Willison's benchmark on a SQLite parse_number() extension, Nov 8, 2026:

- Optimized C implementation (narrow decimal parser written by Claude): 16-19 ns per row
- Rust versions: ~32 ns per row (roughly 2x slower)
- First C version using strtod(): slower than Rust

Binary size also differed: ~14 KB (C) vs ~300 KB (Rust). All three implementations were verified correct against 8 million fuzz-generated inputs.

The critical variable was not language choice but which parsing routine handled decimal inputs.

## Signals
- Performance-sensitive parsing code where the input format is well-specified.
- Cases where language benchmarks show counterintuitive results: the library function, not the language, may be the bottleneck.
- Native extension work where binary size matters alongside throughput.

## Counter-evidence
The 2x speedup depends entirely on the gap between general-purpose and narrow parsing. For inputs that genuinely require full generality, a custom parser offers no advantage and adds maintenance cost. Willison's fuzz suite confirmed correctness, but most teams skip the fuzz step, increasing the risk of shipping a narrow parser that silently fails on edge cases it was never designed to handle.

## Cross-references
- `ins_willison-local-weight-interpretation`: Willison's method across both cards is the same: test a capability, measure honestly, resist overclaiming, and use AI assistance as a targeted tool within the experiment rather than as the subject of the experiment.
