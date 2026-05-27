---
operator: "Simon Willison"
lane: "prompt-engineering-craft"
date: 2026-05-27
source_url: "https://simonwillison.net/2026/May/21/datasette-agent-2/"
source_type: "blog"
title: "Release: datasette-agent 0.1a3"
published_at: "2026-05-21"
---

Simon Willison shipped three Datasette Agent releases on May 21 and two more on May 24. The notable change in the May 21 alpha: improved handling when SQL results are truncated in the agent's context window. The data table still renders for the user even when the agent cannot see the full result. A small fix. The pattern matters more than any individual release: he ships one thing at a time, each as its own named version, each documented on his blog.

For substrate, this is the build model worth following. Not a monolithic agent platform, but a set of composable plugins. Each plugin is its own entry point for discovery and its own testable unit. Willison shipped five releases in four days. That pace is only possible when scope is small. For Innie, oolala, and any substrate tool Kesava builds: ship one capability, name it, document it, let it stand alone before bundling it with anything else.
