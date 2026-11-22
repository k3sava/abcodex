---
id: ins_willison-python-browser-service-worker
operator: Simon Willison
operator_role: Creator of Datasette; co-creator of Django
co_operators: []
source_url: https://simonwillison.net/2026/Nov/17/datasette-lite/
source_type: essay
source_title: "Running the full server-side Datasette Python app in the browser with service workers and Pyodide"
source_date: 2026-11-17
captured_date: 2026-11-22
domain: [agentic-coding-dev-tooling]
lifecycle: [architecture, developer-experience]
maturity: applied
artifact_class: framework
score: { originality: 4, specificity: 5, evidence: 4, transferability: 4, source: 4 }
tier: B
related: [ins_willison-external-sandbox-pattern, ins_willison-external-sandbox-agent-architecture]
raw_ref: ""
---

# Any SQLite-backed Python app can run fully in the browser by routing requests through a service worker to a Pyodide web worker

## Claim
Any Python application backed by SQLite can run as a full client-side demo by using a service worker to intercept HTTP requests and route them to a Pyodide instance inside a web worker. The result is indistinguishable from the real server-side app.

## Mechanism
Pyodide cannot safely live in a service worker because service workers do not maintain state beyond roughly 30 seconds. Instead, the service worker intercepts all requests under a random per-tab URL prefix, forwards them to a parent page, which routes to a dedicated web worker holding a persistent Pyodide instance. Because the routing preserves the HTTP request-response contract, all browser behavior works: static files load, script tags execute, CSS applies, and navigation works without special handling. Each browser tab gets an isolated session via its own random prefix, so multiple tabs with different plugins or databases coexist without interference. Configuration arrives via URL query parameters: install plugins from PyPI, load a SQLite database from a CORS-enabled URL, pin a Datasette version. The pattern requires no server.

## Conditions
Holds when: The app's primary datastore is SQLite and all Python dependencies can be compiled to WebAssembly. C and Rust extensions that previously blocked this approach can now be compiled to Pyodide-compatible WebAssembly.
Fails when: The app requires PostgreSQL, MySQL, or other databases not yet available in WebAssembly. Fails when the app relies on filesystem access or inter-process communication outside the browser sandbox.

## Evidence
Willison shipped Datasette Lite after a May 2026 AI research prototype, reaching a state where the browser version is "almost indistinguishable from the real server-side application." He added 163 pysqlite3 WebAssembly wheels to cover specific SQLite versions, using the capability to debug a json_object behavior difference between SQLite 3.54.0 and 3.54.1. He states the architecture is not Datasette-specific.

> "Nothing about how Datasette Lite works is unique to Datasette."

## Signals
- A Python demo runs entirely from a URL with no server provisioning.
- Multiple browser tabs each load different plugins without conflicting state.
- Bug reproductions from users ship as a URL with query parameters rather than a git checkout and local setup.

## Counter-evidence
PostgreSQL and MySQL in WebAssembly remain underdeveloped; most production Python apps use one of those. The pattern also requires the full Python dependency tree to be compilable to WebAssembly, which is nontrivial for apps with native extensions that have not yet been ported.

## Cross-references
- `ins_willison-external-sandbox-pattern`: Willison's earlier work on separating agent execution from sandboxed code, also motivated by security and isolation concerns.
- `ins_willison-external-sandbox-agent-architecture`: Architecture variant with interchangeable sandbox backends.
